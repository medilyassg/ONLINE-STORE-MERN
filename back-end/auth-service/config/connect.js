const mongoose=require("mongoose");
const User = require("../models/user");

mongoose.connect('mongodb://mongo:27017/users').then(
    ()=>{
        const admin=new User({
            first_name : "admin",
            last_name : "admin",
            email :"admin@gmail.com",
            password:"$2b$10$SqWBeVS8dNqLjcwDfCdl.e2gZS6rD5T2ErrjPnQ/UoRvM8nYTVypS",
            role:"seller"
        });
        admin.save().then(()=>{
            console.log("admin created")
        })


        console.log("db connexion --success")
    }
).catch(
    (err)=>{
        console.log("db connexion --error")
    }    
)


module.exports=mongoose;