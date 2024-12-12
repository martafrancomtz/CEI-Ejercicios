





let togglerDisplay = document.getElementById("togglerDisplay")
let isDisplay = true;

function togglerDisplayHandler() {
    if (isDisplay) {
        Div.style.display = 'none';
    } else {
        Div.style.display = 'block'; 
    }

    isDisplay = !isDisplay
}

togglerDisplay.addEventListener("click", togglerDisplayHandler);
























