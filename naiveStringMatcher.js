const match = (T, P) => {

   let n = T.length;
   let m = P.length;
   let shifts = [];
   // O((n-m+1)m)
   for(let s = 0; s <= n-m;s++){ // (n-m + 1)

        let ismatching = true;
        for(let i = 0; i < m ; i++){ // m
            if(T[s + i] !== P[i]){
                ismatching = false;
                break;
            }
        }

        if(ismatching){
            shifts.push(s);
        }
   }

   return shifts;
    
}

// 0 1 2 3 4 
// a a a a a
//   a
console.log(match("aaaaaaaa", "aaaa"));
console.log(match("aabcaab", "aab"));
console.log(match('0000100010100001','001'));
console.log(match('0000100010100001','010'));
console.log(match('0000100010100001','100'))