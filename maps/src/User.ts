import faker from 'faker';
import { Mappable } from './Mappable';

//never use default statement in TS world
export class User implements Mappable {
    name: string;
    location: {
        lat: number;
        lng: number;
    };

    color: string;

    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude()),
        };
        this.color = 'red';
    }

    markerContent(): string {
        return `Company Name: ${this.name}`;
    }
}
