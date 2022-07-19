const candies = (ratings) => {

    // rating -> indexes
    // 1 - 3 -> 0
    // 3 - 1 -> null 

    let map = {};
    for(let i = 0; i < ratings.length; i++){
        if(map[ratings[i]]){
            map[ratings[i]].push(i);
        }
        else{
            map[ratings[i]] = [i];
        }
    }

    let sortedRatings = [...ratings];
    qsort(sortedRatings);

    let candiesAtIndexMap = {};

    for(let i = 0; i < sortedRatings.length; i++){
        let rating = sortedRatings[i];

        let index = map[rating].pop();

        // kid gets atleast 1 candy.
        let kid_candies = 1;

        let l_candies = -Infinity;
        let r_candies = -Infinity;

        // right kids rating is less then the current kid.
        if(index + 1 < ratings.length && ratings[index + 1] < rating){
            r_candies = candiesAtIndexMap[index + 1] + 1;
            kid_candies = Math.max(kid_candies, r_candies);
        }

        // left kids rating is less then current kid.
        if(index - 1 >= 0 && rating > ratings[index - 1]){
            l_candies = candiesAtIndexMap[index - 1] + 1;
            kid_candies = Math.max(kid_candies, l_candies);
        }

        candiesAtIndexMap[index] = kid_candies;
  
    }

    return candiesAtIndexMap;

}

const qsort = (a) =>{
    quicksort(a, 0, a.length - 1);
}

const quicksort = (a,p,r) => {
    if(p < r){
        let q = partition(a,p,r);
        quicksort(a,p,q-1);
        quicksort(a,q+1,r);
    }
}

const partition = (a,p,r) => {

    const pivot = a[r];
    let  i = p - 1;
    while(p < r){
        if(a[p] < pivot){
            i = i + 1;
            swapArrayIndexes(a, p, i);
        }
        p = p + 1;
    }

    let q = i + 1;
    swapArrayIndexes(a,q,r);
    return q;
}

const swapArrayIndexes = (items, indexA, indexB) => {
    let temp = items[indexA];
    items[indexA] = items[indexB];
    items[indexB] = temp;
}

console.log(candies([1,3,7, 1]));
console.log(candies([1,2,7,4,3,3,1]));

// 1 - 1
// 2 - 2
// 7 - 3
// 4 - 2
// 3 - 1
// 3 - 2
// 1 - 1 