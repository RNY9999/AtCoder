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
  const X = Number(lines[0]);

  if (3 <= X && X <= 18) {
    console.log('Yes');
  } else {
    console.log('No');
  }
};