//método some
//este método lo que hace es recorrer un array y analiza una condición. devuelve tru si la condición se cumple o false en caso contrario

//definimos el array de objetos que vamos a evaluar
const heroes = [
    {
        id: 1, 
        name: 'Batman'
    },
    {
        id: 2, 
        name: 'Superman'
    }
]

//definimos la variable que va almacenar el resultado de utilizar el metodo some en busqueda de coincidencias en el arreglo
//el metodo some itera el arreglo utilizando como iterador, el nombre de la variable asignada en la arrow function. si existe una coincidencia, devuelve un boolean 

//como alternativa tambien tenemos el metodo find que funciona de la misma manera pero devuelve el objeto que coincide con la arrow function

/* const existingHero = heroes.some( (hero) => {
    return hero.name === 'Batman'
} ) */

const existingHero = heroes.find( (hero) => {
    return hero.name === 'Batman'
} )

console.log(existingHero);