# Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.
# Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2.  
# Elements that don't appear in arr2 should be placed at the end of arr1 in ascending order.

# Input: arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], arr2 = [2, 1, 4, 3, 9, 6]
# Output: [2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19]

class Solution:
    def relativeSortArray(self, arr1: List[int], arr2: List[int]) -> List[int]:
      one_dict = {}
      two_dict = {}
      for x in arr2:
        two_dict[x] = [x]
      for x in arr1:
        if x in two_dict:
          two_dict[x] += [x]
        elif x in one_dict:
          one_dict[x] += [x]
        else:
          one_dict[x] = [x]
      one_sorted = sorted(list(one_dict.keys()))
      
      res = []
      for x in arr2:
        res += two_dict[x]
      for x in one_sorted:
        res += one_dict[x]
      
      return res
      
      