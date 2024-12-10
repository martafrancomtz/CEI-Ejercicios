const boton = document.getElementById('miBoton');
        const div = document.getElementById('miDiv');

        boton.addEventListener('click', () => {
            div.classList.add('animacion');
        });