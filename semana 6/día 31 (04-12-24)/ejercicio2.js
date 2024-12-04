const btn = document.querySelector("button");

function random(number){
    return Math.floor(Math.random() * (number + 1))
}

function btChange(e) {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    e.target.style.backgroundColor = rndCol;
}


document.querySelectorAll(".change-this").forEach(button =>{
    button.addEventListener("click", btChange);
})







//Crea un web con 5 botones y cada vez que 
//pulses uno que cambie el botón de color de manera aleatoria.
