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
  const [T, X] = lines[0].split(' ').map(Number);
  const A = lines[1].split(' ').map(Number);

  let saveValue = A[0];
  console.log('0 ' + saveValue);

  for (let i = 1; i <= T; i++) {
    const gap = Math.abs(A[i] - saveValue);
    if (gap >= X) {
      saveValue = A[i];
      console.log(`${i} ${A[i]}`);
    }
  }
};