
var images = null

class SnakePart extends Cell {

    constructor( grid, x, y, parent ){
        super( grid, x, y )
        this.lastX = x
        this.lastY = y - 1
        if(parent){
            this.parent = parent
            parent.child = this
        }
        if(!images){
            images = {
                queue: loadImage('img/queue.png'),
                body: loadImage('img/body.png'),
                head: loadImage('img/head.png'),
                coude: loadImage('img/coude.png')
            }
        }
    }

    draw(){
        const position = this.grid.toPixel( this )
        stroke(0)
        strokeWeight(1)
        push()
        translate(
            position.x + (this.grid.cellWidth / 2),
            position.y + (this.grid.cellHeight / 2)
        )
        switch(this.direction){
            case 'LEFT':
                rotate(90)
                break
            case 'RIGHT':
                rotate(-90)
                break
            case 'UP':
                rotate(180)
                break
        }
        translate(
            (position.x + (this.grid.cellWidth / 2)) * -1,
            (position.y + (this.grid.cellHeight / 2)) * -1
        )
        if(!this.child){

            // snake queue
            this.image = images.queue

        }else if(this.parent){

            // snake body
            if(this.child.direction !== this.direction){

                translate(
                    position.x + (this.grid.cellWidth / 2),
                    position.y + (this.grid.cellHeight / 2)
                )

                if(this.turnToRight){
                    rotate(-90)
                }else{
                    rotate(180)
                }
                
                translate(
                    (position.x + (this.grid.cellWidth / 2)) * -1,
                    (position.y + (this.grid.cellHeight / 2)) * -1
                )

                this.image = images.coude
            }else{
                this.image = images.body
            }

        }else{

            // snake head
            this.image = images.head
            
        }
        image( this.image,
            position.x, 
            position.y,
            this.grid.cellWidth,
            this.grid.cellHeight
        )
        pop()
        if(this.child){
            this.child.draw()
        }
    }

    step(){
        if(this.child){
            this.child.step()
        }
        if(this.parent){
            this.direction = this.parent.direction
            this.lastX = this.x
            this.lastY = this.y
            this.x = this.parent.x
            this.y = this.parent.y
        }
    }

    count( lastCounter ){
        const count = (lastCounter || 0) + 1
        if(this.child){
            return this.child.count( count )
        }
        return count
    }

    addChild(){
        if(this.child){
            this.child.addChild()
        }else{
            if(this.parent)
            this.image = this.parent.image
            else this.image = null
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

    each( callback ){
        callback(this)
        if(this.child)
        this.child.each(callback)
    }

    get turnToRight(){
        if(this.child){
            return (
                (this.direction == 'LEFT'    && this.child.direction == 'DOWN') ||
                (this.direction == 'DOWN'    && this.child.direction == 'RIGHT')||
                (this.direction == 'UP'      && this.child.direction == 'LEFT') ||
                (this.direction == 'RIGHT'   && this.child.direction == 'UP')
            )
        }else if(this.parent){
            return (
                (this.direction == 'LEFT'    && this.parent.direction == 'UP')  ||
                (this.direction == 'DOWN'    && this.child.direction == 'LEFT') ||
                (this.direction == 'UP'      && this.child.direction == 'RIGHT')||
                (this.direction == 'RIGHT'   && this.child.direction == 'DOWN')
            )
        }else{

        }
    }
}