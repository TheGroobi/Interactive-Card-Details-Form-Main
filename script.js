//errors
//cannot be blank
//only numbers can only be numbers
//
const errorElement = document.createElement("p");

const numberInput = document.body.querySelector("#number");
const dateInput = document.body.querySelector("#date");
const cvcInput = document.body.querySelector("#cvc");
const nameInput = document.body.querySelector("#name");
console.log(numberInput, dateInput, cvcInput, nameInput);

numberInput.addEventListener("input", cardNumberChange);
// numberInput.addEventListener("input", dateChange);
// numberInput.addEventListener("input", cvcChange);
// numberInput.addEventListener("input", nameChange);

function cardNumberChange(event) {
    const number = document.querySelector("h1");
    const form = document.querySelector("form");
    number.innerHTML = numberInput.value;
    if (number.innerHTML.length == 17) {
        errorElement.innerHTML = "Error: Card number should be 16 digits";
        errorElement.classList.add("error");
        numberInput.classList.add("error-border");
        numberInput.parentElement.insertBefore(errorElement, numberInput.nextSibling);
    } else if (number.innerHTML.length < 17) {
        form.querySelectorAll('p').forEach(element => {
            element.remove();
        })
        numberInput.classList.remove("error-border");
    } else if (number.innerHTML.length >= 22) {
        numberInput.setAttribute("disabled", "");
        setTimeout(() => numberInput.removeAttribute("disabled"), 2000);
    }
    //ADD WHITE SPACES EVERY 4 DIGITS using regex
    //maybe figure out how to disable input of everything besides backspace 
    //to lock instead of disabling at line 29
};
