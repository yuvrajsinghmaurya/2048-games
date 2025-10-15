let board;
let score = 0;
const rows = 4;
const columns = 4;

window.onload = function() {
    setGame();
}

function setGame() {
    score = 0;
    document.getElementById("score").innerText = score;
    document.getElementById("gameOverModal").style.display = "none";

    board = Array(rows).fill().map(() => Array(columns).fill(0));

    const boardDiv = document.getElementById("board");
    boardDiv.innerHTML = "";

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let tile = document.createElement("div");
            tile.id = r + "-" + c;
            updateTile(tile, 0);
            boardDiv.appendChild(tile);
        }
    }

    setTwo();
    setTwo();
}

function updateTile(tile, num) {
    tile.innerText = num > 0 ? num : "";
    tile.className = "tile";
    if (num > 0) {
        tile.classList.add(num <= 4096 ? "x"+num : "x8192");
    }
}

document.addEventListener("keyup", (e) => {
    let moved = false;
    switch(e.code) {
        case "ArrowLeft": moved = slideLeft(); break;
        case "ArrowRight": moved = slideRight(); break;
        case "ArrowUp": moved = slideUp(); break;
        case "ArrowDown": moved = slideDown(); break;
    }
    if (moved) setTwo();
    document.getElementById("score").innerText = score;
    if (isGameOver()) showGameOver();
});

function filterZero(row) {
    return row.filter(num => num !== 0);
}

function slide(row) {
    row = filterZero(row);
    for (let i = 0; i < row.length-1; i++) {
        if (row[i] === row[i+1]) {
            row[i] *= 2;
            row[i+1] = 0;
            score += row[i];
        }
    }
    row = filterZero(row);
    while (row.length < columns) row.push(0);
    return row;
}

function slideLeft() {
    let moved = false;
    for (let r = 0; r < rows; r++) {
        const original = [...board[r]];
        board[r] = slide(board[r]);
        moved ||= !arraysEqual(original, board[r]);
        updateRow(r);
    }
    return moved;
}

function slideRight() {
    let moved = false;
    for (let r = 0; r < rows; r++) {
        const original = [...board[r]];
        board[r].reverse();
        board[r] = slide(board[r]);
        board[r].reverse();
        moved ||= !arraysEqual(original, board[r]);
        updateRow(r);
    }
    return moved;
}

function slideUp() {
    let moved = false;
    for (let c = 0; c < columns; c++) {
        let col = [board[0][c], board[1][c], board[2][c], board[3][c]];
        const original = [...col];
        col = slide(col);
        for (let r = 0; r < rows; r++) {
            board[r][c] = col[r];
        }
        moved ||= !arraysEqual(original, col);
        updateCol(c);
    }
    return moved;
}

function slideDown() {
    let moved = false;
    for (let c = 0; c < columns; c++) {
        let col = [board[0][c], board[1][c], board[2][c], board[3][c]];
        const original = [...col];
        col.reverse();
        col = slide(col);
        col.reverse();
        for (let r = 0; r < rows; r++) {
            board[r][c] = col[r];
        }
        moved ||= !arraysEqual(original, col);
        updateCol(c);
    }
    return moved;
}

function updateRow(r) {
    for (let c = 0; c < columns; c++) {
        updateTile(document.getElementById(r+"-"+c), board[r][c]);
    }
}

function updateCol(c) {
    for (let r = 0; r < rows; r++) {
        updateTile(document.getElementById(r+"-"+c), board[r][c]);
    }
}

function setTwo() {
    if (!hasEmptyTile()) return;
    let placed = false;
    while (!placed) {
        const r = Math.floor(Math.random() * rows);
        const c = Math.floor(Math.random() * columns);
        if (board[r][c] === 0) {
            board[r][c] = 2;
            updateTile(document.getElementById(r+"-"+c), 2);
            placed = true;
        }
    }
}

function hasEmptyTile() {
    return board.some(row => row.includes(0));
}

function arraysEqual(a, b) {
    return a.every((v, i) => v === b[i]);
}

// ----------------- GAME OVER -----------------
function isGameOver() {
    if (hasEmptyTile()) return false;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns-1; c++) {
            if (board[r][c] === board[r][c+1]) return false;
        }
    }
    for (let c = 0; c < columns; c++) {
        for (let r = 0; r < rows-1; r++) {
            if (board[r][c] === board[r+1][c]) return false;
        }
    }
    return true;
}

function showGameOver() {
    document.getElementById("finalScore").innerText = score;
    document.getElementById("gameOverModal").style.display = "block";
}

function restartGame() {
    setGame();
}
