function processArray(arr) {
    return arr.map(num => num % 2 === 0 ? num ** 2 : num * 3);
}

function formatArrayStrings(strings, numbers) {
    return strings.map((str, index) => {
        const num = numbers[index];
        return num % 2 === 0 ? str.toUpperCase() : str.toLowerCase();
    });
}