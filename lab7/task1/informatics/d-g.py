n = int(input())
arr = input().split(" ")
ans = 0

arr = [int(x) for x in arr]

for i in range(n // 2):
    arr[i], arr[n-i-1] = arr[n-i-1], arr[i]


for i in arr:
    print(int(i), end=" ")