//importamos la funcion de giphyApi desde los archivos creados anteriormente
import { giphyApi } from './bases/axios'

//creamos un método que hace una petición asíncrona
const getImage = async() => {
    try {
        //creamos una constante llamada data que almacenara la respuesta obtenida por la petición get de axios y la desestructura par obtener la data devuelta por la api de giphy
        const {data} = (await giphyApi.get('/random')).data
        const {original: image} = data.images
        //retorna la imagen obtenida por la api
        return image
    } catch (error) {
        console.log(error);
    }
}

//invocamos al método anterior para que se ejecute
getImage()
//si se ejecuta correctamente se obtiene la imagen devuelta y se muestra en pantalla
    .then(response => {
        //se crea el elemento llamado img para mostrarlo en pantalla
        const img = document.createElement('img')
        //se asigna el src traido desde la api
        img.src = response.url
        //se agrega el img al body del DOM
        document.body.append(img)
    })