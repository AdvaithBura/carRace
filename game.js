class Game{
    constructor(){

    }

    readGameState(){
var gs = database.ref("gameState")
gs.on('value', function(data){
    gameS = data.val();
})
    }

    writeGameState(gameS){
database.ref('/').update({
gameState : gameS
})
    }

    async waiting(){
        if(gameS === 0){
            playerA = new Player();
            var pCref = await database.ref("playerCount").once("value");
            if(pCref.exists()){
                playerCount = pCref.val();
                playerA.getPlayerCount();
            }
            form1 = new Form();
            form1.display();
        }
        p1 = createSprite(100,200);
        p1.addImage(car1);
        p2 = createSprite(650,200);
        p2.addImage(car2);
        p3 = createSprite(1200,200);
        p3.addImage(car3);
        p4 = createSprite(1750,200);
        p4.addImage(car4);
        cars = [p1,p2,p3,p4];
    }

    play(){
        form1.hide();
        Player.readPlayerDetail();
        if (playerDetails !==undefined){
            background(119,34,121);
            image(theTrack,0,-displayHeight*5,displayWidth,displayHeight*6);
        var x = 0;
        var carY;
        var carIndex = 0;

        for(var i in playerDetails){
            carIndex = carIndex+1;
            x=x+200;
            carY=displayHeight-playerDetails[i].distance;
            //console.log(displayHeight);
            cars[carIndex-1].y=carY;
            //cars[carIndex-1].x=x;
//console.log("carY", carY);
//console.log("cars y val",cars[carIndex-1].y);
fill("red")
if(carIndex === playerA.index){
camera.position.x = displayWidth/2;
camera.position.y = cars[carIndex-1].y-400
}
            textSize(30);
            text(playerDetails[i].name + "              "+playerDetails[i].distance, 0,x-playerDetails[i].distance);
            
            //x=x+100
            }
        }

        if(playerA.distance > 6210){
            gameS = 2;
            
            playerPR = playerPR + 1;
            playerA.writePR(playerPR);
            playerA.writePlayerDetails();
        }
            if(keyDown(UP_ARROW)){
                playerA.distance = playerA.distance+500;
                //p4.y=
                playerA.writePlayerDetails();
    }
    drawSprites();
}

end(){
    playerA.readPR();
    console.log("Game Over");
    console.log("You got " + playerPR + " place");
    gameS = 3;
    var element = createElement("h2","You got " + playerPR + " place");
    element.position(800,400);
}
}