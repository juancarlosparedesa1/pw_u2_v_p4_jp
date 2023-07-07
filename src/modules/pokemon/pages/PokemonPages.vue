<template>
  <h1 v-if="!pokemonCorrecto">Espere por favor.....</h1>
  <div v-else>
    <h1>Juego Pokemon</h1>
    <div class="contenedor-score">
      <h1>Puntaje:{{ puntaje }}</h1>
      <h1>Intentos: {{ intentos }}</h1>
    </div>
    <PokemonImg :pokemonId="pokemonCorrecto.id" :muestraPokemon="showPokemon" />
    <PokemonOps
      v-show="intentos < 3 && showPokemon==false"
      :opciones="pokemonArr"
      @seleccionado="revisarSeleccion($event)"
    />
    <div
      v-show="showPokemon || (intentos === 3 && !showPokemon)"
      class="contenedor-fin"
    >
      <h1 v-if="showPokemon">Ganaste el Juego</h1>
      <h1 v-if="showPokemon">Puntaje: {{ puntaje }}</h1>
      <h1 v-if="!showPokemon && intentos === 3">Perdiste el Juego</h1>
      <button v-on:click="reiniciar">Reiniciar</button>
    </div>
  </div>
</template>

<script>
import PokemonImg from "../components/PokemonImg.vue";
import PokemonOps from "../components/PokemonOps.vue";

import obtenerFachadaPokemons from "../helpers/clientePokemonAPI";

export default {
  data() {
    return {
      pokemonArr: [],
      pokemonCorrecto: null,
      showPokemon: false,
      puntaje: 0,
      intentos: 0,
    };
  },

  components: {
    PokemonImg,
    PokemonOps,
  },

  methods: {
    async cargaJuegoInicial() {
      const arregloPokemons = await obtenerFachadaPokemons();
      console.log(arregloPokemons);
      this.pokemonArr = arregloPokemons;

      const indicePokemon = Math.floor(Math.random() * 4);
      //this.pokemonArr[indicePokemon]
      this.pokemonCorrecto = this.pokemonArr[indicePokemon];
    },

    revisarSeleccion(idSeleccionado) {
      console.log("Evento en el padre");
      console.log(idSeleccionado);
      this.intentos++;
      if (idSeleccionado == this.pokemonCorrecto.id) {
        this.showPokemon = true;

        if (this.intentos == 1) {
          this.puntaje = 5;
        } else if (this.intentos == 2) {
          this.puntaje = 2;
        } else if (this.intentos == 3) {
          this.puntaje = 1;
        }
      } else {
        this.showPokemon = false;
      }
    },

    async reiniciar() {
      await this.cargaJuegoInicial();
      this.showPokemon = false;
      this.puntaje = 0;
      this.intentos = 0;
    },
  },

  //no necesita await
  mounted() {
    console.log("Se monto el componente");
    const data = this.cargaJuegoInicial();
    //return data
  },
};
</script>

<style>
h1 {
  color: black;
}

.contenedor-score {
  display: flex;
  justify-content: center;
}

.contenedor-score h1 {
  margin: 50px;
}


</style>