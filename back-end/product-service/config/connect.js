const mongoose=require("mongoose");
const url=process.env.MONGO_URI

mongoose.connect('mongodb://127.0.0.1:27017/dbproducts').then(
    ()=>{
        console.log("db connexion --success")
    }
).catch(
    (err)=>{
        console.log("db connexion --error")
    }    
)


module.exports=mongoose;