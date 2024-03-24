n = int(input())
a = input().split(" ")
ans = 0
for i in range(1, n):
    if int(a[i])*int(a[i-1]) > 0:
        print("Yes")
        break
else:
    print("No")
