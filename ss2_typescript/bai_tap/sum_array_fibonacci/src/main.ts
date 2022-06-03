import * as readline from 'readline';

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter quantity of Fibonacci: ", function (answer:any) {
    let sum = 0;
    fibonacci(answer,count);
    console.log("FibonacciArray: "+fibonacciArray);

    for (let number of fibonacciArray) {
            sum += number;
    }
    console.log("Sum of fibonacci array: " + sum);
});

let fibonacciArray: number[] = [];
let start: number = 0;
let end: number = 1;
let currentFibonacci: number;
let count: number = 0;

function fibonacci(total: number, count: number): Array<number> {
    if (count < total) {
        if (count <= 1) {
            currentFibonacci = count;
        } else {
            currentFibonacci = start + end;
            start = end;
            end = currentFibonacci;
        }
        count++;
        fibonacciArray.push(currentFibonacci);
        fibonacci(total, count);
    } else {
        return fibonacciArray;
    }
}

