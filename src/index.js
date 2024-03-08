// общая функция каждой игры
// вызывается из главных файлов папки bin

import greeting from './cli.js';

import randomAnswerCalc from './games/brain-calc.js';

import randomAnswerEven from './games/brain-even.js';

import randomAnswerGcd from './games/brain-gcd.js';

import randomAnswerProgression from './games/brain-progression.js';

// выбираем из какого файла брать функцию с генерацией заданий и ответов
// выбираем в зависимости от игры
const randomAnswer = (gameName) => {
  switch (gameName) {
    case 'Calc': return randomAnswerCalc();
    case 'Even': return randomAnswerEven();
    case 'Gcd': return randomAnswerGcd();
    case 'Progression': return randomAnswerProgression();
    default: return ['Error', 'Error'];
  }
};

// задаем количество итераций цикла
const numberOfQuestions = 3;

// запускаем функцию собственно главной последовательности шагов игр
const eachGame = (gameName, taskCondition) => {
  console.log('Welcome to the Brain Games!'); // просто приветствие

  const userName = greeting('May I have your name?'); // спрашиваем имя
  console.log(`Hello, ${userName}!`); // приветствуем пользователя по имени

  console.log(taskCondition); // пишем строчку условия игры

  for (let i = 1; i <= numberOfQuestions; i += 1) {
    const resultAnswer = randomAnswer(gameName); // получаем текст задания и результат

    console.log(`Question: ${resultAnswer[0]}`);
    // пишем вопрос задания пользователю

    const answer = greeting('Your answer:'); // спрашиваем его ответ и получаем его

    if (answer === resultAnswer[1]) {
      console.log('Correct!');
    } // если ответ верный - пишем что правильно и уходим на новый цикл

    if (answer !== resultAnswer[1]) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${resultAnswer[1]}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    } // если ответ неверный - пишем что неверно, прерываем цикл и всю игру
  }

  console.log(`Congratulations, ${userName}!`); // если все разы ответил правильно - хвалим и выходим
};

export default eachGame;
