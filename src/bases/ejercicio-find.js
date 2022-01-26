import {heroes, owners} from '../data/heroes'

/* const getHeroById = (id) => heroes.find(function (hero) {
    return hero.id === id
}) */


//recordar que el return debe ir tanto en el predicado del método que creamos como del predicado del método del array utilizado, ya sea find o filter
export const getHeroById = (id) => {
    return heroes.find( hero => hero.id === id )
}

export const getHeroesByOwner = (ownerName) => {
    return heroes.filter( hero => hero.owner === ownerName )
}