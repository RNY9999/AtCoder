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
  const S = lines[1].split(' ');

  let result = '';

  for (const str of S) {
    const top = str[0];

    switch (top) {
      case 'a':
      case 'b':
      case 'c':
        result += '2';
        break;
      case 'd':
      case 'e':
      case 'f':
        result += '3';
        break;
      case 'g':
      case 'h':
      case 'i':
        result += '4';
        break;
      case 'j':
      case 'k':
      case 'l':
        result += '5';
        break;
      case 'm':
      case 'n':
      case 'o':
        result += '6';
        break;
      case 'p':
      case 'q':
      case 'r':
      case 's':
        result += '7';
        break;
      case 't':
      case 'u':
      case 'v':
        result += '8';
        break;
      case 'w':
      case 'x':
      case 'y':
      case 'z':
        result += '9';
        break;
    }
  }

  console.log(result);
};