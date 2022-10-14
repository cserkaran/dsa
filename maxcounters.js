// You are given N counters, initially set to 0, and you have two possible operations on them:

// increase(X) − counter X is increased by 1,
// max counter − all counters are set to the maximum value of any counter.
// A non-empty array A of M integers is given. This array represents consecutive operations:

// if A[K] = X, such that 1 ≤ X ≤ N, then operation K is increase(X),
// if A[K] = N + 1 then operation K is max counter.
// For example, given integer N = 5 and array A such that:

//     A[0] = 3
//     A[1] = 4
//     A[2] = 4
//     A[3] = 6
//     A[4] = 1
//     A[5] = 4
//     A[6] = 4
// the values of the counters after each consecutive operation will be:

//     (0, 0, 1, 0, 0)
//     (0, 0, 1, 1, 0)
//     (0, 0, 1, 2, 0)
//     (2, 2, 2, 2, 2)
//     (3, 2, 2, 2, 2)
//     (3, 2, 2, 3, 2)
//     (3, 2, 2, 4, 2)
// The goal is to calculate the value of every counter after all operations.

// Write a function:

// class Solution { public int[] solution(int N, int[] A); }

// that, given an integer N and a non-empty array A consisting of M integers, returns a sequence of integers representing the values of the counters.

// Result array should be returned as an array of integers.

// For example, given:

//     A[0] = 3
//     A[1] = 4
//     A[2] = 4
//     A[3] = 6
//     A[4] = 1
//     A[5] = 4
//     A[6] = 4
// the function should return [3, 2, 2, 4, 2], as explained above.

// Write an efficient algorithm for the following assumptions:

// N and M are integers within the range [1..100,000];
// each element of array A is an integer within the range [1..N + 1].

function solution(N, A){
    let counters = Array(N).fill(0);

    if(A.length > 1){
        let uniqueItems = [...new Set(A)];
        // All are max counter operations, nothing will increase.
        if(uniqueItems.length === 1 && uniqueItems[0] === N + 1) return counters;
    }
    let max = 0;
    for(let k = 0; k < A.length;k++){

        let X = A[k];
        //if A[K] = N + 1 then operation K is max counter.
        //max counter − all counters are set to the maximum value of any counter.
        if(X === N + 1){
            maxCounter(max,counters);
        }
        else{
            // if A[K] = X, such that 1 ≤ X ≤ N, then operation K is increase(X),
            let value = increase(X,counters);
            max = Math.max(value,max);
        }
        
    }
    
    return counters;

}

function maxCounter(max,counters){
    for(let k = 0; k < counters.length;k++){
        counters[k] = max;
    }
}

function increase(X, counters){
    counters[X - 1]= counters[X - 1] + 1;
    return counters[X - 1];
}

console.log(solution(5,[3,4,4,6,1,4,4]));
console.log(solution(5,[6,6,6,6]));