const Player = (sign) => {
    sign = sign;
    const getSign = () => {
        return sign;
    }
    return { getSign };
}

const Board = () => {
    const board = new Array(9).fill("");
    const insertSign = (index, sign) => {
        if (index < board.length)
            board[index] = sign;
    }
    const getSign = (index) => {
        if (index < board.length)
            return board[index];
        return;
    }
    const reset = () => {
        for (let i = 0; i < board.length; i++) {
            board[i] = "";
        }
    }
    const isFull = () => {
        for (let i = 0; i < board.length; i++) {
            if (board[i] == "")
                return false
        }
        return true
    }
    return { insertSign, getSign, reset, isFull }
}
const board = Board();


const DisplayController = () => {
    const displayParagraph = document.querySelector('.playersTurn');
    const fields = Array.from(document.querySelectorAll('td'));
    const resetBtn = document.querySelector('button');

    resetBtn.addEventListener('click', () => {
        gameController.reset();
        updateBoard();
        setMessage("It's X's turn to play ")
    })

    fields.forEach((field) => {
        field.addEventListener('click', (e) => {
            if (e.target.textContent === "") {
                gameController.playRound(e.target.dataset.index);
                updateBoard();
            }
        })
    })

    const updateBoard = () => {
        for (let i = 0; i < fields.length; i++) {
            fields[i].textContent = board.getSign(i);
        }
    }

    const setMessage = (text) => {
        displayParagraph.textContent = text;
    }
    return { setMessage }

}
const displayController = DisplayController();

const GameController = () => {
    const player1 = Player("X");
    const player2 = Player("O");
    let currentPlayer = player1;
    let isOver = false;
    const changePlayer = () => {
        if (currentPlayer === player1)
            currentPlayer = player2;
        else
            currentPlayer = player1;
    }
    const checkWinDraw = (index) => {
        const winCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (const comb of winCombinations) {
            const [a, b, c] = comb;
            if (board.getSign(a) === currentPlayer.getSign() && board.getSign(a) === board.getSign(b) && board.getSign(a) === board.getSign(c)) {
                isOver = true;
                return 1; // current player wins
            }
        }
        if (board.isFull()) {
            isOver = true;
            return -1; // Draw
        }
        return 0; // the game is still on
    }
    const playRound = (index) => {
        if (isOver || board.isFull())
            return;
        board.insertSign(index, currentPlayer.getSign());
        let res = checkWinDraw(index);
        if (res === 1) {
            displayController.setMessage('Player ' + currentPlayer.getSign() + ' has won !');
        } else if (res == -1) {
            displayController.setMessage("It's a tie !");
        } else {
            changePlayer();
            displayController.setMessage("It's  " + currentPlayer.getSign() + "'s turn to play ");
        }
    }
    const reset = () => {
        isOver = false;
        board.reset();
    }
    return { reset, playRound };
}
const gameController = GameController();

