console.log('Task 3');
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