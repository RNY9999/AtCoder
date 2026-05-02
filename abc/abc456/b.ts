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
  const dice_1 = lines[0].split(' ').map(Number);
  const dice_2 = lines[1].split(' ').map(Number);
  const dice_3 = lines[2].split(' ').map(Number);

  let result = 0;

  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      for (let k = 0; k < 6; k++) {
        const dice = [dice_1[i], dice_2[j], dice_3[k]];
        if (dice.includes(4) && dice.includes(5) && dice.includes(6)) {
          result++
        }
      }
    }
  }

  console.log(result / (6*6*6))
};