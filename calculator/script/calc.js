const n1 = document.getElementById("num1");
const n2 = document.getElementById("num2");
const res = document.querySelector("#resultPara");
const addBtn = document.getElementById("btnAdd");
const subBtn = document.getElementById("btnSub");
const mulBtn = document.getElementById("btnMul");
const divide = document.getElementById("btnDivide");
const resetBtn = document.querySelector("#btnReset");

let getN1 = 0;
let getN2 = 0;

const reset = () => {
    n1.value = "";
    n2.value = "";
    res.classList.add("hide");
};

const result = (answer) => {
    res.classList.remove("hide");
    res.innerHTML = `<p><strong>Result: </strong> <u> ${answer} </u></p>`;
};

const additonFunction = () => {
    getN1 = Number(n1.value);
    getN2 = Number(n2.value);
    let sum = (getN1 + getN2);
    result(sum);
};

const subtractionFunction = () => {
    getN1 = Number(n1.value);
    getN2 = Number(n2.value);
    let sub = (getN1 - getN2);
    result(sub);
};

const multiplyFunction = () => {
    getN1 = Number(n1.value);
    getN2 = Number(n2.value);
    let mul = (getN1 * getN2);
    result(mul);
}

const divideFunction = () => {
    getN1 = Number(n1.value);
    getN2 = Number(n2.value);
    let divide = (getN1 / getN2);
    result(divide);
}

addBtn.addEventListener("click", additonFunction);
subBtn.addEventListener("click", subtractionFunction);
mulBtn.addEventListener("click", multiplyFunction);
divide.addEventListener("click", divideFunction);
resetBtn.addEventListener("click", reset);