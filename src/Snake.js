
class Snake {
    
    constructor(){
        this.x = width / 2
        this.y = height / 2
        this.direction = 'bottom'
        this.head = new SnakePart(
            this.x,
            this.y
        )
    }

    get length(){
        return this.head.count()
    }

    frame(){

    }

}