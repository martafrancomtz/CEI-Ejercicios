const animer = document.getElementById('animer');
const unanimer = document.getElementById('unanimer');
const toggler = document.getElementById('toggler');


const div = document.getElementById('Div');



animer.addEventListener('click', () => {
    div.classList.add('animado');
});

unanimer.addEventListener('click', () => {
    div.classList.remove('animado');
});

toggler.addEventListener('click', () => {
    div.classList.toggle('animado');
});

        

