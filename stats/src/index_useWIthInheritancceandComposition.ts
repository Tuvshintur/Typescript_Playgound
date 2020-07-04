import { CsvFileReader } from './CsvFileReader';
import { MatchResultEnum } from './MatchResult';
import { MatchReader } from './MatchReader';

// const reader = new CsvFileReader('football.csv');
// reader.read();

//Create an object that satifsies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv');

//Create an instance of matchReader and pass in something satisfying
// the 'DataReader' interface

const matchReader = new MatchReader(csvFileReader);
matchReader.load();
const matches = matchReader.matches;

//lets count how many wins manutd has
let manUnitedWins = 0;

for (let match of matches) {
    if (match[1] === 'Man United' && match[5] === 'H') {
        manUnitedWins++;
    } else if (match[2] === 'Man United' && match[5] === 'A') {
        manUnitedWins++;
    }
}

console.log(`Man United won ${manUnitedWins} games`);

//we will parse matches into two dimensional arrays of array

// console.log(matches);

//Above solution is a bare minimum solution
//lets improve the solutions

//at least we can declare 'H' and 'A'

const homeWin = 'H';
const awayWin = 'A';

//in the future we are going to consider 'D' for draw
//so we arent fully implement the solution

const draw = 'D';
//after this draw is faded because doesnt used
//other collegues might be delete it

manUnitedWins = 0;

for (let match of matches) {
    if (match[1] === 'Man United' && match[5] === homeWin) {
        manUnitedWins++;
    } else if (match[2] === 'Man United' && match[5] === awayWin) {
        manUnitedWins++;
    }
}

console.log(`Man United won ${manUnitedWins} games`);

//its not good solution neither
//so lets consider Object of Match result

const MatchResult = {
    HomeWin: 'H',
    AwayWin: 'A',
    Draw: 'D',
};

//but i feel its not the best in TS
//enums - enumeration
//moved to new file MatchResult
//one of the feature is we can use it as return type
const printMatchResult = (match: string[]): MatchResultEnum => {
    if (match[5] === 'H') return MatchResultEnum.HomeWin;
    return MatchResultEnum.AwayWin;
};

manUnitedWins = 0;

for (let match of matches) {
    if (match[1] === 'Man United' && match[5] === MatchResultEnum.HomeWin) {
        manUnitedWins++;
    } else if (match[2] === 'Man United' && match[5] === MatchResultEnum.AwayWin) {
        manUnitedWins++;
    }
}

console.log(`Man United won ${manUnitedWins} games`);
