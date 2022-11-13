const Contenedor = require('./Contenedor.js')

const express = require("express");

const app = express();

const PORT = 8080;

const contenedor = new Contenedor("./productos.txt");

app.get("/", async (req,res) =>{
    res.send("Pagina inicial, escribir /productos o /productoRandom en la URL");
})

app.get("/productos", async (req,res) =>{
    res.send(await contenedor.getAll());
})

app.get("/productoRandom", async (req,res) =>{
    res.send(await contenedor.getRandom());
})

app.listen(PORT, () =>{
    console.log("Servidor conectado");
})