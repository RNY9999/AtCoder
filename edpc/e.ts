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

  // Nの最大値100 * vの最大値10^3のDPにする
  const dp = new Array(100001).fill(Infinity);
  const [w, v] = lines[1].split(' ').map(Number);
  dp[0] = 0;
  dp[v] = w;

  for (let i = 2; i <= N; i++) {
    const [w, v] = lines[i].split(' ').map(Number);

    for (let value = 100000; value >= v; value--) {
      dp[value] = Math.min(dp[value], dp[value - v] + w);
    }
  }

  let result = 0;

  dp.forEach((resultW, index) => {
    if (resultW <= W && index > result) {
      result = index;
    }
  })

  console.log(result);
};