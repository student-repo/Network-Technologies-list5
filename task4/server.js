var express = require('express');
var app = express();

app.get('/*', function (req, res) {
	console.log('url: ' + req.url);
	console.log('method: ' + req.method);
	console.log(req.headers);
	console.log();
	console.log();
	res.send('url: ' + req.url + '\n' +  'method: ' + req.method + '\n' + JSON.stringify(req.headers, null, 4));
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://localhost:%s", port)
})
