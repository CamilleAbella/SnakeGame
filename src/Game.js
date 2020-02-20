

class Game {

    constructor( _width, _height ){
        this.animations = new Animations()
        this.scores = []
        this.width = _width
        this.height = _height
        this.rate = 100
        this.start()
    }

    get score(){
        return this.snake.length - 6
    }

    start(){
        this.staredTime = Date.now()
        this.time = this.staredTime
        this.tempDirection = { x:0, y:1 }
        this.direction = { x:0, y:1 }
        this.grid = new Grid( this.width, this.height )
        this.snake = new Snake( this.grid )
        this.apple = new Apple( this.grid )
    }

    frame(){
        this.draw()
        if(Date.now() > this.time + this.rate){
            this.time = Date.now()
            this.step( this.direction )
        }
    }

    draw(){
        background(0)
        this.animations.draw()
        this.snake.draw()
        this.apple.draw()
        fill(255)
        textSize(20)
        textAlign(CENTER)
        text(`Score : ${this.score}`, width / 2, 20)
    }

    step(){
        this.animations.step()
        this.direction = JSON.parse(JSON.stringify(this.tempDirection))
        this.snake.step( this.direction )

        if(this.snake.touch( this.apple )){

            // mange une pomme

            this.snake.forEach( part => {
                const partPosAnimation = this.grid.toPixel( part )
                this.animations.add( 6, step => {
                    
                })
            })

            const ApplePosAnimation = this.grid.toPixel( this.apple )
            this.animations.add( 3, step => {
                push()
                noFill()
                stroke( 120, 190, 0, map(step, 0, 3, 100, 0))
                strokeWeight(this.grid.cellWidth)
                ellipse(
                    ApplePosAnimation.x + this.grid.cellWidth / 2,
                    ApplePosAnimation.y + this.grid.cellHeight / 2,
                    step * 20
                )
                ellipse(
                    ApplePosAnimation.x + this.grid.cellWidth / 2, 
                    ApplePosAnimation.y + this.grid.cellHeight / 2, 
                    step * 50
                )
                pop()
            })
            this.snake.addChild()
            while(this.snake.touch( this.apple )){
                this.apple.respawn()
            }
        }
        if(
            this.snake.touch( this.snake.head ) || (
                this.snake.head.x < 0 || this.snake.head.x >= this.grid.width ||
                this.snake.head.y < 0 || this.snake.head.y >= this.grid.height
            )
        ){
            this.snake.forEach( part => {
                const posAnimation = this.grid.toPixel( part )
                this.animations.add( 6, step => {
                    push()
                    fill(255,255,255,map(step, 0, 6, 50, 0))
                    noStroke()
                    rect(
                        (posAnimation.x - (map( step, 0, 6, this.grid.cellWidth, 0 ) / 2)) + (this.grid.cellHeight / 2),
                        (posAnimation.y - height) + this.grid.cellHeight / 2,
                        map( step, 0, 6, this.grid.cellWidth, 0 ),
                        height * 2
                    )
                    rect(
                        (posAnimation.x - width) + this.grid.cellWidth / 2,
                        (posAnimation.y - (map( step, 0, 6, this.grid.cellHeight, 0 ) / 2)) + (this.grid.cellWidth / 2),
                        width * 2,
                        map( step, 0, 6, this.grid.cellHeight, 0 )
                    )
                    pop()
                })
            })
            const score = {
                score: this.score,
                date: Date.now(),
                duraction: Date.now() - this.staredTime
            }
            this.scores.push( score )
            if(this.hightscore < this.score){
                this.hightscore = this.score
            }
            this.start()
        }
    }

    turn( direction ){
        this.snake.head.direction = direction
        switch(direction){
            case 'LEFT':
                this.tempDirection = { x: -1, y: 0 }
                break
            case 'RIGHT':
                this.tempDirection = { x: 1, y: 0 }
                break
            case 'UP':
                this.tempDirection = { x: 0, y: -1 }
                break
            case 'DOWN':
                this.tempDirection = { x: 0, y: 1 }
                break
        }
    }

}