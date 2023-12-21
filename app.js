


const LOOKUP = {
    "1": "X",
    "-1": "O"
};

const combos = [ 
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6]
];
let board;
let turn;
let winner;

const boardEl = document.getElementById("board");

boardEl.addEventListener("click", handleClick);

function init() {
    board = [null, null, null, null, null, null, null, null, null];
    turn = 1;
    winner = null;
}

function handleClick(evt) {
    if (board[parseInt(evt.target.id)] ||
    winner) return;
    
    board[parseInt(evt.target.id)] = turn;
    turn *= -1;
    winner = checkWinner();
    render();
}

function render() {
    for (let i = 0; i < board.length; i++) {
        if (board[i]) {
            const sq = document.getElementById(i);
            sq.innerHTML = `${LOOKUP[board[i]]}`;
        }
    }
}

function checkWinner() {
    for (let i = 0; i < combos.length; i++) {
        const sum = Math.abs(board[combos[i][0]] + board[combos[i][1]] + board[combos[i][2]]);
        if (sum === 3) return LOOKUP[board[combos[i][0]]];
    }

    if (!board.includes(null)) return "TIE";

    return null;
}

init();

