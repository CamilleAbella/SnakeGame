
class SnakePart {

    constructor( x, y, parent ){
        this.x = x
        this.y = y
        if(parent){
            this.parent = parent
            parent.child = this
        }
    }

    step(){
        if(this.child){
            this.child.step()
        }
        if(this.parent){
            this.x = this.parent.x
            this.y = this.parent.y
        }
    }

    count( lastCounter ){
        count = (lastCounter || 0) + 1
        if(this.child){
            return this.child.count(count)
        }
        return count
    }
}