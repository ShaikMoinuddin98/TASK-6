const calculator = (a, b, op) => {
    switch (op) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return 'Invalid operator';
    }
}

// Example usage
const result1 = calculator(1, 2, '+');
const result2 = calculator(5, 3, '-');
const result3 = calculator(4, 2, '*');
const result4 = calculator(10, 2, '/');

console.log(result1); // Output: 3
console.log(result2); // Output: 2
console.log(result3); // Output: 8
console.log(result4); // Output: 5
