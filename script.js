const numberInput = document.body.querySelector("#number");
const monthInput = document.body.querySelector("#month");
const yearInput = document.body.querySelector("#year");
const cvcInput = document.body.querySelector("#cvc");
const nameInput = document.body.querySelector("#name");
const inputsContainer = document.querySelectorAll(".container")

const form = document.querySelector("form");
const button = document.querySelector('button')

const numberHTML = document.querySelector(".card-number");
const monthHTML = document.querySelector(".month");
const yearHTML = document.querySelector(".year");
const cvcHTML = document.querySelector(".cvc");
const nameHTML = document.querySelector(".card-name");
let thisYear = new Date().getFullYear();
thisYear = thisYear.toString().slice(2, 4);
thisYear = Number(thisYear) + 20;

const inputRequirements = [
    {input: nameInput},
    {input: numberInput, requirements: 'card'},
    {input: monthInput, requirements: 'date'},
    {input: yearInput, requirements: 'date'},
    {input: cvcInput, requirements: 'cvc'}
]

button.addEventListener("click", buttonSubmit);
numberInput.addEventListener("input", cardNumberChange);
monthInput.addEventListener("input", monthChange);
yearInput.addEventListener("input", yearChange);
cvcInput.addEventListener("input", cvcChange);
nameInput.addEventListener("input", nameChange);

function cardNumberChange() {
    
    if (numberInput.value.length === 0) {
        numberHTML.innerHTML = numberHTML.getAttribute("data-placeholder");  
    } else {
        numberHTML.innerHTML = numberInput.value;
    }
    //ADD WHITE SPACES EVERY 4 DIGITS using regex
    // string.value to array to splice(4) and join() together
    //only allow numbers
}

function monthChange() {
    monthHTML.innerHTML = monthInput.value;
    if (monthHTML.innerHTML > 12) {
        monthInput.value = 12;
        monthHTML.innerHTML = monthInput.value;
    }  else if (month.value.length === 0) {
        monthHTML.innerHTML = monthHTML.getAttribute("data-placeholder");
    }
}


function yearChange() {
    yearHTML.innerHTML = yearInput.value;
    if (yearHTML.innerHTML > thisYear) {
        yearInput.value = thisYear;
        yearHTML.innerHTML = yearInput.value;
    } else if (yearInput.value.length === 0) {
        yearHTML.innerHTML = yearHTML.getAttribute("data-placeholder");
    }
}

function cvcChange() {
    if (cvcInput.value.length === 0) {
        cvcHTML.innerHTML = cvcHTML.getAttribute("data-placeholder");
    } else {
    cvcHTML.innerHTML = cvcInput.value;
    }
}

function nameChange() {
    if (!nameInput.value.length) {
        nameHTML.innerHTML = nameHTML.getAttribute("data-placeholder");    
    } else {
    nameHTML.innerHTML = nameInput.value;
    }
}
// const error = document.createElement('p')
// error.classList.add('error');
// error.innerHTML = `Can't be blank`;
// error.style.display = 'block';
// const clonedError = error.cloneNode(true);

function buttonSubmit(e) {
    e.preventDefault();
    inputsContainer.forEach((inputContainer) => {
        if (inputContainer.querySelector("input").value.length === 0) {
            inputContainer.classList.add("has-error");
        }
    });
}
