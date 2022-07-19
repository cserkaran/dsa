const gasstation = (gas,cost) => {

    gasflat = [...gas,...gas];
    costflat = [...cost,...cost];

    let curr = 0;
    for(let i = 0; i < gasflat.length;i++){
        let left = gasflat[i] - costflat[i];
        if(left < 0){
            // not enough gas to go. reset station.
            curr = 0;
        }
        else{
            curr = i;
        }
    }

    if(curr > gas.length){
        curr = curr - gas.length;
    }
    return curr;

}

console.log(gasstation([3,5,2,1,7],[4,2,1,9,1]));
console.log(gasstation([3,5,2,1,7].reverse(),[4,2,1,9,1].reverse()));