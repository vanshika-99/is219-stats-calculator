const Statistics = require('../src/Statistics');

test('Statistics mean', () => {
    let calc = new Statistics();
    let result = calc.Mean([1,2,3,4,5]);
    expect(result).toBe(3);
    expect(calc.Result).toBe(3);
});

test('Statistics median', () => {
    let calc = new Statistics();
    let result = calc.Median([1,2,3,4,5]);
    expect(result).toBe(3);
    expect(calc.Result).toBe(3);
});

test('Statistics mode', () => {
    let calc = new Statistics();
    let result = calc.Mode([1,2,3,4,5,6,6]);
    expect(result).toBe(6);
    expect(calc.Result).toBe(6);
});

test('Statistics variance', () => {
    let calc = new Statistics();
    let result = calc.Variance([1,2,3,4,5]);
    expect(result).toBe(2.5);
    expect(calc.Result).toBe(2.5);
});

test('Statistics standard deviation', () => {
    let calc = new Statistics();
    let result = calc.StandardDeviation([1,2,3,4,5])
    expect(Math.round(result)).toBe(2);
    expect(Math.round(calc.Result)).toBe(2);
});

test('Statistics first quartile', () => {
    let calc = new Statistics();
    let result = calc.Quartile([1,2,3,4,5], 0.25);
    expect(result).toBe(1.5);
    expect(calc.Result).toBe(1.5);
});

test('Statistics second quartile', () => {
    let calc = new Statistics();
    let result = calc.Quartile([1,2,3,4,5], 0.5);
    expect(result).toBe(3);
    expect(calc.Result).toBe(3);
});

test('Statistics third quartile', () => {
    let calc = new Statistics();
    let result = calc.Quartile([1,2,3,4,5], 0.75);
    expect(result).toBe(4.5);
    expect(calc.Result).toBe(4.5);
});

test('Statistics skewness', () => {
    let calc = new Statistics();
    let result = calc.Skewness([1,2, 3, 4, 20]);
    expect(result).toBe(1.275);
    expect(calc.Result).toBe(1.275);
});
