// Задание 1
const bankClient = {
    name: "Иван",
    [Symbol("accountNumber")]: 123456,
    balance: 300
};

const clinicWorker = {
    name: "Мария",
    [Symbol("position")]: "Врач",
    salary: 50000
};

const citizen = {
    name: "Александр",
    [Symbol("passportNumber")]: "1234 567890",
    city: "Москва"
};

console.log(bankClient, clinicWorker, citizen);

// Задание 2
const number = +prompt('Загадайте цифру до 9', '');

switch (number) {
    case 1:
        alert('Вы ввели число 1');
        break;
    case 2:
        alert('Вы ввели число 2');
        break;
    case 8:
    case 9:
        alert('Вы ввели число 8, а может и 9');
        break;
    default:
        alert('Вы ввели другое число');
}

// Задание 3
const min = +prompt('Введите число от 0 до 59', '');

switch (true) {
    case (min < 15):
        alert('Первая четверть');
        break;
    case (min < 30):
        alert('Вторая четверть');
        break;
    case (min < 45):
        alert('Третья четверть');
        break;
    case (min < 60):
        alert('Четвертая четверть');
        break;
    default:
        alert('Некорректное значение');
}

// Задание 4
const str = prompt('Введите строку с цифрами', '');

if ('123'.includes(str[0])) {
    alert('Первая цифра 1, 2 или 3');
} else {
    alert('нет');
}

const phoneNumber = '12345677890';
alert(str.includes(phoneNumber) ? 'Номер телефона найден' : 'Номер телефона не найден');