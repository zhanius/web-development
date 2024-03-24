sum = 0
a = int(input())
val = 1
for i in format(a)[::-1]:
    sum += int(i) * val
    val *= 2
print(sum)