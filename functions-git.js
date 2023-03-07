//functions
const minusOne = function (num) {
  if (typeof Number(num)) {
    num = num - 1;
    return num;
  }
};

console.log(minusOne("Infinity"));

const makeSentence = function (one, two, three) {
  console.log(`${one} ${two} ${three}`);
};
