//primero tenemos que importar la librería de axios
import axios from "axios";

const apiKey = "jKxyyHst35IKca4ITH6luzIyAPSHvgdD";
// https://api.giphy.com/v1/gifs/random

//luego creamos una instancia de axios para que sea reutilizable. el método create recibe como parámetros la url base a donde se harán las peticiones. mandamos la api key por medio del atributo params 
export const giphyApi = axios.create({
    baseURL: 'http://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey
    }
})

//por medio del método get hacemos una petición al endpoint que ingresemos
//giphyApi.get('/random')
//get devuelve una response ya parseada con atributos como data donde viene incluida la información traída desde la petición  asi que solo tenemos que consumirla
  //  .then( response => {

        //deconstruimos la petición obteniendo solamente la imagen 
    //    const { original: image } = response.data.data.images
        
        //por medio del metodo createElement de javascript podemos crear etiquetas html en el DOM
      //  const img = document.createElement('img')

        //asignamos la url de la imagen obtenida al src de la etiqueta a crear
        //img.src = image.url

        //por medio del metodo append incrustamos el img creado al DOM
        //document.body.append(img)
    //})