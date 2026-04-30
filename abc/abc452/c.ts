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
  const N = Number(lines[0]);
  const can: Set<string>[][] = Array.from({ length: 11 }, () => Array.from({length: 11}, () => new Set<string>()));

  const born: number[][] = Array.from({ length: N + 1 }, () => []);
  for (let i = 1; i <= N; i++) {
    const [A, B] = lines[i].split(' ').map(Number);
    born[i] = [A, B];
  }

  const M = Number(lines[N + 1]);
  const S: string[] = [];

  for (let i = N + 2; i < M + N + 2; i++) {
    const str = lines[i];
    S.push(str);

    for (let j = 1; j <= N; j++) {
      if (str.length === born[j][0]) {
        can[born[j][0]][born[j][1]].add(str[born[j][1] - 1]);
      }
    }
  }

  S.forEach((spine) => {
    if (spine.length === N) {
      let result = 'Yes';
      for (let i = 1; i <= N; i++) {
        const spineChar = spine[i - 1];
        const [a, b] = born[i];

        if (!can[a][b].has(spineChar)) {
          result = 'No';
        }
      }
      console.log(result);
    } else {
      console.log('No');
    }
  })
};