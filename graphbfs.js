class Queue{

    constructor(){
        this.elements = {};
        this.head = 0;
        this.tail = 0;
    }

    enqueue(element){
        this.elements[this.tail] = element;
        this.tail++;
    }

    dequeue(){
        const item = this.elements[this.head];
        delete this.elements[this.head];
        this.head++;
        return item;
    }

    peek(){
        return this.elements[this.head];
    }

    get length() {
        return this.tail - this.head;
    }

    get isEmpty() {
        return this.length === 0;
    }
}

class Vertex{
    constructor(val){
        this.val = val;
        this.color = 'white';
        this.d = Infinity;
        this.parent = null;
    }
}

const bfs = (graph, s) => {

    // color the start vertex as gray.
    s.color = 'gray';
    s.parent = null;
    s.d = 0;

    let queue = new Queue();
    queue.enqueue(s);
    while(queue.isEmpty === false){

        let u = queue.dequeue();
        let vertices = graph[u.val];
        vertices.forEach(v => {
            if(v.color === 'white'){
                // v is not discovered yet.
                v.color = 'gray';
                v.parent = u;
                v.d = u.d + 1;
                queue.enqueue(v);
            }
        });

        // all immediate nodes of u have been discovered, mark it black.
        u.color = 'black';
    }

}

printPath = (s,v) => { 
    if(s === v){
        
    }
    else if(v.parent === null){
        console.log(`no path from ${s.val} to ${v.val} exists`);
    }
    else{
        printPath(s,v.parent);
    }

    console.log(v.val);
}


let s = new Vertex('s');
let r = new Vertex('r');
let u = new Vertex('u');
let v = new Vertex('v');
let t = new Vertex('t');
let w = new Vertex('w');
let y = new Vertex('y');
let x = new Vertex('x');
let z = new Vertex('z');



const graph = { 
    's' : [r,u,v],
    'r' : [w,t,s],
    'v' : [w,s,y],
    'u' : [t,y],
    't' : [u, r],
    'y' : [x,v,u],
    'w' : [r,x,z,v],
    'x' : [y,w,z],
    'z': [w,x]
}



bfs(graph,u);
printPath(u,w);