var sockethost = location.hostname;
var socket = io.connect(sockethost); //set this to the ip address of your node.js server

const width = 1920;
const height = 1080;
const main = document.getElementById("main");
const video = document.getElementById("video");
const toast = document.getElementById("toast");

let screen = 0;
let playing = false;

function updateScreen() {
  video.style.marginTop  = (screen == 0 || screen == 1) ? "0px" : "-1080px";
  video.style.marginLeft = (screen == 0 || screen == 2) ? "0px" : "-1920px";
}
updateScreen();

document.addEventListener("keydown", function(event) {
  switch (event.key) {
    case "ArrowUp": up(); break;
    case "ArrowDown": down(); break;
    case "ArrowLeft": left(); break;
    case "ArrowRight": right(); break;      
    case "Enter": enter(); break;      
    case "Escape": escape(); break;      
	default: return;
  }
  event.preventDefault();
});

function up() {
  screen = (screen + 1) % 4;
  showToast(screen);
  updateScreen();
}

function down() {
  screen = (screen + 3) % 4;
  showToast(screen);
  updateScreen();
}

function left() {
  socket.emit('time', {"time": video.currentTime - 0.5});
}

function right() {
  socket.emit('time', {"time": video.currentTime + 0.5});
}

function enter() {
  socket.emit('playing', {"playing": !playing});
}

function escape() {

}

function playPause() {
  playing ? video.play() : video.pause();
}

socket.emit('hello', '');

socket.on('playing', (message) => {
  playing = message.playing;
  video.currentTime = message.time;
  playPause();
});

socket.on('time', (message) => {
  video.currentTime = message.time;
});

socket.on('video', (message) => {
  video.setAttribute("src", message.videos[message.index || 0].src);
  video.volume = 0.0;
  video.load();
  video.currentTime = message.time;
  playing = message.playing;
  playPause();
});

toast.style.opacity = 0.0;
let toastInterval = null;
function showToast(value) {
  toast.innerHTML = value;
  toast.style.opacity = 1.0;
  
  clearInterval(toastInterval);
  toastInterval = setTimeout(() => {
    let steps = 100;
    let count = 0;
    let step = 0.01;
    let opacity = 1.0;

    clearInterval(toastInterval);
    toastInterval = setInterval(() => {
      opacity -= step;
      count++;
  
      toast.style.opacity = opacity;

      if (count == steps) {
        clearInterval(toastInterval);
        toast.style.opacity = 0.0;
      }
    }, 5);
  }, 3000);
}
