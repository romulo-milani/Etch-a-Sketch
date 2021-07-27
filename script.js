const container = document.querySelector('.container');
const div = document.querySelectorAll('.son');

function createDivs() {
    for (let i=0; i<256; i++) {
        let newdiv = document.createElement('div');
        newdiv.classList.add('son');
        container.appendChild(newdiv);
    }
}

createDivs();

div.forEach(color => color.addEventListener('mouseenter', changeColor));
function changeColor() {
    

}