import faker from 'faker';
import { Mappable } from './Mappable';

export class Company implements Mappable {
    name: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    };

    color: string;

    constructor() {
        this.name = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude()),
        };
        this.color = 'red';
    }
    markerContent(): string {
        return `
        <h1>Company Name: ${this.name}</h1>
        <h3>CatchPhrase: ${this.catchPhrase}</h3></div>`;
    }
}
