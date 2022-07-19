const highestproduct = (items) =>{
    
    quickSort(items);

    const n = items.length - 1;
    const high = items[n] * items[n-1] * items[n-2];
    const low = items[0] * items[1] * items[n];
    
    return Math.max(low, high);

};

const quickSort = (items) => {
    QSort(items,0, items.length - 1);
}

const QSort = (items, p, r) => {
    if(p < r){
        // find the pivot index.
        let q = partition(items, p, r);
        QSort(items,p,q - 1);
        QSort(items,q + 1, r);
    }
}

const partition = (items,p,r) =>{

    const random = getRandomInt(p,r + 1);
    swapArrayIndexes(items,random, r);

    const pivot = items[r];

    // length of left array where items are less or equal to the pivot.
    // start at p - 1 which means no element in the left array yet.
    let i = p - 1;

    while(p < r){
        // if current item at p is less then the pivot. it belongs to the 
        // sub-array left of the pivot.
        if(items[p] < pivot){
             // Increment i as this will be the place where current p will move
             i = i + 1;
             swapArrayIndexes(items,p,i);
        }
        p = p + 1;
    }
     
    // the index of pivot
    let q = i + 1;
    // place the pivot element in its correct index.
    swapArrayIndexes(items,q,r);
    return q;

}

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

const swapArrayIndexes = (items, indexA, indexB) =>     {
    const temp = items[indexB];
    items[indexB] = items[indexA];
    items[indexA] = temp; 
}

console.log(highestproduct([1,2,3,4]));
console.log(highestproduct([0,-1,10,5,7]));
console.log(highestproduct([-6,-5,1, 5, 3, 1 , 2]));
