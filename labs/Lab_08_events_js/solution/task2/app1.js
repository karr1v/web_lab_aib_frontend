const redInput = document.getElementById('redInput');
const greedInput = document.getElementById('greenInput');
const blueInput = document.getElementById('blueInput');
const paletteBox = document.getElementById('palette');
let color;

function updateColor(){
    const redValue = redInput.value;
    const greenValue = greenInput.value;
    const blueValue = blueInput.value;
    color = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    paletteBox.style.backgroundColor = color;
    
}

redInput.addEventListener('input', updateColor);
greenInput.addEventListener('input', updateColor);
blueInput.addEventListener('input', updateColor);
