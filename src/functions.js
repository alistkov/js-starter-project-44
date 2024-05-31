export const generateNumber = (min, max) => (
  Math.floor(Math.random() * (max - min + 1)) + min);

export const isEven = (number) => number % 2 === 0;

export const calculateResult = (firstNumber, secondNumber, operation) => {
  switch (operation) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      return 'Unknown operation';
  }
};

export const getGdc = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getGdc(b, a % b);
};

export const isPrime = (number) => {
  if (number <= 1) return false;
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
