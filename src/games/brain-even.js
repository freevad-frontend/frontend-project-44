// генерация задания и ответа Игры Проверка на четность

import randomInt from './randomGenerator.js';

// задаем ограничения числа
const min = 1; // задаем минимальное число
const max = 20; // задаем максимальное число

// функция генерации и возвращения задания и ответа для каждой итерации цикла
// функция вызывается из index.js
const randomAnswerEven = () => {
  const randomInt1 = randomInt(min, max);
  // генерируем случайное число

  const evenRandom = randomInt1 % 2 ? 'no' : 'yes'; // проверяем на четность и присваиваем слова из вариантов ответа пользователя

  const answerText = `${randomInt1}`; // текст задания

  const resultAnswer = evenRandom; // правильный ответ

  return [answerText, resultAnswer];
};
export default randomAnswerEven;
