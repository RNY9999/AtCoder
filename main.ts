import * as readline from 'node:readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines: string[] = [];

rl.on('line', (line) => {
  lines.push(line);
});

rl.on('close', () => {
  solution();
});

const solution = () => {
  const X = Number(lines[0]);
  const Q = Number(lines[1]);

  const left = new MinHeap(); // MaxHeap代用
  const right = new MinHeap(); // MinHeap
  
  left.push(X * -1);

  for (let i = 2; i < 2 + Q; i++) {
    const [A, B] = lines[i].split(' ').map(Number);

    const center = left.peek()! * -1; // 中央値

    // A, Bどっちも center より大きい場合 => 中央値が変わる
    if (A >= center && B >= center) {
      right.push(A);
      right.push(B);
      const toLeft = right.pop()!;
      left.push(toLeft * -1);
      console.log(left.peek()! * -1);
    }

    // A, B どっちも center より小さい場合 => 中央値が変わる
    if (A < center && B < center) {
      left.push(A * -1);
      left.push(B * -1);
      const toRight = left.pop()!;
      right.push(toRight * -1);
      console.log(left.peek()! * -1);
    }

    // A, B が の片方は center より大きい, 片方は center より小さい場合
    if(
      (A >= center && B < center) ||
      (A < center && B >= center)
    ) {
      const toRight = Math.max(A, B);
      const toLeft = Math.min(A, B);

      right.push(toRight);
      left.push(toLeft * -1);

      console.log(left.peek()! * -1)
    }
  }
};

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

    if (this.heap.length === 0) {
      return min;
    }

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