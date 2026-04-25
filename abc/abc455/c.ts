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
  const [N, K] = lines[0].split(' ').map(Number);
  const A = lines[1].split(' ').map(Number);

  const sameNumAddResult = new Map<number, number>();
  let result = 0; 

  A.forEach((number) => {
    sameNumAddResult.set(number, (sameNumAddResult.get(number) ?? 0) + number);
    result += number;
  })

  const sortedA: number[] = Array.from(sameNumAddResult.values());
  sortedA.sort((a, b) => b - a);

  for (let i = 0; i < K; i++) {
    result -= sortedA.shift()!;
    if (result <= 0) {
      result = 0;
      break;
    }
  }

  console.log(result);
};