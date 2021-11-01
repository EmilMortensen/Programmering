let person = {
    id: '12345',
    name: 'Emil',
    age: 17,
    hobbies:['Damer', 'Fifa', 'Kedsomhed'],
    favoritColor: 'Red'
}

console.log('this persons name is' + person.name )
console.log('this persons id is' + person.id )
console.log('this persons age is' + person.age )
console.log('this persons first hobby is' + person.hobbies[0] )


let people = [person, {
    name: 'Pierre',
    age: '12',
    id: '23456',
    hobbies:['Fodbold', 'Damer', 'Flere damer', 'Endnu flere damer'],
    favoritColor:'Blue'
},{
    name: 'Hans',
    age: '9',
    id: '34567',
    hobbies:['Grete', 'Slik', 'Slikhus', 'Skovtur'],
    favoritColor: 'Brown'
},{
    name: 'Grete',
    age: '9',
    id: '45678',
    hobbies:['Hans', 'Hans far', 'Hans bror', 'Hans hund'],
    favoritColor: 'Purple'
}
]

console.log(' person 2s name is ' + people[1].name)

people.map( person => {
    let nc = document.createElement('div')
    nc.classList.add('card')
    nc.style.backgroundColor = person.favoritColor
    nc.innerHTML = '<h2>' + person.name + '</h2>'
    nc.innerHTML += '<li>' + person.age + '</li>'
    nc.innerHTML += '<li>' + person.id + '</li>'
    nc.innerHTML += '<li>' + person.hobbies.join(', ') + '</li>'
    nc.innerHTML += '<li>' + person.favoritColor + '</li>'
    document.querySelector('main').append(nc)
})