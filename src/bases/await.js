//el proceso de ejecución es el siguiente: 
//primero creamos una función que retorne una promesa con sus respectivos métodos de resolve y reject.
const miPromesa = () => {
    return new Promise((resolve, reject) => {
        //añadimos un temporizador para pausar durante 1 segundo la ejecución del programa.
        setTimeout(() => {
            //dependiendo de la devolución de la promesa sera el ciclo de ejecución del código, podemos manipularlo mediante resolve y reject
            resolve('promesa exitosa')
            /* reject('hubo un error en la promesa') */
        }, 1000);
    })
}

//por medio de la palabra reservada await hacemos que la función se comporte como una promesa, otorgándonos los métodos de then o catch , pudiendo funcionar de manera asíncrona
const medirTiempoAsync = async() => {
    try {
        //imprimimos un texto de inicio
        console.log('inicio')
        //ejecutamos la función escrita anteriormente.por medio de la palabra reservada await especificamos que queremos esperar a que se termine la ejecución del método miPromesa. cuando finalice continuara con el ciclo de ejecución. si hay un error se detiene la ejecución y pasa al catch
        const respuesta = await miPromesa()
        //imprimimos la respuesta obtenida por miPromesa, es este caso se devuelve el texto de promesa exitosa retornada por el resolve de la función.
        console.log(respuesta)
        console.log('fin');
        //si todo ocurrió correctamente return el texto
        return 'fin de medirTiempoAsync'
    } catch (error) {
        throw 'error en medirTiempoAsync'
    }
}

//ejecutamos el método de medirTiempoAsync. en caso de que la petición ocurra correctamente se imprimirá la respuesta obtenida por el método de medirTiempoAsync. en caso contrario arrojara un error.
medirTiempoAsync()
    .then(respuesta => console.log(respuesta))
    .catch(error => console.log(error))