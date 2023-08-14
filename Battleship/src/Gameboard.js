import { Ship } from "./Ship";

const Gameboard = () => {
    let board = Array(10).fill().map(() => Array(10).fill(false));
    let alreadyHit = [];
    let allShips = [];

    const placeShip = (x, y, length, direction) => {
        if (x < 0 || x >= 10 || y < 0 || y >= 10) return false;
        let ship = Ship(length);
        if (direction === "h") {
            if (y + length >= 10) return false;
            for (let i = 0; i < length; ++i) {
                if (board[x][y + i]) return false;
            }
            for (let i = 0; i < length; ++i) {
                board[x][y + i] = { ship, i };
            }
            allShips.push(ship);
        } else if (direction === "v") {
            if (x + length >= 10) return false;
            for (let i = 0; i < length; ++i) {
                if (board[x + i][y]) return false;
            }
            for (let i = 0; i < length; ++i) {
                board[x + i][y] = { ship, i };
            }
            allShips.push(ship);
        }
        return true;
    };

    const isAlreadyHit = (x, y) => {
        for (let coords of alreadyHit) {
            if ((coords["x"] == x && coords["y"] == y))
                return true;
        }
        return false;
    };

    const receiveAttack = (x, y) => {
        if (isAlreadyHit(x, y)) return false;
        alreadyHit.push({ x, y });
        if (board[x][y]) {
            let shipInfo = board[x][y];
            shipInfo.ship.hit(shipInfo.i);
        }
        return true;
    };
    const isSunk = (x, y) => {
        if (board[x][y]) {
            return board[x][y].ship.isSunk();
        }
        return false;
    };
    const areAllSunk = () => {
        for (let ship of allShips)
            if (!ship.isSunk()) return false;
        return true;
    };
    return { board, placeShip, receiveAttack, areAllSunk, isSunk }

}

export { Gameboard };