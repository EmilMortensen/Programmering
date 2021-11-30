
fetch('./kalender.json')
    .then( response => response.json() )
    .then( json => {
        console.log(json)
        json.days.map( door => {
            let div = document.createElement('div')
            div.id = door.date + '-day'
            div.classList.add('door')
            div.style.width = door.width
            div.style.height = door.height
            div.innerHTML = door.date

            switch(door.content){
                case 'image':
                    setImage(div, door)
                    break
                case 'youtube':
                    setYourtube(div, door)
                    break
                default:
                    break
            }

            document.querySelector('main').append(div)
        } )
    } )

    const setImage = (div, ob) => {
          div.style.backgroundImage = `url('${ob.url}')`
    }

    const setYourtube = (div, ob) => {
        div.innerHTML = ob.embed

    }

    const setBoredAPI = (div, ob) => {

    }