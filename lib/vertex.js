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
function _classCallCheck(instance, Constructor) {
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
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var Vertex = /*#__PURE__*/ function() {
    function Vertex(name, index, visited, immediatePredecessorVertices, immediateSuccessorVertices) {
        _classCallCheck(this, Vertex);
        this.name = name;
        this.index = index;
        this.visited = visited;
        this.immediatePredecessorVertices = immediatePredecessorVertices;
        this.immediateSuccessorVertices = immediateSuccessorVertices;
    }
    _createClass(Vertex, [
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
                    return immediatePredecessorVertex.removeImmediateSuccessorVertex(immediateSuccessorVertex);
                });
                this.immediatePredecessorVertices = [];
            }
        },
        {
            key: "removeOutgoingEdges",
            value: function removeOutgoingEdges() {
                var immediatePredecessorVertex = this; ///
                this.immediateSuccessorVertices.forEach(function(immediateSuccessorVertex) {
                    return immediateSuccessorVertex.removeImmediateSuccessorVertex(immediatePredecessorVertex);
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
                    return visitedVertex.resetVisited();
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
                    return visitedVertex.resetVisited();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92ZXJ0ZXguanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHZlcnRleE5hbWVzRnJvbVZlcnRpY2VzLCBvcmRlclZlcnRpY2VzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3ZlcnRleFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZXJ0ZXgge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBpbmRleCwgdmlzaXRlZCwgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0aWNlcywgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGljZXMpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICB0aGlzLnZpc2l0ZWQgPSB2aXNpdGVkO1xuICAgIHRoaXMuaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0aWNlcyA9IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGljZXM7XG4gICAgdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0aWNlcyA9IGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRpY2VzO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0SW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5kZXg7XG4gIH1cblxuICBpc1Zpc2l0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMudmlzaXRlZDtcbiAgfVxuXG4gIGlzU3RyYW5kZWQoKSB7XG4gICAgY29uc3QgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0aWNlc0xlbmd0aCA9IHRoaXMuaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0aWNlcy5sZW5ndGgsXG4gICAgICAgICAgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGljZXNMZW5ndGggPSB0aGlzLmltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRpY2VzLmxlbmd0aCxcbiAgICAgICAgICBzdHJhbmRlZCA9ICgoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0aWNlc0xlbmd0aCA9PT0gMCkgJiYgKGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRpY2VzTGVuZ3RoID09PSAwKSk7XG5cbiAgICByZXR1cm4gc3RyYW5kZWQ7XG4gIH1cblxuICBnZXRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzKCkge1xuICAgIGNvbnN0IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMgPSB0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGljZXMubWFwKChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCkgPT4ge1xuICAgICAgY29uc3QgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lID0gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXguZ2V0TmFtZSgpO1xuXG4gICAgICByZXR1cm4gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXM7XG4gIH1cblxuICBnZXRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcygpIHtcbiAgICBjb25zdCBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcyA9IHRoaXMuaW1tZWRpYXRlU3VjY2Vzc29yVmVydGljZXMubWFwKChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgpID0+IHtcbiAgICAgIGNvbnN0IGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWUgPSBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXguZ2V0TmFtZSgpO1xuXG4gICAgICByZXR1cm4gaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZTtcbiAgICB9KTtcblxuICAgIHJldHVybiBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGljZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0aWNlcztcbiAgfVxuXG4gIGdldEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRpY2VzKCkge1xuICAgIHJldHVybiB0aGlzLmltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRpY2VzO1xuICB9XG5cbiAgZ2V0UHJlZGVjZXNzb3JWZXJ0ZXhNYXAocHJlZGVjZXNzb3JWZXJ0ZXhNYXAgPSB7fSkge1xuICAgIHRoaXMuZm9yRWFjaEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCkgPT4ge1xuICAgICAgY29uc3QgcHJlZGVjZXNzb3JWZXJ0ZXggPSBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCwgLy8vXG4gICAgICAgICAgICBwcmVkZWNlc3NvclZlcnRleE5hbWUgPSBwcmVkZWNlc3NvclZlcnRleC5nZXROYW1lKCk7XG5cbiAgICAgIHByZWRlY2Vzc29yVmVydGV4TWFwW3ByZWRlY2Vzc29yVmVydGV4TmFtZV0gPSBwcmVkZWNlc3NvclZlcnRleDtcblxuICAgICAgcHJlZGVjZXNzb3JWZXJ0ZXguZ2V0UHJlZGVjZXNzb3JWZXJ0ZXhNYXAocHJlZGVjZXNzb3JWZXJ0ZXhNYXApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByZWRlY2Vzc29yVmVydGV4TWFwO1xuICB9XG5cbiAgZ2V0U3VjY2Vzc29yVmVydGV4TWFwKHN1Y2Nlc3NvclZlcnRleE1hcCA9IHt9KSB7XG4gICAgdGhpcy5mb3JFYWNoSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgpID0+IHtcbiAgICAgIGNvbnN0IHN1Y2Nlc3NvclZlcnRleCA9IGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCwgLy8vXG4gICAgICAgICAgICBzdWNjZXNzb3JWZXJ0ZXhOYW1lID0gc3VjY2Vzc29yVmVydGV4LmdldE5hbWUoKTtcblxuICAgICAgc3VjY2Vzc29yVmVydGV4TWFwW3N1Y2Nlc3NvclZlcnRleE5hbWVdID0gc3VjY2Vzc29yVmVydGV4O1xuXG4gICAgICBzdWNjZXNzb3JWZXJ0ZXguZ2V0U3VjY2Vzc29yVmVydGV4TWFwKHN1Y2Nlc3NvclZlcnRleE1hcCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3VjY2Vzc29yVmVydGV4TWFwO1xuICB9XG5cbiAgZ2V0UHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcygpIHtcbiAgICBjb25zdCBwcmVkZWNlc3NvclZlcnRpY2VzID0gdGhpcy5nZXRQcmVkZWNlc3NvclZlcnRpY2VzKCksXG4gICAgICAgICAgcHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcyA9IHByZWRlY2Vzc29yVmVydGljZXMubWFwKChwcmVkZWNlc3NvclZlcnRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJlZGVjZXNzb3JWZXJ0ZXhOYW1lID0gcHJlZGVjZXNzb3JWZXJ0ZXguZ2V0TmFtZSgpO1xuXG4gICAgICAgICAgICByZXR1cm4gcHJlZGVjZXNzb3JWZXJ0ZXhOYW1lO1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHByZWRlY2Vzc29yVmVydGV4TmFtZXM7XG4gIH1cblxuICBnZXRTdWNjZXNzb3JWZXJ0ZXhOYW1lcygpIHtcbiAgICBjb25zdCBzdWNjZXNzb3JWZXJ0aWNlcyA9IHRoaXMuZ2V0U3VjY2Vzc29yVmVydGljZXMoKSxcbiAgICAgICAgICBzdWNjZXNzb3JWZXJ0ZXhOYW1lcyA9IHN1Y2Nlc3NvclZlcnRpY2VzLm1hcCgoc3VjY2Vzc29yVmVydGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWNjZXNzb3JWZXJ0ZXhOYW1lID0gc3VjY2Vzc29yVmVydGV4LmdldE5hbWUoKTtcblxuICAgICAgICAgICAgcmV0dXJuIHN1Y2Nlc3NvclZlcnRleE5hbWU7XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gc3VjY2Vzc29yVmVydGV4TmFtZXM7XG4gIH1cblxuICBnZXRQcmVkZWNlc3NvclZlcnRpY2VzKCkge1xuICAgIGNvbnN0IHByZWRlY2Vzc29yVmVydGV4TWFwID0gdGhpcy5nZXRQcmVkZWNlc3NvclZlcnRleE1hcCgpLFxuICAgICAgICAgIHByZWRlY2Vzc29yVmVydGV4TmFtZXMgPSBPYmplY3Qua2V5cyhwcmVkZWNlc3NvclZlcnRleE1hcCksXG4gICAgICAgICAgcHJlZGVjZXNzb3JWZXJ0aWNlcyA9IHByZWRlY2Vzc29yVmVydGV4TmFtZXMubWFwKChwcmVkZWNlc3NvclZlcnRleE5hbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByZWRlY2Vzc29yVmVydGV4ID0gcHJlZGVjZXNzb3JWZXJ0ZXhNYXBbcHJlZGVjZXNzb3JWZXJ0ZXhOYW1lXTtcblxuICAgICAgICAgICAgcmV0dXJuIHByZWRlY2Vzc29yVmVydGV4O1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHByZWRlY2Vzc29yVmVydGljZXM7XG4gIH1cblxuICBnZXRTdWNjZXNzb3JWZXJ0aWNlcygpIHtcbiAgICBjb25zdCBzdWNjZXNzb3JWZXJ0ZXhNYXAgPSB0aGlzLmdldFN1Y2Nlc3NvclZlcnRleE1hcCgpLFxuICAgICAgICAgIHN1Y2Nlc3NvclZlcnRleE5hbWVzID0gT2JqZWN0LmtleXMoc3VjY2Vzc29yVmVydGV4TWFwKSxcbiAgICAgICAgICBzdWNjZXNzb3JWZXJ0aWNlcyA9IHN1Y2Nlc3NvclZlcnRleE5hbWVzLm1hcCgoc3VjY2Vzc29yVmVydGV4TmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3VjY2Vzc29yVmVydGV4ID0gc3VjY2Vzc29yVmVydGV4TWFwW3N1Y2Nlc3NvclZlcnRleE5hbWVdO1xuICBcbiAgICAgICAgICAgIHJldHVybiBzdWNjZXNzb3JWZXJ0ZXg7XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gc3VjY2Vzc29yVmVydGljZXM7XG4gIH1cblxuICBnZXRPcmRlcmVkUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcygpIHtcbiAgICBjb25zdCBwcmVkZWNlc3NvclZlcnRpY2VzID0gdGhpcy5nZXRQcmVkZWNlc3NvclZlcnRpY2VzKCk7XG5cbiAgICBvcmRlclZlcnRpY2VzKHByZWRlY2Vzc29yVmVydGljZXMpO1xuXG4gICAgY29uc3Qgb3JkZXJlZFByZWRlY2Vzc29yVmVydGljZXMgPSBwcmVkZWNlc3NvclZlcnRpY2VzLCAgLy8vXG4gICAgICAgICAgb3JkZXJlZFByZWRlY2Vzc29yVmVydGV4TmFtZXMgPSB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0aWNlcyhvcmRlcmVkUHJlZGVjZXNzb3JWZXJ0aWNlcyk7XG5cbiAgICByZXR1cm4gb3JkZXJlZFByZWRlY2Vzc29yVmVydGV4TmFtZXM7XG4gIH1cbiAgXG4gIHJldHJpZXZlRm9yd2FyZHNBZmZlY3RlZFZlcnRpY2VzKHNvdXJjZVZlcnRleCkge1xuICAgIGNvbnN0IGZvcndhcmRzQWZmZWN0ZWRWZXJ0aWNlcyA9IHRoaXMuZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoKCh2aXNpdGVkVmVydGV4KSA9PiB7XG4gICAgICBjb25zdCB0ZXJtaW5hdGUgPSAodmlzaXRlZFZlcnRleCA9PT0gc291cmNlVmVydGV4KTtcbiAgICAgIFxuICAgICAgaWYgKHRlcm1pbmF0ZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gZm9yd2FyZHNBZmZlY3RlZFZlcnRpY2VzO1xuICB9XG5cbiAgcmV0cmlldmVCYWNrd2FyZHNBZmZlY3RlZFZlcnRpY2VzKCkge1xuICAgIGNvbnN0IGJhY2t3YXJkc0FmZmVjdGVkVmVydGljZXMgPSB0aGlzLmJhY2t3YXJkc0RlcHRoRmlyc3RTZWFyY2goKHZpc2l0ZWRWZXJ0ZXgpID0+IHtcbiAgICAgIGNvbnN0IHRlcm1pbmF0ZSA9IGZhbHNlO1xuXG4gICAgICBpZiAodGVybWluYXRlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBiYWNrd2FyZHNBZmZlY3RlZFZlcnRpY2VzO1xuICB9XG4gIFxuICBpc1ZlcnRleEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KHZlcnRleCkge1xuICAgIGNvbnN0IHZlcnRleEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ID0gdGhpcy5pbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRpY2VzLmluY2x1ZGVzKHZlcnRleCk7XG5cbiAgICByZXR1cm4gdmVydGV4SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXg7XG4gIH1cblxuICBpc1ZlcnRleEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCh2ZXJ0ZXgpIHtcbiAgICBjb25zdCB2ZXJ0ZXhJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXggPSB0aGlzLmltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRpY2VzLmluY2x1ZGVzKHZlcnRleCk7XG5cbiAgICByZXR1cm4gdmVydGV4SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4O1xuICB9XG5cbiAgaXNFZGdlUHJlc2VudEJ5U291cmNlVmVydGV4KHNvdXJjZVZlcnRleCkge1xuICAgIGNvbnN0IHNvdXJjZVZlcnRleEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ID0gdGhpcy5pc1ZlcnRleEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KHNvdXJjZVZlcnRleCksXG4gICAgICAgICAgZWRnZVByZXNlbnQgPSBzb3VyY2VWZXJ0ZXhJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleDsgLy8vXG5cbiAgICByZXR1cm4gZWRnZVByZXNlbnQ7XG4gIH1cblxuICBpc0VkZ2VQcmVzZW50QnlUYXJnZXRWZXJ0ZXgodGFyZ2V0VmVydGV4KSB7XG4gICAgY29uc3QgdGFyZ2V0VmVydGV4SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ID0gdGhpcy5pc1ZlcnRleEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCh0YXJnZXRWZXJ0ZXgpLFxuICAgICAgICAgIGVkZ2VQcmVzZW50ID0gdGFyZ2V0VmVydGV4SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4OyAvLy9cblxuICAgIHJldHVybiBlZGdlUHJlc2VudDtcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBzZXRJbmRleChpbmRleCkge1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgfVxuXG4gIHNldFZpc2l0ZWQodmlzaXRlZCkge1xuICAgIHRoaXMudmlzaXRlZCA9IHZpc2l0ZWQ7XG4gIH1cblxuICBkZWNyZW1lbnRJbmRleCgpIHtcbiAgICB0aGlzLmluZGV4LS07XG4gIH1cblxuICByZW1vdmVJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRpY2VzLmluZGV4T2YoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpLFxuICAgICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICB0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGljZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gIH1cblxuICByZW1vdmVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRpY2VzLmluZGV4T2YoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KSxcbiAgICAgICAgICBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0aWNlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbiAgfVxuICBcbiAgcmVtb3ZlSW5jb21pbmdFZGdlcygpIHtcbiAgICBjb25zdCBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXggPSB0aGlzOyAvLy9cbiAgICBcbiAgICB0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGljZXMuZm9yRWFjaCgoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpID0+IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4LnJlbW92ZUltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgpKTtcblxuICAgIHRoaXMuaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0aWNlcyA9IFtdO1xuICB9XG5cbiAgcmVtb3ZlT3V0Z29pbmdFZGdlcygpIHtcbiAgICBjb25zdCBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCA9IHRoaXM7IC8vL1xuXG4gICAgdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0aWNlcy5mb3JFYWNoKChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgpID0+IGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleC5yZW1vdmVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpKTtcblxuICAgIHRoaXMuaW1tZWRpYXRlU3VjY2Vzc29yVmVydGljZXMgPSBbXTtcbiAgfVxuXG4gIGFkZEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KSB7XG4gICAgdGhpcy5pbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRpY2VzLnB1c2goaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpO1xuICB9XG5cbiAgYWRkSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCkge1xuICAgIHRoaXMuaW1tZWRpYXRlU3VjY2Vzc29yVmVydGljZXMucHVzaChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgpO1xuICB9XG5cbiAgZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgdmlzaXRlZFZlcnRpY2VzID0gW107XG5cbiAgICB0aGlzLnJldHJpZXZlRm9yd2FyZHNWaXNpdGVkVmVydGljZXMoKHZpc2l0ZWRWZXJ0ZXgpID0+IHtcbiAgICAgIGNvbnN0IHRlcm1pbmF0ZSA9IGNhbGxiYWNrKHZpc2l0ZWRWZXJ0ZXgpOyAgLy8vXG5cbiAgICAgIHZpc2l0ZWRWZXJ0aWNlcy5wdXNoKHZpc2l0ZWRWZXJ0ZXgpO1xuXG4gICAgICByZXR1cm4gdGVybWluYXRlO1xuICAgIH0pO1xuXG4gICAgdmlzaXRlZFZlcnRpY2VzLmZvckVhY2goKHZpc2l0ZWRWZXJ0ZXgpID0+IHZpc2l0ZWRWZXJ0ZXgucmVzZXRWaXNpdGVkKCkpO1xuXG4gICAgcmV0dXJuIHZpc2l0ZWRWZXJ0aWNlcztcbiAgfVxuXG4gIGJhY2t3YXJkc0RlcHRoRmlyc3RTZWFyY2goY2FsbGJhY2spIHtcbiAgICBjb25zdCB2aXNpdGVkVmVydGljZXMgPSBbXTtcblxuICAgIHRoaXMucmV0cmlldmVCYWNrd2FyZHNWaXNpdGVkVmVydGljZXMoKHZpc2l0ZWRWZXJ0ZXgpID0+IHtcbiAgICAgIGNvbnN0IHRlcm1pbmF0ZSA9IGNhbGxiYWNrKHZpc2l0ZWRWZXJ0ZXgpOyAgLy8vXG5cbiAgICAgIHZpc2l0ZWRWZXJ0aWNlcy5wdXNoKHZpc2l0ZWRWZXJ0ZXgpO1xuXG4gICAgICByZXR1cm4gdGVybWluYXRlO1xuICAgIH0pO1xuXG4gICAgdmlzaXRlZFZlcnRpY2VzLmZvckVhY2goKHZpc2l0ZWRWZXJ0ZXgpID0+IHZpc2l0ZWRWZXJ0ZXgucmVzZXRWaXNpdGVkKCkpO1xuXG4gICAgcmV0dXJuIHZpc2l0ZWRWZXJ0aWNlcztcbiAgfVxuXG4gIHJldHJpZXZlRm9yd2FyZHNWaXNpdGVkVmVydGljZXMoY2FsbGJhY2spIHtcbiAgICBsZXQgdGVybWluYXRlID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy52aXNpdGVkID09PSBmYWxzZSkge1xuICAgICAgdGhpcy52aXNpdGVkID0gdHJ1ZTtcblxuICAgICAgY29uc3QgdmlzaXRlZFZlcnRleCA9IHRoaXM7ICAvLy9cblxuICAgICAgdGVybWluYXRlID0gY2FsbGJhY2sodmlzaXRlZFZlcnRleCk7XG5cbiAgICAgIGlmICh0ZXJtaW5hdGUgIT09IHRydWUpIHtcbiAgICAgICAgdmlzaXRlZFZlcnRleC5zb21lSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgpID0+IHtcbiAgICAgICAgICB0ZXJtaW5hdGUgPSBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgucmV0cmlldmVGb3J3YXJkc1Zpc2l0ZWRWZXJ0aWNlcyhjYWxsYmFjayk7XG5cbiAgICAgICAgICBpZiAodGVybWluYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0ZXJtaW5hdGU7XG4gIH1cblxuICByZXRyaWV2ZUJhY2t3YXJkc1Zpc2l0ZWRWZXJ0aWNlcyhjYWxsYmFjaykge1xuICAgIGxldCB0ZXJtaW5hdGUgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLnZpc2l0ZWQgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLnZpc2l0ZWQgPSB0cnVlO1xuXG4gICAgICBjb25zdCB2aXNpdGVkVmVydGV4ID0gdGhpczsgIC8vL1xuXG4gICAgICB0ZXJtaW5hdGUgPSBjYWxsYmFjayh2aXNpdGVkVmVydGV4KTtcblxuICAgICAgaWYgKHRlcm1pbmF0ZSAhPT0gdHJ1ZSkge1xuICAgICAgICB2aXNpdGVkVmVydGV4LnNvbWVJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCgoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpID0+IHtcbiAgICAgICAgICB0ZXJtaW5hdGUgPSBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleC5yZXRyaWV2ZUJhY2t3YXJkc1Zpc2l0ZWRWZXJ0aWNlcyhjYWxsYmFjayk7XG5cbiAgICAgICAgICBpZiAodGVybWluYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0ZXJtaW5hdGU7XG4gIH1cblxuICBmb3JFYWNoSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgoY2FsbGJhY2spIHtcbiAgICB0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGljZXMuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cblxuICBmb3JFYWNoSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KGNhbGxiYWNrKSB7XG4gICAgdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0aWNlcy5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHNvbWVJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleChjYWxsYmFjaykge1xuICAgIHRoaXMuaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0aWNlcy5zb21lKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHNvbWVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoY2FsbGJhY2spIHtcbiAgICB0aGlzLmltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRpY2VzLnNvbWUoY2FsbGJhY2spO1xuICB9XG5cbiAgcmVzZXRWaXNpdGVkKCkge1xuICAgIHRoaXMudmlzaXRlZCA9IGZhbHNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21OYW1lQW5kSW5kZXgobmFtZSwgaW5kZXgpIHtcbiAgICBjb25zdCB2aXNpdGVkID0gZmFsc2UsICAvLy9cbiAgICAgICAgICBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRpY2VzID0gW10sXG4gICAgICAgICAgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGljZXMgPSBbXSxcbiAgICAgICAgICBkZXBlbmRlbmN5VmVydGV4ID0gbmV3IFZlcnRleChuYW1lLCBpbmRleCwgdmlzaXRlZCwgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0aWNlcywgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGljZXMpO1xuXG4gICAgcmV0dXJuIGRlcGVuZGVuY3lWZXJ0ZXg7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiVmVydGV4IiwibmFtZSIsImluZGV4IiwidmlzaXRlZCIsImltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGljZXMiLCJpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0aWNlcyIsImdldE5hbWUiLCJnZXRJbmRleCIsImlzVmlzaXRlZCIsImlzU3RyYW5kZWQiLCJpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRpY2VzTGVuZ3RoIiwibGVuZ3RoIiwiaW1tZWRpYXRlU3VjY2Vzc29yVmVydGljZXNMZW5ndGgiLCJzdHJhbmRlZCIsImdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMiLCJpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzIiwibWFwIiwiaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgiLCJpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWUiLCJnZXRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcyIsImltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzIiwiaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4IiwiaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZSIsImdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGljZXMiLCJnZXRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0aWNlcyIsImdldFByZWRlY2Vzc29yVmVydGV4TWFwIiwicHJlZGVjZXNzb3JWZXJ0ZXhNYXAiLCJmb3JFYWNoSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgiLCJwcmVkZWNlc3NvclZlcnRleCIsInByZWRlY2Vzc29yVmVydGV4TmFtZSIsImdldFN1Y2Nlc3NvclZlcnRleE1hcCIsInN1Y2Nlc3NvclZlcnRleE1hcCIsImZvckVhY2hJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgiLCJzdWNjZXNzb3JWZXJ0ZXgiLCJzdWNjZXNzb3JWZXJ0ZXhOYW1lIiwiZ2V0UHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcyIsInByZWRlY2Vzc29yVmVydGljZXMiLCJnZXRQcmVkZWNlc3NvclZlcnRpY2VzIiwicHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcyIsImdldFN1Y2Nlc3NvclZlcnRleE5hbWVzIiwic3VjY2Vzc29yVmVydGljZXMiLCJnZXRTdWNjZXNzb3JWZXJ0aWNlcyIsInN1Y2Nlc3NvclZlcnRleE5hbWVzIiwiT2JqZWN0Iiwia2V5cyIsImdldE9yZGVyZWRQcmVkZWNlc3NvclZlcnRleE5hbWVzIiwib3JkZXJWZXJ0aWNlcyIsIm9yZGVyZWRQcmVkZWNlc3NvclZlcnRpY2VzIiwib3JkZXJlZFByZWRlY2Vzc29yVmVydGV4TmFtZXMiLCJ2ZXJ0ZXhOYW1lc0Zyb21WZXJ0aWNlcyIsInJldHJpZXZlRm9yd2FyZHNBZmZlY3RlZFZlcnRpY2VzIiwic291cmNlVmVydGV4IiwiZm9yd2FyZHNBZmZlY3RlZFZlcnRpY2VzIiwiZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoIiwidmlzaXRlZFZlcnRleCIsInRlcm1pbmF0ZSIsInJldHJpZXZlQmFja3dhcmRzQWZmZWN0ZWRWZXJ0aWNlcyIsImJhY2t3YXJkc0FmZmVjdGVkVmVydGljZXMiLCJiYWNrd2FyZHNEZXB0aEZpcnN0U2VhcmNoIiwiaXNWZXJ0ZXhJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCIsInZlcnRleCIsInZlcnRleEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4IiwiaW5jbHVkZXMiLCJpc1ZlcnRleEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCIsInZlcnRleEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCIsImlzRWRnZVByZXNlbnRCeVNvdXJjZVZlcnRleCIsInNvdXJjZVZlcnRleEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4IiwiZWRnZVByZXNlbnQiLCJpc0VkZ2VQcmVzZW50QnlUYXJnZXRWZXJ0ZXgiLCJ0YXJnZXRWZXJ0ZXgiLCJ0YXJnZXRWZXJ0ZXhJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgiLCJzZXROYW1lIiwic2V0SW5kZXgiLCJzZXRWaXNpdGVkIiwiZGVjcmVtZW50SW5kZXgiLCJyZW1vdmVJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCIsImluZGV4T2YiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwicmVtb3ZlSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4IiwicmVtb3ZlSW5jb21pbmdFZGdlcyIsImZvckVhY2giLCJyZW1vdmVPdXRnb2luZ0VkZ2VzIiwiYWRkSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgiLCJwdXNoIiwiYWRkSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4IiwiY2FsbGJhY2siLCJ2aXNpdGVkVmVydGljZXMiLCJyZXRyaWV2ZUZvcndhcmRzVmlzaXRlZFZlcnRpY2VzIiwicmVzZXRWaXNpdGVkIiwicmV0cmlldmVCYWNrd2FyZHNWaXNpdGVkVmVydGljZXMiLCJzb21lSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4Iiwic29tZUltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4Iiwic29tZSIsImZyb21OYW1lQW5kSW5kZXgiLCJkZXBlbmRlbmN5VmVydGV4Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7OztzQkFGa0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhDLElBQUEsQUFBTUEsdUJBQU47YUFBTUEsT0FDUEMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLE9BQU8sRUFBRUMsNEJBQTRCLEVBQUVDLDBCQUEwQjs4QkFEdkVMO1FBRWpCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsNEJBQTRCLEdBQUdBO1FBQ3BDLElBQUksQ0FBQ0MsMEJBQTBCLEdBQUdBOztpQkFOakJMOztZQVNuQk0sS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVU7Z0JBQ1IsT0FBTyxJQUFJLENBQUNMLElBQUk7WUFDbEI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUEsV0FBVztnQkFDVCxPQUFPLElBQUksQ0FBQ0wsS0FBSztZQUNuQjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQSxZQUFZO2dCQUNWLE9BQU8sSUFBSSxDQUFDTCxPQUFPO1lBQ3JCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWE7Z0JBQ1gsSUFBTUMscUNBQXFDLElBQUksQ0FBQ04sNEJBQTRCLENBQUNPLE1BQU0sRUFDN0VDLG1DQUFtQyxJQUFJLENBQUNQLDBCQUEwQixDQUFDTSxNQUFNLEVBQ3pF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