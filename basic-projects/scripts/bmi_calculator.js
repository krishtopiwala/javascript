const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `please give a valid height ${height}`;
    } else if (weight === '' ||weight < 0 || isNaN(weight)) {
        results.innerHTML = `please give a valid height ${height}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        // results.innerHTML = `<h3>${bmi}</h3>`;
        if (bmi < 18.6) {
            results.innerHTML = `<span>Your BMI is <b>${bmi}</b> and you are in <mark>Under Weight</mark> category</span>`;
        } else if (bmi > 18.6 && bmi < 24.9) {
            results.innerHTML = `<span>Your BMI is <b>${bmi}</b> and you are in <mark>Normal Range</mark> category</span>`;
        } else if (bmi > 24.9) {
            results.innerHTML = `<span>Your BMI is <b>${bmi}</b> and you are in <mark>OverWeight</mark> category</span>`;
        }
    }
});