const Calculator = require('../src/Calculator');

test('Calculator adding two numbers', () => {
    //I need to test the instantiation of the calculation object
    let calc = new Calculator();
    let result = calc.Addition(1,2);
    expect(result).toBe(3);
    expect(calc.Result).toBe(3);
});

test('Calculator subtracting two numbers', () => {
    //I need to test the instantiation of the calculation object
    let calc = new Calculator();
    let result = calc.Subtraction(1,2);
    expect(result).toBe(-1);
    expect(calc.Result).toBe(-1);
});

test('Calculator multiplying two numbers', () => {
    //I need to test the instantiation of the calculation object
    let calc = new Calculator();
    let result = calc.Multiplication(1,2);
    expect(result).toBe(2);
    expect(calc.Result).toBe(2);
});

test('Calculator dividing two numbers', () => {
    //I need to test the instantiation of the calculation object
    let calc = new Calculator();
    let result = calc.Division(1,2);
    expect(result).toBe(0.5);
    expect(calc.Result).toBe(0.5);
});

test('Calculator squaring a number', () => {
    //I need to test the instantiation of the calculation object
    let calc = new Calculator();
    let result = calc.Square(1, 1);
    expect(result).toBe(1);
    expect(calc.Result).toBe(1);
});

test('Calculator taking square root of a number', () => {
    //I need to test the instantiation of the calculation object
    let calc = new Calculator();
    let result = calc.SquareRoot(1, 1);
    expect(result).toBe(1);
    expect(calc.Result).toBe(1);
});
