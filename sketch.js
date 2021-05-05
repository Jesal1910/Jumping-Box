var canvas;
var music;
var surface1,surface2,surface3,surface4;
var box;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
   surface1=createSprite(100,580,180,20)
   surface1.shapeColor="blue"
   surface2=createSprite(300,580,180,20)
   surface2.shapeColor="yellow"
   surface3=createSprite(500,580,180,20)
   surface3.shapeColor="red"
   surface4=createSprite(700,580,180,20)
   surface4.shapeColor="green"

   

    //create box sprite and give velocity
   box=createSprite(random(20,750))
   box.velocityX=6
   box.velocityY=6
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    var edges=createEdgeSprites();
    createEdgeSprites();
    box.bounceOff(edges);
    //add condition to check if box touching surface and make it box
    if (surface1.isTouching(box) && box.bounceOff(surfacec)) {
        box.shapeColor="blue"
        music.play();
    }
    if (surface3.isTouching(box) && box.bounceOff(surface3)) {
        box.shapeColor="red"
         music.play();
    }
    if (surface4.isTouching(box) && box.bounceOff(surface4)) {
        box.shapeColor="green"
        music.play();
    }
    if (surface2.isTouching(box)) {
        box.shapeColor="yellow"
        box.velocityX=0;
        box.velocityY=0;
        music.stop();
    }
    drawSprites();
}
