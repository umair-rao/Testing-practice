const capitalize = require('./capitalize');

test('String first letter captialze properly', () => { 
	expect(capitalize('umair')).toBe('Umair');
 });