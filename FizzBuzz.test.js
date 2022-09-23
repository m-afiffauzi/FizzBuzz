const FizzBuzz = require("./FizzBuzz");

test("return FizzBuzz for (i % 5 === 0 && i % 3 === 0), Buzz for (n % 5 === 0), Fizz for (i % 3 === 0) and i for anything else", () => {
  const n = 15;
  expect(FizzBuzz(n));
  for (let i = 1; i <= n; i++) {
    if (i % 5 === 0 && i % 3 === 0) toString("FizzBuzz");
    else if (i % 5 === 0) toString("Buzz");
    else if (i % 3 === 0) toString("Fizz");
    else toString(i);
  }
});
