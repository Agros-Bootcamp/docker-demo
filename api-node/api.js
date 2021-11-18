const express = require("express");

const app = express()

const PORT = 8081

app.get('/', (req, res)=>{
    res.send("NodeJS OK [API version: 0.2.2]!!!");
});

app.listen(PORT, ()=>{
    console.log("Server API en ejecución en puerto " + PORT);
})