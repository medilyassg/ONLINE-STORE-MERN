const mongoose=require("mongoose");
const url=process.env.MONGO_URI

mongoose.connect('mongodb://127.0.0.1:27017/dbcostumers').then(
    ()=>{
        console.log("db connexion -- success")
    }
).catch(
    (err)=>{
        console.log("err")
    }    
)


module.exports=mongoose;