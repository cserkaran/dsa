const cutrod = (prices,length, memo = {}) => {

    if(length in memo) return memo[length];

    // cannot cut a rod of length 0.
    if(length === 0) return 0;

    let max = -Infinity;

    for(let i = 0; i < length; i++){
        // Get the maximum of current Max, and after cutting a rod of length i+1 as first cut and remaining rod.
        max = Math.max(max, prices[i] + cutrod(prices,length - (i + 1)));// i + 1 to offset start of indexing from 0.
    }

    memo[length] = max;
    return max;
}

console.log(cutrod([1,5,8,9, 10, 17,17,20,24,30], 1)); // 1.
console.log(cutrod([1,5,8,9, 10, 17,17,20,24,30], 2)); // 5.
console.log(cutrod([1,5,8,9, 10, 17,17,20,24,30], 3)); // 8.
console.log(cutrod([1,5,8,9, 10, 17,17,20,24,30], 4)); // 10.
console.log(cutrod([1,5,8,9, 10, 17,17,20,24,30], 5)); // 13.
console.log(cutrod([1,5,8,9, 10, 17,17,20,24,30], 6)); // 17.
console.log(cutrod([1,5,8,9, 10, 17,17,20,24,30], 7)); // 18.
console.log(cutrod([1,5,8,9, 10, 17,17,20,24,30], 8)); // 22.
console.log(cutrod([1,5,8,9, 10, 17,17,20,24,30], 9)); // 25.
console.log(cutrod([1,5,8,9, 10, 17,17,20,24,30], 10)); // 30.
console.log(cutrod([1,5,8,9, 10, 17,17,20,24,30,1,5,8,9, 10, 17,17,20,24,1], 14)); 