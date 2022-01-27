const apiKey = "jKxyyHst35IKca4ITH6luzIyAPSHvgdD";
// api.giphy.com/v1/gifs/random

//primera forma de consumir una api mediante fetch
//le adjuntamos la api key al endpoint que vamos a consultar
/* fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    //fetch al ser una promesa tenemos que construir los métodos then y response correspondientes
    .then((response) => {
        //si la promesa se ejecuta correctamente, parseamos la data obtenida por medio del método json() que nos devuelve una promesa con sus respectivos métodos then y catch()
        response.json().then( response => {
            const {images} = response.data
            console.log(images);
        } )
    })
    .catch((error) => {
        console.log(error);
    }) 
*/

//segunda forma de consumir una API utilizando fetch
fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
//la respuesta del fetch se parsea utilizando el metodo json
    .then( (response) => response.json() )
    //el método json nos devuelve una respuesta, si es correcta se le anida el then siguiente donde desestructuramos la respuesta parseada obteniendo la variable image (anteriormente llamada original) e imprimimos el url 
    .then( (response) => {
        //recordar que para realizar la desestructuración primero se declara entre corchetes el nombre de la propiedad como se encuentra en la respuesta de la API, luego por medio de la notación objeto en javascript podemos renombrar la variable par utilizarla después. esto lo igualamos a la propiedad de donde se quiere extraer la variable. en este caso decimos que queremos obtener la propiedad original, renombrarla a urlImage desde la respuesta, data, y sacarla de images
        const { original: urlImage } = response.data.images
        console.log( urlImage )
    })
