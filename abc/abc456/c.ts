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

  let count = 0;
  let checkPoint = 0;

  for (let i: number = 0; i < S.length; i++) {
    if (i !== 0) {
      if (S[i] === S[i - 1]) {
        const N = ((i - 1) - checkPoint) + 1;
        checkPoint = i;
        count += N * (N + 1) / 2;
      }
    }
  }

  const N = ((S.length - 1) - checkPoint) + 1;
  count = (count + (N * (N + 1)) / 2) % divineNumber;

  const result = count % divineNumber;
  console.log(result);
};