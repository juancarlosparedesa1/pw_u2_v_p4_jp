<template>
  
  <h1>Caracola Mágica</h1>
  <img src="https://via.placeholder.com/250" alt="No se puede mostrar la imagen">
  
  <input v-model="pregunta" type="text" placeholder="Hazme una pregunta">
  <p>Recuerda terminar con un Enter la pregunta</p>

  <div>
    <h2>Voy a pasar de año?</h2>
    <h1>SI,NO</h1>
  </div>

</template>

<script>
export default {
  data(){
    return{
      pregunta:'Hola Mundo'
    }
  }

}
</script>

<style>

</style>