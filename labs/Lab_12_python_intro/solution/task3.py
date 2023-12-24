from collections import Counter
import string

def histo(text):
    amount = Counter(text)
    symb_count = [(char, amount[char]) for char in amount if char not in string.whitespace]
    symb_count.sort(key=lambda x: ord(x[0]))

    max_count = max(symb_count, key=lambda x: x[1])[1] if symb_count else 0

    for i in range(max_count, 0, -1):
        for char, count in symb_count:
            if count >= i:
                print('#', end='')
            else:
                print(' ', end='')
        print()

    for char, _ in symb_count:
        print(char, end='')
    print()

file_test = './input.txt'
with open(file_test, 'r') as file:
    text = file.read().replace('\n', '')

histo(text)

##Не поняла как засунуть это в сложность O(N*log(N))
##(Woman moment  (⊙_⊙;)  ️)

##(Woman moment x2 хотела сделать красиво отдельно столбцы, чтоб было видно, но ошибку осознала и исправила)