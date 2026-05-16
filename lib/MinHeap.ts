export class MinHeap {
  private heap: number[] = [];

  size(): number {
    return this.heap.length;
  }

  peek(): number | undefined {
    return this.heap[0];
  }

  push(value: number): void {
    this.heap.push(value);

    let i = this.heap.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (this.heap[p] <= this.heap[i]) break;

      [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]];
      i = p;
    }
  }

  pop(): number | undefined {
    if (this.heap.length === 0) return undefined;

    const min = this.heap[0];
    const last = this.heap.pop()!;

    // 最後の1個だった場合
    if (this.heap.length === 0) {
      return min;
    }

    // 根に最後の値を持ってくる
    this.heap[0] = last;

    let i = 0;

    while (true) {
      const left = i * 2 + 1;
      const right = i * 2 + 2;

      let smallest = i;

      if (
        left < this.heap.length &&
        this.heap[left] < this.heap[smallest]
      ) {
        smallest = left;
      }

      if (
        right < this.heap.length &&
        this.heap[right] < this.heap[smallest]
      ) {
        smallest = right;
      }

      // 既にheap条件を満たす
      if (smallest === i) break;

      [this.heap[i], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[i],
      ];

      i = smallest;
    }

    return min;
  }
}