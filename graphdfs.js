class Vertex{
    constructor(val){
        this.val = val;
        this.color = 'white';
        this.d = Infinity;
        this.f = Infinity;
        this.parent = null;
    }
}

class LinkedNode{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.next = null;
    }

    add(node){
        if(this.head === null){
            this.head = node;
        }
        else{
            node.next = this.head;
            this.head = node;
        }
    }
}

const dfs = (graph, vertices) => {

    let list = new LinkedList();

    vertices.forEach(u => {
        if(u.color === 'white'){
            // Visit each vertex in the graph for depth first search.
            dfsVisit(graph, u, list);
        }
    });

    return list;
}

const dfsVisit = (graph, u, list) => {

    
    time = time + 1;
    u.d = time;
    u.color = 'gray';

    let vertices = graph[u.val];

    if(vertices !== undefined){
    vertices.forEach(v => {
            if(v.color === 'white'){
                // vertex has not been discovered yet. Discover it now.
                v.parent = u;
                dfsVisit(graph, v, list);
            }
        });
    }

    time = time + 1;
    // Set the discovered finished time.
    u.f = time;
    u.color = 'black';

    list.add(new LinkedNode(u));
}

let socks = new Vertex('socks');
let shoes = new Vertex('shoes');
let watch = new Vertex('watch');
let undershorts = new Vertex('undershorts');
let pants = new Vertex('pants');
let belt = new Vertex('belt');
let shirt = new Vertex('shirt');
let tie = new Vertex('tie');
let jacket = new Vertex('jacket');

let vertices = [shirt,tie,jacket,socks,shoes,watch,undershorts,pants,belt];
 
const graph = {
    'shirt' : [belt, tie],
    'undershorts' : [pants,shoes],
    'socks' : [shoes],
    'pants': [shoes, belt],
    'tie' : [jacket],
    'belt' : [jacket]
}

let time = 0;
let list = dfs(graph, vertices);

let current = list.head;
while(current != null){
    console.log(`${current.val.val} finish = ${current.val.f}`);
    current = current.next;
}