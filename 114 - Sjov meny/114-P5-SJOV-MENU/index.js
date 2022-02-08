let lukas, viktor

let students = ['mie', 'bjarke', 'bjørn', 'marius', 'lukas','frederik', 'sofus', 'theis', 'viktor', 'andreas']
let balls = []

function setup(){
    noCanvas()
    background('purple')
    students.map( (item, index) => {
        let b = new Ball(50, random(window.innerWidth), random(window.innerHeight), 'red', item)
        balls.push(b)
    })

}

function draw(){
    balls.map( item => {
        item.show()
        item.update()
        if(frameCount % 23){
            item.up(random(5))
        }
    })
}

function keyPressed(key){
    if(key.key == ' '){
        balls.map(item => item.up())
    }
}
