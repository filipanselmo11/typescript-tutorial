import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payments.js';
import { HasFormatter } from './interfaces/hasFormatter.js';

const invOne = new Invoice('Fílip', 'Developer', 8000);
const invTwo = new Invoice('Mario', 'Developer SR', 12000);

console.log(invOne, invTwo);

let invoices: Invoice[] = [];

invoices.push(invOne);
invoices.push(invTwo);

invOne.client = 'Yoshimitsu';
invTwo.amount = 600;

invoices.forEach(inv => {
    inv.client = 'ASdsad';
    console.log(inv.client, inv.format(), inv.details);
});

console.log(invoices);

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('yoshi', 'web', 250);
docTwo = new Invoice('luig', 'work', 300);

let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

console.log(docs);