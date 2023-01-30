import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const chessboard: number[][] = [
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0]
];

console.log("Enter the position of the knight on the chessboard (e.g. A1)-use CAPS");
rl.question("", (position: string) => {
  const x = position.charCodeAt(0) - 'A'.charCodeAt(0);
  const y = 8 - parseInt(position[1]);
  const moves: number[][] = [
    [x + 1, y + 2],
    [x + 2, y + 1],
    [x + 2, y - 1],
    [x + 1, y - 2],
    [x - 1, y - 2],
    [x - 2, y - 1],
    [x - 2, y + 1],
    [x - 1, y + 2]
  ];
  console.log("The possible moves for the knight are: ");
  moves.forEach((move) => {
    if (move[0] >= 0 && move[0] < 8 && move[1] >= 0 && move[1] < 8) {
      console.log(String.fromCharCode(move[0] + 'A'.charCodeAt(0)) + (8 - move[1]));
    }
  });
  rl.close();
});
