const express = require('express');
const NoteCon = require('../models/notes');
const router = express.Router();

router
.get('/', async (req, res) => {
  try {
    const noteCon = await NoteCon.getNotes();
    res.send(noteCon);
  } catch(err) {
    res.status(401).send({message: err.message});
  }
})

.get('/getAllNotes', async (req, res) => {
  try {
    const noteCon = await NoteCon.getAllNotes();
    res.send(noteCon);
  } catch(err) {
    res.status(401).send({message: err.message});
  }
})


.post('/createNote', async (req, res) => {
    try {
      const noteCon = await NoteCon.createNote(req.body);
    console.log(noteCon)
    res.send({...noteCon, note: undefined})
    
    } catch (error) {
      res.status(401).send({message: error.message});
    }
})

.put('/editNote', async (req, res) => {
  try {
    const noteCon = await NoteCon.editNote(req.body);
    console.log(noteCon)
    res.send({...noteCon, note: undefined});
  } catch(error) {
    res.status(401).send({message: error.message})
  }
})

.delete('/deleteNote', async (req, res) => {
  try {
    await NoteCon.deleteNote(req.body.noteId);
    res.send({success: "bye note"});
  } catch(error) {
    res.status(401).send({message: error.message});
  }
})






module.exports = router;