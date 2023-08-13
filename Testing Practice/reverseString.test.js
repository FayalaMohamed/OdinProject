const reverseString = require('./reverseString');

test('reverseString "test"', () => {
    expect(reverseString("test")).toBe("tset");
});

test('reverseString "1234"', () => {
    expect(reverseString("1234")).toBe("4321");
});

test('reverseString "test to reverseString"', () => {
    expect(reverseString("aba")).toBe("aba");
});