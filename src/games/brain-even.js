// генерация задания и ответа Игры Проверка на четность

import getRandomInt from './randomGenerator.js';

// пишем условие игры
export const getTaskConditionEven = () => {
  const taskCondition = 'Answer "yes" if the number is even, otherwise answer "no".';
  return taskCondition;
};

// функция проверки на четность
const isEven = (number) => number % 2 === 0;

// задаем ограничения числа
const minRange = 1;
const maxRange = 20;

// функция генерации и возвращения задания и ответа для каждой итерации цикла
export const getRandomAnswerEven = () => {
  const randomInt1 = getRandomInt(minRange, maxRange);

  // проверяем на четность и присваиваем слова из вариантов ответа пользователя
  const correctAnswer = isEven(randomInt1) ? 'no' : 'yes';

  const questionText = `${randomInt1}`;

  return [questionText, correctAnswer];
};
