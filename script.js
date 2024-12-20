// 1.Одна из ключевых особенностей массивов в JavaScript заключается в том, что они могут хранить элементы разных типов. Это приводит к тому, что массивы могут смешивать в себе разные структуры данных.
// 2.На самом деле массивы являются объектами, и в них можно добавлять произвольные свойства. Это может привести к путанице в понимании того, что такое массив.
// 3. Массивы имеют множество встроенных методов (push, pop, map и т.д.), что позволяет использовать их как списки, стеки, очереди и т.д., но также усложняет их использование.
// 4. Из-за динамической природы массивов их производительность может варьироваться, особенно при больших объемах данных.
// Массивы совмещают в себе списки, стек, очередь.

//! Используя bind
// const obj = { item: 'some value' };
// function logger() {
//     console.log(`I output only external context: ${this.item}`);
// }
// const boundLogger = logger.bind(obj);
// boundLogger();

//*Используя call
// const obj = { item: 'some value' };
// function logger() {
//         console.log(`I output only external context: ${this.item}`);
//     }
//     logger.call(obj);

//?  Используя apply
const obj = { item: 'some value' };
function logger() {
        console.log(`I output only external context: ${this.item}`);
    }
    logger.apply(obj);