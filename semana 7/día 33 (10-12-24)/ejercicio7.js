function random(number){
    return Math.floor(Math.random() * (number)) + 1;
}

let button = document.getElementById("button");

function buttonHandler(){

    let n = random(16);
    let selected = document.getElementById("id" + n);
    selected.style.backgroundColor = "pink"
}

button.addEventListener("click", buttonHandler)