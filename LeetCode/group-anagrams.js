/**
 * @param {string[]} words
 * @return {string[][]}
 */
const groupAnagrams = function (words) {
    if (!words?.length || (words.length === 1 && !words[0])) {
        return [[""]]
    }

    const dictionary = words.reduce((dict,word) => {
        const key = word.split('').sort().join('')
        if (dict[key]) {
            dict[key].push(word)
        } else {
            dict[key] = [word]
        }
        return dict
    }, {})

    return Object.values(dictionary)
};


console.log('output 1 => ', groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat", "eatable"]));
console.log('output 2 => ', groupAnagrams(["a"]));
console.log('output 3 => ', groupAnagrams([""]));
console.log('output 4 => ', groupAnagrams([]));
