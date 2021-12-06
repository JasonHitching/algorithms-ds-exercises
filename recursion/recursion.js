/**
 *
 */
// Example of a recursive function
function countTo(maxNum, currentNum) {
    if (currentNum > maxNum) {
        return;
    }
    console.log(currentNum);
    countTo(maxNum, currentNum + 1);
}
countTo(5, 1);
