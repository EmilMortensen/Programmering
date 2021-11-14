
const getAcitvity = () => {
fetch('https://www.boredapi.com/api/activity')
   .then( response => response.json() )
   .then( json => {
       console.log(json)
       createCard(json)
})
   }

   const createCard = a => {
       document.querySelector('#title').innerHTML = a.activity
       document.querySelector('#participants').innerHTML = a.participants
       document.querySelector('#acc').innerHTML = a.accessibility
       document.querySelector('#price').innerHTML = a.price
       document.querySelector('#type').innerHTML = a.type
   }

getAcitvity()

document.querySelector('#fetch').addEventListener('click', getAcitvity)