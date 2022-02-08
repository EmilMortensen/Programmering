console.log('scripted loaded')

function setup(){
    frameRate(60)
    createCanvas(windowWidth, windowHeight)
    background('black')
    select('#info').html('Sådan her skriver man nogeti HTML dokumentet')
}

function draw(){
    //mouseX mouseY frameCount map
}
    function mousePressed(){
        select('#info').html('Du klikkede')
        }

    function mouseReleased(){
        select('#info').html('Du slap musen')
    }

    function keyPressed(event){
        select('#info').html('Du trykkede: ' + event.key)
    }