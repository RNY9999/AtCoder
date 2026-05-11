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
  const C: number[][] = [];

  for (let i = 1; i < N; i++) {
    C.push(lines[i].split(' ').map(Number));
  }

  let result = 'No';
  for (let a = 0; a < N - 1; a++) {
    for (let b = 0; b < C[a].length; b++) {
      for (let c = b + 1; c < C[a].length; c++) {
        const cost_ac = C[a][c];
        const cost_ab = C[a][b];
        const cost_bc = C[a + b + 1][c - (b + 1)]

        if (cost_ac > cost_ab + cost_bc) {
          result = 'Yes';
        }
      }
    }
  }
  console.log(result);
};