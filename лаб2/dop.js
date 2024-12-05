let randomNumber = Math.floor(Math.random() * 100) + 1;
let guess;

do {
    guess = prompt("Угадайте число от 1 до 100:");
    if (guess < randomNumber) {
        alert("Больше!");
    } else if (guess > randomNumber) {
        alert("Меньше!");
    }
} while (parseInt(guess) !== randomNumber);

alert("Поздравляем! Вы угадали число!");