const redInput = document.getElementById('redInput');
const greedInput = document.getElementById('greenInput');
const blueInput = document.getElementById('blueInput');
const paletteBox = document.getElementById('palette');

function updateColor(){
    const redValue = redInput.value;
    const greenValue = greenInput.value;
    const blueValue = blueInput.value;

    paletteBox.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    
}

redInput.addEventListener('input', updateColor);
greenInput.addEventListener('input', updateColor);
blueInput.addEventListener('input', updateColor);