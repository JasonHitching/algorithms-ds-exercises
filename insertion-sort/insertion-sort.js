/**
 * Typescript implementation of the 'Insertion Sort' sorting alogrithm
 *
 *  Big O complexity analysis:
 *
 *      Best case: O(n) - The passed in array is already sorted low to high
 *
 *      Worst case: O(n^2) - The passed array is sorted high to low
 *                         - Exponential growth with increased input size.
 *
 *      Spatial complexity: O(1) - Input array manipulated, no further required memory allocation
 */
function insertionSort(arr) {
    // Loop over the parameter passed array, starting at index [1]
    for (var i = 1; i < arr.length; i++) {
        var j = i;
        // While loop for checking all proceeding indexes
        while (j > 0 && arr[j - 1] > arr[j]) {
            var temp = arr[j - 1];
            arr[j - 1] = arr[j];
            arr[j] = temp;
            j -= 1;
        }
    }
}
var nums = [10, 3, 2, 5];
insertionSort(nums);
console.log(nums);
