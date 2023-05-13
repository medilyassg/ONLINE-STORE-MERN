const express=require("express");
const productRouter=require('./routes/product');
const cors = require('cors');


require("./config/connect");
const app=express();
app.use(cors());

app.use(express.json());


app.use('/product',productRouter);



//3axan nxof foto
app.use('/getimage',express.static('./uploads'));

app.listen(3002,()=>{
    console.log("server connexion -- success")
});