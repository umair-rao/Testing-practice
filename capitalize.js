const capitalize = (str) => {
	const firstLetter = str[0].toUpperCase();
	const smallString = str.slice(1);
	return firstLetter + smallString;
}

// console.log(capitalize('qmair'))

module.exports = capitalize;