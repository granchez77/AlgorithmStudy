/*
Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after removing the duplicates in-place return the length of the subarray that has no duplicate in it.

Example 1:

Input: [2, 3, 3, 3, 6, 9, 9]
Output: 4
Explanation: The first four elements after removing the duplicates will be [2, 3, 6, 9].
Example 2:

Input: [2, 2, 2, 11]
Output: 2
Explanation: The first two elements after removing the duplicates will be [2, 11].
*/

function remove_duplicates(arr) {
  let nextNonDuplicate = 1; //is going to be the number we return, keeps track of the most recent non duplicate number
  let i = 0; //is used to iterate the array
  while (i < arr.length) {
    if (arr[nextNonDuplicate - 1] !== arr[i]) { //the nextNonDuplicate rests on a duplicate ahead of the most recent "nonDuplicate" and gets replaced with the next non duplicate that the iterator finds
      arr[nextNonDuplicate] = arr[i]; //replacement occurs here
      nextNonDuplicate += 1; //this resets the process, the nextNonDuplicate will only ever grow as large as the number of non duplicates
    }
    i += 1; //this keeps the iteration going
  }
  return nextNonDuplicate; //at end of for loop the nonDuplicate count is returned
}


console.log(remove_duplicates([2, 3, 3, 3, 6, 9, 9]));