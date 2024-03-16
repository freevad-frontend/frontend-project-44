// генерация задания и ответа Игры НОД

import getRandomInt from './randomGenerator.js';

// пишем условие игры
export const getTaskConditionGcd = () => {
  const taskCondition = 'Find the greatest common divisor of given numbers.';
  return taskCondition;
};

// задаем ограничения чисел
const minRange = 1;
const maxRange = 60;

// вычисляем правильный ответ (результат)
const getResult = (int1, int2) => {
  if (int2 === 0) {
    return int1;
  }
  return getResult(int2, int1 % int2);
};

// функция генерации и возвращения задания и ответа для каждой итерации цикла
export const getRandomAnswerGcd = () => {
  const randomInt1 = getRandomInt(minRange, maxRange);

  const randomInt2 = getRandomInt(minRange, maxRange);

  const resultThis = getResult(randomInt1, randomInt2);

  const questionText = `${randomInt1} ${randomInt2}`;

  const correctAnswer = resultThis.toString();

  return [questionText, correctAnswer];
};
