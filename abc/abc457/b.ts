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
  const A = [];
  for (let i = 1; i <= N; i++) {
    const insertA = lines[i].split(' ').slice(1).map(Number);

    A.push(insertA);
  }

  const [X, Y] = lines[N+1].split(' ').map(Number);

  console.log(A[X-1][Y-1]);
};