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