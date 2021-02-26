var canvas;
var music;
var tile1, tile2, tile3, tile4;
var box;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
        tile1 = createSprite(100, 580, 200, 40);
        tile1.shapeColor = "red";
        bouncer1 = createSprite(100, 580, 200, 20);
        bouncer1.visible = false;
        tile2 = createSprite(300, 580, 200, 40);
        tile2.shapeColor = "green";
        bouncer2 = createSprite(300, 580, 200, 20);
        bouncer2.visible = false;
        tile3 = createSprite(500, 580, 200, 40);
        tile3.shapeColor = "blue";
        bouncer3 = createSprite(500, 580, 200, 20);
        bouncer3.visible = false;
        tile4 = createSprite(700, 580, 200, 40);
        tile4.shapeColor = "yellow";
        bouncer4 = createSprite(700, 580, 200, 40);
        bouncer4.visible = false;
        



    //create box sprite and give velocity

    box = createSprite(Math.round(random(20, 750)), 300, 50, 50);
    box.shapeColor = "white";

    box.velocityY = -3
    box.velocityX = 3


}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();

    Bounce();

    colorChanger();

    //add condition to check if box touching surface and make it box
    drawSprites();
}


function colorChanger() {
    if (box.isTouching(tile1)) {

        box.shapeColor = "red";
        console.log("help");
    }

    if (box.isTouching(tile2)) {

        box.shapeColor = "green";
        console.log("help");
    }

    if (box.isTouching(tile3)) {

        box.shapeColor = "blue";
        console.log("help");
    }

    if (box.isTouching(tile4)) {

        box.shapeColor = "yellow";
        console.log("help");
    }
}


function Bounce() {
    box.bounceOff(edges);
    box.bounceOff(bouncer1);
    box.bounceOff(bouncer2);
    box.bounceOff(bouncer3);
    box.bounceOff(bouncer4);
}

