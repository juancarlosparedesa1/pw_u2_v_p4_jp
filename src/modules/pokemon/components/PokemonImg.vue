<template>
  <div class="contenedor-imagen">
    <img
      class="oculta-pokemon"
      :src="imagenFuente"
      alt="No se puede mostrar imagen"
    />

    <img :src="imagenFuente" alt="No se puede mostrar imagen" />
  </div>
</template>
  
  
  
  
  <script>
export default {
  props: {
    pokemonId: {
      type: Number,

      required: true,
    },
    muestraPoemon:{
        type:Boolean,
        required:true
    }
  },

  computed: {
    imagenFuente() {
      //console.log("hola")

      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
    },
  },
};
</script>
  
  
  
  
  <style scoped>
.oculta-pokemon {
  filter: brightness(0);
}

.contenedor-imagen {
  height: 200px;
}

img {
  position: absolute;

  height: 200px;

  right: 42%;
}
</style>