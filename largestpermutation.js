const largestPermutation = (array,swaps) => {
    
    let map = {};
    // build a map of numbers between 1 and N and its current indexes in the array.
    for(let index = 0; index < array.length; index++){
        map[array[index]] = index;
    }

    // largest element value is array.length.
    let largest = array.length;

    let currentIndex = 0;
    while(swaps > 0 && currentIndex < array.length){

        // place the largest in the front of the array.
        // get index of largest in current array.
        let indexLargest = map[largest];
        // item at current index which begins at the start of the array.
        let current = array[currentIndex];

        let indexCurrent = map[current];

        // if the largest item is not at the current index.
        if(indexCurrent != indexLargest){
            // swap the item at current index with largest item.
            swapArrayIndexes(array,indexCurrent, indexLargest);
            // adjust the new indexes in the map as well.
            // largest elements new index is the indexcurrent.
            map[largest] = indexCurrent;
            // current elements index is the index of the largest element now.
            map[current] = indexLargest;
        }

        currentIndex = currentIndex + 1;
        swaps = swaps - 1;
        largest = largest - 1;
    }    

    console.log(array);
};

const swapArrayIndexes = (array, indexA, indexB) => {
    const temp = array[indexA];
    array[indexA] = array[indexB];
    array[indexB] = temp;
}

largestPermutation([1,3,2], 1);
largestPermutation([3,2,4,1,5], 2);
largestPermutation([3,2,4,1,5,6,9,8,7], 4);

// 3, 2, 4, 1, 5
// swap 1
// 5, 2, 4, 1 , 3
// swap 2
// 5, 4, 2, 1, 3
// swap 3
// 5, 4, 3, 1 , 2

//3,2,4,1,5,6,9,8,7
// swap 1
// 9, 2, 4, 1, 5, 6, 3, 8, 7
// swap 2
// 9, 8, 4, 1, 5, 6, 3, 2, 7
// swap 3
// 9, 8, 7, 6, 5, 4, 3, 2, 1


