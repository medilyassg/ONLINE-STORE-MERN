const express=require("express");
const router=express.Router();
const Product=require('../models/product');
const multer=require('multer');
filename='';

const mystorage=multer.diskStorage({
    destination:'./uploads',
    filename:(req,file,redirect)=>{
        let date=Date.now();
        let f1=date + '.' + file.mimetype.split('/')[1];
        redirect(null,f1);
        filename=f1;
    }
})
const upload=multer({storage:mystorage});


router.post('/addProduct',upload.any('imageUrl'),(req,res)=>{
    data=req.body;
    prod=new Product(data);
    prod.imageUrl=filename;
    prod.save()
    
    .then(
     (savedProduct)=>{
         res.status(200).send(savedProduct)
         //filename='';
     }
    )
    .catch(
     (err)=>{
         res.status(400).send(err)
     })
 });
 
 router.get('/getall',(req,res)=>{
    Product.find()
    .then(
        (products)=>{
            res.status(200).send(products);
        }
    )
    .catch(
        (err)=>{
            res.status(400).send(err)
        }
    )
})

router.get('/getidproduct/:id',(req,res)=>{
    myid=req.params.id;
    Product.findOne({_id:myid})
    .then(
        (product)=>{
            res.status(200).send(product);
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
    Product.findByIdAndUpdate({_id:id},newData)
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
    Product.findOneAndDelete({_id:id})
    .then(
        (deleteProduct)=>{
            res.status(200).send(deleteProduct);
        }
    ).catch(
        (err)=>{
            res.status(400).send(err)
        }
    )
})






module.exports=router;