/**
 *
 * @param {number} n
 * @return {string}
 */

const fizzBuzz = (n) => {
    for (let i = 1; i <= n; i++) {
        const isFizz = i % 3 === 0
        const isBuzz = i % 5 === 0
        
        if (isBuzz && isFizz) {
            console.log('fizzbuzz')
            continue;
        }
        if (isFizz) {
            console.log('fizz')
            continue;
        }
        if (isBuzz) {
            console.log('buzz')
            continue;
        }
        
        
        console.log(i)
    }
}

// fizzBuzz(5)
fizzBuzz(15)