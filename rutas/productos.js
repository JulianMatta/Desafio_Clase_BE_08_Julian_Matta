const { response } = require("express");
const express = require("express");
const { request } = require("http");
const router = express.Router();

const {Api} = require('../scripts/class.js');
const api = new Api();


function getRandomInt(min, max) {
    return Math.floor(Math.random() * max) + min;
}

router.get("/",(request,response)=> {
    response.send("<h1 style='color: blue'>Bienvenidos al servidor express")
});

//TRAE PRODUCTOS
router.get("/productos", (request,response) => {
    api.getAll()
      .then((listadoProductos) => response.send(listadoProductos))
      .catch((error) => response.send(error.message));
  });

//RECIBE PRODUCTOS
router.post("/productos", (request, response) => {
    const listadoProductos = api.save(request.body);
    response.send(`Se recibió el producto: ${JSON.stringify(listadoProductos)}`);
    console.log(`Se recibió el producto: ${JSON.stringify(listadoProductos)}`);

})

router.get('/productos/:id', (request, response) =>{
    const listadoProductos = api.getById(request.params.id);
    response.send(listadoProductos);
    console.log(`Este es el producto que buscas: ${JSON.stringify(listadoProductos)}`);
});
   
router.put('/productos/:id', (request, response) =>{
    const listadoProductos = api.updateById(request.params.id, request.body);
    response.send((listadoProductos === undefined ? `Se actualizó el producto con id ${request.params.id}` : JSON.stringify(listadoProductos)));
    console.log((listadoProductos === undefined ? `Se actualizó el producto con id ${request.params.id}` : JSON.stringify(listadoProductos)));
});

router.delete('/productos/:id', (request, response) =>{
    const listadoProductos = api.deleteById(request.params.id);
    response.send((listadoProductos === undefined ? `Se eliminó el producto con id ${request.params.id}` : JSON.stringify(listadoProductos)));
    console.log((listadoProductos === undefined ? `Se eliminó el producto con id ${request.params.id}` : JSON.stringify(listadoProductos)));
});



//---------------- ANTERIOR -----------------

//RANDOM
server.get("/productoRandom", (request,response) => {
    contenedorProductos.getAll()
    .then(async (listadoProductos) =>{
        //obtengo un numero al azar tomando en cuenta la cantidad q hay en el archivo
        let nroRandom = getRandomInt(1, listadoProductos.length);
        //devuelvo el producto con el id = al numero obtenido al azar
        response.send(await contenedorProductos.getById(nroRandom));
    })
    .catch((error) => console.error(error.message));
})

//Busqueda ID
server.get("/busquedaporID", (request, response) => {
    contenedorProductos.getAll()
    .then(async (listadoProductos) =>{
        response.send(await contenedorProductos.getById(5));
    })
    .catch((error) => console.error(error.message));
})



module.exports = router;