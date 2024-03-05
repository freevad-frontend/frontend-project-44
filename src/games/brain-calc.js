// функция Игры Калькулятор
import greeting from '../cli.js';

const calculator = (userName) => {
  console.log('What is the result of the expression?'); // пишем строчку условия игры
  const min = 1; // задаем минимальное число
  const max = 20; // задаем максимальное число
  const mathSymbols = ['+', '-', '*']; // задаем массив операций

  for (let i = 1; i <= 3; i += 1) {
    const randomInt1 = Math.floor(Math.random() * (max - min + 1)) + min;
    // генерируем первое случайное число
    const randomInt2 = Math.floor(Math.random() * (max - min + 1)) + min;
    // генерируем второе случайное число
    const mathSymbol = Math.floor(Math.random() * (mathSymbols.length));
    // генерируем  случайное число индекс операции от 0 до 2

    let result;
    switch (mathSymbol) {
      case 0: result = randomInt1 + randomInt2;
        break;
      case 1: result = randomInt1 - randomInt2;
        break;
      case 2: result = randomInt1 * randomInt2;
        break;
      default: result = randomInt1 + randomInt2;
    }

    console.log(`Question: ${randomInt1}${mathSymbols[mathSymbol]}${randomInt2}`);
    // пишем число пользователю
    const answer = greeting('Your answer:'); // спрашиваем его ответ

    if (parseInt(answer, 10) === result) {
      console.log('Correct!');
    } // если ответ верный - пишем что правильно и уходим на новый цикл

    if (parseInt(answer, 10) !== result) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    } // если ответ неверный - пишем что неверно, прерываем цикл и всю программу
  }
  console.log(`Congratulations, ${userName}!`); // если все разы ответил правильно - хвалим и выходим
};
export default calculator;
