const Statistics = require('../src/Statistics');

test('Statistics mean', () => {
    let calc = new Statistics();
    let result = calc.Mean([1,2]);
    expect(result).toBe(1.5);
    expect(calc.Result).toBe(1.5);
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
    expect(result).toBe(2);
    expect(calc.Result).toBe(2);
});

test('Statistics standard deviation', () => {
    let calc = new Statistics();
    let result = calc.StandardDeviation([1,2,3,4,5])
    expect(Math.round(result)).toBe(1);
    expect(Math.round(calc.Result)).toBe(1);
});

test('Statistics first quartile', () => {
    let calc = new Statistics();
    let result = calc.Quartile([1,2,3,4,5,6]);
    expect(result[0]).toBe(2);
    expect(calc.Result[0]).toBe(2);
});

test('Statistics second quartile', () => {
    let calc = new Statistics();
    let result = calc.Quartile([1,2,3,4,5,6]);
    expect(result[1]).toBe(3.5);
    expect(calc.Result[1]).toBe(3.5);
});

test('Statistics third quartile', () => {
    let calc = new Statistics();
    let result = calc.Quartile([1,2,3,4,5,6]);
    expect(result[2]).toBe(5);
    expect(calc.Result[2]).toBe(5);
});

test('Statistics skewness', () => {
    let calc = new Statistics();
    let result = calc.Skewness([1, 2, 3, 4, 20]);
    expect(result).toBe(1.275);
    expect(calc.Result).toBe(1.275);
});

test('Statistics sample correlation', () => {
    let calc = new Statistics();
    let result = calc.SampleCorrelation([10, 20, 30, 40, 50],[4, 12, 1, 20, 3]);
    expect(result).toBe(0.12);
    expect(calc.Result).toBe(0.12);
});

test('Statistics population correlation', () => {
    let calc = new Statistics();
    let result = calc.PopulationCorrelation([10, 20, 30, 40, 50],[4, 12, 1, 20, 3]);
    expect(result).toBe(0.12);
    expect(calc.Result).toBe(0.12);
});

test('Statistics Z score', () => {
    let calc = new Statistics();
    let result = calc.ZScore([7],[3], [2]);
    expect(result).toBe(2);
    expect(calc.Result).toBe(2);
});

test('Statistics mean deviation', () => {
    let calc = new Statistics();
    let result = calc.MeanDeviation([1, 2, 3, 4, 5]);
    expect(result).toBe(1.2);
    expect(calc.Result).toBe(1.2);
});