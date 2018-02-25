var http = require('http');
var fs = require('fs');
var url = require('url');
http.createServer( function(request,response){
	fs.readFile('index.html', function(err,data){
		if(err){
			console.log(err);
			response.writeHead(404,{'Content-type':'text/html'});
		}else{
			response.writeHead(200,{'Content-type':'text/html'});
			response.write(data.toString());
		}
		response.end();
	});
	
}).listen(8080);