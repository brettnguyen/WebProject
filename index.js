const express = require('express');
const app = express();

const userRoutes = require("./Server/routes/user");

app.use("/users", userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>  console.log(`Server started on port ${PORT}!`));