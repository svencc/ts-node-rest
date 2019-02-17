import { TEST } from "./hello-import.js";

// const _ = require('lodash');
import * as _ from 'lodash';

//console.log('Hello World'+TEST);
console.log('Hello World'+TEST);


_.cloneDeep({});


interface HasName {
    name:string
}

interface HasLastName {
    lastName: string
}

type Player = (HasName & HasLastName) | null
let peter = {name: 'Peter', lastName:'Ender'};


function testFunction(param: string): void {

}
// peter = null;
// peter = {name: 'peter'};
// peter = null;

