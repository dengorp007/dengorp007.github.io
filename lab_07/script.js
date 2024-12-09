let secretNumber = Math.floor(Math.random() * 5) + 1; // Генеруємо випадкове число від 1 до 100
let attempts = 0; // Лічильник спроб
const maxAttempts = 3; // Максимальна кількість спроб
let balance = 0

function f1() {
    console.log(secretNumber);
    const num = parseInt(document.getElementById('mynum').value); // Отримати введене число
    const out = document.getElementById('out'); // Елемент для відображення результату
    attempts++; // Збільшуємо кількість спроб

    if (num === secretNumber) {
        let prize = 0;
        if (attempts === 1) {
            prize = 30; // Перша спроба
        } else if (attempts === 2) {
            prize = 20; // Друга спроба
        } else if (attempts === 3) {
            prize = 10; // Третя спроба
        }
        balance = balance + prize;
        out.innerHTML = `Вітаємо! Ви вгадали число ${secretNumber}. Ваш виграш: $${prize}. Ваш баланс $${balance} Гра почнеться наново.`;
        resetGame();
    } else if (attempts >= maxAttempts) {
        out.innerHTML = `Ви програли. Правильне число: ${secretNumber}. Гра почнеться наново.`;
        resetGame();
    } else {
        if (num > secretNumber) {
            out.innerHTML = 'Ви ввели більше число. Спробуйте ще раз.';
        } else {
            out.innerHTML = 'Ви ввели менше число. Спробуйте ще раз.';
        }
    }
}

function resetGame() {
    secretNumber = Math.floor(Math.random() * 5) + 1; // Нове випадкове число
    attempts = 0; // Скидаємо лічильник спроб
    document.getElementById('mynum').value = ''; // Очищуємо поле вводу
}
