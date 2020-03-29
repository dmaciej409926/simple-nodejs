const print = require('../src/print')

test('prints "hello world"', () => {
    const consoleSpy = jest.spyOn(global.console, 'log')
    print('hello world')
    expect(consoleSpy).toHaveBeenCalledWith('hello world')
});

