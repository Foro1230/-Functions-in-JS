// Завдання 1
function compareNumbers(first, second) {
  
  if (first < second) {
    return -1;
  }
  
  if (first > second) {
    return 1;
  }
 
  return 0;
}

console.log("Завдання 1. Порівняння чисел 4 і 9:", compareNumbers(4, 9));

// Завдання 2
function factorial(number) {
  
  let result = 1;

  
  for (let i = 1; i <= number; i++) {
    result *= i;
  }

  
  return result;
}

console.log("Завдання 2. Факторіал числа 5:", factorial(5));

// Завдання 3
function combineDigits(first, second, third) {

  return first * 100 + second * 10 + third;
}

console.log("Завдання 3. Об'єднання цифр 1, 4 і 9:", combineDigits(1, 4, 9));

// Завдання 4 
function rectangleArea(length, width = length) {
 
  return length * width;
}

console.log("Завдання 4. Площа квадрата зі стороною 5:", rectangleArea(5));
console.log("Завдання 4. Площа прямокутника 4 на 6:", rectangleArea(4, 6));

// Завдання 5
function isPerfectNumber(number) {
  
  let sum = 0;

  for (let i = 1; i < number; i++) {
    
    if (number % i === 0) {
      sum += i;
    }
  }

  
  return sum === number;
}

console.log("Завдання 5. Чи є число 28 досконалим:", isPerfectNumber(28));

// Завдання 6
function perfectNumbersInRange(minimum, maximum) {
  
  const perfectNumbers = [];

  
  for (let number = minimum; number <= maximum; number++) {
    
    if (isPerfectNumber(number)) {
      perfectNumbers.push(number);
    }
  }

  
  return perfectNumbers;
}

console.log("Завдання 6. Досконалі числа від 1 до 10000:", perfectNumbersInRange(1, 10000));

// Завдання 7
function formatTime(hours, minutes = 0, seconds = 0) {
  
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  
  return hours + ":" + minutes + ":" + seconds;
}

console.log("Завдання 7. Час 9 годин:", formatTime(9));
console.log("Завдання 7. Час 14 годин 5 хвилин 3 секунди:", formatTime(14, 5, 3));
