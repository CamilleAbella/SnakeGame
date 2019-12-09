
var game = null

function setup(){
    createCanvas( 1000, 750 )
    game = new Game( 40, 30 )
}

function draw(){
    game.frame()
}

function keyPressed(){
    if(keyCode == 38 && game.direction.y == 0){
        game.tempDirection = {
            x: 0,
            y: -1
        }
    }else if(keyCode == 40 && game.direction.y == 0){
        game.tempDirection = {
            x: 0,
            y: 1
        }
    }else if(keyCode == 37 && game.direction.x == 0){
        game.tempDirection = {
            x: -1,
            y: 0
        }
    }else if(keyCode == 39 && game.direction.x == 0){
        game.tempDirection = {
            x: 1,
            y: 0
        }
    }
}