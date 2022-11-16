const Calculator = require('./calculator');


describe('calculator', ()=> {
	test('Two numbers added properly', () => { 
		expect(Calculator.add(11, 9)).toBe(20);
		expect(Calculator.add(11, -9)).toBe(2);
		expect(Calculator.add(8, 7)).toBe(15);
	})
})

describe('calculator', ()=> {
	test('Two numbers subtracted properly', () => { 
		expect(Calculator.subtract(11, 9)).toBe(2);
		expect(Calculator.subtract(11, -9)).toBe(20);
		expect(Calculator.subtract(8, 7)).toBe(1);
	})
})

describe('calculator', ()=> {
	test('Two numbers multiply properly', () => { 
		expect(Calculator.multiply(11, 9)).toBe(99);
		expect(Calculator.multiply(11, -9)).toBe(-99);
		expect(Calculator.multiply(8, 7)).toBe(56);
	})
})

describe('calculator', ()=> {
	test('Two numbers added properly', () => { 
		expect(Calculator.divide(10, 2)).toBe(5);
		expect(Calculator.divide(99, 3)).toBe(33);
		expect(Calculator.divide(6, 3)).toBe(2);
	})
})