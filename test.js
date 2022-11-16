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