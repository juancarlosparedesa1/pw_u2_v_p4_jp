<template>
  <h3>{{ evaluarTitulo }}</h3>
  <h3>{{ inicio }}</h3>
  <p>{{ numero }} <sup>2</sup>={{obtenerCuadradoComputado}}</p>
  <p>{{ numero }} <sup>2</sup>={{obtenerCuadradoComputado}}</p>
  <p>{{ numero }} <sup>2</sup>={{obtenerCuadradoComputado}}</p>
  <button @:click="suma()">+</button>
  <button v-on:click="resta()">-</button>
</template>
  
  <script>
export default {
  name: "Contador",
  data() {
    return {
      numero: this.inicio,
      tituloComponente:this.titulo
    };
  },
  methods: {
    obtenerCuadrado() {
      console.log("Entro al metodo cuadrado");
      return this.numero * this.numero;
    },
    suma(){
        this.numero+=1;
    },
    resta(){
        this.numero-=1;
    }
  },
    computed:{
        obtenerCuadradoComputado(){
            console.log("Entro al metodo cuadrado computado")
            return this.numero*this.numero
        },

        evaluarTitulo(){
          return this.tituloComponente || 'Valor por defecto'
        }
    },
    

    props:{
      titulo: String,
      inicio: {
        type: Number,
        required: false,
        default: 100,
        validator(value){
          return value > 100
        }
      }
    }

};
</script>
  
  <style scoped>
    button{
        background-color: #64B687;
        border-radius: 5px;
        border: 1px solid white;
        color: white;
        cursor: pointer;
        margin: 0px 5px;
        padding: 5px 15px;

    }

    button:hover{
        background-color: #5aa67b;
    
    }
</style>
  