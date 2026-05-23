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
  const X = Number(lines[0]);

  let result = '';
  const str = 'HelloWorld';

  for (let i = 0; i < str.length; i++) {
    if (i !== X - 1) {
      result += str[i];
    };
  };

  console.log(result);
};