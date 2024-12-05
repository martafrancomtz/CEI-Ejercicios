
document.addEventListener('keydown', function(event) {
    const key = event.key;
    const message = `Has presionado la tecla: ${key}`;
    document.getElementById('keydown-message').textContent = message;
});

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    document.getElementById('scroll-message').textContent = `Estás desplazado ${scrollPosition}px en la página.`;
});

window.addEventListener('wheel', function(event) {
    const direction = event.deltaY > 0 ? 'hacia abajo' : 'hacia arriba';
    document.getElementById('wheel-message').textContent = `Has girado la rueda del ratón ${direction}.`;
});






//document.addEventListener("keydown");
//
//document.addEventListener("scroll");
//
//documemt.addEventListener("wheel");




//Keydown
//Se presiona una tecla en el teclado.
//
//Scroll
//Se activa cuando el usuario desplaza la barra de desplazamiento.
//
//Wheel
//Un botón rueda de un dispositivo señalador se gira en cualquier dirección



// Evento Keydown para cambiar el color del div
const colors = ['#ff6347', '#32cd32', '#1e90ff', '#ff69b4', '#8a2be2', '#f0e68c'];
let colorIndex = 0;
document.addEventListener('keydown', function() {
    colorIndex = (colorIndex + 1) % colors.length;  // Cambia al siguiente color
    document.getElementById('color-div').style.backgroundColor = colors[colorIndex];
});

// Evento Scroll para sorprender al usuario
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const surpriseText = document.getElementById('surprise-text');
    if (scrollPosition > 300) {
        surpriseText.textContent = "¡Sorpresa! Has recorrido más de 300 píxeles.";
        surpriseText.style.color = '#32cd32';
    } else {
        surpriseText.textContent = "¡Desplázate para ver algo sorprendente!";
        surpriseText.style.color = '#ff6347';
    }
});

// Evento Wheel para hacer girar la imagen
let rotation = 0;
window.addEventListener('wheel', function(event) {
    if (event.deltaY > 0) {
        rotation += 15; // Gira hacia la derecha
    } else {
        rotation -= 15; // Gira hacia la izquierda
    }
    document.getElementById('image-container').style.transform = `rotate(${rotation}deg)`;
});