const express = require("express");

const app = express()

const PORT = 8081

app.get('/', (req, res)=>{
    res.send({"message": "NodeJS OK [API version: 0.3.0]!!!"});
});

app.listen(PORT, ()=>{
    console.log("Server API en ejecución en puerto " + PORT);
})