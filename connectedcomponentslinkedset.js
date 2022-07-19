class Vertex{
    constructor(val){
        this.val = val;
    }
}

class Edge{
    constructor(src,dest) {
        this.src = src;
        this.dest = dest;
    }
}

class LinkedSet{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    add(node){
        // nodes set is the current set.
        node.p = this;
        if(this.head === null){
            this.head = node;
            this.tail = node;
        }
        else{
            // get current tail.
            let tailNode = this.tail;
            // current tail nodes next node will the newly added node.
            tailNode.next = node;
            // new tail is the current node.
            this.tail = node;
        }
    }
}

class LinkedSetNode{
    constructor(val){
        this.val = val;
        this.next = null;
        this.p = null;
    }
}

const connectedComponents = (edges, vertices) => {

    let components = [];

    // 1. First, make Set i.e each vertex is an individual set in itself.
    let vertexNodes = {};
    vertices.forEach(v => {
       vertexNodes[v.val] = makeSet(v);
    });
        
    // 2. Go thru the edges, find the sets of the edge src and dest 
    // vertex and if they are different, do a union of the same.
    edges.forEach(edge => {

        let u = vertexNodes[edge.src.val];
        let v = vertexNodes[edge.dest.val];
        
        // there is an edge between src and dest vertex, merge them to single set.
        if(findSet(u) !== findSet(v)){   
            union(u, v);
        };
    });

    let processed = {};
    vertices.forEach(v => {

        let set = vertexNodes[v.val].p;
        if(processed[set.head.val.val] === undefined){
            processed[set.head.val.val] = true;
            let component = [];
            let current = set.head;
            while(current != null){
                component.push(current.val.val);
                current = current.next;
            }
            components.push(component);
        }
    });

    return components;
}

const makeSet = (v) => {
    let node = new LinkedSetNode(v);
    let set = new LinkedSet();
    set.add(node);
    return node;
}

const union = (u, v) => {

    let uSet = u.p;

    let vSet = v.p;

    // move elements of v's set to u's set.
    let vHead = vSet.head;

    let uTail = uSet.tail;

    uTail.next = vHead;

    uSet.tail = vSet.tail;

    let current = vHead;
    while(current != null){
        current.p = uSet;
        current = current.next;
    }

    // clean up vSet.
    vSet.head = null;
    vSet.tail = null;

    delete vSet;
} 

const findSet = (v) => {
    return v.p;
}


let a = new Vertex('a');
let b = new Vertex('b');
let c = new Vertex('c');
let d = new Vertex('d');
let e = new Vertex('e');
let f = new Vertex('f');
let g = new Vertex('g');
let h = new Vertex('h');
let i = new Vertex('i');
let j = new Vertex('j');


let vertices = [a,b,c,d,e,f,g,h,i,j];

let edges = [
    new Edge(a,b),
    new Edge(a,c),
    new Edge(b,d),
    new Edge(b,c),
    new Edge(e,f),
    new Edge(f,g),
    new Edge(h,i)
]

const graph = {
    'a' : [b,c],
    'b' : [c,a,d],
    'c' : [a,b],
    'd' : [b],
    'e' : [f],
    'f' : [e,g],
    'g' : [f],
    'h' : [i],
    'i' : [h],
    'j' : []
};

console.log(connectedComponents(edges, vertices));