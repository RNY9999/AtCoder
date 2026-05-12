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
  const [N, L, R] = lines[0].split(' ').map(Number);
  const S = lines[1];

  const position: number[][] = Array.from({length: 26}, () => []);

  for (let i = 0; i < N; i++) {
    const index = S.charCodeAt(i) - 'a'.charCodeAt(0);
    position[index].push(i);
  }

  let answer = 0;

  for(const pos of position) {
    let left = 0;
    let right = 0;

    for (const i of pos) {
      while (left < pos.length && pos[left] - i < L) {
        left++;
      }
      while (right < pos.length && pos[right] - i <= R) {
        right++;
      }
      answer += right - left;
    }
  }
  console.log(answer);
};