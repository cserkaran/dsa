class Edge {
    constructor(u,v,weight){
        this.u = u;
        this.v = v;
        this.weight = weight;
    }
}

class Vertex{
    constructor(val){
        this.val = val;
        this.d = Infinity;
        this.p = null;
        this.pqIndex = -1;
    }
}

class MinPq{
    
    // initialize with an empty list of items and queue length 0.
    constructor(){
        this.items = [];
        this.length = 0
    }

    // extract the min element at top.
    extractMin(){
        // get the item with min key, which will be index zero always.
        let min = this.items[0];
        // exchange the min key element with the last index element.
        let lastIndex = this.length - 1;
        this.exchange(0,lastIndex);
        // reduce the length.
        this.length = this.length - 1;
        // new element at the top may be larger then it's children, sink it down.
        this.sink(0);
        return min;
    }

    // insert an item in the queue.
    insert(item){
        // add the item after the last element.
        this.items.push(item);
        // queue length is increased by 1.
        this.length = this.length + 1;
        // new element at the end may be smaller then its parent, swim it up.
        let lastIndex = this.length - 1;
        item.pqIndex = lastIndex;
        this.swim(lastIndex);
    }

    // update queue after the key of the item has decreased.
    decreaseKey(item){
         // Item key may be less then its parent, swim it up.
         this.swim(item.pqIndex);
    }

    swim(index){
       
       let indexKey = this.items[index].d;
       let parentIndex = this.parent(index);
 
       if(parentIndex > -1 && this.items[parentIndex].d > indexKey){
            this.exchange(parentIndex,index);
            this.swim(parentIndex);
       }
    }

    sink(index){
        let minIndex = index;
        let minIndexKey = this.items[minIndex].d;

        let leftIndex = this.left(index);
        if(leftIndex > -1 && this.items[leftIndex].d < minIndexKey){
            minIndex = leftIndex;
            minIndexKey = this.items[leftIndex].d;
        }

        let rightIndex = this.right(index);
        if(rightIndex > -1 && this.items[rightIndex].d < minIndexKey){
            minIndex = rightIndex;
            minIndexKey = this.items[rightIndex].d;
        }

        if(index !== minIndex){
            this.exchange(index,minIndex);
            this.sink(minIndex);
        }

    }

    exchange(a,b) {
        let temp = this.items[a];
        this.items[a] = this.items[b];
        this.items[b] = temp;

        this.items[a].pqIndex = a;
        this.items[b].pqIndex = b;
    }

    left(index){
        let leftIndex = 2*index + 1;
        if(leftIndex >= this.length){
            return -1;
        }
        else{
            return leftIndex;
        }
    }

    right(index){
        let rightIndex = 2*index + 2;
        if(rightIndex >= this.length){
            return -1;
        }
        else{
            return rightIndex;
        }
    }

    parent(index){
        
        let parentIndex = Math.floor(index/2);
        if(parentIndex >= this.length){
            return -1;
        }
        else{
            return parentIndex;
        }
    }

   
}

const dijkstra = (source,graph, vertices) => {

    let minPq = new MinPq();

    graph.forEach((_,vertexKey) => {
        let vertex = vertices.get(vertexKey);
        vertex.p = null;
        if(vertex === source){
            vertex.d = 0;
        }
        else{
            vertex.d = Infinity;
        }
        
        minPq.insert(vertex);
    });

    while(minPq.length > 0){
         
        let u = minPq.extractMin();
        let adjacent = graph.get(u.val);
        
        // for each edge u -> v
        adjacent.forEach(edge => {
             
            let v = edge.v;
            
            if(relax(u,v,edge.weight)){
                minPq.decreaseKey(v);
            }
        });
    }
}

const relax = (u,v,weight) =>{

    if(v.d > u.d + weight){
        v.d = u.d + weight;
        v.p = u;
        return true;
    }
    else{
        return false;
    }
}

const printPath = (v) => {
    let path = [];

    let current = v;
    
    while(current != null){
        path.push(current.val);
        current = current.p;
    }

    path.reverse();
    return path;
}

// vertices
const s = new Vertex('s');
const t = new Vertex('t');
const x = new Vertex('x');
const y = new Vertex('y');
const z = new Vertex('z');

let vertices = new Map();
vertices.set('s',s);
vertices.set('t',t);
vertices.set('x',x);
vertices.set('y',y);
vertices.set('z',z);

// adjacency list.
const graph = new Map();

graph.set('z',[new Edge(z,s,7),new Edge(z,x,6)]);
graph.set('y',[new Edge(y,z,2),new Edge(y,t,3),new Edge(y,x,9)]);
graph.set('s',[ new Edge(s,y,5),new Edge(s,t,10),new Edge(s,z,8)]);
graph.set('x',[ new Edge(x,z,7)]);
graph.set('t',[ new Edge(t,x,1),new Edge(t,y,2)]);

let source = t;

vertices.forEach(vertex => {
   let source = vertex;
   console.log(`===============source is ${source.val}===============`);
   dijkstra(source,graph, vertices);
   vertices.forEach(v => {
        console.log(`Path is ${printPath(v)} and distance from ${source.val} is ${v.d}`);
   });
   console.log(`======================================================`);
});
