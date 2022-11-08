// const button = document.querySelector('.button');
// const output = document.querySelector('.output');
// let phone_content = document.querySelector('.phone');

// button.addEventListener('click', updateOutput);

// function updateOutput() {
//     output.textContent = phone_content.value;
//     alert(phone_content.value);
// }

const minus_button = document.querySelector('.minus-button').addEventListener('click', minus);
const plus_button = document.querySelector('.plus-button').addEventListener('click', add);
const reset_button = document.querySelector('.reset-button').addEventListener('click', reset);
const random_button = document.querySelector('.random-button').addEventListener('click', random);
const submit_button = document.querySelector('.submit-button').addEventListener('click', submit);
const phone_number = document.querySelector('.phone-number')
const og_num = "1111111111"

const submit_button2 = document.querySelector('.submit-button2').addEventListener('click', submit2);
const sliderval = document.querySelector('.sliderval')

reset();

function check() {
    console.log("weeee");
}

function submit() {
    alert(phone_number.innerHTML);
}

function reset() {
    phone_number.innerHTML = og_num;
}

function add() {
    if (parseInt(phone_number.innerHTML) < 9999999999) {
        phone_number.innerHTML = parseInt(phone_number.innerHTML) + 1;
    }
}

function minus() {
    if (parseInt(phone_number.innerHTML) > 0) {
        phone_number.innerHTML = parseInt(phone_number.innerHTML) - 1;
    }
}

function random() {
    num = Math.floor(Math.random() * (9999999999 - 1000000000) + 1000000000);
    phone_number.innerHTML = num;
}

function sliderchange(val) {
    sliderval.innerHTML = val 
}

function submit2() {
    alert(sliderval.innerHTML);
}
