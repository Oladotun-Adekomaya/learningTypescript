
// to watch a typescript file, use; 'tsc --watch <filename>' in the terminal

// to watch all typescript files, use; 'tsc --watch' in the terminal

// to setup a configutation file, use; 'tsc --init' int the terminal

// The command 'tsc <filename>' compiles a typescript file to javascript

// The command 'tsc' compiles all typescript file to javascript, and to run a typescript file,
// it first has to be compiled to a javascript file. 



// Primitive Types
let id: number = 5;
let company: string = 'fuck you';
let x: any = 'hello'
let isPublished: boolean = true 


// console.log('ID:',id);

// Arrays
let ids: number[] = [1,2,3,4,5]
let arr: any[] = [ 1, true, 'Hello']

//Tuple
let person: [number, string, boolean] = [1,'fuck', true]

//Tuple Array
let employee: [number, string][];

employee =[
    [1, 'john'],
    [2, 'baby'],
    [3, 'doe'],
]

// Unions - if you want a variable to be able to hold more than one type
let pid: string | number

pid = '22'
pid = 'you'

//Enum - Enum lets us define a set of named constants either numeric or string
enum direction1{
    Up,
    Down,
    Left,
    Right,
}

enum direction2{
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right',
}


// console.log(direction1);
// console.log(direction2);


// Objects
type User = {
    id: number
    name: string
}


const user: User = {
    id: 1,
    name: 'john'
}


// Type Assertion
let cid: any = 1
// let customerId = <number>cid  // This is the first way to perform type assertion

let customerId = cid as number // This is the second way to do this

// Functions

function addNum(x: number, y: number): number {
    return x + y
}

function log(message: string | number): void{ // this is to not specify any return value
    console.log(message);    
}

// log(1)

// Interfaces - 
interface Shape {
    name: string,
    color: string,
    area():number
}

function calculateArea(shape:Shape){
    console.log(`Calculating the area of shape ${shape.name}`);
    console.log(`The shape area is: ${shape.area()}`);
}

const circle = {
    name: 'circle',
    color: 'red',
    area(){
        return Math.PI * 2 * 2;
    }
}

// calculateArea(circle)


interface UserInterface{
    id: number // adding a readonly before a property(e.g 'readonly id: number') - This makes it so that the value of a property can't be reassigned. It can only be read
    name: string
    age?: number // The '?' is to make the age property optional
}


const user1: UserInterface = {
    id: 1,
    name: 'john'
}


interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

// There are some differences btw types and interfaces for instance a type can be used with primitives and unions
// Interfaces are mostly used with objects

type Point = number | string

const p1: Point = 1

// Classes
interface PersonInterface{
    id: number 
    name: string
    register(): string
}



class Person implements PersonInterface{
    id: number // adding the 'private' e.g 'private id: number' keyword before a property in a class makes it only accessible in the class. it can't be modified or accessed outside the class
    name: string       // adding the 'protected' keyword makes it only accessible by the class and any class that is extended from the class(i.e it's sub-classes)

    constructor(id: number, name: string){
        this.id = id
        this.name = name      
    }
    
    register(){
        return `${this.name} is now registered`
    }
}

const mike = new Person(1, 'Timaya')
const purry = new Person(2, 'Purr')

// Extending Classes - Subclasses

class Employee extends Person {
  position: string
  
  constructor(id: number, name: string, postion: string){
    super(id,name) // This is basically initailizing the properties from Person class
    this.position = postion
  }
}

const emp = new Employee(3, 'Shawn', 'Developer')

// console.log(emp.name);
// console.log(emp.register());


// Generics
function getArray<T>(items: T[]): T[]{
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>([ 'brad', 'John', 'Jill'])

strArray.push()