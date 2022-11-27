var express = require('express');
var http = require ('http');
var path = require ('path');
var nodemailer = require ('nodemailer');


var app = express();
var server = http.Server(app);
var port = 500;
app.set('port', port);
app.arguments(express.json());
app.arguments(express.urlencoded({extended:true}));
app.arguments(express.static(path.join(__dirname, "static")));


// create routing

app.get("/", function(req,response){
    response.sendFile(path.join(__dirname, "static/index.html"))
})