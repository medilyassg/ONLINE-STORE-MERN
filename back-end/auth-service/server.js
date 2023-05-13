const express=require("express");
const userRouter=require('./routes/user');
const cors = require('cors');


require("./config/connect");
const app=express();
app.use(cors());

app.use(express.json());


app.use('/user',userRouter);




app.listen(3000,()=>{
    console.log("server connexion --success")
});