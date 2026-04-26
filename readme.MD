### 使用方法
1. `main.ts > solution` 内へ回答を記述
2. `npx run dev` で `main.ts` を実行
3. 正解したものに関しては `abc/abc123/a.ts`のようなファイルへコピペ
4. 次の問題も `main.ts` で回答する

### AtCoder with TS で気を付けること
1. 計算量を `~3*10^7`以内位だと2秒の実行制限に間に合いそう

### commit ルール
- Ratedコンテストに参加した場合: `git commit -m "[コンテスト名]: AC => [[ACした問題1], [ACした問題2], ...], WA => [[WAした問題1], [WAした問題2], ...], NT => [[NTの問題1], [NTの問題2], ...]"`

  ex: `git commit -m "abc123: AC => [a, b, c], WA => [d], NT => [e, f, g]"`

- Rated以外のコンテスト（練習など）: `git commit -m "[コンテスト名]（練習, 復習, etc...）: AC => [[ACした問題1], [ACした問題2], ...], WA => [[WAした問題1], [WAした問題2], ...], NT => [[NTの問題1], [NTの問題2], ...]"`

  ex: `git commit -m "abc123（練習）: AC => [a, b, c], WA => [d], NT => [e, f, g]"`