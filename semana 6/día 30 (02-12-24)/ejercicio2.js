

function cuadrado(size){
    for(let i = 1; i <= size; i++){                   
            console.log("*****")              
    }
}

cuadrado (5);

function cuadrado(size){
    for(let i = 1; i <= size; i++){  
        let line = " ";
        for(let j = 1; j <= size; j++){  
            line += "*";
        }
            console.log("*****")              
    }
}

cuadrado (50);