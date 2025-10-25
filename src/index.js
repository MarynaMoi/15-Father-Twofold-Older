"use strict";

/**
 *
 * @param {number} fatherAge - вік батька
 * @param {number} sonAge - вік сина
 * @returns {number} через скільки років (якщо додатнє число),
 * або скільки років тому(якщо від'ємне число) батько буде (або був)
 * удвічі старшим за сина. В разі введення некоректних данних -  NaN
 */

const countTwofold = function (fatherAge, sonAge) {
  fatherAge = Math.floor(fatherAge);
  sonAge = Math.floor(sonAge);

  if (fatherAge - sonAge < 15 || sonAge < 0) {
    return NaN;
  }

  const years = fatherAge - 2 * sonAge;
  return years;
};

/**
 *
 * @param {number} years - повертається з функції countTwofold
 * @returns {string} визначає граматичні форму слова "рік"
 */
const getWordYear = function (years) {
  let wordYears = "років";
  const yearsString = String(Math.abs(years));
  console.log(yearsString);
  if (years < 10 || years > 20) {
    switch (yearsString[yearsString.length - 1]) {
      case "1":
        wordYears = "рік";
        break;
      case "2":
      case "3":
      case "4":
        wordYears = "роки";
        break;
      default:
        wordYears = "років";
    }
  }
  return wordYears;
};

const fatherAge = 63;
const sonAge = 20;

console.log(`Сьогодні Батьку: ${fatherAge}, а Сину: ${sonAge}`);
const years = countTwofold(fatherAge, sonAge);

if (Number.isNaN(years)) {
  console.log(" Дані введено некоректно");
} else if (years === 0) {
  console.log("Сьогодні Батьку вдвічі більше років, ніж Сину");
} else {
  if (years > 0) {
    console.log(
      `Через ${years} ${getWordYear(years)} Батько буде вдвічі старше за Сина`
    );
  } else if (years < 0) {
    console.log(
      `${Math.abs(years)} ${getWordYear(
        years
      )} тому Батько був  вдвічі старше за Сина`
    );
  }
}
