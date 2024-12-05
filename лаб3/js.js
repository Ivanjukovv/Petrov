// Функция для генерации случайного числа в заданном диапазоне
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Задание 1: 
let arr1 = [];
for (let i = 0; i < 15; i++) {
    arr1.push(getRandomNumber(-10, 30));
}
let sumPositive = 0;
let countPositive = 0;
for (let num of arr1) {
    if (num > 0) {
        sumPositive += num;
        countPositive++;
    }
}
console.log('Задание 1:');
console.log('Массив:', arr1);
console.log('Среднее арифметическое положительных:', sumPositive / countPositive);

// Задание 2: 
let arr2 = [];
for (let i = 0; i < 15; i++) {
    arr2.push(getRandomNumber(-10, 30));
}
console.log('\nЗадание 2:');
console.log('Исходный массив:', arr2);
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] < 0) {
        arr2[i] = arr2[i] * arr2[i];
    }
}
console.log('Массив после замены:', arr2);

// Задание 3: 
let arr3 = [];
for (let i = 0; i < 15; i++) {
    arr3.push(getRandomNumber(-10, 30));
}
let sumPos = 0, countPos = 0;
let sumNeg = 0, countNeg = 0;
let zeroCount = 0;

for (let num of arr3) {
    if (num > 0) {
        sumPos += num;
        countPos++;
    } else if (num < 0) {
        sumNeg += num;
        countNeg++;
    } else {
        zeroCount++;
    }
}

console.log('\nЗадание 3:');
console.log('Массив:', arr3);
console.log('Среднее положительных:', sumPos / countPos);
console.log('Среднее отрицательных:', sumNeg / countNeg);
console.log('Количество нулей:', zeroCount);

// Задание 4:
let colors = [];
let redCount = 0;
let maxRed = 0;
let currentRed = 0;


for (let i = 0; i < 1000000; i++) {
    let color = Math.floor(Math.random() * 3);
    colors.push(color);
    if (color === 0) {
        redCount++;
        currentRed++;
        maxRed = Math.max(maxRed, currentRed);
    } else {
        currentRed = 0;
    }
}

console.log('\nЗадание 4:');
console.log('Максимальное число красных подряд:', maxRed);
console.log('Общее количество красных:', redCount);

// Дополнительное задание: 
let currentSequence = 1;
let currentColor = colors[0];

for (let i = 1; i < colors.length; i++) {
    if (colors[i] === colors[i - 1]) {
        currentSequence++;
        maxSequence = Math.max(maxSequence, currentSequence);
    } else {
        currentSequence = 1;
    }
}

console.log('\nДополнительное задание:');
console.log('Самая длинная последовательность одинаковых цветов:', maxSequence);