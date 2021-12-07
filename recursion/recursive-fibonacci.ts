/**
 *
 */
function nFibonacci(num) {
  if (num === 1 || num === 2) {
    return 1;
  } else if (num <= 0) {
    return 0;
  }

  return nFibonacci(num - 1) + nFibonacci(num - 2);
}

console.log(nFibonacci(6));
