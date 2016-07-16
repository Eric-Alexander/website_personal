// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)

var path = require('path');
// Setting Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting View Engine set to html
app.set('view engine', 'html');
// Routes
// Root Request
app.get('/', function(req, res) {

    res.render('index');
})


// Setting Server to Listen on Port: 8000
app.listen(8100, function() {
    console.log("listening on port 8000");
})
