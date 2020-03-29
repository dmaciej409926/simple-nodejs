const sum = require('../src/sum')

test('adds 1 to 2 and gets 3', () => {
    expect(sum(1,2)).toBe(3)

})
test('adds 3 to 4 and gets 7', () => {
    expect(sum(3,4)).toBe(7)
});

