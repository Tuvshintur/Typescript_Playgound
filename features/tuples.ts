const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
};

//represent with tuple
//its array with multiple type of values
const pepsi = ['brown', true, 40];

pepsi[0] = 40;
pepsi[2] = 'brown';

//after this we lost order xD
//in order to do that we need anotation

//type alias
//its alternative to annotating in one line
type Drink = [string, boolean, number];
const pepsi1: Drink = ['brown', true, 40];

//it will throw error
// pepsi1[0] = 50;

//Usage -> CSV is great action
//but it doesnt used that much
//THE QUESTION IS: WHAT IS THOSE NUMBERS ??????
const carSpecs: [number, number] = [400, 3354];

//instead of tuple we can use object to more precise understanding
const carStats = {
    horsePower: 400,
    weigth: 3354,
};
