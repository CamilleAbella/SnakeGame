
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

    step( parent ){
        this.head.step( parent )
        this.head.x += parent.x
        this.head.y += parent.y
    }

    addChild(){
        this.head.addChild()
    }

    touch( position ){
        return this.head.touch( position )
    }

    forEach( callback ){
        this.head.each(callback)
    }

}