class BinaryNode{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const minPathSum = (node) => {

    if(node  === null)
        return 0;

    let leftPathSum = node.val + minPathSum(node.left);
    let rightPathSum = node.val + minPathSum(node.right);

     

    return Math.max(leftPathSum,rightPathSum);
    
}

const a = new BinaryNode(5);
const b = new BinaryNode(11);
const c = new BinaryNode(3);

a.left = b;
a.right = c;

const d = new BinaryNode(4);
const e = new BinaryNode(2);

b.left = d;
b.right = e;

const f = new BinaryNode(2);
c.right = f;

console.log(minPathSum(a));