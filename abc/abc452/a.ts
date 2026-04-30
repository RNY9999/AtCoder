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
  const [M, D] = lines[0].split(' ').map(Number);

  const gosekku = [
    [1, 7],
    [3, 3],
    [5, 5],
    [7, 7],
    [9, 9],
  ];

  let result = 'No';
  for (const MD of gosekku) {
    if (M === MD[0] && D === MD[1]) {
      result = 'Yes';
    }
  }

  console.log(result);
};