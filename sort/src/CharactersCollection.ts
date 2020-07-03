import { Sorter } from './Sorter';

export class CharactersCollection extends Sorter {
    constructor(public data: string) {
        super();
    }

    compare(left: number, right: number): boolean {
        return this.data[left].toLowerCase() > this.data[right].toLowerCase();
    }

    swap(left: number, right: number): void {
        const characters = this.data.split('');

        let temp = characters[left];
        characters[left] = characters[right];
        characters[right] = temp;

        this.data = characters.join('');
    }

    get length(): number {
        return this.data.length;
    }
}
