/*
Given an array of positive numbers and a positive number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.

Example 1:

Input: [2, 1, 5, 2, 3, 2], S=7
Output: 2
Explanation: The smallest subarray with a sum greater than or equal to '7' is [5, 2].
Example 2:

Input: [2, 1, 5, 2, 8], S=7
Output: 1
Explanation: The smallest subarray with a sum greater than or equal to '7' is [8].
Example 3:

Input: [3, 4, 1, 1, 6], S=8
Output: 3
Explanation: Smallest subarrays with a sum greater than or equal to '8' are [3, 4, 1]
or [1, 1, 6].
*/

const smallest_subarray_sum = function(s, arr) {
  let smallestSum = Infinity;
  let windowSum = 0;
  let windowStart = 0;
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];
    while (windowSum >= s) {
      smallestSum = Math.min(smallestSum, windowEnd - windowStart + 1); //Checks to see what is smaller
      windowSum -= arr[windowStart];
      windowStart += 1;
    }

  if (smallestSum = Infinity) {
    return 0;
  }

  return smallestSum;
    //windowSum += arr[windowEnd]
    //if windowSum >= s, smallest sum += 1
  }
};

console.log(`Smallest subarray length: ${smallest_subarray_sum(7, [2, 1, 5, 2, 3, 2])}`);
console.log(`Smallest subarray length: ${smallest_subarray_sum(7, [2, 1, 5, 2, 8])}`);
console.log(`Smallest subarray length: ${smallest_subarray_sum(8, [3, 4, 1, 1, 6])}`);