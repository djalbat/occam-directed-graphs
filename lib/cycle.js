"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Cycle;
    }
});
const _vertex = require("./utilities/vertex");
class Cycle {
    constructor(vertexNames){
        this.vertexNames = vertexNames;
    }
    getVertexNames() {
        return this.vertexNames;
    }
    static fromBackEdgeAndDirectedGraph(backEdge, directedGraph) {
        let cycle;
        const sourceVertexName = backEdge.getSourceVertexName(), targetVertexName = backEdge.getTargetVertexName(), sourceVertex = directedGraph.getVertexByVertexName(sourceVertexName), targetVertex = directedGraph.getVertexByVertexName(targetVertexName);
        targetVertex.forwardsDepthFirstSearch((vertex, predecessorVertexes)=>{
            if (vertex === sourceVertex) {
                const vertexes = [
                    ...predecessorVertexes,
                    sourceVertex
                ], vertexNames = (0, _vertex.vertexNamesFromVertexes)(vertexes);
                cycle = new Cycle(vertexNames);
                return true;
            }
        });
        return cycle;
    }
    static fromSourceVertexAndPredecessorVertexes(sourceVertex, predecessorVertexes) {
        const vertexes = [
            ...predecessorVertexes,
            sourceVertex
        ], vertexNames = (0, _vertex.vertexNamesFromVertexes)(vertexes), cycle = new Cycle(vertexNames);
        return cycle;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jeWNsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgdmVydGV4TmFtZXNGcm9tVmVydGV4ZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvdmVydGV4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN5Y2xlIHtcbiAgY29uc3RydWN0b3IodmVydGV4TmFtZXMpIHtcbiAgICB0aGlzLnZlcnRleE5hbWVzID0gdmVydGV4TmFtZXM7XG4gIH1cblxuICBnZXRWZXJ0ZXhOYW1lcygpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQmFja0VkZ2VBbmREaXJlY3RlZEdyYXBoKGJhY2tFZGdlLCBkaXJlY3RlZEdyYXBoKSB7XG4gICAgbGV0IGN5Y2xlO1xuXG4gICAgY29uc3Qgc291cmNlVmVydGV4TmFtZSA9IGJhY2tFZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSwgLy8vXG4gICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IGJhY2tFZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKSwgLy8vXG4gICAgICAgICAgc291cmNlVmVydGV4ID0gZGlyZWN0ZWRHcmFwaC5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSksXG4gICAgICAgICAgdGFyZ2V0VmVydGV4ID0gZGlyZWN0ZWRHcmFwaC5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICB0YXJnZXRWZXJ0ZXguZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoKCh2ZXJ0ZXgsIHByZWRlY2Vzc29yVmVydGV4ZXMpID0+IHtcbiAgICAgIGlmICh2ZXJ0ZXggPT09IHNvdXJjZVZlcnRleCkge1xuICAgICAgICBjb25zdCB2ZXJ0ZXhlcyA9IFtcbiAgICAgICAgICAgICAgICAuLi5wcmVkZWNlc3NvclZlcnRleGVzLFxuICAgICAgICAgICAgICAgIHNvdXJjZVZlcnRleFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICB2ZXJ0ZXhOYW1lcyA9IHZlcnRleE5hbWVzRnJvbVZlcnRleGVzKHZlcnRleGVzKTtcblxuICAgICAgICBjeWNsZSA9IG5ldyBDeWNsZSh2ZXJ0ZXhOYW1lcyk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY3ljbGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVNvdXJjZVZlcnRleEFuZFByZWRlY2Vzc29yVmVydGV4ZXMoc291cmNlVmVydGV4LCBwcmVkZWNlc3NvclZlcnRleGVzKSB7XG4gICAgY29uc3QgdmVydGV4ZXMgPSBbXG4gICAgICAgICAgICAuLi5wcmVkZWNlc3NvclZlcnRleGVzLFxuICAgICAgICAgICAgc291cmNlVmVydGV4XG4gICAgICAgICAgXSxcbiAgICAgICAgICB2ZXJ0ZXhOYW1lcyA9IHZlcnRleE5hbWVzRnJvbVZlcnRleGVzKHZlcnRleGVzKSxcbiAgICAgICAgICBjeWNsZSA9IG5ldyBDeWNsZSh2ZXJ0ZXhOYW1lcyk7XG5cbiAgICByZXR1cm4gY3ljbGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDeWNsZSIsInZlcnRleE5hbWVzIiwiZ2V0VmVydGV4TmFtZXMiLCJmcm9tQmFja0VkZ2VBbmREaXJlY3RlZEdyYXBoIiwiYmFja0VkZ2UiLCJkaXJlY3RlZEdyYXBoIiwiY3ljbGUiLCJzb3VyY2VWZXJ0ZXhOYW1lIiwiZ2V0U291cmNlVmVydGV4TmFtZSIsInRhcmdldFZlcnRleE5hbWUiLCJnZXRUYXJnZXRWZXJ0ZXhOYW1lIiwic291cmNlVmVydGV4IiwiZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lIiwidGFyZ2V0VmVydGV4IiwiZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoIiwidmVydGV4IiwicHJlZGVjZXNzb3JWZXJ0ZXhlcyIsInZlcnRleGVzIiwidmVydGV4TmFtZXNGcm9tVmVydGV4ZXMiLCJmcm9tU291cmNlVmVydGV4QW5kUHJlZGVjZXNzb3JWZXJ0ZXhlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUFxQkE7Ozt3QkFGbUI7QUFFekIsTUFBTUE7SUFDbkIsWUFBWUMsV0FBVyxDQUFFO1FBQ3ZCLElBQUksQ0FBQ0EsV0FBVyxHQUFHQTtJQUNyQjtJQUVBQyxpQkFBaUI7UUFDZixPQUFPLElBQUksQ0FBQ0QsV0FBVztJQUN6QjtJQUVBLE9BQU9FLDZCQUE2QkMsUUFBUSxFQUFFQyxhQUFhLEVBQUU7UUFDM0QsSUFBSUM7UUFFSixNQUFNQyxtQkFBbUJILFNBQVNJLG1CQUFtQixJQUMvQ0MsbUJBQW1CTCxTQUFTTSxtQkFBbUIsSUFDL0NDLGVBQWVOLGNBQWNPLHFCQUFxQixDQUFDTCxtQkFDbkRNLGVBQWVSLGNBQWNPLHFCQUFxQixDQUFDSDtRQUV6REksYUFBYUMsd0JBQXdCLENBQUMsQ0FBQ0MsUUFBUUM7WUFDN0MsSUFBSUQsV0FBV0osY0FBYztnQkFDM0IsTUFBTU0sV0FBVzt1QkFDTkQ7b0JBQ0hMO2lCQUNELEVBQ0RWLGNBQWNpQixJQUFBQSwrQkFBdUIsRUFBQ0Q7Z0JBRTVDWCxRQUFRLElBQUlOLE1BQU1DO2dCQUVsQixPQUFPO1lBQ1Q7UUFDRjtRQUVBLE9BQU9LO0lBQ1Q7SUFFQSxPQUFPYSx1Q0FBdUNSLFlBQVksRUFBRUssbUJBQW1CLEVBQUU7UUFDL0UsTUFBTUMsV0FBVztlQUNORDtZQUNITDtTQUNELEVBQ0RWLGNBQWNpQixJQUFBQSwrQkFBdUIsRUFBQ0QsV0FDdENYLFFBQVEsSUFBSU4sTUFBTUM7UUFFeEIsT0FBT0s7SUFDVDtBQUNGIn0=