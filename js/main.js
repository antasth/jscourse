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