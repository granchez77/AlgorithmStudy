/*
Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

Example 1:

Input: [2, 1, 5, 1, 3, 2], k=3
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3].
Example 2:

Input: [2, 3, 4, 1, 5], k=2
Output: 7
Explanation: Subarray with maximum sum is [3, 4].

*/

const max_sub_array_of_size_k = function(k, arr) {
  let maxSum = 0; //return value
  let windowStart = 0; //start of window which will get adjusted
  let windowSum = 0;
  //iterate through length k at a time incrementing window each time
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];
    if (windowEnd >= k-1) {//k - 1 for indexing reasons
      if (windowSum > maxSum) {
        maxSum = windowSum
      }
      windowSum -= arr[windowStart]; //subtracts element going out
      windowStart += 1; // slides window ahead
    }
  }
  //if the sum (windowSum) of those numbers is greater than maxSum
  //maxSum = windowSum
  return maxSum;
};

console.log(`Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2])}`);
console.log(`Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(2, [2, 3, 4, 1, 5])}`);