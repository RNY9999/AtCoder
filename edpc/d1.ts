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
  const [N, W] = lines[0].split(' ').map(Number);
  const dp = new Array(W+1).fill(0);

  for (let i = 1; i <= N; i++) {
    const [w, v] = lines[i].split(' ').map(Number);

    for (let weight = W; weight >=  w; weight--) {
      dp[weight] = Math.max(dp[weight], dp[weight - w] + v);
    }
  }

  console.log(Math.max(...dp));
};