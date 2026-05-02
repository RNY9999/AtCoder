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
      const p = (i-1) >> 1;
      if (this.heap[p] <= this.heap[i]) break;

      [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]];
      i = p;  
    }
  }

  pop(): number | undefined {
    if (this.heap.length === 0) return undefined;

    const min = this.heap[0];
    const last = this.heap.pop();

    if (this.heap.length > 0) {
      
    }
  }
}