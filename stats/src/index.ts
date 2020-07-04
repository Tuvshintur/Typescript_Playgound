import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { ConsoleReport } from './report/ConsoleReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';
import { HtmlReport } from './report/HtmlReport';

// const reader = new CsvFileReader('football.csv');
// reader.read();

//Create an object that satifsies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv');

//Create an instance of matchReader and pass in something satisfying
// the 'DataReader' interface

const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(new WinsAnalysis('Man United'), new ConsoleReport());
summary.buildAndPrintReport(matchReader.matches);

const summary1 = new Summary(new WinsAnalysis('Man United'), new HtmlReport());
summary1.buildAndPrintReport(matchReader.matches);

//static methods

const matchReader1 = MatchReader.fromCsv('football.csv');
matchReader1.load();
const summary2 = Summary.winAnalysisWithHtmlReport('Man United');
summary2.buildAndPrintReport(matchReader.matches);
