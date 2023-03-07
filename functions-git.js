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

const getLastElement = function (arr) {
  return arr[arr.length - 1];
};

getLastElement([1, 2, 3, 4, 5, 6]);
getLastElement(["a", "b", "c"]);
getLastElement([
  [1, 2, 3],
  [4, 5, 6],
]);

console.log(
  getLastElement([
    [1, 2, 3],
    [4, 5, 6],
  ])
);
