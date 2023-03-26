const express=require("express");
const router=express.Router();
const User=require('../models/user');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken')



 router.post('/register',async(req,res)=>{
    data=req.body;
    const usr=new User(data);
    salt=bcrypt.genSaltSync(10);
    cryptPass=await bcrypt.hashSync(data.password,salt);
    usr.password=cryptPass;
    usr.save()
        .then(
            (saved)=>{
                res.status(200).send(saved)
            }
        )
        .catch(
            (err)=>{
                res.status(500).send(err)
            }
        )
 })

 router.post('/login',async(req,res)=>{
    data=req.body;
    user= await User.findOne({email:data.email})
    if(!user){
        res.status(404).send("Invalid email or password");
    }else{
        validPass=bcrypt.compareSync(data.password,user.password)
        if(!validPass){
            res.status(401).send("Invalid email or password");
        }else{
            payload={
                _id:user._id,
                email:user.email,
                name:user.name
            }
            token=jwt.sign(payload,'11111')
            res.status(200).send({mytoken:token})
        }
    }
 })
 
 
 
 router.get('/getall',(req,res)=>{
     User.find()
     .then(
         (users)=>{
             res.status(200).send(users);
         }
     )
     .catch(
         (err)=>{
             res.status(200).send(err)
         }
     )
 })
 
 router.get('/getbyid/:name',(req,res)=>{
     myid=req.params.name;
     User.findOne({name:myid})
     .then(
         (user)=>{
             res.send(user);
         }
     ).catch(
         (err)=>{
             res.send(err)
         }
     )
 })
 
 router.put('/put/:id',(req,res)=>{
     id=req.params.id;
     newData=req.body;
     User.findByIdAndUpdate({_id:id},newData)
     .then(
         (updated)=>{
             res.send(updated);
         }
     ).catch(
         (err)=>{
             res.send(err)
         }
     )
 })
 
 router.delete('/delete/:id',(req,res)=>{
     id=req.params.id;
     User.findOneAndDelete({_id:id})
     .then(
         (deleteUser)=>{
             res.send(deleteUser);
         }
     ).catch(
         (err)=>{
             res.send(err)
         }
     )
 })





module.exports=router;