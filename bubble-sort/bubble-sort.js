/**
 * Typescript implementation of the 'Bubble Sort' sorting alogrithm
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
function bubbleSort(nums) {
    /** Boolean flag for determining whether
     * changes were made to the original array  */
    var match = false;
    // Execute outer do while loop
    do {
        match = false;
        // Iterate over the length of the input array (nums)
        for (var i = 0; i < nums.length; i++) {
            // If the current indexed position (i) is greater than the proceeding
            if (nums[i] > nums[i + 1]) {
                /** Instatiate a temp variable assigned to
                 * nums[i] and swap it with the current index */
                var temp = nums[i];
                nums[i] = nums[i + 1];
                nums[i + 1] = temp;
                match = true;
            }
        }
    } while (match); // Iterate while match is equal to true
}
var nums = [3, 4, 2, 8, 2];
bubbleSort(nums);
console.log(nums);
