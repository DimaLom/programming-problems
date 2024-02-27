// ('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'); // => 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4'

const repeatedChars  = (str) => {
    const arr = str.split('')
    
    let result = ''
    let count = 1
    
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] !== arr[i + 1]) {
            result += `${arr[i]}${count > 1 ? count : ''}`
            count = 1
        } else {
            count = count + 1
        }
        
    }
    
    return result
}

console.log(repeatedChars('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'))