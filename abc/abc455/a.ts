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
  const [A, B, C] = lines[0].split(' ').map(Number);

  if (A !== B && B === C) {
    console.log('Yes');
    return;
  };

  console.log('No');
};