//number is type annotation
let apples: number = 5;

//its called type inference which is TS guesses type of variable
let orange = 5;

//will show error
// apple = '5';

let speed: string = 'fast';
//will show error
//speed = 5;

let hasName: boolean = true;

//interesting
let nothingMuch: null = null;
let nothing: undefined = undefined;

//build in objects
let now: Date = new Date();

//will show error
// now="date";

//Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3, 4];
let truths: boolean[] = [true, true, false];

//classes
class Car {}
let car: Car = new Car();

//object literal
let point: { x: number; y: number } = {
    x: 10,
    y: 20,
};

//function
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
};

// When to use annotations
// 1) function that returns  the 'any' type
const json = '{"x": 10, "y": 20}';

//returns type of 'any'
const coordinates: { x: number; y: number } = JSON.parse(json);

//because JSON.parse can be return multiple types of value
//and TS has no idea what type of value comes
//avoid from type of any at all cost

console.log(coordinates); //{"x": 10, "y": 20}

//2) WHen we declare a variable on one  line
//and initialize it later

let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
    if (words[i] === 'green') foundWord = true;
}

//3) Variable whose type cannot be inferred correctly

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

//problem if number is above 0 is in the array
//we are going to assign it to variable if not false
//it has 2 types of value for one variable
//so we cannot initialize in the line

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) numberAboveZero = numbers[i];
}
