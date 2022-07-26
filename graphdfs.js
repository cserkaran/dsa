const depthFirstGraph = (graph,source) => {

    console.log('========DFS=================');

    const stack = [source];
    
    // While stack is not empty.
    while(stack.length > 0){
        const current = stack.pop();
        console.log(current);
        for(let neighbor of graph[current]){
            stack.push(neighbor);
        }
    }

    console.log('========DFS=================');
}

const breadthFirstSearch = (graph, source) => {
    console.log('========BFS=================');

    const queue = [source];

    while(queue.length > 0){
        const current = queue.shift();
        console.log(current);
        for(let neighbor of graph[current]){
            queue.push(neighbor);
        }
    }

    console.log('========BFS=================');

}

const graph = { 
    'a' : ['c', 'b'],
    'b' : ['d'],
    'c' : ['e'],
    'd' : ['f'],
    'e' : [],
    'f' : [],
 }

 depthFirstGraph(graph,'a');
 breadthFirstSearch(graph,'a');
