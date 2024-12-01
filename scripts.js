/*
    Code sample for SITE 1101 Principles of Information Systems 
    (c)2024 by Araz Yusubov 
    DISCLAIMER: All code examples we will look at are quick hacks intended to present working prototypes.
    Hence they do not follow best practice of programming or software engineering.    
*/

// Global variables for Artist's position and orientation
var x, y;
var angle;

function radian(degree) {
    return degree * Math.PI / 180;
}

function moveForward(distance, context) {
    let a = radian(angle);
    x = x + distance * Math.cos(a);
    y = y + distance * Math.sin(a);
    context.lineTo(x, y);    
}

function turnRight(degree) {
    angle = angle - degree;
    if (angle < 0) angle = angle + 360;
}

function turnLeft(degree) {
    angle = angle + degree;
    if (angle > 360) angle = angle - 360;
}

function DrawSpiral(context) {
    // Inspired by Express Course (2024) Lesson 29: For Loops with Artist
    // https://studio.code.org/s/express-2024/lessons/29/levels/5

    // The initial position is in the center of the canvas
    x = context.canvas.width / 2;
    y = context.canvas.height / 2;
    // The initial orientation is zero degrees i.e. facing East
    angle = 0.0; 
    context.moveTo(x, y);
    context.beginPath();
    for (let counter = 3; counter < 600; counter += 3) {
        moveForward(counter, context);
        context.stroke();
        turnRight(89);
    }
}
function triangle(context){
    x=context.canvas.width/3;
    y=context.canvas.height/3;
    angle=-10.0;
    for( let counter=3; counter<100;counter +=5){
        moveForward(counter, context);
        context.stroke();
        turnRight(59);
    }
    turnRight(120);
    context.stroke();
    for(let counter=3; counter<100;counter +=5){
        moveForward(counter,context);
        context.stroke();
        turnLeft(59);
    }
}

function laugh(){
    context.beginPath();
    context.arc(400,480,40,0,Math.PI,false);
    context.stroke();
}
function face(){
    context.beginPath();
    context.arc(400,410,200,0,2*Math.PI,false);
    context.stroke();
}
function points(){
    context.font= '20px Arial';
    context.fillText('Please make me happy',canvas.width/3,canvas.height/1.5);
}
// Slider functionality
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.slider img');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentIndex = 0;

    const updateSlider = () => {
      images.forEach((img, index) => {
        img.classList.toggle('active', index === currentIndex);
      });
    };

    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % images.length;
      updateSlider();
    });

    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateSlider();
    });

    setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      updateSlider();
    }, 5000);
});
