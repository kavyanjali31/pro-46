var canvas;
var backgroundImg;
var bike1_img,bike2_img,track
var database,gameState
var form,player,bike1,bike2,allPlayers;
var bikes=[]

function preload(){

}
function setup(){
    canvas=createCanvas(windowWidth,windowHeight)
    database=firebase.database()
    game=new Game()
    game.getState()
    game.start();
}
function draw(){
    background(backgroundImg)
    if(playerCount===2){
        game.update(1)
    }
    if(gameState===1){
        game.play();
    }
}