const uniquePaths = (m, n) => {
    return countPaths(0,0,m,n);
};

const countPaths = (i, j, m, n, memo = {}) => {

    let key = `${i}|${j}`;

    if(i === m - 1 && j == n - 1) return 1;

    if(key in memo) return memo[key];

    let down = 0;
    if(i < m){
        down = countPaths(i + 1, j, m, n, memo);
    }
     
    let right = 0;
    if(j < n) {
        right = countPaths(i, j + 1, m, n, memo);
    }

    let paths = down + right;
    memo[key] = paths;
    return memo[key];
}


console.log(uniquePaths(3,3));
console.log(uniquePaths(3,7));
console.log(uniquePaths(20,20));