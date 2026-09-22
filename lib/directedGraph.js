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
    getVertexMap() {
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
            const immediateSuccessorVertexes = sourceVertex.getImmediateSuccessorVertexes(), targetVertexes = immediateSuccessorVertexes; ///
            targetVertexes.forEach((targetVertex)=>{
                const edge = _edge.default.fromSourceVertexAndTargetVertex(sourceVertex, targetVertex);
                edges.push(edge);
            });
        }
        return edges;
    }
    getEdgesByTargetVertexName(targetVertexName) {
        const edges = [], targetVertex = this.getVertexByVertexName(targetVertexName);
        if (targetVertex !== null) {
            const immediatePredecessorVertexes = targetVertex.getImmediatePredecessorVertexes(), sourceVertexes = immediatePredecessorVertexes; ///
            sourceVertexes.forEach((sourceVertex)=>{
                const edge = _edge.default.fromSourceVertexAndTargetVertex(sourceVertex, targetVertex);
                edges.push(edge);
            });
        }
        return edges;
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
    getFirstCycle() {
        let firstCycle = null;
        const cyclesPresent = this.areCyclesPresent();
        if (cyclesPresent) {
            const backEdges = this.getBackEdges(), firstBackEdge = first(backEdges), directedGraph = this, backEdge = firstBackEdge, cycle = _cycle.default.fromBackEdgeAndDirectedGraph(backEdge, directedGraph);
            firstCycle = cycle; ///
        }
        return firstCycle;
    }
    getBackEdges() {
        const backEdges = [], vertexes = this.getVertexes();
        vertexes.forEach((vertex)=>{
            const sourceVertex = vertex, sourceVertexIndex = sourceVertex.getIndex();
            vertex.forEachImmediateSuccessorVertex((immediateSuccessorVertex)=>{
                const targetVertex = immediateSuccessorVertex, targetVertexIndex = targetVertex.getIndex();
                if (targetVertexIndex < sourceVertexIndex) {
                    const edge = _edge.default.fromSourceVertexAndTargetVertex(sourceVertex, targetVertex), backEdge = edge; ///
                    backEdges.push(backEdge);
                }
            });
        });
        return backEdges;
    }
    isEdgePresent(edge) {
        let edgePresent = false;
        const sourceVertexName = edge.getSourceVertexName(), targetVertexName = edge.getTargetVertexName(), sourceVertex = this.getVertexByVertexName(sourceVertexName), targetVertex = this.getVertexByVertexName(targetVertexName);
        if (targetVertex !== null && sourceVertex !== null) {
            edgePresent = sourceVertex.isEdgePresentByTargetVertex(targetVertex);
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
    removeVertexByVertexName(vertexName, filterBackEdges = true) {
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
        if (filterBackEdges) {
            this.filterBackEdges();
        }
    }
    addVertexesByVertexNames(vertexNames) {
        vertexNames.forEach((vertexName)=>{
            this.addVertexByVertexName(vertexName);
        });
    }
    removeVertexesByVertexNames(vertexNames, filterBackEdges = true) {
        vertexNames.forEach((vertexName)=>{
            const filterBackEdges = false;
            this.removeVertexByVertexName(vertexName, filterBackEdges);
        });
        if (filterBackEdges) {
            this.filterBackEdges();
        }
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
    removeEdge(edge, removeStrandedVertexes = false) {
        const edgePresent = this.isEdgePresent(edge);
        if (!edgePresent) {
            return;
        }
        const edgeCyclic = this.isEdgeCyclic(edge), filterBackEdges = edgeCyclic, sourceVertexName = edge.getSourceVertexName(), targetVertexName = edge.getTargetVertexName(), sourceVertex = this.getVertexByVertexName(sourceVertexName), targetVertex = this.getVertexByVertexName(targetVertexName);
        sourceVertex.removeImmediateSuccessorVertex(targetVertex);
        targetVertex.removeImmediatePredecessorVertex(sourceVertex);
        if (removeStrandedVertexes) {
            const filterBackEdges = false, sourceVertexStranded = sourceVertex.isStranded(), targetVertexStranded = targetVertex.isStranded();
            if (sourceVertexStranded) {
                this.removeVertexByVertexName(sourceVertexName, filterBackEdges);
            }
            if (targetVertexStranded) {
                this.removeVertexByVertexName(targetVertexName, filterBackEdges);
            }
        }
        if (filterBackEdges) {
            this.filterBackEdges();
        }
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
    isEdgeCyclic(edge) {
        const sourceVertexName = edge.getSourceVertexName(), targetVertexName = edge.getTargetVertexName(), sourceVertex = this.getVertexByVertexName(sourceVertexName), targetVertex = this.getVertexByVertexName(targetVertexName), sourceVertexReachable = targetVertex.isVertexReachable(sourceVertex), edgeCyclic = sourceVertexReachable; ///
        return edgeCyclic;
    }
    filterBackEdges() {
        const backEdges = this.getBackEdges(), edges = backEdges; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kaXJlY3RlZEdyYXBoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEVkZ2UgZnJvbSBcIi4vZWRnZVwiO1xuaW1wb3J0IEN5Y2xlIGZyb20gXCIuL2N5Y2xlXCI7XG5pbXBvcnQgVmVydGV4IGZyb20gXCIuL3ZlcnRleFwiO1xuXG5pbXBvcnQgeyBvcmRlckluZGV4ZXMsIGluZGV4ZXNGcm9tVmVydGV4ZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvaW5kZXhcIjtcbmltcG9ydCB7IG9yZGVyVmVydGV4ZXMsIHZlcnRleE5hbWVzRnJvbVZlcnRleGVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3ZlcnRleFwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0ZWRHcmFwaCB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleE1hcCkge1xuICAgIHRoaXMudmVydGV4TWFwID0gdmVydGV4TWFwO1xuICB9XG5cbiAgZ2V0VmVydGV4TWFwKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleE1hcDtcbiAgfVxuXG4gIGdldFZlcnRleGVzKCkge1xuICAgIGNvbnN0IHZlcnRleE1hcFZhbHVlcyA9IE9iamVjdC52YWx1ZXModGhpcy52ZXJ0ZXhNYXApLFxuICAgICAgICAgIHZlcnRleGVzID0gdmVydGV4TWFwVmFsdWVzOyAvLy9cblxuICAgIHJldHVybiB2ZXJ0ZXhlcztcbiAgfVxuXG4gIGdldFZlcnRleE5hbWVzKCkge1xuICAgIGNvbnN0IHZlcnRleE1hcEtleXMgPSBPYmplY3Qua2V5cyh0aGlzLnZlcnRleE1hcCksXG4gICAgICAgICAgdmVydGV4TmFtZXMgPSB2ZXJ0ZXhNYXBLZXlzOyAgLy8vXG5cbiAgICByZXR1cm4gdmVydGV4TmFtZXM7XG4gIH1cblxuICBnZXRPcmRlcmVkVmVydGV4TmFtZXMoKSB7XG4gICAgY29uc3QgdmVydGV4ZXMgPSB0aGlzLmdldFZlcnRleGVzKCk7XG5cbiAgICBvcmRlclZlcnRleGVzKHZlcnRleGVzKTtcblxuICAgIGNvbnN0IG9yZGVyZWRWZXJ0ZXhlcyA9IHZlcnRleGVzLCAvLy9cbiAgICAgICAgICBvcmRlcmVkVmVydGV4TmFtZXMgPSB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhlcyhvcmRlcmVkVmVydGV4ZXMpO1xuXG4gICAgcmV0dXJuIG9yZGVyZWRWZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGdldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgdmVydGV4UHJlc2VudCA9IHRoaXMuaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpLFxuICAgICAgICAgIHZlcnRleCA9IHZlcnRleFByZXNlbnQgP1xuICAgICAgICAgICAgICAgICAgICAgdGhpcy52ZXJ0ZXhNYXBbdmVydGV4TmFtZV0gOlxuICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gICAgcmV0dXJuIHZlcnRleDtcbiAgfVxuXG4gIGdldEVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpIHtcbiAgICBjb25zdCBlZGdlcyA9IFtdLFxuICAgICAgICAgIHNvdXJjZVZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpO1xuXG4gICAgaWYgKHNvdXJjZVZlcnRleCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMgPSBzb3VyY2VWZXJ0ZXguZ2V0SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMoKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleGVzID0gaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXM7ICAvLy9cblxuICAgICAgdGFyZ2V0VmVydGV4ZXMuZm9yRWFjaCgodGFyZ2V0VmVydGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGVkZ2UgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhBbmRUYXJnZXRWZXJ0ZXgoc291cmNlVmVydGV4LCB0YXJnZXRWZXJ0ZXgpO1xuXG4gICAgICAgIGVkZ2VzLnB1c2goZWRnZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWRnZXM7XG4gIH1cblxuICBnZXRFZGdlc0J5VGFyZ2V0VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgZWRnZXMgPSBbXSxcbiAgICAgICAgICB0YXJnZXRWZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgIGlmICh0YXJnZXRWZXJ0ZXggIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMgPSB0YXJnZXRWZXJ0ZXguZ2V0SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcygpLFxuICAgICAgICAgICAgc291cmNlVmVydGV4ZXMgPSBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzOyAgLy8vXG5cbiAgICAgIHNvdXJjZVZlcnRleGVzLmZvckVhY2goKHNvdXJjZVZlcnRleCkgPT4ge1xuICAgICAgICBjb25zdCBlZGdlID0gRWRnZS5mcm9tU291cmNlVmVydGV4QW5kVGFyZ2V0VmVydGV4KHNvdXJjZVZlcnRleCwgdGFyZ2V0VmVydGV4KTtcblxuICAgICAgICBlZGdlcy5wdXNoKGVkZ2UpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVkZ2VzO1xuICB9XG5cbiAgYXJlQ3ljbGVzUHJlc2VudCgpIHtcbiAgICBjb25zdCB2ZXJ0ZXhlcyA9IHRoaXMuZ2V0VmVydGV4ZXMoKSxcbiAgICAgICAgICBjeWNsZXNQcmVzZW50ID0gdmVydGV4ZXMuc29tZSgodmVydGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzb3VyY2VWZXJ0ZXggPSB2ZXJ0ZXgsICAvLy9cbiAgICAgICAgICAgICAgICAgIHNvdXJjZVZlcnRleEluZGV4ID0gc291cmNlVmVydGV4LmdldEluZGV4KCksXG4gICAgICAgICAgICAgICAgICBjeWNsaWNFZGdlUHJlc2VudCA9IHZlcnRleC5zb21lSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0VmVydGV4ID0gaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4LCAgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFZlcnRleEluZGV4ID0gdGFyZ2V0VmVydGV4LmdldEluZGV4KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldFZlcnRleEluZGV4IDwgc291cmNlVmVydGV4SW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChjeWNsaWNFZGdlUHJlc2VudCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBjeWNsZXNQcmVzZW50O1xuICB9XG5cbiAgZ2V0Rmlyc3RDeWNsZSgpIHtcbiAgICBsZXQgZmlyc3RDeWNsZSA9IG51bGw7XG5cbiAgICBjb25zdCBjeWNsZXNQcmVzZW50ID0gdGhpcy5hcmVDeWNsZXNQcmVzZW50KCk7XG5cbiAgICBpZiAoY3ljbGVzUHJlc2VudCkge1xuICAgICAgY29uc3QgYmFja0VkZ2VzID0gdGhpcy5nZXRCYWNrRWRnZXMoKSxcbiAgICAgICAgICAgIGZpcnN0QmFja0VkZ2UgPSBmaXJzdChiYWNrRWRnZXMpLFxuICAgICAgICAgICAgZGlyZWN0ZWRHcmFwaCA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgYmFja0VkZ2UgPSBmaXJzdEJhY2tFZGdlLCAvLy9cbiAgICAgICAgICAgIGN5Y2xlID0gQ3ljbGUuZnJvbUJhY2tFZGdlQW5kRGlyZWN0ZWRHcmFwaChiYWNrRWRnZSwgZGlyZWN0ZWRHcmFwaCk7XG5cbiAgICAgIGZpcnN0Q3ljbGUgPSBjeWNsZTsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGZpcnN0Q3ljbGU7XG4gIH1cblxuICBnZXRCYWNrRWRnZXMoKSB7XG4gICAgY29uc3QgYmFja0VkZ2VzID0gW10sXG4gICAgICAgICAgdmVydGV4ZXMgPSB0aGlzLmdldFZlcnRleGVzKCk7XG5cbiAgICB2ZXJ0ZXhlcy5mb3JFYWNoKCh2ZXJ0ZXgpID0+IHtcbiAgICAgIGNvbnN0IHNvdXJjZVZlcnRleCA9IHZlcnRleCwgIC8vL1xuICAgICAgICAgICAgc291cmNlVmVydGV4SW5kZXggPSBzb3VyY2VWZXJ0ZXguZ2V0SW5kZXgoKTtcblxuICAgICAgdmVydGV4LmZvckVhY2hJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoKGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCkgPT4ge1xuICAgICAgICBjb25zdCB0YXJnZXRWZXJ0ZXggPSBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgsICAvLy9cbiAgICAgICAgICAgICAgdGFyZ2V0VmVydGV4SW5kZXggPSB0YXJnZXRWZXJ0ZXguZ2V0SW5kZXgoKTtcblxuICAgICAgICBpZiAodGFyZ2V0VmVydGV4SW5kZXggPCBzb3VyY2VWZXJ0ZXhJbmRleCkge1xuICAgICAgICAgIGNvbnN0IGVkZ2UgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhBbmRUYXJnZXRWZXJ0ZXgoc291cmNlVmVydGV4LCB0YXJnZXRWZXJ0ZXgpLFxuICAgICAgICAgICAgICAgIGJhY2tFZGdlID0gZWRnZTsgIC8vL1xuXG4gICAgICAgICAgYmFja0VkZ2VzLnB1c2goYmFja0VkZ2UpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBiYWNrRWRnZXM7XG4gIH1cblxuICBpc0VkZ2VQcmVzZW50KGVkZ2UpIHtcbiAgICBsZXQgZWRnZVByZXNlbnQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNvdXJjZVZlcnRleE5hbWUgPSBlZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSxcbiAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gZWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgc291cmNlVmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSksXG4gICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICBpZiAoKHRhcmdldFZlcnRleCAhPT0gbnVsbCkgJiYgKHNvdXJjZVZlcnRleCAhPT0gbnVsbCkpIHtcbiAgICAgIGVkZ2VQcmVzZW50ID0gc291cmNlVmVydGV4LmlzRWRnZVByZXNlbnRCeVRhcmdldFZlcnRleCh0YXJnZXRWZXJ0ZXgpO1xuICAgIH1cblxuICAgIHJldHVybiBlZGdlUHJlc2VudDtcbiAgfVxuXG4gIGlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgdmVydGV4TmFtZXMgPSB0aGlzLmdldFZlcnRleE5hbWVzKCksXG4gICAgICAgICAgdmVydGV4TmFtZXNJbmNsdWRlc1ZlcnRleE5hbWUgPSB2ZXJ0ZXhOYW1lcy5pbmNsdWRlcyh2ZXJ0ZXhOYW1lKSxcbiAgICAgICAgICB2ZXJ0ZXhQcmVzZW50ID0gdmVydGV4TmFtZXNJbmNsdWRlc1ZlcnRleE5hbWU7ICAvLy9cblxuICAgIHJldHVybiB2ZXJ0ZXhQcmVzZW50O1xuICB9XG5cbiAgZ2V0SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGNvbnN0IHZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpLFxuICAgICAgICAgIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzID0gdmVydGV4LmdldEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzKCk7XG5cbiAgICByZXR1cm4gaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXM7XG4gIH1cblxuICBnZXRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBjb25zdCB2ZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSxcbiAgICAgICAgICBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzID0gdmVydGV4LmdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMoKTtcblxuICAgIHJldHVybiBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzO1xuICB9XG5cbiAgaXNFZGdlUHJlc2VudEJ5U291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSkge1xuICAgIGNvbnN0IGVkZ2UgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICBlZGdlUHJlc2VudCA9IHRoaXMuaXNFZGdlUHJlc2VudChlZGdlKTtcblxuICAgIHJldHVybiBlZGdlUHJlc2VudDtcbiAgfVxuXG4gIGFkZFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgdmVydGV4UHJlc2VudCA9IHRoaXMuaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgaWYgKCF2ZXJ0ZXhQcmVzZW50KSB7XG4gICAgICBjb25zdCB2ZXJ0ZXhOYW1lcyA9IHRoaXMuZ2V0VmVydGV4TmFtZXMoKSxcbiAgICAgICAgICAgIHZlcnRleE5hbWVzTGVuZ3RoID0gdmVydGV4TmFtZXMubGVuZ3RoLFxuICAgICAgICAgICAgbmFtZSA9IHZlcnRleE5hbWUsICAvLy9cbiAgICAgICAgICAgIGluZGV4ID0gdmVydGV4TmFtZXNMZW5ndGgsIC8vL1xuICAgICAgICAgICAgdmVydGV4ID0gVmVydGV4LmZyb21OYW1lQW5kSW5kZXgobmFtZSwgaW5kZXgpO1xuXG4gICAgICB0aGlzLnNldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lLCB2ZXJ0ZXgpO1xuICAgIH1cblxuICAgIGNvbnN0IHZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgcmV0dXJuIHZlcnRleDtcbiAgfVxuXG4gIHJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lLCBmaWx0ZXJCYWNrRWRnZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgdmVydGV4UHJlc2VudCA9IHRoaXMuaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgaWYgKCF2ZXJ0ZXhQcmVzZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICB2ZXJ0ZXguZm9yRWFjaEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCgoaW1tZWRpYXRlU3VjY2Vzc1ZlcnRleCkgPT4ge1xuICAgICAgY29uc3QgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXggPSB2ZXJ0ZXg7ICAvLy9cblxuICAgICAgaW1tZWRpYXRlU3VjY2Vzc1ZlcnRleC5yZW1vdmVJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCk7XG4gICAgfSk7XG5cbiAgICB2ZXJ0ZXguZm9yRWFjaEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCkgPT4ge1xuICAgICAgY29uc3QgaW1tZWRpYXRlU3VjY2Vzc1ZlcnRleCA9IHZlcnRleDsgIC8vL1xuXG4gICAgICBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleC5yZW1vdmVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoaW1tZWRpYXRlU3VjY2Vzc1ZlcnRleCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmRlbGV0ZVZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgIGNvbnN0IHZlcnRleGVzID0gdGhpcy5nZXRWZXJ0ZXhlcygpLFxuICAgICAgICAgIGRlbGV0ZWRWZXJ0ZXggPSB2ZXJ0ZXgsIC8vL1xuICAgICAgICAgIGRlbGV0ZWRWZXJ0ZXhJbmRleCA9IGRlbGV0ZWRWZXJ0ZXguZ2V0SW5kZXgoKTtcblxuICAgIHZlcnRleGVzLmZvckVhY2goKHZlcnRleCkgPT4ge1xuICAgICAgY29uc3QgdmVydGV4SW5kZXggPSB2ZXJ0ZXguZ2V0SW5kZXgoKTtcblxuICAgICAgaWYgKHZlcnRleEluZGV4ID4gZGVsZXRlZFZlcnRleEluZGV4KSB7XG4gICAgICAgIHZlcnRleC5kZWNyZW1lbnRJbmRleCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGZpbHRlckJhY2tFZGdlcykge1xuICAgICAgdGhpcy5maWx0ZXJCYWNrRWRnZXMoKTtcbiAgICB9XG4gIH1cblxuICBhZGRWZXJ0ZXhlc0J5VmVydGV4TmFtZXModmVydGV4TmFtZXMpIHtcbiAgICB2ZXJ0ZXhOYW1lcy5mb3JFYWNoKCh2ZXJ0ZXhOYW1lKSA9PiB7XG4gICAgICB0aGlzLmFkZFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZVZlcnRleGVzQnlWZXJ0ZXhOYW1lcyh2ZXJ0ZXhOYW1lcywgZmlsdGVyQmFja0VkZ2VzID0gdHJ1ZSkge1xuICAgIHZlcnRleE5hbWVzLmZvckVhY2goKHZlcnRleE5hbWUpID0+IHtcbiAgICAgIGNvbnN0IGZpbHRlckJhY2tFZGdlcyA9IGZhbHNlO1xuXG4gICAgICB0aGlzLnJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lLCBmaWx0ZXJCYWNrRWRnZXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGZpbHRlckJhY2tFZGdlcykge1xuICAgICAgdGhpcy5maWx0ZXJCYWNrRWRnZXMoKTtcbiAgICB9XG4gIH1cblxuICBhZGRFZGdlKGVkZ2UpIHtcbiAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gZWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IGVkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpO1xuXG4gICAgaWYgKHNvdXJjZVZlcnRleE5hbWUgPT09IHRhcmdldFZlcnRleE5hbWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzb3VyY2VWZXJ0ZXggPSB0aGlzLmFkZFZlcnRleEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICB0YXJnZXRWZXJ0ZXggPSB0aGlzLmFkZFZlcnRleEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICBlZGdlUHJlc2VudCA9IHNvdXJjZVZlcnRleC5pc0VkZ2VQcmVzZW50QnlUYXJnZXRWZXJ0ZXgodGFyZ2V0VmVydGV4KTtcblxuICAgIGlmIChlZGdlUHJlc2VudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNvdXJjZVZlcnRleEluZGV4ID0gc291cmNlVmVydGV4LmdldEluZGV4KCksXG4gICAgICAgICAgdGFyZ2V0VmVydGV4SW5kZXggPSB0YXJnZXRWZXJ0ZXguZ2V0SW5kZXgoKTtcblxuICAgIGlmIChzb3VyY2VWZXJ0ZXhJbmRleCA+IHRhcmdldFZlcnRleEluZGV4KSB7XG4gICAgICB0aGlzLnJlb3JkZXJWZXJ0ZXhlc0J5U291cmNlVmVydGV4QW5kVGFyZ2V0VmVydGV4KHNvdXJjZVZlcnRleCwgdGFyZ2V0VmVydGV4KTtcbiAgICB9XG5cbiAgICBjb25zdCBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCA9IHNvdXJjZVZlcnRleCwgLy8vXG4gICAgICAgICAgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ID0gdGFyZ2V0VmVydGV4OyAvLy9cblxuICAgIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4LmFkZEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgpO1xuXG4gICAgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4LmFkZEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KTtcbiAgfVxuXG4gIGFkZEVkZ2VzKGVkZ2VzKSB7XG4gICAgZWRnZXMuZm9yRWFjaCgoZWRnZSkgPT4ge1xuICAgICAgdGhpcy5hZGRFZGdlKGVkZ2UpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlRWRnZShlZGdlLCByZW1vdmVTdHJhbmRlZFZlcnRleGVzID0gZmFsc2UpIHtcbiAgICBjb25zdCBlZGdlUHJlc2VudCA9IHRoaXMuaXNFZGdlUHJlc2VudChlZGdlKTtcblxuICAgIGlmICghZWRnZVByZXNlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBlZGdlQ3ljbGljID0gdGhpcy5pc0VkZ2VDeWNsaWMoZWRnZSksXG4gICAgICAgICAgZmlsdGVyQmFja0VkZ2VzID0gZWRnZUN5Y2xpYywgLy8vXG4gICAgICAgICAgc291cmNlVmVydGV4TmFtZSA9IGVkZ2UuZ2V0U291cmNlVmVydGV4TmFtZSgpLFxuICAgICAgICAgIHRhcmdldFZlcnRleE5hbWUgPSBlZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKSxcbiAgICAgICAgICBzb3VyY2VWZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICB0YXJnZXRWZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgIHNvdXJjZVZlcnRleC5yZW1vdmVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgodGFyZ2V0VmVydGV4KTtcblxuICAgIHRhcmdldFZlcnRleC5yZW1vdmVJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleChzb3VyY2VWZXJ0ZXgpO1xuXG4gICAgaWYgKHJlbW92ZVN0cmFuZGVkVmVydGV4ZXMpIHtcbiAgICAgIGNvbnN0IGZpbHRlckJhY2tFZGdlcyA9IGZhbHNlLFxuICAgICAgICAgICAgc291cmNlVmVydGV4U3RyYW5kZWQgPSBzb3VyY2VWZXJ0ZXguaXNTdHJhbmRlZCgpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4U3RyYW5kZWQgPSB0YXJnZXRWZXJ0ZXguaXNTdHJhbmRlZCgpO1xuXG4gICAgICBpZiAoc291cmNlVmVydGV4U3RyYW5kZWQpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgZmlsdGVyQmFja0VkZ2VzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRhcmdldFZlcnRleFN0cmFuZGVkKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUsIGZpbHRlckJhY2tFZGdlcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZpbHRlckJhY2tFZGdlcykge1xuICAgICAgdGhpcy5maWx0ZXJCYWNrRWRnZXMoKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVFZGdlcyhlZGdlcywgcmVtb3ZlU3RyYW5kZWRWZXJ0ZXhlcyA9IGZhbHNlKSB7XG4gICAgZWRnZXMuZm9yRWFjaCgoZWRnZSkgPT4ge1xuICAgICAgdGhpcy5yZW1vdmVFZGdlKGVkZ2UsIHJlbW92ZVN0cmFuZGVkVmVydGV4ZXMpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlQWxsRWRnZXNBbmRWZXJ0ZXhlcygpIHtcbiAgICB0aGlzLnZlcnRleE1hcCA9IHt9O1xuICB9XG5cbiAgYWRkRWRnZUJ5U291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSkge1xuICAgIGNvbnN0IGVkZ2UgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgIHRoaXMuYWRkRWRnZShlZGdlKTtcbiAgfVxuXG4gIHJlb3JkZXJWZXJ0ZXhlc0J5U291cmNlVmVydGV4QW5kVGFyZ2V0VmVydGV4KHNvdXJjZVZlcnRleCwgdGFyZ2V0VmVydGV4KSB7XG4gICAgY29uc3Qgc291cmNlVmVydGV4Rm9yd2FyZHNSZWFjaGFibGUgPSB0YXJnZXRWZXJ0ZXguaXNWZXJ0ZXhGb3J3YXJkc1JlYWNoYWJsZShzb3VyY2VWZXJ0ZXgpO1xuXG4gICAgaWYgKHNvdXJjZVZlcnRleEZvcndhcmRzUmVhY2hhYmxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZm9yd2FyZHNSZWFjaGFibGVWZXJ0ZXhlcyA9IHRhcmdldFZlcnRleC5yZXRyaWV2ZUZvcndhcmRzUmVhY2hhYmxlVmVydGV4ZXMoKSxcbiAgICAgICAgICBiYWNrd2FyZHNSZWFjaGFibGVWZXJ0ZXhlcyA9IHNvdXJjZVZlcnRleC5yZXRyaWV2ZUJhY2t3YXJkc1JlYWNoYWJsZVZlcnRleGVzKCk7XG5cbiAgICBvcmRlclZlcnRleGVzKGJhY2t3YXJkc1JlYWNoYWJsZVZlcnRleGVzKTtcblxuICAgIG9yZGVyVmVydGV4ZXMoZm9yd2FyZHNSZWFjaGFibGVWZXJ0ZXhlcyk7XG5cbiAgICBjb25zdCByZWFjaGFibGVWZXJ0ZXhlcyA9IFtcbiAgICAgICAgICAgIC4uLmJhY2t3YXJkc1JlYWNoYWJsZVZlcnRleGVzLFxuICAgICAgICAgICAgLi4uZm9yd2FyZHNSZWFjaGFibGVWZXJ0ZXhlc1xuICAgICAgICAgIF0sXG4gICAgICAgICAgcmVhY2hhYmxlSW5kZXhlcyA9IGluZGV4ZXNGcm9tVmVydGV4ZXMocmVhY2hhYmxlVmVydGV4ZXMpO1xuXG4gICAgb3JkZXJJbmRleGVzKHJlYWNoYWJsZUluZGV4ZXMpO1xuXG4gICAgcmVhY2hhYmxlVmVydGV4ZXMuZm9yRWFjaCgocmVhY2hhYmxlVmVydGV4LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgcmVhY2hhYmxlSW5kZXggPSByZWFjaGFibGVJbmRleGVzW2luZGV4XTtcblxuICAgICAgaW5kZXggPSByZWFjaGFibGVJbmRleDsgLy8vXG5cbiAgICAgIHJlYWNoYWJsZVZlcnRleC5zZXRJbmRleChpbmRleCk7XG4gICAgfSk7XG4gIH1cblxuICBpc0VkZ2VDeWNsaWMoZWRnZSkge1xuICAgIGNvbnN0IHNvdXJjZVZlcnRleE5hbWUgPSBlZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSxcbiAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gZWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgc291cmNlVmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSksXG4gICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSksXG4gICAgICAgICAgc291cmNlVmVydGV4UmVhY2hhYmxlID0gdGFyZ2V0VmVydGV4LmlzVmVydGV4UmVhY2hhYmxlKHNvdXJjZVZlcnRleCksXG4gICAgICAgICAgZWRnZUN5Y2xpYyA9IHNvdXJjZVZlcnRleFJlYWNoYWJsZTsgLy8vXG5cbiAgICByZXR1cm4gZWRnZUN5Y2xpYztcbiAgfVxuXG4gIGZpbHRlckJhY2tFZGdlcygpIHtcbiAgICBjb25zdCBiYWNrRWRnZXMgPSB0aGlzLmdldEJhY2tFZGdlcygpLFxuICAgICAgICAgIGVkZ2VzID0gYmFja0VkZ2VzOyAgLy8vXG5cbiAgICBlZGdlcy5mb3JFYWNoKChlZGdlKSA9PiB7XG4gICAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gZWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gZWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICBzb3VyY2VWZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpLFxuICAgICAgICAgICAgc291cmNlVmVydGV4Rm9yd2FyZHNSZWFjaGFibGUgPSB0YXJnZXRWZXJ0ZXguaXNWZXJ0ZXhGb3J3YXJkc1JlYWNoYWJsZShzb3VyY2VWZXJ0ZXgpO1xuXG4gICAgICBpZiAoIXNvdXJjZVZlcnRleEZvcndhcmRzUmVhY2hhYmxlKSB7XG4gICAgICAgIHRoaXMucmVvcmRlclZlcnRleGVzQnlTb3VyY2VWZXJ0ZXhBbmRUYXJnZXRWZXJ0ZXgoc291cmNlVmVydGV4LCB0YXJnZXRWZXJ0ZXgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUsIHZlcnRleCkge1xuICAgIHRoaXMudmVydGV4TWFwW3ZlcnRleE5hbWVdID0gdmVydGV4O1xuICB9XG5cbiAgZGVsZXRlVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBkZWxldGUgdGhpcy52ZXJ0ZXhNYXBbdmVydGV4TmFtZV07XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgdmVydGV4TWFwID0ge30sXG4gICAgICAgICAgZGlyZWN0ZWRHcmFwaCA9IG5ldyBEaXJlY3RlZEdyYXBoKHZlcnRleE1hcCk7XG4gICAgXG4gICAgcmV0dXJuIGRpcmVjdGVkR3JhcGg7ICAgIFxuICB9XG59XG4iXSwibmFtZXMiOlsiRGlyZWN0ZWRHcmFwaCIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJ2ZXJ0ZXhNYXAiLCJnZXRWZXJ0ZXhNYXAiLCJnZXRWZXJ0ZXhlcyIsInZlcnRleE1hcFZhbHVlcyIsIk9iamVjdCIsInZhbHVlcyIsInZlcnRleGVzIiwiZ2V0VmVydGV4TmFtZXMiLCJ2ZXJ0ZXhNYXBLZXlzIiwia2V5cyIsInZlcnRleE5hbWVzIiwiZ2V0T3JkZXJlZFZlcnRleE5hbWVzIiwib3JkZXJWZXJ0ZXhlcyIsIm9yZGVyZWRWZXJ0ZXhlcyIsIm9yZGVyZWRWZXJ0ZXhOYW1lcyIsInZlcnRleE5hbWVzRnJvbVZlcnRleGVzIiwiZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lIiwidmVydGV4TmFtZSIsInZlcnRleFByZXNlbnQiLCJpc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUiLCJ2ZXJ0ZXgiLCJnZXRFZGdlc0J5U291cmNlVmVydGV4TmFtZSIsInNvdXJjZVZlcnRleE5hbWUiLCJlZGdlcyIsInNvdXJjZVZlcnRleCIsImltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzIiwiZ2V0SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMiLCJ0YXJnZXRWZXJ0ZXhlcyIsImZvckVhY2giLCJ0YXJnZXRWZXJ0ZXgiLCJlZGdlIiwiRWRnZSIsImZyb21Tb3VyY2VWZXJ0ZXhBbmRUYXJnZXRWZXJ0ZXgiLCJwdXNoIiwiZ2V0RWRnZXNCeVRhcmdldFZlcnRleE5hbWUiLCJ0YXJnZXRWZXJ0ZXhOYW1lIiwiaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcyIsImdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMiLCJzb3VyY2VWZXJ0ZXhlcyIsImFyZUN5Y2xlc1ByZXNlbnQiLCJjeWNsZXNQcmVzZW50Iiwic29tZSIsInNvdXJjZVZlcnRleEluZGV4IiwiZ2V0SW5kZXgiLCJjeWNsaWNFZGdlUHJlc2VudCIsInNvbWVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgiLCJpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgiLCJ0YXJnZXRWZXJ0ZXhJbmRleCIsImdldEZpcnN0Q3ljbGUiLCJmaXJzdEN5Y2xlIiwiYmFja0VkZ2VzIiwiZ2V0QmFja0VkZ2VzIiwiZmlyc3RCYWNrRWRnZSIsImRpcmVjdGVkR3JhcGgiLCJiYWNrRWRnZSIsImN5Y2xlIiwiQ3ljbGUiLCJmcm9tQmFja0VkZ2VBbmREaXJlY3RlZEdyYXBoIiwiZm9yRWFjaEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCIsImlzRWRnZVByZXNlbnQiLCJlZGdlUHJlc2VudCIsImdldFNvdXJjZVZlcnRleE5hbWUiLCJnZXRUYXJnZXRWZXJ0ZXhOYW1lIiwiaXNFZGdlUHJlc2VudEJ5VGFyZ2V0VmVydGV4IiwidmVydGV4TmFtZXNJbmNsdWRlc1ZlcnRleE5hbWUiLCJpbmNsdWRlcyIsImdldEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lIiwiaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXMiLCJnZXRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcyIsImdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUiLCJpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzIiwiZ2V0SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcyIsImlzRWRnZVByZXNlbnRCeVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lIiwiZnJvbVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lIiwiYWRkVmVydGV4QnlWZXJ0ZXhOYW1lIiwidmVydGV4TmFtZXNMZW5ndGgiLCJsZW5ndGgiLCJuYW1lIiwiaW5kZXgiLCJWZXJ0ZXgiLCJmcm9tTmFtZUFuZEluZGV4Iiwic2V0VmVydGV4QnlWZXJ0ZXhOYW1lIiwicmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lIiwiZmlsdGVyQmFja0VkZ2VzIiwiaW1tZWRpYXRlU3VjY2Vzc1ZlcnRleCIsImltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4IiwicmVtb3ZlSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgiLCJmb3JFYWNoSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgiLCJyZW1vdmVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgiLCJkZWxldGVWZXJ0ZXhCeVZlcnRleE5hbWUiLCJkZWxldGVkVmVydGV4IiwiZGVsZXRlZFZlcnRleEluZGV4IiwidmVydGV4SW5kZXgiLCJkZWNyZW1lbnRJbmRleCIsImFkZFZlcnRleGVzQnlWZXJ0ZXhOYW1lcyIsInJlbW92ZVZlcnRleGVzQnlWZXJ0ZXhOYW1lcyIsImFkZEVkZ2UiLCJyZW9yZGVyVmVydGV4ZXNCeVNvdXJjZVZlcnRleEFuZFRhcmdldFZlcnRleCIsImFkZEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCIsImFkZEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4IiwiYWRkRWRnZXMiLCJyZW1vdmVFZGdlIiwicmVtb3ZlU3RyYW5kZWRWZXJ0ZXhlcyIsImVkZ2VDeWNsaWMiLCJpc0VkZ2VDeWNsaWMiLCJzb3VyY2VWZXJ0ZXhTdHJhbmRlZCIsImlzU3RyYW5kZWQiLCJ0YXJnZXRWZXJ0ZXhTdHJhbmRlZCIsInJlbW92ZUVkZ2VzIiwicmVtb3ZlQWxsRWRnZXNBbmRWZXJ0ZXhlcyIsImFkZEVkZ2VCeVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lIiwic291cmNlVmVydGV4Rm9yd2FyZHNSZWFjaGFibGUiLCJpc1ZlcnRleEZvcndhcmRzUmVhY2hhYmxlIiwiZm9yd2FyZHNSZWFjaGFibGVWZXJ0ZXhlcyIsInJldHJpZXZlRm9yd2FyZHNSZWFjaGFibGVWZXJ0ZXhlcyIsImJhY2t3YXJkc1JlYWNoYWJsZVZlcnRleGVzIiwicmV0cmlldmVCYWNrd2FyZHNSZWFjaGFibGVWZXJ0ZXhlcyIsInJlYWNoYWJsZVZlcnRleGVzIiwicmVhY2hhYmxlSW5kZXhlcyIsImluZGV4ZXNGcm9tVmVydGV4ZXMiLCJvcmRlckluZGV4ZXMiLCJyZWFjaGFibGVWZXJ0ZXgiLCJyZWFjaGFibGVJbmRleCIsInNldEluZGV4Iiwic291cmNlVmVydGV4UmVhY2hhYmxlIiwiaXNWZXJ0ZXhSZWFjaGFibGUiLCJmcm9tTm90aGluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBYUE7OztlQUFxQkE7OzsyQkFYVTs2REFF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