import { HasFormatter } from "../interfaces/hasFormatter";

export class Payment implements HasFormatter {
    // readonly recipient: string;
    // private details: string;
    // public amount: number;
    // public amount: number;

    // constructor(c: string, d: string, a: number) {
    //     this.client = c;
    //     this.details = d;
    //     this.amount = a;
    // }
    // constructor(
    //     readonly client: string,
    //     private details: string,
    //     public amount: number) { }

    format() {
        return `${this.client} owes R${this.amount} for ${this.details}`;
    }
}
