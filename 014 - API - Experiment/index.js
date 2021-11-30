let api_key = 'SVtIAOEYsHBGY831C6uYqmIaHDESkASt'

//Fetch er hvor vi spørger serveren om vi må låne nogle objekter
fetch('http://api.giphy.com/v1/gifs/trending?api_key=' + api_key + '&limit=20&rating=pg-13')
    .then( response => response.json() )
    .then( json => {
        json.data.map( image => insertImage(image.images.fixed_width.url) )
    })


const insertImage = (url) => {
    let img = document.createElement('img')
    img.src = url
    document.querySelector('body').append(img)
}