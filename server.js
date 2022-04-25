const express = require('express');
const app = express();
app.get('/',(req,res)=>res.send ('hola un nuevo mensaje para people '))
app.listen(80);
console.log("server on port 80")