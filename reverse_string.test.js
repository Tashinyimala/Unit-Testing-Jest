const reverseString = require('./reverse_string');

test('reverseString function exist', () => {
    expect(reverseString).toBeDefined();
});

test('String reverses', () => {
    expect(reverseString('hello')).toEqual('olleh');
});

test('string reverses with uppercase', () => {
    expect(reverseString('Hello')).toEqual('olleh');
});