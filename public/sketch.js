var socket;
function setup()
{
    createCanvas(1366,768)
    background(50)
    socket=io.connect('http://localhost:3000')
    socket.on("mouse",newDrawing)
}
function newDrawing(data)
{
    socket.emit("mouse", data)
    noStroke();
    fill(255)
    ellipse(data.x,data.y,20,20)
}
function mouseDragged()
{
    console.log("Sending: "+mouseX+", "+mouseY)
    var data={
        x: mouseX,
        y: mouseY
    }
    socket.emit("mouse", data)
    noStroke();
    fill(255)
    ellipse(mouseX,mouseY,20,20)
}

function draw()
{
   
}