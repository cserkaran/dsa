const isIsomorphic = (s,t) => {

    let map = {}
    let processed = {} 

    for(let i = 0;i < s.length;i++){
       
        if(s[i] in map){
            if(map[s[i]] !== t[i]){
                return false;
            }
        }
        else{
            if(t[i] in processed){
                return false;
            }
    
            map[s[i]] = t[i];
        }

       
        processed[t[i]] = true;
    }

    return true;

}

console.log(isIsomorphic('paper', 'title'));
console.log(isIsomorphic('foo', 'bar'));
console.log(isIsomorphic("bbbaaaba","aaabbbba"));
 console.log(isIsomorphic("badc","baba"));