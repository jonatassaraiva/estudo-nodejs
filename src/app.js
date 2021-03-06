var express = require('express');

var app = express();

var port = 3000;

app.use(express.static('public'));
app.use(express.static('views'));

app.get('/', function (req, res) {
	res.send('Hello word');
});

app.get('/books', function (req, res) {
	res.send('Hello books');
});

app.listen(port, function (err) {
	console.log('running server on port: ' + port);
});