<template>
  <div>
    <h1>Actualizar {{ $route.params.id }}</h1>
    <router-link to="/">Back to home</router-link>
    <br/>
    <div class="spinner-border" role="status" v-if="status === false">
      <span class="sr-only"></span>
    </div>
    <form v-else v-on:submit.prevent="updateCoche()">
      <input
        v-model="coche.idCoche"
        hidden
        type="number"
        class="form-control"
      />
      <div class="mb-3" style="width: 400px">
        <label class="form-label">Marca</label>
        <input v-model="coche.marca" type="text" class="form-control" />
      </div>
      <div class="mb-3" style="width: 400px">
        <label class="form-label">Modelo</label>
        <input v-model="coche.modelo" type="text" class="form-control" />
      </div>
      <div class="mb-3" style="width: 400px">
        <label class="form-label">Conductor</label>
        <input v-model="coche.conductor" type="text" class="form-control" />
      </div>
      <div class="mb-3" style="width: 400px">
        <label class="form-label">Imagen</label>
        <input v-model="coche.imagen" type="text" class="form-control" />
      </div>
      <button class="btn btn-success">Actualizar</button>
    </form>
  </div>
</template>

<script>
import ServiceCoches from "../services/ServiceCoche";
const servicio = new ServiceCoches();
export default {
  name: "ActualizarCocheComponent",
  data() {
    return {
      coche: {
        idCoche: 0,
        marca: "",
        modelo: "",
        conductor: "",
        imagen: "",
      },
      status: false,
    };
  },
  methods: {
    cargarCoche() {
      var id = this.$route.params.id;
      servicio.findCoche(id).then((res) => {
        this.coche = res;
        this.status = true;
      });
    },
    updateCoche() {
      servicio.updateCoche(this.coche).then(res=>{
        console.log(res);
        this.$router.push("/");
      });
    },
  },
  mounted() {
    this.cargarCoche();
  },
};
</script>

<style>
</style>