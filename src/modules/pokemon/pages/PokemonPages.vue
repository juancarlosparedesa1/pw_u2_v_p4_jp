<template>
  <h1>Juego Pokemon</h1>
  <PokemonImg :pokemonId="1" :muestraPokemon="false"/>
  <PokemonOps :opciones="arreglo"/>
  
</template>

<script>

import PokemonImg from '../components/PokemonImg.vue';
import PokemonOps from '../components/PokemonOps.vue';
import obtenerFachadaPokemons from "../helpers/clientePokemonAPI"


export default {

  data(){
    arreglo=[]
  }
    components:{
        PokemonImg,
        PokemonOps
    },
    methods:{
      async cargaJuegoInicial(){
        const arregloPokemons = await obtenerFachadaPokemons()
        console.log(arregloPokemons)
        this.arreglo=arregloPokemons
        
      }
    },
    mounted(){
      console.log('Se monto el componente')
      
      this.cargaJuegoInicial()
    }

}
</script>

<style>
h1{
  color: black;
}
</style>