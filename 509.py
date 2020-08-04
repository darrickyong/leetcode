# The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, 
# such that each number is the sum of the two preceding ones, starting from 0 and 1.

# Input: 2
# Output: 1
# Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

# Input: 3
# Output: 2
# Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.

# Input: 4
# Output: 3
# Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.


class Solution:
    def fib(self, N: int, memo={0: 0, 1: 1}) -> int:
      if N not in memo:
        x = Solution.fib(self, N-1, memo) + Solution.fib(self, N-2, memo)
        memo[N] = x

      return memo[N]
