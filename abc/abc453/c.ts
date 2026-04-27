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
  const N = Number(lines[0])
  const L = lines[1].split(' ').map((l) => Number(l) * 2);

  let dp = new Map<number, number>();
  dp.set(1, 0); // 初期化

  for (let i = 0; i < N; i++) {
    const newDp = new Map<number, number>();
    const positions = Array.from(dp.keys());

    positions.forEach((position) => {
      // 左に移動
      const left = position - L[i];
      if (left * position < 0) {
        newDp.set(left, Math.max(dp.get(position)! + 1, (newDp.has(left) ? newDp.get(left)! : 0)));
      } else {
        newDp.set(left, Math.max(dp.get(position)!, (newDp.has(left) ? newDp.get(left)! : 0)));
      }
      // 右に移動
      const right = position + L[i];
      if (right * position < 0) {
        newDp.set(right, Math.max(dp.get(position)! + 1, (newDp.has(right) ? newDp.get(right)! : 0)));
      } else {
        newDp.set(right, Math.max(dp.get(position)!, (newDp.has(right) ? newDp.get(right)! : 0)));
      }
    })

    dp = newDp;
  }

  let ans = 0;
  for (const value of dp.values()) {
    if (value > ans) ans = value;
  }

  console.log(ans);
};