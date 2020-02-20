

class Grid {

    constructor( _width, _height ){
        this.width = _width
        this.height = _height
    }

    toPixel( cell, center ){
        return {
            x: (cell.x * this.cellWidth) - (center ? this.cellWidth / 2 : 0),
            y: (cell.y * this.cellHeight) - (center ? this.cellHeight / 2 : 0)
        }
    }

    get cellWidth(){
        return width / this.width
    }

    get cellHeight(){
        return height / this.height
    }

}