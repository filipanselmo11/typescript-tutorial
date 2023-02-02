type StringOrNum = string | number;
type ObjectWithName = { name: string, uid: StringOrNum };

const logDetails = (uid: StringOrNum, item: string) => {
    console.log(`${item} has uid of ${uid}`);
}

const greet = (user: ObjectWithName) => {
    console.log(`${user.name} says hello`);
}


