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
  const [N, Q] = lines[0].split(' ').map(Number);
  const A: number[] = lines[1].split(' ').map(Number);

  const sortedA = A
    .map((value, index) => ({ value, index }))
    .sort((a, b) => a.value - b.value);

  const answers: number[] = [];

  for (let i = 3; i < Q * 2 + 3; i += 2) {
    const B = lines[i].split(' ').map((input) => Number(input) - 1);
    const removed = new Set(B);

    for (const obj of sortedA) {
      if (!removed.has(obj.index)) {
        answers.push(obj.value);
        break;
      }
    }
  }

  console.log(answers.join('\n'));
};