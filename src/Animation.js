
class Animation {

    constructor( stepDuration, callback ){
        this.currentStep = 0
        this.callback = callback
        this.stepDuration = stepDuration
        this.lastValue = null
    }

    get finish(){
        return this.currentStep >= this.stepDuration
    }

    draw(){
        if(this.finish) return
        this.callback(this.currentStep)
    }

    step(){
        if(this.finish) return
        this.currentStep ++
    }

}