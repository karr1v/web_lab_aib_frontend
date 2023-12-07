n, m = map(int, input().split())
w = []
for i in range(n):
    w.append([0] * m)
w[0][0] = 1
for i in range(1, n):
    for j in range(1, m):
        w[i][j] = w[i-2][j-1] + w[i-1][j-2]
print(w[-1][-1])
