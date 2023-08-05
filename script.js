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
const clearBtn = document.getElementById('clear-button');
const rainbowBtn = document.getElementById('rainbow-button');
const eraserBtn = document.getElementById('eraser-button');
const colorPicker = document.getElementById('colorPicker');
const colorBtn = document.getElementById('color-button')