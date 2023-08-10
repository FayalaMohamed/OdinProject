function fibonacci(n) {
    if (n < 0) {
        return "Positive number";
    } else if (n === 0) {
        return [0];
    } else if (n === 1) {
        return [0, 1];
    } else {
        let a = fibonacci(n - 2);
        let b = fibonacci(n - 1);
        return [...b, a[a.length - 1] + b[b.length - 1]];
    }
}

console.table(fibonacci(-1));
console.table(fibonacci(0));
console.table(fibonacci(1));
console.table(fibonacci(3));
console.table(fibonacci(8));
console.table(fibonacci(12));
