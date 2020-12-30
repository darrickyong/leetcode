var maxWidthOfVerticalArea = function (points) {
  const copyPoints = [...points].sort((a, b) => a[1] > b[1]);
  let maxWidth = 0;
  for (let i = 1; i < copyPoints.length; i++) {
    let left = copyPoints[i - 1];
    let right = copyPoints[i];
    let diff = right[0] - left[0];

    maxWidth = Math.max(maxWidth, diff);
  }

  return maxWidth;
};

const points = [[8, 7], [9, 9], [7, 4], [9, 7]]
console.log(maxWidthOfVerticalArea(points));