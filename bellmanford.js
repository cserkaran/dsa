class Vertex {
    constructor(val){
        this.val = val;
        this.p = null;
        this.d = Infinity;
    }
}

class Edge{
    constructor(src,dest,weight){
        this.src = src;
        this.dest = dest;
        this.weight = weight;
    }
}

const bellmanFord = (vertices, edges, source) => {

    let vertexMap = initializeSourceVertices(vertices);
   
    vertexMap[source].d = 0;

    for(let i = 1; i <= vertices.length -1;i++){
        // iterate through V-1 times and relax each edge.
        edges.forEach(edge => {
            relax(edge,vertexMap);
        });
    }

    edges.forEach(edge => {
        let u = vertexMap[edge.src];
        let v = vertexMap[edge.dest];

        if(v.d > u.d + edge.weight){
            return [null,false];
        }
    });

    return [vertexMap,true];
}

const relax = (edge, map) => {

    let u = map[edge.src];
    let v = map[edge.dest];

    if(v.d > u.d + edge.weight){
        v.d = u.d + edge.weight;
        v.p = u;
    }
} 

const initializeSourceVertices = (vertices) => {
    let vertexMap = {};
    vertices.forEach(v => { 
        let node = new Vertex(v);
        vertexMap[v] = node;
    });
    return vertexMap;
}

const getPath = (v) => {
    let path = [];
    let current = v;
    while(current !== null){
        path.push(current.val);
        current = current.p;
    }

    return path.reverse();
} 

let vertices = ['s','t','x','y', 'z'];

let edges = [
    new Edge('s','t',3),
    new Edge('t','x',6),
    new Edge('s','y',5),
    new Edge('t','y',2),
    new Edge('y','z',6),
    new Edge('y','x',4),
    new Edge('z','s',3),
    new Edge('z','x',7),
    new Edge('x','z',2),
    new Edge('y','t',1)
];

let [map, hasNoCycle] = bellmanFord(vertices,edges,'s');
console.log(hasNoCycle);

if(hasNoCycle){
   vertices.forEach(v => {
        let node = map[v];
        let path = getPath(node);
        console.log(`Path is ${path} and distance is ${node.d}`);
   })
}


