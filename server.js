var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
var commands = [ 
    {name: "Tony", command: "Call Paper"},
    {name: "Paper", command: "Call Tony"},
]

app.get('/commands', (req, res) =>{
    res.send(commands);
})

app.post('/commands', (req, res) =>{
    commands.push(req.body);
    io.emit('command', req.body);
    res.send(req.body);
})

io.on('connection', (socket) => {
    console.log('A  new user is accessing my threads');
})
let server = http.listen(3000 , () =>{
    console.log("server is listining on port", server.address().port);
});

