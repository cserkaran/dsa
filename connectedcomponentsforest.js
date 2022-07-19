class Vertex{
    constructor(val){
        this.val = val;
    }
}

class UnionNode {
    constructor(vertex){
        this.vertex = vertex;
        this.rank = 0;
        this.p = null;
        this.children = [];
    }
}

class Edge {
    constructor(src,dest){
        this.src = src;
        this.dest = dest;
    }
}

const connectedComponents = (vertices,edges) => {
    let components = [];

    // 1. make each node a union set node.
    let vertexNodes = {};
    vertices.forEach(v => {
        vertexNodes[v.val] = makeSet(v);
    });

    // 2. go through edges and union the nodes.
    edges.forEach(edge => {
        let u = vertexNodes[edge.src.val];
        let v = vertexNodes[edge.dest.val];
        if(findSet(u) != findSet(v)){
            union(u,v);
        }
    });

    //3. find components.
    let processed = {};
    vertices.forEach(v => {
        let node = vertexNodes[v.val];
        if(processed[node.p.vertex.val] === undefined){
            let component = [];
            processed[node.p.vertex.val] = true;
            component.push(node.p.vertex.val);
            node.p.children.forEach(child => {
                component.push(child.vertex.val);
            });
            components.push(component);
        }
    });

    return components;
}

const makeSet = (x) => {
    let node = new UnionNode(x);
    node.rank = 0;
    node.p = node;
    node.children = [];
    return node;
}

const union = (x,y) => {
    link(findSet(x), findSet(y));
}

const link = (x,y) => {
    if(x.rank > y.rank) {
        y.p = x;
        x.children.push(y);
    }
    else{
        x.p = y;
        y.children.push(x);
        if(x.rank === y.rank){
            y.rank = y.rank + 1;
        }
    }
}

const findSet = (x) => {
    if(x !== x.p){
        x.p = findSet(x.p);
    }
    return x.p;
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

console.log(connectedComponents(vertices,edges));