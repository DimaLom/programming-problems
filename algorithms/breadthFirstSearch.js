const graph = {
    a: ['b', 'c'],
    b: ['f'],
    c: ['d', 'e'],
    d: ['f'],
    e: ['f'],
    f: ['g'],
}

let count = 0;

const breadthFirstSearch = (graph, start, end) => {
    let queue = [start];
    while (queue.length > 0) {
        const current = queue.shift();
        if (!graph[current]) {
            graph[current] = [];
        }
        if (graph[current].includes(end)) {
            return true;
        } else {
            queue = [...queue, ...graph[current]]
        }
        count += 1;
    }
    return false;
}

console.log(breadthFirstSearch(graph, 'a', 'd'))
console.log(`count:`, count);