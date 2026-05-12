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
  const [H, W, Q] = lines[0].split(' ').map(Number);

  let height = H;
  let width = W;

  for (let i = 1; i <= Q; i++) {
    const [query, num] = lines[i].split(' ').map(Number);

    if (query === 1) {
      console.log(num * width);
      height -= num;
    } 
    if (query === 2) {
      console.log(num * height);
      width -= num;
    }
  }
};