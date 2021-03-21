const MathOperations = require('./Operations/MathOperations');

class Calculator {
    Addition(a = null, b = null) {
        if (Array.isArray(a)) {
            return this.Result = MathOperations.Addition(a);

        } else {
            return this.Result = MathOperations.Addition(a, b);
        }
    }
    Subtraction(a,b) {
        return this.Result = MathOperations.Subtraction(a,b);
    }
    Multiplication(a,b) {
        return this.Result = MathOperations.Multiplication(a,b);
    }
    Division(a,b) {
        return this.Result = MathOperations.Division(a,b);
    }
    Square(a,b) {
        return this.Result = MathOperations.Square(a,b);
    }
    SquareRoot(a,b) {
        return this.Result = MathOperations.SquareRoot(a,b);
    }
}

module.exports = Calculator;