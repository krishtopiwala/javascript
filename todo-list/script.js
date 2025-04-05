document.addEventListener('DOMContentLoaded', function() {
    const todoInput = document.getElementById('todo-input');
    const addTaskButton = document.getElementById('add-task-btn');
    const todoList = document.getElementById('todo-list');

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(task => renderTask(task));

    addTaskButton.addEventListener('click', () => {
        let taskText = todoInput.value.trim();

        if (taskText === "") {
            return;
        }

        let newTask = {
            id: Date.now(),
            text: taskText,
            isCompleted: false
        };

        tasks.push(newTask);
        addTask();
        renderTask(newTask);
        todoInput.value = "";
    });

    function renderTask(task) {
        console.log(task);

        const li = document.createElement('li');
        li.setAttribute("data-id", task.id);

        if (task.isCompleted) {
            li.classList.add('completed');
        }

        li.innerHTML = `
            <span>${task.text}</span>
            <button>Delete</button>
        `;        

        li.addEventListener('click', (e) => {
            if (e.target.tagName === "BUTTON") {
                return;
            }
            task.isCompleted = !task.isCompleted;
            li.classList.toggle("completed");
            addTask();
        });

        li.querySelector('button').addEventListener('click', (e) => {
            e.stopPropagation();
            tasks = tasks.filter((t) => t.id !== task.id);
            li.remove();
            addTask();
        });

        todoList.appendChild(li);
    }

    function addTask() {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }
});