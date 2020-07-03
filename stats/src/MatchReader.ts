import { CsvFileReader } from './CsvFileReader';
import { dateStringToDate } from './utils';
import { MatchResultEnum } from './MatchResult';

type MatchData = [Date, string, string, number, number, MatchResultEnum, string];
//Used generics on Csv reader in order to make it reusable
export class MatchReader extends CsvFileReader<MatchData> {
    mapRow = (row: string[]): MatchData => {
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
    };
}
