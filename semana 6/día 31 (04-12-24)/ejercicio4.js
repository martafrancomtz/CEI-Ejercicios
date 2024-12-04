let count = 0;

function changeNumber() {
    count = count + 1
    if(count == 10){          //== cuando lo q hAYA en los dos laos sea igual y/o valga lo mismo
        count = 0
    }
    document.getElementById("box").innerHTML = count;
}


//La propiedad .innerHTML devuelve o establece la sintaxis