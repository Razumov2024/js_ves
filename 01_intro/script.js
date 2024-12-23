// - однострочный комментарий

/*
оаоавоапо
паовапаоовао
поопвоппо
паовоавоо
*/

/* многострочный комметарий */


// Типы данных
// 8 штук

// 1. number - 8 11.5 - число
// 2. string - 'stroka' "222" `text` - строка
// 3. booling - true or false - логический тип данных
// 4. null - null - ничего
// 5. undefined - undefined - ничего
// 6. BigInt - 123n
// 7. Symbol - символ - уникальный идентификатор
// 8. Object - объект - {ключ: значение}


// переменные 

// var, let, const

let num = 5;
let str1 = '5';
let bool = true;
let und;

num = 15.2;

const test = '432';


// let num = 22323; ошибка
// const test = '432'; ошибка

var testVar = 22;

var testVar = '567';

// let - объявление переменной 
// можно перезаписать, как тип, так и значение

// const - объявление константы
// перезаписать значение нельзя
// нужно тпроинициализировать (т.е. присвоить значение)
// Нельзя: const x;

// var - переменная, не используем!
// можно объявить более 1 переменной с одинаковым именнем 

// \ - символ экранирования
// ` ` - можно писать вставлять многострочный текст
// ` ` - (бектики) template string (шаблонная строка)
//  ${str} - интерполяция - соединение строк с помощью вставки значения переменной. Применяется вместе с ``
let str = 'Boy\'s ball';
let str2 = "Boy's ball";
let str3 = `Boy's ball`;

let helloMessage = `Привет, дорогой ${str}`;

const pi = 3.14;


// V8


// {} - литерал объекта
const obj = {
    age: 22,
    name: 'John',
    gender: 'male',
    isStudent: true,
    location: {
        city: 'Gomel',
        street: 'Sovetskaya'
    }
};

let str6 = 'sdfsffsdf'

let newStr = new String('dfsfsfsdf')

// console.log(obj); 




// prompt, alert, confirm
// message - сообщение
// defaultValue - значение в инпуте по умолчанию


// prompt()

// const Username =  prompt('Введите ваше имя', 'John');

// console.log(Username);


// alert(message)
// alert('Пароль не подошел');



//confirm 


// let resultat = confirm('Вам понравилось у нас?');

// console.log(resultat);




//
// Задача №1
//


console.log('Запускаем таймер');

alert('5');
alert('4');
alert('3');
alert('2');
alert('1');
alert('0');

console.log('Обратный отсчет закончен');


//
// Задача №2
//


const myName = 'Danila';
const mySurname = 'Razumov';
const myFavoriteDrink = 'water';
const myFavoriteAnimal = 'cat';

console.log(myName);
console.log(mySurname);
console.log(myFavoriteDrink);
console.log(myFavoriteAnimal);



