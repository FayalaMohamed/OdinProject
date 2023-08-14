import { Gameboard } from "./Gameboard";

const Player = (appelation) => {
    const name = appelation;
    let board = Gameboard();
    const attack = (enemy, x, y) => {
        return enemy.board.receiveAttack(x, y);
    };
    let randomShip = (length) => {
        let x = Math.floor(Math.random() * 10);
        let y = Math.floor(Math.random() * 10);
        let dir = Math.round(Math.random());

        if (dir === 0) {
            dir = "h";
        }else{
            dir = "v";
        }

        return board.placeShip(x, y, length, dir);
    };
    let randomFleet = () => {
        for (let j = 2; j < 5; j++) {
            for (let i = 0; i < 2;) {
                if (randomShip(j) == false) continue;
                i++;
            }
        }
    };
    return { name, board, attack, randomFleet };
}

export { Player };