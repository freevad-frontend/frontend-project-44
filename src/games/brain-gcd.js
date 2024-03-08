// генерация задания и ответа Игры НОД

import randomInt from './randomGenerator.js';

// задаем ограничения чисел и мат операции
const min = 1; // задаем минимальное число
const max = 60; // задаем максимальное число

// вычисляем правильный ответ (результат)
const result = (Int1, Int2) => {
  if (Int2 === 0) {
    return Int1;
  }
  return result(Int2, Int1 % Int2);
};

// функция генерации и возвращения задания и ответа для каждой итерации цикла
// функция вызывается из index.js
const randomAnswerGcd = () => {
  const randomInt1 = randomInt(min, max);
  // генерируем первое случайное число
  const randomInt2 = randomInt(min, max);
  // генерируем второе случайное число
  const resultThis = result(randomInt1, randomInt2);
  const answerText = `${randomInt1} ${randomInt2}`;
  const resultAnswer = resultThis.toString();
  return [answerText, resultAnswer];
};
export default randomAnswerGcd;
