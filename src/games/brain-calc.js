import runGame from '../index.js';
import { generateNumber, calculateResult } from '../utils.js';

const DESCRIPTION = 'What is the result of the expression?';
const OPERATIONS = ['+', '-', '*'];

const calcGame = () => {
  const firstNumber = generateNumber(1, 20);
  const secondNumber = generateNumber(1, 20);
  const operationIndex = generateNumber(0, 2);
  const operation = OPERATIONS[operationIndex];
  const question = `${firstNumber} ${operation} ${secondNumber}`;
  const correctAnswer = calculateResult(firstNumber, secondNumber, operation);

  return [question, String(correctAnswer)];
};

export default () => {
  runGame(calcGame, DESCRIPTION);
};
