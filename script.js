const DEFAULT_SIZE = 16;
const DEFAULT_MODE = 'color';
const DEFAULT_COLOR = '#333333';

let currentSize = DEFAULT_SIZE;
let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;

function setCurrentSize(newSize) {
    currentSize = newSize;
}

function setCurrentColor(newColor) {
    currentColor = newColor;
}

function setCurrentMode(newMode) {
    currentMode = newMode;
}

const grid = document.getElementById('grid');
const sizeSlider = document.getElementById('sizeSlider');
const sizeValue = document.getElementById('sizeValue');
const clearBtn = document.getElementById('clearBtn');
const rainbowBtn = document.getElementById('rainbowBtn');
const eraserBtn = document.getElementById('eraserBtn');
const colorPicker = document.getElementById('colorBtn');
const colorBtn = document.getElementById('colorBtn');

function clearGrid() {
  grid.innerHTML = '';
}

function setupGrid(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement('div')
    gridElement.classList.add('square')
    gridElement.addEventListener('mouseover', changeColor)
    gridElement.addEventListener('mousedown', changeColor)
    grid.appendChild(gridElement);
  }
}

function reloadGrid() {
  clearGrid();
  setupGrid(currentSize);
}


colorPicker.oninput = (e) => setCurrentColor(e.target.value);
colorBtn.onclick = () => setCurrentMode('color');
rainbowBtn.onclick = () => setCurrentMode('rainbow');
eraserBtn.onclick = () => setCurrentMode('eraser');
clearBtn.onclick = () => reloadGrid();
sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value)
sizeSlider.onchange = (e) => changeSize(e.target.value);

let mouseDown = false;

document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);



function changeSize(value) {
    setCurrentSize(value);
    updateSizeValue(value);
    reloadGrid();
}



function updateSizeValue(value) {
    sizeValue.innerHTML = `${value} x ${value}`
}


function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return;
    if (currentMode === 'rainbow') {
      const randomR = Math.floor(Math.random() * 256);
      const randomG = Math.floor(Math.random() * 256);
      const randomB = Math.floor(Math.random() * 256);
      e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    } else if (currentMode === 'color') {
      e.target.style.backgroundColor = currentColor
    } else if (currentMode === 'eraser') {
      e.target.style.backgroundColor = '#fefefe'
    }
  }
  
function activateButton(newMode) {
    if (currentMode === 'rainbow') {
      rainbowBtn.classList.remove('active')
    } else if (currentMode === 'color') {
      colorBtn.classList.remove('active')
    } else if (currentMode === 'eraser') {
      eraserBtn.classList.remove('active')
    }
  
    if (newMode === 'rainbow') {
      rainbowBtn.classList.add('active')
    } else if (newMode === 'color') {
      colorBtn.classList.add('active')
    } else if (newMode === 'eraser') {
      eraserBtn.classList.add('active')
    }
  }
  
  window.onload = () => {
    setupGrid(DEFAULT_SIZE)
    activateButton(DEFAULT_MODE)
  }
  