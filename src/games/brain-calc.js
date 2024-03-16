// генерация задания и ответа Игры Калькулятор

import getRandomInt from './randomGenerator.js';

// пишем условие игры
export const getTaskConditionCalc = () => {
  const taskCondition = 'What is the result of the expression?';
  return taskCondition;
};

// задаем ограничения чисел и мат операции
const minRange = 1;
const maxRange = 20;
const mathSymbols = ['+', '-', '*'];

// вычисляем правильный ответ (результат)
const getResult = (randomInt1, randomInt2, mathSymbol) => {
  switch (mathSymbol) {
    case '+': return randomInt1 + randomInt2;
    case '-': return randomInt1 - randomInt2;
    case '*': return randomInt1 * randomInt2;
    default: throw new Error(`Unknown mathSymbol: '${mathSymbol}'!`);
  }
};

// функция генерации и возвращения задания и ответа для каждой итерации цикла
export const getRandomAnswerCalc = () => {
  // генерируем первое число
  const randomInt1 = getRandomInt(minRange, maxRange);

  // генерируем второе число
  const randomInt2 = getRandomInt(minRange, maxRange);

  // генерируем индекс мат операции и получаем символ мат операции
  const mathSymbol = mathSymbols[getRandomInt(0, mathSymbols.length - 1)];

  const questionText = `${randomInt1} ${mathSymbols[mathSymbol]} ${randomInt2}`;
  const correctAnswer = getResult(randomInt1, randomInt2, mathSymbol).toString();
  return [questionText, correctAnswer];
};
