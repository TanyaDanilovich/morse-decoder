const MORSE_TABLE = {
	'.-': 'a',
	'-...': 'b',
	'-.-.': 'c',
	'-..': 'd',
	'.': 'e',
	'..-.': 'f',
	'--.': 'g',
	'....': 'h',
	'..': 'i',
	'.---': 'j',
	'-.-': 'k',
	'.-..': 'l',
	'--': 'm',
	'-.': 'n',
	'---': 'o',
	'.--.': 'p',
	'--.-': 'q',
	'.-.': 'r',
	'...': 's',
	'-': 't',
	'..-': 'u',
	'...-': 'v',
	'.--': 'w',
	'-..-': 'x',
	'-.--': 'y',
	'--..': 'z',
	'.----': '1',
	'..---': '2',
	'...--': '3',
	'....-': '4',
	'.....': '5',
	'-....': '6',
	'--...': '7',
	'---..': '8',
	'----.': '9',
	'-----': '0',
};

function decode(expr) {

	let arrWorlds = expr.split('**********')
	let arrWorld = []
	for (let i = 0; i < arrWorlds.length; i++) {
		let char = []
		for (let j = 0; j < arrWorlds[i].length; j += 10) {
			let binary = []
			for (let n = 0; n < 10; n += 2) {
				let el = ((arrWorlds[i]).slice(j, j + 10).slice(n, n + 2))
				if (el === '00') { el = '' }
				if (el === '10') { el = '.' }
				if (el === '11') { el = '-' }
				binary += el
			}
			//console.log(MORSE_TABLE[binary]);

			char.push(MORSE_TABLE[binary])
		}
		//console.log(char);
		arrWorld.push(char.join(''))
	}

	return arrWorld.join(' ')

}

module.exports = {
	decode
}