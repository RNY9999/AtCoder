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
  const S: string = lines[0];

  const match_str_length: number[] = [];

  for (let i = 0; i < S.length; i++) {
    if (S[i] === 'C') {
      const c_str_length = Math.min(i - 0, S.length - 1 - i) * 2 + 1;
      match_str_length.push(c_str_length);
    }
  }

  let answer = 0;

  match_str_length.forEach((num) => {
    answer += (num + 1) / 2;
  })

  console.log(answer);
};