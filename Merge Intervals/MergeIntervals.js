/*
Given a list of intervals, merge all the overlapping intervals to produce a list that has only mutually exclusive intervals.

Example 1:

Intervals: [[1,4], [2,5], [7,9]]
Output: [[1,5], [7,9]]
Explanation: Since the first two intervals [1,4] and [2,5] overlap, we merged them into
one [1,5].

Intervals: [[6,7], [2,4], [5,9]]
Output: [[2,4], [5,9]]
Explanation: Since the intervals [6,7] and [5,9] overlap, we merged them into one [5,9].

Example 3:

Intervals: [[1,4], [2,6], [3,5]]
Output: [[1,6]]
Explanation: Since all the given intervals overlap, we merged them into one.

*/

// class Interval {
//   constructor(start, end) {
//     this.start = start;
//     this.end = end;
//   }

//   print_interval() {
//     process.stdout.write(`[${this.start}, ${this.end}]`);
//   }
// }

// function merge(intervals) {
//   if (intervals.length < 2) {
//     return intervals;
//   }
//   intervals.sort((a, b) => a.start - b.start)

//   const mergedIntervals = [];
//   let start = intervals[0].start;
//   let end = intervals[0].end;
//   for (let i = 0; i < intervals.length; i++) {
//     const interval = intervals[i];
//     if (interval.start <= end) {
//       end = Math.max(interval.end, end);
//     } else {
//       mergedIntervals.push(new Interval(start, end));
//       start = interval.start;
//       end = interval.end;
//     }
//   }
// }

var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  const result = [intervals[0]]; //result array which will return merged intervals
  for (let i = 0; i < intervals.length; i++) { //iterate over intervals array
    let e1 = result[result.length - 1][1]; //the end that will be compared to the next interval
    let s2 = intervals[i][0]; //the start of the current interval in the intervals array
    let e2 = intervals[i][1]; //the end of the current interval in the intervals array
    if (e1 >= s2) {
      result[result.length - 1][1] = Math.max(e1, e2); //if the end is bigger than the start this determines whether the current result interval consumes the entire current interval in the intervals array or if it takes on the next end
    } else {
      result.push(intervals[i]) //if the interval doesnt over lap, add it to results array and start the process again with a new E1
    }
  }
  return result;
}