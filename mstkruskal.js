class Edge{
    constructor(src,dest,weight){
        this.src = src;
        this.dest = dest;
        this.weight = weight;
    }
}

class UnionNode{
    constructor(val){
        this.val = val;
        this.p = null;
        this.rank = 0;
    }
}

const makeSet = (vertex) => {
    let node = new UnionNode(vertex);
    node.p = node;
    return node;
}

const union = (u,v) => {
    if(u.rank < v.rank){
        u.p = v
    }
    else{
        v.p = u;
        if(u.rank === v.rank){
            u.rank = u.rank + 1;
        }
    }
}

const findSet = (u) => {
    
    if(u !== u.p){
        u.p = findSet(u.p);
    }

    return u.p;
}

const mst = (vertices,edges) => { 

    let mst = [];

    //1. make each vertex as its own set.
    let map = {};
    vertices.forEach(vertex => {
        map[vertex] = makeSet(vertex);
    });

    //2. Sort edges by edge weight.
    qsort(edges);

    //3. for each edge, add it to the MST if they do not already belong to same set.
    // else union them.
    let minWeight = 0;
    edges.forEach(edge => {
        let uSet = findSet(map[edge.src]);
        let vSet = findSet(map[edge.dest]);

        if(uSet !== vSet){
            union(uSet,vSet);
            minWeight += edge.weight;
            // the edge was added to mst..
            mst.push(edge);
        }
    });

    console.log(`mstkruskal weight is ${minWeight}`);
    return mst;
};

const qsort = (edges) => {
    quicksort(edges,0,edges.length - 1);
};

const quicksort = (a,p,r) => {
    if(p < r){
        let q = partition(a,p,r);
        quicksort(a,p,q-1);
        quicksort(a,q+1,r);
    };
};

const partition = (a,p,r) => {
    let pivot = a[r];

    let i = p-1;
    
    while(p < r){
        if(a[p].weight < pivot.weight){
            i = i + 1;
            swap(a,i,p);
        }
        p = p + 1;
    }


    let q = i + 1;
    swap(a,r,q);
    return q;
} 

const swap = (a,i,j) =>{
    let temp = a[i];
    a[i] = a[j];
    a[j] = temp;
};

let vertices = ['a','b','c','d','e','f','g','h','i','g'];
let edges = [
    new Edge('a','b',4),
    new Edge('a','h',8),
    new Edge('b','h',11),
    new Edge('b','c',8),
    new Edge('c','d',7),
    new Edge('c','f',4),
    new Edge('c','i',2),
    new Edge('d','e',9),
    new Edge('d','f',14),
    new Edge('e','f',10),
    new Edge('g','f',2),
    new Edge('h','g',1),
    new Edge('i','h',7),
    new Edge('i','g',6)
];

console.log(mst(vertices,edges));