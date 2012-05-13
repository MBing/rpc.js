/*
	rpc.js - Express implementation
	- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
	Don't forget to run "npm install" to install express
*/


 // include rpc.js
var rpc = require('../../rpc.js');

// load your API schema
rpc.schema = require('../example.schema.js');

 // include express
var express = require('express');
var app = module.exports = express.createServer();

// Express Configuration
app.configure(function(){
  app.use(express.bodyParser());
  app.use(express.static('../../help/'));
  app.use(express.errorHandler()); 
});


// Send html UI
app.get('/help', function(req, res){
	res.end(rpc.uiHtml());	
});


// Send request to rpc.js
app.post('/', function(req, res){

	rpc.input({
		textInput: req.body.rpc,
		callback: function(output) {

			res.writeHead(200, {'Content-Type': 'application/json'});
			res.end(JSON.stringify(output));

		}
	});

});


app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);


