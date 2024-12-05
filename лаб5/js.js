// 1
const calculator = {
    sum: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => b !== 0 ? a / b : "Ошибка: деление на ноль"
};

// 2
const checkCondition = function (condition) {
    return condition ? "Условие выполнено" : "Условие не выполнено";
};

// 3
const isSurnamePalindrome = surname => {
    surname = surname.toLowerCase().replace(/[^а-яa-z0-9]/g, '');
    return surname === surname.split('').reverse().join('');
};

// 4
const average = arr => arr.reduce((sum, num) => sum + num, 0) / arr.length;

// 5
const daysUntilNewYear = () => {
    const today = new Date();
    const nextYear = today.getFullYear() + 1;
    const newYear = new Date(nextYear, 0, 1);
    const diff = newYear - today;
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
};

// 6
const emptyFunction = () => { };

// 7
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = numbers.reduce((a, b) => a + b, 0);
const evens = numbers.filter(num => num % 2 === 0);
const doubled = numbers.map(num => num * 2);

// 8
const emails = ["@gmail.com", "@mail.ru", "user@hotmail.com"];
const filterEmails = (domain) => emails.filter(email => email.includes(domain));

// 9
const simulateColors = () => {
    const colors = ['красный', 'черный', 'белый'];
    let maxSequence = { color: '', length: 0 };
    let currentColor = '';
    let currentLength = 0;

    for (let i = 0; i < 1000000; i++) {
        const newColor = colors[Math.floor(Math.random() * 3)];
        if (newColor === currentColor) {
            currentLength++;
        } else {
            if (currentLength > maxSequence.length) {
                maxSequence = { color: currentColor, length: currentLength };
            }
            currentColor = newColor;
            currentLength = 1;
        }
    }
    return maxSequence;
};

// Примеры использования:
console.log(calculator.sum(5, 3));
console.log(checkCondition(true));
console.log(isSurnamePalindrome("жУКОВ"));
console.log(average([1, 2, 3, 4, 5]));
console.log(daysUntilNewYear());
console.log(sum);
console.log(evens);
console.log(doubled);
console.log(filterEmails("gmail"));
console.log(simulateColors()); 