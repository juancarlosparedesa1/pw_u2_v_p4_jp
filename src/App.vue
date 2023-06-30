<template>
  <PokemonPages/>
</template>

<script>

import Contador from './components/Contador.vue'
import Calculadora from './components/Calculadora.vue'
import CaracolaMagica from './components/CaracolaMagica.vue';


import PokemonPages from './modules/pokemon/pages/PokemonPages.vue';

export default {
  name: 'App',
  components: {
    PokemonPages
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
