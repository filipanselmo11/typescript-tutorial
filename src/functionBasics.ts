// let greet = () => {
//     console.log('OLá');
// }

// let greet: Function;

greet = () => {
    console.log('Olá de novo');
}

const add = (a: number, b: number, c: number|string = 10): void => {
    console.log(a + b);
    console.log(c);
}

add(70, 2);

const minus = (a: number, b: number): number => {
    return a + b;
}

let result = minus(10,7);