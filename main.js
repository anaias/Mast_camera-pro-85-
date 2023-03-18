canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
array_mars= ["nasa_img1.jpeg","nasa_img2.jpeg","nasa_img3.jpeg","nasa_img4.jpeg","nasa_img5.jpeg"];
random_no = Math.floor(Math.random()*5);
console.log(random_no);
rover_width = 100;
rover_height = 100;
rover_x = 10;
rover_y = 10;
background_image = array_mars[random_no];
console.log("background_image = "+ background_image);
rover_image = "rover.png";
function add() 
{
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;
    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;
}

function uploadBackground() 
{
ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() 
{
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", mykeydown);
function mykeydown(e) 
{
keyPressed = e.keyCode;
console.log(keyPressed);
if (keyPressed == '38') {
    up();
    console.log("up");
    
}
if (keyPressed == '40') {
    down();
    console.log("down");
    
}
if (keyPressed == '37') {
    left();
    console.log("left");
    
}
if (keyPressed == '39') {
    right();
    console.log("right");
    
}
}

function up() 
{
if(rover_y >= 0) 
{
    rover_y = rover_y - 10;
    uploadBackground();
    uploadrover();
}
}

function down()
{
if(rover_y <= 500)
{
 rover_y = rover_y + 10;
 uploadBackground();
 uploadrover();
}
}

function left()
{
    if(rover_x >= 0)
    {
     rover_x = rover_x - 10;
     uploadBackground();
     uploadrover();
    }
    }

function right()
    {
        if(rover_x <= 700)
        {
         rover_x = rover_x + 10;
         uploadBackground();
         uploadrover();
        }
        }





