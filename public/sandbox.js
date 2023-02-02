"use strict";
// const inputs = document.querySelectorAll('input');
// inputs.forEach(input => {
//     console.log(input);
// });
// let character = 'mario';
// let age = 30;
// let isBlackBelt = false;
// character = 20;
// character = 'Fílip';
// age = 'yoshimitsu';
// age = 40;
// isBlackBelt = 'Sim';
// isBlackBelt = true;
// const circ = (diameter: number) => {
//     return diameter * Math.PI;
// };
// console.log(circ(7.5));
// let names = ['Ronin', 'Fílip', 'Yoshimitsu'];
// names.push('Anselmo');
// names.push(3) -> erro;
// names[0] = false -> erro;
// let numbers = [10, 20, 30];
// numbers.push(401);
// numbers.push('Fílip'); // erro
// numbers[1] = 401;
// let mixed = ['ken', 4, 'chun-li', 8, 9];
// mixed.push('Sagat');
// mixed.push(1);
// mixed[0] = '';
// objects
// let ninja = {
//     name: 'Fílip',
//     age: 25,
// };
// ninja.age = 40;
// ninja.name = 'Ronin Yoshimitsu';
// ninja.name = 40;
// ninja.skills = ['Vue js', 'Angular'];
// ninja = {
//     name: 'yoshi',
//     age: 55,
//     skills: [],
// }
//explicit types
let character;
let age;
let isLoged;
age = 30;
isLoged = false;
//arrays
let ninjas = [];
// ninjas = [10, 23];
ninjas.push('sarah');
//union types
let mixed = [];
mixed.push('hello');
mixed.push(30);
// mixed.push(false);
mixed.push({});
let uid;
uid = '123';
uid = 123;
// uid = {};
//objects
let ninjaOne;
ninjaOne = {
    name: 'Fílip',
    age: 25,
};
// ninjaOne = 1;
// ninjaOne = [];
let ninjaTwo;
ninjaTwo = { name: 'Fílip', age: 25, isReal: true };
ninjaTwo.name = 'Ronin';
//Dynamic (any) Types
let idade;
idade = 25;
idade = true;
idade = 'Olá';
console.log(idade);
let mixedAny = [];
mixedAny.push(5);
mixedAny.push('Fílip');
mixedAny.push(false);
console.log(mixedAny);
let shinobi;
shinobi = { name: 'kakashi', age: 25 };
shinobi = { name: 25, age: 'KAKASHI' };
//Better Workflow & tsconfig
