//type inference automatically determine string[]
const carMakers = ['ford', 'toyota', 'chevy'];
//also we can add type annotations
const carMakers1 = ['ford', 'toyota', 'chevy'];

//if we have empty array in this case TS cannot determine type of array
const carMakers2: string[] = [];

//TS can determine its Date[]
const dates = [new Date(), new Date()];

//TS can determine its string[][] which means 2 dimensional array
const carsByMake = [['f150'], ['corolla'], ['camaro']];
//if array requires 2dimensional and initially its empty
const carsByMake1: string[][] = [];

//Help with inference when extracting values
//TS determined car is string
const car = carMakers[0];
//also TS can determine it returns type of string
const myCar = carMakers.pop();

//Prevent incompatible values
//it will throw error
// carMakers.push(124);

// Help with 'map'

carMakers.map((car: string): string => {
    //we can use built-in function from car variable
    return car;
});

// Flexible types
//lets say it can store 2 types of values
//TS also can determine its Date|string
const importantDates = [new Date(), '2030-10-10'];
//if you want to describe types manually just add annotations
const importantDates1: (Date | String)[] = [new Date()];
importantDates1.push('2030-10-10');
importantDates1.push(new Date());
//will throw error
// importantDates1.push(false);
