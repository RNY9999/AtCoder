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
  const S: string[] = lines[0].split('');
  const T: string[] = lines[1].split('');

  const dp: number[][] = Array.from({ length: S.length + 1 }, () => {
    return new Array(T.length + 1).fill(0);
  })

  S.forEach((s, i) => {
    T.forEach((t, j) => {
      if (s === t) {
        dp[i + 1][j + 1] = dp[i][j] + 1;
      } else {
        dp[i + 1][j + 1] = Math.max(dp[i][j + 1], dp[i + 1][j]);
      }
    })
  })

  let result = '';
  let i = S.length;
  let j = T.length;

  while (i > 0 && j > 0) {
    if (S[i - 1] === T[j - 1]) {
      result = S[i - 1] + result;
      i--;
      j--;
    } else if (dp[i - 1][j] >= dp[i][j - 1]) {
      i--;
    } else {
      j--;
    }
  }

  console.log(result);
};