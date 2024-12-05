let otgadki = 0;

// Загадка 1
let otvet1 = prompt("Загадка 1: Зимой и летом одним цветом. Что это?");
if (otvet1.toLowerCase() === "елка") {
    alert("Верно :)");
    otgadki++;
} else {
    alert("Неверно :(");
}

// Загадка 2
let otvet2 = prompt("Загадка 2: Висит груша - нельзя скушать. Что это?");
if (otvet2.toLowerCase() === "лампочка") {
    alert("Верно :)");
    otgadki++;
} else {
    alert("Неверно :(");
}

alert(`Количество правильных ответов: ${otgadki}`);

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

do {
    var otvet = prompt("Еще по одной?");
} while (otvet !== "1");
alert("Пора домой!");

function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

let number = 5;
alert(`Факториал числа ${number} равен ${factorial(number)}`);

function isPalindrome(str) {
    str = str.toLowerCase().replace(/\s/g, '');
    return str === str.split('').reverse().join('');
}

let familia = "Иванов";
alert(`Фамилия ${familia} ${isPalindrome(familia) ? 'является' : 'не является'} палиндромом`);

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

let limit = 10;
let primes = [];
for (let i = 2; i <= limit; i++) {
    if (isPrime(i)) primes.push(i);
}
alert(`Простые числа до ${limit}: ${primes.join(', ')}`);