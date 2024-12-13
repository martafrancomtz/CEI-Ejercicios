function menu(id){
    document.querySelector("li.active").classList.remove("active");
    document.querySelector("main div.active").classList.remove("active");
    document.querySelector("#menu-" + id).classList.add("active");
    document.querySelector("#div-" + id).classList.add("active");
}



let number = document.getElementById("number");
let calc = document.getElementById("calc"); 
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}



function genNumber() {
    if (number.value != "") {
        let n = getRandomInt(1, 9);

        if (n == number.value) {
            alert("El numero es correcto");
        } else {
            alert("El numero es incorrecto.El numero correcto era el " + n + ".");

        }
    } else {
        alert("No se ha introducido ningun numero");
    }

}

calc.addEventListener("click", genNumber);

function validate(elem) {
    let value = parseInt(elem.value);


    elem.value = elem.value.replace(",", "")

    if (value < 1 || value > 9) {
        elem.value = elem.value.slice(-1);
    }


    if (elem.value == 0) {
        elem.value = 1;
    }

    console.log(elem)
}