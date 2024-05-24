import runGame from '../index.js';
import { generateNumber, isEven } from '../functions.js';

const DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenGame = () => {
  const randomNumber = generateNumber(1, 100);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

  return {
    question: randomNumber,
    correctAnswer,
  };
};

export default () => {
  runGame(evenGame, DESCRIPTION);
};
