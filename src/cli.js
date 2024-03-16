import readlineSync from 'readline-sync';

const greeting = (sentence) => {
  const answer = readlineSync.question(`${sentence} `);
  return answer;
};

export default greeting;
