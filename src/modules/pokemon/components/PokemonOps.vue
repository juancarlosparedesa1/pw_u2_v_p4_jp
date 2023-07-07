<template>
  <div class="contenedor-opciones">
    <ul>
    <li v-for="pokemon in opciones" :key="pokemon.id" @click="$emit('seleccionado',pokemon.id)">{{ pokemon.nombre }}</li>
  </ul>

  </div>
  
</template>

<script>
export default {
  props:{
    opciones:{
      type:Array,
      required:true
    }
  },

  methods:{
    pruebaDeEvento(){
      console.log("Prueba de evento")
    }
  }

}
</script>

<style scoped>

ul{
  list-style-type: none;
}

li{
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background-color: white;
  margin-bottom: 10px;
  width: 200px;
  cursor: pointer;
}

li:hover{
  background-color: aqua;
}

.contenedor-opciones{
  display: flex;
  justify-content: center;
}

</style>