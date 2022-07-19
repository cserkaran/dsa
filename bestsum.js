const bestSum = (targetSum,numbers, memo = {}) => {
    if(targetSum in memo) return memo[targetSum];
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;

    let shortestCombination  = null;

    for(let num of numbers){
        const remainderCombination = bestSum(targetSum - num, numbers, memo);
        if(remainderCombination != null){
            let resultCombination = [...remainderCombination, num];
            if(shortestCombination == null || resultCombination.length < shortestCombination.length){
                shortestCombination = resultCombination;
            }
        }
    }

    memo[targetSum] = shortestCombination;
    return memo[targetSum];
}

console.log(bestSum(8,[2,3,5]));
console.log(bestSum(10000,[1,2,5,105]));