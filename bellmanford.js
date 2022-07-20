class Vertex {
    constructor(val){
        this.val = val;
        this.p = null;
        this.d = Infinity;
    }
}

class Edge{
    constructor(src, dest, weight){
        this.src = src;
        this.dest = dest;
        this.weight = weight;
    }
}

const relax = (u, v, weight) => {
    if(v.d > (u.d + weight)){
        v.d = u.d + weight;
        v.p = u;
    }
} 

const bellmanford = (vertices, edges, source) => {
    
    let vertexMap = {};

    vertices.forEach(v => {
        let node = new Vertex(v);
        vertexMap[v] = node;
    });

    vertexMap[source].d = 0;

    // go through edges |V| - 1 times and relax them.
    for(let i = 1; i <= vertices.length - 1; i++){
        edges.forEach(edge => {
            let u = vertexMap[edge.src];
            let v = vertexMap[edge.dest];
            // relax edge u -> v.
            relax(u,v, edge.weight);
        });
    }

    for(let i = 0; i < edges.length; i++){
        let edge = edges[i];
        let u = vertexMap[edge.src];
        let v = vertexMap[edge.dest];

        let distance = u.d + edge.weight;
         
        if(v.d > distance){
            // there is a negative weight cycle.
            return [false,null];
        }
    }

    return [true, vertexMap];
}

const path = (vertex) => {

    let pathToSrc = [];
    let current = vertex;

    while(current != null){
        pathToSrc.push(current.val);
        current = current.p
    }

    return pathToSrc.reverse();
}

const vertices = ['s','t','x','y','z'];
const edges = [
    new Edge('s','t',  6),
    new Edge('s','y',  7),
    new Edge('t','x',  5),
    new Edge('t','y',  8),
    new Edge('t','z', -4),
    new Edge('x','t', -2),
    new Edge('y','z',  9),
    new Edge('y','x', -3),
    new Edge('z','s',  2),
    new Edge('z','x',  7),
];

[hasNoCycle, vertexMap] = bellmanford(vertices, edges, 'x');

console.log(`hasNoCycle = ${hasNoCycle}`);

if(hasNoCycle === true){
    vertices.forEach(v => {
        let node = vertexMap[v];
        let pathToSrc = path(node);
        console.log(`path is ${pathToSrc} and distance is ${node.d}`);
    });
}