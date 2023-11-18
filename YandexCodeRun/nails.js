const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const lines = []
rl.on("line", line => {
    
    lines.push(line);
    
    if (lines.length === 2) {
        const [n, elements] = lines
        const nails = Number(n)
        const coordinates = elements.split(' ').map(Number).sort((a, b) => a - b);
        
        if (nails !== coordinates.length) {
            console.log('Количество гвоздиков не соответствует количеству координат')
            rl.close()
        }
        
        const distances = new Array(nails).fill(0);
        
        distances[1] = coordinates[1] - coordinates[0];
        
        if (nails > 2) {
            distances[2] = coordinates[2] - coordinates[0];
            
            for (let i = 3; i < nails; i++) {
                distances[i] = Math.min(distances[i - 2], distances[i - 1]) + coordinates[i] - coordinates[i - 1];
            }
        }
        
        console.log('coordinates', coordinates)
        console.log('distances', distances)
        console.log('Результат:', distances[nails - 1]);
        rl.close();
    }
})