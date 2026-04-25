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

  const next = new Array(N + 1).fill(-1); // 次のカード 初期値は全員 -1 = top
  const prev = new Array(N + 1).fill(-1); // 前のカード 初期値は全員 -1 = under

  for (let i = 1; i <= Q; i++) {
    const [C, P] = lines[i].split(' ').map(Number);
    // Cの元下のカードはtopになる
    if (prev[C] !== -1) next[prev[C]] = -1;
    // Cの前のカードは P になる
    prev[C] = P;
    // P の次のカードは C になる
    next[P] = C;
  }

  const result = new Array(N).fill(0);

  // top から bottom までの件数を数える
  for (let i = 1; i <= N; i++) {
    // -1以外はTOPじゃないので continue
    if (next[i] !== -1) continue;

    let count = 1;
    let current = i;

    // bottom = -1 まで探検
    while (prev[current] !== -1) {
      count++;
      current = prev[current];
    }

    result[current-1] = count;
  }

  console.log(result.join(' '));
};