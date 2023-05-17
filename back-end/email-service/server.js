const express=require('express')
const amqp=require('amqplib')
const mongoose=require('mongoose')
const userModel=require('./userModel')
var nodemailer=require('nodemailer')

const app=express()

mongoose.connect('mongodb://mongo:27017/dbusers',{useNewUrlParser:true})
        .then(()=>{console.log('db connexion --success');})
        .catch((err)=>{console.log('db connexion --error')})


var connexion , chanel

const queuname="email-service-queue"

async function connectRabbitMQ(){
    const amqpServer = "amqp://guest:guest@rabbit:5672";
    connexion=await amqp.connect(amqpServer)
    chanel = await connexion.createChannel();
    await chanel.assertQueue(queuname)
}


var transporter=nodemailer.createTransport({
    host:'smtp.gmail.com',
    port: 465,
    auth:{
        
        user:'elghazi.mohamed.ilyass@gmail.com',
        pass:"gmbjqsmnihhroizt"

    }
})

connectRabbitMQ().then(()=>{

    chanel.consume(queuname,(data)=>{
        const jsondata=JSON.parse( data.content)
        const user = userModel.find({ id: 1 });
        var mailoption={
            from:'elghazi.mohamed.ilyass@gmail.com',
            to:user.email,
            subject:'Thank you for your order',
            text: `Dear ${user.first_name},\n` +
  `Thank you for choosing our service and placing an order with us. We are thrilled to serve you! Here are the details of your order:\n` +
  `Order ID: ${jsondata._id}\n` +
  `Order Date: ${jsondata.createdAt}\n` +
  `Total Amount: ${jsondata.totalAmount}\n` +
  `Payment Method: ${jsondata.payment_methode}\n` +
  `We will begin processing your order immediately. You will receive a confirmation email once your order is shipped.\n` +
  `\n` +
  `If you have any questions or need further assistance, please don't hesitate to contact our customer support team at [elghazi.mohamed.ilyass@gmail.com] or [0655176045].\n` +
  `\n` +
  `Thank you again for your trust and support. We look forward to serving you.\n` +
  `\n` +
  `Best regards,\n` +
  `ilyass&issam`

        }
        transporter.sendMail(mailoption,function(error,info){
            if(error){
                console.log("error")
            }else{
                console.log('email sent :' + info.response)
            }
        })
        chanel.ack(data)
    })
})


app.listen(3000,()=>{
    console.log('server connexion --success')
})