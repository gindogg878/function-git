//functions
const minusOne = function (num) {
  if (typeof Number(num)) {
    num = num - 1;
    return num;
  }
};

console.log(minusOne("Infinity"));

//second functions//
const makeSentence = function (one, two, three) {
  console.log(`${one} ${two} ${three}`);
};

makeSentence("Me", "likey", "pizza!");

//3 function
const getLastElement = function (arr) {
  return arr[arr.length - 1];
};

console.log(getLastElement([1, 2, 3, 4, 5, 6]));
console.log(getLastElement(["a", "b", "c"]));
console.log(
  getLastElement([
    [1, 2, 3],
    [4, 5, 6],
  ])
);
