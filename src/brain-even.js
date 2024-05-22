import readlineSync from 'readline-sync';

const generateNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const isEven = (number) => number % 2 === 0;

const evenGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const steps = 3;

  for (let i = 1; i <= steps; i += 1) {
    const randomNumber = generateNumber(1, 100);
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    if (correctAnswer !== answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log('Let\'s try again, Bill!');
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default evenGame;
