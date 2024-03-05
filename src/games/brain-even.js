// функция Игры Проверка на чётность
import greeting from '../cli.js';

const even = (userName) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".'); // пишем строчку условия игры
  for (let i = 1; i <= 3; i += 1) {
    const min = 1; // задаем минимальное число
    const max = 20; // задаем максимальное число
    const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
    // генерируем случайное число
    const evenRandom = randomInt % 2 ? 'no' : 'yes'; // проверяем на четность и присваиваем слова из вариантов ответа пользователя
    console.log(`Question: ${randomInt}`); // пишем число пользователю
    const answer = greeting('Your answer:'); // спрашиваем его ответ
    console.log(`Your answer: ${answer}`); // показываем его ответ

    if (parseInt(answer, 10) === evenRandom) {
      console.log('Correct!');
    } // если ответ верный - пишем что правильно и уходим на новый цикл

    if (parseInt(answer, 10) !== evenRandom) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${evenRandom}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    } // если ответ неверный - пишем что неверно, прерываем цикл и всю программу
  }
  console.log(`Congratulations, ${userName}!`); // если все разы ответил правильно - хвалим и выходим
};

export default even;
