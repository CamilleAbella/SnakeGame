
var game = null

function setup(){
    createCanvas( 500, 500 )
    angleMode(DEGREES)
    game = new Game( 20, 20 )
}

function draw(){
    game.frame()
}

function keyPressed(){
    if(keyCode == 38 && game.direction.y == 0){
        game.turn('UP')
    }else if(keyCode == 40 && game.direction.y == 0){
        game.turn('DOWN')
    }else if(keyCode == 37 && game.direction.x == 0){
        game.turn('LEFT')
    }else if(keyCode == 39 && game.direction.x == 0){
        game.turn('RIGHT')
    }
}