const pivotIndex = (arr) => {

    const sum = arr.reduce((a, b) => a + b, 0);
    
    let r = 0;
    for(let i = 0;i < arr.length; i++) {
        // the left sum at current index is the running sum till now, excluding the current value.
        const leftSum = r;

         // increment the running sum to including current val.
         r = r + arr[i];

        // the right sum at current index is the total - running sum at  current index including the current val.
        const rightSum = sum - r;
        
        if(leftSum === rightSum){
            return i;
        }
       
    };
    

    return - 1;

}



console.log(pivotIndex([1,7,3,6,5,6]));
console.log(pivotIndex([1,2,3]));
console.log(pivotIndex([2,1,-1]));
