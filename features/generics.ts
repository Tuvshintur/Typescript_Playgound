class ArrayOfNumbers {
    constructor(public collection: number[]) {}

    get(index: number): number {
        return this.collection[index];
    }
}

class ArrayOfStrings {
    constructor(public collection: string[]) {}

    get(index: number): string {
        return this.collection[index];
    }
}

//lets these two classes into make it one class

class ArrayOfAnything<T> {
    constructor(public collection: T[]) {}

    get(index: number): T {
        return this.collection[index];
    }
}

new ArrayOfAnything<string>(['a', 'b', 'c']);
//also type inference works on generics
const arrayofanthing = new ArrayOfAnything(['a', 'b', 'c']);

// Example of generic with functions

function printStrings(arr: string[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

function printNumber(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

// those code duplicates !!!
// its time to use generics

function printAnything<T>(arr: T[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

printAnything<string>(['a', 'b', 'c']);
//also type inference works
printAnything(['a', 'b', 'c']);

//One last thing don't forget function return type
//it will saves us from errors

// Generic constraints

class Car {
    print() {
        console.log('I am a car!');
    }
}

class House {
    print() {
        console.log('I am a house');
    }
}

// function printHousesOrCars<T>(arr: T[]): void {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i].print();
//     }
// }

//Simply it will throw error because
//there are no guarantee to have print method
//this is time to use generic constraints
interface Printable {
    print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
    for (let i = 0; i < arr.length; i++) {
        arr[i].print();
    }
}

printHousesOrCars([new Car(), new Car()]);
printHousesOrCars([new House(), new House()]);
