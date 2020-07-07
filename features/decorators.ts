@classDecorator
class Boat {
    @testDecorator
    color = 'red';

    @testDecorator
    get formattedColor(): string {
        return `This boats color is ${this.color}`;
    }

    @logError('Oops boat was sunk in ocean')
    pilot(@parameterDecorator speed: string, @parameterDecorator generateWake: boolean): void {
        if (speed === 'fast') {
            console.log('swish');
        } else {
            console.log('nothing');
        }
        // throw new Error();
    }
}

function classDecorator(constructor: typeof Boat) {
    console.log(constructor);
}

function parameterDecorator(target: any, key: string, index: number) {
    console.log(key, index);
}

function testDecorator(target: any, key: string) {
    console.log(target);
    console.log(key);
    //decorator is executed before instance is created
    //And we cannot use the prototype to look up a value on an instance or something you know something like
    console.log(target[key]);
}

function logError(errorMessage: string) {
    return function (target: any, key: string, desc: PropertyDescriptor): void {
        const method = desc.value; //this is function pilot
        desc.value = function () {
            try {
                method();
            } catch (e) {
                console.log(errorMessage);
            }
        };
    };
}

// new Boat().pilot();

//decorator is synctatic sugar
//it works like
// logError(Boat.prototype, 'pilot');

// So what exactly is a property descriptor.
// Well this is an object that has some configuration
// options around a property defined on an object.
