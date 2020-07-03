import { Sorter } from './Sorter';

export class NumbersCollection extends Sorter {
    constructor(public data: number[]) {
        super();
    }

    compare(left: number, right: number): boolean {
        return this.data[left] > this.data[right];
    }

    swap(left: number, right: number): void {
        let temp = this.data[left];
        this.data[left] = this.data[right];
        this.data[right] = temp;
    }

    get length(): number {
        return this.data.length;
    }
}

// const collection = new NumbersCollection([1, 2, 3]);
// once we wrote get then we can get length like property not function
// collection.length;
