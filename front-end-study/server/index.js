const express = require('express');
const bodyParser = require('body-parser');
const api = require('./routes');
const mongoose = require('mongoose');
const app = express();

// [ CONFIGURE mongoose ]

// CONNECT TO MONGODB SERVER
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('mongodb connected');
});

mongoose.connect('mongodb://localhost/branch');

// [CONFIGURE SERVER PORT]
var port = process.env.PORT || 8000;

// [CONFIGURE APP TO USE bodyParser]
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// SERVE STATIC FILES - REACT PROJECT
app.use('/', express.static(__dirname + '/public'));

// LOAD API FROM ROUTES
app.use('/api', api);

app.listen(port, () => {
    console.log('Express is listening on port', port);
});
