const mongoose=require("mongoose");
const url=process.env.MONGO_URI

mongoose.connect('mongodb://mongo:27017/dborders').then(
    ()=>{
        console.log("db connexion --success")
    }
).catch(
    (err)=>{
        console.log("db connexion --error")
    }    
)


module.exports=mongoose;