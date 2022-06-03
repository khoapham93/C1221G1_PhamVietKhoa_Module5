"use strict";
exports.__esModule = true;
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter quantity of Fibonacci: ", function (answer) {
    var sum = 0;
    fibonacci(answer, count);
    console.log("FibonacciArray: " + fibonacciArray);
    for (var _i = 0, fibonacciArray_1 = fibonacciArray; _i < fibonacciArray_1.length; _i++) {
        var number = fibonacciArray_1[_i];
        sum += number;
    }
    console.log("Sum of fibonacci array" + sum);
});
var fibonacciArray = [];
var start = 0;
var end = 1;
var currentFibonacci;
var count = 0;
function fibonacci(total, count) {
    if (count < total) {
        if (count <= 1) {
            currentFibonacci = count;
        }
        else {
            currentFibonacci = start + end;
            start = end;
            end = currentFibonacci;
        }
        count++;
        fibonacciArray.push(currentFibonacci);
        fibonacci(total, count);
    }
    else {
        return fibonacciArray;
    }
}
