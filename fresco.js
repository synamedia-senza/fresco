// Signs
// Andrew Zamler-Carhart

// To run the server:
// HOSTNAME=localhost PORT=1234 node fresco.js
// or just:
// node fresco.js

let fresco = this;
let express = require("express"),
	app = express(),
	errorHandler = require('errorhandler'),
	state = require('./config.json'),
	hostname = process.env.HOSTNAME || 'localhost',
	port = parseInt(process.env.PORT, 10) || 1234,
	publicDir = process.argv[2] || __dirname + '/public',
	io = require('socket.io').listen(app.listen(port)),
globalSocket = null;

app.use(express.static(publicDir));
app.use(errorHandler({
	dumpExceptions: true,
	showStack: true
}));

console.log("Fresco server running at " + hostname + ":" + port);

io.sockets.on('initialload', function (socket) {  
	socket.emit('video', state);
});

io.sockets.on('connection', (socket) => {
  socket.on('hello', (message) => {  
  	socket.emit('video', state);
  });

  socket.on('playing', (message) => {  
    state.playing = message.playing;
    state.playing ? play() : pause();
    io.sockets.emit('playing', state);
  });

  socket.on('time', (message) => {  
    state.time = message.time;
    io.sockets.emit('time', state);
  });
});

let interval = null;

function play() {
  interval = setInterval(() => {
    state.time += 0.1;
    
    if (state.time >= state.videos[state.index || 0].duration) {
      state.index = (state.index + 1) % state.videos.length;
      state.time = 0;
      console.log(state);
      io.sockets.emit('video', state);
    }
  }, 100);
}

function pause() {
  clearInterval(interval);
}

play();
