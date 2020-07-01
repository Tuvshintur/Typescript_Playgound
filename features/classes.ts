class Vehicle {
    drive(): void {
        console.log('Driving');
    }
    honk(): void {
        console.log('Beeep!');
    }
}

const vehicle = new Vehicle();
vehicle.drive();

vehicle.honk();

//Car is type of vehicle
class Car extends Vehicle {
    //override functions
    drive(): void {
        console.log('Car is driving');
    }
}

const car = new Car();
car.drive();
car.honk();

//if we does not set modifier for methods in classes
//Ts understands its public
class Vehicle1 {
    public drive(): void {
        console.log('Driving');
    }
    public honk(): void {
        console.log('Beeep!');
    }
}

class Car1 extends Vehicle1 {
    //override functions
    public drive(): void {
        console.log('Car is driving');
    }
}

const car1 = new Car();
car.drive();
car.honk();

class Vehicle2 {
    private drive(): void {
        console.log('Driving');
    }
    public honk(): void {
        console.log('Beeep!');
    }
    startDrivingProcess(): void {
        this.drive();
    }
}

const vehicle2 = new Vehicle2();
//shows error
// vehicle2.drive();
//private methods are only can be called from inside of its class
vehicle2.startDrivingProcess();
//for the protected we can use it from only child classes

//Lets talk about fields

class Vehicle3 {
    //its like java can initialize value
    color: string;

    //constructor method
    constructor(color: string) {
        this.color = color;
    }

    protected honk(): void {
        console.log('bbbeeeppp');
    }
}

//So, lets write alternative way to vehicle3
class Vehicle4 {
    //this public keyword works like VEHICLE3
    //also can be private protected
    constructor(public color: string) {}

    protected honk(): void {
        console.log('bbbeeeppp');
    }
}

const vehicle3 = new Vehicle3('orange');

console.log(vehicle3.color);

//If we extend from Vehicle4 it will call
//automatically parents constructor

class Car4 extends Vehicle4 {
    // constructor(public wheels: number) {
    //     super('red');
    // }
    // instead of super('red') because we dont want it
    constructor(public wheels: number, color: string) {
        super(color);
    }
}

//this is syntax of class
