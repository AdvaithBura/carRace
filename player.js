class Player{
    constructor(){
this.index = null;
this.name = null;
this.distance = 0;
this.rank = 0;

    }


    getPlayerCount(){
       var playerRef = database.ref('playerCount');
        playerRef.on('value', function(data){
            playerCount = data.val();
        }
        )
    }
        
    writePlayerCount(x){
        database.ref('/').update({
            playerCount:x
        })
    }

    readPR(){
        var PR = database.ref('playerRank');
        PR.on('value', function(data){
            playerPR = data.val();
        })
    }

    writePR(r){
        database.ref('/').update({
            playerRank:r
        })
    }

    writePlayerDetails(){
        var pdr = "players/player"+this.index;
        database.ref(pdr).set({
name:this.name,
distance:this.distance,
rank: this.rank
        })
    }

    static readPlayerDetail(){
        var playerDetailRef = database.ref("players");
        playerDetailRef.on('value', function(data){
playerDetails = data.val();
        })
    }

    
}