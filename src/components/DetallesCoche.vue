<template>
  <div>
    <h1>Detalles {{ $route.params.id }}</h1>
    <router-link to="/">Back to home</router-link>
    <dl>
        <dt>Marca</dt>
        <dd>{{ $route.params.marca }}</dd>
        <dt>Modelo</dt>
        <dd>{{ $route.params.modelo }}</dd>
        <dt>Conductor</dt>
        <dd>{{ $route.params.conductor }}</dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: "DetallesCocheComponent",
};
</script>

<style>
</style>