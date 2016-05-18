'use strict';

function fibonacci_series(n) {
    var fibonacci = judgeInput(n);
    return fibonacci;
}

function judgeInput(n) {
    var fibonacci = [];

    if (n === 0) {
        fibonacci.push(0);
    } else if (n === 1) {
        fibonacci = [0, 1];
    } else {
        var fibonacci = buildFibonacci(fibonacci, n);
    }

    return fibonacci;
}

function buildFibonacci(fibonacci, n) {
    fibonacci = [0, 1];
    for (var i = 2; i < n + 1; i++) {
        var element = fibonacci[i - 1] + fibonacci[i - 2];
        fibonacci.push(element);
    }

    return fibonacci;
}
module.exports = fibonacci_series;
