function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function changeNumbers() {
    let boxes = document.querySelectorAll(".box")
    boxes.forEach(box => {
        let n = getRandomInt(100);
        box.innerHTML = n;
    }); 
}

//Haz una web con 5 div de 100px por 100px, numerados
//del 1 al 5 y un botón. Al pulsar el botón tiene cambiar el  
//número de su interior aleatoriamente.


