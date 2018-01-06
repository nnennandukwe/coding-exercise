const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const fetch = require("node-fetch");
var http = require('http');
var fs = require('fs');

var port = process.env.PORT || 3001;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
};

app.listen(port, () => {
  console.log('listening on 3001...')
});

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname + '/src/js')));

app.get('/', function(req,res){
  res.render('../src/views/pages/index.ejs')
});

fetch('http://api.icndb.com/').then(function(response){return response.json()
}).catch(function(err){
  console.log("unsuccessful request.")
});
