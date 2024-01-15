//errors
//cannot be blank
//only numbers can only be numbers
// \b[1-9]\b only single digit number regex
//




const numberInput = document.body.querySelector("#number");
const monthInput = document.body.querySelector("#month");
const yearInput = document.body.querySelector("#year");
const cvcInput = document.body.querySelector("#cvc");
const nameInput = document.body.querySelector("#name");
const form = document.querySelector("form");
const button = document.querySelector('button')
const inputs = [
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
    const number = document.querySelector("h1");
    number.innerHTML = numberInput.value;
    //ADD WHITE SPACES EVERY 4 DIGITS using regex
    // string.value to array to splice(4) and join() together
    //only allow numbers
};
function monthChange() {
    const month = document.querySelector(".month");
    month.innerHTML = monthInput.value;
    if (month.innerHTML > 12) {
        monthInput.value = 12;
    } 
    month.innerHTML = monthInput.value;
};
function yearChange() {
    const year = document.querySelector(".year");
    let thisYear = new Date().getFullYear();
    thisYear = thisYear.toString().slice(2, 4);
    thisYear = Number(thisYear) + 20;
    year.innerHTML = yearInput.value;
    if (year.innerHTML > thisYear) {
        yearInput.value = thisYear;
        year.innerHTML = yearInput.value;
    };
};

function cvcChange() {
    const cvc = document.querySelector(".cvc");
    cvc.innerHTML = cvcInput.value;
}

function nameChange() {
    const name = document.querySelector(".card-name");
    name.innerHTML = nameInput.value;
}

const errorBlank = document.querySelectorAll(".error");

function buttonSubmit(e) {
    document.querySelectorAll('.input-group').forEach(input => {
        input.classList.remove("has-error");
        if (!input.value) input.classList.add("error-border");
    })
}
//for loop function, too many problems cannot maintain it properly bugs and errors
// let i = 0;
// for (input of inputs) {
//     if(!input.value) {
//         e.preventDefault();
//         console.log(i)
//         errorBlank[i].style.display = "block";
//         input.classList.add('error-border')
//         i++
//     } else if (input.value) {
//         input.classList.remove("error-border");
//     }
// }
