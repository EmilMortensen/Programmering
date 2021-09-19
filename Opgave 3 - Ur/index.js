let timer = document.querySelector('#timer')
let min = document.querySelector('#min')
let sek = document.querySelector('#sek')
let varcheck = document.querySelector('#varcheck')

const saetTid = () => {
    let nul = ''
    let tid = new Date()
    
    if(tid.getSeconds() < 30) {
        varcheck.style.backgroundImage = "url('./assets/var.jpg')"
    } else{
        varcheck.style.backgroundImage = "url('./assets/nogoal.jpg')"
    }

    varcheck.style.marginLeft = 1.6 * tid.getSeconds() + '%'
    
    nul = ''
    if (tid.getHours() < 10) nul = '0'
    timer.innerHTML = nul + tid.getHours()
    
    nul = ''
    if (tid.getMinutes() < 10) nul = '0'
    min.innerHTML = nul + tid.getMinutes()
    
    nul = ''
    if (tid.getSeconds() < 10) nul = '0'
    sek.innerHTML = nul + tid.getSeconds()
}

setInterval(saetTid, 1000)