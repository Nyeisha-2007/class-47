var backgroundImg;
var king,kingImg,princess,princessImg,wolf,wolfImg;
var gameState=1;
function preload(){
backgroundImg=loadImage("Images/Bg3.jpg")
kingImg=loadImage("Images/King.png")
princessImg=loadImage("Images/Princess.png")
wolfImg=loadImage("Images/wolf.png")
}
function setup(){
createCanvas(1350,800);
 king=createSprite(1200,700);
king.addImage(kingImg);
king.scale=0.4;
king.debug=true;
king.setCollider("circle",0,0,200);
 princess=createSprite(75,165);
princess.addImage(princessImg);
princess.scale=0.20;
princess.debug=true;
princess.setCollider("circle",0,0,200); 


}
function draw(){
background(backgroundImg);
drawSprites();
if(keyDown(UP_ARROW)){
    princess.y=princess.y-20;
}
if(keyDown(DOWN_ARROW)){
    princess.y=princess.y+20;
}
if(keyDown(RIGHT_ARROW)){
    princess.x=princess.x+20;
}
if(keyDown(LEFT_ARROW)){
    princess.x=princess.x-20;
}
if(gameState===1){
    textSize(50);
    textFont("Comic Sans MS");
    stroke("white");
    fill("white");
    text("Level 1",550,100);
    drawWalls1();
    if(princess.isTouching(king)){
        gameState=2;
        princess.x=75;
        princess.y=175;
    }
    
}
else if(gameState===2){
    textSize(50);
    textFont("Comic Sans MS");
    stroke("white");
    fill("white");
    text("Level 2",550,100);
    drawWalls2();
    if(princess.isTouching(king)){
        gameState=3;
        princess.x=75;
        princess.y=175;
    }
    
}
else if(gameState===3){
    textSize(50);
    textFont("Comic Sans MS");
    stroke("white");
    fill("white");
    text("Level 3",550,100);
    drawWalls3();
    if(princess.isTouching(king)){
        gameState=4;
        princess.x=75;
        princess.y=175;
    }
}
else if(gameState===4){
    textsize(50);
    textFont("Comic Sans MS");
    stroke("white");
    fill("white");
    text("Level 4",550,100);
    drawWalls4();
    if(princess.isTouching(king)){

    }
}
bouncing();


}
function drawWalls1(){
     wall = createSprite(800, 700,100,10);
    wall.shapeColor="rgb(170,190,60)";
     wall1 = createSprite(1150, 180,10,200);
    wall1.shapeColor="rgb(170,190,60)";
     wall2 = createSprite(800, 320,10,100);
    wall2.shapeColor="rgb(170,190,60)";
     wall3 = createSprite(1080, 365,150,10);
    wall3.shapeColor="rgb(170,190,60)";
     wall4 = createSprite(400, 680,300,10);
    wall4.shapeColor="rgb(170,190,60)";
     wall5 = createSprite(970, 170,155,10);
    wall5.shapeColor="rgb(170,190,60)";
    
     wall6 = createSprite(1150, 480,10,240);
    wall6.shapeColor="rgb(170,190,60)";
     wall7 = createSprite(550, 260,100,10);
    wall7.shapeColor="rgb(170,190,60)";
     wall8 = createSprite(500, 340,10,170);
    wall8.shapeColor="rgb(170,190,60)";
     wall9 = createSprite(845, 655,10,100);
    wall9.shapeColor="rgb(170,190,60)";
     wall10 = createSprite(720, 550,10,155);
    wall10.shapeColor="rgb(170,190,60)";
    
     wall11 = createSprite(800, 500,50,10);
    wall11.shapeColor="rgb(170,190,60)";
     wall12 = createSprite(120, 430,10,350);
    wall12.shapeColor="rgb(170,190,60)";
    
    
}

function drawWalls2() {
    
     wall13 = createSprite(320, 100,300,10);
    wall13.shapeColor="rgb(170,190,60)";
     wall14 = createSprite(500, 500,225,10);
    wall14.shapeColor="rgb(170,190,60)";
     wall15 = createSprite(610, 545,10,100);
    wall15.shapeColor="rgb(170,190,60)";
     wall16 = createSprite(190, 600,150,10);
    wall16.shapeColor="rgb(170,190,60)";
     wall17 = createSprite(300,220 ,120,10);
    wall17.shapeColor="rgb(170,190,60)";
     wall18 = createSprite(640, 400,120,10);
    wall18.shapeColor="rgb(170,190,60)";
}

function drawWalls3(){
     wall19 = createSprite(400,275,100,10);
    wall19.shapeColor="red";
     wall20 = createSprite(300,250,100,10);
    wall20.shapeColor="blue";
     wall21 = createSprite(680,400,100,10);
    wall21.shapeColor="black";
     wall22 = createSprite(250,400,100,10);
    wall22.shapeColor="orange";
     wall23 = createSprite(950,600,150,10);
    wall23.shapeColor="pink";
}

function drawWalls4(){

}
function bouncing(){
    princess.bounceOff(wall1);
    princess.bounceOff(wall2);
    princess.bounceOff(wall3);
    princess.bounceOff(wall4);
    princess.bounceOff(wall5);
    princess.bounceOff(wall6);
    princess.bounceOff(wall7);
    princess.bounceOff(wall8);
    princess.bounceOff(wall9);
    princess.bounceOff(wall10);
    princess.bounceOff(wall11);
    princess.bounceOff(wall12);
    
}