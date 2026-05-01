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
  const Q = Number(lines[0]);
  const tree: number[] = [];
  for (let i = 0; i <= Q; i++) {
    const [q, h] = lines[i].split(' ').map(Number);

    if (q === 1) {
      tree.push(h);
      console.log(tree.length);
    }

    if (q === 2) {
      const filteredTree = tree.filter((t) => t >= h);
      console.log(filteredTree.length);
    }
  }
};