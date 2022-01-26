import {getHeroById, getHeroesByOwner} from './bases/ejercicio-find'

//creamos el metodo para obtener heroes de manera asíncrona
const getHeroByIdAssync = (id) => {
    //creamos la promesa que queremos retornar 
    return new Promise((resolve, reject) => {
        //por medio del método setTimeout simulamos un tiempo de espera provocado por una consulta a una api externa
        setTimeout(() => {
            //utilizamos el método importado para obtener un héroe por medio del id
            const hero = getHeroById(id);
            //preguntamos si el héroe no es indefinido, si es asi se resuelve la promesa
            if (hero) {
                resolve(hero);
            }
            //en caso de que el héroe sea undefined se rechaza la promesa
            reject('hero does not exist');
        }, 1000)
    })
}

//ejecutamos el método escrito anteriormente y le mandamos como parámetro el id. con el método then decimos que si la promesa se resuelve correctamente se imprimirá un mensaje con el nombre del héroe. en caso contrario se mostrara el error por consola 
getHeroByIdAssync(30).then(hero => {
    console.log(`El nombre del heroes es ${hero.name}`);
}).catch(err => console.log(err))