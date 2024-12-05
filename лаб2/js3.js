//проверка фамилии 
function isPalindrome(str) {
    str = str.toLowerCase().replace(/\s/g, '');
    return str === str.split('').reverse().join('');
}

let familia = "Иванов";
alert(`Фамилия ${familia} ${isPalindrome(familia) ? 'является' : 'не является'} палиндромом`);
//вывод чисел
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