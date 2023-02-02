import { IsPerson } from './interfaces/IsPerson';
import { Invoice } from './classes/Invoice';
import { HasFormatter } from './interfaces/hasFormatter';
import { Payment } from './classes/Payments';

const me: IsPerson = {
    name: 'Fílip',
    age: 25,
    speak(text: string):void {
        console.log(text);
    },
    spend(amount: number): number {
        console.log(amount);
        return amount;
    }
};

console.log(me);

const greetPerson = (person: IsPerson) => {
    console.log('Hello ', person.name);
}

greetPerson(me);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    let doc: HasFormatter;
    if(type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    } else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
})

// let someone: IsPerson;