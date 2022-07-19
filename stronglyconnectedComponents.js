class Vertex{
    constructor(val){
        this.val = val;
        this.d = Infinity;
        this.f = Infinity;
        this.parent = null;
        this.color = 'white';
    }
}

let time = 0;

const stronglyconnectedComponents = (graph,vertices) => { 
    // 1. DFS on graph.
    dfs(graph, vertices);
    // 2. Build a transpose of Graph.
    const transposedGraph = transpose(graph, vertices);
    // 3. DFS on Transposed graph, but calling vertices in descending order of finish time.
    let sortedVertices = [...vertices];
    qsort(sortedVertices);
    let components = [];
    dfs(transposedGraph,sortedVertices,components);
    return components;
};

const dfs = (graph, vertices, components = null) => {
    // global time variable, reset to zero.
    time = 0;
    // reset everything to default and color all vertices white in graph.
    vertices.forEach(v => {
        v.d = Infinity;
        v.f = Infinity;
        v.parent = null;
        v.color = 'white';
    });

    // dfs visit each vertex if still colored white.
    vertices.forEach(v => {
        if(v.color === 'white'){
            // if vertex is white, it starts a new root of 
            // a component being discovered.
            let component = [v];
            dfsVisit(graph, v, component);
            // we want components to be outputted.
            if(components !== null && component.length > 0){
                components.push(component);
            }
        }
    });
};

const dfsVisit = (graph, u, component) => {

    time = time + 1;
    // u is being discovered..
    u.d = time;
    // gray out the vertex.
    u.color = 'gray';

    let adjacent = graph[u.val];
    if(adjacent !== undefined){
        adjacent.forEach(v => {
            if(v.color === 'white'){
                // v is yet to be discovered.
                // u is v's predecessor
                v.parent = u;
                component.push(v);
                // dfs visit v.
                dfsVisit(graph,v, component);
            }
        });
    };

    // u is finished.
    time = time + 1;
    u.f = time;
    // blacken the finished node.
    u.color = 'black';

    
}

const transpose = (graph, vertices) => { 
 
    let transposeGraph = {};
    
    vertices.forEach(u => {
        let adjacent = graph[u.val];
        adjacent.forEach(v => {
            // there is an edge u-v in original 
            // then add edge v-u to transpose.
            if(transposeGraph[v.val] === undefined){
                transposeGraph[v.val] = [u];
            }
            else{
                transposeGraph[v.val].push(u);
            }
        });
    });

    return transposeGraph;
}


// sort the vertices by their finish time in descending order.
const qsort = (vertices) => {
    quicksort(vertices,0,vertices.length -1);
}

const quicksort = (vertices, p, r) => {
    if(p < r){
        let q = partition(vertices,p,r);
        quicksort(vertices,p, q-1);
        quicksort(vertices,q+1,r);
    }
}

const partition = (vertices, p, r) => {
    // pivot element is the right most end of the array.
    let pivot = vertices[r];
    // start index of the left subarray, where items are greater then pivot.
    let i = p-1;

    while(p < r){
        if(vertices[p].f > pivot.f){
            i = i + 1;
            swap(vertices,i,p);
        }
        p = p + 1;
    }

    let q = i + 1;
    swap(vertices,q,r);
    return q;

}

const swap = (array,a,b) =>{
    let temp = array[a];
    array[a] = array[b];
    array[b] = temp;
} 

let a = new Vertex('a');
let b = new Vertex('b');
let c = new Vertex('c');
let d = new Vertex('d');
let e = new Vertex('e');
let f = new Vertex('f');
let g = new Vertex('g');
let h = new Vertex('h');

let vertices = [a,b,c,d,e,f,g,h];

const graph = { 
    'a' : [e],
    'b' : [a],
    'c' : [b,d],
    'd' : [c],
    'e' : [b],
    'f' : [e,b,g],
    'g' : [f,c],
    'h' : [g,h]
}

let components = stronglyconnectedComponents(graph, vertices);
console.log(components);

