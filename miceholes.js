const miceholes = (mice, holes) => {

    quicksort(mice);
    quicksort(holes);
   
    let maxMoves = -Infinity;
    for(let i = 0; i < mice.length ; i++){
        maxMoves= Math.max(maxMoves, Math.abs(mice[i] - holes[i]));
    }
    return maxMoves;
};


const quicksort = (a) => {
    qsort(a,0,a.length - 1);
}

const qsort = (a,p,r) => {
    if(p < r){
        let q = partition(a,p,r);
        qsort(a,p,q-1);
        qsort(a,q+1,r);
    }
};

const partition = (a,p,r) => {

    const pivot = a[r];
    let i = p - 1;
    while(p < r){
        if(a[p] < pivot){
            i = i + 1;
            swapArrayIndexes(a,p,i);
        }
        p = p + 1;
    }

    q = i + 1;
    swapArrayIndexes(a,q,r);
    return q;

}

const swapArrayIndexes = (a, x, y) => { 
    let temp = a[x];
    a[x] = a[y];
    a[y] = temp;
}

console.log(miceholes([3,2,-4],[0,-2,4]));