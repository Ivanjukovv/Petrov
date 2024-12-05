// 1
function showMessage() {
    let message = "Привет, я JavaScript!";
    alert(message);
}

// 2
function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^а-яa-z0-9]/g, '');
    return str === str.split('').reverse().join('');
}

// 3
function processArray(arr) {
    return arr.map(num => num < 0 ? num * num : num);
}

// 4
class UserName {
    constructor(name) {
        this.name = name;
    }

    display() {
        alert(this.name);
    }
}

// 5
class Clock {
    constructor({ template }) {
        this.template = template;
    }

    render() {
        let date = new Date();
        let hours = date.getHours();
        let mins = date.getMinutes();
        let secs = date.getSeconds();

        hours = hours < 10 ? '0' + hours : hours;
        mins = mins < 10 ? '0' + mins : mins;
        secs = secs < 10 ? '0' + secs : secs;

        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }

    stop() {
        clearInterval(this.timer);
    }
}

// 6
class NameReverser {
    constructor(name) {
        this.name = name;
    }

    reverse() {
        return this.name.split('').reverse().join('');
    }
}

// ДОП ЗАДАНИЕ
class ColorSimulator {
    constructor() {
        this.colors = ['красный', 'черный', 'белый'];
        this.sequences = {
            'красный': 0,
            'черный': 0,
            'белый': 0
        };
    }

    simulate(iterations = 1000000) {
        let currentColor = '';
        let currentSequence = 0;

        for (let i = 0; i < iterations; i++) {
            let newColor = this.colors[Math.floor(Math.random() * 3)];

            if (newColor === currentColor) {
                currentSequence++;
            } else {
                if (currentSequence > this.sequences[currentColor]) {
                    this.sequences[currentColor] = currentSequence;
                }
                currentColor = newColor;
                currentSequence = 1;
            }
        }

        return this.sequences;
    }
}

// Примеры использования:

// Проверка палиндрома
console.log(isPalindrome("А роза упала на лапу Азора"));

// Обработка массива
console.log(processArray([1, -2, 3, -4, 5, -6]));

// Работа с именем пользователя
let user = new UserName("Иван");
user.display();

// Переворачивание имени
let reverser = new NameReverser("Александр");
console.log(reverser.reverse());

// Симуляция цветов
let simulator = new ColorSimulator();
console.log(simulator.simulate());