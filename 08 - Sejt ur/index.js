let timer = document.querySelector('#timer')
let min = document.querySelector('#min')
let sek = document.querySelector('#sek')

const saetTid = () => {
    let nul = ''
    let tid = new Date()

    sek.style.width = 1.6 * tid.getSeconds() + '%'
    min.style.width = 1.6 * tid.getMinutes() + '%'
    timer.style.width = 4.66 * tid.getHours() + '%'

    
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