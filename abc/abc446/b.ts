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
  const [N, M] = lines[0].split(' ').map(Number);
  const juices = new Array(M+1).fill(0);
  juices.forEach((j, idx) => {
    juices[idx] = idx;
  });

  for (let i = 1; i <= N; i++) {
    const L = Number(lines[(i * 2) - 1]);
    const X: number[] = lines[i * 2].split(' ').map(Number);

    let drink = 0;
    let isDrink = false;

    X.forEach((x) => {
      juices.forEach((j, idx) => {
        if (x === j && !isDrink) {
          drink = juices[idx];
          isDrink = true;
          juices[idx] = 0;
        }
      })
    });

    console.log(drink);
  }
};