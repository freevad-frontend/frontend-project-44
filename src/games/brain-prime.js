// генерация задания и ответа Игры Простое ли число?

import getRandomInt from '../randomGenerator.js';

import playEachGame from '../index.js';

// пишем условие игры
const taskCondition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// функция проверки на простое число
const isPrime = (int1) => {
  if (int1 <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(int1); i += 1) {
    if (int1 % i === 0) {
      return false;
    }
  }
  return true;
};

// задаем ограничения числа
const minRange = 1;
const maxRange = 60;

// вычисляем правильный ответ (результат)
const getResult = (int1) => {
  const result = isPrime(int1) ? 'yes' : 'no';
  return result;
};

// функция генерации и возвращения задания и ответа для каждой итерации цикла
export const getRandomAnswerPrime = () => {
  const randomInt1 = getRandomInt(minRange, maxRange);

  const correctAnswer = getResult(randomInt1);

  const questionText = `${randomInt1}`;

  return [questionText, correctAnswer];
};

const runGameBrainPrime = () => playEachGame(taskCondition, getRandomAnswerPrime);

export default runGameBrainPrime;
