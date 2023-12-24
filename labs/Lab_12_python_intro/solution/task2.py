import heapq

def fMed(n, x):
    maxH, minH = [], []
    result = 0

    for i in range(n):
        heapq.heappush(maxH, -x[i])
        heapq.heappush(minH, -heapq.heappop(maxH))

        if len(minH) > len(maxH):
            heapq.heappush(maxH, -heapq.heappop(minH))
        result -= maxH[0]

    return result

def main():
    N = int(input())
    X = list(map(int, input().split()))
    print(fMed(N, X))

if __name__ == "__main__":
    main()
