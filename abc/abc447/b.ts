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
  const S: string[] = lines[0].split('');
  const alphabet = new Array(26).fill(0);

  for (const char of S) {
    const charIdx = char.charCodeAt(0) - 'a'.charCodeAt(0);
    alphabet[charIdx]++;
  }

  const maxChar = Math.max(...alphabet);
  const deleteChars: string[] = [];

  alphabet.forEach((cnt, i) => {
    if (cnt === maxChar) {
      const deleteChar = String.fromCharCode(i + 'a'.charCodeAt(0));
      deleteChars.push(deleteChar);
    }
  });

  const answer: string[] = [];
  for (const char of S) {
    if (!deleteChars.includes(char)) {
      answer.push(char);
    }
  }

  console.log(answer.join(''));
};