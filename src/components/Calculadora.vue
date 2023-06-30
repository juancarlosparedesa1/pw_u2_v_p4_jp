<template>
  <header class="cabecera">Calculadora</header>
  <nav></nav>

  <section>
    <div id="myAppCalculadora" class="container">
      <div class="calculadora">
        <label class="pantalla" id="idpantalla" for="" v-on:click="borrar">{{
          numero
        }}</label>

        <button class="boton" v-on:click="operacionCalcular">1</button>
        <button class="boton" v-on:click="operacionCalcular">2</button>
        <button class="boton" v-on:click="operacionCalcular">3</button>

        <button class="boton" id="idsuma" v-on:click="operacionCalcular">
          +
        </button>

        <button class="boton" v-on:click="operacionCalcular">4</button>
        <button class="boton" v-on:click="operacionCalcular">5</button>
        <button class="boton" v-on:click="operacionCalcular">6</button>

        <button class="boton" id="idresta" v-on:click="operacionCalcular">
          -
        </button>

        <button class="boton" v-on:click="operacionCalcular">7</button>
        <button class="boton" v-on:click="operacionCalcular">8</button>
        <button class="boton" v-on:click="operacionCalcular">9</button>

        <button class="boton" id="iddiv" v-on:click="operacionCalcular">
          /
        </button>
        <button class="butonGrande" v-on:click="operacionCalcular">0</button>

        <button class="boton" id="idigual" v-on:click="operacionCalcular">
          =
        </button>
        <button class="boton" id="idmulti" v-on:click="operacionCalcular">
          *
        </button>
      </div>
    </div>
  </section>
  <footer></footer>
</template>

<script>
export default {
  name: "Calculadora",
  data() {
    return {
      numero: "",
      cambiarFondo: false,
      colores: [
        "red",
        "blue",
        "green",
        "yellow",
        "purple",
        "orange",
        "pink",
        "teal",
        "magenta",
        "cyan",
      ],
      colorDefault: "rgb(5, 130, 172)",
      intervalId: null,
    };
  },
  computed: {
    obtener() {
      return (event) => {
        this.numero += event.target.innerText;
      };
    },

    operacionCalcular() {
      return (event) => {
        const pantalla = event.target.innerText;

        if (pantalla !== "=") {
          this.numero += pantalla;
        } else {
          const resultado = eval(this.numero);
          this.numero = resultado.toString();
        }
      };
    },

    borrar() {
      return () => {
        this.numero = "";
      };
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.calculadora {
  border: solid black 1px;
  display: grid;
  grid-template-columns: repeat(4, 75px);
  /*grid-template-rows: repeat(3, 75px);*/
  background-color: rgb(5, 130, 172);
  padding: 20px;
  border-radius: 25px;
  box-shadow: 10px 5px 2px 1px black;
}

.butonGrande {
  grid-column: span 2;
}

.pantalla {
  background-color: lightgoldenrodyellow;
  border: solid 1px;
  margin-bottom: 10px;
  padding: 2px;
  text-align: right;
  grid-column: span 4;
  height: 20px;
}

.cabecera {
  text-align: center;
  font-size: 30px;
}

.boton,
.butonGrande {
  margin: 3px;
  border-radius: 7px;
  background-color: rgb(121, 207, 236);
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  box-shadow: 1px 1px 2px 1px rgb(82, 149, 172);
}

button:hover {
  background-color: aqua;
}
</style>