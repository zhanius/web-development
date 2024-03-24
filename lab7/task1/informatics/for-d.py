a = int(input())
b = int(input())
cnt = 0
for x in format(a):
    if(int(x) == b):
        cnt = cnt+1

print(cnt)