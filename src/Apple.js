
class Apple extends Cell {

    constructor( grid ){
        super( grid )
        this.image = loadImage('img/apple.png')
        this.respawn()
    }

    respawn(){
        this.x = Math.floor(Math.random() * this.grid.width)
        this.y = Math.floor(Math.random() * this.grid.height)
    }

    draw(){
        const position = this.grid.toPixel( this, true )
        image( this.image, 
            position.x + (this.grid.cellWidth / 3),
            position.y,
            this.grid.cellWidth * 1.5,
            this.grid.cellHeight * 1.5 
        )
    }

}