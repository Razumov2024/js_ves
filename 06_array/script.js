// array 
// массив
// массив - это колекция значений
// [2,3,4] <= массив
// у элемента есть индекс, начинается с 0


// length - длина массива 

// const arr = [2,3,4];


// const arr = []; // литерал массива

// const arr2 = new Array(); // функция конструктор

// const arr3 = Array.of(1,2,3);
// const arr4 = Array.from('Hello');

// // console.log(arr);
// // console.log(arr2);
// // console.log(arr3);


// // обращение по индексу к элементу
// console.log(arr4[2]);


// тип данных => обьект 
// console.log(typeof arr4)



// ссылочный тип данных
// const arr = [1,2,3];

// const arr2 = [1,2,3];

// console.log(arr === arr2);



// Array.isArray() => проверка массив это или нет
// console.log(Array.isArray(arr));
// console.log(Array.isArray('dawawdaw'));


// методы массивов

// const arr = [1,2,3]

// push() =>  добавляет элемент в конец массива
// возвращает длинну массива
// мутирует исходный массив
// const res = arr.push('8', 10);

// console.log(arr);
// console.log(res);



// pop() - удаляет последний элемент массива
// возвращает длинну массива

// const arr = [1,2,3]
// const res = arr.pop();

// console.log(arr);
// console.log(res);


// shift() - удаляет первый элемент массива
// возвращает удаленный элемент
// мутирует исходный массив

// const arr = [1,2,3]
// const res = arr.shift();

// console.log(arr);
// console.log(res);




// unshift(value) - добавляет элемент в начало массива
// возвращает длинну массива
// мутирует исходный массив
// можно добавить сразу несколько элементов 

// const arr = [1,2,3]
// const res = arr.unshift(8,22,11);

// console.log(arr);
// console.log(res);


// concst() - объединяет в один массив

// const arr = [1,2,3]
// const arr2 = [1,2,3]
// const res = arr.concat(arr);

// console.log(arr);
// console.log(arr2);
// console.log(res);


// slice(нвчало, конец) - копирует указанную часть массива и возвращает новый массив 
// c начало, но не включает конец
// без аргументов копирует все

// const arr = [1,2,3]
// const res = arr.slice();
// const res2 = arr.slice(0,2);


// console.log(arr);
// console.log(res);



// join(separator) - преобразует элементы в строку, объединяет и возвращает строку
// separator - разделитель - добавляется между элементами 

// const arr = [1,2,3]
// const res = arr.join(' ');

// console.log(arr);
// console.log(res);


// IndexOf(искомый_элемент) - возвращает индекс элемента
// если эдемент найден, то возвращает индекс
// если элемент не найден, то возвращает -1
// второй аргумент - не обязательный, откуда начинать поиск

// const arr = [1,2,3]
// const res = arr.indexOf(6);
// const res2 = arr.indexOf(5);

// console.log(arr);
// console.log(res);
// console.log(res2);




// lastIndexOf(искомый_элемент) - возвращает индекс последнего вхождения элемента
// если эдемент найден, то возвращает индекс
// если элемент не найден, то возвращает -1
// второй аргмент - не обязательный, откуда начинать поиск

// const arr = [1,2,3,3]
// const res = arr.lastIndexOf(6);
// const res2 = arr.lastIndexOf(5);

// console.log(arr);
// console.log(res);
// console.log(res2);



// includes() - проверяет содержит ли массив указанный элемент
// возврщает true или false

// const arr = [1,2,3,3]
// const res = arr.includes(4);
// const res2 = arr.includes(5);

// console.log(arr);
// console.log(res);
// console.log(res2);


// reverse() - переворачивает массив
// возвращает ссылку на неупорядоченный массив  

// const arr = [1,2,3,3]
// const res = arr.reverse();

// console.log(arr);
// console.log(res);




// at() - возвращает элемент по индексу


// const arr = [1,2,3,3]
// const res = arr.at(2); 

// console.log(arr);
// console.log(res);


// fill(значение, начало, конец) - заполняет массив указанным статическим значением
// мутирует исходный массив

// const arr = [1,2,3,3]
// const res = arr.fill(1111, 1, 3); 

// console.log(arr);
// console.log(res);




// splice(start, count, element, ...elementN) - можно добавлять, удалять
// мутирует исходный массив


// const numbers = [1,2,3,4,5,6,7];

// // const res = numbers.splice(2); // [3,4,5,6,7]
// // const res1 = numbers.splice(2,3); // [3,4,5]
// const res2 = numbers.splice(2,0,'test'); // [3,4,5]

// console.log(numbers);
// console.log(res);
// console.log(res1);
// console.log(res2);



// !!! метод строк
// split() - преоьразует строку в массив по разделителю
// возвращает массив

// const str = 'javacsript';

// const res = str.split();

// const res = str.split('').reverse().join(''); // перевернуть строку

// console.log(str);
// console.log(res);



// циклы и массивы


// const numbers = [1,2,3,4,5,6,7];

// const newArr = []
// for (let i = 0; i < numbers.length; i++){
//     newArr = numbers[i] ** 2
// }

// console.log(newArr);

// for of => перебирает итерируемые сущности

// const students = ['john', 'david', 'kate', 'smith'];

// // for (let student of students) {
// //     console.log(student)
// // }

// // копирование массива
// const studentsCopy = []

// for(let i = 0; i < students.length; i++){
//     // studentsCopy.push(students[i]);
//     studentsCopy[i] = students[i];
// }

// console.log(students === studentsCopy);
// console.log(students);
// console.log(studentsCopy);



// flat(depth) - уменьшает уровень вложенности, глубины
// depth - по умолчанию 1

// const teatArr = [[1,2,3], [5,6,7]];

// const res = teatArr.flat();

// console.log(teatArr);
// console.log(res);