const mongoose=require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/users').then(
    ()=>{
        console.log("db connexion --success")
    }
).catch(
    (err)=>{
        console.log("db connexion --error")
    }    
)


module.exports=mongoose;