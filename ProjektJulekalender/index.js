const calenderButton = document.querySelector('.ny')
const calenderIndhold = document.querySelector('.indhold')

const calenderDays = 24;

const openDoor = (path, event) => {
    event.target.parentNode.style.backgroundImage = `url(${path}`;
    event.target.style.opacity = '0';
    event.target.style.backgroundColor = 'grey'
}

const createCalender = () => {
    for(let i = 0; i < calenderDays; i++) {
        const calenderDoor = document.createElement('div');
        const calenderDoorText = document.createElement('div')

        calenderDoor.classList.add('image');
        calenderDoor.style.gridArea = 'door' + (i + 1);
        calenderIndhold.appendChild(calenderDoor);

        calenderDoorText.classList.add('text');
        calenderDoorText.innerHTML = i + 1;
        calenderDoor.appendChild(calenderDoorText);

        courseNumber = i + 1;
        let coursePath = `./assets/dag-${courseNumber}.jpg`

        calenderDoorText.addEventListener('click', openDoor.bind(null, coursePath))
    }
}

calenderButton.addEventListener('click', createCalender);

