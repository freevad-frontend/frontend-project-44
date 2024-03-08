// генерация задания и ответа Игры Простое ли число?

import randomInt from './randomGenerator.js';

// задаем ограничения чисел
const min = 1; // задаем минимальное число
const max = 60; // задаем максимальное число

// вычисляем правильный ответ (результат)
const result = (Int1) => {
  if (Int1 <= 1) {
    return 'no';
  }
  for (let i = 2; i <= Math.sqrt(Int1); i += 1) {
    if (Int1 % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

// функция генерации и возвращения задания и ответа для каждой итерации цикла
// функция вызывается из index.js
const randomAnswerPrime = () => {
  const randomInt1 = randomInt(min, max);
  // генерируем случайное число

  const resultThis = result(randomInt1);

  const answerText = `${randomInt1}`;
  const resultAnswer = resultThis;
  return [answerText, resultAnswer];
};
export default randomAnswerPrime;
