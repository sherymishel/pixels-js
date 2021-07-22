const board = document.querySelector('#board');
const body = document.querySelector('body');
const colors = ['#F19CBB', '#ED3CCA', '#CD2682', '#9F2B68'];
const colors2 = ['rgb(253, 255, 122)', 'rgb(182, 255, 122)', 'rgb(122, 255, 133)', 'rgb(122, 255, 166)'];
const colors3 = ['rgb(122, 255, 244)', 'rgb(122, 235, 255)', 'rgb(122, 206, 255)', 'rgb(122, 184, 255)s'];
const cols = [colors2, colors3];
const SQUARES_NUMBER = 500;
const gates = document.querySelectorAll('.gate');

for (let i = 0; i < SQUARES_NUMBER; i++) {
const square = document.createElement('div');
square.classList.add('square');
square.addEventListener('mouseover', () => setColor(square));
square.addEventListener('mouseleave', () => removeColor(square));
board.append(square);
}

let t = 0;
 for (let gate of gates) {
    gate.addEventListener('mouseover', () => {
        t += 3;
    }
    )
 }   


function setColor(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.bowShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
    }
    
    function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = '0 0 2px #000'
    }
    
    function getRandomColor() {
        if (t%2==0) {
    const index = Math.floor(Math.random()*colors.length);
    return colors[index];
        }
        else {
            const index = Math.floor(Math.random()*colors2.length);
            return colors2[index];
                }

    }




