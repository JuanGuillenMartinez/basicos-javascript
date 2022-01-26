//primero definimos un objeto de persona que nos sirva como base para crear un heroe

const persona = {
    nombre: 'Juan',
    edad: 22,
    nick: 'Dartt'
}

//creamos un método que reciba un objeto de tipo persona y que nos devuelva un héroe.
//a partir de ECS6 si la llave y el nombre de la variable que sera utilizada como valor son iguales se puede omitir la notación de dos puntos y solamente escribir el nombre del atributo

/* const crearHeroe = ( { nombre, edad, nick, habilidad = 'Ninguna' } ) => {
    return {
        id: 12313,
        nombre,
        edad,
        nick,
        habilidad
    }
} */

//esta es otra forma de devolver el objeto por medio del return implícito
const crearHeroe = ( { nombre, edad, nick, habilidad = 'Ninguna' } ) => ({
    id: 12313,
    nombre,
    edad,
    nick,
    habilidad
})

console.log(crearHeroe(persona));
