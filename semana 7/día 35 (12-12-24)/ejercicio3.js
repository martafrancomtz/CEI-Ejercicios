const myDiv = document.getElementById('Div');
const button = document.getElementById('toggleButton');
let size = false; 

button.addEventListener('click', () => {
    if (size) {
        Div.style.width = '20vw'; 
        Div.style.backgroundColor = 'darkcyan';
    } else {
        Div.style.width = '80vw'; 
        Div.style.backgroundColor = 'darkgoldenrod';
    }
    size = !size
});