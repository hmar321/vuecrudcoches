<template>
  <div class="container-fluid">
    <div class="spinner-border" role="status" v-if="status === false">
      <span class="sr-only"></span>
    </div>
    <table v-else class="table table-success table-striped">
      <thead>
        <tr>
          <th>Marca</th>
          <th>Modelo</th>
          <th>Conductor</th>
          <th>Imagen</th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="car in coches" :key="car">
          <td>{{ car.marca }}</td>
          <td>{{ car.modelo }}</td>
          <td>{{ car.conductor }}</td>
          <td>
            <img :src="car.imagen" style="width: 100px" />
          </td>
          <td>
            <router-link :to="'/detalles/' + car.idCoche+'/'+car.marca+'/'+car.modelo+'/'+car.conductor" class="btn btn-primary">Detalles</router-link>
          </td>
          <td>
            <router-link :to="'/actualizar/' + car.idCoche" class="btn btn-success">Actualizar</router-link>
          </td>
          <td>
            <button @click="eliminarCoche(car.idCoche)" class="btn btn-danger">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ServiceCoches from "../services/ServiceCoche";
const servicio = new ServiceCoches();
export default {
  name: "CochesComponent",
  data() {
    return {
      coches: [],
      status: false,
    };
  },
  methods: {
    cargarCoches() {
      servicio.getAllCochesFetch().then(res=> {
        this.coches = res;
        this.status = true;
      });
    },
    eliminarCoche(id) {
      servicio.deleteCocheFetch(id).then(res=>{
        console.log(res);
        this.cargarCoches();
      });
    },
  },
  mounted() {
    this.cargarCoches();
  },
};
</script>

<style></style>
