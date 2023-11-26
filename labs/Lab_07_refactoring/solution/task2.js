console.log('Task 2');
var fruitMap = {
    'apple': 'apple green',
    'strawberry': 'strawberry red',
    'blueberry': 'blueberry blue',
    'raspberry': 'raspberry light red',
    'lemon': 'lemon yellow'
};

var fruit = ['apple', 'strawberry', 'blueberry', 'raspberry', 'lemon'];

for (var i = 0; i < fruit.length; i++) {
    var currentFruit = fruit[i];
    var fruitColor = fruitMap[currentFruit];

    if (fruitColor) {
        console.log(currentFruit);
        console.log(fruitColor);
    } else {
        console.log(currentFruit);
        console.log('Unknown fruit');
    }
}