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
  const [N, X] = lines[0].split(' ').map(Number);
  const A = lines[1].split(' ').map(Number);

  let cmp = X;

  for (const a of A) {
    if (a < cmp) {
      cmp = a;
      console.log(1);
    } else {
      console.log(0);
    }
  }


};