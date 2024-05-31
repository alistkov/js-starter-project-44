import runGame from '../index.js';
import { isPrime, generateNumber } from '../functions.js';

const DESCRIPTION = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeGame = () => {
  const question = generateNumber(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return {
    question,
    correctAnswer,
  };
};

export default () => {
  runGame(primeGame, DESCRIPTION);
};
