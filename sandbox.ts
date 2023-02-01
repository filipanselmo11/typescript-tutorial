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

let character: string;
let age: number;
let isLoged: boolean;

age = 30;
isLoged = false;

//arrays

let ninjas: string[] = [];
// ninjas = [10, 23];
ninjas.push('sarah');

//union types

let mixed: (string | number | object)[] = [];
mixed.push('hello');
mixed.push(30);
// mixed.push(false);
mixed.push({});

let uid: string | number;
uid = '123';
uid = 123;
uid = {};
//objects

let ninjaOne: object;
ninjaOne = {
    name: 'Fílip',
    age: 25,
};

// ninjaOne = 1;
// ninjaOne = [];

let ninjaTwo: {
    name: string,
    age: number;
    isReal: boolean,
};

ninjaTwo = { name: 'Fílip', age: 25, isReal: true};