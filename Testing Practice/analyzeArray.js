const analyzeArray = (array) => {
    let sum = 0;
    let nb = 0;
    let max = Number.MIN_VALUE;
    let min = Number.MAX_VALUE;
    for (let item of array) {
        nb++;
        sum += item;
        if (item < min) min = item;
        else if(item >max ) max=item ;
    }
    return {
        average: sum / nb,
        min: min,
        max: max,
        length:nb
    }
}

module.exports = analyzeArray;