let buttons = document.querySelectorAll("button");
let p = document.querySelector("p");

function clickButton(e) {
    fetch(e.target.dataset.page)
    .then(data => data.text())
    .then(text => p.innerHTML = text)
}

buttons.forEach(button => {
    button.addEventListener("click", clickButton)
})