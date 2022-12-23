<template>
  <div v-if="!pokemon">Espere por favor..</div>
  <div v-else>
      <h1>¿Quién es este pokémon?</h1>
      <!-- img -->
      <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon"/>
      <!-- opciones -->
      <PokemonOptions :pokemons="pokemonArr"/>
  </div>
</template>

<script>
// Pasar unar un componente necesitamos importarlo, luego definirlo en components y usar su etiqueta
import PokemonOptions from '@/components/PokemonOptions'
import PokemonPicture from '@/components/PokemonPicture'

import getPokemonOptions from '@/helpers/getPokemonOptions'

// console.log(getPokemonOptions());

export default {
    components: {PokemonOptions, PokemonPicture},
    data() {
      return {
        pokemonArr: [],
        pokemon: null,
        showPokemon:false
      }
    },
    methods: {
      async mixPokemonArray(){
        this.pokemonArr = await getPokemonOptions()
        
        const rndInt = Math.floor(Math.random() * 4)
        this.pokemon = this.pokemonArr[rndInt]
      }
    },
    mounted(){
      this.mixPokemonArray()
    }
}

</script>
