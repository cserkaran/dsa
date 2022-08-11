const robinKarpMatcher = (T,P, d, q) => {
    let shifts = [];
    let n = T.length;
    let m = P.length;

    h = mod(Math.pow(d,m-1), q);

    let p = 0;
    let t = 0;

    for (let i = 0 ; i < m; i++){
        p = mod((d*p + parseInt(P[i])),q);
        t = mod(d*t + parseInt(T[i]),q);
    }    
        
    for(let s = 0; s <= n-m; s++){
        if(p === t){
            if(hornersRule(P,0,m-1,d) == hornersRule(T,s,s + m - 1,d)){
                shifts.push(s);
            }
        }
       
        if(s < n-m) {
            t =  mod(((d * (t -  T[s]*h)) +  parseInt(T[s + m])), q);
        }
    }

    return shifts;
};

function mod(n, m) {
    return ((n % m) + m) % m;
  }

// Get decimal value of string of decimal characters in a window of begin to end.
const hornersRule = (S,begin, end , d) => {

    let value = 0;
    let m = 0;

    for(let i = end ; i >= begin; i--){
        value += S[i] * Math.pow(d,m);
        m++;
    }

    return value;
}

const numbers = (S, length) => { 
    
    let n = [];
    let begin = 0;
    let end = length - 1;

    while(end < S.length){
        n.push(hornersRule(S, begin, end, 10));
        begin = begin + 1;
        end = end + 1;
    }

    return n;
} 


console.log(robinKarpMatcher("235902314152673992131415342112131415", "31415", 10, 13));
console.log(robinKarpMatcher("31415231415", "31415", 10, 13));