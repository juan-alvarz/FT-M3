function* fizzBuzzGenerator(max) {
  let num = 1;
  while (num < max) {
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

var fizBuzz = fizzBuzzGenerator(20);
console.log(fizBuzz.next());
console.log(fizBuzz.next());
console.log(fizBuzz.next());
console.log(fizBuzz.next());
console.log(fizBuzz.next());
console.log(fizBuzz.next());
console.log(fizBuzz.next());
console.log(fizBuzz.next());
console.log(fizBuzz.next());
console.log(fizBuzz.next());
console.log(fizBuzz.next());
console.log(fizBuzz.next());
console.log(fizBuzz.next());
console.log(fizBuzz.next());
console.log(fizBuzz.next());

module.exports = fizzBuzzGenerator;
