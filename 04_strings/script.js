// строки

// '' "" ``
// 'hello world' => 'Hello world'
// [индекс]
// 'hello'[0]

// Boxing, unboxing

// методы строк возвращают новую строку, не изменяют исходную

// Length => возвращает длинну строки

// const laststring = 'Hello world';

// console.log(laststring.length);


// const str = 'Hello world';

// ToLowerCase() - в нижний регистр
// ToUpperCase() - в верхний регистр

// console.log(str.ToLowerCase());
// console.log(str.ToUpperCase());


// объединение строк
// concat() - объединяет две строки и возвращает одну итоговую

const str = 'javascript';

// console.log(str.concat(' ', str));




// доступ к символам
// 'строка'[индекс]
// индекс  => с 0
//charArt[индекс]

// console.log(str.charAt(0));
// console.log(str[0]);


// console.log(str[str.length - 1]);



// for(let i = 0; i < str.length; i++){
//     console.log(str[i]);
// }



// includes('подстрока', index)=> проверяет содержит ли строка указанную под строку
// возвращает true или false, смотря что нвйденно
// index - позиция в строке с которой надо начать поиск, не обязательно


// console.log(str.includes("|"));
// console.log(str.includes("javascript"));


// const email = 'test@email@.ru'
// console.log(str.includes("@")); // true
// console.log(str.includes("@", 5)); // false



// indexOf(value, index)) => возвращает индекс найденного вхождения символа/значения
// index - позиция в строке с которой надо начать поиск, не обязательно
// вовзращает -1 если не было найденно совпадений

// console.log(email.indexOf('@')); // 4
// console.log(email.indexOf('|')); // -1

// lastIndexOf(value, index)) => возвращает индекс найденного вхождения символа/значения
// index - позиция в строке с которой надо начать поиск, не обязательно
// вовзращает -1 если не было найденно совпадений

// console.log(email.lastIndexOf('@')); // 9
// console.log(email.lastIndexOf('|')); // -1




// endWith(value) - заканчивается ли строка значением
// startWith(value) - начинается ли строка с символа или значения
// оба метода возвращают true или false

// console.log(str.startsWith("|"));
// console.log(str.endsWith("|"));



// search(value или ругулярное выражение) => поверяет есть ли в строке value или регулярное выражение
// возвращает индекс начала совпадения

// console.log(str.search('script'));



// slice(start, end) => извлекает часть строки и возвращает новую
// start - начало откуда будет извелечение
// end - индекс конца извлечения
// без аргументов => извелкается вся строка от начала до конца

// const res = str.slice();

// console.log(res);


// substring(start, end) => извлекает часть строки и возвращает новую

// console.log(str.substring());




// substr(start, end) => извлекает часть строки указанной длины (Length)

// console.log(str.substr(0,4));
// console.log(str.substr(0));
// console.log(str.substr(5,8));


// padEnd(number, символ) => добавляет в конец строки символы, по умолчанию - пробелы
// padStart(number, символ) => добавляет в начало строки символы, по умолчанию - пробелы

// console.log(str.padEnd(22, "*"));
// console.log(str.padEnd(22, "*"));



// replace(что искать, на что заменить) => ищет Первое совпадение и заменит на "НА ЧТО ЗАМЕНИТЬ"
// replaceAll(что искать, на что заменить) => ищет все совпадения и заменит на "НА ЧТО ЗАМЕНИТЬ"


// console.log(str.replace('java', 'script'));


// repeat(кол-во повторений) => повторяет строку столько, сколько заданно


// console.log(str.repeat(3));


// обрезают пробелы в строкe:
// trimEnd() - в конце
// trimStart() - в начале
// trim() - везде


// const username = prompt("Введите ваше имя");


// console.log(username);
// console.log(username.trim());






// String()
// toString()


// const username = prompt("Введите ваше имя и фамилию");

// console.log(username.padEnd(username.length + 1, '*'));
// console.log(username.padStart(username.length + 1, '*'));

// console.log(username);





// Задачи




// Задача 1

// const str1 = prompt("Введите первую строку");
// const str2 = prompt("Введите вторую строку");

// if(str1.length > str2.length){
//     console.log('Первая строка больше второй');
//   else if(str2.length > str1.length){
//         console.log('Вторая строка больше первой');
//     }
// } else{
//     console.log('Обе строки равны');
// }





// Задача 2

// const stroka = 'aaa@bbb@ccc';

// console.log(stroka.replaceAll('@','!'));


// Задача 3 

// const stroka = 'я учу javascript!';

// console.log(stroka.length);


// Задача 4 

// const stroka = 'JavaScript';
// let res = ''


// for(let i = stroka.length -1; i >= 0; i--){
//     res += str[i]
// }

// console.log(res);



// Задача 5


// const str1 = prompt("Введите строку");

// const upperw = 0;

// for(i = 0; i < str1.length; i++){
//     if(str1[i] === str1[i].toUpperCase()){
//         upperw += 1;
//     }
// }


// console.log(upperw);



// Задача 6


// const namee = prompt("Введите ваше имя");
// const fam = prompt("Введите вашу фамилию");

// console.log(namee.concat(' ', fam));



// Задача 8




// Задача 9



// let useryear = +prompt('Введите год вашего рождения');

// const year = 2024;

// for(let i = year; i <= 2024; i++){
//     console.log(`в ${useryear} было ${i} год`);
//     useryear = useryear + 1;
// }



// Задача 10

// let zeros = 0;
// let positive = 0;
// let negative = 0;


// for(let i = 0; i < 10; i++){
//     let num1 = +prompt('Введите число');

//     if(num1 > 0){
//         positive += 1;
//     } else if(num1 < 0){
//         negative += 1;
//     } else{
//         zeros += 1;
//     }
// }

// console.log(`Положителбный: ${positive}, отрицательных: ${negative}, нулей: ${zeros}`);