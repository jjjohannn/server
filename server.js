const express = require('express');
const app = express();
app.get('/',(req,res)=>res.send ('hola un nuevo mensaje para people '))
app.listen(8080);
console.log("server on port 8080")