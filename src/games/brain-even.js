import runGame from '../index.js';

const generateNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const isEven = (number) => number % 2 === 0;

const DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".';
const evenGame = () => {
  const randomNumber = generateNumber(1, 100);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

  return [randomNumber, correctAnswer];
};

export default () => {
  runGame(evenGame, DESCRIPTION);
};
