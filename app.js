const express = require("express");

const app = express();

app.get("/", (req, res)=>{
    res.send("Backend Nodejs");
});

app.listen(9000, ()=>{
    console.log("Server Running on Port:", 9000);
});