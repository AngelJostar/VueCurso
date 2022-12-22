<template>
  <h1>¿Quién es este pokémon?</h1>
  <!-- img -->
  <PokemonPicture :pokemonId="4" :showPokemon="true"/>
  <!-- opciones -->
  <PokemonOptions/>
</template>

<script>
// Pasar unar un componente necesitamos importarlo, luego definirlo en components y usar su etiqueta
import PokemonOptions from '@/components/PokemonOptions'
import PokemonPicture from '@/components/PokemonPicture'

import getPokemonOptions from '@/helpers/getPokemonOptions'

console.log(getPokemonOptions());

export default {
    components: {PokemonOptions, PokemonPicture}
}

</script>
