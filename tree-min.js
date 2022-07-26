class BinaryNode{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const treeMin = (node) =>{
    const stack = [node];
    let smallest = node.val;

    while(stack.length > 0){

        let current = stack.pop();
        if(current.val < smallest){
            smallest = current.val;
        }

        if(current.left !== null) stack.push(current.left);
        if(current.right !== null) stack.push(current.right);
         
    }

    return smallest;
    
}

const treeMinIter = (node) => {
    
    const queue = [node];
    let smallest = node.val;

    while(queue.length > 0){

        let current = queue.shift();
        if(current.val < smallest){
            smallest = current.val;
        }

        if(current.left !== null) queue.push(current.left);
        if(current.right !== null) queue.push(current.right);
         
    }

    return smallest;

}

const a = new BinaryNode(5);
const b = new BinaryNode(11);
const c = new BinaryNode(3);

a.left = b;
a.right = c;

const d = new BinaryNode(4);
const e = new BinaryNode(1);

b.left = d;
b.right = e;

const f = new BinaryNode(12);
c.right = f;

console.log(treeMin(a));
console.log(treeMinIter(a));