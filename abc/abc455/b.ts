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
  const grid = [];

  for (let i = 1; i <= H; i++) {
    grid.push(lines[i].split(''));
  }

  let result = 0;

  for (let h1 = 0; h1 < H; h1++) {
    for (let h2 = h1; h2 < H; h2++) {
      for (let w1 = 0; w1 < W; w1++) {
        for (let w2 = w1; w2 < W; w2++) {
          let isPointSymmetry = true
          for (let i = h1; i <= h2; i++) {
            for (let j = w1; j <= w2; j++) {
              if (grid[i][j] !== grid[h1+h2-i][w1+w2-j]) {
                isPointSymmetry = false;
              }
            }
          }
          if (isPointSymmetry) result++;
        }
      }
    }
  }

  console.log(result);
};