const RES = Symbol("res");

const memoize = (fn) => {
    let globalCache = new Map();
    return (...params) => {
        let currentCache = globalCache;
        for (const param of params) {
            if (!currentCache.has(param)) {
                currentCache.set(param, new Map());
            }
            currentCache = currentCache.get(param);
        }
        
        if (currentCache.has(RES)) return currentCache.get(RES);
        
        const result = fn(...params);
        
        currentCache.set(RES, result);
        return result;
    };
};
