// loop - цикл -
// позволяет выполнить код многократно
// итерация - это единочное выполнение действия


// for
// for in
// for of
// while
// do  while


// for
// break - прекратить выполнение цикла
// for(let i = 0; i < 10; i++){
//     if(i === 10) {
//         break;
//     }
//     console.log(i);
// }



// continue - прекратить текущую итерацию и перейти к следующей
// for(let i = 0; i < 10; i++){
//     if(i === 5) {
//         continue;
//     }
//     console.log(i);
// }




// for(let i = 1; i < 5; i++){
//     console.log(`${i}-е выполнение`);
//     for(let j = 1; j < 3; j++){
//         console.log(`${i}.${j}`);
//     }
// }



// таблица 9x9
// for(let i = 1; i < 10; i++){
//     for(let j = 1; j < 10; j++){
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
// }




// while (условие) {}


// let i = 0;
// const max = 5;


// while (i < max) {
//     console.log(i);
//     i++;
// }





// do {} while(условие)
// выполнится минимум один раз, не смотря на заданное условие

// let i = 0;
// const max = 5;

// do { 
//     console.log(i);
//     i++;

// } while (i > max);













// 1 задача!!!

// const userone  = +prompt('Введите ваш возраст');
// const usertwo  = +prompt('Введите ваш возраст');

// if (userone > usertwo) {
//     console.log('Старший');

// } else if(userone < usertwo){
//         console.log('Старший');

// } else if(userone === usertwo){
//         console.log('Вы не ввели данные, ошибка...');
// }




// 2 задача!!!

// const userage  = +prompt('Введите ваш возраст');

// if (userage <= 10) {
//     console.log('привет мальчик');

// } else if(userage <= 18){
//         console.log('привет подросток');

// } else if(userage <= 40){
//         console.log('здарова пацан');
// } else if(userage <= 80){
//     console.log('добрый вечер');
// } else if(userage <= 100){
//     console.log('здравия желаю');
// }




// 3 задача!!!

// const num1  = +prompt('Введите первое число');
// const num2  = +prompt('Введите второе число');
// const num3  = +prompt('Введите третье число');
// const result = num1 + num2 + num3;

// if(isNaN(num1)){
//     console.log('Введите число, а не строку!');
// } else if(isNaN(num2)){
//     console.log('Введите число, а не строку!');
// } else if(isNaN(num3)){
//     console.log('Введите число, а не строку!');
// }

// console.log(result / 3); 




// 4 задача!!!

// const color  = prompt('Введите цвет');

// switch (color) {
//     case 'красный':
//         console.log('1');
//         break;
//     case 'синий':
//         console.log('2');
//         break;
//     case 'оранжевый':
//         console.log('3');
//         break;
//     case 'серый':
//         console.log('4');
//         break;
//     case 'салмон':
//         console.log('5');
//         break;

//     default:
//         console.log('Ошибка, такого цвета нет...');
//         break;
// }







// 5 задача


// const month  = prompt('Введите номер месяца');

// switch (month) {
//     case '1':
//         console.log('Январь');
//         break;
//     case '2':
//         console.log('Февраль');
//         break;
//     case '3':
//         console.log('Март');
//         break;
//     case '4':
//         console.log('Апрель');
//         break;
//     case '5':
//         console.log('Май');
//         break;
//     case '6':
//         console.log('Июнь');
//         break;
//     case '7':
//         console.log('Июль');
//         break;
//     case '8':
//         console.log('Август');
//         break;
//     case '9':
//         console.log('Сентябрь');
//         break;
//     case '10':
//         console.log('Октябрь');
//         break;
//     case '11':
//         console.log('Ноябрь');
//         break;
//     case '12':
//         console.log('Декабрь');
//         break;

//     default:
//         console.log('Ошибка, такого месяца нет...');
//         break;
// }






// 6 задача

// const Fedota  = +prompt('Введите ваш возраст');
// const Mitya  = +prompt('Введите ваш возраст');

// if (Mitya > Fedota) {
//     console.log(`Митяй старше Федота на ${Mitya - Fedota}`);

// } else if(Fedota > Mitya){
//         console.log(`Федот старше Митяя на ${Fedota - Mitya}`);

// } else if(Mitya === Fedota){
//         console.log('Возрасты равны');
// }


// 7 задача

// const chislo  = +prompt('Введите любое число');

// if(chislo > 0){
//     console.log('Число положительное');
// } else if(chislo < 0){
//     console.log('Число отрицательное');
// } else if(chislo == 0){
//     console.log('Число является нулем');
// }




// 8 задача


// const world = prompt('Введите название планеты');
// switch (world) {
//     case 'Земля':
//     case 'земля':
//         console.log('Привет, землянин!');
//         break;

//     default:
//         console.log('Привет, инопланетянин!');
//         break;
// }





// Задачи



// 1) Запросите у пользователя длину стороны квадрата и выведите площадь такого квадрата

// const dlinna = prompt('Введите длину стороны квадрата');

// for (let i = 0; i < dlinna ; i++) {
//     for (let j = 0; j = dlinna; j++) {
//         console.log('площадь квадрата');
        
//     }
    
// }


// 2) Запросите у пользователя число, возведите это число во 3-ю степень и выведите на экран.


// const number = prompt('введите число');

// for (let i = 0; i < number; i++) {
//     console.log(number ** 3);
    
// }


// 3) Сделать цикл который выводит 'bla' 'blabla' 'blablabla' 'blablablabla'




// const txt = 'bla';
// let result = '';

// result = result + txt;

// for (let i = 1; i <= 4; i++) {
//         result = result + txt;

//         console.log(result)
    
// }






// 4) Вывести # столько раз, сколько указал пользователь.


// const count = prompt('Введите #');
// const znak = '#'
// let simvoll = ''

// for (let i = 0; i < count; i++) {
//     simvoll = simvoll + znak 
    
// }

// console.log(simvoll);





// 5) Пользователь ввел число, а на экран вывелись все числа от введенного до 0.

// const chislo = prompt('Введите число');

// for (let i = chislo; i >= 0; i--) {
//     console.log(i);
    
// }


// 6) сделать цикл который выводит нечетные числа от 40 до 140


// for (let i = 40; i <= 140; i++) {
//     if(i % 2 !== 0){
//         console.log(i);
//     }
    
// }