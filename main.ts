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
  const T = Number(lines[0]);
  for (let i = 1; i <= T; i++) {
    const [N, D] = lines[(i * 3) - 2].split(' ').map(Number);
    const A = lines[(i * 3) - 1].split(' ').map(Number);
    const B = lines[i * 3].split(' ').map(Number);

    const queue: {day: number, count: number}[] = [];

    let head = 0; // 現在日 - D <= head <= 現在日 である必要がある
    A.forEach((a, idx) => {
      queue.push({day: idx, count: a});
      const useEgg = B[idx];

      let restEgg = queue[idx].count - useEgg;

      while (restEgg < 0) {
        
      }

    });
  }
};