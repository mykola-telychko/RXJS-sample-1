import { interval } from 'rxjs';
import { sample } from 'rxjs/operators';

// https://www.learnrxjs.io/learn-rxjs/operators/filtering/sample

// emit value every 1s
const srcInterval$ = interval(1000);
// sample last emitted value from source every N sec
// handle last emitted value
const fn = (num) => interval(num);

const example = srcInterval$.pipe(sample(fn(3000)));
const subscribe = example.subscribe((val) => console.log(val));
//output: 2..4..6..8..
