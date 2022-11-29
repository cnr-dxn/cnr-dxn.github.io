let GAME_ROWS=10;
let GAME_COLS=10;
let NUM_BOMBS=20;
let GAME_STATE='SETUP'; // SETUP, ACTIVE, WIN, LOST

let boardContents; // boardContents[row][col] = 'B', '<NUMBER>', 'EMPTY'
let boardExposed;  // boolean

function addRows(){
    let tableElement = document.getElementById('table-div');

    // add all the rows and cells to the table
    // set a uniqe id for each
    // set a class for each
    for ( let i=0; i<GAME_ROWS; i++ ) {
        const newRowDiv = document.createElement("div");
        newRowDiv.setAttribute('id', `row${i}-div`);
        newRowDiv.setAttribute('class', "mRow");
        tableElement.appendChild( newRowDiv );

        for ( let j=0; j < GAME_COLS; j++ ) {
            const newCellDiv = document.createElement("div");
            newCellDiv.setAttribute('id', `cell_r${i}c${j}`);
            newCellDiv.setAttribute('class', "mCell");
            newCellDiv.textContent = " - ";
            newRowDiv.appendChild( newCellDiv );
        }
    }

}

function placeBombs(){
    let placedBombs = 0;

    while( placedBombs <= NUM_BOMBS ) {
        let bombCellRow = Math.floor(Math.random() * GAME_ROWS);
        let bombCellCol = Math.floor(Math.random() * GAME_COLS);
        console.log( `ROW: ${bombCellRow}  COL: ${bombCellCol} CURSTATE: ${boardContents[bombCellRow][bombCellCol]}` );

        // only place a bomb if empty (random choice can repeat)
        if( boardContents[bombCellRow][bombCellCol] == 'EMPTY' ) {
            boardContents[bombCellRow][bombCellCol] = 'B';
            placedBombs++;
            console.log( `PLACING BOMB AT ROW: ${bombCellRow}  COL: ${bombCellCol}` );
        }
    }
}

function addNumbers(){
    for ( let row=0; row<GAME_ROWS; row++ ) {
        for ( let col=0; col < GAME_COLS; col++ ) {

            // don't modify cells that have a bomb
            if ( boardContents[row][col] === 'B' ) { 
                continue;
            }

            // for cells that don't have a bomb, get the number
            let neighborBombs = 0

            // setup search grid, set limits at 0 and GAME_ROWS-1
            let searchRowStart = Math.max( 0, row-1 );
            let searchRowEnd = Math.min( row+1, GAME_ROWS - 1 );
            let searchColStart = Math.max( 0, col-1 );
            let searchColEnd = Math.min( col+1, GAME_COLS - 1 );

            // search the grid and count bombs
            for ( let r=searchRowStart; r <= searchRowEnd; r++ ){
                for ( let c=searchColStart; c <= searchColEnd; c++ ){
                    if ( boardContents[r][c] === 'B' ) { neighborBombs++; } 
                }
            }

            // set the board state to the number of neighbor bombs
            boardContents[row][col] = neighborBombs;
        }
    }
}

function initBoardState(){
    boardContents = new Array(GAME_ROWS);
    boardExposed = new Array(GAME_ROWS);
    for ( let row=0; row<GAME_ROWS; row++ ) {
        boardContents[row] = new Array(GAME_COLS);
        boardExposed[row] = new Array(GAME_COLS);
        for ( let col=0; col < GAME_COLS; col++ ) {
            boardContents[row][col] = 'EMPTY';
            boardExposed[row][col] = false;
        }
    }

}

function corresponding_color(num) {
    if (num == 0) {
        return ["#d2b48c", "black"];
    }
    else if (num == 1) {
        return ["#DDF8E8", "black"];
    }

    else if (num == 2) {
        return ["#B1BEB8", "black"];
    }

    else if (num == 3) {
        return ["#B4A6AB", "black"];
    }

    else if (num == 4) {
        return ["#946E83", "white"];
    }

    else if (num == 5) {
        return ["#7B5F6C", "white"];
    }

    else if (num == 6) {
        return ["#615055", "white"];
    }
    else {
        console.log("im gonna kill myself");
    }
}

function updateBoard(){
    for ( let row=0; row<GAME_ROWS; row++ ) {
        for ( let col=0; col < GAME_COLS; col++ ) {
            let cellId = document.getElementById( `cell_r${row}c${col}` );
            // TODO error check on cellId
            if ( boardExposed[row][col] ) {
                if (boardContents[row][col] == 0) {
                    cellId.textContent = " ";
                }
                else {
                    cellId.textContent = boardContents[row][col];
                }
                let colors = corresponding_color(boardContents[row][col]);
                cellId.style.backgroundColor = colors[0];
                cellId.style.color = colors[1];
            }
        }
    }

    let hId = document.getElementById( "game-header");
    hId.innerHTML = GAME_STATE;

}

function cellClicked( row, col ) {
    console.log( `Cell clicked: r:${row} c:${col}\n` );
    if ( GAME_STATE == 'ACTIVE' ) {
        boardExposed[row][col] = true;
        checkGameState();
        updateBoard();
    }
}

function checkGameState() {
    let totalExposed = 0;
    for ( let row=0; row<GAME_ROWS; row++ ) {
        for ( let col=0; col < GAME_COLS; col++ ) {
            if ( boardExposed[row][col] ) {
                totalExposed++;
                if ( boardContents[row][col] == 'B' ) { GAME_STATE = 'LOST' }
            }
        }
    }
    if ( GAME_STATE != 'LOST' && totalExposed == GAME_ROWS * GAME_COLS ) {
        GAME_STATE = 'WIN';
    }

}

function addEvents(){
    for ( let row=0; row<GAME_ROWS; row++ ) {
        for ( let col=0; col < GAME_COLS; col++ ) {
            let cellId = document.getElementById( `cell_r${row}c${col}` );
            cellId.addEventListener("click", () => { cellClicked( row, col ); });
        }
    }
}

function main() { 

    GAME_STATE='SETUP';
    addRows(); 
    addEvents();        // click event calls cellClicked( row, col );
    initBoardState();   // all will be EMPTY
    placeBombs();       // some will be B
    addNumbers();       // the rest will have <number>

    GAME_STATE = 'ACTIVE';
    updateBoard();

}
window.onload = main;
