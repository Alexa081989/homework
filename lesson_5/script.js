//! Алгоритмы сортировок
/* 1.Сортировка пузырьком (Bubble Sort) - оследовательно сравнивает соседние элементы и меняет их местами, если они стоят в неправильном порядке
2.Сортировка выбором (Selection Sort) - Этот алгоритм сортирует массив, находя минимальный элемент и помещая его в начало. Затем процесс повторяется для оставшейся части массива.
3.Сортировка вставками (Insertion Sort) - этот алгоритм создает отсортированную часть массива и вставляет каждый элемент из неотсортированной части в нужное место
4. Быстрая сортировка - это рекурсивный алгоритм. Он выбирает опорный элемент и разделяет массив на две части — элементы меньше опорного и элементы больше. Затем вызывает себя для обеих частей.
5. Сортировка с помощью слияния (Merge Sort) - Это также рекурсивный алгоритм, который делит массив на две половины, рекурсивно сортирует обе половины и потом объединяет их в отсортированный массив.
6. Сортировка с использованием встроенного метода sort() - По умолчанию он сортирует элементы как строки, поэтому, если необходимо сортировать числа, нужно передать функцию сравнения.
*/

//?  Создать объект Person несколькими способами
const Person = {
    name: 'Иван',
    age: 30,
    greet: function() {
        console.log(`Привет, меня зовут ${this.name}.`);
    }
};

function PersonConstructor(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log(`Привет, меня зовут ${this.name}.`);
    };
}
const person1 = new PersonConstructor('Дмитрий', 25);

class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Привет, меня зовут ${this.name}.`);
    }
}
const person2 = new PersonClass('Светлана', 28);

//* Создание объекта AnotherPerson, который будет иметь доступ к методам Person

function AnotherPerson(name, age) {
    PersonConstructor.call(this, name, age); 
}
AnotherPerson.prototype = Object.create(PersonConstructor.prototype);
AnotherPerson.prototype.constructor = AnotherPerson;

// ! Добавляем метод logInfo

AnotherPerson.prototype.logInfo = function() {
    console.log(`Имя: ${this.name}, Возраст: ${this.age}`);
};

const anotherPerson = new AnotherPerson('Алексей', 32);
anotherPerson.greet(); 
anotherPerson.logInfo(); 

//* Создать класс SuperPerson c get и set для поля name и конструктором

class SuperPerson {
    constructor(name, age) {
        this._name = name; 
        this.age = age;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }
    logInfo() {
        console.log(`Имя: ${this.name}, Возраст: ${this.age}`);
    }
}

//? Объявим класс-наследник от SuperPerson

class AdvancedPerson extends SuperPerson {
    constructor(name, age, hobby) {
        super(name, age); 
        this.hobby = hobby; 
    }
    logHobby() {
        console.log(`Хобби: ${this.hobby}`);
    }
}

const advancedPerson = new AdvancedPerson('Алексей', 30, 'Фотография');
advancedPerson.logInfo();
advancedPerson.logHobby(); 
advancedPerson.name = 'Максим';
console.log(advancedPerson.name); 
advancedPerson.logInfo();