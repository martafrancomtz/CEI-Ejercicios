const Button = document.getElementById('Button');
const Div = document.getElementById('Div');

Button.addEventListener('click', () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const randomX = Math.floor(Math.random() * (screenWidth - Div.offsetWidth));
    const randomY = Math.floor(Math.random() * (screenHeight - Div.offsetHeight));

    Div.style.left = `${randomX}px`;
    Div.style.top = `${randomY}px`;
});