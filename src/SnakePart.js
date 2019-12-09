
// classe basée sur la récursivité

class SnakePart extends Cell {

    constructor( grid, x, y, parent ){
        super( grid, x, y )
        this.lastX = x
        this.lastY = y - 1
        if(parent){
            this.parent = parent
            parent.child = this
        }
    }

    draw(){
        stroke(0)
        strokeWeight(1)
        if(this.parent){
            this.rect(180)
        }else{
            this.rect(255)
        }
        if(this.child){
            this.child.draw()
        }
    }

    step(){
        if(this.child){
            this.child.step()
        }
        if(this.parent){
            this.lastX = this.x
            this.lastY = this.y
            this.x = this.parent.x
            this.y = this.parent.y
        }
    }

    count( lastCounter ){
        const count = (lastCounter || 0) + 1
        if(this.child){
            return this.child.count(count)
        }
        return count
    }

    addChild(){
        if(this.child){
            this.child.addChild()
        }else{
            new SnakePart(
                this.grid,
                this.lastX,
                this.lastY,
                this
            )
        }
    }

    touch( position ){
        if(
            position.x == this.x &&
            position.y == this.y &&
            position !== this
        ){
            return true
        }else if(this.child){
            return this.child.touch( position )
        }
        return false
    }
}