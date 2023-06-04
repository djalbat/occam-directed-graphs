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
var _search = require("./utilities/search");
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
    function Vertex(name, index, visited, immediateSuccessorVertexes, immediatePredecessorVertexes) {
        _class_call_check(this, Vertex);
        this.name = name;
        this.index = index;
        this.visited = visited;
        this.immediateSuccessorVertexes = immediateSuccessorVertexes;
        this.immediatePredecessorVertexes = immediatePredecessorVertexes;
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
            key: "getImmediateSuccessorVertexes",
            value: function getImmediateSuccessorVertexes() {
                return this.immediateSuccessorVertexes;
            }
        },
        {
            key: "getImmediatePredecessorVertexes",
            value: function getImmediatePredecessorVertexes() {
                return this.immediatePredecessorVertexes;
            }
        },
        {
            key: "isStranded",
            value: function isStranded() {
                var immediateSuccessorVertexesLength = this.immediateSuccessorVertexes.length, immediatePredecessorVertexesLength = this.immediatePredecessorVertexes.length, stranded = immediateSuccessorVertexesLength === 0 && immediatePredecessorVertexesLength === 0;
                return stranded;
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
            key: "getSuccessorVertexes",
            value: function getSuccessorVertexes() {
                var successorVertexMap = this.getSuccessorVertexMap(), successorVertexNames = Object.keys(successorVertexMap), successorVertexes = successorVertexNames.map(function(successorVertexName) {
                    var successorVertex = successorVertexMap[successorVertexName];
                    return successorVertex;
                });
                return successorVertexes;
            }
        },
        {
            key: "getPredecessorVertexes",
            value: function getPredecessorVertexes() {
                var predecessorVertexMap = this.getPredecessorVertexMap(), predecessorVertexNames = Object.keys(predecessorVertexMap), predecessorVertexes = predecessorVertexNames.map(function(predecessorVertexName) {
                    var predecessorVertex = predecessorVertexMap[predecessorVertexName];
                    return predecessorVertex;
                });
                return predecessorVertexes;
            }
        },
        {
            key: "getSuccessorVertexNames",
            value: function getSuccessorVertexNames() {
                var successorVertexes = this.getSuccessorVertexes(), successorVertexNames = successorVertexes.map(function(successorVertex) {
                    var successorVertexName = successorVertex.getName();
                    return successorVertexName;
                });
                return successorVertexNames;
            }
        },
        {
            key: "getPredecessorVertexNames",
            value: function getPredecessorVertexNames() {
                var predecessorVertexes = this.getPredecessorVertexes(), predecessorVertexNames = predecessorVertexes.map(function(predecessorVertex) {
                    var predecessorVertexName = predecessorVertex.getName();
                    return predecessorVertexName;
                });
                return predecessorVertexNames;
            }
        },
        {
            key: "getOrderedPredecessorVertexNames",
            value: function getOrderedPredecessorVertexNames() {
                var predecessorVertexes = this.getPredecessorVertexes();
                (0, _vertex.orderVertexes)(predecessorVertexes);
                var orderedPredecessorVertexes = predecessorVertexes, orderedPredecessorVertexNames = (0, _vertex.vertexNamesFromVertexes)(orderedPredecessorVertexes);
                return orderedPredecessorVertexNames;
            }
        },
        {
            key: "getImmediateSuccessorVertexNames",
            value: function getImmediateSuccessorVertexNames() {
                var immediateSuccessorVertexNames = this.immediateSuccessorVertexes.map(function(immediateSuccessorVertex) {
                    var immediateSuccessorVertexName = immediateSuccessorVertex.getName();
                    return immediateSuccessorVertexName;
                });
                return immediateSuccessorVertexNames;
            }
        },
        {
            key: "getImmediatePredecessorVertexNames",
            value: function getImmediatePredecessorVertexNames() {
                var immediatePredecessorVertexNames = this.immediatePredecessorVertexes.map(function(immediatePredecessorVertex) {
                    var immediatePredecessorVertexName = immediatePredecessorVertex.getName();
                    return immediatePredecessorVertexName;
                });
                return immediatePredecessorVertexNames;
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
            key: "isVertexImmediateSuccessorVertex",
            value: function isVertexImmediateSuccessorVertex(vertex) {
                var vertexImmediateSuccessorVertex = this.immediateSuccessorVertexes.includes(vertex);
                return vertexImmediateSuccessorVertex;
            }
        },
        {
            key: "isVertexImmediatePredecessorVertex",
            value: function isVertexImmediatePredecessorVertex(vertex) {
                var vertexImmediatePredecessorVertex = this.immediatePredecessorVertexes.includes(vertex);
                return vertexImmediatePredecessorVertex;
            }
        },
        {
            key: "retrieveForwardsAffectedVertexes",
            value: function retrieveForwardsAffectedVertexes(sourceVertex) {
                var visitedVertexes = this.forwardsDepthFirstSearch(function(visitedVertex) {
                    var terminate = visitedVertex === sourceVertex;
                    if (terminate) {
                        return true;
                    }
                }), forwardsAffectedVertexes = visitedVertexes; ///
                return forwardsAffectedVertexes;
            }
        },
        {
            key: "retrieveBackwardsAffectedVertexes",
            value: function retrieveBackwardsAffectedVertexes() {
                var visitedVertexes = this.backwardsDepthFirstSearch(function(visitedVertex) {
                    var terminate = false;
                    if (terminate) {
                        return true;
                    }
                }), backwardsAffectedVertexes = visitedVertexes; ///
                return backwardsAffectedVertexes;
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
            key: "setImmediateSuccessorVertexes",
            value: function setImmediateSuccessorVertexes(immediateSuccessorVertexes) {
                this.immediateSuccessorVertexes = immediateSuccessorVertexes;
            }
        },
        {
            key: "setImmediatePredecessorVertexes",
            value: function setImmediatePredecessorVertexes(immediatePredecessorVertexes) {
                this.immediatePredecessorVertexes = immediatePredecessorVertexes;
            }
        },
        {
            key: "decrementIndex",
            value: function decrementIndex() {
                this.index--;
            }
        },
        {
            key: "removeIncomingEdges",
            value: function removeIncomingEdges() {
                var immediateSuccessorVertex = this; ///
                this.immediatePredecessorVertexes.forEach(function(immediatePredecessorVertex) {
                    immediatePredecessorVertex.removeImmediateSuccessorVertex(immediateSuccessorVertex);
                });
                this.immediatePredecessorVertexes = [];
            }
        },
        {
            key: "removeOutgoingEdges",
            value: function removeOutgoingEdges() {
                var immediatePredecessorVertex = this; ///
                this.immediateSuccessorVertexes.forEach(function(immediateSuccessorVertex) {
                    immediateSuccessorVertex.removeImmediateSuccessorVertex(immediatePredecessorVertex);
                });
                this.immediateSuccessorVertexes = [];
            }
        },
        {
            key: "addImmediateSuccessorVertex",
            value: function addImmediateSuccessorVertex(immediateSuccessorVertex) {
                this.immediateSuccessorVertexes.push(immediateSuccessorVertex);
            }
        },
        {
            key: "addImmediatePredecessorVertex",
            value: function addImmediatePredecessorVertex(immediatePredecessorVertex) {
                this.immediatePredecessorVertexes.push(immediatePredecessorVertex);
            }
        },
        {
            key: "removeImmediateSuccessorVertex",
            value: function removeImmediateSuccessorVertex(immediateSuccessorVertex) {
                var index = this.immediateSuccessorVertexes.indexOf(immediateSuccessorVertex), start = index, deleteCount = 1;
                this.immediateSuccessorVertexes.splice(start, deleteCount);
            }
        },
        {
            key: "removeImmediatePredecessorVertex",
            value: function removeImmediatePredecessorVertex(immediatePredecessorVertex) {
                var index = this.immediatePredecessorVertexes.indexOf(immediatePredecessorVertex), start = index, deleteCount = 1;
                this.immediatePredecessorVertexes.splice(start, deleteCount);
            }
        },
        {
            key: "forwardsDepthFirstSearch",
            value: function forwardsDepthFirstSearch(callback) {
                var vertex = this, visitedVertexes = (0, _search.forwardsDepthFirstSearch)(vertex, callback);
                return visitedVertexes;
            }
        },
        {
            key: "backwardsDepthFirstSearch",
            value: function backwardsDepthFirstSearch(callback) {
                var vertex = this, visitedVertexes = (0, _search.backwardsDepthFirstSearch)(vertex, callback);
                return visitedVertexes;
            }
        },
        {
            key: "someImmediateSuccessorVertex",
            value: function someImmediateSuccessorVertex(callback) {
                this.immediateSuccessorVertexes.some(callback);
            }
        },
        {
            key: "someImmediatePredecessorVertex",
            value: function someImmediatePredecessorVertex(callback) {
                this.immediatePredecessorVertexes.some(callback);
            }
        },
        {
            key: "forEachImmediateSuccessorVertex",
            value: function forEachImmediateSuccessorVertex(callback) {
                this.immediateSuccessorVertexes.forEach(callback);
            }
        },
        {
            key: "forEachImmediatePredecessorVertex",
            value: function forEachImmediatePredecessorVertex(callback) {
                this.immediatePredecessorVertexes.forEach(callback);
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
                var visited = false, immediateSuccessorVertexes = [], immediatePredecessorVertexes = [], dependencyVertex = new Vertex(name, index, visited, immediateSuccessorVertexes, immediatePredecessorVertexes);
                return dependencyVertex;
            }
        }
    ]);
    return Vertex;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92ZXJ0ZXguanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG9yZGVyVmVydGV4ZXMsIHZlcnRleE5hbWVzRnJvbVZlcnRleGVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3ZlcnRleFwiO1xuaW1wb3J0IHsgZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoLCBiYWNrd2FyZHNEZXB0aEZpcnN0U2VhcmNoIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3NlYXJjaFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZXJ0ZXgge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBpbmRleCwgdmlzaXRlZCwgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMsIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICB0aGlzLnZpc2l0ZWQgPSB2aXNpdGVkO1xuICAgIHRoaXMuaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMgPSBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcztcbiAgICB0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMgPSBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0SW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5kZXg7XG4gIH1cblxuICBpc1Zpc2l0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMudmlzaXRlZDtcbiAgfVxuXG4gIGdldEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzKCkge1xuICAgIHJldHVybiB0aGlzLmltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzO1xuICB9XG5cbiAgZ2V0SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzO1xuICB9XG5cbiAgaXNTdHJhbmRlZCgpIHtcbiAgICBjb25zdCBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlc0xlbmd0aCA9IHRoaXMuaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMubGVuZ3RoLFxuICAgICAgICAgIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXNMZW5ndGggPSB0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMubGVuZ3RoLFxuICAgICAgICAgIHN0cmFuZGVkID0gKChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlc0xlbmd0aCA9PT0gMCkgJiYgKGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXNMZW5ndGggPT09IDApKTtcblxuICAgIHJldHVybiBzdHJhbmRlZDtcbiAgfVxuXG4gIGdldFN1Y2Nlc3NvclZlcnRleE1hcChzdWNjZXNzb3JWZXJ0ZXhNYXAgPSB7fSkge1xuICAgIHRoaXMuZm9yRWFjaEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCgoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KSA9PiB7XG4gICAgICBjb25zdCBzdWNjZXNzb3JWZXJ0ZXggPSBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgsIC8vL1xuICAgICAgICAgICAgc3VjY2Vzc29yVmVydGV4TmFtZSA9IHN1Y2Nlc3NvclZlcnRleC5nZXROYW1lKCk7XG5cbiAgICAgIHN1Y2Nlc3NvclZlcnRleE1hcFtzdWNjZXNzb3JWZXJ0ZXhOYW1lXSA9IHN1Y2Nlc3NvclZlcnRleDtcblxuICAgICAgc3VjY2Vzc29yVmVydGV4LmdldFN1Y2Nlc3NvclZlcnRleE1hcChzdWNjZXNzb3JWZXJ0ZXhNYXApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1Y2Nlc3NvclZlcnRleE1hcDtcbiAgfVxuXG4gIGdldFByZWRlY2Vzc29yVmVydGV4TWFwKHByZWRlY2Vzc29yVmVydGV4TWFwID0ge30pIHtcbiAgICB0aGlzLmZvckVhY2hJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCgoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpID0+IHtcbiAgICAgIGNvbnN0IHByZWRlY2Vzc29yVmVydGV4ID0gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgsIC8vL1xuICAgICAgICAgICAgcHJlZGVjZXNzb3JWZXJ0ZXhOYW1lID0gcHJlZGVjZXNzb3JWZXJ0ZXguZ2V0TmFtZSgpO1xuXG4gICAgICBwcmVkZWNlc3NvclZlcnRleE1hcFtwcmVkZWNlc3NvclZlcnRleE5hbWVdID0gcHJlZGVjZXNzb3JWZXJ0ZXg7XG5cbiAgICAgIHByZWRlY2Vzc29yVmVydGV4LmdldFByZWRlY2Vzc29yVmVydGV4TWFwKHByZWRlY2Vzc29yVmVydGV4TWFwKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBwcmVkZWNlc3NvclZlcnRleE1hcDtcbiAgfVxuXG4gIGdldFN1Y2Nlc3NvclZlcnRleGVzKCkge1xuICAgIGNvbnN0IHN1Y2Nlc3NvclZlcnRleE1hcCA9IHRoaXMuZ2V0U3VjY2Vzc29yVmVydGV4TWFwKCksXG4gICAgICAgICAgc3VjY2Vzc29yVmVydGV4TmFtZXMgPSBPYmplY3Qua2V5cyhzdWNjZXNzb3JWZXJ0ZXhNYXApLFxuICAgICAgICAgIHN1Y2Nlc3NvclZlcnRleGVzID0gc3VjY2Vzc29yVmVydGV4TmFtZXMubWFwKChzdWNjZXNzb3JWZXJ0ZXhOYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWNjZXNzb3JWZXJ0ZXggPSBzdWNjZXNzb3JWZXJ0ZXhNYXBbc3VjY2Vzc29yVmVydGV4TmFtZV07XG5cbiAgICAgICAgICAgIHJldHVybiBzdWNjZXNzb3JWZXJ0ZXg7XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gc3VjY2Vzc29yVmVydGV4ZXM7XG4gIH1cblxuICBnZXRQcmVkZWNlc3NvclZlcnRleGVzKCkge1xuICAgIGNvbnN0IHByZWRlY2Vzc29yVmVydGV4TWFwID0gdGhpcy5nZXRQcmVkZWNlc3NvclZlcnRleE1hcCgpLFxuICAgICAgICAgIHByZWRlY2Vzc29yVmVydGV4TmFtZXMgPSBPYmplY3Qua2V5cyhwcmVkZWNlc3NvclZlcnRleE1hcCksXG4gICAgICAgICAgcHJlZGVjZXNzb3JWZXJ0ZXhlcyA9IHByZWRlY2Vzc29yVmVydGV4TmFtZXMubWFwKChwcmVkZWNlc3NvclZlcnRleE5hbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByZWRlY2Vzc29yVmVydGV4ID0gcHJlZGVjZXNzb3JWZXJ0ZXhNYXBbcHJlZGVjZXNzb3JWZXJ0ZXhOYW1lXTtcblxuICAgICAgICAgICAgcmV0dXJuIHByZWRlY2Vzc29yVmVydGV4O1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHByZWRlY2Vzc29yVmVydGV4ZXM7XG4gIH1cblxuICBnZXRTdWNjZXNzb3JWZXJ0ZXhOYW1lcygpIHtcbiAgICBjb25zdCBzdWNjZXNzb3JWZXJ0ZXhlcyA9IHRoaXMuZ2V0U3VjY2Vzc29yVmVydGV4ZXMoKSxcbiAgICAgICAgICBzdWNjZXNzb3JWZXJ0ZXhOYW1lcyA9IHN1Y2Nlc3NvclZlcnRleGVzLm1hcCgoc3VjY2Vzc29yVmVydGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHN1Y2Nlc3NvclZlcnRleE5hbWUgPSBzdWNjZXNzb3JWZXJ0ZXguZ2V0TmFtZSgpO1xuXG4gICAgICAgIHJldHVybiBzdWNjZXNzb3JWZXJ0ZXhOYW1lO1xuICAgICAgfSk7XG5cbiAgICByZXR1cm4gc3VjY2Vzc29yVmVydGV4TmFtZXM7XG4gIH1cblxuICBnZXRQcmVkZWNlc3NvclZlcnRleE5hbWVzKCkge1xuICAgIGNvbnN0IHByZWRlY2Vzc29yVmVydGV4ZXMgPSB0aGlzLmdldFByZWRlY2Vzc29yVmVydGV4ZXMoKSxcbiAgICAgICAgICBwcmVkZWNlc3NvclZlcnRleE5hbWVzID0gcHJlZGVjZXNzb3JWZXJ0ZXhlcy5tYXAoKHByZWRlY2Vzc29yVmVydGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcmVkZWNlc3NvclZlcnRleE5hbWUgPSBwcmVkZWNlc3NvclZlcnRleC5nZXROYW1lKCk7XG5cbiAgICAgICAgICAgIHJldHVybiBwcmVkZWNlc3NvclZlcnRleE5hbWU7XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gcHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGdldE9yZGVyZWRQcmVkZWNlc3NvclZlcnRleE5hbWVzKCkge1xuICAgIGNvbnN0IHByZWRlY2Vzc29yVmVydGV4ZXMgPSB0aGlzLmdldFByZWRlY2Vzc29yVmVydGV4ZXMoKTtcblxuICAgIG9yZGVyVmVydGV4ZXMocHJlZGVjZXNzb3JWZXJ0ZXhlcyk7XG5cbiAgICBjb25zdCBvcmRlcmVkUHJlZGVjZXNzb3JWZXJ0ZXhlcyA9IHByZWRlY2Vzc29yVmVydGV4ZXMsICAvLy9cbiAgICAgICAgICBvcmRlcmVkUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcyA9IHZlcnRleE5hbWVzRnJvbVZlcnRleGVzKG9yZGVyZWRQcmVkZWNlc3NvclZlcnRleGVzKTtcblxuICAgIHJldHVybiBvcmRlcmVkUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGdldEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzKCkge1xuICAgIGNvbnN0IGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzID0gdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcy5tYXAoKGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCkgPT4ge1xuICAgICAgY29uc3QgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZSA9IGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleC5nZXROYW1lKCk7XG5cbiAgICAgIHJldHVybiBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzO1xuICB9XG5cbiAgZ2V0SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcygpIHtcbiAgICBjb25zdCBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzID0gdGhpcy5pbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzLm1hcCgoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpID0+IHtcbiAgICAgIGNvbnN0IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZSA9IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4LmdldE5hbWUoKTtcblxuICAgICAgcmV0dXJuIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZTtcbiAgICB9KTtcblxuICAgIHJldHVybiBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzO1xuICB9XG5cbiAgaXNFZGdlUHJlc2VudEJ5U291cmNlVmVydGV4KHNvdXJjZVZlcnRleCkge1xuICAgIGNvbnN0IHNvdXJjZVZlcnRleEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ID0gdGhpcy5pc1ZlcnRleEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KHNvdXJjZVZlcnRleCksXG4gICAgICAgICAgZWRnZVByZXNlbnQgPSBzb3VyY2VWZXJ0ZXhJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleDsgLy8vXG5cbiAgICByZXR1cm4gZWRnZVByZXNlbnQ7XG4gIH1cblxuICBpc0VkZ2VQcmVzZW50QnlUYXJnZXRWZXJ0ZXgodGFyZ2V0VmVydGV4KSB7XG4gICAgY29uc3QgdGFyZ2V0VmVydGV4SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ID0gdGhpcy5pc1ZlcnRleEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCh0YXJnZXRWZXJ0ZXgpLFxuICAgICAgICAgIGVkZ2VQcmVzZW50ID0gdGFyZ2V0VmVydGV4SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4OyAvLy9cblxuICAgIHJldHVybiBlZGdlUHJlc2VudDtcbiAgfVxuXG4gIGlzVmVydGV4SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KHZlcnRleCkge1xuICAgIGNvbnN0IHZlcnRleEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCA9IHRoaXMuaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMuaW5jbHVkZXModmVydGV4KTtcblxuICAgIHJldHVybiB2ZXJ0ZXhJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXg7XG4gIH1cblxuICBpc1ZlcnRleEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KHZlcnRleCkge1xuICAgIGNvbnN0IHZlcnRleEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ID0gdGhpcy5pbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzLmluY2x1ZGVzKHZlcnRleCk7XG5cbiAgICByZXR1cm4gdmVydGV4SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXg7XG4gIH1cblxuICByZXRyaWV2ZUZvcndhcmRzQWZmZWN0ZWRWZXJ0ZXhlcyhzb3VyY2VWZXJ0ZXgpIHtcbiAgICBjb25zdCB2aXNpdGVkVmVydGV4ZXMgPSB0aGlzLmZvcndhcmRzRGVwdGhGaXJzdFNlYXJjaCgodmlzaXRlZFZlcnRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGVybWluYXRlID0gKHZpc2l0ZWRWZXJ0ZXggPT09IHNvdXJjZVZlcnRleCk7XG5cbiAgICAgICAgICAgIGlmICh0ZXJtaW5hdGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZm9yd2FyZHNBZmZlY3RlZFZlcnRleGVzID0gdmlzaXRlZFZlcnRleGVzOyAvLy9cblxuICAgIHJldHVybiBmb3J3YXJkc0FmZmVjdGVkVmVydGV4ZXM7XG4gIH1cblxuICByZXRyaWV2ZUJhY2t3YXJkc0FmZmVjdGVkVmVydGV4ZXMoKSB7XG4gICAgY29uc3QgdmlzaXRlZFZlcnRleGVzID0gdGhpcy5iYWNrd2FyZHNEZXB0aEZpcnN0U2VhcmNoKCh2aXNpdGVkVmVydGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXJtaW5hdGUgPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKHRlcm1pbmF0ZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBiYWNrd2FyZHNBZmZlY3RlZFZlcnRleGVzID0gdmlzaXRlZFZlcnRleGVzOyAgLy8vXG5cbiAgICByZXR1cm4gYmFja3dhcmRzQWZmZWN0ZWRWZXJ0ZXhlcztcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBzZXRJbmRleChpbmRleCkge1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgfVxuXG4gIHNldFZpc2l0ZWQodmlzaXRlZCkge1xuICAgIHRoaXMudmlzaXRlZCA9IHZpc2l0ZWQ7XG4gIH1cblxuICBzZXRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcyhpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcykge1xuICAgIHRoaXMuaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMgPSBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcztcbiAgfVxuXG4gIHNldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcykge1xuICAgIHRoaXMuaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcyA9IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXM7XG4gIH1cblxuICBkZWNyZW1lbnRJbmRleCgpIHtcbiAgICB0aGlzLmluZGV4LS07XG4gIH1cblxuICByZW1vdmVJbmNvbWluZ0VkZ2VzKCkge1xuICAgIGNvbnN0IGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCA9IHRoaXM7IC8vL1xuXG4gICAgdGhpcy5pbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzLmZvckVhY2goKGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KSA9PiB7XG4gICAgICBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleC5yZW1vdmVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KTtcbiAgICB9KTtcblxuICAgIHRoaXMuaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcyA9IFtdO1xuICB9XG5cbiAgcmVtb3ZlT3V0Z29pbmdFZGdlcygpIHtcbiAgICBjb25zdCBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCA9IHRoaXM7IC8vL1xuXG4gICAgdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcy5mb3JFYWNoKChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgpID0+IHtcbiAgICAgIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleC5yZW1vdmVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcyA9IFtdO1xuICB9XG5cbiAgYWRkSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCkge1xuICAgIHRoaXMuaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMucHVzaChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgpO1xuICB9XG5cbiAgYWRkSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpIHtcbiAgICB0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMucHVzaChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCk7XG4gIH1cblxuICByZW1vdmVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzLmluZGV4T2YoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KSxcbiAgICAgICAgICBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbiAgfVxuXG4gIHJlbW92ZUltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMuaW5kZXhPZihpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCksXG4gICAgICAgICAgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIHRoaXMuaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbiAgfVxuXG4gIGZvcndhcmRzRGVwdGhGaXJzdFNlYXJjaChjYWxsYmFjaykge1xuICAgIGNvbnN0IHZlcnRleCA9IHRoaXMsICAvLy9cbiAgICAgICAgICB2aXNpdGVkVmVydGV4ZXMgPSBmb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2godmVydGV4LCBjYWxsYmFjayk7XG5cbiAgICByZXR1cm4gdmlzaXRlZFZlcnRleGVzO1xuICB9XG5cbiAgYmFja3dhcmRzRGVwdGhGaXJzdFNlYXJjaChjYWxsYmFjaykge1xuICAgIGNvbnN0IHZlcnRleCA9IHRoaXMsICAvLy9cbiAgICAgICAgICB2aXNpdGVkVmVydGV4ZXMgPSBiYWNrd2FyZHNEZXB0aEZpcnN0U2VhcmNoKHZlcnRleCwgY2FsbGJhY2spO1xuXG4gICAgcmV0dXJuIHZpc2l0ZWRWZXJ0ZXhlcztcbiAgfVxuXG4gIHNvbWVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoY2FsbGJhY2spIHtcbiAgICB0aGlzLmltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzLnNvbWUoY2FsbGJhY2spO1xuICB9XG5cbiAgc29tZUltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KGNhbGxiYWNrKSB7XG4gICAgdGhpcy5pbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzLnNvbWUoY2FsbGJhY2spO1xuICB9XG5cbiAgZm9yRWFjaEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleChjYWxsYmFjaykge1xuICAgIHRoaXMuaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cblxuICBmb3JFYWNoSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgoY2FsbGJhY2spIHtcbiAgICB0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cblxuICByZXNldFZpc2l0ZWQoKSB7XG4gICAgdGhpcy52aXNpdGVkID0gZmFsc2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5hbWVBbmRJbmRleChuYW1lLCBpbmRleCkge1xuICAgIGNvbnN0IHZpc2l0ZWQgPSBmYWxzZSwgIC8vL1xuICAgICAgICAgIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzID0gW10sXG4gICAgICAgICAgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcyA9IFtdLFxuICAgICAgICAgIGRlcGVuZGVuY3lWZXJ0ZXggPSBuZXcgVmVydGV4KG5hbWUsIGluZGV4LCB2aXNpdGVkLCBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcywgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcyk7XG5cbiAgICByZXR1cm4gZGVwZW5kZW5jeVZlcnRleDtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJWZXJ0ZXgiLCJuYW1lIiwiaW5kZXgiLCJ2aXNpdGVkIiwiaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMiLCJpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzIiwiZ2V0TmFtZSIsImdldEluZGV4IiwiaXNWaXNpdGVkIiwiZ2V0SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMiLCJnZXRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzIiwiaXNTdHJhbmRlZCIsImltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzTGVuZ3RoIiwibGVuZ3RoIiwiaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlc0xlbmd0aCIsInN0cmFuZGVkIiwiZ2V0U3VjY2Vzc29yVmVydGV4TWFwIiwic3VjY2Vzc29yVmVydGV4TWFwIiwiZm9yRWFjaEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCIsImltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCIsInN1Y2Nlc3NvclZlcnRleCIsInN1Y2Nlc3NvclZlcnRleE5hbWUiLCJnZXRQcmVkZWNlc3NvclZlcnRleE1hcCIsInByZWRlY2Vzc29yVmVydGV4TWFwIiwiZm9yRWFjaEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4IiwiaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgiLCJwcmVkZWNlc3NvclZlcnRleCIsInByZWRlY2Vzc29yVmVydGV4TmFtZSIsImdldFN1Y2Nlc3NvclZlcnRleGVzIiwic3VjY2Vzc29yVmVydGV4TmFtZXMiLCJPYmplY3QiLCJrZXlzIiwic3VjY2Vzc29yVmVydGV4ZXMiLCJtYXAiLCJnZXRQcmVkZWNlc3NvclZlcnRleGVzIiwicHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcyIsInByZWRlY2Vzc29yVmVydGV4ZXMiLCJnZXRTdWNjZXNzb3JWZXJ0ZXhOYW1lcyIsImdldFByZWRlY2Vzc29yVmVydGV4TmFtZXMiLCJnZXRPcmRlcmVkUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcyIsIm9yZGVyVmVydGV4ZXMiLCJvcmRlcmVkUHJlZGVjZXNzb3JWZXJ0ZXhlcyIsIm9yZGVyZWRQcmVkZWNlc3NvclZlcnRleE5hbWVzIiwidmVydGV4TmFtZXNGcm9tVmVydGV4ZXMiLCJnZXRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcyIsImltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzIiwiaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZSIsImdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMiLCJpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzIiwiaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lIiwiaXNFZGdlUHJlc2VudEJ5U291cmNlVmVydGV4Iiwic291cmNlVmVydGV4Iiwic291cmNlVmVydGV4SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgiLCJpc1ZlcnRleEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4IiwiZWRnZVByZXNlbnQiLCJpc0VkZ2VQcmVzZW50QnlUYXJnZXRWZXJ0ZXgiLCJ0YXJnZXRWZXJ0ZXgiLCJ0YXJnZXRWZXJ0ZXhJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgiLCJpc1ZlcnRleEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCIsInZlcnRleCIsInZlcnRleEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCIsImluY2x1ZGVzIiwidmVydGV4SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgiLCJyZXRyaWV2ZUZvcndhcmRzQWZmZWN0ZWRWZXJ0ZXhlcyIsInZpc2l0ZWRWZXJ0ZXhlcyIsImZvcndhcmRzRGVwdGhGaXJzdFNlYXJjaCIsInZpc2l0ZWRWZXJ0ZXgiLCJ0ZXJtaW5hdGUiLCJmb3J3YXJkc0FmZmVjdGVkVmVydGV4ZXMiLCJyZXRyaWV2ZUJhY2t3YXJkc0FmZmVjdGVkVmVydGV4ZXMiLCJiYWNrd2FyZHNEZXB0aEZpcnN0U2VhcmNoIiwiYmFja3dhcmRzQWZmZWN0ZWRWZXJ0ZXhlcyIsInNldE5hbWUiLCJzZXRJbmRleCIsInNldFZpc2l0ZWQiLCJzZXRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcyIsInNldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMiLCJkZWNyZW1lbnRJbmRleCIsInJlbW92ZUluY29taW5nRWRnZXMiLCJmb3JFYWNoIiwicmVtb3ZlSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4IiwicmVtb3ZlT3V0Z29pbmdFZGdlcyIsImFkZEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCIsInB1c2giLCJhZGRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCIsImluZGV4T2YiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwicmVtb3ZlSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgiLCJjYWxsYmFjayIsInNvbWVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgiLCJzb21lIiwic29tZUltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4IiwicmVzZXRWaXNpdGVkIiwiZnJvbU5hbWVBbmRJbmRleCIsImRlcGVuZGVuY3lWZXJ0ZXgiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBS3FCQTs7O3NCQUhrQztzQkFDYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckQsSUFBQSxBQUFNQSx1QkFBTjthQUFNQSxPQUNQQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsT0FBTyxFQUFFQywwQkFBMEIsRUFBRUMsNEJBQTRCO2dDQUR2RUw7UUFFakIsSUFBSSxDQUFDQyxPQUFPQTtRQUNaLElBQUksQ0FBQ0MsUUFBUUE7UUFDYixJQUFJLENBQUNDLFVBQVVBO1FBQ2YsSUFBSSxDQUFDQyw2QkFBNkJBO1FBQ2xDLElBQUksQ0FBQ0MsK0JBQStCQTs7a0JBTm5CTDs7WUFTbkJNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0w7WUFDZDs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0w7WUFDZDs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0w7WUFDZDs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0w7WUFDZDs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0w7WUFDZDs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxtQ0FBbUMsSUFBSSxDQUFDUiwyQkFBMkJTLFFBQ25FQyxxQ0FBcUMsSUFBSSxDQUFDVCw2QkFBNkJRLFFBQ3ZFRSxXQUFZLEFBQUNILHFDQUFxQyxLQUFPRSx1Q0FBdUM7Z0JBRXRHLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7b0JBQXNCQyxxQkFBQUEsaUVBQXFCLENBQUM7Z0JB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