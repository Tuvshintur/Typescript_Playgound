//concurrent compile
//tsc
//tsc -w //watch changes

//concurrent compile and execute
//look into package json
// npm:start:* call all starts with start

//Simplest sort
import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();

console.log(numbersCollection.data);

const characterCollection = new CharactersCollection('Xaaayb');
characterCollection.sort();

console.log(characterCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

linkedList.sort();

console.log(linkedList.print());
