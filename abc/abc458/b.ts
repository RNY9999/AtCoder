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
  const [H, W] = lines[0].split(' ').map(Number);

  const grid = Array.from({length: H}, () => new Array(W).fill(0));

  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      const top = i - 1 >= 0 ? 1 : 0;
      const right = j + 1 < W ? 1 : 0;
      const bottom = i + 1 < H ? 1 : 0;
      const left = j - 1 >= 0 ? 1 : 0;

      grid[i][j] = top + right + bottom + left;
    }
  }

  grid.forEach((rec) => {
    console.log(rec.join(' '));
  })
};