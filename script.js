const numberInput = document.body.querySelector("#number");
const monthInput = document.body.querySelector("#month");
const yearInput = document.body.querySelector("#year");
const cvcInput = document.body.querySelector("#cvc");
const nameInput = document.body.querySelector("#name");

const form = document.querySelector("form");
const button = document.querySelector('button');
const cardNumberPattern = /(\d{4}\s\d{4}\s\d{4}\s\d{4})/
const cvcPattern = /(\d{3})/
const datePattern = /(\d{2})/

const numberHTML = document.querySelector(".card-number");
const monthHTML = document.querySelector(".month");
const yearHTML = document.querySelector(".year");
const cvcHTML = document.querySelector(".cvc");
const nameHTML = document.querySelector(".card-name");

let thisYear = new Date().getFullYear();
thisYear = thisYear.toString().slice(2, 4);
thisYear = Number(thisYear) + 20;

const inputsObject = [
    { input: nameInput},
    { input: numberInput, requirement: 'card'},
    { input: monthInput, requirement: 'month'},
    { input: yearInput, requirement: 'year'},
    { input: cvcInput, requirement: 'cvc'},
];

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
        numberHTML.innerHTML = cardNumberSpaceAdd(numberInput.value);
        // numberInput.value = (numberInput.value).replace(/\d{4}(?=.)/g, '$& ')
    }
    //ADD WHITE SPACES EVERY 4 DIGITS using regex
    // string.value to array to splice(4) and join() together
};
function cardNumberSpaceAdd(cardNumber) {
    let cardSpaceAdded = cardNumber.split("");
    cardSpaceAdded.splice(4, 0, " ");
    cardSpaceAdded.splice(9, 0, " ");
    cardSpaceAdded.splice(14, 0, " ");
    return cardSpaceAdded = cardSpaceAdded.join("");
}
function monthChange() {
    monthHTML.innerHTML = monthInput.value;
    if (monthHTML.innerHTML > 12) {
        monthInput.value = 12;
        monthHTML.innerHTML = monthInput.value;
    }  else if (month.value.length === 0) {
        monthHTML.innerHTML = monthHTML.getAttribute("data-placeholder");
    }
};
function yearChange() {
    yearHTML.innerHTML = yearInput.value;
    if (yearHTML.innerHTML > thisYear) {
        yearInput.value = thisYear;
        yearHTML.innerHTML = yearInput.value;
    } else if (yearInput.value.length === 0) {
        yearHTML.innerHTML = yearHTML.getAttribute("data-placeholder");
    }
};
function cvcChange() {
    if (cvcInput.value.length === 0) {
        cvcHTML.innerHTML = cvcHTML.getAttribute("data-placeholder");
    } else {
    cvcHTML.innerHTML = cvcInput.value;
    }
};
function nameChange() {
    if (!nameInput.value.length) {
        nameHTML.innerHTML = nameHTML.getAttribute("data-placeholder");    
    } else {
    nameHTML.innerHTML = nameInput.value;
    }
};

function buttonSubmit(e) {
    inputsObject.forEach(inputObject => {
        const inputError = inputObject.input.parentElement.lastElementChild;
        inputError.textContent = "";
        inputObject.input.classList.remove('error-border');
    });
    inputsObject.forEach(inputObject => {
        let input = inputObject.input;
        const inputError = input.parentElement.lastElementChild;
        if (!input.value.length) {
            e.preventDefault();
            inputError.textContent = "Can't be blank";
            input.classList.add('error-border');
        } else if (inputObject.requirement) {
            e.preventDefault();
            if (inputObject.requirement === 'card') {
                 if (!cardNumberPattern.test(input.value)) {
                    inputError.textContent = "Wrong format, cards should have 16 digits"
                    input.classList.add('error-border');
                }
            } else if (inputObject.requirement === 'month' || inputObject.requirement === 'year') {
                if (!datePattern.test(input.value)) {
                    inputError.textContent = "Card date should be in MM/YY format"
                    input.classList.add('error-border');
                } else if (inputObject.requirement === 'year') {
                    if (input.value < (thisYear - 20)) {
                        inputError.textContent = "Card date shouldn't be expired"
                        input.classList.add('error-border');
                    }
                }
            } else if (inputObject.requirement === 'cvc') {
                if (!cvcPattern.test(input.value)) {
                    inputError.textContent = "Wrong format, CVC should contain only 3 or 4 digits"
                    input.classList.add('error-border');
                }
            }
        } else {
            form.submit()
            //modal here
        }
    }

)};

