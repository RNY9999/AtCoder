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
  const [N, K] = lines[0].split(' ').map(Number);
  const h = lines[1].split(' ').map(Number);

  const dp = new Array(N).fill(Infinity);
  dp[0] = 0;

  for (let i = 0; i < N; i++) {
    const jump = Math.min(K, (N - (i + 1)));

    for (let j = 1; j <= jump; j++) {
      const cost = dp[i] + Math.abs(h[i] - h[i + j]);
      dp[i + j] = Math.min(cost, dp[i + j]);
    }
  }

  console.log(dp[N-1]);
};