const gridContainer = document.querySelector('.grid-container');

function createGrid(size) {
    size = Math.min(size, 100);
    
    const totalSquares = size * size;
    const currentSquares = gridContainer.querySelectorAll('.square').length;

    
    const adjustedSquareSize = 100 / size;

    
    gridContainer.style.gridTemplateColumns = `repeat(${size}, ${adjustedSquareSize}%)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, ${adjustedSquareSize}%)`;


    if (currentSquares < totalSquares) {
        for (let i = currentSquares; i < totalSquares; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            gridContainer.appendChild(square);
        }
    } else if (currentSquares > totalSquares) {
        const squaresToRemove = currentSquares - totalSquares;
        for (let i = 0; i < squaresToRemove; i++) {
            gridContainer.removeChild(gridContainer.lastChild);
        }
    }
}


function removeAllSquares() {

    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.remove();
    });

}

createGrid(16);

const squares = document.querySelectorAll('.square');
const modal = document.getElementById("modal");
const modalMessage = document.getElementById("modal-message");
const changeButton = document.getElementById("change");
let newSize = 0;

const buttons = document.querySelectorAll('button');


changeButton.addEventListener('click', () => {
    newSize = prompt("What is the new grid size? (16-100)")
    if(newSize >= 16 && newSize <= 100) {
        removeAllSquares();
        createGrid(newSize);
    } else {
        alert("Please enter a valid size between 16 and 100.")
    }

})


gridContainer.addEventListener('mouseover', (event) => {
    const target = event.target;
    if (target.classList.contains('square')) {
        target.style.backgroundColor = 'black';
    }
});