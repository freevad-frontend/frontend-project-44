// общая функция каждой игры
// вызывается из главных файлов папки bin

import askQuestionGetAnswer from './cli.js';

// задаем количество итераций цикла
const questionsCount = 3;

// запускаем функцию собственно главной последовательности шагов игр
const playEachGame = (taskCondition, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');

  const userName = askQuestionGetAnswer('May I have your name?');

  console.log(`Hello, ${userName}!`);

  // пишем строчку условия игры
  console.log(taskCondition);

  for (let i = 1; i <= questionsCount; i += 1) {
    // получаем текст задания и результат
    const [questionText, correctAnswer] = getQuestionAndAnswer();

    // пишем вопрос задания пользователю
    console.log(`Question: ${questionText}`);

    // спрашиваем его ответ и получаем его
    const answer = askQuestionGetAnswer('Your answer:');

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
