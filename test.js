function stringLength(string) {
	const length = string.length;
	if (length>=1 && length<=10) {
		return length;
	}
	else {
		return('String is not is in specified range')
	}
	
}

console.log(stringLength('aldfffffffi'));

function reverseString(str) {
    const reverse = str.split("").reverse().join("");
	if (str.length == reverse.length){
		return reverse;
	}
	else {
		return('Error(Length is not equal')
	}
	
}
console.log(reverseString('hello'));

class Calculator {
	constructor(number1, number2) {
		this.number1 = number1;
		this.number2 = number2;
	}
	add() {
		return this.number1 + this.number2;
	}

	subtract() {
		return this.number1 - this.number2;
	}

	multiply() {
		return this.number1 * this.number2;
	}

	divide() {
		return this.number1 / this.number2;
	}
}

const firstTask = new Calculator(20 , 6)

console.log(firstTask.subtract());
console.log(firstTask.add());
console.log(firstTask.multiply());
console.log(firstTask.divide());