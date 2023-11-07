import Global from "@/Global";
import axios from "axios";

export default class ServiceCoche {
    getAllCoches() {
        return new Promise(function (resolve) {
            var request = "api/coches";
            var url = Global.urlApiEjemplos + request;
            axios.get(url).then(res => {
                resolve(res.data);
            });
        });
    }

    findCoche(id) {
        return new Promise(function (resolve) {
            var request = "api/coches/findcoche/" + id;
            var url = Global.urlApiEjemplos + request;
            axios.get(url).then(res => {
                resolve(res.data);
            });
        });
    }

    insertCoche(coche) {
        return new Promise(function (resolve) {
            var request = "api/coches/insertcoche";
            var url = Global.urlApiEjemplos + request;
            axios.post(url, coche).then(res => {
                resolve(res);
            });
        })

    }

    updateCoche(coche) {
        return new Promise(function (resolve) {
            var request = "api/coches/updatecoche";
            var url = Global.urlApiEjemplos + request;
            axios.put(url, coche).then(res => {
                resolve(res);
            });
        })

    }

    deleteCoche(id) {
        return new Promise(function (resolve) {
            var request = "api/coches/deletecoche/" + id;
            var url = Global.urlApiEjemplos + request;
            axios.get(url).then(res => {
                resolve(res);
            });
        })
    }

    getAllCochesFetch() {
        return new Promise(function (resolve) {
            var request = "api/coches";
            var url = Global.urlApiEjemplos + request;
            fetch(url).then((response) => response.json())
                .then((data) => {
                    resolve(data);
                });
        });
    }

    findCocheFetch(id) {
        return new Promise(function (resolve) {
            var request = "api/coches/findcoche/" + id;
            var url = Global.urlApiEjemplos + request;
            fetch(url).then((response) => response.json())
                .then((data) => {
                    resolve(data);
                });
        });
    }

    insertCocheFetch(coche) {
        return new Promise(function (resolve) {
            var request = "api/coches/insertcoche";
            var url = Global.urlApiEjemplos + request;
            var fetchData = {
                method: 'POST',
                body: JSON.stringify(coche),
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
            }
            fetch(url, fetchData).then((response) => {
                resolve(response);
            });
        })

    }

    updateCocheFetch(coche) {
        return new Promise(function (resolve) {
            var request = "api/coches/updatecoche";
            var url = Global.urlApiEjemplos + request;
            var fetchData = {
                method: 'PUT',
                body: JSON.stringify(coche),
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
            }
            fetch(url, fetchData).then((response) => {
                resolve(response);
            });
        })

    }

    deleteCocheFetch(id) {
        return new Promise(function (resolve) {
            var request = "api/coches/deletecoche/" + id;
            var url = Global.urlApiEjemplos + request;
            var fetchData = {
                method: 'DELETE',
            }
            fetch(url, fetchData).then((response) => {
                resolve(response);
            });
        })
    }
}
