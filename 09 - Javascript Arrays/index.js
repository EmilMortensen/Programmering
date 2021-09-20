let main = document.querySelector('main')
let input = document.querySelector('#search')

const addKort = name => {
    let newKort = document.createElement('div')
    newKort.classList.add('kort')
    let newH = document.createElement('h1')
    newH.innerHTML = name
    newKort.append(newH)
    main.append(newKort)
}

//Vi ville gerne lave et array med tekst variabler
let navne = ['Pierre', 'Emil', 'Højbjerg', 'Dolle', 'Damsinho', 'Viking', 'Skov', 'Maehle']

// Map funktionen kører hele listen igennem 1by1
navne.map( navn => addKort(navn) )

// // Dette er et for loop
// for(let i = 0; i < navne.length; i++){
//     console.log(navne[i])
// }

input.addEventListener('input', () => {
    let result = navne.filter( name => name.toLowerCase().includes(input.value.toLowerCase()) )
    main.innerHTML = ''
    result.map(navn => addKort(navn))
})  