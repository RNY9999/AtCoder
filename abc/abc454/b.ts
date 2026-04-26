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

  const F = lines[1].split(' ').map(Number);
  const filteredF = Array.from(new Set(F));

  if (filteredF.length >= N) {
    console.log('Yes');
  } else {
    console.log('No');
  }

  if (filteredF.length === M) {
    console.log('Yes');
  } else {
    console.log('No');
  }
};