let choice = 16;
let oldChoice = choice;
const container = document.querySelector('.container');
const div = document.querySelectorAll('.son');
const clear = document.querySelector('#clear');
const size = document.querySelector('#size');
const color = document.querySelector('#color');


clear.addEventListener('click', clearGrid);
size.addEventListener('click', changeSize);

function createDivs() {
    for (let i=0; i<choice*choice; i++) {
        let newdiv = document.createElement('div');
        newdiv.classList.add('son');
        container.appendChild(newdiv);
        newdiv.addEventListener('mouseenter', changeColor);
    }
}

createDivs();

function changeColor(e) {
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);

    e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

function clearGrid(e) {
    const object = document.querySelectorAll('.son');
    object.forEach(e => e.style.backgroundColor = '#ffffff');    
}

function remove() {
    const square = document.querySelectorAll('.son');
    for (i=0; i<choice*choice; i++) {
        square[i].remove();
    }
}

function changeSize() {
    
    const choice = prompt('Type number of squares: ');
    const content = document.querySelector('.container');
    const square = document.querySelectorAll('.son');

    //Removes old grid
    for (let i=0; i<oldChoice*oldChoice; i++) {
        square[i].remove();
    }

    //creates new chosen grid
     if (choice > 25 || choice == 0 ) {
        alert('Pick a number from 1 to 25');
        window.location.reload(true);
    } else {
        for (let i=0; i<choice*choice; i++) {
            let newdiv = document.createElement('div');
            newdiv.classList.add('son');
            content.appendChild(newdiv);
            newdiv.addEventListener('mouseenter', changeColor);
        } 
        
        oldChoice = choice;
        content.style.gridTemplateRows = `repeat(${choice}, 1fr)`;
        container.style.gridTemplateColumns = `repeat(${choice}, 1fr)`;

    }
}