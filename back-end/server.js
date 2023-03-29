const express=require("express");
const productRouter=require('./routes/product');
const userRouter=require('./routes/user');
const customerRouter=require('./routes/customer');
const commandRouter=require('./routes/command')
const cors = require('cors');

// require('dotenv').config();
//const port=process.env.PORT
require("./config/connect");
const app=express();
app.use(cors());

app.use(express.json());

//http://127.0.0.1:3000/product/

app.use('/product',productRouter);
app.use('/user',userRouter);
app.use('/customer',customerRouter);
app.use('/command',commandRouter);


//3axan nxof foto
app.use('/getimage',express.static('./uploads'));

app.listen(3001,()=>{
    console.log("server work")
});