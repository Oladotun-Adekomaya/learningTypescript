"use strict";
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
// console.log(direction1);
// console.log(direction2);
// to watch a typescript file, use; 'tsc --watch <filename>' in the terminal
// to watch all typescript files, use; 'tsc --watch' in the terminal
// to setup a configutation file, use; 'tsc --init' int the terminal
// The command 'tsc <filename>' compiles a typescript file to javascript
// The command 'tsc' compiles all typescript file to javascript, and to run a typescript file,
// it first has to be compiled to a javascript file. 
