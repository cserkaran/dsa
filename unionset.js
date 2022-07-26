class UnionNode{
    constructor(val){
        this.val = val;
        this.p = null;
        this.rank = 0;
        this.children = [];
    }
}

class Edge{
    constructor(src,dest) {
        this.src = src;
        this.dest = dest;
    }
}

const connectedComponents = (vertices,edges) => {

    let components = [];

    let map = {};
    // Each vertex is a union node in itself.
    vertices.forEach(vertex => {
        map[vertex] = makeSet(vertex);
    });

    edges.forEach(edge => {
        let u = map[edge.src];
        let v = map[edge.dest];
        
        let uSet = findSet(u);
        let vSet = findSet(v);

        if(uSet != vSet){
            union(uSet,vSet);
        }
    });

    let processed = {};

    vertices.forEach(vertex => {
        let vertexNode = map[vertex];
        
        let set = findSet(vertexNode);
        console.log(set);
        if(processed[set.val] === undefined){

            processed[set.val] = true;
            let component = [];
            component.push(set.val);
            set.children.forEach(child => {
                component.push(child.val);
            });
            components.push(component);
        }
    });

    return components;
    
};

const makeSet = (vertex) => {
    let node = new UnionNode(vertex);
    // node's parent set is itself.
    node.p = node;
    return node;
}

const union = (u,v) => {

    if(u.rank < v.rank){
        u.p = v;
        v.children.push(u);
    }
    else{
        v.p = u;
        if(u.rank === v.rank){
            u.rank = u.rank + 1;
        }
        u.children.push(v);
    }
}

// find set.
const findSet = (vertexNode) => {

    if(vertexNode.p !== vertexNode){
        // do path compression as well.
        vertexNode.p = findSet(vertexNode.p);
    }

    return vertexNode.p;
}

let edges = [
    new Edge('a','c'),
    new Edge('b','d'),
    new Edge('l','m'),
    new Edge('l','n'),
    new Edge('c','e'),
    new Edge('b','l'),
    new Edge('d','f'),
    new Edge('a','g'),
    new Edge('h','k'),
    new Edge('d','a')
]

let vertices = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n'];

const graph = { 
    'a' : ['c','b'],
    'b' : ['d'],
    'c' : ['e'],
    'd' : ['f'],
    'e' : [],
    'f' : [],
 }

 console.log(connectedComponents(vertices,edges));

 // a - c - e  h  i  j k
 // 
 // b - d - f  g  l  m n