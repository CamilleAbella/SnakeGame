
class Grid {

    constructor( _width, _height ){
        this.width = _width
        this.height = _height
    }

    get cellWidth(){
        return width / this.width
    }

    get cellHeight(){
        return height / this.height
    }

}