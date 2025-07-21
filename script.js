let display = document.getElementById("display");


let a = "";
let b = "";
let op = "";


function append(value) {

    if (op === "") {

        if (display.innerText === "0") {
            a = value;
        } else {
            a = a + value;
        }
        display.innerText = a;
    }

    else {
        if (display.innerText === "0") {
            b = value;
        } else {
            b = b + value;
        }
        display.innerText = b;
    }
}

function setOperator(symbol) {
    
    if (a !== "" && b === "") {
        op = symbol;
    }
}

function pressDot() {

    if (op === "") {
        a = a + ".";
        display.innerText = a;
    } else {
        b = b + ".";
        display.innerText = b;
    }
}


function toggleSign() {
    if (op === "") {
        // Multiply by -1: turns the text into a number, flips sign, back to text
        a = a * -1;
        display.innerText = a;
    } else {
        b = b * -1;
        display.innerText = b;
    }
}


function calculate() {
    let num1 = a * 1;   // "123" → 123
    let num2 = b * 1;   // "45"  →  45
    let result = 0;

    if (op === "+") {
        result = num1 + num2;
    } else if (op === "-") {
        result = num1 - num2;
    } else if (op === "*") {
        result = num1 * num2;
    } else if (op === "/") {
        result = num1 / num2;
    } else if (op === "%") {
        result = num1 % num2;
    }

    display.innerText = result;

    a = result + "";
    b = "";
    op = "";
}


function clearDisplay() {
    a = "";
    b = "";
    op = "";
    display.innerText = "0";
}
