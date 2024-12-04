let secretNumber = 100; // Число, яке потрібно відгадати
let attempts = 0; // Лічильник спроб
let maxAttempts = 3; // Максимальна кількість спроб

function f1() {
    let num = parseInt(document.getElementById('mynum').value); // Отримати введене число
    let out = document.getElementById('out'); // Елемент для відображення результату
    attempts++; // Збільшуємо кількість спроб

    if (num === secretNumber) {
        // Вгадали число
        let prize = 0;
        if (attempts === 1) {
            prize = 30; // Перша спроба
        } else if (attempts === 2) {
            prize = 20; // Друга спроба
        } else if (attempts === 3) {
            prize = 10; // Третя спроба
        }
        out.innerHTML = `Вітаємо! Ви вгадали число ${secretNumber}. Ваш виграш: $${prize}.`;
    } else if (attempts >= maxAttempts) {
        // Не вгадали за три спроби
        out.innerHTML = `Ви програли. Правильне число: ${secretNumber}.`;
    } else {
        // Неправильне число, але спроби ще є
        if (num > secretNumber) {
            out.innerHTML = 'Ви ввели більше число. Спробуйте ще раз.';
        } else {
            out.innerHTML = 'Ви ввели менше число. Спробуйте ще раз.';
        }
    }
}
