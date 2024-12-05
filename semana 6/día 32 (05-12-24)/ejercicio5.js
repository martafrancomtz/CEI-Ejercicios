

const div = document.querySelector(".box");

function random(number){
    return Math.floor(Math.random() * (number + 1))
}

function cambiarColor() {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    div.style.backgroundColor = rndCol;
}

div.addEventListener("mouseenter", cambiarColor);
div.addEventListener("mouseleave", cambiarColor);




