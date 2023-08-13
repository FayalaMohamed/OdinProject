const knightMoves = [
    [1, 2], [2, 1],
    [-1, 2], [2, -1],
    [1, -2], [-2, 1],
    [-1, -2], [-2, -1]
];

function shortestPath(begin, end) {
    let res = [];
    let queue = [[begin, [begin]]];
    while (queue.length) {
        let levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            const nodeAndHistory = queue.shift();
            const node = nodeAndHistory[0];
            const nodeHistory = nodeAndHistory[1];
            if (node[0] === end[0] && node[1] === end[1]) {
                res = nodeHistory;
                return res;
            }

            for (let move of knightMoves) {
                let possibleMove = [node[0] + move[0], node[1] + move[1]];
                if (possibleMove[0] > 8 || possibleMove[1] > 8 || possibleMove[0] < 0 || possibleMove[1] < 0) continue;
                let newNodeHistory = [...nodeHistory, possibleMove];
                queue.push([possibleMove, newNodeHistory]);
            }
        }
    }
    return res;
}

console.log(shortestPath([0, 0], [1, 2]));
console.log(shortestPath([0, 0], [3, 3]));
console.log(shortestPath([3, 3], [0, 0]));
console.log(shortestPath([3, 3], [4, 3]));
