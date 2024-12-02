let objeto = {
    tipo : "musical" ,
    color : "azul" ,
    tamaño : "enorme" ,
}

objeto.adress = " allá";

objeto.to_string = function(){
    console.log(this.tipo + " " + this.color + "" + this.adress)
}

objeto.to_string()
