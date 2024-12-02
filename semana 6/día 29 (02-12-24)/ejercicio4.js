

function saludar (nombre) {
    alert("hola " + nombre);
}

function proces(callback) {
    var nombre = prompt("Por favor ingresa tu nombre");
    callback(nombre)
}

proces(saludar);