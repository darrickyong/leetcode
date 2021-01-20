// Given arr of meeting time intervals, where intervals[i] is an array where [start, end].
// Determine if person can attend all meetings. Return boolean.

// Input: intervals = [[0, 30], [5, 10], [15, 20]]
// Output: false

// Input: intervals = [[7, 10], [2, 4]]
// Input: intervals = [[2, 4], [7, 10]]
// Output: true

// Input: intervals = [[0, 4], [5, 10], [15, 20]] // true


// 0 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti < endi <= 106

const canAttendMeetings = (intervals) => {
  // sort intervals by start time
  intervals.sort((a, b) => a[0] - b[0]);
  
  for (let i = 1; i < intervals.length; i++) {
    let prevMeeting = intervals[i -1];
    let currMeeting = intervals[i];

    if (currMeeting[0] < prevMeeting[1]) {
      return false;
    }
  }

  return true;
}

const intervals = [[7, 10], [2, 4]];
console.log(canAttendMeetings(intervals));
console.log(canAttendMeetings([[0, 30], [5, 10], [15, 20]])); // false

