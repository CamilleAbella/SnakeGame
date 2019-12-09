
class Game {

    constructor( width, height ){
        this.scores = []
        this.width = width
        this.height = height
        this.rate = 100
        this.start()
    }

    get score(){
        return this.snake.length - 6
    }

    start(){
        this.startedTime = Date.now()
        this.time = this.startedTime
        this.tempDirection = {x:0,y:1}
        this.direction = {x:0,y:1}
        this.grid = new Grid( this.width, this.height )
        this.snake = new Snake(this.grid)
        this.apple = new Apple(this.grid)
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
        this.snake.draw()
        this.apple.draw()
        fill(255)
        textSize(20)
        text(`Score : ${this.score}`, width / 2, 20)
    }

    step(){
        this.direction = JSON.parse(JSON.stringify(this.tempDirection))
        this.snake.step( this.direction )
        if(this.snake.touch( this.apple )){
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
            this.scores.push({
                score: this.score,
                date: Date.now(),
                duration: Date.now() - this.startedTime
            })
            if(this.highscore < this.score){
                this.highscore = this.score
            }
            this.start()
        }
    }
}