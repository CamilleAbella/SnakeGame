
class Cell {

    constructor( grid, x, y ){
        this.grid = grid
        this.x = x
        this.y = y
    }

    rect( ...color ){
        fill( ...color )
        rect(
            this.x * this.grid.cellWidth,
            this.y * this.grid.cellHeight,
            this.grid.cellWidth,
            this.grid.cellHeight
        )
    }

}