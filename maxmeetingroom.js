const maxmeetingrooms = (intervals) => {

    let map = {};
    const times = [];
    for(let i = 0; i < intervals.length; i++){
        map[intervals[i][0]] = 1;
        map[intervals[i][1]] = -1;

        times.push(intervals[i][0]);
        times.push(intervals[i][1])

    }

    quicksort(times);
    
    let max = 0;
    let curr = 0;
    for(let index = 0; index < times.length; index++){
        curr += map[times[index]];
        max = Math.max(curr, max);
    }

    return max;
    
};

const quicksort = (items) => {
    qsort(items,0, items.length - 1);
};

const qsort = (items, p, r) => {
    if(p < r){
        let q = partition(items, p, r);
        qsort(items, p, q-1);
        qsort(items, q + 1, r);
    }
}

const partition = (items, p, r) => {

    const random = getRandomInt(p,r + 1);
    swapArrayIndexes(items,random, r);

    const pivot = items[r];

    let i = p - 1;

    while(p < r){
        if(items[p] < pivot){
            i = i + 1;
            swapArrayIndexes(items,i,p);
        };
        p = p + 1;
    }
    
    let q = i + 1;
    swapArrayIndexes(items,q, r);
    return q;

}

const swapArrayIndexes = (items, indexA, indexB) => {
    let temp = items[indexA];
    items[indexA] = items[indexB];
    items[indexB] = temp;
}

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }


console.log(maxmeetingrooms([[5,10],[15,20],[0,30]]));