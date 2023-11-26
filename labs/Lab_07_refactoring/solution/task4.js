console.log('Task 4');
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