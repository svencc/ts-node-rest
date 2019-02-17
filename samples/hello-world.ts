import {TEST} from "./hello-import.js";

console.log('Hello World'+TEST);


if (true) {
    let i:number;

    for (i=0;i<3;i++) {
        console.log(i);
    }
}

const firstName = 'Nico',
    lastName = 'Meltz';

const Person = {
    firstName,
    lastName
};

const Person2 = {
    firstName: firstName,
    lastName: lastName
};

function test(firstName: string, lastName: string, address = '') {
    return `${firstName} ${lastName} ${address}`;
}
