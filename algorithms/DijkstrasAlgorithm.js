const graph = {
    a: {b: 2, c: 1},
    b: {f: 7},
    c: {d: 5, e: 2},
    d: {f: 2},
    e: {f: 1},
    f: {g: 1},
    g: {}
}

const infiniteNumber = 1000000;

const DijkstrasAlgorithm = (graph, start, end) => {
    const costs = {};
    const processed = [];
    let neighbors = {};
    
    Object.keys(graph).forEach(node => {
        if (node !== start) {
            costs[node] = graph[start][node] || infiniteNumber;
        }
    })
    
    let node = findNodeLowestCost(costs, processed);
    
    while (node) {
        const cost = costs[node];
        neighbors = graph[node];
        
        Object.keys(neighbors).forEach(neighbor => {
            let newCost = cost + neighbors[neighbor];
            
            if (newCost < costs[neighbor]) {
                costs[neighbor] = newCost
            }
        })
        processed.push(node);
        node = findNodeLowestCost(costs, processed)
    }
    return costs
};

const findNodeLowestCost = (costs, processed) => {
    let lowestCost = infiniteNumber;
    let lowestNode;
    
    Object.keys(costs).forEach(node => {
        const cost = costs[node];
        
        if (cost < lowestCost && !processed.includes(node)) {
            lowestNode = cost;
            lowestNode = node;
        }
    })
    return lowestNode;
}

console.log(DijkstrasAlgorithm(graph, 'a', 'g'))