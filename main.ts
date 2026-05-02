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
  const S = lines[0];
  const divineNumber = 998244353;

  let dpA = 0;
  let dpB = 0;
  let dpC = 0;

  for (const char of S) {
    if (char === 'a') {
      dpA += 1 + dpB + dpC;
    }
    if (char === 'b') {
      dpB += 1 + dpA + dpC
    }
    if (char === 'c') {
      dpC += 1 + dpA + dpB
    }
  }

  const result = (dpA + dpB + dpC) % divineNumber;
  console.log(result);
};