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
  const S = lines[0];
  const T = lines[1];

  let deleteA_S: string = '';
  let deleteA_T: string = '';

  const gapsA_S: number[] = [];
  const gapsA_T: number[] = [];

  let count_A_S: number = 0;
  let count_A_T: number = 0;

  for (const char of S) {
    if (char === 'A') {
      count_A_S++;
    } else {
      gapsA_S.push(count_A_S);
      deleteA_S += char;
      count_A_S = 0;
    }
  }
  gapsA_S.push(count_A_S);

  for (const char of T) {
    if (char === 'A') {
      count_A_T++;
    } else {
      gapsA_T.push(count_A_T);
      deleteA_T += char;
      count_A_T = 0;
    }
  }
  gapsA_T.push(count_A_T);

  if (deleteA_S !== deleteA_T) {
    return console.log(-1);
  }

  let answer = 0;

  gapsA_S.forEach((gap, idx) => {
    answer += Math.abs(gap - gapsA_T[idx]);
  })

  console.log(answer);
};