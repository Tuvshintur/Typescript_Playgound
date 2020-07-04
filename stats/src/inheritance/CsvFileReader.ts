import fs from 'fs';

export abstract class CsvFileReader<T> {
    data: T[] = [];
    constructor(public filename: string) {}

    abstract mapRow(row: string[]): T;

    read(): void {
        this.data = fs
            .readFileSync(this.filename, {
                encoding: 'utf-8',
            })
            .split('\n')
            .map((row: string): string[] => {
                return row.split(',');
            })
            //change any to tuple to be precise
            .map(this.mapRow);
    }
}
