
let set = document.querySelector("#set");
let name = document.querySelector("#name");
let data = localStorage.getItem("name");


if (data) {
    alert(`¡Hola! ${data}`);
    name.value = data;
}

function clickButton(e){
    localStorage.setItem("name", name.value);
}

set.addEventListener("click", clickButton);





//
//function clickStartButton(e){ 
//    timer = setInterval(() => {
//        alert("¡Hola!");
//    }, 5000); 
//}
//
//function clickStopButton(e){ 
//    clearInterval(timer)
//}
//
//start.addEventListener("click", clickStartButton);
//stop.addEventListener("click", clickStopButton);
//
//
//




















//
//
//const nameInput = document.getElementById("nameInput");
//const saveButton = document.getElementById("saveButton");
//const greetingDiv = document.getElementById("greeting");
//
//function updateGreeting() {
//    const storedName = localStorage.getItem("name");
//    if (storedName) {
//        greetingDiv.textContent = `Hola, ${storedName}!`;
//    } else {
//        greetingDiv.textContent = "¡Hola! Por favor, ingresa tu nombre.";
//    }
//}
//
//function saveName() {
//    const name = nameInput.value.trim();
//    if (name) {
//        localStorage.setItem("name", name);
//        updateGreeting();
//        nameInput.value = "";
//    } else {
//        alert("Por favor, ingresa un nombre válido.");
//    }
//}
//
//saveButton.addEventListener("click", saveName);
//
//updateGreeting();