'use strict';

module.exports.generateRandomNumber = (event) => {
  const randomNumber = parseInt(Math.random()*100);
  console.log("The random number generated is ", randomNumber);
  return randomNumber;
};
