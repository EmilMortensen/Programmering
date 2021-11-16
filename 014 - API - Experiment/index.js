let api_key = 'SVtIAOEYsHBGY831C6uYqmIaHDESkASt'

//Fetch er hvor vi spørger serveren om vi må låne nogle objekter
fetch('http://api.giphy.com/v1/gifs/trending?api_key=' + api_key)
    .then( response => response.json() )
    .then( json => {
        console.log(json.data[0].images.fixed_height.url)
        insertImage(json.data[0].images.fixed_height.url)
    })


const insertImage = (url) => {
    let img = document.createElement('img')
    img.src = url
    document.querySelector('body').append(img)
}