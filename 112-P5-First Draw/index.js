console.log('scripted loaded')

function setup(){
    frameRate(60)
    console.log('setup')
    createCanvas(windowWidth, windowHeight)
    background('black')
}

function draw(){
    //mouseX mouseY frameCount map

    select('#info').html(frameCount % 60)

    let xColor = map(mouseX, 0, windowWidth, 0, 255)

    stroke(xColor, 100, 100)
    noFill()
    ellipse(mouseX, mouseY + frameCount % 120, frameCount % 60)
    ellipse(mouseX, mouseY, frameCount % 60)
}