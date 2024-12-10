function random(number) {
    return Math.floor(Math.random() * (number + 1))
}

function getColor() {
    return `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
}

let count = 0;
const add = document.getElementById("add");

add.addEventListener("click", () => {
    let div = document.createElement("div");
    div.classList.add("box");
    div.innerHTML = count ++;
    div.style.backgroundColor = getColor();
    div.addEventListener("click", (e) => {
        e.target.remove();
    });
    
    document.body.appendChild(div);
});



