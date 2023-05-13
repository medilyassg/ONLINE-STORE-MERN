const express=require("express");

const customerRouter=require('./routes/customer');

const cors = require('cors');

// require('dotenv').config();
//const port=process.env.PORT
require("./config/connect");
const app=express();
app.use(cors());

app.use(express.json());

//http://127.0.0.1:3000/product/


app.use('/customer',customerRouter);


app.listen(3004,()=>{
    console.log("server connexion --success")
});