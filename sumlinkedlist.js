function ListNode(val, next) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
}


const addTwoNumbers = (l1, l2) => {

     

    let carry = 0;    
    let a = 0;
    let b = 0;

    let l1current = l1;
    let l2current = l2;


    let firstNode = null;
    let lastNode = null;
    
    while(l1current !== null || l2current !== null){
        a = getValue(l1current);
        b = getValue(l2current);
        let currentSum = a + b + carry;

        if(currentSum > 9){
            currentSum = currentSum - 10;
            carry = 1;
        }
        else{
            carry = 0;
        }

        let currentNode = new ListNode(currentSum);
        if(firstNode == null){
            firstNode = currentNode;
            lastNode = currentNode;
        }
        else{
            lastNode.next = currentNode;
            lastNode = currentNode;
        }


        l1current =  moveNext(l1current);
        l2current = moveNext(l2current);
    }

    if(carry === 1 && lastNode != null){
        lastNode.next = new ListNode(1);
    }
    
    return firstNode;
};


const getValue = (l) => {
    if(l === null) return 0;
    return l.val;
}

const moveNext = (l) => {
    if(l === null) return null;
    return l.next;
}


let a = new ListNode(2);
let b = new ListNode(4);
let c = new ListNode(4);

a.next = b;
b.next = c;

let d = new ListNode(5);
let e = new ListNode(6);
let f = new ListNode(4);

d.next = e;
e.next = f;

console.log(addTwoNumbers(a, d));

let h = new ListNode(2);
let g = new ListNode(4);
let i = new ListNode(9);
h.next = g;
g.next = i;

let j = new ListNode(5);
let k= new ListNode(6);

j.next = k;


let n1 = new ListNode(9);
let n2 = new ListNode(9);
let n3 = new ListNode(9);
let n4 = new ListNode(9);
let n5 = new ListNode(9);
let n6 = new ListNode(9);
let n7 = new ListNode(9);

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n6;
n6.next = n7;

let n10 = new ListNode(9);
let n11 = new ListNode(9);
let n12 = new ListNode(9);
let n13 = new ListNode(9);
n10.next = n11;
n11.next = n12;
n12.next = n13;


console.log(addTwoNumbers(h, j));

console.log(addTwoNumbers(n1,n10));