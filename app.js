
var express = require('express');
var load = require("express-load")
var path = require('path');





var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');





app.use(express.static(path.join(__dirname, '/public/')));
/* app.use(express.static(path.join(__dirname, '/imagens/'))); */

load('models')
.then('controllers')
.then('routes')
.into(app);

app.listen(3000,function(){
  console.log("Veterano 16 na área!")
})



module.exports = app;
