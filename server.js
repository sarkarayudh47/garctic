import express from "express";
import {Server} from "socket.io"
const app=express();
var server=app.listen(3000);
app.use(express.static('public'));
console.log("my socket server is running")
var io=new Server(server);
io.sockets.on('connection',newConnection)
function newConnection(socket)
{
    console.log('new connection: '+socket.id)
    socket.on("mouse",mouseMsg)
    function mouseMsg(data){
        socket.broadcast.emit("mouse",data)
        console.log(data)
    }
}
