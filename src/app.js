const express = require("express");
const morgan = require("morgan");
const app = express();



app.use(morgan("dev"));


const sayWelcome = (req, res, next) => {
  res.send("Welcome to my World ꒰(･‿･)꒱ !");
}

const sayWhoAreYou = (req, res, next) => {
  res.send("And Who are You (◐ω◑ ) ? ")
}

app.get('/welcome', sayWelcome);
app.get('/you', sayWhoAreYou);


module.exports = app;
