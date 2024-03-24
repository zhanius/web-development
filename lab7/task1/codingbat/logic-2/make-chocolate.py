def make_chocolate(small, big, goal):
    max_big = min(big, goal // 5)
    
    remaining_goal = goal - (max_big * 5)
    
    if remaining_goal <= small:
        return remaining_goal
    
    return -1 