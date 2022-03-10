const inr = require('./index');

test('returns eighteen', () => {
    expect(inr(18))
    .toBe("eighteen rupee(s)");
});

test('returns three hundred', () => {
    expect(inr(300))
    .toBe("three hundred rupee(s)");
});

test('returns five thousand', () => {
    expect(inr(5000))
    .toBe("five thousand rupee(s)");
});

test('returns one crore five', () => {
    expect(inr(10000005))
    .toBe("one crore five rupee(s)");
});

test('twenty four rupees and four paise', () => {
    expect(inr(24.04))
    .toBe("twenty four rupee(s) and four paise");
});