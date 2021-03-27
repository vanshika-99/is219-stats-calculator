const RandomGenerator = require("../src//RandomGenerator");

test('1.1 Random Decimal', () => {
    let rand = RandomGenerator.RandomDecimal(1, 5);
    expect(rand).toBeGreaterThanOrEqual(1);
    expect(rand).toBeLessThan(5);
    expect(Number.isInteger(rand)).toBe(false);
});

test('1.2 Random Integer', () => {
    let rand = RandomGenerator.RandomInteger(1, 5);
    expect(rand).toBeGreaterThanOrEqual(1);
    expect(rand).toBeLessThan(5);
    expect(Number.isInteger(rand)).toBe(true);
});

test('2.1 Seeded Random Decimal', () => {
    let rand = RandomGenerator.SeededRandomDec('Hi', 1, 100);
    expect(rand).toBe(5.880336918756425);
});

test('2.2 Seeded Random Integer', () => {
    let rand = RandomGenerator.SeededRandomInt('Hi', 1, 100);
    expect(rand).toBe(5);
});

test('3.1 Seeded Random List Decimal', () => {
    let list = RandomGenerator.SeededRandomListDec('Hi', 1, 100, 5);
    let list1 = [5.880336918756425,16.945854684528577,18.047926422498392,44.716621137892965,16.437274064643347];
    expect(list).toStrictEqual(list1);
});

test('3.2 Seeded Random List Integer', () => {
    let list = RandomGenerator.SeededRandomListInt('Hi', 1, 100, 5);
    let list1 = [5, 17, 18, 45, 16];
    expect(list).toStrictEqual(list1);
});

test('4. Select one randomly', () => {
    let list1 = [5, 17, 18, 45, 16];
    let rand = RandomGenerator.RandomOneSelection(list1);
    expect(list1).toContain(rand);
});

test('5. Select one Seeded Random', () => {
    let list1 = [5, 17, 18, 45, 16];
    let rand = RandomGenerator.SeededRandomOneSelection(list1, "hello");
    expect(rand).toBe(16);
});

test('6. Select multiple from a list Randomly', () => {
    let list1 = [5, 17, 18, 45, 16];
    let rand = RandomGenerator.RandomMultiSelection(list1, 2);
    for(let i=0; i<rand.length; i++){
        expect(list1).toContain(rand[i]);
    }
});

test('7. Select multiple from a list Random', () => {
    let list1 = [5, 17, 18, 45, 16];
    let rand = RandomGenerator.SeededRandomMultiSelection(list1,'hello', 2);
    expect(rand).toStrictEqual([16, 18]);
});