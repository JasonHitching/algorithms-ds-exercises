/**
 *
 */

// Example of a recursive function
function countTo(maxNum: number, currentNum: number) {
  if (currentNum > maxNum) {
    return;
  }
  console.log(currentNum);
  countTo(maxNum, currentNum + 1);
}

countTo(5, 1);
