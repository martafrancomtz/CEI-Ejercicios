
let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let timer;


function clickStartButton(e){ 
    timer = setInterval(() => {
        alert("¡Hola!");
    }, 5000); 
}

function clickStopButton(e){ 
    clearInterval(timer)
}

start.addEventListener("click", clickStartButton);
stop.addEventListener("click", clickStopButton);







