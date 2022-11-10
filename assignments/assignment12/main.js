const add_button = document.querySelector('#add-button').addEventListener('click', add);
const minus_button = document.querySelector('#minus-button').addEventListener('click', minus);
const multiply_button = document.querySelector('#multiply-button').addEventListener('click', multiply);
const divide_button = document.querySelector('#divide-button').addEventListener('click', divide);
const square_button = document.querySelector('#square-button').addEventListener('click', square);
const exponent_button = document.querySelector('#exponent-button').addEventListener('click', exponent);
const submit_button = document.querySelector('#assign-12-submit').addEventListener('click', submit);
const phone_number = document.querySelector('.assign-12-phone-number');

function checkNum(num, prev_num, if_minus) {

    if (num < 0) {
        alert("the number you created is negative. resetting to 0.")
        return false;
    }

    else if (if_minus) {
        return true;
    }

    else if ((isFinite(num) == false) || (num <= prev_num)) {
        alert("the number you created is too large. resetting to 0.")
        return false;
    }
    return true;
}

function add() {
    const new_phone_number = parseInt(parseInt(phone_number.innerHTML) + 7);
    if (checkNum(new_phone_number, parseInt(phone_number.innerHTML), false) == true) {
        phone_number.innerHTML = new_phone_number;
    }
    else {
        phone_number.innerHTML = 0;
    }
}

function minus() {
    console.log("minus");
    const new_phone_number = parseInt(parseInt(phone_number.innerHTML) - 5);
    if (checkNum(new_phone_number, parseInt(phone_number.innerHTML), true) == true) {
        phone_number.innerHTML = new_phone_number;
    }
    else {
        phone_number.innerHTML = 0;
    }
}

function multiply() {
    console.log("multiply");
    const new_phone_number = parseInt(parseInt(phone_number.innerHTML) * 2);
    if (checkNum(new_phone_number, parseInt(phone_number.innerHTML), false) == true) {
        phone_number.innerHTML = new_phone_number;
    }
    else {
        phone_number.innerHTML = 0;
    }
}

function divide() {
    console.log("divide");
    const new_phone_number = parseInt(parseInt(phone_number.innerHTML) / 3);
    if (checkNum(new_phone_number, parseInt(phone_number.innerHTML), true) == true) {
        phone_number.innerHTML = new_phone_number;
    }
    else {
        phone_number.innerHTML = 0;
    }
}

function square() {
    console.log("square");
    const new_phone_number = parseInt(Math.pow(parseInt(phone_number.innerHTML),2));
    if (checkNum(new_phone_number, parseInt(phone_number.innerHTML), false) == true) {
        phone_number.innerHTML = new_phone_number;
    }
    else {
        phone_number.innerHTML = 0;
    }
}

function exponent() {
    console.log("exponent");
    const new_phone_number = parseInt(Math.pow(2, parseInt(phone_number.innerHTML)));
    if (checkNum(new_phone_number, parseInt(phone_number.innerHTML), false) == true) {
        phone_number.innerHTML = new_phone_number;
    }
    else {
        phone_number.innerHTML = 0;
    }
}

function submit() {
    num = phone_number.innerHTML;
    alert(`the phone number you submitted is: ${num}`)
    phone_number.innerHTML = 0;
}
