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
  const [N, Q]: number[] = lines[0].split(' ').map(Number);

  const box = new Array(N+1).fill(0);
  const mapX = new Map<number, number>();
  mapX.set(0, N);
  let offset = 0;
  for (let i = 1; i <= Q; i++) {
     const [q, num] = lines[i].split(' ').map(Number);

     if (q === 1) {
      const x = num;
      const nowHeight = box[x];
      const newHeight = box[x] + 1;
      box[x] += 1;

      mapX.set(newHeight, mapX.get(newHeight) === undefined ? 1 : mapX.get(newHeight)! + 1);
      mapX.set(nowHeight, mapX.get(nowHeight)! - 1);

      if (mapX.get(0+offset) === 0) {
        offset++;
      }
     }

     if (q === 2) {
      const y = num;
      let result = 0;

      for (const key of mapX.keys()) {
        if (key - offset >= y) {
          result += mapX.get(key)!;
        }
      }

      console.log(result);
     }
  }
};