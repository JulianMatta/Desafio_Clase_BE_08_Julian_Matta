// const Contenedor = require("./Modulos/Contenedor.js"); //clase contenedor que trae productos
const express = require("express"); // libreria para crear servidor
const { request } = require("http");
const { response } = require("express");

const productos = require("./rutas/productos");

const server = express(); // se suele poner a la variable app o server
const PORT = 8080;

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use(express.static(__dirname + '/public'));
server.use('/api', productos);

const connectedServer = server.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${connectedServer.address().port}`);
})
connectedServer.on("error", error => console.log(`Error en servidor ${error}`));

//http://localhost:8080