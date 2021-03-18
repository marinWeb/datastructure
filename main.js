class Graph{
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }
    depthFirstSearch(start){
        var resultLst = [];
        var visitedVtxs = {};
        var self = this;
        function DFSHelper(vtx){
            if(!self.adjacencyList[vtx])    return;

            visitedVtxs[vtx] = true;
            resultLst.push(vtx);

            self.adjacencyList[vtx].forEach(function(itm){
                if(!visitedVtxs[itm]){
                    DFSHelper(itm);
                }
            });
        }

        DFSHelper(start);

        return resultLst;
    }

    breadthFirstSearch(start){
        var resultLst = [];
        var visitedVtxs = {};
        var self = this;

        function 
    }
}

var graph = new Graph();

graph.addVertex('S');
graph.addVertex('P');
graph.addVertex('U');
graph.addVertex('X');
graph.addVertex('Q');
graph.addVertex('Y');
graph.addVertex('V');
graph.addVertex('R');
graph.addVertex('W');
graph.addVertex('T');

graph.addEdge('S', 'P');
graph.addEdge('S', 'U');

graph.addEdge('P', 'X');
graph.addEdge('U', 'X');

graph.addEdge('P', 'Q');
graph.addEdge('U', 'V');

graph.addEdge('X', 'Q');
graph.addEdge('X', 'V');
graph.addEdge('X', 'V');

graph.addEdge('Q', 'R');
graph.addEdge('Y', 'R');

graph.addEdge('Y', 'W');
graph.addEdge('V', 'W');

graph.addEdge('R', 'T');
graph.addEdge('W', 'T');


console.log(graph.depthFirstSearch('S'));




