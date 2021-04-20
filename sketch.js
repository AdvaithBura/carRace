var database, playerCount, gameS=0, playerA, form1, playerDetails, p1,p2,p3,p4, car1, car2,car3,car4, theTrack,rankA, playerPR;
var cars;
var rankCalc = 0;
function preload(){
    car1 = loadImage("images/car1.png");
    car2 = loadImage("images/car2.png");
    car3 = loadImage("images/car3.png");
    car4 = loadImage("images/car4.png");
    theTrack = loadImage("images/track.jpg");
}
function setup(){
    //canvasMode(CENTER);
    createCanvas(displayWidth-10,displayHeight-165);
    database = firebase.database();
    game1 = new Game();
    game1.readGameState();
    game1.waiting();
    playerA.readPR();
   // rankA = 0;
}

function draw(){
    background(255);
    if(playerCount === 4){
        game1.writeGameState(1);
    }
//console.log(playerA.rank);
    if(gameS === 1){
game1.play();
    }

    if(gameS === 2){
      //  text("Game Over",600,200)
        game1.end();
    }

    if(gameS === 3){
        
    }
   // background("white");
}