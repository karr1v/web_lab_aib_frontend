import heapq

def f_med(n, x):
    max_h, min_h = [], []
    result = 0

    for i in range(n):
        heapq.heappush(max_h, -x[i])
        heapq.heappush(min_h, -heapq.heappop(max_h))

        if len(min_h) > len(max_h):
            heapq.heappush(max_h, -heapq.heappop(min_h))

        result -= max_h[0]

    return result

def main():
    n = int(input())
    x = list(map(int, input().split()))
    print(f_med(n, x))

if __name__ == "__main__":
    main()