//Open and connect socket
let socket = io();

//Listen for confirmation of connection
socket.on('connect', function() {
  console.log("Connected");
});

socket.on('assign-role', ()=>{
    console.log('I am a ' + socket.role);
});
