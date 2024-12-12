const Div = document.getElementById('Div');
const button = document.getElementById('toggleButton');
let rotar = true;

button.addEventListener('click', () => {
    if (rotar) {
        Div.classList.remove('rotate');
        Div.classList.add('scale');
    } else {
        Div.classList.remove('scale');
        Div.classList.add('rotate');
    }
    rotar = !rotar; 
});
