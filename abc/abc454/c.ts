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
  const [N, M] = lines[0].split(' ').map(Number);

  // N+1個の配列を作成: O(N)
  const items: number[][] = new Array(N+1);

  // N+1回for文* O(N)
  for (let i = 0; i <= N; i++) {
    items[i] = []; // O(1)
  }

  // M+1回for文* O(M)
  for (let i = 1; i <= M; i++) {
    const [A, B] = lines[i].split(' ').map(Number);// O(1)
    items[A].push(B);// O(1)
  }

  // N+1個の配列を作成: O(N)
  const isVisited = new Array(N+1).fill(false);

  const queue: number[] = [1];// O(1)
  let head = 0;
  let result = 0;

  isVisited[1] = true;// O(1)

  while (head < queue.length) {
    const item: number = queue[head]; // O(1)
    result++; // O(1)
    head++// O(1)
    
    // items[item]の要素数に依存
    // 最大でも M 回の計算となるので O(M)
    items[item].forEach((itemNum) => {
      if (!isVisited[itemNum]) {// O(1)
        queue.push(itemNum);// O(1)
        isVisited[itemNum] = true;// O(1)
      }
    })
  }

  console.log(result);// O(1)

  // 全体の計算量としては O(N+M)のはず
};