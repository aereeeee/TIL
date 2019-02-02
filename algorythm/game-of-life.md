# Game of Life

- 가장자리에 있는 셀은 계산 안함
- 셀 하나를 기준으로 8개 direction  

```javascript
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

let gameOfLife = (board) => {
    
const cols=board.length;
const rows=board[0].length;
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let state = board[i][j];
      let neighbors = count(board, i, j);

      if (state === 0 && neighbors === 3) {
        board[i][j] = 1;
      } else if(state === 1 && (neighbors < 2 || neighbors > 3)) {
        board[i][j] = 0;
      }
        else {
        board[i][j] = state;
      }

    }
  }


function count(grid, x, y) {
  let sum = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
    if(x+i<0||x+i>cols-1||y+j<0||y+j>rows-1)continue;
      sum += grid[x+i][y+j];
    }
  }
  sum -= grid[x][y];
  return sum;
}
}
```
- 먼저 계산된 셀이 영향을 끼치지 않게 해야함
- 1->0 되거나 0->1된 셀은 원래 값으로 계산해야함
- 1->0 된 애 = 2, 0->1된 애 = 3
- 원래값이 1일 경우 카운트해야하니까 2로 변한 셀은 ++1
- 나머지 경우는 그대로 있으니까 패쓰

```javascript
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

let gameOfLife = (board) => {
    
const cols=board.length;
const rows=board[0].length;
    
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let state = board[i][j];
      let neighbors = count(board, i, j);

      if (state === 0 && neighbors === 3) {
        board[i][j] = 3;
      } else if(state === 1 && (neighbors < 2 || neighbors > 3)) {
        board[i][j] = 2;
      }
    }
  }

for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++){
    board[i][j] %= 2;
    }
}

function count(grid, x, y) {
  let sum = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
        if(i==0&&j==0)continue;
        if(x+i<0||x+i>cols-1||y+j<0||y+j>rows-1)continue;
        if(grid[x+i][y+j]==1||grid[x+i][y+j]==2)
        sum ++;
    }
  }
  return sum;
}
}
```