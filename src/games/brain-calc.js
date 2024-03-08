// генерация задания и ответа Игры Калькулятор

import randomInt from './randomGenerator.js';

// задаем ограничения чисел и мат операции
const min = 1; // задаем минимальное число
const max = 20; // задаем максимальное число
const mathSymbols = ['+', '-', '*']; // задаем массив операций

// вычисляем правильный ответ (результат)
const result = (randomInt1, randomInt2, mathSymbol) => {
  switch (mathSymbol) {
    case 0: return randomInt1 + randomInt2;
    case 1: return randomInt1 - randomInt2;
    case 2: return randomInt1 * randomInt2;
    default: return randomInt1 + randomInt2;
  }
};

// функция генерации и возвращения задания и ответа для каждой итерации цикла
// функция вызывается из index.js
const randomAnswerCalc = () => {
  const randomInt1 = randomInt(min, max);
  // генерируем первое случайное число
  const randomInt2 = randomInt(min, max);
  // генерируем второе случайное число
  const mathSymbol = randomInt(0, mathSymbols.length - 1);
  // генерируем  случайное число индекс операции от 0 до последнего индекса
  const answerText = `${randomInt1} ${mathSymbols[mathSymbol]} ${randomInt2}`;
  const resultAnswer = result(randomInt1, randomInt2, mathSymbol).toString();
  return [answerText, resultAnswer];
};
export default randomAnswerCalc;
