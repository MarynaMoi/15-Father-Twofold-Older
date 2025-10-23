"use strict";

/**
 *
 * @param {number} fatherAge - вік батька
 * @param {number} sonAge - вік сина
 * @returns через скільки років (або скільки років тому) батько буде (або був) удвічі старшим за сина.
 */

const countTwofold = function (fatherAge, sonAge) {
  fatherAge = Math.floor(fatherAge);
  sonAge = Math.floor(sonAge);
  console.log(`Сьогодні Батьку: ${fatherAge}, а Сину: ${sonAge}`);
  if (fatherAge - sonAge < 15) {
    return console.log(`Різниця в віці занадто мала`);
  }
  if (sonAge < 0) {
    return console.log(`Вік персонажів не може бути від'ємним`);
  }

  const years = fatherAge - 2 * sonAge;

  if (years === 0) {
    return console.log("Сьогодні Батьку вдвічі більше років, ніж Сину");
  } else if (years > 0) {
    return console.log(
      `Через ${years} років Батьку буде вдвічі більше років, ніж Сину`
    );
  } else if (years < 0) {
    return console.log(
      `${years * -1} років назад Батьку було вдвічі більше років, ніж Сину`
    );
  }
};

countTwofold(100, 90);
countTwofold(100, 50);
countTwofold(100, -1);
countTwofold(-100, 1);
countTwofold(100.5, 80);
countTwofold(16, 1);
