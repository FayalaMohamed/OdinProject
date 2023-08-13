const capitalize = require('./capitalize');

test('Capitalize "test"', () => {
    expect(capitalize("test")).toBe("Test");
});

test('Capitalize "Test"', () => {
    expect(capitalize("Test")).toBe("Test");
});

test('Capitalize "1234"', () => {
    expect(capitalize("1234")).toBe("1234");
});

test('Capitalize "test to capitalize"', () => {
    expect(capitalize("test to capitalize")).toBe("Test to capitalize");
});