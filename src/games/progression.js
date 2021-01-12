import gameEngine from '../index.js';
import generateNumber from '../random-number.js';

const question = 'What number is missing in the progression?';

const createLength = () => {
  const num = generateNumber(9);
  return (num < 5) ? 5 : num;
};

const generateArguments = () => {
  const begin = generateNumber(100);
  const step = generateNumber(100) + 1;
  const length = createLength();
  const items = [begin];
  const indexNum = generateNumber(length);
  for (let i = 1; i <= length; i += 1) {
    items[i] = items[i - 1] + step;
  }
  const randomNumOfItems = items[indexNum];
  const newItems = [...items];
  const emptyValue = '..';
  newItems[indexNum] = emptyValue;
  const task = newItems.join(' ');
  const solution = String(randomNumOfItems);
  const argumentsForGameEngine = { task, solution };
  return argumentsForGameEngine;
};

export default () => gameEngine(question, generateArguments);
