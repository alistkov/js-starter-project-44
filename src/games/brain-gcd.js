import runGame from '../index.js';
import { generateNumber, getGdc } from '../functions.js';

const DESCRIPTION = 'Find the greatest common divisor of given numbers.';

const gdcGame = () => {
  const firstNumber = generateNumber(2, 20);
  const secondNumber = generateNumber(3, 30);
  const correctAnswer = getGdc(firstNumber, secondNumber);
  const question = `${firstNumber} ${secondNumber}`;

  return [question, String(correctAnswer)];
};

export default () => {
  runGame(gdcGame, DESCRIPTION);
};
