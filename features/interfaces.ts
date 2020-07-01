const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary(): string {
        return `Name:${this.name}`;
    },
};

//without interface we need to write loooooong annotation
const printVehicle = (vehicle: { name: string; year: Date; broken: boolean }): void => {
    console.log(`Name : ${vehicle.name}`);
    console.log(`Year : ${vehicle.year}`);
    console.log(`Broken? : ${vehicle.broken}`);
};

printVehicle(oldCivic);
//lets create interface
//anytime we creating interface we are creating TYPE
interface Vehicle {
    name: string;
    year: Date;
    broken: boolean;
    summary(): string;
}

const printVehicleWithInterface = (vehicle: Vehicle): void => {
    console.log(`Name : ${vehicle.name}`);
    console.log(`Year : ${vehicle.year}`);
    console.log(`Broken? : ${vehicle.broken}`);
    console.log(vehicle.summary());
};

//in order pass oldCivic object
//we need to pass at least all property of interface should be included
//if not it will be show error
printVehicleWithInterface(oldCivic);

interface Reportable {
    summary(): string;
}

//lets see oldCivic and drink are same summary property
//both are can use printsummary()
const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My Drink has ${this.sugar} grams of sugar`;
    },
};

const printSummary = (item: Reportable): void => {
    console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);
