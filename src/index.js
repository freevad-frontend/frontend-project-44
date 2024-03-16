// общая функция каждой игры
// вызывается из главных файлов папки bin

import greeting from './cli.js';

import { getRandomAnswerCalc, getTaskConditionCalc } from './games/brain-calc.js';

import { getRandomAnswerEven, getTaskConditionEven } from './games/brain-even.js';

import { getRandomAnswerGcd, getTaskConditionGcd } from './games/brain-gcd.js';

import { getRandomAnswerProgression, getTaskConditionProgression } from './games/brain-progression.js';

import { getRandomAnswerPrime, getTaskConditionPrime } from './games/brain-prime.js';

// выбираем из какого файла брать условия игры
const getTaskCondition = (gameName) => {
  switch (gameName) {
    case 'Calc': return getTaskConditionCalc();
    case 'Even': return getTaskConditionEven();
    case 'Gcd': return getTaskConditionGcd();
    case 'Progression': return getTaskConditionProgression();
    case 'Prime': return getTaskConditionPrime();
    default: throw new Error(`Unknown Game: '${gameName}'!`);
  }
};

// выбираем из какого файла брать функцию с генерацией заданий и ответов
const getRandomAnswer = (gameName) => {
  switch (gameName) {
    case 'Calc': return getRandomAnswerCalc();
    case 'Even': return getRandomAnswerEven();
    case 'Gcd': return getRandomAnswerGcd();
    case 'Progression': return getRandomAnswerProgression();
    case 'Prime': return getRandomAnswerPrime();
    default: throw new Error(`Unknown Game: '${gameName}'!`);
  }
};

// задаем количество итераций цикла
const questionsCount = 3;

// запускаем функцию собственно главной последовательности шагов игр
const playEachGame = (gameName) => {
  console.log('Welcome to the Brain Games!');

  const userName = greeting('May I have your name?');

  console.log(`Hello, ${userName}!`);

  // пишем строчку условия игры
  console.log(getTaskCondition(gameName));

  for (let i = 1; i <= questionsCount; i += 1) {
    // получаем текст задания и результат
    const [questionText, correctAnswer] = getRandomAnswer(gameName);

    // пишем вопрос задания пользователю
    console.log(`Question: ${questionText}`);

    // спрашиваем его ответ и получаем его
    const answer = greeting('Your answer:');

    // если ответ неверный - пишем что неверно, прерываем цикл и всю игру
    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    // если ответ верный - пишем что правильно и уходим на новый цикл
    console.log('Correct!');
  }

  // если все разы ответил правильно - хвалим и выходим
  console.log(`Congratulations, ${userName}!`);
};

export default playEachGame;
