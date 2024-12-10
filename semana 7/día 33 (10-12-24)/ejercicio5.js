function random(number) {
    return Math.floor(Math.random() * (number + 1))
}

function getColor() {
    return `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
}

let count = 0;
const add = document.getElementById("add");

add.addEventListener("click", () =>{
    let div = document.createElement("div")
    div.classList.add("box")
    div.innerHTML = count ++;
    div.style.backgroundColor = getColor();
    document.body.appendChild(div)
})



//
//const div = document.querySelector(".box");
//
//function random(number){
//    return Math.floor(Math.random() * (number + 1))
//}
//
//function cambiarColor() {
//    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
//    div.style.backgroundColor = rndCol;
//}
//
//div.addEventListener("mouseenter", cambiarColor);
//div.addEventListener("mouseleave", cambiarColor);
//
//
//
//
//const btn = document.querySelector("button");
//
//function random(number){
//    return Math.floor(Math.random() * (number + 1))
//}
//
//function btChange(e) {
//    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
//    e.target.style.backgroundColor = rndCol;
//}
//
//
//document.querySelectorAll(".change-this").forEach(button =>{
//    button.addEventListener("click", btChange);
//})
//
//
//