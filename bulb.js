const bulbNaive = (a) =>{
     
    let cost = 0;
    for(let i=0; i < a.length;i++){
        if(a[i] === 0) {
            // turn on this bulb.
            a[i] = 1;
            cost += 1;
            // flip all the bulbs to the right.
            for(let j = i + 1; j < a.length; j++){
                if(a[j] === 0){
                    a[j] = 1;
                }
                else{
                    a[j] = 0;
                }
            }
        }
    }

    return cost;

};

const bulb = (a) => {
    
    let cost = 0;
    for(let i = 0; i < a.length; i++){
        if(cost % 2 !== 0){
            if(a[i] === 0){
                a[i] = 1;
            }
            else{
                a[i] = 0;
            }
        }
        
        if(a[i] === 0){
            a[i] = 1;
            cost += 1;
        }
        
    }

    return cost;
}

console.log(bulbNaive([1,0,1]));
console.log(bulbNaive([1,0,1,0,0,0,0,1,1,0]));
console.log(bulb([1,0,1]));
console.log(bulb([0,0,1,0,0,0,0,1,1,0]));