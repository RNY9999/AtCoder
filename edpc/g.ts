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

  const graph: number[][] = Array.from({ length: N + 1 }, () => []);
  const indeg = new Array(N + 1).fill(0);

  for (let i = 1; i <= M; i++) {
    const [x, y] = lines[i].split(' ').map(Number);
    graph[x].push(y);
    indeg[y]++;
  }

  const queue = [];
  for (let i = 1; i <= N; i++) {
    if (indeg[i] === 0) {
      queue.push(i);
    }
  }

  const topo: number[] = [];

  while (queue.length > 0) {
    const v: number = queue.shift()!;
    topo.push(v);

    for (const nv of graph[v]) {
      indeg[nv]--;
      if (indeg[nv] === 0) {
        queue.push(nv);
      }
    }
  }

  const dp = new Array(N + 1).fill(0);

  for (const v of topo) {
    for (const nv of graph[v]) {
      dp[nv] = Math.max(dp[nv], dp[v] + 1);
    }
  }

  console.log(Math.max(...dp));
};