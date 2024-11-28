

function changeText() {
    const p = document.getElementById("p");
    const text = document.getElementById("text");
    p.innerHTML = text.value;
    text.value = "";
}

