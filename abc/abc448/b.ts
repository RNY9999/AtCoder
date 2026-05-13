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
  const C = lines[1].split(' ').map(Number);
  const beforeTotal = C.reduce((sum, elm) => { return sum + elm }, 0)
  for (let i = 2; i < N + 2; i++) {
    const [A, B]: number[] = lines[i].split(' ').map(Number);
    const idxA = A - 1;
    C[idxA] = Math.max(0, C[idxA] - B); 
  }

  const afterTotal = C.reduce((sum, elm) => sum + elm, 0);

  console.log(beforeTotal - afterTotal);
};