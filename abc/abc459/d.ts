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
  const T = Number(lines[0]);
  for (let i = 1; i <= T; i++) {
    let S = lines[i];

    const alp = new Array(26).fill(0);

    for (const s of S) {
      const charNum = s.charCodeAt(0) - 'a'.charCodeAt(0);
      alp[charNum]++;
    }
    const max = Math.max(...alp);
    const half = S.length % 2 === 1 ? (S.length + 1) / 2 : S.length / 2;

    if (max > half) {
      console.log('No');
    } else {
      console.log('Yes');
      let result = new Array(S.length).fill('0');
      const chars: number[][] = [];
      alp.forEach((v, i) => {
        chars.push([i, v]);
      })
      chars.sort((a, b) => b[1] - a[1]);
      let head = 0;
      for (const char of chars) {
        const str = String.fromCharCode(char[0] + 'a'.charCodeAt(0));
        let cnt = char[1];
        for (let i = 0; i < cnt; i++) {
          result[head] = str;
          
          if (head + 2 >= result.length) {
            head = 1;
          } else {
            head += 2;
          }
        };
      }
      console.log(result.join(''));
    }
  }
};