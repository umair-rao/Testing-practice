const string = require('./reverseString');

test('String reversed properly', () => { 
	const newString = 'pakistan';
	expect(string(newString)).toBe('natsikap');
 });