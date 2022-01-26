//funciones lambda o funciones de flecha
/* estas funciones son una forma abreviada de escribir funciones pero también son una forma mas segura de definirlas ya que se puede caer en el error de escribir una variable con el mismo nombre de una función provocando una excepción */

//la estructura es la siguiente: 
//asignación de la función a una variable (preferentemente una constante)
//definición de parámetros que recibe la función (si la función solo recibe un parámetro, se pueden omitir los paréntesis. en caso contrario hay que colocarlas)
const saludar = (nombre = 'Juan') => {
    return `Hola ${nombre}`
}

//las lambda fuctions se invocan de la misma forma que las funciones tradicionales
console.log(saludar('Martin'));