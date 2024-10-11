function checkLine (line, length) {
  return line.length <= length;
}

console.log(checkLine('проверяемая строка', 20));
console.log(checkLine('проверяемая строка', 18));
console.log(checkLine('проверяемая строка', 10));

function isPalindrome (line) {
  const string = line.replaceAll(' ', '').toLowerCase();
  for (let i = 0; i < string.length / 2; i++) {
    if (string.at(i) !== string.at(-i - 1)) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome('топот'));
console.log(isPalindrome('ДовОд'));
console.log(isPalindrome('Кекс'));
console.log(isPalindrome('Лёша на полке клопа нашёл '));

let number = 15;
let taskResult;

function extractNumber(number) {
  if (number % 3 === 0 && number & 5 !== 0) {
    return taskResult = 'Fizz';
  } else if (number % 3 !== 0 && number % 5 === 0) {
    return taskResult = 'Buzz';
  } else if (number % 3 === 0 && number % 5 === 0) {
    return taskResult = 'FizzBuzz';
  }
  return number;
}
