import pokemonApi from "@/api/pokemonApi";

// Creamos un arreglo de 650 casillas
const getPokemons = () => {
    const pokemonsArr = Array.from( Array(650) )

    return pokemonsArr.map((_, index) => index + 1)

    console.log(pokemonsArr);
}

// Metodo que regresa las opciones de pokemon
const getPokemonOptions = async() => {

    // este mezcla el arreglo de manera aleatorio
    const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5)
    // toma unicamente los primeros 4 elementos de arreglo mezclado
    const pokemons =  await getPokemonNames(mixedPokemons.splice(0,4))

    return pokemons
} 

// crea un nuevo arreglo de pokemones
const getPokemonNames = async ( [a,b,c,d] = [] ) => {

    // creamos un arreglo de promesas
    const promiseArr = [
        pokemonApi.get(`/${a}`),
        pokemonApi.get(`/${b}`),
        pokemonApi.get(`/${c}`),
        pokemonApi.get(`/${d}`)
    ]
    
    // podemos desectructurar la respuesta 
    const [p1, p2, p3, p4] =  await Promise.all(promiseArr)
    
    // tenemos que regresar el arreglo pero con los nombres
    return [
        {name: p1.data.name, id: p1.data.id},
        {name: p2.data.name, id: p2.data.id},
        {name: p3.data.name, id: p3.data.id},
        {name: p4.data.name, id: p4.data.id}
    ]


}

export default getPokemonOptions