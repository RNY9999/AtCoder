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
  const result: number[] = [];

  for (let i = N; i > 0; i--) {
    result.push(i);
  }

  console.log(result.join(','));
};