n = int(input())
arr = input().split(" ")
ans = 0
for i in range(1, n):
    if (int(arr[i]) > int(arr[i-1])) and (int(arr[i]) > int(arr[i+1])):
        ans+=1
print(ans)
