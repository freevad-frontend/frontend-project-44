// генерация задания и ответа Игры Арифметическая прогрессия

import randomInt from './randomGenerator.js';

// задаем ограничение первого числа в ряду
const minFirstNumber = 1; // задаем минимальное число
const maxFirstNumber = 7; // задаем максимальное число

// задаем ограничение дельты
const minDelta = 2; // задаем минимальное число
const maxDelta = 10; // задаем максимальное число

// задаем ограничение количества чисел
const minCount = 5; // задаем минимальное число
const maxCount = 11; // задаем максимальное число

// задаем порядковый номер числа задания
const minSerialNumber = 2; // задаем минимальное число

// вычисляем правильный ответ (результат)
const result = (FirstNumber, Delta, Count, SerialNumber) => {
  const progressionNumbers = [];
  let answer;
  for (let i = 1; i <= Count; i += 1) {
    if (i !== SerialNumber) {
      progressionNumbers.push(FirstNumber + (Delta * (i - 1)));
    }
    if (i === SerialNumber) {
      progressionNumbers.push('..');
      answer = (FirstNumber + (Delta * (i - 1))).toString();
    }
  }
  const progressionText = progressionNumbers.join(' ');
  return [progressionText, answer];
};

// функция генерации и возвращения задания и ответа для каждой итерации цикла
// функция вызывается из index.js
const randomAnswerProgression = () => {
  const FirstNumber = randomInt(minFirstNumber, maxFirstNumber);
  // генерируем первое число ряда
  const Delta = randomInt(minDelta, maxDelta);
  // генерируем дельту
  const Count = randomInt(minCount, maxCount);
  // генерируем количество чисел в ряду
  const SerialNumber = randomInt(minSerialNumber, Count - 1);
  // генерируем порядковый номер числа задания

  const resultThis = result(FirstNumber, Delta, Count, SerialNumber);
  const answerText = resultThis[0];
  const resultAnswer = resultThis[1];
  return [answerText, resultAnswer];
};
export default randomAnswerProgression;
