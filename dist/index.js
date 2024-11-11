"use strict";
// to watch a typescript file, use; 'tsc --watch <filename>' in the terminal
// to watch all typescript files, use; 'tsc --watch' in the terminal
// to setup a configutation file, use; 'tsc --init' int the terminal
// The command 'tsc <filename>' compiles a typescript file to javascript
// The command 'tsc' compiles all typescript file to javascript, and to run a typescript file,
// it first has to be compiled to a javascript file. 
// Primitive Types
let id = 5;
let company = 'fuck you';
let x = 'hello';
let isPublished = true;
// console.log('ID:',id);
// Arrays
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'Hello'];
//Tuple
let person = [1, 'fuck', true];
//Tuple Array
let employee;
employee = [
    [1, 'john'],
    [2, 'baby'],
    [3, 'doe'],
];
// Unions - if you want a variable to be able to hold more than one type
let pid;
pid = '22';
pid = 'you';
//Enum - Enum lets us define a set of named constants either numeric or string
var direction1;
(function (direction1) {
    direction1[direction1["Up"] = 0] = "Up";
    direction1[direction1["Down"] = 1] = "Down";
    direction1[direction1["Left"] = 2] = "Left";
    direction1[direction1["Right"] = 3] = "Right";
})(direction1 || (direction1 = {}));
var direction2;
(function (direction2) {
    direction2["Up"] = "Up";
    direction2["Down"] = "Down";
    direction2["Left"] = "Left";
    direction2["Right"] = "Right";
})(direction2 || (direction2 = {}));
const user = {
    id: 1,
    name: 'john'
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid  // This is the first way to perform type assertion
let customerId = cid; // This is the second way to do this
// Functions
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
function calculateArea(shape) {
    console.log(`Calculating the area of shape ${shape.name}`);
    console.log(`The shape area is: ${shape.area()}`);
}
const circle = {
    name: 'circle',
    color: 'red',
    area() {
        return Math.PI * 2 * 2;
    }
};
const user1 = {
    id: 1,
    name: 'john'
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
const p1 = 1;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const mike = new Person(1, 'Timaya');
const purry = new Person(2, 'Purr');
// Extending Classes - Subclasses
class Employee extends Person {
    constructor(id, name, postion) {
        super(id, name); // This is basically initailizing the properties from Person class
        this.position = postion;
    }
}
const emp = new Employee(3, 'Shawn', 'Developer');
// console.log(emp.name);
// console.log(emp.register());
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['brad', 'John', 'Jill']);
strArray.push();
