const majorityelementNaive = (items) => {

    let frequencies = {};
    for(let i = 0; i < items.length; i++){
        let item = items[i];
        if(frequencies[item]){
            frequencies[item]++;
        }
        else{
            frequencies[item] = 1;
        }
    }

    let maxfrequency = -Infinity;
    let maxfrequencyItem = 0;

    for(let item in frequencies){
        if(maxfrequency < frequencies[item]){
            maxfrequency = frequencies[item];
            maxfrequencyItem = item;
        }
    }

    return maxfrequencyItem;

}

const majorityelement = (items) => {

    let answer = 0;

    for(let b = 0; b < 32; b++){

        let ones = 0;
        for(let i = 0; i < items.length; i++){
            let num = items[i];
            if((1 << b) & num){
                console.log(`at bit ${b} we have 1`);
                ones +=1 ;
            }
            else{
                console.log(`at bit ${b} we have 0`);
            }
        }

        if(ones > items.length/2){
            answer |= 1 << b 
        }
    }

    return answer;
}

// 011
// 10110 = 0*1 + 1*2 + 1*4 + 0*8 + 1*16
// 010
// 100
// 010

10110
00011
    1

console.log(majorityelement([1,22,2,22,3,12,11,21,22]));

// console.log(majorityelementNaive([3,2,2,4,2,2]));
// console.log(majorityelementNaive([1,3,2,3,3,1]));

// console.log(majorityelement([3,2,2,4,2,2]));
// console.log(majorityelement([1,3,2,3,3,1]));
// console.log(majorityelement([1,22,2,22,3,12,11,21,22]));

// 001
// 011
// 010
// 011
// 011
// 001
// 011 = 3