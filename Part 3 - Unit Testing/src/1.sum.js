const sum = (first, second) => {
  return first + second;
};

const sumAll = (numbers) => {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
};

const calculate = (numbers, callback) => {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  callback(total);
};

const calculateAndReturn = (numbers, callback) => {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return callback(total);
};

module.exports = { sum, sumAll, calculate, calculateAndReturn };
