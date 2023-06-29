<template>
  <h1>Juego Pokemon</h1>

  <PokemonImg :pokemonId="1" :muestraPokemon="true" />
  <PokemonImg :pokemonId="2" :muestraPokemon="false" />

  <PokemonOps />
</template>
  
  <script>
import PokemonImg from "../components/PokemonImg.vue";

import PokemonOps from "../components/PokemonOps.vue";

export default {
  components: {
    PokemonImg,

    PokemonOps,
  },
};
</script>
  
  
  
  
  <style scoped>
h1 {
  color: black;
}
</style>