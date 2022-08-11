const computeTransitionFunction  = (P) => { 

    let characters = getCharacterSet(P);
    let m = P.length;
    let transitionFn = {};
    // Transition(q,a) = Sigma(P[:q]a)
    for(let q = 0; q <= m; q++){
        characters.forEach(a => {
            let key = getKey(q,a);
            let x = P.slice(0,q) + a;
            transitionFn[key] = SigmaFunction(x,P);
        });
    }

    return transitionFn;
}

// Sigma(x) = MAX(k : P[:k] is a suffix of x)
const SigmaFunction = (x, P) => {
   
    let k = x.length;
    // while P[:k] is not a suffix of x, reduce k.
    let pk = P.slice(0,k);
    let i = 0;
    // We slice x from i to its length,
    while(x.slice(i,x.length) !== pk){
        k = k - 1;
        // reduce possible suffix length by 1.
        pk = P.slice(0,k);
        // This effectively decreases the suffix length 
        // by cutting off first i characters to match length k of 
        // Pattern P prefix.
        i = i + 1;
    }
    return k;

}

const finiteAutomationMatcher = (T,P) => {
  
    let transitionFn = computeTransitionFunction(P);    
    let q = 0;

    let shifts = [];
    let m = P.length;
    for(let i = 0; i < T.length; i++){
        
        let key = getKey(q,T[i]);
        q = transitionFn[key];
        if(q === m){
            shifts.push(i-m + 1);
        }
    }

    return shifts;
};

const getKey = (q,a) => {
    let key = `${q}|${a}`;
    return key;
}

const getCharacterSet = (P) => {
    let set = new Set();
    let characters = [];
    for(let i = 0; i < P.length; i++){
        let a = P[i];
        if(!set.has(a)){
            characters.push(a);
            set.add(a);
        }
    }

    return characters;
}


let P = '1001001';
let T = 
// computeTransitionFunction(['ababaca');
console.log(finiteAutomationMatcher('1001001001001',P));