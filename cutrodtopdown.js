const cutrod = (prices,length) => {
    
   let r = {};
   r[0] = 0;

   for(let i = 0; i < length; i++){
        let max = -Infinity;
        console.log(r)
        for(let j = 0; j <= i; j++){
            max = Math.max(max, prices[i] + r[(i + 1)-j]);
        } 
        
        r[i] = max; 
    }

   return r[length - 1];

}

// console.log(cutrod([1,5,8,9, 10, 17,17,20,24,30], 1)); // 1.
// console.log(cutrod([1,5,8,9, 10, 17,17,20,24,30], 2)); // 5.
// console.log(cutrod([1,5,8,9, 10, 17,17,20,24,30], 3)); // 8.
console.log(cutrod([1,5,8,9, 10, 17,17,20,24,30], 4)); // 10.
// console.log(cutrod([1,5,8,9, 10, 17,17,20,24,30], 5)); // 13.
// console.log(cutrod([1,5,8,9, 10, 17,17,20,24,30], 6)); // 17.
// console.log(cutrod([1,5,8,9, 10, 17,17,20,24,30], 7)); // 18.
// console.log(cutrod([1,5,8,9, 10, 17,17,20,24,30], 8)); // 22.
// console.log(cutrod([1,5,8,9, 10, 17,17,20,24,30], 9)); // 25.
// console.log(cutrod([1,5,8,9, 10, 17,17,20,24,30], 10)); // 25.
// console.log(cutrod([1,5,8,9, 10, 17,17,20,24,30,1,5,8,9, 10, 17,17,20,24,1], 14)); 