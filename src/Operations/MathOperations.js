const addition = require('./Addition');
const multiplication = require('./Multiplication');
const division = require('./Division');
const subtraction = require('./Subtraction');
const squareRoot = require('./SquareRoot');
const square = require('./Square');

class MathOperations {
    static Addition(a = null, b = null) {
        if(Array.isArray(a)) {
            return addition(a);
        } else {
            return addition(a,b);
        }
    }
    static Subtraction(a,b) {
        return subtraction(a,b);
    }
    static Multiplication(a,b) {
        return multiplication(a,b);
    }
    static Division(a,b) {
        return division(a,b);
    }
    static SquareRoot(a,b) {
        return squareRoot(a,b);
    }
    static Square(a,b) {
        return square(a,b);
    }
}

module.exports = MathOperations;