a = int(input())
sum = ''
for x in format(a)[::-1]:
    if(x != '0'):
        sum += x

print(sum)