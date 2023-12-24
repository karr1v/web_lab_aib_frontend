from collections import Counter
import string

def histo(text):
    amount = Counter(text)
    symbCount = [(char, amount[char]) for char in amount if char not in string.whitespace]
    symbCount.sort(key=lambda x: ord(x[0]))

    maxCount = max(symbCount, key=lambda x: x[1])[1] if symbCount else 0

    for i in range(maxCount, 0, -1):
        for char, count in symbCount:
            if count >= i:
                print('#', end=' ')
            else:
                print(' ', end=' ')
        print()

    for char, _ in symbCount:
        print(char, end=' ')
    print()

fileTest = './test.txt'
with open(fileTest, 'r') as file:
    text = file.read().replace('\n', ' ')

histo(text)
##Не поняла как засунуть это в сложность O(N*log(N))
##(Woman moment  (⊙_⊙;)  ️)