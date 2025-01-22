const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
    button.addEventListener('click', function(e) {
        console.log(e);
        console.log(e.target);

        // using if else

        // if (e.target.id === "grey") {
        //     body.style.backgroundColor = e.target.id;
        // } else if (e.target.id === "black") {
        //     body.style.backgroundColor = e.target.id;
        // } else if (e.target.id === "blue") {
        //     body.style.backgroundColor = e.target.id;
        // } else if (e.target.id === "yellow") {
        //     body.style.backgroundColor = e.target.id;
        // }

        // using switch case

        switch (e.target.id) {
            case "grey":
                body.style.backgroundColor = e.target.id;
                break;
            case "black":
                body.style.backgroundColor = e.target.id;
                break;
            case "blue":
                body.style.backgroundColor = e.target.id;
                break;
            case "yellow":
                body.style.backgroundColor = e.target.id;
                break;
            default:
                console.log("Not found");
        }
    });
});