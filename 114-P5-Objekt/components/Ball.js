
class Ball{
    constructor(radius, xpos, ypos, col){
        this.radius = radius
        this.xpos = xpos
        this.ypos = ypos
        this.col = col
    }

    show(){
        fill(this.col)
        ellipse(this.xpos, this.ypos, this.radius)
    }
}