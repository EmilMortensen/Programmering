let main = document.querySelector('main')

let button = document.querySelector('#button')
const skiftBillede = () => {
    main.style.backgroundImage = 'url(./assets/mclaren2.jpg")'
}
style.backgroundImage = 'string med css regel'
button.addEventListener('click', skiftBillede)

if(main.style.backgroundImage == 'url("./assets/mclaren.jpg")'){
    main.style.backgroundImage = 'url("./assets/mclaren2.jpg")'
} else if(main.style.backgroundImage == 'url("./assets/mclaren2.jpg")'){
    main.style.backgroundImage == 'url("./assets/mclaren3.jpg")'
} else if(main.style.backgroundImage == 'url("./assets/mckaren3.jpg")'){
    main.style.backgroundImage = 'url("./assets/mclaren4.jpg")'
} else{
    main.style.backgroundImage = 'url("./assets/mclaren1.jpg")'
}
    