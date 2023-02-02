// let greetF: Function;

// exemplo 1
let gree: (a: string, b: string) => void;
gree = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`);
}
// exemplo 2

let calc: (a: number, b: number, c: string) => number; // Assinatura da funcao

calc = (numOne: number, numTwo: number, action: string) => {
    if (action === 'add') {
        return numOne + numTwo;
    } else {
        return numOne - numTwo;
    }
}

// exemplo 3

let logDet: (obj: {name: string, age: number}) => void; // Assinatura da funcao

type person = {name: string, age: number}; // type aliasses

logDet = (ninja: person) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
}