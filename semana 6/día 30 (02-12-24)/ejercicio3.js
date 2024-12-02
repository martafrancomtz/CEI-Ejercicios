

function triangulo(size){                   // Bucle externo controla las filas del triángulo
    for(let i = 1; i <= size; i++){  
        let line = "";                      // Inicializa una línea vacía en cada iteración del bucle externo
        for(let j = 1; j <= i; j++){        // Bucle interno construye el contenido de cada fila
            line += "*"                     // Agrega un asterisco por cada iteración del bucle interno
        }
        console.log(line)                   // Imprime la línea generada
    }
}

triangulo (5);