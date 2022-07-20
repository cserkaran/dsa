class LinkedList{
    constructor(){
        this.head = null;
    }

    add(node){
        if(this.head === null){
            this.head = node;
        }
        else{
            // we want the current node in the beginning.
            let temp = this.head;
            this.head = node;
            node.next = temp;
        }
    }
}

class LinkedVertex{
    constructor(vertex){
        this.vertex = vertex;
        this.next = null;
    }
}

class Vertex {
    constructor(val){
        this.val = val;
        this.color = 'white';
        this.p = null;
        this.d = Infinity;
    }
}

const relax  = (u,v, weight) => {
    if(v.d > u.d + weight){
        v.d = u.d + weight;
        v.p = u ;
    }
}

const singleSourceShortestPath = (graph, source) => {
    
    // 1. Create vertex objects with white color.
    // this will be used by topological sort.
    let vertices = new Map();
    graph.forEach((_,v) => {
        let vertex = new Vertex(v);
        vertices.set(v, vertex);
    });

    // 2. Topologically sort the vertices of the graph.
    let sortedVertices = topologicalSort(graph, vertices);
    
    // 3. Go through vertices in sorted order
    let current = sortedVertices.head;
    while(current != null){
        //3.1 get adjacent vertices.
        let u = current.vertex;
        let edges = graph.get(u.val);
        // for each edge u -> v, relax that edge.
        edges.forEach(edge => {
            let v = vertices.get(edge[0]);
            let weight = edge[1];
            relax(u,v,weight);
        })
        current = current.next;
    };

    console.log(vertices);
}

const topologicalSort = (graph, vertices) => {

    let sortedVertices = new LinkedList();

    vertices.forEach((v,_) => {
         if(v.color === 'white'){
            dfsVisit(graph, v,vertices,sortedVertices);
         }
    });

    return sortedVertices;
}

const dfsVisit = (graph,u, vertices, sortedVertices) => {

    u.color = 'gray';

    let edges = graph.get(u.val);
    edges.forEach(edge => {
        let v = vertices.get(edge[0]);
        if(v !== undefined && v.color === 'white'){
            dfsVisit(graph,v, vertices, sortedVertices);
        }
    });

    u.color = 'black';
    let vertexNode = new LinkedVertex(u);
    sortedVertices.add(vertexNode);
}

const graph = new Map();

graph.set('t', [['x',7],['y',4],['z',2]]);
graph.set('x', [['y',-1],['z', 1]]);
graph.set('y', [['z',-2]]);
graph.set('z', [[]]);
graph.set('r', [['s',5],['t',2]]);
graph.set('s', [['x',6],['t',2]]);


let sortedVertices = singleSourceShortestPath(graph);


