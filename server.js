const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const fetch = require("node-fetch");
var http = require('http');
var fs = require('fs');
var axios = require('axios');

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

// load API check
axios.get('http://api.icndb.com/jokes/random')
    .then(function(response,
        data=response.data,
        joke=response.data.value.joke
      ) {
      console.log('random joke: ',joke)
    })
    .catch(function(error) {
      console.log(error);
    });
