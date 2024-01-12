//replace p element with .value from input
//get value from input
//select the p element
// replace the innerHTML
//make the elements put an error if the value is different than desired
// add p element with error below wrong input
const input = document.body.querySelector("#number");
input.addEventListener("input", cardNumberChange);
function cardNumberChange(event) {
    const pElement = document.querySelector("h1");
    const errorElement = document.createElement("p");
    const form = document.querySelector("form");
    pElement.innerHTML = input.value;
    if (pElement.innerHTML.length == 16) {
        errorElement.innerHTML = "Error: Card number should be 16 digits";
        errorElement.style.color = "red";
        errorElement.style.fontSize = "12px";
        errorElement.style.marginTop = "5px";
        input.parentElement.insertBefore(errorElement, input.nextSibling);
    } else if (pElement.innerHTML.length < 16) {
        form.querySelectorAll('p').forEach(element => {
            element.remove();
        })
    } else if (pElement.innerHTML.length >= 22) {
        input.setAttribute("disabled", "");
    }
};


// if (pElement.innerHTML !== inputValue) {
//     pElement.innerHTML = inputValue;
//     const errorElement = document.createElement("p");
//     errorElement.innerHTML = "Error: Value is different than desired";
//     errorElement.style.color = "red";
//     input.parentElement.insertBefore(errorElement, input.nextSibling);
// }