// 1
let user = {
    name: "Джон",
    age: 30,
    sayHi() {
        alert("Привет!");
    }
};

// 2
let customer = {
    name: "Иван Жуков",
    age: 18,
    email: "masevaniacom111@gmail.com",
    address: "ул. Гагарина, 20",
    phone: "+7 916 084 45 67"
};


alert(`Имя: ${customer.name}\nВозраст: ${customer.age}\nТелефон: ${customer.phone}`);

// 3
let users = { user1: { name: "Анна" }, user2: { name: "Петр" } };
let orders = { order1: { dish: "Пицца" }, order2: { dish: "Суши" } };
let restaurants = { rest1: { name: "Итальянский ресторан" }, rest2: { name: "Японский ресторан" } };

// 4
function GroupMember(name) {
    this.name = name;
}

// 5
function Student(name) {
    this.name = name;
    this.introduce = function () {
        alert(`Меня зовут ${this.name}`);
    };
}

// Дополнительное задание - Калькулятор
let calculator = {
    sum(a, b) { return a + b; },
    subtract(a, b) { return a - b; },
    multiply(a, b) { return a * b; },
    divide(a, b) { return b !== 0 ? a / b : "Ошибка: деление на ноль"; }
};

// Пример использования
let student = new Student("Евгений");
student.introduce();

console.log("Сумма: " + calculator.sum(5, 3));