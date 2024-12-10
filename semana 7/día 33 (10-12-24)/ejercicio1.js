let toggler = document.getElementById("toggler");
let p = document.getElementById("p")
let isblack = false;

function togglerHandler(){
    if(isblack){
        p.style.backgroundColor = 'white';
        p.style.color = 'black';
    }else{
        p.style.backgroundColor = 'black';
        p.style.color = 'white';
    }

    isblack = !isblack;
}

toggler.addEventListener("click", togglerHandler)





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