
let _lastArray = [];
/**
 * Generates a random string with similar characters for easier temporary remembering, (like SMS login or so)
 * @param {integer} Length length of the string generated
 * @param {integer} difference the amount of different characters in the string
 * @return {string} Random generated string, with limited characters
 */
function GenerateNumber(Length = 6, difference = 3) {
    let used = [];
    for (let i = 0; i < difference; i++) {
        const num = RandomNumber(0, 10);
        if (!used.includes(num))
            used.push(num);
        else i--;
    }
    _lastArray = used;
    return _RandomString(Length, used);
}
/**
 * Generates a random string of characters
 *
 * @param {number} [Length=6] length of the string generated
 * @param {number} [difference=4] amount of different characters used
 * @param {boolean} [allowNumbers=false] if numbers should be included in the character list
 * @returns randomly generated text string
 * @memberof Generator
 */
function GenerateString(Length = 6, difference = 4, allowNumbers = false) {
    const used = _GenerateChars(difference, allowNumbers);
    _lastArray = used;
    return _RandomString(Length, used);
}
/**
 * Generates a random string from an array (of characters).
 *
 * @param {*} fromArray array (of characters) to generate random string rom
 * @param {number} [Length=6] amount of characters (or segments) the new random string should have
 * @returns new random string
 * @memberof Generator
 */
function GenerateFrom(fromArray, Length = 6) {
    _lastArray = fromArray;
    return _RandomString(Length, fromArray);
}

function _RandomString(Length = 6, used) {
    let number = "";

    while (number.length < Length) {
        const num = used[RandomNumber(used.length)]
        number += num;
    }
    return number;
}
function _GenerateChars(difference, allowNumbers) {
    let chars = [];
    for (let i = 0; i < difference; i++) {
        let char = RandomChar(allowNumbers);

        if (!chars.includes(char) && char != "")
            chars.push(char);
        else i--;
    }
    return chars;
}
/**
 * Gets the characters used in the last generated array
 * @return {string} the array of characters used in the last generated string
 */
function getLast() { return _lastArray; }


module.exports = {
    getLast, GenerateFrom, GenerateNumber, GenerateString
}
function RandomNumber() {
    let min, max;
    if (arguments.length == 1) {
        max = arguments[0];
        return Math.floor(Math.random() * (max));
    }
    else if (arguments.length == 2) {
        [min, max] = arguments;
        return Math.floor(Math.random() * (max - min)) + min;
    }
    else return Math.floor(Math.random() * 2);
}

function RandomChar(allowNumbers) {
    const letters = (allowNumbers) ? '0123456789abcdefghijklmnopqrstuvwxyz' : 'abcdefghijklmnopqrstuvwxyz';
    return letters[Math.floor(Math.random() * letters.length)];
}