//function annotations
const add = (a: number, b: number): number => {
    return a + b;
};

//function inference only works on output of function
//but we wont use it

const subtract = (a: number, b: number) => {
    //it has risk of forgetting return statement
    //but we wanted to
    a - b;
};

//named function
function divide(a: number, b: number): number {
    return a / b;
}

//anonymous function
const multiply = function (a: number, b: number): number {
    return a * b;
};

//Void or never

const logger = (message: string): void => {
    console.log(message);
    //following two can be possible for void
    return undefined;
    return null;
};

//return type of never means that we never going to
//actually reach the end of this function so we are
//never going to  execute the function completely
const throwError = (message: string): never => {
    throw new Error(message);
};

const throwError1 = (message: string): string => {
    if (!message) {
        throw new Error(message);
    }
    return message;
};

const throwError2 = (message: string): void => {
    if (!message) {
        throw new Error(message);
    }
};

//Desctructuring with annotations
const todaysWeather = {
    date: new Date(),
    weather: 'sunny',
};

const logWeather = (forecast: { date: Date; weather: string }): void => {
    console.log(forecast.date);
    console.log(forecast.weather);
};

logWeather(todaysWeather);

//let's say we can optimize above code
//ES2015

const logWeatherES2015 = ({ date, weather }) => {
    console.log(date);
    console.log(weather);
};

//now in TS
const logWeatherTS = ({ date, weather }: { date: Date; weather: string }): void => {
    console.log(date);
    console.log(weather);
};
