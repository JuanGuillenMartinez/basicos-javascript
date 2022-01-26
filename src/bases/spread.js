const persona = {
    nombre: "Juan",
    apellido: "Guillen",
    edad: 45,
    direccion: {
        ciudad: "Villahermosa",
        zip: 523123,
        lat: 12.32432,
        lng: 14.3425
    }
}

//el operador ... se conoce como spread y sirve para esparcir todos los campos del objeto a uno nuevo (Se realiza una copia)
const copiaPersona = { ...persona }
copiaPersona.nombre = "Luis"

console.log(persona);
console.log(copiaPersona);