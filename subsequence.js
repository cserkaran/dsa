const subsequence = (s,t) => {
    // go through t, the longer string.
    
    let sCount = 0;

    for(let tCount = 0; tCount < t.length; tCount++){
        // found a matching character in t and s.
        if(t[tCount] === s[sCount]) {
            sCount++;
            // we found all characters of s, in order of appearance in t.
            if(sCount === s.length) {
                return true;
            }
        }
    }

    return false;
}

console.log(subsequence('abc','ahbgdc'));   // true
console.log(subsequence('axc','ahbgdc'));   // false
console.log(subsequence('ace','abcde'));    // true
console.log(subsequence('aec','abcde'));    // false
console.log(subsequence('ab','baab'));      // true