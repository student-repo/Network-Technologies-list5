var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var all_users = [];
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use( bodyParser.json() );

app.use(express.static('public'));

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

app.get('/add_user', function (req, res) {
   res.sendFile( __dirname + "/" + "add_user.html" );
   response = {
      first_name:req.query.first_name,
      last_name:req.query.last_name
   };
   all_users.push(response);
   console.log(JSON.stringify(all_users));
})

app.get('/user_list', function (req, res) {
   res.end(JSON.stringify(all_users));
})

app.post('/add_user', function (req, res) {
   // Prepare output in JSON format
   response = {
      first_name:req.body.first_name,
      last_name:req.body.last_name
   };
   console.log("POST");
   console.log(response);
   all_users.push(response);
   res.end(JSON.stringify(response));
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://127.0.0.1:%s", port)

})
