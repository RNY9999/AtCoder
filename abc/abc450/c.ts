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
  const graph: ('#' | '.' | 'c')[][] = [];

  for (let i = 1; i <= H; i++) {
    graph.push(lines[i].split('') as ('#' | '.')[])
  }

  let count = 0;

  for (let i = 1; i < H - 1; i++) {
    for (let j = 1; j < W - 1; j++) {
      if (graph[i][j] === '.') {
        let flag = true;
        const points: number[][] = [[i, j]];
        let head = 0;

        while (points.length > head) {
          const [k, l] = points[head];
          graph[k][l] = 'c';

          if (k === 0 || l === 0 || k === H - 1 || l === W - 1) {
            flag = false;
          }

          let left = graph[k === 0 ? 0 : k - 1][l];
          let right = graph[k === H - 1 ? H - 1 : k + 1][l];
          let top = graph[k][l === 0 ? 0 : l - 1];
          let bottom = graph[k][l === W - 1 ? W - 1 : l + 1];

          if (left === '.') {
            graph[k - 1][l] = 'c'
            points.push([k - 1, l]);
          }
          if (right === '.') {
            graph[k + 1][l] = 'c'
            points.push([k + 1, l]);
          }
          if (top === '.') {
            graph[k][l - 1] = 'c'
            points.push([k, l - 1]);
          }
          if (bottom === '.') {
            graph[k][l + 1] = 'c'
            points.push([k, l + 1]);
          }

          head++;
        }

        if (flag) {
          count++
        }
      }
    }
  }

  console.log(count);
};