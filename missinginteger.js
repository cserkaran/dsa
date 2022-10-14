// Write a function:

// function solution(A);

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].

function solution(A){
    QSort(A);
    
    let smallest = 1;
    for(let i = 0; i < A.length; i++){
        if(A[i] === smallest){
            smallest = smallest + 1;
        }
    }
    return smallest;
};

function QSort(A)
{
    let p = 0;
    let r = A.length - 1;
    quicksort(A, p, r);
}

function quicksort(A, p, r) {

    let stack = [];

    stack.push(p);
    stack.push(r);

    while(stack.length > 0){
        r = stack.pop();
        p = stack.pop();

        if (r - p < 1) {
            continue;
        }

        let q = partition(A,p,r);

        stack.push(q+1);
        stack.push(r);

        stack.push(p);
        stack.push(q-1);

    }
    
}

function partition(A, p , r){
    let pivot = A[r];

    let i =  p - 1;
    while(p < r){
        if(A[p] < pivot){
            i = i + 1;
            swap(A, p, i);
        };
        p = p + 1;
    };

    let q = i + 1;
    swap(A,q,r);
    return q;

}

function swap (A, indexA, indexB) {
    const temp = A[indexB];
    A[indexB] = A[indexA];
    A[indexA] = temp;
}

console.log(solution([1, 3, 6, 4, 1, 2]));
console.log(solution([1, 2, 3]));
console.log(solution([-3, -1]));
console.log(solution([5,8,6,4,2,1]));
console.log(solution([10,9,8,7,11,6,5,4,3,2,1]));

let A = [];
for(let i = 100000; i >= 1; i--){
    A.push(i);
}

console.log(solution(A));

