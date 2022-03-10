const inr = require('./index');

test('returns eighteen', () => {
    expect(inr(18))
    .toBe("eighteen rupees");
});

test('returns three hundred', () => {
    expect(inr(300))
    .toBe("three hundred rupees");
});

test('returns five thousand', () => {
    expect(inr(5000))
    .toBe("five thousand rupees");
});

test('returns one crore five', () => {
    expect(inr(10000005))
    .toBe("one crore five rupees");
});

test('twenty four rupees and four paise', () => {
    expect(inr(24.04))
    .toBe("twenty four rupees and four paise");
});