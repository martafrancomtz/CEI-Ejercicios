const Div = document.getElementById('Div');
const button = document.getElementById('toggleButton');
let opacidad = true;

button.addEventListener('click', () => {
    if (opacidad) {
        Div.style.opacity = '0'; 
    } else {
        Div.style.opacity = '1'; 
    }
    opacidad = !opacidad; 
});
