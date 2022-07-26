const lcs = (x,y, memo = {}) => {
    
    // Base case.
    // if one of the string is empty, the longest common subsequence is empty.
    if(x.length === 0 || y.length === 0){
        return '';
    }

    let key = x + "|" + y;

    if(key in memo) return memo[key];

    let result = '';

    if(x[0] === y[0]){
        // the lcs is this character plus the lcs of remaining chars of x and y.
        result = x[0] + lcs(x.slice(1), y.slice(1), memo) 
    }
    else{
        // the lcs is either in substring of x with non matching character removed and y as whole
        // or vice versa, whichever is bigger.
        const first = lcs(x.slice(1), y, memo) 
        const second = lcs(x ,y.slice(1), memo);
        if(first.length > second.length){
            result = first;
        }
        else{
            result = second;
        }
    }

    memo[key] = result;
    return memo[key];
}

console.log(lcs('BDCABA','ABCBDAB'));
console.log(lcs('GTCGTTCGGAATGCCGTTGCTCTGTAAA','ACCGGTCGAGTGCGCGGAAGCCGGCCGAA'));

 

 
