function Player(nickname){
    this.nickname = nickname;
    this.playedMatch = 0;

}
Player.prototype.play = function(){
    this.playedMatch++;
    console.log(this.nickname,this.playedMatch)
}

Player.prototype.getTierlevel = function(){
    if (this.playedMatch < 4){
        return "A";
    }
    
    
    else if (this.playedMatch < 7 && this.playedMatch > 3 ){
        return "B";
    }
    else{
        return "C";
    }

}

const gomszab = new Player("gomszab");

console.log(gomszab)

console.log(gomszab.getTierlevel());
gomszab.play();
gomszab.play();
gomszab.play();
gomszab.play();
gomszab.play();
gomszab.play();
gomszab.play();

console.log(gomszab.getTierlevel());