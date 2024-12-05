
function random(number){
    return Math.floor(Math.random() * (number + 1))
}

function divChange(e) {
    let count = 0;
    document.querySelectorAll("div.box").forEach(div =>{
        count++;
        const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
        div.style.backgroundColor = rndCol;
        console.log(e);
    })
}


document.querySelector("button.change-divs").addEventListener("click", divChange);








//Crea un html con 5 div de 100px por 100px y un botón. 
//Cada vez que pulses el botón. Los divs tienen que 
//cambiar de color de manera aleatoria.


