const findDuplicates = <EL extends string | number, ARR extends EL[]>
(array: ARR) => {
    const hash: Partial<Record<EL, boolean>> = {}
    
    for (let i = 0; i < array.length; i++) {
        if (hash[array[i]]) return true
        
        hash[array[i]] = true
    }
    
    return false
}