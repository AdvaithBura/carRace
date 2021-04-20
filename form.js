class Form{
    constructor(){
        this.input = createInput("Enter Name");
        this.button = createButton("Click Here");
        this.name = createElement("h2","CAR RACING GAME");
        this.welcome = createElement("h2")
        this.button2 = createButton("Reset");
    }
    display(){


        this.input.position(500,400);
        this.button.position(700,450);
        this.name.position(500,100);
        this.button2.position(500,500);

this.button.mousePressed(() =>{
    this.input.hide();
    this.name.hide();
    this.button.hide();
playerCount++;
playerA.index = playerCount;
playerA.name = this.input.value()
playerA.writePlayerCount(playerCount);
playerA.writePlayerDetails();

this.welcome.html("Welcome:" + playerA.name);

this.welcome.position(400,400);

})

this.button2.mousePressed(() =>{
    playerA.writePlayerCount(0);
    game1.writeGameState(0);
    playerA.writePR(0);
    database.ref('players').remove();

})


    }

    hide(){
        this.input.hide();
        this.name.hide();
        this.button.hide();
        this.welcome.hide();
    }
}