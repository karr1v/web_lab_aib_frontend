console.log('Task 2');
let fruitMap = {
    'apple': 'apple green',
    'strawberry': 'strawberry red',
    'blueberry': 'blueberry blue',
    'raspberry': 'raspberry light red',
    'lemon': 'lemon yellow'
};

const fruit = ['apple', 'strawberry', 'blueberry', 'raspberry', 'lemon'];

for (let i = 0; i < fruit.length; i++) {
    let currentFruit = fruit[i];
    let fruitColor = fruitMap[currentFruit];

    if (fruitColor) {
        console.log(currentFruit);
        console.log(fruitColor);
    } else {
        console.log(currentFruit);
        console.log('Unknown fruit');
    }
}
