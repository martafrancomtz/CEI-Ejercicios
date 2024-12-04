let count = 0;

function addNumber() {
    count ++;
    if(count % 3 ===0 || count % 5 ===0 ){
        count = count + 1;
    }
    document.getElementById("result").innerHTML += " - " + count;
}

//% nos da el resto de una division 
//count = count + 1; es lo mismo que count ++;
// || esto es "o" (si esto se ciumple o esto....)
// || esto es "y" (si esto Y esto se cumple....)