import 'reflect-metadata';

// Reflect comes from reflect-metadata global object

const plane = {
    color: 'red',
};

Reflect.defineMetadata('note', 'hi there', plane);
Reflect.defineMetadata('height', 100, plane);

console.log(plane);

const note = Reflect.getMetadata('note', plane);
console.log(note);

const height = Reflect.getMetadata('height', plane);
console.log(height);

//we can attach metadata to property

Reflect.defineMetadata('color', 'hi color!', plane, 'color');

console.log(plane);

const color = Reflect.getMetadata('color', plane, 'color');

console.log(color);
