
//! Задание 1 – Создать объект counter всеми возможными способами;
const counter = {
    name: 'Alice',
    age: 30,
};
console.log(counter);



function person(name, age) {
    this.name = name,
    this.age = age;
}
const counter1 = new person('Bob', 25);
console.log(counter1);

class person1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const counter2 = new person1('Charlie', 40);
console.log(counter2);

const personPrototype = {};
const counter3 = Object.create(personPrototype);
counter3.name = 'David';
counter3.age = 36;
console.log(counter3);

const personPrototype1 = {};
const counter4 = Object.assign({},
    personPrototype1, { name: 'Eva', age: 28 });
    console.log(counter4);

const counter5 = new Map();
counter5.set('name', 'George');
counter5.set('age', 45);
console.log(counter5);

const counter6 = new Set();
counter6.add('apple');
counter6.add('banana');
console.log(counter6);

const counter7 = (function(name, age) {
    return {
        name: name,
        age: age,
    };
})('Frank', 22);
console.log(counter7);


//*Задание 2 – Скопировать объект counter всеми возможными способами;
const counterCopy1 = Object.assign({}, counter);
console.log(counterCopy1);

const counterCopy2 = { ...counter };
console.log(counterCopy2);

const counterCopy3 = JSON.parse(JSON.stringify(counter));
console.log(counterCopy3);

const counterCopy4 = _.cloneDeep(counter);
console.log(counterCopy4);

const counterCopy5 = structuredClone(counter);
console.log(counterCopy5);

//? Задание 3 – Создать функцию makeCounter всеми описанными и возможными способами;
// function makeCounter() {
//     let count = 0;
//     return function() {
//         count++;
//         return count;
//     };
// }
// const countr = makeCounter();
// console.log(countr()); 
// console.log(countr()); 
// console.log(countr()); 

// function makeCounter() {
//     let count = 0;
//     return {
//         increment: function()  {
//             count++;
//             return count;
//         },
//         reset: function() {
//             count = 0;
//         }
//     };
// }
// const countr = makeCounter();
// console.log(countr.increment()); 
// console.log(countr.increment()); 
// console.log(countr.increment()); 

// class Counter {
//     constructor() {
//         this.count = 0;
//     }
//     increment() {
//         this.count++;
//         return this.count;
//     }
//     reset() {
//         this.count = 0;
//     }
// }
// const counte = new Counter();
// console.log(counte.increment()); 
// console.log(counte.increment()); 
// counte.reset();
// console.log(counte.increment()); 

// const makeCounter = () => {
//     let count = 0;
//     return () => ++count;
// }
// const countr = makeCounter();
// console.log(countr()); 
// console.log(countr()); 

const makeCounter = () => {
    let count = 0;
    return {
        next: () => ++count,
        reset: () => count = 0
    };
};

const counterA = makeCounter();
const counterB = makeCounter();

console.log(counterA.next()); 
console.log(counterA.next()); 
counterA.reset();
console.log(counterA.next()); 
console.log(counterB.next()); 

//!Развернуть строку в обратном направлении при помощи методов массивов:
function reverseStr(str) {
    return str.split('').reverse().join('');
    }
const originalStr = "Привет, мир!";
const reversedStr = reverseStr(originalStr);
console.log(reversedStr);