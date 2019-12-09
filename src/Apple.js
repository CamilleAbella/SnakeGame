
class Apple extends Cell {

    constructor( grid ){
        super( grid )
        this.respawn()
    }

    respawn(){
        this.x = Math.floor(Math.random() * this.grid.width)
        this.y = Math.floor(Math.random() * this.grid.height)
    }

    draw(){
        noStroke()
        this.rect(255,0,0)
    }

}