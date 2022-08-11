const robinKarp = (T, P) => {

    let shifts = [];
    let m = P.length;
    // O(m) operation.
    let p = hornersRule(P, 0, m - 1);
    // O(m) operation.
    let t = hornersRule(T, 0, m - 1);
    let n = T.length;
  
    if(t === p) shifts.push(0);

    let multiplier = Math.pow(10,m - 1);
    //(O(n - m + 1)
    for(s = 1; s <= n-m; s++){
        t =  (10 * (t -  T[s - 1]*multiplier)) +  parseInt(T[s + m - 1]);
        if(t === p) shifts.push(s);
    }

    return shifts;
}

// Given a string s of Decimal digits, calculate its decimal value between begin and end.
const hornersRule = (s, begin, end) => {

    let value = 0;
    // go from end to begin.
    for(let i = end; i >= begin; i--){
        value += Math.pow(10, end - i) * s[i]
    }

    // ((2 * 1) + 1 * 10)
    return value;
}

console.log(robinKarp("235902314152673992131415342112131415", "31415"));
console.log(robinKarp("31415231415", "31415"));
