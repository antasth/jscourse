"use strict";

// const obj = {
//   name: 'John',
//   age: 25,
//   isMarried: false 
// };

// console.log(obj.name);
// console.log(obj.name);

// let arr = ['plum.png', 'orange.jpg', 6, {}, [], 'apple.bmp'];
// console.log(arr[2]);

// alert('hello');

// const result = confirm('Чик чирик?');
// console.log(result);

// const answer = +prompt('Че бля', '18');
// console.log(typeof(answer + '5') );

// const answers = [];

//  answers[0] = prompt('Имя ?', '');
//  answers[1] = prompt('фамилие ?', '');
//  answers[2] = prompt('откуда будешь ?', '');

// console.log(typeof(answers));

// const category = 'toys';

// console.log(`https://someurl.com/${category}/5/uuu`);

// const user = 'qwer';

// alert(`Превед , ${user}`);

// 
// let incr = 10,
//     decr = 10;

//    //  ++incr;
//    //  --decr;


//     console.log(++incr);
//     console.log(--decr);

// let i = 0;

//     for(i=0; i++; i<10){
//       alert(i);
//     }

//     console.log(5%2);

//     console.log(2*4 === '8');

   //  const isChecked = false,
   //        isClose = false;

   // console.log(isChecked || !isClose);

   // console.log(2 + 2 * 2 !== 8);

// УСЛОВИЯ
// const num = 50;
// if(num < 49) {
//    console.log('ERROR');
// } else if(num>100){
//    console.log('ERRORRR');
// } else{
//    console.log('OK');
// }
// (num === 50) ? console.log('OK') : console.log('ERROR');

// const num = 50;
// switch (num) {
//    case 49: 
//          console.log('Неверно');
//          break;
//    case 100:
//          console.log('Неверно');
//          break;
//    case 50:
//          console.log('верно');
//          break;  
//    default:
//          console.log('не в этот раз');
//          break;
// }

// ЦИКЛЫ

// let num = 50;

// while(num <= 55) {
//    console.log(num);
//    num++;
// }

// do {
//    console.log(num);
//    num++; 
// }
// while(num <= 55);

// for (let i =1; i < 10; i++) {
//    if (i === 6) {
//       // break;
//       continue;
//    }
//    console.log(i);
// }

// ! FUNCTIONS
// let num = 20;

// function showFirstMessage(text) {
//    console.log(text);
//    console.log(num);
// }

// showFirstMessage('Hello');
// console.log(num);

// function calc(a, b) {
//    return(a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));

// function ret() {
//    let num = 50;
//    return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function() {
//    console.log('hello');
// };

// logger();

// const calc = (a, b) => {
//    return a + b;
// };

//  console.log(calc(6, 3));


// // ! МЕТОДЫ И СВОЙСТВА СТРОК И ЧИСЕЛ

// const str = 'test';
// const arr = [1, 2 ,4];

// console.log(str.length);
// console.log(arr.length);
// console.log(str[2]);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// console.log(str);

// const fruit = 'Some fruit';

// console.log(fruit.indexOf('fruit'));
// console.log(fruit.indexOf('q'));

// const logg = 'hello world';

// console.log(logg.slice(6, 11));
// console.log(logg.substring(6, 11));
// console.log(logg.substr(6, 5));


// const num = 12.2;
// console.log(Math.round(num));

// const test = '12.2px';
// console.log(parseInt(test));
// console.log(parseFloat(test));

// ! CALLBACK FUNCTIONS
// function first() {
//    // 
//    setTimeout(function() {
//       console.log(1);
//    }, 500);
// }

// function second() {
//    console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//    console.log(`I am learn: ${lang}`);
//    callback();
// }

// function done() {
//    console.log('I complete this lesson');
// }

// learnJS('JavaScript', done);

// ! OBJECTS

// const obj = new Object(); НЕ ИСПОЛЬЗОВАТЬ
// const options = {
//      name: 'test',
//     width: 1024,
//    height: 1024,
//    colors: {
//       border: 'black',
//       bg: 'red'
//    },
//    makeTest: function() { // МЕТОД ОБЪЕКТА OPTIONS
//       console.log('test');
//    }
// };

// options.makeTest(); // ВЫЗОВ МЕТОДА ОБЪЕКТА

// console.log(options.name);
// delete options.name;
// console.log(options);

// for (let key in options) {
//    if (typeof(options[key]) === 'object') {
//       for (let i in options[key]) {
//          console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//       }
//    } else {
//       console.log(`Свойство ${key} имеет значение ${options[key]}`);
//    }
// }

// КОЛИЧЕСТВО ЭЛЕМЕНТОВ В ОБЪЕКТЕ
// console.log(Object.keys(options).length); 

// ! ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТОВ

// const {border, bg} = options.colors;
// console.log(border);

// ! МАССИВЫ 

// const arr = [1, 76, 3, 64, 8];
// console.log(arr.sort(compareNum));

// function compareNum(a, b) {
//    return a - b;
// }

// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// arr.forEach(function(item, i, arr) {
//    console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// arr.pop();
// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//    console.log(arr[i]);
// }

// for (let value of arr) {
//    console.log(value);
// }

// const str = prompt('','');
// const products = str.split(', ');
// products.sort();
// console.log(products.join('; '));

// ! ПЕРЕДАЧА ПО ССЫЛКЕ ИЛИ ПО ЗНАЧЕНИЮ SPREAD ОПЕРАТОР

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//    a: 5,
//    b: 1
// };

// const copy = obj; // ССЫЛКА НА ОБЪЕКТ obj(передача по ссылке)

// copy.a = 10;
// console.log(copy);
// console.log(obj);

// function copy(mainObj) { // Поверхностная копия объекта
//    let objCopy ={};
   
//    let key;
//    for(key in mainObj) {
//       objCopy[key] = mainObj[key]; 
//    }
//    return objCopy;
// }

// const numbers = {
//    a: 2,
//    b: 5,
//    c: {
//       x: 7,
//       y: 4
//    }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10;

// console.log(newNumbers);
// console.log(numbers);

// const add = {
//    d: 17,
//    e: 20
// };

// const clone = Object.assign({}, numbers);
// clone.b = 20;
// clone.c.x = 55;

// console.log(numbers);
// console.log(clone);


// const oldArr = ['a', 'b', 'c'];

// const newArr = oldArr.slice();


// newArr[2] = 'sdfsdf';
// console.log(newArr);
// console.log(oldArr);

// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'vk,', 'facebook'];

// console.log(internet);


// function log(a, b, c) {
//    console.log(a);
//    console.log(b);
//    console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);


// const array = ['a', 'b'];

// const newArr1 = [...array];

// const q = {
//    one: 1,
//    two: 2
// };

// const newq = {...q};

// ! ООП 

// let str = 'some';
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1,2,3]);

// const soldier = {
//    health: 400,
//    armor: 100,
//    sayhi: function() {
//       console.log('hi');
//    }
// };

// const john = Object.create(soldier);
// john.armor = 500;

// const john = {
//    health: 100
// };

// john.__proto__ = soldier;

// Object.setPrototypeOf(john,soldier);


// console.log(john.armor);

// john.sayhi();

// console.log(Object.getPrototypeOf(john));