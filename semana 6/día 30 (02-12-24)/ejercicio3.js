function calc() {
    let n1 = parseInt(document.getElementById("n1").value);
    let op = document.getElementById("op").value;
    let n2 = parseInt(document.getElementById("n2").value);
    let result;

    if(op == "sumar"){
        result = n1 + n2;
    }else if(op == "restar"){
        result = n1 - n2;
    }else if(op == "multi"){
        result = n1 * n2;
    }else if(op == "divi"){
        result = n1 / n2;
    }

    document.getElementById("result").innerHTML = result;

}

//Realiza una calculadora. Con 2 input type number, 
//un select con los 4 operadores y un botón. Al pulsar el
//botón tiene que dar el resultado de la operación.

//n1 op n2 = result
//numero 1 (*/+-) numero 2 = 
//parseInt: Convierte el valor de texto (que siempre es un string) 
//a un número entero
