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
  const [N, M] = lines[0].split(' ').map(Number);
  if (N < M * 2 - 1) {
    console.log('No');
  } else {
    console.log('Yes');
  }
};