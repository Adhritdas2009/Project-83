var mouseEvent= "empty";
var lpx , lpy;
canvas = document.getElementById("MyCanvas");
ctx = canvas.getContext("2d");

color = "seagreen";
width = 3;



canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent = "mouseUp";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent = "mouseLeave";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    cpx = e.clientX - canvas.offsetLeft;
    cpy = e.clientY - canvas.offsetTop;

    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.moveTo(lpx, lpy);
        ctx.lineTo(cpx, cpy);
        ctx.stroke();
    }
    lpx=cpx;
    lpy=cpy;
}

var nw = screen.width;
var nh = screen.height;

//responsive

var new_width = nw - 70;
var new_height = nh - 200;

if(nw < 992){
    document.getElementById("MyCanvas").width=new_width;
    document.getElementById("MyCanvas").height=new_height;
    document.body.style.overflow="hidden";
}



canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e){
    lpx= e.touches[0].clientX - canvas.offsetLeft;
    lpy= e.touches[0].clientY - canvas.offsetTop;
}



canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e){
    cpx = e.touches[0].clientX - canvas.offsetLeft;
    cpy = e.touches[0].clientY - canvas.offsetTop;

 
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.moveTo(lpx, lpy);
        ctx.lineTo(cpx, cpy);
        ctx.stroke();
    
    lpx=cpx;
    lpy=cpy;
}