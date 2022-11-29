let GAME_ROWS=10;
let GAME_COLS=10;
let NUM_BOMBS=20;
let GAME_STATE='SETUP'; 

let boardContents; 
let boardExposed;  

function add_rows(){
    let tableElement = document.getElementById('table-div');

    for ( let i=0; i<GAME_ROWS; i++ ) {
        const newRowDiv = document.createElement("div");
        newRowDiv.setAttribute('id', `row${i}-div`);
        newRowDiv.setAttribute('class', "mRow");
        tableElement.appendChild( newRowDiv );

        for ( let j=0; j < GAME_COLS; j++ ) {
            const newCellDiv = document.createElement("div");
            newCellDiv.setAttribute('id', `cell_r${i}c${j}`);
            newCellDiv.setAttribute('class', "mCell");
            newCellDiv.style.transitionDuration = "0.3s";
            newCellDiv.textContent = " - ";
            newRowDiv.appendChild( newCellDiv );
        }
    }

}

function place_bombs(){
    let placedBombs = 0;

    while( placedBombs <= NUM_BOMBS ) {
        let bombCellRow = Math.floor(Math.random() * GAME_ROWS);
        let bombCellCol = Math.floor(Math.random() * GAME_COLS);

        if( boardContents[bombCellRow][bombCellCol] == 'EMPTY' ) {
            boardContents[bombCellRow][bombCellCol] = 'B';
            placedBombs++;
        }
    }
}

function add_numbers(){
    for ( let i=0; i<GAME_ROWS; i++ ) {
        for ( let j=0; j < GAME_COLS; j++ ) {

            if ( boardContents[i][j] === 'B' ) { 
                continue;
            }

            let neighborBombs = 0

            let searchRowStart = Math.max( 0, i-1 );
            let searchRowEnd = Math.min( i+1, GAME_ROWS - 1 );
            let searchColStart = Math.max( 0, j-1 );
            let searchColEnd = Math.min( j+1, GAME_COLS - 1 );

            for ( let r=searchRowStart; r <= searchRowEnd; r++ ){
                for ( let c=searchColStart; c <= searchColEnd; c++ ){
                    if ( boardContents[r][c] === 'B' ) { neighborBombs++; } 
                }
            }

            boardContents[i][j] = neighborBombs;
        }
    }
}

function init_board_state(){
    boardContents = new Array(GAME_ROWS);
    boardExposed = new Array(GAME_ROWS);
    for ( let i=0; i<GAME_ROWS; i++ ) {
        boardContents[i] = new Array(GAME_COLS);
        boardExposed[i] = new Array(GAME_COLS);
        for ( let j=0; j < GAME_COLS; j++ ) {
            boardContents[i][j] = 'EMPTY';
            boardExposed[i][j] = false;
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

function update_board(){
    for ( let i=0; i<GAME_ROWS; i++ ) {
        for ( let j=0; j < GAME_COLS; j++ ) {
            let cellId = document.getElementById( `cell_r${i}c${j}` );
            // TODO error check on cellId
            if ( boardExposed[i][j] ) {
                if (boardContents[i][j] == 0) {
                    cellId.textContent = " ";
                }
                else {
                    cellId.textContent = boardContents[i][j];
                }
                let colors = corresponding_color(boardContents[i][j]);
                cellId.style.backgroundColor = colors[0];
                cellId.style.color = colors[1];
            }
        }
    }
}

function cell_clicked( row, col ) {
    console.log( `Cell clicked: r:${row} c:${col}\n` );
    if ( GAME_STATE == 'ACTIVE' ) {
        boardExposed[row][col] = true;
        let state = check_game_state();
        if (state == true) {
            update_board();
        }
    }
}

function expose_board() {
    for ( let i=0; i<GAME_ROWS; i++ ) {
        for ( let j=0; j < GAME_COLS; j++ ) {
            boardExposed[i][j] = true;
        }
    }

    for ( let i=0; i<GAME_ROWS; i++ ) {
        for ( let j=0; j < GAME_COLS; j++ ) {
            let cellId = document.getElementById( `cell_r${i}c${j}` );
            // TODO error check on cellId
            if ( boardExposed[i][j] ) {
                if (boardContents[i][j] == 0) {
                    cellId.textContent = " ";
                }
                else {
                    cellId.textContent = boardContents[i][j];
                }
            }
        }
    }

}

function game_won() {
    expose_board();
    let confetti = document.getElementById( `game-confetti` );
    confetti.style.visibility = "visible";
    alert("You won! Congratulations! Refresh this page to continue exploring the website, or to play again.");
}

function game_lost() {
    for ( let i=0; i<GAME_ROWS; i++ ) {
        for ( let j=0; j < GAME_COLS; j++ ) {
            let cellId = document.getElementById( `cell_r${i}c${j}` );
            cellId.textContent = " "
            cellId.style.backgroundColor = "grey";
            cellId.style.color = "white";
        }
    }
    let game_grid = document.getElementById( `game-grid` );
    game_grid.style.backgroundColor = "#e0e0e0";
    alert("Bomb tripped! Refresh the game to play again");
    expose_board();

}

function check_game_state() {
    let totalExposed = 0;
    for ( let i=0; i<GAME_ROWS; i++ ) {
        for ( let j=0; j < GAME_COLS; j++ ) {
            if ( boardExposed[i][j] ) {
                totalExposed++;
                if ( boardContents[i][j] == 'B' ) { 
                    GAME_STATE = 'LOST'
                    game_lost();
                    return false;
                }
            }
        }
    }
    if ( GAME_STATE != 'LOST' && totalExposed == (GAME_ROWS * GAME_COLS) - NUM_BOMBS ) {
        GAME_STATE = 'WIN';
        game_won();
        return false;
    }
    return true;
}

function add_events(){
    for ( let i=0; i<GAME_ROWS; i++ ) {
        for ( let j=0; j < GAME_COLS; j++ ) {
            let cellId = document.getElementById( `cell_r${i}c${j}` );
            cellId.addEventListener("click", () => { cell_clicked( i, j ); });
        }
    }
}

function main() { 

    GAME_STATE='SETUP';
    add_rows(); 
    add_events();     
    init_board_state();   
    place_bombs();       
    add_numbers();      

    GAME_STATE = 'ACTIVE';
    update_board();

}
window.onload = main;