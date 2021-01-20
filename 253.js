// Input: intervals = [[0, 30], [5, 10], [15, 20]]
// Output: 2

// Input: intervals = [[0, 30], [5, 10], [6, 35], [15, 20]]
// Output: 3

// Input: intervals = [[0, 30], [6, 35], [5, 10], [15, 20]]
// Output: 3

// Input: intervals = [[0, 30], [1, 2], [5, 10], [6, 35], [15, 20]]
// Output: 3

// minRooms
// currMeeting



var minMeetingRooms = function (intervals) {
  if (!intervals || intervals.length < 1) {
    return 0;
  }
  let rooms = 0;
  let end = 0;

  // const start = [...intervals].sort((a, b) => a[0] - b[0])
  // const end = [...intervals].sort((a, b) => a[1] - b[1])

  const starts = intervals.map(a => a[0]).sort((a, b) => a - b);
  const ends = intervals.map(a => a[1]).sort((a, b) => a - b);
  console.log(starts);
  console.log(ends);

  for (let i = 0; i < intervals.length; i++) {
    if (starts[i] < ends[end]) {
      rooms++;
    } else {
      end++;
    }
  }
  return rooms;


  // intervals.sort((a, b) => a[0] - b[0]);
  // console.log(intervals);
  // let minEndTime = intervals[0][1];
  // let res = 1;

  // for (let i = 1; i < intervals.length; i++) {
  //   let currMeeting = intervals[i];
  //   console.log(currMeeting, minEndTime);
  //   if (currMeeting[0] < minEndTime) {
  //     res++;
  //     if (currMeeting[1] < minEndTime) {
  //       minEndTime = currMeeting[1];
  //     }
  //   } else {
  //     if (currMeeting[1] > minEndTime) {
  //       minEndTime = currMeeting[1];
  //     }
  //   }
  // }
  // return res;
};

// console.log(minMeetingRooms([[0, 30], [5, 10], [15, 20]]))
// console.log(minMeetingRooms([[0, 30], [5, 10], [6, 35], [15, 20]]))
// console.log(minMeetingRooms([[0, 30], [6, 35], [5, 10], [15, 20]]))
// console.log(minMeetingRooms([[0, 30], [1, 2], [5, 10], [6, 35], [15, 20]]))
console.log(minMeetingRooms([[2, 15], [36, 45], [9, 29], [16, 23], [4, 9]])) // 2