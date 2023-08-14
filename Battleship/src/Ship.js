const Ship = (length) => {
    const size = length;
    let nbHit = 0;
    let tiles = Array(size).fill(false);
    const getSize = () => {
        return size;
    }
    const getNbHit = () => {
        return nbHit;
    }
    const hit = (pos) => {
        if (pos < 0 || pos >= size) return;
        if (!tiles[pos]) tiles[pos] = true;
        nbHit++;
    }
    const isSunk = () => {
        return nbHit === size;
    }
    return { hit, isSunk };
}

export { Ship };