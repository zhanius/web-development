a = int(input())
b = int(input())

for x in range(a, b+1):
    if(x == x**0.5 * x**0.5):
        print(x)