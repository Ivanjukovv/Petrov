// Задание 1
const arr1 = [1, 2, 3, 4, 5];
const arr2 = arr1.map(item => item + 10);
const arr3 = arr1.map(item => item * 3);

console.log('Увеличено на 10:', arr2); // [11, 12, 13, 14, 15]
console.log('Увеличено в 3 раза:', arr3); // [3, 6, 9, 12, 15]

// Задание 2
const birthYears = [1990, 1995, 2000, 2005];
const currentYear = new Date().getFullYear();
const ages = birthYears.map(year => currentYear - year);

console.log('Возраст:', ages);

// Задание 3
const users = [
    { name: 'Иван', age: 25, isAdmin: true },
    { name: 'Мария', age: 23, isAdmin: false },
    { name: 'Петр', age: 30, isAdmin: true },
    { name: 'Анна', age: 19, isAdmin: false }
];

const admins = users
    .filter(user => user.isAdmin)
    .map(admin => admin.name);

console.log('Администраторы:', admins);

// Задание 4
const grades = [4, 5, 3, 5, 4, 4];
const average = grades.reduce((acc, curr) => acc + curr) / grades.length;

console.log('Средний балл:', average);

// Задание 5
const strArray = ['JavaScript', 'Python', 'PHP', 'Java', 'C'];

function checkLength(arr) {
    return arr.map(item => item.length <= 3 ? 0 : 1);
}

const result = checkLength(strArray);
console.log('Результат:', result); // [1, 1, 0, 1, 0]

// Дополнительное задание
function runSimulation(iterations) {
    let sequences = {
        0: [], // красный
        1: [], // черный
        2: []  // белый
    };
    let currentSeq = {
        value: null,
        length: 0
    };

    for (let i = 0; i < iterations; i++) {
        const value = Math.floor(Math.random() * 3);

        if (value === currentSeq.value) {
            currentSeq.length++;
        } else {
            if (currentSeq.value !== null) {
                sequences[currentSeq.value].push(currentSeq.length);
            }
            currentSeq = { value: value, length: 1 };
        }
    }

    const minSequences = {
        0: Math.min(...sequences[0]),
        1: Math.min(...sequences[1]),
        2: Math.min(...sequences[2])
    };

    return minSequences;
}

console.log('Минимальные последовательности:', runSimulation(1000000));