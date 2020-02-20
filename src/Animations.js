
class Animations {

    constructor(){
        this.animations = []
    }

    add( stepDuration, callback ){
        this.animations = this.animations.filter( animation => !animation.finish )
        this.animations.push( new Animation( stepDuration, callback ) )
    }

    draw(){
        this.animations.forEach( animation => animation.draw() )
    }

    step(){
        this.animations.forEach( animation => animation.step() )
    }

}