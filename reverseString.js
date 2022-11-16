function reverseString(str) {
    const reverse = str.split("").reverse().join("");
	return reverse;
}
// console.log(reverseString('umair'));

module.exports = reverseString;