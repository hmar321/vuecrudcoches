<template>
  <div class="container">
    <h1>Insertar coche</h1>
    <form v-on:submit.prevent="insertarCoche()">
        <input v-model="coche.idCoche" hidden type="number" class="form-control"/>
        <div class="mb-3" style="width:400px">
            <label class="form-label">Marca</label>
            <input v-model="coche.marca" type="text" class="form-control"/>
        </div>
        <div class="mb-3" style="width:400px">
            <label class="form-label">Modelo</label>
            <input v-model="coche.modelo" type="text" class="form-control"/>
        </div>
        <div class="mb-3" style="width:400px">
            <label class="form-label">Conductor</label>
            <input v-model="coche.conductor" type="text" class="form-control"/>
        </div>
        <div class="mb-3" style="width:400px">
            <label class="form-label">Imagen</label>
            <input v-model="coche.imagen" type="text" class="form-control"/>
        </div>
        <button class="btn btn-success">Crear</button>
    </form>
  </div>
</template>

<script>
import ServiceCoches from "../services/ServiceCoche";
const servicio = new ServiceCoches();
export default {
  name: "CrearCocheComponent",
  data() {
    return {
      coche: {
        idCoche: 0,
        marca: "",
        modelo: "",
        conductor: "",
        imagen: "",
      },
    };
  },
  methods: {
    insertarCoche() {
      servicio.insertCocheFetch(this.coche).then((res) => {
        console.log(res);
        this.$router.push("/");
      });
    },
  },
};
</script>

<style></style>
