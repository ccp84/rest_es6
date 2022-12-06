/**
 * To run this file in Gitpod, use the 
 * command node rest-parameter-syntax.js in the terminal
 */

// Regular function call 
const sumAll = (a, b, c) => a + b + c;
let sum = sumAll(1, 2, 3);
console.log(sum);

// Extra arguments are ignored
const sumIgnore = (a, b, c) => a + b + c;
sum = sumIgnore(1, 2, 3, 4, 5, 6);
console.log(sum);

// Function using ...rest
const sumRest = (a, b, c, ...rest) => {
    let sum2 = a + b + c;
    for (i of rest) {
        sum2 += i;
    }
    return sum2;
}

let sum3 = sumRest(1, 2, 3, 4, 5, 6);
console.log(sum3);
