import { createRouter, createWebHistory } from "vue-router";
import CochesComponent from "./components/Coches.vue";
import CrearCocheComponent from "./components/CrearCoche.vue";
import DetallesCocheComponent from "./components/DetallesCoche.vue";
import ActualizarCocheComponent from "./components/ActualizarCoche.vue";

const routes = [
    { path: "/", component: CochesComponent },
    { path: "/crear", component: CrearCocheComponent },
    { path: "/detalles/:id/:marca/:modelo/:conductor", component: DetallesCocheComponent },
    { path: "/actualizar/:id", component: ActualizarCocheComponent },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;