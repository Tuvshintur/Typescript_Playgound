import fs from 'fs';
import { dateStringToDate } from './utils';
import { MatchResultEnum } from './MatchResult';

type MatchData = [Date, string, string, number, number, MatchResultEnum, string];

export class CsvFileReader {
    data: MatchData[] = [];
    constructor(public filename: string) {}

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
            .map(
                (row: string[]): MatchData => {
                    return [
                        dateStringToDate(row[0]),
                        row[1],
                        row[2],
                        parseInt(row[3]),
                        parseInt(row[4]),
                        //its named Type assertion
                        row[5] as MatchResultEnum,
                        row[6],
                    ];
                }
            );
    }
}
