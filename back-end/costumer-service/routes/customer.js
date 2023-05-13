const express=require('express');
const router=express.Router();
const Customer=require('../models/customer')

router.post('/add',(req,res)=>{
    data=req.body;
    usr=new Customer(data);
    usr.save()
        .then(
            (savedCustomer)=>{
                res.send(savedCustomer)
            }
        )
        .catch(
            (err)=>{
                res.send(err)
            }
        )
});

router.get('/getall',(req,res)=>{
    Customer.find()
    .then(
        (customers)=>{
            res.status(200).send(customers);
        }
    )
    .catch(
        (err)=>{
            res.status(400).send(err)
        }
    )
})

router.get('/getidcustomer/:id',(req,res)=>{
    myid=req.params.id;
    Customer.findOne({_id:myid})
    .then(
        (customer)=>{
            res.status(200).send(customer);
        }
    ).catch(
        (err)=>{
            res.status(400).send(err)
        }
    )
})

router.put('/update/:id',(req,res)=>{
    id=req.params.id;
    newData=req.body;
    Customer.findByIdAndUpdate({_id:id},newData)
    .then(
        (updated)=>{
            res.status(200).send(updated);
        }
    ).catch(
        (err)=>{
            res.status(400).send(err)
        }
    )
})


router.delete('/deletebyid/:id',(req,res)=>{
    id=req.params.id;
    Customer.findOneAndDelete({_id:id})
    .then(
        (deleteCustomer)=>{
            res.status(200).send(deleteCustomer);
        }
    ).catch(
        (err)=>{
            res.status(400).send(err)
        }
    )
})









module.exports=router;