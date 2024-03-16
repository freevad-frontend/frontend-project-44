// генерация задания и ответа Игры Арифметическая прогрессия

import getRandomInt from './randomGenerator.js';

// пишем условие игры
export const getTaskConditionProgression = () => {
  const taskCondition = 'What number is missing in the progression?';
  return taskCondition;
};

// задаем ограничение первого числа в ряду
const minFirstNumber = 1;
const maxFirstNumber = 7;

// задаем ограничение дельты
const minDelta = 2;
const maxDelta = 10;

// задаем ограничение количества чисел
const minCount = 5;
const maxCount = 11;

// задаем порядковый номер числа задания
const minSerialNumber = 2;

// вычисляем задание и правильный ответ (результат)
const getResult = (firstNumber, delta, numbersCount, serialNumber) => {
  const progressionNumbers = [];
  for (let i = 1; i <= numbersCount; i += 1) {
    progressionNumbers.push(firstNumber + (delta * (i - 1)));
  }

  const answer = progressionNumbers[serialNumber].toString();
  progressionNumbers[serialNumber] = '..';

  const progressionText = progressionNumbers.join(' ');
  return [progressionText, answer];
};

// функция генерации и возвращения задания и ответа для каждой итерации цикла
export const getRandomAnswerProgression = () => {
  // генерируем первое число ряда
  const firstNumber = getRandomInt(minFirstNumber, maxFirstNumber);

  // генерируем дельту
  const delta = getRandomInt(minDelta, maxDelta);

  // генерируем количество чисел в ряду
  const numbersCount = getRandomInt(minCount, maxCount);

  // генерируем порядковый номер числа задания
  const hiddenIndex = getRandomInt(minSerialNumber, numbersCount - 1);

  // генерируем текст вопроса и правильный ответ
  const [questionText, correctAnswer] = getResult(firstNumber, delta, numbersCount, hiddenIndex);

  return [questionText, correctAnswer];
};
