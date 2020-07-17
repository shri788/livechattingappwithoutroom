var express = require('express');
var socket = require('socket.io');

// App setup
var app = express();
var server = app.listen(3000, function(){
    console.log('listening for requests on port 3000');
});

// Socket setup
var io = socket(server);

// Listen for new connection and print a message in console 
io.on('connection',(socket)=>{

    console.log('new connection made.');


    socket.on('message', function(data){
        io.sockets.emit('new message', data);
    });


});
