// Math

// ToString()

// const num = 22;

// const result = num.toString();

// console.log(result);
// console.log(typeof result);



// ToFixed(number) => возвращает строку с указнным количеством знаково после запятой.

// const a = 8;
// const b = 3;

// const resualt = a / b;

// console.log(resualt.toFixed(2));


//  Number('123')
// parseInt()
// parseFloat()
// анализируют переданный аргумент и возвращают число 
// parseInt() - возвращает целое число
// parseFloat() - возвращает число с плавающей запятой

// const num = prompt('Введите число');

// console.log(parseInt(num));



// isInteger() - проверяет целое ли число и его тип данных number, если да, то вернет true, иначе false

// const a = 10;
// const b = 2.22;

// console.log(Number.isInteger(a));
// console.log(Number.isInteger(b));










// Math

// const pi = Math.PI

// console.log(pi);




// округление

// const a = 8;
// const b = 3;

// const result = a / b;

// console.log(Math.ceil(result)); // округление в большую сторону
// console.log(Math.floor(result)); // округление в меньшую сторону
// console.log(Math.round(result)); // округление по правилам математики
// console.log(Math.trunc(result)); // отбрасывает дробную часть



// Math.pow(что, степень);

// const num = 3;

// console.log(Math.pow(num, 2));




// квадратный корень
// console.log(Math.sqrt(84));






// Max и Min

// console.log(Math.max(10,9,22,11,4,5,6,7));
// console.log(Math.min(10,9,22,11,4,5,6,7));


// Math.random()
// console.log(Math.random); - случайное число с плавающей запятой от 0 до 1
// console.log(Math.random().toString(36).slice(2, 10)); // 0-9 a-z





// цвета
// const randomColor = Math.floor(Math.random() * 16777215).toString(16);
// console.log('#' + randomColor);
// document.body.style.backgroundColor = '#' + randomColor;