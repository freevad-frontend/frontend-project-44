import readlineSync from 'readline-sync';

const askQuestionGetAnswer = (sentence) => {
  const answer = readlineSync.question(`${sentence} `);
  return answer;
};

export default askQuestionGetAnswer;
