//promises javascript 

console.log('inicio');

//la clase Promise devuelve un objeto de tipo promesa que recibe como parámetros dos métodos,  reolve y reject.
new Promise((resolve, reject) => {
    console.log('cuerpo de la promesa');
    //primero obtenemos la fecha actual por medio de la clase Date
    fecha = new Date()
    //obtenemos el año actual con el método getMonth
    const añoActual = fecha.getMonth() + 1
    //preguntamos si el año actual es igual a 1, si es asi entonces rechazo la promesa. en caso contrario la acepto utilizando el método resolve
    if(añoActual == 01) {
        reject('Promesa resuelta con error ')
    }
    resolve('Promesa resuelta corrrectamente')
    //el metodo then se ejecuta si la promesa es resuelta, si la promesa es rechazada se ejecuta el metodo catch
}).then( msg => console.log(msg))
.catch( err => console.log(err))

console.log('fin');