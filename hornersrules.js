// Given a string s of Decimal digits, calculate its decimal value.
const hornersRule = (s) => {

    let m = s.length;

    let value = 0;
    for(let i = m - 1; i >=0; i--){
        value += Math.pow(10, m - 1 - i) * s[i]
    }

    // ((2 * 1) + 1 * 10)
    return value;
}

console.log(hornersRule("3343221"));
console.log(hornersRule("1322"));