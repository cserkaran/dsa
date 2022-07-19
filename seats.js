const minseatmovesBruteForce = (seating) => {

    let crosses = [];

    let moves = Infinity;
     
    for(let i = 0; i < seating.length; i++){
        if(seating[i] === "x"){
            crosses.push(i);
        }
    }

    for(let i = 0; i < crosses.length; i++){
        crosses[i] = crosses[i] - i;
    }
    
    for(let i = 0; i < seating.length; i++){
        let currentMoves = 0;
        for(let k = 0; k < crosses.length; k++){
            currentMoves += Math.abs(i - crosses[k]);
        }
        moves = Math.min(moves, currentMoves);
    }
    
    return moves;

}


const minseatmoves = (seating) => {

    let crosses = [];

    for(let i = 0; i < seating.length; i++){
        if(seating[i] === "x"){
            crosses.push(i);
        }
    }

    for(let i = 0; i < crosses.length; i++){
        crosses[i] = crosses[i] - i;
    }

    let currentMoves = 0;

    let start = crosses[Math.floor(crosses.length / 2)];
        
    for(let k = 0; k < crosses.length; k++){
        currentMoves += Math.abs(start - crosses[k]);
    }

    return currentMoves;

}

console.log(minseatmovesBruteForce("..x...x..xx...x"));
console.log(minseatmovesBruteForce(".x..x..xx."));
console.log(minseatmovesBruteForce("xx..xx....xxx"));
console.log("--------------------------------")
console.log(minseatmoves("..x...x..xx...x"));
console.log(minseatmoves(".x..x..xx."));
console.log(minseatmoves("xx..xx....xxx"));