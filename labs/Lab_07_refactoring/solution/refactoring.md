## Лабораторная работа 7
### Задание 1. level stone
Скрипт сравнивает две переменные и выводит равны они или нет
```js
var a = prompt('var one');
var b = prompt('var two');
if (a === b)
console.log('equally');
else
console.log('not equally');
```

### Задание №2. level iron
Скрипт выводит названия фруктов, а затем отображает название фрукта и его цвет
```js
var fruit = new Array('apple', 'strawberry', 'blueberry', 'raspberry', 'lemon');
        for(var i=0;i<fruit.length;i++){
            console.log(fruit[i]);
            switch(fruit[i]){
                case 'apple':
                    console.log('apple green');
                    break;
                case 'strawberry':
                    console.log('strawberry red')
                    break;
                case 'blueberry':
                    console.log('blueberry blue')
                    break;
                case 'raspberry':
                    console.log('raspberry light red')
                    break;
                case 'lemon':
                    console.log('lemon yellow')
                    break;
                default:
                    console.log('Unknown fruit');
            }
        }
```
### Задание 3. level gold
Скрипт выполняет подсчет затрат на зарплату сотрудникам.
Где спрашивает у пользователя кол-во сотрудников и зарплату на одного человека

```js 
function ValidNumber(massege){
        let input=prompt(massege);
        while(isNaN(parseFloat(input))||parseFloat(input) <= 0){
            input = prompt(massege);
        }
        return parseFloat(input);
    }
    const numberOfPeople = ValidNumber('Введите кол-во человек ');
    const SelarPers = ValidNumber('Введите зп на человека ');
    const totalCost = numberOfPeople * SelarPers;
    alert('Затраты на ЗП -> ' + totalCost);
```

### Задание 4
Скрипт проводит анализ имеющихся студентов в массиве. Выводит среднюю оценку и список плохих студентов
```js 

const students = [
  { fullName: 'Петров А.А.', Mark: 5 },
  { fullName: 'Иванов Б.Б.', Mark: 3.4 },
  { fullName: 'Сидоров Г.Г.', Mark: 9 },
  { fullName: 'Немолодой Д.Д', Mark: 2 },
  { fullName: 'Молодой Е.Е', Mark: 3.4 }
];

let totalMarks = 0;
let studentCount = 0;
let lowStudents = [];

for (let studentIndex = 0; studentIndex < students.length; studentIndex++) {
  let currentMark = students[studentIndex].Mark;

  if (currentMark > 5 || currentMark < 0) {
    console.log(`Значение оценки студента `+ students[studentIndex].fullName + ` не соответствует допустимым значениям и не будет учитываться`);
    continue;
  }
  if (!(currentMark <= 5 && currentMark >= 0)) {
        continue;
    }
  if (currentMark < 4) {
    lowStudents.push(students[studentIndex]);
  }
  totalMarks += currentMark;
  studentCount++;
}

let averageMark = totalMarks / studentCount;

console.log(`Средняя оценка: ` + averageMark.toFixed(2));
console.log('Плохие студенты: ');

if (lowStudents.length === 0) {
  console.log('Таких нет');
} else {
  lowStudents.forEach((student) => {
    console.log(`ФИО: `+ student.fullName +  `; Оценка: ` + student.Mark);
  });
}
```
