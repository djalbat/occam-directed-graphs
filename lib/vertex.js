"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Vertex;
    }
});
var _vertex = require("./utilities/vertex");
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var Vertex = /*#__PURE__*/ function() {
    function Vertex(name, index, visited, immediatePredecessorVertices, immediateSuccessorVertices) {
        _class_call_check(this, Vertex);
        this.name = name;
        this.index = index;
        this.visited = visited;
        this.immediatePredecessorVertices = immediatePredecessorVertices;
        this.immediateSuccessorVertices = immediateSuccessorVertices;
    }
    _create_class(Vertex, [
        {
            key: "getName",
            value: function getName() {
                return this.name;
            }
        },
        {
            key: "getIndex",
            value: function getIndex() {
                return this.index;
            }
        },
        {
            key: "isVisited",
            value: function isVisited() {
                return this.visited;
            }
        },
        {
            key: "isStranded",
            value: function isStranded() {
                var immediatePredecessorVerticesLength = this.immediatePredecessorVertices.length, immediateSuccessorVerticesLength = this.immediateSuccessorVertices.length, stranded = immediatePredecessorVerticesLength === 0 && immediateSuccessorVerticesLength === 0;
                return stranded;
            }
        },
        {
            key: "getImmediatePredecessorVertexNames",
            value: function getImmediatePredecessorVertexNames() {
                var immediatePredecessorVertexNames = this.immediatePredecessorVertices.map(function(immediatePredecessorVertex) {
                    var immediatePredecessorVertexName = immediatePredecessorVertex.getName();
                    return immediatePredecessorVertexName;
                });
                return immediatePredecessorVertexNames;
            }
        },
        {
            key: "getImmediateSuccessorVertexNames",
            value: function getImmediateSuccessorVertexNames() {
                var immediateSuccessorVertexNames = this.immediateSuccessorVertices.map(function(immediateSuccessorVertex) {
                    var immediateSuccessorVertexName = immediateSuccessorVertex.getName();
                    return immediateSuccessorVertexName;
                });
                return immediateSuccessorVertexNames;
            }
        },
        {
            key: "getImmediatePredecessorVertices",
            value: function getImmediatePredecessorVertices() {
                return this.immediatePredecessorVertices;
            }
        },
        {
            key: "getImmediateSuccessorVertices",
            value: function getImmediateSuccessorVertices() {
                return this.immediateSuccessorVertices;
            }
        },
        {
            key: "getPredecessorVertexMap",
            value: function getPredecessorVertexMap() {
                var predecessorVertexMap = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                this.forEachImmediatePredecessorVertex(function(immediatePredecessorVertex) {
                    var predecessorVertex = immediatePredecessorVertex, predecessorVertexName = predecessorVertex.getName();
                    predecessorVertexMap[predecessorVertexName] = predecessorVertex;
                    predecessorVertex.getPredecessorVertexMap(predecessorVertexMap);
                });
                return predecessorVertexMap;
            }
        },
        {
            key: "getSuccessorVertexMap",
            value: function getSuccessorVertexMap() {
                var successorVertexMap = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                this.forEachImmediateSuccessorVertex(function(immediateSuccessorVertex) {
                    var successorVertex = immediateSuccessorVertex, successorVertexName = successorVertex.getName();
                    successorVertexMap[successorVertexName] = successorVertex;
                    successorVertex.getSuccessorVertexMap(successorVertexMap);
                });
                return successorVertexMap;
            }
        },
        {
            key: "getPredecessorVertexNames",
            value: function getPredecessorVertexNames() {
                var predecessorVertices = this.getPredecessorVertices(), predecessorVertexNames = predecessorVertices.map(function(predecessorVertex) {
                    var predecessorVertexName = predecessorVertex.getName();
                    return predecessorVertexName;
                });
                return predecessorVertexNames;
            }
        },
        {
            key: "getSuccessorVertexNames",
            value: function getSuccessorVertexNames() {
                var successorVertices = this.getSuccessorVertices(), successorVertexNames = successorVertices.map(function(successorVertex) {
                    var successorVertexName = successorVertex.getName();
                    return successorVertexName;
                });
                return successorVertexNames;
            }
        },
        {
            key: "getPredecessorVertices",
            value: function getPredecessorVertices() {
                var predecessorVertexMap = this.getPredecessorVertexMap(), predecessorVertexNames = Object.keys(predecessorVertexMap), predecessorVertices = predecessorVertexNames.map(function(predecessorVertexName) {
                    var predecessorVertex = predecessorVertexMap[predecessorVertexName];
                    return predecessorVertex;
                });
                return predecessorVertices;
            }
        },
        {
            key: "getSuccessorVertices",
            value: function getSuccessorVertices() {
                var successorVertexMap = this.getSuccessorVertexMap(), successorVertexNames = Object.keys(successorVertexMap), successorVertices = successorVertexNames.map(function(successorVertexName) {
                    var successorVertex = successorVertexMap[successorVertexName];
                    return successorVertex;
                });
                return successorVertices;
            }
        },
        {
            key: "getOrderedPredecessorVertexNames",
            value: function getOrderedPredecessorVertexNames() {
                var predecessorVertices = this.getPredecessorVertices();
                (0, _vertex.orderVertices)(predecessorVertices);
                var orderedPredecessorVertices = predecessorVertices, orderedPredecessorVertexNames = (0, _vertex.vertexNamesFromVertices)(orderedPredecessorVertices);
                return orderedPredecessorVertexNames;
            }
        },
        {
            key: "retrieveForwardsAffectedVertices",
            value: function retrieveForwardsAffectedVertices(sourceVertex) {
                var forwardsAffectedVertices = this.forwardsDepthFirstSearch(function(visitedVertex) {
                    var terminate = visitedVertex === sourceVertex;
                    if (terminate) {
                        return true;
                    }
                });
                return forwardsAffectedVertices;
            }
        },
        {
            key: "retrieveBackwardsAffectedVertices",
            value: function retrieveBackwardsAffectedVertices() {
                var backwardsAffectedVertices = this.backwardsDepthFirstSearch(function(visitedVertex) {
                    var terminate = false;
                    if (terminate) {
                        return true;
                    }
                });
                return backwardsAffectedVertices;
            }
        },
        {
            key: "isVertexImmediatePredecessorVertex",
            value: function isVertexImmediatePredecessorVertex(vertex) {
                var vertexImmediatePredecessorVertex = this.immediatePredecessorVertices.includes(vertex);
                return vertexImmediatePredecessorVertex;
            }
        },
        {
            key: "isVertexImmediateSuccessorVertex",
            value: function isVertexImmediateSuccessorVertex(vertex) {
                var vertexImmediateSuccessorVertex = this.immediateSuccessorVertices.includes(vertex);
                return vertexImmediateSuccessorVertex;
            }
        },
        {
            key: "isEdgePresentBySourceVertex",
            value: function isEdgePresentBySourceVertex(sourceVertex) {
                var sourceVertexImmediatePredecessorVertex = this.isVertexImmediatePredecessorVertex(sourceVertex), edgePresent = sourceVertexImmediatePredecessorVertex; ///
                return edgePresent;
            }
        },
        {
            key: "isEdgePresentByTargetVertex",
            value: function isEdgePresentByTargetVertex(targetVertex) {
                var targetVertexImmediateSuccessorVertex = this.isVertexImmediateSuccessorVertex(targetVertex), edgePresent = targetVertexImmediateSuccessorVertex; ///
                return edgePresent;
            }
        },
        {
            key: "setName",
            value: function setName(name) {
                this.name = name;
            }
        },
        {
            key: "setIndex",
            value: function setIndex(index) {
                this.index = index;
            }
        },
        {
            key: "setVisited",
            value: function setVisited(visited) {
                this.visited = visited;
            }
        },
        {
            key: "decrementIndex",
            value: function decrementIndex() {
                this.index--;
            }
        },
        {
            key: "removeImmediatePredecessorVertex",
            value: function removeImmediatePredecessorVertex(immediatePredecessorVertex) {
                var index = this.immediatePredecessorVertices.indexOf(immediatePredecessorVertex), start = index, deleteCount = 1;
                this.immediatePredecessorVertices.splice(start, deleteCount);
            }
        },
        {
            key: "removeImmediateSuccessorVertex",
            value: function removeImmediateSuccessorVertex(immediateSuccessorVertex) {
                var index = this.immediateSuccessorVertices.indexOf(immediateSuccessorVertex), start = index, deleteCount = 1;
                this.immediateSuccessorVertices.splice(start, deleteCount);
            }
        },
        {
            key: "removeIncomingEdges",
            value: function removeIncomingEdges() {
                var immediateSuccessorVertex = this; ///
                this.immediatePredecessorVertices.forEach(function(immediatePredecessorVertex) {
                    immediatePredecessorVertex.removeImmediateSuccessorVertex(immediateSuccessorVertex);
                });
                this.immediatePredecessorVertices = [];
            }
        },
        {
            key: "removeOutgoingEdges",
            value: function removeOutgoingEdges() {
                var immediatePredecessorVertex = this; ///
                this.immediateSuccessorVertices.forEach(function(immediateSuccessorVertex) {
                    immediateSuccessorVertex.removeImmediateSuccessorVertex(immediatePredecessorVertex);
                });
                this.immediateSuccessorVertices = [];
            }
        },
        {
            key: "addImmediatePredecessorVertex",
            value: function addImmediatePredecessorVertex(immediatePredecessorVertex) {
                this.immediatePredecessorVertices.push(immediatePredecessorVertex);
            }
        },
        {
            key: "addImmediateSuccessorVertex",
            value: function addImmediateSuccessorVertex(immediateSuccessorVertex) {
                this.immediateSuccessorVertices.push(immediateSuccessorVertex);
            }
        },
        {
            key: "forwardsDepthFirstSearch",
            value: function forwardsDepthFirstSearch(callback) {
                var visitedVertices = [];
                this.retrieveForwardsVisitedVertices(function(visitedVertex) {
                    var terminate = callback(visitedVertex); ///
                    visitedVertices.push(visitedVertex);
                    return terminate;
                });
                visitedVertices.forEach(function(visitedVertex) {
                    visitedVertex.resetVisited();
                });
                return visitedVertices;
            }
        },
        {
            key: "backwardsDepthFirstSearch",
            value: function backwardsDepthFirstSearch(callback) {
                var visitedVertices = [];
                this.retrieveBackwardsVisitedVertices(function(visitedVertex) {
                    var terminate = callback(visitedVertex); ///
                    visitedVertices.push(visitedVertex);
                    return terminate;
                });
                visitedVertices.forEach(function(visitedVertex) {
                    visitedVertex.resetVisited();
                });
                return visitedVertices;
            }
        },
        {
            key: "retrieveForwardsVisitedVertices",
            value: function retrieveForwardsVisitedVertices(callback) {
                var terminate = false;
                if (this.visited === false) {
                    this.visited = true;
                    var visitedVertex = this; ///
                    terminate = callback(visitedVertex);
                    if (terminate !== true) {
                        visitedVertex.someImmediateSuccessorVertex(function(immediateSuccessorVertex) {
                            terminate = immediateSuccessorVertex.retrieveForwardsVisitedVertices(callback);
                            if (terminate) {
                                return true;
                            }
                        });
                    }
                }
                return terminate;
            }
        },
        {
            key: "retrieveBackwardsVisitedVertices",
            value: function retrieveBackwardsVisitedVertices(callback) {
                var terminate = false;
                if (this.visited === false) {
                    this.visited = true;
                    var visitedVertex = this; ///
                    terminate = callback(visitedVertex);
                    if (terminate !== true) {
                        visitedVertex.someImmediatePredecessorVertex(function(immediatePredecessorVertex) {
                            terminate = immediatePredecessorVertex.retrieveBackwardsVisitedVertices(callback);
                            if (terminate) {
                                return true;
                            }
                        });
                    }
                }
                return terminate;
            }
        },
        {
            key: "forEachImmediatePredecessorVertex",
            value: function forEachImmediatePredecessorVertex(callback) {
                this.immediatePredecessorVertices.forEach(callback);
            }
        },
        {
            key: "forEachImmediateSuccessorVertex",
            value: function forEachImmediateSuccessorVertex(callback) {
                this.immediateSuccessorVertices.forEach(callback);
            }
        },
        {
            key: "someImmediatePredecessorVertex",
            value: function someImmediatePredecessorVertex(callback) {
                this.immediatePredecessorVertices.some(callback);
            }
        },
        {
            key: "someImmediateSuccessorVertex",
            value: function someImmediateSuccessorVertex(callback) {
                this.immediateSuccessorVertices.some(callback);
            }
        },
        {
            key: "resetVisited",
            value: function resetVisited() {
                this.visited = false;
            }
        }
    ], [
        {
            key: "fromNameAndIndex",
            value: function fromNameAndIndex(name, index) {
                var visited = false, immediatePredecessorVertices = [], immediateSuccessorVertices = [], dependencyVertex = new Vertex(name, index, visited, immediatePredecessorVertices, immediateSuccessorVertices);
                return dependencyVertex;
            }
        }
    ]);
    return Vertex;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92ZXJ0ZXguanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHZlcnRleE5hbWVzRnJvbVZlcnRpY2VzLCBvcmRlclZlcnRpY2VzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3ZlcnRleFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZXJ0ZXgge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBpbmRleCwgdmlzaXRlZCwgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0aWNlcywgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGljZXMpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICB0aGlzLnZpc2l0ZWQgPSB2aXNpdGVkO1xuICAgIHRoaXMuaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0aWNlcyA9IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGljZXM7XG4gICAgdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0aWNlcyA9IGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRpY2VzO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0SW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5kZXg7XG4gIH1cblxuICBpc1Zpc2l0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMudmlzaXRlZDtcbiAgfVxuXG4gIGlzU3RyYW5kZWQoKSB7XG4gICAgY29uc3QgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0aWNlc0xlbmd0aCA9IHRoaXMuaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0aWNlcy5sZW5ndGgsXG4gICAgICAgICAgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGljZXNMZW5ndGggPSB0aGlzLmltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRpY2VzLmxlbmd0aCxcbiAgICAgICAgICBzdHJhbmRlZCA9ICgoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0aWNlc0xlbmd0aCA9PT0gMCkgJiYgKGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRpY2VzTGVuZ3RoID09PSAwKSk7XG5cbiAgICByZXR1cm4gc3RyYW5kZWQ7XG4gIH1cblxuICBnZXRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzKCkge1xuICAgIGNvbnN0IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMgPSB0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGljZXMubWFwKChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCkgPT4ge1xuICAgICAgY29uc3QgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lID0gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXguZ2V0TmFtZSgpO1xuXG4gICAgICByZXR1cm4gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXM7XG4gIH1cblxuICBnZXRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcygpIHtcbiAgICBjb25zdCBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcyA9IHRoaXMuaW1tZWRpYXRlU3VjY2Vzc29yVmVydGljZXMubWFwKChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgpID0+IHtcbiAgICAgIGNvbnN0IGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWUgPSBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXguZ2V0TmFtZSgpO1xuXG4gICAgICByZXR1cm4gaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZTtcbiAgICB9KTtcblxuICAgIHJldHVybiBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGljZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0aWNlcztcbiAgfVxuXG4gIGdldEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRpY2VzKCkge1xuICAgIHJldHVybiB0aGlzLmltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRpY2VzO1xuICB9XG5cbiAgZ2V0UHJlZGVjZXNzb3JWZXJ0ZXhNYXAocHJlZGVjZXNzb3JWZXJ0ZXhNYXAgPSB7fSkge1xuICAgIHRoaXMuZm9yRWFjaEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCkgPT4ge1xuICAgICAgY29uc3QgcHJlZGVjZXNzb3JWZXJ0ZXggPSBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCwgLy8vXG4gICAgICAgICAgICBwcmVkZWNlc3NvclZlcnRleE5hbWUgPSBwcmVkZWNlc3NvclZlcnRleC5nZXROYW1lKCk7XG5cbiAgICAgIHByZWRlY2Vzc29yVmVydGV4TWFwW3ByZWRlY2Vzc29yVmVydGV4TmFtZV0gPSBwcmVkZWNlc3NvclZlcnRleDtcblxuICAgICAgcHJlZGVjZXNzb3JWZXJ0ZXguZ2V0UHJlZGVjZXNzb3JWZXJ0ZXhNYXAocHJlZGVjZXNzb3JWZXJ0ZXhNYXApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByZWRlY2Vzc29yVmVydGV4TWFwO1xuICB9XG5cbiAgZ2V0U3VjY2Vzc29yVmVydGV4TWFwKHN1Y2Nlc3NvclZlcnRleE1hcCA9IHt9KSB7XG4gICAgdGhpcy5mb3JFYWNoSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgpID0+IHtcbiAgICAgIGNvbnN0IHN1Y2Nlc3NvclZlcnRleCA9IGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCwgLy8vXG4gICAgICAgICAgICBzdWNjZXNzb3JWZXJ0ZXhOYW1lID0gc3VjY2Vzc29yVmVydGV4LmdldE5hbWUoKTtcblxuICAgICAgc3VjY2Vzc29yVmVydGV4TWFwW3N1Y2Nlc3NvclZlcnRleE5hbWVdID0gc3VjY2Vzc29yVmVydGV4O1xuXG4gICAgICBzdWNjZXNzb3JWZXJ0ZXguZ2V0U3VjY2Vzc29yVmVydGV4TWFwKHN1Y2Nlc3NvclZlcnRleE1hcCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3VjY2Vzc29yVmVydGV4TWFwO1xuICB9XG5cbiAgZ2V0UHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcygpIHtcbiAgICBjb25zdCBwcmVkZWNlc3NvclZlcnRpY2VzID0gdGhpcy5nZXRQcmVkZWNlc3NvclZlcnRpY2VzKCksXG4gICAgICAgICAgcHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcyA9IHByZWRlY2Vzc29yVmVydGljZXMubWFwKChwcmVkZWNlc3NvclZlcnRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJlZGVjZXNzb3JWZXJ0ZXhOYW1lID0gcHJlZGVjZXNzb3JWZXJ0ZXguZ2V0TmFtZSgpO1xuXG4gICAgICAgICAgICByZXR1cm4gcHJlZGVjZXNzb3JWZXJ0ZXhOYW1lO1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHByZWRlY2Vzc29yVmVydGV4TmFtZXM7XG4gIH1cblxuICBnZXRTdWNjZXNzb3JWZXJ0ZXhOYW1lcygpIHtcbiAgICBjb25zdCBzdWNjZXNzb3JWZXJ0aWNlcyA9IHRoaXMuZ2V0U3VjY2Vzc29yVmVydGljZXMoKSxcbiAgICAgICAgICBzdWNjZXNzb3JWZXJ0ZXhOYW1lcyA9IHN1Y2Nlc3NvclZlcnRpY2VzLm1hcCgoc3VjY2Vzc29yVmVydGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWNjZXNzb3JWZXJ0ZXhOYW1lID0gc3VjY2Vzc29yVmVydGV4LmdldE5hbWUoKTtcblxuICAgICAgICAgICAgcmV0dXJuIHN1Y2Nlc3NvclZlcnRleE5hbWU7XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gc3VjY2Vzc29yVmVydGV4TmFtZXM7XG4gIH1cblxuICBnZXRQcmVkZWNlc3NvclZlcnRpY2VzKCkge1xuICAgIGNvbnN0IHByZWRlY2Vzc29yVmVydGV4TWFwID0gdGhpcy5nZXRQcmVkZWNlc3NvclZlcnRleE1hcCgpLFxuICAgICAgICAgIHByZWRlY2Vzc29yVmVydGV4TmFtZXMgPSBPYmplY3Qua2V5cyhwcmVkZWNlc3NvclZlcnRleE1hcCksXG4gICAgICAgICAgcHJlZGVjZXNzb3JWZXJ0aWNlcyA9IHByZWRlY2Vzc29yVmVydGV4TmFtZXMubWFwKChwcmVkZWNlc3NvclZlcnRleE5hbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByZWRlY2Vzc29yVmVydGV4ID0gcHJlZGVjZXNzb3JWZXJ0ZXhNYXBbcHJlZGVjZXNzb3JWZXJ0ZXhOYW1lXTtcblxuICAgICAgICAgICAgcmV0dXJuIHByZWRlY2Vzc29yVmVydGV4O1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHByZWRlY2Vzc29yVmVydGljZXM7XG4gIH1cblxuICBnZXRTdWNjZXNzb3JWZXJ0aWNlcygpIHtcbiAgICBjb25zdCBzdWNjZXNzb3JWZXJ0ZXhNYXAgPSB0aGlzLmdldFN1Y2Nlc3NvclZlcnRleE1hcCgpLFxuICAgICAgICAgIHN1Y2Nlc3NvclZlcnRleE5hbWVzID0gT2JqZWN0LmtleXMoc3VjY2Vzc29yVmVydGV4TWFwKSxcbiAgICAgICAgICBzdWNjZXNzb3JWZXJ0aWNlcyA9IHN1Y2Nlc3NvclZlcnRleE5hbWVzLm1hcCgoc3VjY2Vzc29yVmVydGV4TmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3VjY2Vzc29yVmVydGV4ID0gc3VjY2Vzc29yVmVydGV4TWFwW3N1Y2Nlc3NvclZlcnRleE5hbWVdO1xuICBcbiAgICAgICAgICAgIHJldHVybiBzdWNjZXNzb3JWZXJ0ZXg7XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gc3VjY2Vzc29yVmVydGljZXM7XG4gIH1cblxuICBnZXRPcmRlcmVkUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcygpIHtcbiAgICBjb25zdCBwcmVkZWNlc3NvclZlcnRpY2VzID0gdGhpcy5nZXRQcmVkZWNlc3NvclZlcnRpY2VzKCk7XG5cbiAgICBvcmRlclZlcnRpY2VzKHByZWRlY2Vzc29yVmVydGljZXMpO1xuXG4gICAgY29uc3Qgb3JkZXJlZFByZWRlY2Vzc29yVmVydGljZXMgPSBwcmVkZWNlc3NvclZlcnRpY2VzLCAgLy8vXG4gICAgICAgICAgb3JkZXJlZFByZWRlY2Vzc29yVmVydGV4TmFtZXMgPSB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0aWNlcyhvcmRlcmVkUHJlZGVjZXNzb3JWZXJ0aWNlcyk7XG5cbiAgICByZXR1cm4gb3JkZXJlZFByZWRlY2Vzc29yVmVydGV4TmFtZXM7XG4gIH1cbiAgXG4gIHJldHJpZXZlRm9yd2FyZHNBZmZlY3RlZFZlcnRpY2VzKHNvdXJjZVZlcnRleCkge1xuICAgIGNvbnN0IGZvcndhcmRzQWZmZWN0ZWRWZXJ0aWNlcyA9IHRoaXMuZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoKCh2aXNpdGVkVmVydGV4KSA9PiB7XG4gICAgICBjb25zdCB0ZXJtaW5hdGUgPSAodmlzaXRlZFZlcnRleCA9PT0gc291cmNlVmVydGV4KTtcbiAgICAgIFxuICAgICAgaWYgKHRlcm1pbmF0ZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gZm9yd2FyZHNBZmZlY3RlZFZlcnRpY2VzO1xuICB9XG5cbiAgcmV0cmlldmVCYWNrd2FyZHNBZmZlY3RlZFZlcnRpY2VzKCkge1xuICAgIGNvbnN0IGJhY2t3YXJkc0FmZmVjdGVkVmVydGljZXMgPSB0aGlzLmJhY2t3YXJkc0RlcHRoRmlyc3RTZWFyY2goKHZpc2l0ZWRWZXJ0ZXgpID0+IHtcbiAgICAgIGNvbnN0IHRlcm1pbmF0ZSA9IGZhbHNlO1xuXG4gICAgICBpZiAodGVybWluYXRlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBiYWNrd2FyZHNBZmZlY3RlZFZlcnRpY2VzO1xuICB9XG4gIFxuICBpc1ZlcnRleEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KHZlcnRleCkge1xuICAgIGNvbnN0IHZlcnRleEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ID0gdGhpcy5pbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRpY2VzLmluY2x1ZGVzKHZlcnRleCk7XG5cbiAgICByZXR1cm4gdmVydGV4SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXg7XG4gIH1cblxuICBpc1ZlcnRleEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCh2ZXJ0ZXgpIHtcbiAgICBjb25zdCB2ZXJ0ZXhJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXggPSB0aGlzLmltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRpY2VzLmluY2x1ZGVzKHZlcnRleCk7XG5cbiAgICByZXR1cm4gdmVydGV4SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4O1xuICB9XG5cbiAgaXNFZGdlUHJlc2VudEJ5U291cmNlVmVydGV4KHNvdXJjZVZlcnRleCkge1xuICAgIGNvbnN0IHNvdXJjZVZlcnRleEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ID0gdGhpcy5pc1ZlcnRleEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KHNvdXJjZVZlcnRleCksXG4gICAgICAgICAgZWRnZVByZXNlbnQgPSBzb3VyY2VWZXJ0ZXhJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleDsgLy8vXG5cbiAgICByZXR1cm4gZWRnZVByZXNlbnQ7XG4gIH1cblxuICBpc0VkZ2VQcmVzZW50QnlUYXJnZXRWZXJ0ZXgodGFyZ2V0VmVydGV4KSB7XG4gICAgY29uc3QgdGFyZ2V0VmVydGV4SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ID0gdGhpcy5pc1ZlcnRleEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCh0YXJnZXRWZXJ0ZXgpLFxuICAgICAgICAgIGVkZ2VQcmVzZW50ID0gdGFyZ2V0VmVydGV4SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4OyAvLy9cblxuICAgIHJldHVybiBlZGdlUHJlc2VudDtcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBzZXRJbmRleChpbmRleCkge1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgfVxuXG4gIHNldFZpc2l0ZWQodmlzaXRlZCkge1xuICAgIHRoaXMudmlzaXRlZCA9IHZpc2l0ZWQ7XG4gIH1cblxuICBkZWNyZW1lbnRJbmRleCgpIHtcbiAgICB0aGlzLmluZGV4LS07XG4gIH1cblxuICByZW1vdmVJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRpY2VzLmluZGV4T2YoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpLFxuICAgICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICB0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGljZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gIH1cblxuICByZW1vdmVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRpY2VzLmluZGV4T2YoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KSxcbiAgICAgICAgICBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0aWNlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbiAgfVxuICBcbiAgcmVtb3ZlSW5jb21pbmdFZGdlcygpIHtcbiAgICBjb25zdCBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXggPSB0aGlzOyAvLy9cbiAgICBcbiAgICB0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGljZXMuZm9yRWFjaCgoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpID0+IHtcbiAgICAgIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4LnJlbW92ZUltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5pbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRpY2VzID0gW107XG4gIH1cblxuICByZW1vdmVPdXRnb2luZ0VkZ2VzKCkge1xuICAgIGNvbnN0IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ID0gdGhpczsgLy8vXG5cbiAgICB0aGlzLmltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRpY2VzLmZvckVhY2goKGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCkgPT4ge1xuICAgICAgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4LnJlbW92ZUltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRpY2VzID0gW107XG4gIH1cblxuICBhZGRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCkge1xuICAgIHRoaXMuaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0aWNlcy5wdXNoKGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KTtcbiAgfVxuXG4gIGFkZEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgpIHtcbiAgICB0aGlzLmltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRpY2VzLnB1c2goaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KTtcbiAgfVxuXG4gIGZvcndhcmRzRGVwdGhGaXJzdFNlYXJjaChjYWxsYmFjaykge1xuICAgIGNvbnN0IHZpc2l0ZWRWZXJ0aWNlcyA9IFtdO1xuXG4gICAgdGhpcy5yZXRyaWV2ZUZvcndhcmRzVmlzaXRlZFZlcnRpY2VzKCh2aXNpdGVkVmVydGV4KSA9PiB7XG4gICAgICBjb25zdCB0ZXJtaW5hdGUgPSBjYWxsYmFjayh2aXNpdGVkVmVydGV4KTsgIC8vL1xuXG4gICAgICB2aXNpdGVkVmVydGljZXMucHVzaCh2aXNpdGVkVmVydGV4KTtcblxuICAgICAgcmV0dXJuIHRlcm1pbmF0ZTtcbiAgICB9KTtcblxuICAgIHZpc2l0ZWRWZXJ0aWNlcy5mb3JFYWNoKCh2aXNpdGVkVmVydGV4KSA9PiB7XG4gICAgICB2aXNpdGVkVmVydGV4LnJlc2V0VmlzaXRlZCgpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHZpc2l0ZWRWZXJ0aWNlcztcbiAgfVxuXG4gIGJhY2t3YXJkc0RlcHRoRmlyc3RTZWFyY2goY2FsbGJhY2spIHtcbiAgICBjb25zdCB2aXNpdGVkVmVydGljZXMgPSBbXTtcblxuICAgIHRoaXMucmV0cmlldmVCYWNrd2FyZHNWaXNpdGVkVmVydGljZXMoKHZpc2l0ZWRWZXJ0ZXgpID0+IHtcbiAgICAgIGNvbnN0IHRlcm1pbmF0ZSA9IGNhbGxiYWNrKHZpc2l0ZWRWZXJ0ZXgpOyAgLy8vXG5cbiAgICAgIHZpc2l0ZWRWZXJ0aWNlcy5wdXNoKHZpc2l0ZWRWZXJ0ZXgpO1xuXG4gICAgICByZXR1cm4gdGVybWluYXRlO1xuICAgIH0pO1xuXG4gICAgdmlzaXRlZFZlcnRpY2VzLmZvckVhY2goKHZpc2l0ZWRWZXJ0ZXgpID0+IHtcbiAgICAgIHZpc2l0ZWRWZXJ0ZXgucmVzZXRWaXNpdGVkKCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdmlzaXRlZFZlcnRpY2VzO1xuICB9XG5cbiAgcmV0cmlldmVGb3J3YXJkc1Zpc2l0ZWRWZXJ0aWNlcyhjYWxsYmFjaykge1xuICAgIGxldCB0ZXJtaW5hdGUgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLnZpc2l0ZWQgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLnZpc2l0ZWQgPSB0cnVlO1xuXG4gICAgICBjb25zdCB2aXNpdGVkVmVydGV4ID0gdGhpczsgIC8vL1xuXG4gICAgICB0ZXJtaW5hdGUgPSBjYWxsYmFjayh2aXNpdGVkVmVydGV4KTtcblxuICAgICAgaWYgKHRlcm1pbmF0ZSAhPT0gdHJ1ZSkge1xuICAgICAgICB2aXNpdGVkVmVydGV4LnNvbWVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoKGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCkgPT4ge1xuICAgICAgICAgIHRlcm1pbmF0ZSA9IGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleC5yZXRyaWV2ZUZvcndhcmRzVmlzaXRlZFZlcnRpY2VzKGNhbGxiYWNrKTtcblxuICAgICAgICAgIGlmICh0ZXJtaW5hdGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1pbmF0ZTtcbiAgfVxuXG4gIHJldHJpZXZlQmFja3dhcmRzVmlzaXRlZFZlcnRpY2VzKGNhbGxiYWNrKSB7XG4gICAgbGV0IHRlcm1pbmF0ZSA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMudmlzaXRlZCA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMudmlzaXRlZCA9IHRydWU7XG5cbiAgICAgIGNvbnN0IHZpc2l0ZWRWZXJ0ZXggPSB0aGlzOyAgLy8vXG5cbiAgICAgIHRlcm1pbmF0ZSA9IGNhbGxiYWNrKHZpc2l0ZWRWZXJ0ZXgpO1xuXG4gICAgICBpZiAodGVybWluYXRlICE9PSB0cnVlKSB7XG4gICAgICAgIHZpc2l0ZWRWZXJ0ZXguc29tZUltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCkgPT4ge1xuICAgICAgICAgIHRlcm1pbmF0ZSA9IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4LnJldHJpZXZlQmFja3dhcmRzVmlzaXRlZFZlcnRpY2VzKGNhbGxiYWNrKTtcblxuICAgICAgICAgIGlmICh0ZXJtaW5hdGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1pbmF0ZTtcbiAgfVxuXG4gIGZvckVhY2hJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleChjYWxsYmFjaykge1xuICAgIHRoaXMuaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0aWNlcy5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGZvckVhY2hJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoY2FsbGJhY2spIHtcbiAgICB0aGlzLmltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRpY2VzLmZvckVhY2goY2FsbGJhY2spO1xuICB9XG5cbiAgc29tZUltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KGNhbGxiYWNrKSB7XG4gICAgdGhpcy5pbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRpY2VzLnNvbWUoY2FsbGJhY2spO1xuICB9XG5cbiAgc29tZUltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleChjYWxsYmFjaykge1xuICAgIHRoaXMuaW1tZWRpYXRlU3VjY2Vzc29yVmVydGljZXMuc29tZShjYWxsYmFjayk7XG4gIH1cblxuICByZXNldFZpc2l0ZWQoKSB7XG4gICAgdGhpcy52aXNpdGVkID0gZmFsc2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5hbWVBbmRJbmRleChuYW1lLCBpbmRleCkge1xuICAgIGNvbnN0IHZpc2l0ZWQgPSBmYWxzZSwgIC8vL1xuICAgICAgICAgIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGljZXMgPSBbXSxcbiAgICAgICAgICBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0aWNlcyA9IFtdLFxuICAgICAgICAgIGRlcGVuZGVuY3lWZXJ0ZXggPSBuZXcgVmVydGV4KG5hbWUsIGluZGV4LCB2aXNpdGVkLCBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRpY2VzLCBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0aWNlcyk7XG5cbiAgICByZXR1cm4gZGVwZW5kZW5jeVZlcnRleDtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJWZXJ0ZXgiLCJuYW1lIiwiaW5kZXgiLCJ2aXNpdGVkIiwiaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0aWNlcyIsImltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRpY2VzIiwiZ2V0TmFtZSIsImdldEluZGV4IiwiaXNWaXNpdGVkIiwiaXNTdHJhbmRlZCIsImltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGljZXNMZW5ndGgiLCJsZW5ndGgiLCJpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0aWNlc0xlbmd0aCIsInN0cmFuZGVkIiwiZ2V0SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcyIsImltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMiLCJtYXAiLCJpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCIsImltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZSIsImdldEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzIiwiaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXMiLCJpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgiLCJpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lIiwiZ2V0SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0aWNlcyIsImdldEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRpY2VzIiwiZ2V0UHJlZGVjZXNzb3JWZXJ0ZXhNYXAiLCJwcmVkZWNlc3NvclZlcnRleE1hcCIsImZvckVhY2hJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCIsInByZWRlY2Vzc29yVmVydGV4IiwicHJlZGVjZXNzb3JWZXJ0ZXhOYW1lIiwiZ2V0U3VjY2Vzc29yVmVydGV4TWFwIiwic3VjY2Vzc29yVmVydGV4TWFwIiwiZm9yRWFjaEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCIsInN1Y2Nlc3NvclZlcnRleCIsInN1Y2Nlc3NvclZlcnRleE5hbWUiLCJnZXRQcmVkZWNlc3NvclZlcnRleE5hbWVzIiwicHJlZGVjZXNzb3JWZXJ0aWNlcyIsImdldFByZWRlY2Vzc29yVmVydGljZXMiLCJwcmVkZWNlc3NvclZlcnRleE5hbWVzIiwiZ2V0U3VjY2Vzc29yVmVydGV4TmFtZXMiLCJzdWNjZXNzb3JWZXJ0aWNlcyIsImdldFN1Y2Nlc3NvclZlcnRpY2VzIiwic3VjY2Vzc29yVmVydGV4TmFtZXMiLCJPYmplY3QiLCJrZXlzIiwiZ2V0T3JkZXJlZFByZWRlY2Vzc29yVmVydGV4TmFtZXMiLCJvcmRlclZlcnRpY2VzIiwib3JkZXJlZFByZWRlY2Vzc29yVmVydGljZXMiLCJvcmRlcmVkUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcyIsInZlcnRleE5hbWVzRnJvbVZlcnRpY2VzIiwicmV0cmlldmVGb3J3YXJkc0FmZmVjdGVkVmVydGljZXMiLCJzb3VyY2VWZXJ0ZXgiLCJmb3J3YXJkc0FmZmVjdGVkVmVydGljZXMiLCJmb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2giLCJ2aXNpdGVkVmVydGV4IiwidGVybWluYXRlIiwicmV0cmlldmVCYWNrd2FyZHNBZmZlY3RlZFZlcnRpY2VzIiwiYmFja3dhcmRzQWZmZWN0ZWRWZXJ0aWNlcyIsImJhY2t3YXJkc0RlcHRoRmlyc3RTZWFyY2giLCJpc1ZlcnRleEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4IiwidmVydGV4IiwidmVydGV4SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgiLCJpbmNsdWRlcyIsImlzVmVydGV4SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4IiwidmVydGV4SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4IiwiaXNFZGdlUHJlc2VudEJ5U291cmNlVmVydGV4Iiwic291cmNlVmVydGV4SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgiLCJlZGdlUHJlc2VudCIsImlzRWRnZVByZXNlbnRCeVRhcmdldFZlcnRleCIsInRhcmdldFZlcnRleCIsInRhcmdldFZlcnRleEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCIsInNldE5hbWUiLCJzZXRJbmRleCIsInNldFZpc2l0ZWQiLCJkZWNyZW1lbnRJbmRleCIsInJlbW92ZUltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4IiwiaW5kZXhPZiIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJyZW1vdmVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgiLCJyZW1vdmVJbmNvbWluZ0VkZ2VzIiwiZm9yRWFjaCIsInJlbW92ZU91dGdvaW5nRWRnZXMiLCJhZGRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCIsInB1c2giLCJhZGRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgiLCJjYWxsYmFjayIsInZpc2l0ZWRWZXJ0aWNlcyIsInJldHJpZXZlRm9yd2FyZHNWaXNpdGVkVmVydGljZXMiLCJyZXNldFZpc2l0ZWQiLCJyZXRyaWV2ZUJhY2t3YXJkc1Zpc2l0ZWRWZXJ0aWNlcyIsInNvbWVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgiLCJzb21lSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgiLCJzb21lIiwiZnJvbU5hbWVBbmRJbmRleCIsImRlcGVuZGVuY3lWZXJ0ZXgiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7O3NCQUZrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEMsSUFBQSxBQUFNQSx1QkFBTjthQUFNQSxPQUNQQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsT0FBTyxFQUFFQyw0QkFBNEIsRUFBRUMsMEJBQTBCO2dDQUR2RUw7UUFFakIsSUFBSSxDQUFDQyxPQUFPQTtRQUNaLElBQUksQ0FBQ0MsUUFBUUE7UUFDYixJQUFJLENBQUNDLFVBQVVBO1FBQ2YsSUFBSSxDQUFDQywrQkFBK0JBO1FBQ3BDLElBQUksQ0FBQ0MsNkJBQTZCQTs7a0JBTmpCTDs7WUFTbkJNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0w7WUFDZDs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0w7WUFDZDs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0w7WUFDZDs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxxQ0FBcUMsSUFBSSxDQUFDTiw2QkFBNkJPLFFBQ3ZFQyxtQ0FBbUMsSUFBSSxDQUFDUCwyQkFBMkJNLFFBQ25FRSxXQUFZLEFBQUNILHVD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