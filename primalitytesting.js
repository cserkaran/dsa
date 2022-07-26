const isPrime = (p) => {

    // use fermat little theorem.
    // pick a random number between 1 and p-1;
    const n = Math.floor(Math.random() * p-1) + 1;
    return Math.pow(n,p-1) % p === 1;

} 

console.log(isPrime(6));
console.log(isPrime(7));