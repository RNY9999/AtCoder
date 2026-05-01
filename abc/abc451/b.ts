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

  const results = new Array(M+1).fill(0);

  for (let i = 1; i <= N; i++) {
    const [A, B] = lines[i].split(' ').map(Number);
    results[A]--;
    results[B]++;
  }

  results.shift();

  results.forEach((result) => {
    console.log(result);
  });
};