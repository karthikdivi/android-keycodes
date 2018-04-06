var androidKeyCodes = {
  "HOME": 3,
  "BACK": 4,
  "0": 7,
  "1": 8,
  "2": 9,
  "3": 10,
  "4": 11,
  "5": 12,
  "6": 13,
  "7": 14,
  "8": 15,
  "9": 16,

  "ARROWUP": 19,
  "ARROWDOWN": 20,
  "ARROWLEFT": 21,
  "ARROWRIGHT": 22,

  "A": 29,
  "B": 30,
  "C": 31,
  "D": 32,
  "E": 33,
  "F": 34,
  "G": 35,
  "H": 36,
  "I": 37,
  "J": 38,
  "K": 39,
  "L": 40,
  "M": 41,
  "N": 42,
  "O": 43,
  "P": 44,
  "Q": 45,
  "R": 46,
  "S": 47,
  "T": 48,
  "U": 49,
  "V": 50,
  "W": 51,
  "X": 52,
  "Y": 53,
  "Z": 54,
  " ": 62,
  "SPACE": 62,

  "BACKSPACE": 67,
  "ENTER": 66,
  "MENU": 82
}

module.exports = function(input) {
	if(input){
		return androidKeyCodes[input.toUpperCase()]
	}
	return null
}
