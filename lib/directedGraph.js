"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DirectedGraph;
    }
});
const _necessary = require("necessary");
const _edge = /*#__PURE__*/ _interop_require_default(require("./edge"));
const _cycle = /*#__PURE__*/ _interop_require_default(require("./cycle"));
const _vertex = /*#__PURE__*/ _interop_require_default(require("./vertex"));
const _index = require("./utilities/index");
const _vertex1 = require("./utilities/vertex");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { first } = _necessary.arrayUtilities;
class DirectedGraph {
    constructor(vertexMap){
        this.vertexMap = vertexMap;
    }
    getVertexNap() {
        return this.vertexMap;
    }
    getVertexes() {
        const vertexMapValues = Object.values(this.vertexMap), vertexes = vertexMapValues; ///
        return vertexes;
    }
    getVertexNames() {
        const vertexMapKeys = Object.keys(this.vertexMap), vertexNames = vertexMapKeys; ///
        return vertexNames;
    }
    getOrderedVertexNames() {
        const vertexes = this.getVertexes();
        (0, _vertex1.orderVertexes)(vertexes);
        const orderedVertexes = vertexes, orderedVertexNames = (0, _vertex1.vertexNamesFromVertexes)(orderedVertexes);
        return orderedVertexNames;
    }
    getVertexByVertexName(vertexName) {
        const vertexPresent = this.isVertexPresentByVertexName(vertexName), vertex = vertexPresent ? this.vertexMap[vertexName] : null;
        return vertex;
    }
    getEdgesBySourceVertexName(sourceVertexName) {
        const edges = [], sourceVertex = this.getVertexByVertexName(sourceVertexName);
        if (sourceVertex !== null) {
            const immediateSuccessorVertexes = sourceVertex.getImmediateSuccessorVertexes(), immediateSuccessorVertexNames = (0, _vertex1.vertexNamesFromVertexes)(immediateSuccessorVertexes), targetVertexNames = immediateSuccessorVertexNames; ///
            targetVertexNames.forEach((targetVertexName)=>{
                const edge = _edge.default.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);
                edges.push(edge);
            });
        }
        return edges;
    }
    getEdgesByTargetVertexName(targetVertexName) {
        const edges = [], targetVertex = this.getVertexByVertexName(targetVertexName);
        if (targetVertex !== null) {
            const immediatePredecessorVertexes = targetVertex.getImmediatePredecessorVertexes(), immediatePredecessorVertexNames = (0, _vertex1.vertexNamesFromVertexes)(immediatePredecessorVertexes), sourceVertexNames = immediatePredecessorVertexNames; ///
            sourceVertexNames.forEach((sourceVertexName)=>{
                const edge = _edge.default.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);
                edges.push(edge);
            });
        }
        return edges;
    }
    getFirstCycle() {
        let firstCycle = null;
        const cyclesPresent = this.areCyclesPresent();
        if (cyclesPresent) {
            const cyclicEdges = this.getCyclicEdges(), firstCyclicEdge = first(cyclicEdges), sourceVertexName = firstCyclicEdge.getSourceVertexName(), targetVertexName = firstCyclicEdge.getTargetVertexName(), sourceVertex = this.getVertexByVertexName(sourceVertexName), targetVertex = this.getVertexByVertexName(targetVertexName);
            targetVertex.forwardsDepthFirstSearch((vertex, predecessorVertexes)=>{
                let terminate = false;
                if (vertex === sourceVertex) {
                    terminate = true;
                    const cycle = _cycle.default.fromSourceVertexAndPredecessorVertexes(sourceVertex, predecessorVertexes); ///
                    firstCycle = cycle; ///
                }
                return terminate;
            });
        }
        return firstCycle;
    }
    getCyclicEdges() {
        const cyclicEdges = [], vertexes = this.getVertexes();
        vertexes.forEach((vertex)=>{
            const sourceVertex = vertex, sourceVertexIndex = sourceVertex.getIndex();
            vertex.forEachImmediateSuccessorVertex((immediateSuccessorVertex)=>{
                const targetVertex = immediateSuccessorVertex, targetVertexIndex = targetVertex.getIndex();
                if (targetVertexIndex < sourceVertexIndex) {
                    const sourceVertexName = sourceVertex.getName(), targetVertexName = targetVertex.getName(), edge = _edge.default.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName), cyclicEdge = edge; ///
                    cyclicEdges.push(cyclicEdge);
                }
            });
            sourceVertex;
        });
        return cyclicEdges;
    }
    areCyclesPresent() {
        const vertexes = this.getVertexes(), cyclesPresent = vertexes.some((vertex)=>{
            const sourceVertex = vertex, sourceVertexIndex = sourceVertex.getIndex(), cyclicEdgePresent = vertex.someImmediateSuccessorVertex((immediateSuccessorVertex)=>{
                const targetVertex = immediateSuccessorVertex, targetVertexIndex = targetVertex.getIndex();
                if (targetVertexIndex < sourceVertexIndex) {
                    return true;
                }
            });
            if (cyclicEdgePresent) {
                return true;
            }
        });
        return cyclesPresent;
    }
    isEdgePresent(edge) {
        let edgePresent = false;
        const sourceVertexName = edge.getSourceVertexName(), sourceVertex = this.getVertexByVertexName(sourceVertexName);
        if (sourceVertex !== null) {
            const targetVertexName = edge.getTargetVertexName(), targetVertex = this.getVertexByVertexName(targetVertexName);
            if (targetVertex !== null) {
                edgePresent = sourceVertex.isEdgePresentByTargetVertex(targetVertex);
            }
        }
        return edgePresent;
    }
    isVertexPresentByVertexName(vertexName) {
        const vertexNames = this.getVertexNames(), vertexNamesIncludesVertexName = vertexNames.includes(vertexName), vertexPresent = vertexNamesIncludesVertexName; ///
        return vertexPresent;
    }
    getImmediateSuccessorVertexNamesByVertexName(vertexName) {
        const vertex = this.getVertexByVertexName(vertexName), immediateSuccessorVertexNames = vertex.getImmediateSuccessorVertexNames();
        return immediateSuccessorVertexNames;
    }
    getImmediatePredecessorVertexNamesByVertexName(vertexName) {
        const vertex = this.getVertexByVertexName(vertexName), immediatePredecessorVertexNames = vertex.getImmediatePredecessorVertexNames();
        return immediatePredecessorVertexNames;
    }
    isEdgePresentBySourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName) {
        const edge = _edge.default.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName), edgePresent = this.isEdgePresent(edge);
        return edgePresent;
    }
    addVertexByVertexName(vertexName) {
        const vertexPresent = this.isVertexPresentByVertexName(vertexName);
        if (!vertexPresent) {
            const vertexNames = this.getVertexNames(), vertexNamesLength = vertexNames.length, name = vertexName, index = vertexNamesLength, vertex = _vertex.default.fromNameAndIndex(name, index);
            this.setVertexByVertexName(vertexName, vertex);
        }
        const vertex = this.getVertexByVertexName(vertexName);
        return vertex;
    }
    removeVertexByVertexName(vertexName) {
        const vertexPresent = this.isVertexPresentByVertexName(vertexName);
        if (!vertexPresent) {
            return;
        }
        const vertex = this.getVertexByVertexName(vertexName);
        vertex.forEachImmediateSuccessorVertex((immediateSuccessVertex)=>{
            const immediatePredecessorVertex = vertex; ///
            immediateSuccessVertex.removeImmediatePredecessorVertex(immediatePredecessorVertex);
        });
        vertex.forEachImmediatePredecessorVertex((immediatePredecessorVertex)=>{
            const immediateSuccessVertex = vertex; ///
            immediatePredecessorVertex.removeImmediateSuccessorVertex(immediateSuccessVertex);
        });
        this.deleteVertexByVertexName(vertexName);
        const vertexes = this.getVertexes(), deletedVertex = vertex, deletedVertexIndex = deletedVertex.getIndex();
        vertexes.forEach((vertex)=>{
            const vertexIndex = vertex.getIndex();
            if (vertexIndex > deletedVertexIndex) {
                vertex.decrementIndex();
            }
        });
        this.filterCyclicEdges();
    }
    addVertexesByVertexNames(vertexNames) {
        vertexNames.forEach((vertexName)=>{
            this.addVertexByVertexName(vertexName);
        });
    }
    removeVertexesByVertexNames(vertexNames) {
        vertexNames.forEach((vertexName)=>{
            this.removeVertexByVertexName(vertexName);
        });
    }
    addEdge(edge) {
        const sourceVertexName = edge.getSourceVertexName(), targetVertexName = edge.getTargetVertexName();
        if (sourceVertexName === targetVertexName) {
            return;
        }
        const sourceVertex = this.addVertexByVertexName(sourceVertexName), targetVertex = this.addVertexByVertexName(targetVertexName), edgePresent = sourceVertex.isEdgePresentByTargetVertex(targetVertex);
        if (edgePresent) {
            return;
        }
        const sourceVertexIndex = sourceVertex.getIndex(), targetVertexIndex = targetVertex.getIndex();
        if (sourceVertexIndex > targetVertexIndex) {
            this.reorderVertexesBySourceVertexAndTargetVertex(sourceVertex, targetVertex);
        }
        const immediatePredecessorVertex = sourceVertex, immediateSuccessorVertex = targetVertex; ///
        immediatePredecessorVertex.addImmediateSuccessorVertex(immediateSuccessorVertex);
        immediateSuccessorVertex.addImmediatePredecessorVertex(immediatePredecessorVertex);
    }
    addEdges(edges) {
        edges.forEach((edge)=>{
            this.addEdge(edge);
        });
    }
    removeEdge(edge, removeStrandedVertexes) {
        const sourceVertexName = edge.getSourceVertexName(), targetVertexName = edge.getTargetVertexName(), sourceVertex = this.addVertexByVertexName(sourceVertexName), targetVertex = this.addVertexByVertexName(targetVertexName), edgePresent = sourceVertex.isEdgePresentByTargetVertex(targetVertex);
        if (!edgePresent) {
            return;
        }
        sourceVertex.removeImmediateSuccessorVertex(targetVertex);
        targetVertex.removeImmediatePredecessorVertex(sourceVertex);
        if (removeStrandedVertexes) {
            const sourceVertexStranded = sourceVertex.isStranded(), targetVertexStranded = targetVertex.isStranded();
            if (sourceVertexStranded) {
                this.removeVertexByVertexName(sourceVertexName);
            }
            if (targetVertexStranded) {
                this.removeVertexByVertexName(targetVertexName);
            }
        }
        this.filterCyclicEdges();
    }
    removeEdges(edges, removeStrandedVertexes = false) {
        edges.forEach((edge)=>{
            this.removeEdge(edge, removeStrandedVertexes);
        });
    }
    removeAllEdgesAndVertexes() {
        this.vertexMap = {};
    }
    addEdgeBySourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName) {
        const edge = _edge.default.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);
        this.addEdge(edge);
    }
    reorderVertexesBySourceVertexAndTargetVertex(sourceVertex, targetVertex) {
        const sourceVertexForwardsReachable = targetVertex.isVertexForwardsReachable(sourceVertex);
        if (sourceVertexForwardsReachable) {
            return;
        }
        const forwardsReachableVertexes = targetVertex.retrieveForwardsReachableVertexes(), backwardsReachableVertexes = sourceVertex.retrieveBackwardsReachableVertexes();
        (0, _vertex1.orderVertexes)(backwardsReachableVertexes);
        (0, _vertex1.orderVertexes)(forwardsReachableVertexes);
        const reachableVertexes = [
            ...backwardsReachableVertexes,
            ...forwardsReachableVertexes
        ], reachableIndexes = (0, _index.indexesFromVertexes)(reachableVertexes);
        (0, _index.orderIndexes)(reachableIndexes);
        reachableVertexes.forEach((reachableVertex, index)=>{
            const reachableIndex = reachableIndexes[index];
            index = reachableIndex; ///
            reachableVertex.setIndex(index);
        });
    }
    filterCyclicEdges() {
        const cyclicEdges = this.getCyclicEdges(), edges = cyclicEdges; ///
        edges.forEach((edge)=>{
            const sourceVertexName = edge.getSourceVertexName(), targetVertexName = edge.getTargetVertexName(), sourceVertex = this.getVertexByVertexName(sourceVertexName), targetVertex = this.getVertexByVertexName(targetVertexName), sourceVertexForwardsReachable = targetVertex.isVertexForwardsReachable(sourceVertex);
            if (!sourceVertexForwardsReachable) {
                this.reorderVertexesBySourceVertexAndTargetVertex(sourceVertex, targetVertex);
            }
        });
    }
    setVertexByVertexName(vertexName, vertex) {
        this.vertexMap[vertexName] = vertex;
    }
    deleteVertexByVertexName(vertexName) {
        delete this.vertexMap[vertexName];
    }
    static fromNothing() {
        const vertexMap = {}, directedGraph = new DirectedGraph(vertexMap);
        return directedGraph;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kaXJlY3RlZEdyYXBoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEVkZ2UgZnJvbSBcIi4vZWRnZVwiO1xuaW1wb3J0IEN5Y2xlIGZyb20gXCIuL2N5Y2xlXCI7XG5pbXBvcnQgVmVydGV4IGZyb20gXCIuL3ZlcnRleFwiO1xuXG5pbXBvcnQgeyBvcmRlckluZGV4ZXMsIGluZGV4ZXNGcm9tVmVydGV4ZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvaW5kZXhcIjtcbmltcG9ydCB7IG9yZGVyVmVydGV4ZXMsIHZlcnRleE5hbWVzRnJvbVZlcnRleGVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3ZlcnRleFwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0ZWRHcmFwaCB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleE1hcCkge1xuICAgIHRoaXMudmVydGV4TWFwID0gdmVydGV4TWFwO1xuICB9XG5cbiAgZ2V0VmVydGV4TmFwKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleE1hcDtcbiAgfVxuXG4gIGdldFZlcnRleGVzKCkge1xuICAgIGNvbnN0IHZlcnRleE1hcFZhbHVlcyA9IE9iamVjdC52YWx1ZXModGhpcy52ZXJ0ZXhNYXApLFxuICAgICAgICAgIHZlcnRleGVzID0gdmVydGV4TWFwVmFsdWVzOyAvLy9cblxuICAgIHJldHVybiB2ZXJ0ZXhlcztcbiAgfVxuXG4gIGdldFZlcnRleE5hbWVzKCkge1xuICAgIGNvbnN0IHZlcnRleE1hcEtleXMgPSBPYmplY3Qua2V5cyh0aGlzLnZlcnRleE1hcCksXG4gICAgICAgICAgdmVydGV4TmFtZXMgPSB2ZXJ0ZXhNYXBLZXlzOyAgLy8vXG5cbiAgICByZXR1cm4gdmVydGV4TmFtZXM7XG4gIH1cblxuICBnZXRPcmRlcmVkVmVydGV4TmFtZXMoKSB7XG4gICAgY29uc3QgdmVydGV4ZXMgPSB0aGlzLmdldFZlcnRleGVzKCk7XG5cbiAgICBvcmRlclZlcnRleGVzKHZlcnRleGVzKTtcblxuICAgIGNvbnN0IG9yZGVyZWRWZXJ0ZXhlcyA9IHZlcnRleGVzLCAvLy9cbiAgICAgICAgICBvcmRlcmVkVmVydGV4TmFtZXMgPSB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhlcyhvcmRlcmVkVmVydGV4ZXMpO1xuXG4gICAgcmV0dXJuIG9yZGVyZWRWZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGdldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgdmVydGV4UHJlc2VudCA9IHRoaXMuaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpLFxuICAgICAgICAgIHZlcnRleCA9IHZlcnRleFByZXNlbnQgP1xuICAgICAgICAgICAgICAgICAgICAgdGhpcy52ZXJ0ZXhNYXBbdmVydGV4TmFtZV0gOlxuICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gICAgcmV0dXJuIHZlcnRleDtcbiAgfVxuXG4gIGdldEVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpIHtcbiAgICBjb25zdCBlZGdlcyA9IFtdLFxuICAgICAgICAgIHNvdXJjZVZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpO1xuXG4gICAgaWYgKHNvdXJjZVZlcnRleCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMgPSBzb3VyY2VWZXJ0ZXguZ2V0SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMoKSxcbiAgICAgICAgICAgIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzID0gdmVydGV4TmFtZXNGcm9tVmVydGV4ZXMoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZXMgPSBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lczsgIC8vL1xuXG4gICAgICB0YXJnZXRWZXJ0ZXhOYW1lcy5mb3JFYWNoKCh0YXJnZXRWZXJ0ZXhOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGVkZ2UgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgICBlZGdlcy5wdXNoKGVkZ2UpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVkZ2VzO1xuICB9XG5cbiAgZ2V0RWRnZXNCeVRhcmdldFZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSkge1xuICAgIGNvbnN0IGVkZ2VzID0gW10sXG4gICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICBpZiAodGFyZ2V0VmVydGV4ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzID0gdGFyZ2V0VmVydGV4LmdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMoKSxcbiAgICAgICAgICAgIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMgPSB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhlcyhpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzKSxcbiAgICAgICAgICAgIHNvdXJjZVZlcnRleE5hbWVzID0gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lczsgIC8vL1xuXG4gICAgICBzb3VyY2VWZXJ0ZXhOYW1lcy5mb3JFYWNoKChzb3VyY2VWZXJ0ZXhOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGVkZ2UgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgICBlZGdlcy5wdXNoKGVkZ2UpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVkZ2VzO1xuICB9XG5cbiAgZ2V0Rmlyc3RDeWNsZSgpIHtcbiAgICBsZXQgZmlyc3RDeWNsZSA9IG51bGw7XG5cbiAgICBjb25zdCBjeWNsZXNQcmVzZW50ID0gdGhpcy5hcmVDeWNsZXNQcmVzZW50KCk7XG5cbiAgICBpZiAoY3ljbGVzUHJlc2VudCkge1xuICAgICAgY29uc3QgY3ljbGljRWRnZXMgPSB0aGlzLmdldEN5Y2xpY0VkZ2VzKCksXG4gICAgICAgICAgICBmaXJzdEN5Y2xpY0VkZ2UgPSBmaXJzdChjeWNsaWNFZGdlcyksXG4gICAgICAgICAgICBzb3VyY2VWZXJ0ZXhOYW1lID0gZmlyc3RDeWNsaWNFZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSwgLy8vXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gZmlyc3RDeWNsaWNFZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKSwgLy8vXG4gICAgICAgICAgICBzb3VyY2VWZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgICB0YXJnZXRWZXJ0ZXguZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoKCh2ZXJ0ZXgsIHByZWRlY2Vzc29yVmVydGV4ZXMpID0+IHtcbiAgICAgICAgbGV0IHRlcm1pbmF0ZSA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh2ZXJ0ZXggPT09IHNvdXJjZVZlcnRleCkge1xuICAgICAgICAgIHRlcm1pbmF0ZSA9IHRydWU7XG5cbiAgICAgICAgICBjb25zdCBjeWNsZSA9IEN5Y2xlLmZyb21Tb3VyY2VWZXJ0ZXhBbmRQcmVkZWNlc3NvclZlcnRleGVzKHNvdXJjZVZlcnRleCwgcHJlZGVjZXNzb3JWZXJ0ZXhlcyk7ICAvLy9cblxuICAgICAgICAgIGZpcnN0Q3ljbGUgPSBjeWNsZTsgLy8vXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGVybWluYXRlO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpcnN0Q3ljbGU7XG4gIH1cblxuICBnZXRDeWNsaWNFZGdlcygpIHtcbiAgICBjb25zdCBjeWNsaWNFZGdlcyA9IFtdLFxuICAgICAgICAgIHZlcnRleGVzID0gdGhpcy5nZXRWZXJ0ZXhlcygpO1xuXG4gICAgdmVydGV4ZXMuZm9yRWFjaCgodmVydGV4KSA9PiB7XG4gICAgICBjb25zdCBzb3VyY2VWZXJ0ZXggPSB2ZXJ0ZXgsICAvLy9cbiAgICAgICAgICAgIHNvdXJjZVZlcnRleEluZGV4ID0gc291cmNlVmVydGV4LmdldEluZGV4KCk7XG5cbiAgICAgIHZlcnRleC5mb3JFYWNoSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgpID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0VmVydGV4ID0gaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4LCAgLy8vXG4gICAgICAgICAgICAgIHRhcmdldFZlcnRleEluZGV4ID0gdGFyZ2V0VmVydGV4LmdldEluZGV4KCk7XG5cbiAgICAgICAgaWYgKHRhcmdldFZlcnRleEluZGV4IDwgc291cmNlVmVydGV4SW5kZXgpIHtcbiAgICAgICAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gc291cmNlVmVydGV4LmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gdGFyZ2V0VmVydGV4LmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICBlZGdlID0gRWRnZS5mcm9tU291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSksXG4gICAgICAgICAgICAgICAgY3ljbGljRWRnZSA9IGVkZ2U7ICAvLy9cblxuICAgICAgICAgIGN5Y2xpY0VkZ2VzLnB1c2goY3ljbGljRWRnZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBzb3VyY2VWZXJ0ZXhcbiAgICB9KTtcblxuICAgIHJldHVybiBjeWNsaWNFZGdlcztcbiAgfVxuXG4gIGFyZUN5Y2xlc1ByZXNlbnQoKSB7XG4gICAgY29uc3QgdmVydGV4ZXMgPSB0aGlzLmdldFZlcnRleGVzKCksXG4gICAgICAgICAgY3ljbGVzUHJlc2VudCA9IHZlcnRleGVzLnNvbWUoKHZlcnRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc291cmNlVmVydGV4ID0gdmVydGV4LCAgLy8vXG4gICAgICAgICAgICAgICAgICBzb3VyY2VWZXJ0ZXhJbmRleCA9IHNvdXJjZVZlcnRleC5nZXRJbmRleCgpLFxuICAgICAgICAgICAgICAgICAgY3ljbGljRWRnZVByZXNlbnQgPSB2ZXJ0ZXguc29tZUltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCgoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldFZlcnRleCA9IGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCwgIC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRWZXJ0ZXhJbmRleCA9IHRhcmdldFZlcnRleC5nZXRJbmRleCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRWZXJ0ZXhJbmRleCA8IHNvdXJjZVZlcnRleEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoY3ljbGljRWRnZVByZXNlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gY3ljbGVzUHJlc2VudDtcbiAgfVxuXG4gIGlzRWRnZVByZXNlbnQoZWRnZSkge1xuICAgIGxldCBlZGdlUHJlc2VudCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc291cmNlVmVydGV4TmFtZSA9IGVkZ2UuZ2V0U291cmNlVmVydGV4TmFtZSgpLFxuICAgICAgICAgIHNvdXJjZVZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpO1xuXG4gICAgaWYgKHNvdXJjZVZlcnRleCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdGFyZ2V0VmVydGV4TmFtZSA9IGVkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICAgIGlmICh0YXJnZXRWZXJ0ZXggIT09IG51bGwpIHtcbiAgICAgICAgZWRnZVByZXNlbnQgPSBzb3VyY2VWZXJ0ZXguaXNFZGdlUHJlc2VudEJ5VGFyZ2V0VmVydGV4KHRhcmdldFZlcnRleCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVkZ2VQcmVzZW50O1xuICB9XG5cbiAgaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBjb25zdCB2ZXJ0ZXhOYW1lcyA9IHRoaXMuZ2V0VmVydGV4TmFtZXMoKSxcbiAgICAgICAgICB2ZXJ0ZXhOYW1lc0luY2x1ZGVzVmVydGV4TmFtZSA9IHZlcnRleE5hbWVzLmluY2x1ZGVzKHZlcnRleE5hbWUpLFxuICAgICAgICAgIHZlcnRleFByZXNlbnQgPSB2ZXJ0ZXhOYW1lc0luY2x1ZGVzVmVydGV4TmFtZTsgIC8vL1xuXG4gICAgcmV0dXJuIHZlcnRleFByZXNlbnQ7XG4gIH1cblxuICBnZXRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgdmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSksXG4gICAgICAgICAgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXMgPSB2ZXJ0ZXguZ2V0SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXMoKTtcblxuICAgIHJldHVybiBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGNvbnN0IHZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpLFxuICAgICAgICAgIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMgPSB2ZXJ0ZXguZ2V0SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcygpO1xuXG4gICAgcmV0dXJuIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXM7XG4gIH1cblxuICBpc0VkZ2VQcmVzZW50QnlTb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgZWRnZSA9IEVkZ2UuZnJvbVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpLFxuICAgICAgICAgIGVkZ2VQcmVzZW50ID0gdGhpcy5pc0VkZ2VQcmVzZW50KGVkZ2UpO1xuXG4gICAgcmV0dXJuIGVkZ2VQcmVzZW50O1xuICB9XG5cbiAgYWRkVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQcmVzZW50ID0gdGhpcy5pc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICBpZiAoIXZlcnRleFByZXNlbnQpIHtcbiAgICAgIGNvbnN0IHZlcnRleE5hbWVzID0gdGhpcy5nZXRWZXJ0ZXhOYW1lcygpLFxuICAgICAgICAgICAgdmVydGV4TmFtZXNMZW5ndGggPSB2ZXJ0ZXhOYW1lcy5sZW5ndGgsXG4gICAgICAgICAgICBuYW1lID0gdmVydGV4TmFtZSwgIC8vL1xuICAgICAgICAgICAgaW5kZXggPSB2ZXJ0ZXhOYW1lc0xlbmd0aCwgLy8vXG4gICAgICAgICAgICB2ZXJ0ZXggPSBWZXJ0ZXguZnJvbU5hbWVBbmRJbmRleChuYW1lLCBpbmRleCk7XG5cbiAgICAgIHRoaXMuc2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUsIHZlcnRleCk7XG4gICAgfVxuXG4gICAgY29uc3QgdmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICByZXR1cm4gdmVydGV4O1xuICB9XG5cbiAgcmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQcmVzZW50ID0gdGhpcy5pc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICBpZiAoIXZlcnRleFByZXNlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB2ZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgIHZlcnRleC5mb3JFYWNoSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KChpbW1lZGlhdGVTdWNjZXNzVmVydGV4KSA9PiB7XG4gICAgICBjb25zdCBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCA9IHZlcnRleDsgIC8vL1xuXG4gICAgICBpbW1lZGlhdGVTdWNjZXNzVmVydGV4LnJlbW92ZUltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KTtcbiAgICB9KTtcblxuICAgIHZlcnRleC5mb3JFYWNoSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgoKGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KSA9PiB7XG4gICAgICBjb25zdCBpbW1lZGlhdGVTdWNjZXNzVmVydGV4ID0gdmVydGV4OyAgLy8vXG5cbiAgICAgIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4LnJlbW92ZUltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleChpbW1lZGlhdGVTdWNjZXNzVmVydGV4KTtcbiAgICB9KTtcblxuICAgIHRoaXMuZGVsZXRlVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgY29uc3QgdmVydGV4ZXMgPSB0aGlzLmdldFZlcnRleGVzKCksXG4gICAgICAgICAgZGVsZXRlZFZlcnRleCA9IHZlcnRleCwgLy8vXG4gICAgICAgICAgZGVsZXRlZFZlcnRleEluZGV4ID0gZGVsZXRlZFZlcnRleC5nZXRJbmRleCgpO1xuXG4gICAgdmVydGV4ZXMuZm9yRWFjaCgodmVydGV4KSA9PiB7XG4gICAgICBjb25zdCB2ZXJ0ZXhJbmRleCA9IHZlcnRleC5nZXRJbmRleCgpO1xuXG4gICAgICBpZiAodmVydGV4SW5kZXggPiBkZWxldGVkVmVydGV4SW5kZXgpIHtcbiAgICAgICAgdmVydGV4LmRlY3JlbWVudEluZGV4KCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmZpbHRlckN5Y2xpY0VkZ2VzKCk7XG4gIH1cblxuICBhZGRWZXJ0ZXhlc0J5VmVydGV4TmFtZXModmVydGV4TmFtZXMpIHtcbiAgICB2ZXJ0ZXhOYW1lcy5mb3JFYWNoKCh2ZXJ0ZXhOYW1lKSA9PiB7XG4gICAgICB0aGlzLmFkZFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZVZlcnRleGVzQnlWZXJ0ZXhOYW1lcyh2ZXJ0ZXhOYW1lcykge1xuICAgIHZlcnRleE5hbWVzLmZvckVhY2goKHZlcnRleE5hbWUpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkRWRnZShlZGdlKSB7XG4gICAgY29uc3Qgc291cmNlVmVydGV4TmFtZSA9IGVkZ2UuZ2V0U291cmNlVmVydGV4TmFtZSgpLFxuICAgICAgICAgIHRhcmdldFZlcnRleE5hbWUgPSBlZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKTtcblxuICAgIGlmIChzb3VyY2VWZXJ0ZXhOYW1lID09PSB0YXJnZXRWZXJ0ZXhOYW1lKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc291cmNlVmVydGV4ID0gdGhpcy5hZGRWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSksXG4gICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdGhpcy5hZGRWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSksXG4gICAgICAgICAgZWRnZVByZXNlbnQgPSBzb3VyY2VWZXJ0ZXguaXNFZGdlUHJlc2VudEJ5VGFyZ2V0VmVydGV4KHRhcmdldFZlcnRleCk7XG5cbiAgICBpZiAoZWRnZVByZXNlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzb3VyY2VWZXJ0ZXhJbmRleCA9IHNvdXJjZVZlcnRleC5nZXRJbmRleCgpLFxuICAgICAgICAgIHRhcmdldFZlcnRleEluZGV4ID0gdGFyZ2V0VmVydGV4LmdldEluZGV4KCk7XG5cbiAgICBpZiAoc291cmNlVmVydGV4SW5kZXggPiB0YXJnZXRWZXJ0ZXhJbmRleCkge1xuICAgICAgdGhpcy5yZW9yZGVyVmVydGV4ZXNCeVNvdXJjZVZlcnRleEFuZFRhcmdldFZlcnRleChzb3VyY2VWZXJ0ZXgsIHRhcmdldFZlcnRleCk7XG4gICAgfVxuXG4gICAgY29uc3QgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXggPSBzb3VyY2VWZXJ0ZXgsIC8vL1xuICAgICAgICAgIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCA9IHRhcmdldFZlcnRleDsgLy8vXG5cbiAgICBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleC5hZGRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KTtcblxuICAgIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleC5hZGRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCk7XG4gIH1cblxuICBhZGRFZGdlcyhlZGdlcykge1xuICAgIGVkZ2VzLmZvckVhY2goKGVkZ2UpID0+IHtcbiAgICAgIHRoaXMuYWRkRWRnZShlZGdlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZUVkZ2UoZWRnZSwgcmVtb3ZlU3RyYW5kZWRWZXJ0ZXhlcykge1xuICAgIGNvbnN0IHNvdXJjZVZlcnRleE5hbWUgPSBlZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSxcbiAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gZWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgc291cmNlVmVydGV4ID0gdGhpcy5hZGRWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSksXG4gICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdGhpcy5hZGRWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSksXG4gICAgICAgICAgZWRnZVByZXNlbnQgPSBzb3VyY2VWZXJ0ZXguaXNFZGdlUHJlc2VudEJ5VGFyZ2V0VmVydGV4KHRhcmdldFZlcnRleCk7XG5cbiAgICBpZiAoIWVkZ2VQcmVzZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc291cmNlVmVydGV4LnJlbW92ZUltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCh0YXJnZXRWZXJ0ZXgpO1xuXG4gICAgdGFyZ2V0VmVydGV4LnJlbW92ZUltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KHNvdXJjZVZlcnRleCk7XG5cbiAgICBpZiAocmVtb3ZlU3RyYW5kZWRWZXJ0ZXhlcykge1xuICAgICAgY29uc3Qgc291cmNlVmVydGV4U3RyYW5kZWQgPSBzb3VyY2VWZXJ0ZXguaXNTdHJhbmRlZCgpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4U3RyYW5kZWQgPSB0YXJnZXRWZXJ0ZXguaXNTdHJhbmRlZCgpO1xuXG4gICAgICBpZiAoc291cmNlVmVydGV4U3RyYW5kZWQpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0YXJnZXRWZXJ0ZXhTdHJhbmRlZCkge1xuICAgICAgICB0aGlzLnJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmZpbHRlckN5Y2xpY0VkZ2VzKCk7XG4gIH1cblxuICByZW1vdmVFZGdlcyhlZGdlcywgcmVtb3ZlU3RyYW5kZWRWZXJ0ZXhlcyA9IGZhbHNlKSB7XG4gICAgZWRnZXMuZm9yRWFjaCgoZWRnZSkgPT4ge1xuICAgICAgdGhpcy5yZW1vdmVFZGdlKGVkZ2UsIHJlbW92ZVN0cmFuZGVkVmVydGV4ZXMpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlQWxsRWRnZXNBbmRWZXJ0ZXhlcygpIHtcbiAgICB0aGlzLnZlcnRleE1hcCA9IHt9O1xuICB9XG5cbiAgYWRkRWRnZUJ5U291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSkge1xuICAgIGNvbnN0IGVkZ2UgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgIHRoaXMuYWRkRWRnZShlZGdlKTtcbiAgfVxuXG4gIHJlb3JkZXJWZXJ0ZXhlc0J5U291cmNlVmVydGV4QW5kVGFyZ2V0VmVydGV4KHNvdXJjZVZlcnRleCwgdGFyZ2V0VmVydGV4KSB7XG4gICAgY29uc3Qgc291cmNlVmVydGV4Rm9yd2FyZHNSZWFjaGFibGUgPSB0YXJnZXRWZXJ0ZXguaXNWZXJ0ZXhGb3J3YXJkc1JlYWNoYWJsZShzb3VyY2VWZXJ0ZXgpO1xuXG4gICAgaWYgKHNvdXJjZVZlcnRleEZvcndhcmRzUmVhY2hhYmxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZm9yd2FyZHNSZWFjaGFibGVWZXJ0ZXhlcyA9IHRhcmdldFZlcnRleC5yZXRyaWV2ZUZvcndhcmRzUmVhY2hhYmxlVmVydGV4ZXMoKSxcbiAgICAgICAgICBiYWNrd2FyZHNSZWFjaGFibGVWZXJ0ZXhlcyA9IHNvdXJjZVZlcnRleC5yZXRyaWV2ZUJhY2t3YXJkc1JlYWNoYWJsZVZlcnRleGVzKCk7XG5cbiAgICBvcmRlclZlcnRleGVzKGJhY2t3YXJkc1JlYWNoYWJsZVZlcnRleGVzKTtcblxuICAgIG9yZGVyVmVydGV4ZXMoZm9yd2FyZHNSZWFjaGFibGVWZXJ0ZXhlcyk7XG5cbiAgICBjb25zdCByZWFjaGFibGVWZXJ0ZXhlcyA9IFtcbiAgICAgICAgICAgIC4uLmJhY2t3YXJkc1JlYWNoYWJsZVZlcnRleGVzLFxuICAgICAgICAgICAgLi4uZm9yd2FyZHNSZWFjaGFibGVWZXJ0ZXhlc1xuICAgICAgICAgIF0sXG4gICAgICAgICAgcmVhY2hhYmxlSW5kZXhlcyA9IGluZGV4ZXNGcm9tVmVydGV4ZXMocmVhY2hhYmxlVmVydGV4ZXMpO1xuXG4gICAgb3JkZXJJbmRleGVzKHJlYWNoYWJsZUluZGV4ZXMpO1xuXG4gICAgcmVhY2hhYmxlVmVydGV4ZXMuZm9yRWFjaCgocmVhY2hhYmxlVmVydGV4LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgcmVhY2hhYmxlSW5kZXggPSByZWFjaGFibGVJbmRleGVzW2luZGV4XTtcblxuICAgICAgaW5kZXggPSByZWFjaGFibGVJbmRleDsgLy8vXG5cbiAgICAgIHJlYWNoYWJsZVZlcnRleC5zZXRJbmRleChpbmRleCk7XG4gICAgfSk7XG4gIH1cblxuICBmaWx0ZXJDeWNsaWNFZGdlcygpIHtcbiAgICBjb25zdCBjeWNsaWNFZGdlcyA9IHRoaXMuZ2V0Q3ljbGljRWRnZXMoKSxcbiAgICAgICAgICBlZGdlcyA9IGN5Y2xpY0VkZ2VzOyAgLy8vXG5cbiAgICBlZGdlcy5mb3JFYWNoKChlZGdlKSA9PiB7XG4gICAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gZWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gZWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICBzb3VyY2VWZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpLFxuICAgICAgICAgICAgc291cmNlVmVydGV4Rm9yd2FyZHNSZWFjaGFibGUgPSB0YXJnZXRWZXJ0ZXguaXNWZXJ0ZXhGb3J3YXJkc1JlYWNoYWJsZShzb3VyY2VWZXJ0ZXgpO1xuXG4gICAgICBpZiAoIXNvdXJjZVZlcnRleEZvcndhcmRzUmVhY2hhYmxlKSB7XG4gICAgICAgIHRoaXMucmVvcmRlclZlcnRleGVzQnlTb3VyY2VWZXJ0ZXhBbmRUYXJnZXRWZXJ0ZXgoc291cmNlVmVydGV4LCB0YXJnZXRWZXJ0ZXgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUsIHZlcnRleCkge1xuICAgIHRoaXMudmVydGV4TWFwW3ZlcnRleE5hbWVdID0gdmVydGV4O1xuICB9XG5cbiAgZGVsZXRlVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBkZWxldGUgdGhpcy52ZXJ0ZXhNYXBbdmVydGV4TmFtZV07XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgdmVydGV4TWFwID0ge30sXG4gICAgICAgICAgZGlyZWN0ZWRHcmFwaCA9IG5ldyBEaXJlY3RlZEdyYXBoKHZlcnRleE1hcCk7XG4gICAgXG4gICAgcmV0dXJuIGRpcmVjdGVkR3JhcGg7ICAgIFxuICB9XG59XG4iXSwibmFtZXMiOlsiRGlyZWN0ZWRHcmFwaCIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJ2ZXJ0ZXhNYXAiLCJnZXRWZXJ0ZXhOYXAiLCJnZXRWZXJ0ZXhlcyIsInZlcnRleE1hcFZhbHVlcyIsIk9iamVjdCIsInZhbHVlcyIsInZlcnRleGVzIiwiZ2V0VmVydGV4TmFtZXMiLCJ2ZXJ0ZXhNYXBLZXlzIiwia2V5cyIsInZlcnRleE5hbWVzIiwiZ2V0T3JkZXJlZFZlcnRleE5hbWVzIiwib3JkZXJWZXJ0ZXhlcyIsIm9yZGVyZWRWZXJ0ZXhlcyIsIm9yZGVyZWRWZXJ0ZXhOYW1lcyIsInZlcnRleE5hbWVzRnJvbVZlcnRleGVzIiwiZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lIiwidmVydGV4TmFtZSIsInZlcnRleFByZXNlbnQiLCJpc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUiLCJ2ZXJ0ZXgiLCJnZXRFZGdlc0J5U291cmNlVmVydGV4TmFtZSIsInNvdXJjZVZlcnRleE5hbWUiLCJlZGdlcyIsInNvdXJjZVZlcnRleCIsImltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzIiwiZ2V0SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMiLCJpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcyIsInRhcmdldFZlcnRleE5hbWVzIiwiZm9yRWFjaCIsInRhcmdldFZlcnRleE5hbWUiLCJlZGdlIiwiRWRnZSIsImZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZSIsInB1c2giLCJnZXRFZGdlc0J5VGFyZ2V0VmVydGV4TmFtZSIsInRhcmdldFZlcnRleCIsImltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMiLCJnZXRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzIiwiaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcyIsInNvdXJjZVZlcnRleE5hbWVzIiwiZ2V0Rmlyc3RDeWNsZSIsImZpcnN0Q3ljbGUiLCJjeWNsZXNQcmVzZW50IiwiYXJlQ3ljbGVzUHJlc2VudCIsImN5Y2xpY0VkZ2VzIiwiZ2V0Q3ljbGljRWRnZXMiLCJmaXJzdEN5Y2xpY0VkZ2UiLCJnZXRTb3VyY2VWZXJ0ZXhOYW1lIiwiZ2V0VGFyZ2V0VmVydGV4TmFtZSIsImZvcndhcmRzRGVwdGhGaXJzdFNlYXJjaCIsInByZWRlY2Vzc29yVmVydGV4ZXMiLCJ0ZXJtaW5hdGUiLCJjeWNsZSIsIkN5Y2xlIiwiZnJvbVNvdXJjZVZlcnRleEFuZFByZWRlY2Vzc29yVmVydGV4ZXMiLCJzb3VyY2VWZXJ0ZXhJbmRleCIsImdldEluZGV4IiwiZm9yRWFjaEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCIsImltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCIsInRhcmdldFZlcnRleEluZGV4IiwiZ2V0TmFtZSIsImN5Y2xpY0VkZ2UiLCJzb21lIiwiY3ljbGljRWRnZVByZXNlbnQiLCJzb21lSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4IiwiaXNFZGdlUHJlc2VudCIsImVkZ2VQcmVzZW50IiwiaXNFZGdlUHJlc2VudEJ5VGFyZ2V0VmVydGV4IiwidmVydGV4TmFtZXNJbmNsdWRlc1ZlcnRleE5hbWUiLCJpbmNsdWRlcyIsImdldEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lIiwiZ2V0SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXMiLCJnZXRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lIiwiZ2V0SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcyIsImlzRWRnZVByZXNlbnRCeVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lIiwiYWRkVmVydGV4QnlWZXJ0ZXhOYW1lIiwidmVydGV4TmFtZXNMZW5ndGgiLCJsZW5ndGgiLCJuYW1lIiwiaW5kZXgiLCJWZXJ0ZXgiLCJmcm9tTmFtZUFuZEluZGV4Iiwic2V0VmVydGV4QnlWZXJ0ZXhOYW1lIiwicmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lIiwiaW1tZWRpYXRlU3VjY2Vzc1ZlcnRleCIsImltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4IiwicmVtb3ZlSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgiLCJmb3JFYWNoSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgiLCJyZW1vdmVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgiLCJkZWxldGVWZXJ0ZXhCeVZlcnRleE5hbWUiLCJkZWxldGVkVmVydGV4IiwiZGVsZXRlZFZlcnRleEluZGV4IiwidmVydGV4SW5kZXgiLCJkZWNyZW1lbnRJbmRleCIsImZpbHRlckN5Y2xpY0VkZ2VzIiwiYWRkVmVydGV4ZXNCeVZlcnRleE5hbWVzIiwicmVtb3ZlVmVydGV4ZXNCeVZlcnRleE5hbWVzIiwiYWRkRWRnZSIsInJlb3JkZXJWZXJ0ZXhlc0J5U291cmNlVmVydGV4QW5kVGFyZ2V0VmVydGV4IiwiYWRkSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4IiwiYWRkSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgiLCJhZGRFZGdlcyIsInJlbW92ZUVkZ2UiLCJyZW1vdmVTdHJhbmRlZFZlcnRleGVzIiwic291cmNlVmVydGV4U3RyYW5kZWQiLCJpc1N0cmFuZGVkIiwidGFyZ2V0VmVydGV4U3RyYW5kZWQiLCJyZW1vdmVFZGdlcyIsInJlbW92ZUFsbEVkZ2VzQW5kVmVydGV4ZXMiLCJhZGRFZGdlQnlTb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZSIsInNvdXJjZVZlcnRleEZvcndhcmRzUmVhY2hhYmxlIiwiaXNWZXJ0ZXhGb3J3YXJkc1JlYWNoYWJsZSIsImZvcndhcmRzUmVhY2hhYmxlVmVydGV4ZXMiLCJyZXRyaWV2ZUZvcndhcmRzUmVhY2hhYmxlVmVydGV4ZXMiLCJiYWNrd2FyZHNSZWFjaGFibGVWZXJ0ZXhlcyIsInJldHJpZXZlQmFja3dhcmRzUmVhY2hhYmxlVmVydGV4ZXMiLCJyZWFjaGFibGVWZXJ0ZXhlcyIsInJlYWNoYWJsZUluZGV4ZXMiLCJpbmRleGVzRnJvbVZlcnRleGVzIiwib3JkZXJJbmRleGVzIiwicmVhY2hhYmxlVmVydGV4IiwicmVhY2hhYmxlSW5kZXgiLCJzZXRJbmRleCIsImZyb21Ob3RoaW5nIiwiZGlyZWN0ZWRHcmFwaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBYUE7OztlQUFxQkE7OzsyQkFYVTs2REFFZDs4REFDQzsrREFDQzt1QkFFK0I7eUJBQ0s7Ozs7OztBQUV2RCxNQUFNLEVBQUVDLEtBQUssRUFBRSxHQUFHQyx5QkFBYztBQUVqQixNQUFNRjtJQUNuQixZQUFZRyxTQUFTLENBQUU7UUFDckIsSUFBSSxDQUFDQSxTQUFTLEdBQUdBO0lBQ25CO0lBRUFDLGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQ0QsU0FBUztJQUN2QjtJQUVBRSxjQUFjO1FBQ1osTUFBTUMsa0JBQWtCQyxPQUFPQyxNQUFNLENBQUMsSUFBSSxDQUFDTCxTQUFTLEdBQzlDTSxXQUFXSCxpQkFBaUIsR0FBRztRQUVyQyxPQUFPRztJQUNUO0lBRUFDLGlCQUFpQjtRQUNmLE1BQU1DLGdCQUFnQkosT0FBT0ssSUFBSSxDQUFDLElBQUksQ0FBQ1QsU0FBUyxHQUMxQ1UsY0FBY0YsZUFBZ0IsR0FBRztRQUV2QyxPQUFPRTtJQUNUO0lBRUFDLHdCQUF3QjtRQUN0QixNQUFNTCxXQUFXLElBQUksQ0FBQ0osV0FBVztRQUVqQ1UsSUFBQUEsc0JBQWEsRUFBQ047UUFFZCxNQUFNTyxrQkFBa0JQLFVBQ2xCUSxxQkFBcUJDLElBQUFBLGdDQUF1QixFQUFDRjtRQUVuRCxPQUFPQztJQUNUO0lBRUFFLHNCQUFzQkMsVUFBVSxFQUFFO1FBQ2hDLE1BQU1DLGdCQUFnQixJQUFJLENBQUNDLDJCQUEyQixDQUFDRixhQUNqREcsU0FBU0YsZ0JBQ0UsSUFBSSxDQUFDbEIsU0FBUyxDQUFDaUIsV0FBVyxHQUN4QjtRQUVuQixPQUFPRztJQUNUO0lBRUFDLDJCQUEyQkMsZ0JBQWdCLEVBQUU7UUFDM0MsTUFBTUMsUUFBUSxFQUFFLEVBQ1ZDLGVBQWUsSUFBSSxDQUFDUixxQkFBcUIsQ0FBQ007UUFFaEQsSUFBSUUsaUJBQWlCLE1BQU07WUFDekIsTUFBTUMsNkJB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