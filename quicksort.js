const quicksort = (items) => {
    qsort(items,0, items.length - 1);
};

const qsort = (items, p, r) => {
    if(p < r){
        const q = partition(items, p, r);
        qsort(items,p, q - 1);
        qsort(items,q + 1, r);
    }
}

const partition = (items,p,r) => {
    
    const randomPivot = getRandomArbitrary(p, r);
    swapIndexes(randomPivot,r);
    console.log("pivot is " + items[r]);
    const pivot = items[r];
    let i = p - 1;

    while(p < r){
        if(items[p] < pivot){
            i = i + 1;
            swapIndexes(items,p,i);
        }
        p = p + 1;
    }

    let q = i + 1;
    swapIndexes(items,q,r);
    return q;

}

const swapIndexes = (items, indexA, indexB) => {
    const temp = items[indexB];
    items[indexB] = items[indexA];
    items[indexA] = temp;
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

let items = [10, 0, -1, 12, 5, 7];
quicksort(items);
console.log(items);

items = [4, 3 , 2, 1];
quicksort(items);
console.log(items);

items = [14, 32 , 22, 11, 2, 11, 21, 22, 44,0,0,01,-1,43,-43,33, 43, 1112,4,3,0,9,9,8,7];
quicksort(items);
console.log(items);

items = [14, 32 , 22, 11, 2, 11, 21, 22, 44,0,0,01,-1,43,-43,33, 43, 1112,4,3,0,9,9,8,7, 1111, 2111, 32, 2, 45, 56, 67, 90, 100];
quicksort(items);
console.log(items);