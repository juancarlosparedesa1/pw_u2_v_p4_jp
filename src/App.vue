<template>
 
<PokemonPagesVue></PokemonPagesVue>
  
  
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Contador from './components/Contador.vue'
import CaracolaMagica from './components/CaracolaMagica.vue'

import PokemonPagesVue from './modules/pokemon/pages/PokemonPages.vue'

export default {
  name: 'App',
  components: {
    PokemonPagesVue
  },
  
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
