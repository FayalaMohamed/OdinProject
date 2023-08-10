function mergeSort(array) {
    if (array.length < 2)
        return array;
    let mid = Math.floor(array.length/2)
    let leftHalf = array.slice(0, mid);
    let rightHalf = array.slice(mid);
    return merge(mergeSort(leftHalf), mergeSort(rightHalf));
}

function merge(left, right) {
    let res = [];
    let leftInd = 0;
    let rightInd = 0;
    while (leftInd < left.length && rightInd < right.length) {
        if (left[leftInd] < right[rightInd]) {
            res.push(left[leftInd]);
            ++leftInd;
        } else {
            res.push(right[rightInd]);
            ++rightInd;
        }
    }

    return [
        ...res,
        ...left.slice(leftInd),
        ...right.slice(rightInd),
    ];
}

console.log(mergeSort([5, 8, 1, 9, 0, 6, 7, 2, 6]));