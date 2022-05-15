
require('dotenv').config() 
const express = require('express');
const app = express();
const path = require('path');

const userRoutes = require("./Server/routes/users");
const noteRoutes = require("./Server/routes/notes");
const statusRoutes = require("./Server/routes/status");
const otherusersRoutes = require("./Server/routes/otherusers");

app.use(express.json()); //To parse JSON bodies (Applicable for Express 4.16+)
app.use(express.static(__dirname + "/Public"));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/Public' ,'Login.html')))



//CORS middleware
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");  
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");  
  next();
});
  app.use("/users", userRoutes);
  app.use("/notes", noteRoutes);
  app.use("/status", statusRoutes);
  app.use("/otherusers", otherusersRoutes);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>  console.log(`Server started on port ${PORT}!`));