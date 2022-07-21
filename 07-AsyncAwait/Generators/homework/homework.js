function* fizzBuzzGenerator(max) {
  if (max === undefined) {
    let num = 1;
    while (true) {
      if (num % 3 === 0 && num % 5 === 0) {
        yield "Fizz Buzz";
        num++;
      }
      if (num % 3 === 0) {
        yield "Fizz";
        num++;
      }
      if (num % 5 === 0) {
        yield "Buzz";
        num++;
      } else {
        yield num;
        num++;
      }
    }
  } else {
    let num = 1;
    while (num <= max) {
      if (num % 3 === 0 && num % 5 === 0) {
        yield "Fizz Buzz";
        num++;
      }
      if (num % 3 === 0) {
        yield "Fizz";
        num++;
      }
      if (num % 5 === 0) {
        yield "Buzz";
        num++;
      } else {
        yield num;
        num++;
      }
    }
  }
}

module.exports = fizzBuzzGenerator;
