
class Snake {
    
    constructor( grid, direction ){
        this.rate = 100
        this.time = Date.now()
        this.head = new SnakePart( grid,
            Math.floor(grid.width / 2),
            Math.floor(grid.height / 2),
            false,
            direction
        )
        for(var i=0; i<5; i++){
            this.addChild()
        }
    }

    get length(){
        return this.head.count()
    }

    draw(){
        this.head.draw()
    }

    step( direction ){
        this.head.step()
        this.head.x += direction.x
        this.head.y += direction.y
    }

    addChild(){
        this.head.addChild()
    }

    touch( position ){
        return this.head.touch( position )
    }

}