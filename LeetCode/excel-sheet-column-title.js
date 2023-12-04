const updateString = (str, num) => {
    return `${ String.fromCharCode(64 + num) }${ str }`;
};

/**
 * @param {number} columnNumber
 * @return {string}
 */
const convertToTitle = function (columnNumber) {
    let str = '';
    while (columnNumber > 26) {
        let remainder = columnNumber % 26 || 26;
        str = updateString(str, remainder);
        columnNumber = (columnNumber - remainder) / 26;
    }
    str = updateString(str, columnNumber);
    return str;
};