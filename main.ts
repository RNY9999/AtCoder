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
  const [N, KInput] = lines[0].split(' ').map(Number);
  let K = KInput - 1; // 0-indexed

  const A: number[][] = [];

  for (let i = 1; i <= N; i++) {
    A.push(lines[i].split(' ').slice(1).map(Number));
  };

  const C = lines[N+1].split(' ').map(Number);

  let total = 0;

  for (let i = 0; i < N; i++) {
    const blockLength = A[i].length * C[i];
    console.log(total + blockLength);
    if (K < total + blockLength) {
      const offset = K - total;
      const ansIndex = offset % A[i].length;
      console.log(A[i][ansIndex]);
      return;
    }

    total += blockLength;
  }
};