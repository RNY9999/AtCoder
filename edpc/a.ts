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
  const N = Number(lines[0]);
  const h = lines[1].split(' ').map(Number);

  let dp = new Array(N).fill(Infinity);
  dp[0] = 0;

  for (let i = 0; i < N - 1; i++) {
    // i + 1
    if (i + 1 <= N - 1) {
      const cost = dp[i] + Math.abs(h[i] - h[i + 1]);
      dp[i + 1] = Math.min(cost, dp[i + 1]);
    }

    // i + 2
    if (i + 2 <= N - 1) {
      const cost = dp[i] + Math.abs(h[i] - h[i + 2]);
      dp[i + 2] = Math.min(cost, dp[i + 2]);
    }
  }

  console.log(dp[N - 1]);
};