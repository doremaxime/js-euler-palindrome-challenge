'use strict';

// This function will be called with 3 arguments set to
// 2, 10, and 1000000 respectively
const doubleBasePalindromeSum = function (base1, base2, upperLimit) {
};
doubleBasePalindromeSum(2, 10, 1000000);

  // what does 'palindromic in base 10 and base 2' meand?!
  // by 'not include leading zeros' does that mean numbers like 01, 045, 03403203?
  // why does it matter what a number is in binary?
  // I thought decimal numbers were numbers followed by a dot and then more numbers. I would think 585 is a whole number..

  // I believe what is being asked is to find all number between 1 and 1000000 that are the same reversed.

  // TODO: create a function that will count up to a number and back down and return a string of the climb
  const countUpAndDown = function (a) {
    let string = '';
    for (i = 1; i <= a; i++){
      string += i + ' ';
      }
    for (let i = a-1; i>=1; i--) {
      string += i + ' ';
      }
    string = string.substring(0, string.length - 1);
    return string;
  };
  // countUpAndDown(3); would return 1 2 3 3 1
  // realizing now that this wouldn't work for the palindrome..



  //TODO: create a loop that goes through each number, and only returns those that are the same reversed..hmm...
  // if 4010 === 0104 = false
  // if 979 === 979 = true

  for (let i = 0; i < 1000000; i++) {

}

// am I on the right track?





module.exports = {
  doubleBasePalindromeSum,
};
