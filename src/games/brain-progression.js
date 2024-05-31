import runGame from '../index.js';
import { generateNumber } from '../functions.js';

const DESCRIPTION = 'What number is missing in the progression?';

const progressionGame = () => {
  const progressionLength = generateNumber(5, 10);
  const startNumber = generateNumber(2, 10);
  const step = generateNumber(2, 10);
  const progression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    const element = startNumber + step * i;
    progression.push(element);
  }

  const index = generateNumber(0, progressionLength - 1);
  const correctAnswer = progression[index];
  progression[index] = '..';

  return {
    question: progression.join(', '),
    correctAnswer: String(correctAnswer),
  };
};

export default () => {
  runGame(progressionGame, DESCRIPTION);
};
