const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const matrix = []
rl.once('line', size => {
    const [N, M] = size.split(' ').map(Number);
    
    if (!N || !M || isNaN(N) || isNaN(M)) {
        throw Error('N and M must be a number')
    }
    
    rl.on('line', line => {
        const row = line.split(' ').map(Number);
        
        if (row.length !== M) {
            throw Error("Row length isn't equal to M")
        }
        
        if (row.some(num => num < 0 || num > 100)) {
            throw Error("Number in row must be 0 to 100")
        }
        
        matrix.push(row)
        
        if (matrix.length === N) {
            const coasts = new Map([['0,0', matrix[0][0]]])
            for (let n = 0; n < N; n++) {
                for (let m = 0; m < M; m++) {
                    const currentNodeWeight = coasts.get(`${ n },${ m }`)
                    
                    const down = n + 1
                    if (down !== N) {
                        const downNodeCoordinates = `${ down },${ m }`
                        coasts.set(downNodeCoordinates, matrix[down]?.[m] + currentNodeWeight)
                        
                    }
                    
                    const right = m + 1
                    if (right !== M) {
                        const rightNodeCoordinates = `${ n },${ right }`
                        const rightNodeWeight = matrix[n]?.[right]
                        if (n === 0) {
                            coasts.set(rightNodeCoordinates, rightNodeWeight + currentNodeWeight)
                            continue
                        }
                        
                        const oldWeight = coasts.get(rightNodeCoordinates)
                        const newWeight = rightNodeWeight + currentNodeWeight
                        
                        if (newWeight < oldWeight) {
                            coasts.set(rightNodeCoordinates, newWeight)
                        }
                    }
                }
            }
            console.log(coasts.get(`${ N - 1 },${ M - 1 }`))
            
            rl.close()
        }
    })
})
// input:
// 5 5
// 1 1 1 1 1
// 3 100 100 100 100
// 1 1 1 1 1
// 2 2 2 2 1
// 1 1 1 1 1

// output
// 11