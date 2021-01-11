//https://leetcode.com/problems/word-search/
function exist(board: string[][], word: string): boolean {
  if (board.length === 0 || word.length === 0) return false;

  function dfs(x: number, y: number, len: number): boolean {
    if (word.length === len) return true;
    if (x < 0 || x >= board.length || board[x][y] !== word[len]) return false;

    board[x][y] = "";
    const result =
      dfs(x + 1, y, len + 1) ||
      dfs(x - 1, y, len + 1) ||
      dfs(x, y + 1, len + 1) ||
      dfs(x, y - 1, len + 1);
    board[x][y] = word[len];
    return result;
  }

  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[0].length; y++) {
      if (board[x][y] === word[0] && dfs(x, y, 0)) return true;
    }
  }
  return false;
}
