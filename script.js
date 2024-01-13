//errors
//cannot be blank
//only numbers can only be numbers
// \b[1-9]\b only single digit number regex
//

// ;
//
//input;



const numberInput = document.body.querySelector("#number");
const monthInput = document.body.querySelector("#month");
const yearInput = document.body.querySelector("#year");
const cvcInput = document.body.querySelector("#cvc");
const nameInput = document.body.querySelector("#name");
const form = document.querySelector("form");
const button = document.querySelector('button')
const inputs = [numberInput, monthInput, yearInput, cvcInput, nameInput];

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

const fragment = new DocumentFragment();


function buttonSubmit(e) {
    
    const errorBlank = document.createElement("p");
    errorBlank.classList.add("error")
    errorBlank.innerHTML = "Error: cannot be blank";
    const cloneErrorBlank = errorBlank.cloneNode(true);
    form.addEventListener("submit", (event) => {
        if (inputs.forEach(input => input.value === "")) {
            console.log(input.value === "");
        }
        e.preventDefault();
    })
}
//     if (inputs.forEach(input => input.value === "")) {
//         for (input of inputs) {
//             const errorBlank = document.createElement("p");
//             errorBlank.classList.add("error")
//             errorBlank.innerHTML = "Error: cannot be blank";
//             const cloneErrorBlank = errorBlank.cloneNode(true);
//             input.insertAdjacentElement('afterend', cloneErrorBlank);
//             input.classList.add("error-border");
//         }
//         event.preventDefault();
//     }
// }
