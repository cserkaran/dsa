class Vertex{
    constructor(val){
        this.val = val;
        this.inPq = true;
        this.key = Infinity;
        this.index = Infinity;
        this.p = null;
    }
}

class MinPq{

    constructor(items){
        this.items = items;
        this.length = this.items.length;
    }

    extractMin(){
        let min = this.items[0];

        // exchange the extracted min item with the last item.
        this.swap(0,this.length - 1);
        // decrease the queue length.
        this.length = this.length - 1;
        // item at top may break the min heap rule, sink it down.
        this.sink(0);
        return min;
    }

    sink(index){
        
        let leftChildIndex = this.left(index);
        let rightChildIndex = this.right(index);
        
        let minIndex = index;
        let minIndexKey = this.items[index].key;

        if(leftChildIndex < this.length){
            let leftChildIndexKey = this.items[leftChildIndex].key;
            if(leftChildIndexKey <= minIndexKey){
                minIndex = leftChildIndex;
                minIndexKey = leftChildIndexKey;
            }
        }

        if(rightChildIndex < this.length){
            let rightChildIndexKey = this.items[rightChildIndex].key;
            if(rightChildIndexKey <= minIndexKey){
                minIndex = rightChildIndex;
                minIndexKey = rightChildIndexKey;
            }
        }

        if(index !== minIndex){
            this.swap(index,minIndex);
            this.sink(minIndex);
        }
    }

    left(i){
        return 2*i + 1;
    }
    
    right(i){
        return 2*i + 2;
    }

    parent(i){
        if(i === 0) return -1; 
        return Math.floor(i/2);
    }

    decreaseKey(v){
        // v's key has been decreased.
        // it may break min heap rule, swim it up.
        let index = v.index;
        this.swim(index);
    }

    swim(index) {

        let key = this.items[index].key;
        
        let parentIndex = this.parent(index);

        if(parentIndex >= 0 && parentIndex < this.length && key <= this.items[parentIndex].key)
        {
            this.swap(index,parentIndex);
            this.swim(parentIndex);
        }
    }

    swap(i,j){
        let temp = this.items[i];
        this.items[i] = this.items[j];
        this.items[j] = temp;
        // update the new item indexes.
        this.items[i].index = i;
        this.items[j].index = j;
    } 
}

class Edge{
    constructor(src,dest,weight){
        this.src = src;
        this.dest = dest;
        this.weight = weight;
    }
}

const mst = (vertices, edges) => {

    let mstpath = [];
    let index = 0;
    let items = [];
    let nodes = {};

    vertices.forEach(v => {
        let vertex = new Vertex(v);
        vertex.index = index;
        index = index + 1;
        items.push(vertex);
        nodes[v] = vertex;
    });

    // set root key as 0.
    items[0].key = 0;

    const graph = {};
    const edgeMap = {};
    edges.forEach(edge => {
        
        let u = edge.src;
        let v = edge.dest;

        if(u in graph){
            graph[u].push(edge);
        }
        else{
            graph[u] = [edge];
        }

        let reverseEdge = new Edge(edge.dest, edge.src, edge.weight);
        if(v in graph){
            graph[v].push(reverseEdge);
        }
        else{
            graph[v] = [reverseEdge];
        }

        edgeMap[edgeKey(edge)] = edge;
        edgeMap[edgeKey(reverseEdge)] = reverseEdge;
    });

    let pq = new MinPq(items);
    let u = null;
    let minWeight = 0;
    while(pq.length > 0){
        
        u = pq.extractMin();
        if(u.p !== null){
            let key = `${u.p.val}|${u.val}`;
            let treeEdge = edgeMap[key];
            minWeight += treeEdge.weight;
            mstpath.push([treeEdge]);
        }
        u.inPq = false;
         
        let adjacent = graph[u.val];
         
        adjacent.forEach(edge => {
            // u to v is an edge.
            
            let v = edge.dest;
            
            let node = nodes[v];
            
            if(node.inPq && edge.weight < node.key)
            {               
                node.key = edge.weight;
                node.p = u;
                pq.decreaseKey(node);                 
            }
        });
    }

    console.log(`mstprim weight is ${minWeight}`);
    return mstpath;
};

const edgeKey = (edge) =>{
    return `${edge.src}|${edge.dest}`;
}  

let vertices = ['a','b','c','d','e','f','g','h','i'];
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