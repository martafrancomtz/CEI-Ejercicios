//cargamos elementos de los botones en sus variables
let togglerColor = document.getElementById("togglerColor");        //cargamos botones
let togglerSize = document.getElementById("togglerSize");          //cargamos botones


//cargamos elementos del p en sus variables
let p = document.getElementById("p")

//declaramos las banderas em false
let isblack = false;
let isbig = false;

//declaramos las banderas em false
function togglerColorHandler(){
    if(isblack){
        p.style.backgroundColor = 'white';
        p.style.color = 'black';
    }else{
        p.style.backgroundColor = 'black';
        p.style.color = 'white';
    }

    isblack = !isblack;
}

function togglerSizeHandler(){
    if(isbig){
        p.style.width = '200px';
    }else{
        p.style.width = '600px';
    }

    isbig = !isbig;
}


togglerColor.addEventListener("click", togglerColorHandler)
togglerSize.addEventListener("click", togglerSizeHandler)





//let elem = document.getElementById("boton")
//
//function alterStyle(elem) {
//    elem.style.backgroun = 'black'
//}
//
//function resetStyle(elemId) {
//    elem = document.getElementById(elemId)
//    elem.style.backgroun = 'white'
//}
//
//
//
//
//
//
//
//const boton = document.getElementById('Boton');
//        const div = document.getElementById('Div');
//
//        boton.addEventListener('click', () => {
//            div.classList.add('animacion');
//        });
//
//
//
//
//
//