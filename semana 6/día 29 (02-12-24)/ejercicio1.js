function pares(){
    for(let i = 1; i <= 100; i++){      // Incrementamos 'i' en cada iteración
        if(i % 2 == 0){                 // Si 'i' es divisible por 2 (número par)
            console.log(i)              // Se imprime el valor de 'i'
        }
    }
}

pares();