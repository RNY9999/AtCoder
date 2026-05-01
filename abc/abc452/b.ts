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

  const result = Array.from({ length: H }, () => new Array(W).fill('.'));

  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      if (i === 0 || i === H - 1 || j === 0 || j === W - 1) {
        result[i][j] = '#';
      }
    }
  }

  result.forEach((record) => {
    console.log(record.join(''));
  });
};