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
  const A: number[][] = [];
  for (let i = 1; i <= N; i++) {
    const insertA = lines[i].split(' ').slice(1).map(Number);
    A.push(insertA);
  }

  const C = lines[N + 1].split(' ').map(Number);
  const B: number[] = [];

  C.forEach((cVal, index) => {
    let beforeValueOfB = 0;
    if (index > 0) {
      beforeValueOfB = B[index - 1];
    }
    let range = (A[index].length * cVal) + beforeValueOfB;

    if (index === 0) range--;
    B.push(range);
  });

  B.forEach((bVal, index) => {
    if (index > 0) {
      if (bVal >= K - 1 && K - 1 > B[index-1]) {
        const ansIndex = (((K - 1) - (B[index-1])) % A[index].length) - 1;
        if (ansIndex < 0) {
          console.log(A[index][A[index].length - 1]);
        } else {
          console.log(A[index][ansIndex]);
        }
      }
    } else {
      if (bVal >= K - 1) {
        const ansIndex = (K % A[index].length) - 1;
        if (ansIndex < 0) {
          console.log(A[index][A[index].length - 1]);
        } else {
          console.log(A[index][ansIndex]);
        }
      }
    }
  })
};