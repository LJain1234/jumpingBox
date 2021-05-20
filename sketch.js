var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
}


function setup(){
    canvas = createCanvas(900,600);

    block1 = createSprite(0,580,290,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

    block3 = createSprite(550,580,200,30);
    block3.shapeColor = "red";

    block4 = createSprite(800,580,200,30);
    block4.shapeColor = "green";
 
    //create two more blocks i.e. block3 and block4 here

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX = 2;
    ball.velocityY = -2;
    //write code to add velocityX and velocityY

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.changeColor = "blue";
        music.play();
    }



    if(block2.isTouching(ball)){
        ball.changeColor = "orange";
        //music.play = false;
        ball.velocityX = 0;
        ball.velocityY = 0;
    }

    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.changeColor = "red";
        music.play();
        ball.velocityX = 2;
        ball.velocityY = -2;
    }

    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.changeColor = "green";
        music.play();
        ball.velocityX = 2;
        ball.velocityY = -2;
    }

    drawSprites();
}
