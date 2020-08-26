# Given an array nums of 0s and 1s and an integer k, return True if all 1's are at least k places away from each other, otherwise return False.

# Input: nums = [1, 0, 0, 0, 1, 0, 0, 1], k = 2
# Output: true
# Explanation: Each of the 1s are at least 2 places away from each other.

# Input: nums = [1, 0, 0, 1, 0, 1], k = 2
# Output: false
# Explanation: The second 1 and third 1 are only one apart from each other.

# Input: nums = [1,1,1,1,1], k = 0
# Output: true

# Input: nums = [0, 1, 0, 1], k = 1
# Output: true

class Solution:
    def kLengthApart(self, nums: List[int], k: int) -> bool:
      track = 0
      for x in range(len(nums)):
        if track == 0 and nums[x] == 1:
          track = x
        elif nums[x] == 1:
          if x - track < k:
            return False
          else:
            track = x
      return True