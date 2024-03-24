def sum67(nums):
    sum = 0
    is6 = False

    for num in nums:
        if num == 6:
            is6 = True
        elif num == 7 and is6:
            is6 = False
        elif not is6:
            sum += num
    
    return sum
