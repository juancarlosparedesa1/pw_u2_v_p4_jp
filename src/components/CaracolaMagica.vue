<template>
  <h1>Caracola Mágica</h1>
  <img v-if="rutaImagen" :src="rutaImagen" alt="No se puede presentar la imagen" />

  <div class="bg-dark"></div>

  <div class="contenedor">
    <input v-model="pregunta" type="text" placeholder="Hazme una pregunta" />
    <p>Recuerda terminar con un ? la pregunta</p>

    <div>
      <h2>{{ pregunta }}</h2>
      <h1>{{ respuesta }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pregunta: "",
      respuesta: "",
      rutaImagen: null,
    };
  },

  watch: {
    pregunta(value, oldValue) {
      console.log(value);
      console.log(oldValue);
      if (value.includes("?")) {
        console.log("Consumir el API");
        this.pregunta = ""
        this.respuesta = "Esperando espere por favor"
        this.consumirAPI();
      }
    },
  },

  methods: {
    async consumirAPI() {
      const respuesta = await fetch("https://yesno.wtf/api").then((r) =>
        r.json()
      );
      const { answer, image } = respuesta;

      console.log(respuesta);
      console.log(answer);
      console.log(image);

      this.respuesta = answer;
      this.rutaImagen = image;
    },
  },
};
</script>

<style scoped>
img, .bg-dark {
  height: 100vh;
  width: 100vw;
  left: 0px;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  top: 0px;
}


.bg-dark{
  background-color: rgba(0,0,0,0.4);
}

.contenedor{
  position: relative;
}

input{
  width: 250px;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
}

p,h1,h2{
  color: white;
}

p{
  font-size: 20px;
  margin-top: 0px;
}

</style>