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
  const [N, W] = lines[0].split(' ').map(Number);
  let dp = new Map<number, number>() // <w, v>

  for (let i = 1; i <= N; i++) {
    const newDp = new Map<number, number>();
    const [w, v] = lines[i].split(' ').map(Number);
    const positions = Array.from(dp.keys());

    if (i > 1) {
      positions.forEach((position) => {
        // i をナップザックに入れる（まだアイテムが入ってない）
        if (w <= W) {
          newDp.set(w, Math.max(v, newDp.get(w) ? newDp.get(w)! : 0));
        }

        // i をナップザックに入れる（すでにアイテムがある状態で追加）
        const newW = position + w;
        const newV = dp.get(position)! + v;

        if (newW <= W) {
          newDp.set(newW, Math.max(newV, newDp.get(newW) ? newDp.get(newW)! : 0));
        }

        // i をナップザックに入れない
        const notInW = position;
        const notInV = dp.get(position)!;

        newDp.set(notInW, Math.max(notInV, newDp.get(notInW) ? newDp.get(notInW)! : 0));
      })
    } else { // 初回なので newDp への登録のみ
      if (w <= W) {
        newDp.set(w, v);
      }
    }
    dp = newDp;
  }

  let result = 0;
  const values = Array.from(dp.values());
  values.forEach((value) => {
    result = Math.max(value, result);
  });

  console.log(result);
};