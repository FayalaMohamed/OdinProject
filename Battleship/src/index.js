import { Ship } from "./Ship";
import { Gameboard } from "./Gameboard";
import { Player } from "./Player";


let player = Player("mo");
player.randomFleet();
console.table(player.board.board)