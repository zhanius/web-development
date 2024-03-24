def sum13(nums):
  sum=0
  i=0
  while i < len(nums):
    if 13 == nums[i]:
      i+=2
    else:
      sum+=nums[i]
      i+=1
  return sum
