function removeBlanks(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            result += str[i];
        }
    }
    return result;
}

// Get Digits
function getDigits(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i]) && str[i] !== ' ') {
            result += str[i];
        }
    }
    return Number(result);
}

// Acronyms
function acronym(str) {
    let result = '';
    let capitalize = true;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ' || str[i] === '-' || str[i] === ',') {
            capitalize = true;
        } else if (capitalize) {
            result += str[i].toUpperCase();
            capitalize = false;
        }
    }
    return result;
}

// Count Non-Spaces
function countNonSpaces(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            count++;
        }
    }
    return count;
}

// Remove Shorter Strings
function removeShorterStrings(arr, length) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= length) {
            result.push(arr[i]);
        }
    }
    return result;
}