def centered_average(nums):
    nums.sort() 
    sum_except_extremes = sum(nums[1:-1]) 
    count_except_extremes = len(nums) - 2
    return sum_except_extremes // count_except_extremes 