const express = require("express");

const app = express()

const PORT = 8081

app.get('/', (req, res)=>{
    res.send("API Services OK [API version: 0.1.0]!!!");
});

app.post('/', (req, res)=>{
    res.send("Servicio creado");
});

app.get('/list', (req, res)=>{
    res.send("Servicios Listados");
});

app.post('/delete/:id', (req, res)=>{
    res.send("Servicio Eliminado");
});

app.get('/:id', (req, res)=>{
    res.send("Servicio Leido");
});

app.listen(PORT, ()=>{
    console.log(`API Services NodeJS on port: ${PORT}`);
})