"use strict";
exports.__esModule = true;
var hello_import_js_1 = require("./hello-import.js");
console.log('Hello World' + hello_import_js_1.TEST);
if (true) {
    var i = void 0;
    for (i = 0; i < 3; i++) {
        console.log(i);
    }
}
var firstName = 'Nico', lastName = 'Meltz';
var Person = {
    firstName: firstName,
    lastName: lastName
};
var Person2 = {
    firstName: firstName,
    lastName: lastName
};
function test(firstName, lastName, address) {
    if (address === void 0) { address = ''; }
    return firstName + " " + lastName + " " + address;
}
//# sourceMappingURL=hello-world.js.map