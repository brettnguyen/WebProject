const express = require('express');
const O_user = require('../models/otherusers');
const router = express.Router();

router
.get('/', async (req, res) => {
  try {
    const o_user = await O_user.getotherUsers();
    res.send(o_user);
  } catch(err) {
    res.status(401).send({message: err.message});
  }
})

.get('/getothernotes', async (req, res) => {
  try {
    const o_user = await O_user.getothernotes();
    res.send(o_user);
  } catch(err) {
    res.status(401).send({message: err.message});
  }
})

.post('/postNote', async (req, res) => {
    try {
      const o_user = await O_user.postNote(req.body);
    console.log(o_user)
    res.send({...o_user, otherusernote: undefined})
    
    } catch (error) {
      res.status(401).send({message: error.message});
    }
})


.put('/editotherNote', async (req, res) => {
    try {
      const o_user = await O_user.editotherNote(req.body);
      console.log(o_user)
      res.send({...o_user, otherusernote: undefined});
    } catch(error) {
      res.status(401).send({message: error.message})
    }
  })


  .delete('/deleteotherNote', async (req, res) => {
    try {
      await O_user.deleteotherNote(req.body.noteId);
      res.send({success: "bye note"});
    } catch(error) {
      res.status(401).send({message: error.message});
    }
  })

  module.exports = router;