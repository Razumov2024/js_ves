// операторы

// = - опертор присваивания


// математические операторы
// + 
// -
// *
// /
// ** - возведение в степень
// % - остаток от деления

// сравнение
// >
// <
// >=
// <=
// ==
// ===

// ! - отрицание
// && - и
// || - или

// При деленни на 0 выведется infinity или -infinity
// Ошибки не будет, программа не упадет
console.log(2 / 0);




// +
const x = 10;
const y = 2;
const z = '5';
const test = 'hello, world';


console.log(x + y); // 12
console.log(x + z); // '105'
console.log(test + z); // 'hello, world5'
console.log(`${test} ${z}!`); // 'hello, world 5!'
console.log(x + y + z); // 125

// typeof - определить тип данных, 2 формы записи 
// typeof name
// typeof (name)
console.log(typeof test);
console.log(typeof (x));



// -
// Nan - Not A Number
// isNan(name) - проверка на NaN, то есть является ли переменная NaN
console.log(x - y); // 8 
console.log(x - z); // 5
console.log(x - test); // Nan
console.log(test - test); // Nan
// console.log(isNaN(test - test)); // true


// *
console.log(x * y); // 20
console.log(x * z); // 50
console.log(x * test); // NaN 


// /
console.log(x / y); // 5
console.log(x / z); // 5
console.log(x / test); // NaN


// **
console.log(x ** y); // 100
console.log(x ** z); // 100000
console.log(x ** test); // NaN



// %
const a = 10;
const b = 5;
const c = 3;
console.log(a % b); // 0 
console.log(a % c); // 1

// >, <, >=, <=
console.log(x > y); // true
console.log(x < z); // false
console.log(x >= z); // true
console.log(x <= z); // false

// == или ===
// == преведение типов и сравнение значений
// === проверка по типу и по значению, без приведения 
console.log("3" == 3); // true 
console.log("3" === 3); // false


// ! - отрицание
console.log("3" !== 3); // false
console.log("3" != 3); // true

console.log(!false); // true
console.log(!true); // false


console.log(typeof "test"); // string
console.log(typeof 23); // number
console.log(typeof {}); // object
console.log(typeof undefined); // undefined)
console.log(typeof null); // object


console.log(undefined == undefined); // true
console.log(undefined === undefined); // true

console.log(null == null); // true
console.log(null === null); // true

console.log(null == undefined); // true

// console - несколько аргументов



let sum = 20;

//короткая запись sum += 5;
// sum = sum + 5;
// // sum += 5;
// // sum -= 5;
// // sum *= 5; короткие записи

// console.log(sum);



// // инкримент(++), декремент(--)
// // 

// let counter = 0;


// // постфиксная
// counter++;
// counter++;


// // префиксная
// ++counter;
// ++counter;


// // постфикс
// counter--;


// // префикс
// --counter;

// console.log(counter);


// постфиксная запись - возвращает предыдущее значение и увеличивает значение переменной на единицу
// console.log(counter++); => 0
// console.log(counter); /// => 1


// префиксная запись - увеличивает значение сразу на 1 и возвращает новое значение
// console.log(++counter); => 1
// console.log(counter); /// => 1


// И (&), ИЛИ(||)
console.log((3 > 5) || (14 < 9)); // true
console.log((3 > 5) && (14 < 9)); // false

const hour = 12;

console.log(hour > 9 && hour < 21)


// явное преобразование типа
// String() => преобразование к строке
// Number() => преобразование к числу
// Boolean() => преобразование к true/false

const num = 10;
const str = 'fssdffsd';

// console.log(typeof String(num));
// console.log(typeof Number(str));
// console.log(typeof Boolean(str));
// console.log(Boolean(str));


// console.log(!!str); // => true
// console.log(+num); // => тип: number

// const testt = 'hello';
// console.log(+testt); // => NaN



// falsy значения при приведении к boolean
// 1. null
// 2. undefined
// 3. false
// 4. 0
// 5. NaN
// 6. ''

// Привеедение к числу true/false
// true => Number(true) - 1
// false => Number(flase) - 0


// console.log(Number(!false));


// if, else
// if (условие) {}
//     // Этот блок выполняется если условие верно
// }else{
    // Этот блок выполняется если условие ложно
// }



// if (hour > 9 && hour < 21) {
//     console.log("Сейчас день");
// } else{
//     console.log("Сейчас ночь");
// }

// console.log("После if else");


// const zodiak = 'oven';

// if (zodiak === 'oven') {
//     console.log("Вы очень инпульсивный человек");
// } else if(zodiak === 'Лев') {
//     console.log("Вы очень инпульсивный и храбрый");
// } else if(zodiak === 'овен') {
//     console.log("Вы очень добрый");
// } else {
//     console.log("у нас нет такого знака зодиака");
// }


// const zodiak = prompt('Введите знак зодиака');

// if (zodiak === 'овен') {
//     const animalByYear = Number(prompt('Кто вы по китайскому календарю?'));
//     const animalByYear = +prompt('Кто вы по китайскому календарю?');
//     if(animalByYear === 2000) {
//         console.log("Вы очень инпульсивный человек");
//     } else {
//         console.log('Извините что-то пошло не так...');
//     }
// } else {
//     console.log("у нас нет такого знака зодиака");
// }




//switch case

// const zodiak = 'овен';

// switch (zodiak) {
//     case 'телец':
//         console.log('телец');
//         break;
//     case 'лев':
//         console.log('лев');
//         break;
//     case 'овен':
//         console.log('овен');
//         break;

//     default:
//         console.log('Ooops...');
//         break;
// }



// тернарный оператор
// условие ? 'если условие верно' : 'если условие ложно'

const userage = +prompt('Введите ваш возраст');

// if (userage >= 18) {
//     console.log('Добро пожаловать, смотри наш контент');
// } else{
//     console.log('Доступ запрещен');
// }

userage >= 18 ? console.log('Добро пожаловать, смотри наш контент') : console.log('Доступ запрещен');
