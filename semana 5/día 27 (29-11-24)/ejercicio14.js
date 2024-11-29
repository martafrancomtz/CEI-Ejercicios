const personas = [
    { nombre: "luffy", edad: 20 },
    { nombre: "nami", edad: 21 },
    { nombre: "zoro", edad: 24 },
    { nombre: "sanji", edad: 23 }
];

const mayores = personas.filter(persona => persona.edad > 20);

console.log("Personas mayores de 20 años:", mayores);


