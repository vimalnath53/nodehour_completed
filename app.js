var express = require('express'); 
var http = require('http'); // To use the HTTP server and client one must require('http').
var path = require('path'); // The path module provides utilities for working with file and directory paths
var bodyParser = require('body-parser');

var app = express();
var customers = require('./routes/customer');
app.set('port',process.env.PORT || 4300);
app.set("view engine",'ejs');


//console.log(process.env.PORT);

var dust = require('dustjs-linkedin'),
 cons = require('consolidate');
//app.engine('dust', cons.dust);
//app.set('view engine', 'dust');


               

// parse the incoming request , url encode it and send it to req.body
app.use(bodyParser.urlencoded({extended:true}));

//set the static files path
app.use(express.static(path.join(__dirname, 'public')));

app.get('/customers/list',customers.list);
app.get('/customers/add',customers.add);
app.post('/customers/add', customers.save);
app.get('/customers/edit', customers.edit);
app.post('/customers/save_edit',customers.save_edit);
app.get('/customers/delete', customers.delete_customer);


var psapac = ["mts", "integration", "custom"];

app.get('/customers/testdust', function(req,res){
	res.render('dustindex',{page_title:"TEST DUST",data:psapac});
});


http.createServer(app).listen(app.get('port'),function () {
	console.log("express is listening to "+app.get('port'));
});