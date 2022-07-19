const fib = (n) => {
    
    const table = Array(n+1).fill(0);
    table[1] = 1;

    for(let i=2;i<table.length;i++){
        table[i] = table[i-1] + table[i-2];
    }
    return table[n];

}

console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(49));
console.log(fib(50));
console.log(fib(51));
console.log(fib(55));
console.log(fib(100));
console.log(fib(1000));