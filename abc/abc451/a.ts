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

  if (S.length % 5 === 0) {
    console.log('Yes');
  } else {
    console.log('No');
  };
};