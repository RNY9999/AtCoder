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
  const [aInit, bInit, cInit] = lines[1].split(' ').map(Number); 

  let dp = [aInit, bInit, cInit];

  for (let i = 2; i <= N; i++) {
    const newDp = [0, 0, 0];
    const [a, b, c] = lines[i].split(' ').map(Number);

    newDp[0] = Math.max(dp[1]+a, dp[2]+a);
    newDp[1] = Math.max(dp[0]+b, dp[2]+b);
    newDp[2] = Math.max(dp[0]+c, dp[1]+c);

    dp = newDp;
  }

  console.log(Math.max(...dp));
};