const express = require('express');
const Status = require('../models/status');
const router = express.Router();

router

.get('/', async (req, res) => {
    try {
      const stat = await Status.getStatus();
      res.send(stat);
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })
  
  .post('/postUpvote', async (req, res) => {
      try {
        const stat = await Status.postUpvote(req.body);
      console.log(stat)
      res.send({...stat, upvote: undefined})
      
      } catch (error) {
        res.status(401).send({message: error.message});
      }
  })

  .post('/postdownvote', async (req, res) => {
    try {
      const stat = await Status.postdownvote(req.body);
    console.log(stat)
    res.send({...stat, downvote: undefined})
    
    } catch (error) {
      res.status(401).send({message: error.message});
    }
})
  
  .put('/editstatus', async (req, res) => {
    try {
      const stat = await Status.editstatus(req.body);
      console.log(stat)
      res.send({...stat, status: undefined});
    } catch(error) {
      res.status(401).send({message: error.message})
    }
  })

  module.exports = router;