//от 1 до 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
//для застолий
do {
    var otvet = prompt("Еще по одной?");
} while (otvet !== "1");
alert("Пора домой!");
//вычисление факториала
function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

let number = 5;
alert(`Факториал числа ${number} равен ${factorial(number)}`);