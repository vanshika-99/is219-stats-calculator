const Random = require('../src/RandomGenerator');
const Sampling = require('../src/PopulationSampling');
const Statistics = require('../src/Statistics');
let calc = new Statistics();

let seed = 10;
let size = 10;

test('Simple random sampling', () => {
    let size = 10;
    let randomList = Random.SeededRandomListInt(10, 10, 100, size);
    let sampleSize = Random.SeededRandomInt(1, 10, size);
    let sampleList1 = Sampling.simpleRandomSampling(randomList, sampleSize, 10);
    let sampleList2 = Sampling.simpleRandomSampling(randomList, sampleSize, 10);

    expect(sampleList1).toHaveLength(Math.ceil(sampleSize));
    expect(sampleList1).toEqual(sampleList2);
});

test('Get z-score from confidence percent', () => {
    expect(Sampling.convertConfidencetoZScore(52)).toEqual(0.71);
    expect(Sampling.convertConfidencetoZScore(5)).toEqual(0.06);
});

test('Find margin of error', () => {
    let size = 10;
    let sampleList = Random.SeededRandomListInt(seed, -100, 100, size);
    let confidence = Math.floor(Random.SeededRandomInt(seed, 50, 95) /  5) * 5;
    let marginOfError = Sampling.marginOfError(sampleList, confidence);
    console.log(marginOfError);

    expect(marginOfError).toBeGreaterThan(0);
});

test('Confidence interval', () => {
    let size = 10;
    let sampleList = Random.SeededRandomListInt(seed, -100, 100, size);
    let confidence = Math.floor(Random.SeededRandomInt(seed, 50, 95) /  5) * 5;
    let confidenceInterval = Sampling.confidenceInterval(sampleList, confidence);

    let mean = calc.Mean(sampleList);
    expect(confidenceInterval).toHaveLength(2);
    console.log(confidenceInterval);
    expect(confidenceInterval[0]).toBeLessThan(mean);
    expect(confidenceInterval[1]).toBeGreaterThan(mean);
});

// test('Systematic Sampling', () => {
//     let size = 10;
//     let arrList = Random.SeededRandomListInt(seed, 10, 100, size);
//     let sampleSize = Random.SeededRandomInt(seed,1, size);
//     let sampleList = Sampling.systematicSampling(arrList, sampleSize);
//     expect(sampleList.length).toBe(sampleSize);
// });

test('Cochrans sample size', () => {
    expect(Sampling.cochransFormula(95,5,.5,1000)).toBe(278);
});

test('Sample size with unknown standard deviation', () => {
    expect(Sampling.sampleSizeNoStdDev(95,10, 0.5)).toBeGreaterThan(0);
});

test('Sample size with standard deviation', () => {
    let size = 10;
    let sampleList = Random.SeededRandomListInt(100, -100, 100, size);
    let confidence = Math.floor(Random.SeededRandomInt(100, 50, 95) /  5) * 5;
    let stdDev = calc.StandardDeviation(sampleList);
    expect(Sampling.sampleSizeStdDev(confidence,10, stdDev)).toBeGreaterThan(0);
});