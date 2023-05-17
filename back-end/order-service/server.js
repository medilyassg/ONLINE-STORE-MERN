const express=require("express");

const commandRouter=require('./routes/command')
const cors = require('cors');

// require('dotenv').config();
//const port=process.env.PORT
require("./config/connect");
const app=express();
app.use(cors());

app.use(express.json());

//http://127.0.0.1:3000/product/


app.use('/command',commandRouter);



app.listen(3000,()=>{
    console.log("server connexion --success")
});