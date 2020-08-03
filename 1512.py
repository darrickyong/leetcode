# Given an array of integers nums.
# A pair (i,j) is called good if nums[i] == nums[j] and i < j.
# Return the number of good pairs.

# Input: nums = [1,2,3,1,1,3]
# Output: 4
# Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

# Input: nums = [1,1,1,1]
# Output: 6
# Explanation: Each pair in the array are good.

# Input: nums = [1,2,3]
# Output: 0

class Solution:
    def numIdenticalPairs(self, nums: List[int]) -> int:
        dict = {}
        res = 0
        for x in nums:
          if x in dict:
            res += dict[x]
            dict[x] += 1
          else:
            dict[x] = 1
        return res