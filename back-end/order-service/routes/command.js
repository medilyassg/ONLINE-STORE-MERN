const express=require('express');
const router=express.Router();
const Command=require('../models/command')
const amqp = require('amqplib')

var connexion , chanel
const queuname = "email-service-queue"

async function connectRabbitMQ(){
  const amqpserver = "amqp://localhost";
  connexion=await amqp.connect(amqpserver)
  chanel= await connexion.createChannel()
  await chanel.assertQueue(queuname)
}

  
  // CREATE a command
  router.post('/createCommand', async (req, res) => {
    const command = new Command({
      user_id: req.body.user_id,
      products: req.body.products,
      totalAmount: req.body.totalAmount,
      status: req.body.status,
      payment_methode:req.body.payment_methode,
      createdAt: req.body.createdAt
    });
  
    try {
      connectRabbitMQ().then(()=>{
        command.save();
        res.status(201).json(command);
        chanel.sendToQueue(queuname,Buffer.from(JSON.stringify(command)))
      })

      
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

  // GET all commands
router.get('/getall', async (req, res) => {
    try {
      const commands = await Command.find();
      res.json(commands);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  // GET one command
  router.get('/:id', getCommand, (req, res) => {
    res.json(res.command);
  });

  // UPDATE a command
  router.put('/:id', getCommand, async (req, res) => {
    if (req.body.user != null) {
      res.command.user = req.body.user;
    }
    if (req.body.products != null) {
      res.command.products = req.body.products;
    }
    if (req.body.totalAmount != null) {
      res.command.totalAmount = req.body.totalAmount;
    }
    if (req.body.status != null) {
      res.command.status = req.body.status;
    }
  
    try {
      const updatedCommand = await res.command.save();
      res.json(updatedCommand);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  // DELETE a command
  router.delete('/:id', getCommand, async (req, res) => {
    try {
      await     Command.findOneAndDelete({_id:res.command._id})
      ;
      res.json({ message: 'Command deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  // Middleware to get a command by ID
  async function getCommand(req, res, next) {
    let command;
    try {
      command = await Command.findById(req.params.id);
      if (command == null) {
        return res.status(404).json({ message: 'Command not found' });
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  
    res.command = command;
    next();
  }


module.exports=router;