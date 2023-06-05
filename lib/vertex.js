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
    function Vertex(name, index, immediateSuccessorVertexes, immediatePredecessorVertexes) {
        _class_call_check(this, Vertex);
        this.name = name;
        this.index = index;
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
                var visitedVertexes = this.forwardsDepthFirstSearch(function(vertex) {
                    var terminate = vertex === sourceVertex;
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
                var visitedVertexes = this.backwardsDepthFirstSearch(function(vertex) {
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
                var vertex = this, visitedVertexes = [];
                (0, _search.forwardsDepthFirstSearch)(vertex, callback, visitedVertexes);
                return visitedVertexes;
            }
        },
        {
            key: "backwardsDepthFirstSearch",
            value: function backwardsDepthFirstSearch(callback) {
                var vertex = this, visitedVertexes = [];
                (0, _search.backwardsDepthFirstSearch)(vertex, callback, visitedVertexes);
                return visitedVertexes;
            }
        },
        {
            key: "someImmediateSuccessorVertex",
            value: function someImmediateSuccessorVertex(callback) {
                return this.immediateSuccessorVertexes.some(callback);
            }
        },
        {
            key: "someImmediatePredecessorVertex",
            value: function someImmediatePredecessorVertex(callback) {
                return this.immediatePredecessorVertexes.some(callback);
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
        }
    ], [
        {
            key: "fromNameAndIndex",
            value: function fromNameAndIndex(name, index) {
                var immediateSuccessorVertexes = [], immediatePredecessorVertexes = [], dependencyVertex = new Vertex(name, index, immediateSuccessorVertexes, immediatePredecessorVertexes);
                return dependencyVertex;
            }
        }
    ]);
    return Vertex;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92ZXJ0ZXguanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG9yZGVyVmVydGV4ZXMsIHZlcnRleE5hbWVzRnJvbVZlcnRleGVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3ZlcnRleFwiO1xuaW1wb3J0IHsgZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoLCBiYWNrd2FyZHNEZXB0aEZpcnN0U2VhcmNoIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3NlYXJjaFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZXJ0ZXgge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBpbmRleCwgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMsIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICB0aGlzLmltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzID0gaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXM7XG4gICAgdGhpcy5pbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzID0gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcztcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldEluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLmluZGV4O1xuICB9XG5cbiAgZ2V0SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXM7XG4gIH1cblxuICBnZXRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzKCkge1xuICAgIHJldHVybiB0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXM7XG4gIH1cblxuICBpc1N0cmFuZGVkKCkge1xuICAgIGNvbnN0IGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzTGVuZ3RoID0gdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcy5sZW5ndGgsXG4gICAgICAgICAgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlc0xlbmd0aCA9IHRoaXMuaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcy5sZW5ndGgsXG4gICAgICAgICAgc3RyYW5kZWQgPSAoKGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzTGVuZ3RoID09PSAwKSAmJiAoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlc0xlbmd0aCA9PT0gMCkpO1xuXG4gICAgcmV0dXJuIHN0cmFuZGVkO1xuICB9XG5cbiAgZ2V0U3VjY2Vzc29yVmVydGV4TWFwKHN1Y2Nlc3NvclZlcnRleE1hcCA9IHt9KSB7XG4gICAgdGhpcy5mb3JFYWNoSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgpID0+IHtcbiAgICAgIGNvbnN0IHN1Y2Nlc3NvclZlcnRleCA9IGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCwgLy8vXG4gICAgICAgICAgICBzdWNjZXNzb3JWZXJ0ZXhOYW1lID0gc3VjY2Vzc29yVmVydGV4LmdldE5hbWUoKTtcblxuICAgICAgc3VjY2Vzc29yVmVydGV4TWFwW3N1Y2Nlc3NvclZlcnRleE5hbWVdID0gc3VjY2Vzc29yVmVydGV4O1xuXG4gICAgICBzdWNjZXNzb3JWZXJ0ZXguZ2V0U3VjY2Vzc29yVmVydGV4TWFwKHN1Y2Nlc3NvclZlcnRleE1hcCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3VjY2Vzc29yVmVydGV4TWFwO1xuICB9XG5cbiAgZ2V0UHJlZGVjZXNzb3JWZXJ0ZXhNYXAocHJlZGVjZXNzb3JWZXJ0ZXhNYXAgPSB7fSkge1xuICAgIHRoaXMuZm9yRWFjaEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCkgPT4ge1xuICAgICAgY29uc3QgcHJlZGVjZXNzb3JWZXJ0ZXggPSBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCwgLy8vXG4gICAgICAgICAgICBwcmVkZWNlc3NvclZlcnRleE5hbWUgPSBwcmVkZWNlc3NvclZlcnRleC5nZXROYW1lKCk7XG5cbiAgICAgIHByZWRlY2Vzc29yVmVydGV4TWFwW3ByZWRlY2Vzc29yVmVydGV4TmFtZV0gPSBwcmVkZWNlc3NvclZlcnRleDtcblxuICAgICAgcHJlZGVjZXNzb3JWZXJ0ZXguZ2V0UHJlZGVjZXNzb3JWZXJ0ZXhNYXAocHJlZGVjZXNzb3JWZXJ0ZXhNYXApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByZWRlY2Vzc29yVmVydGV4TWFwO1xuICB9XG5cbiAgZ2V0U3VjY2Vzc29yVmVydGV4ZXMoKSB7XG4gICAgY29uc3Qgc3VjY2Vzc29yVmVydGV4TWFwID0gdGhpcy5nZXRTdWNjZXNzb3JWZXJ0ZXhNYXAoKSxcbiAgICAgICAgICBzdWNjZXNzb3JWZXJ0ZXhOYW1lcyA9IE9iamVjdC5rZXlzKHN1Y2Nlc3NvclZlcnRleE1hcCksXG4gICAgICAgICAgc3VjY2Vzc29yVmVydGV4ZXMgPSBzdWNjZXNzb3JWZXJ0ZXhOYW1lcy5tYXAoKHN1Y2Nlc3NvclZlcnRleE5hbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1Y2Nlc3NvclZlcnRleCA9IHN1Y2Nlc3NvclZlcnRleE1hcFtzdWNjZXNzb3JWZXJ0ZXhOYW1lXTtcblxuICAgICAgICAgICAgcmV0dXJuIHN1Y2Nlc3NvclZlcnRleDtcbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBzdWNjZXNzb3JWZXJ0ZXhlcztcbiAgfVxuXG4gIGdldFByZWRlY2Vzc29yVmVydGV4ZXMoKSB7XG4gICAgY29uc3QgcHJlZGVjZXNzb3JWZXJ0ZXhNYXAgPSB0aGlzLmdldFByZWRlY2Vzc29yVmVydGV4TWFwKCksXG4gICAgICAgICAgcHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcyA9IE9iamVjdC5rZXlzKHByZWRlY2Vzc29yVmVydGV4TWFwKSxcbiAgICAgICAgICBwcmVkZWNlc3NvclZlcnRleGVzID0gcHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcy5tYXAoKHByZWRlY2Vzc29yVmVydGV4TmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJlZGVjZXNzb3JWZXJ0ZXggPSBwcmVkZWNlc3NvclZlcnRleE1hcFtwcmVkZWNlc3NvclZlcnRleE5hbWVdO1xuXG4gICAgICAgICAgICByZXR1cm4gcHJlZGVjZXNzb3JWZXJ0ZXg7XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gcHJlZGVjZXNzb3JWZXJ0ZXhlcztcbiAgfVxuXG4gIGdldFN1Y2Nlc3NvclZlcnRleE5hbWVzKCkge1xuICAgIGNvbnN0IHN1Y2Nlc3NvclZlcnRleGVzID0gdGhpcy5nZXRTdWNjZXNzb3JWZXJ0ZXhlcygpLFxuICAgICAgICAgIHN1Y2Nlc3NvclZlcnRleE5hbWVzID0gc3VjY2Vzc29yVmVydGV4ZXMubWFwKChzdWNjZXNzb3JWZXJ0ZXgpID0+IHtcbiAgICAgICAgY29uc3Qgc3VjY2Vzc29yVmVydGV4TmFtZSA9IHN1Y2Nlc3NvclZlcnRleC5nZXROYW1lKCk7XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3NvclZlcnRleE5hbWU7XG4gICAgICB9KTtcblxuICAgIHJldHVybiBzdWNjZXNzb3JWZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGdldFByZWRlY2Vzc29yVmVydGV4TmFtZXMoKSB7XG4gICAgY29uc3QgcHJlZGVjZXNzb3JWZXJ0ZXhlcyA9IHRoaXMuZ2V0UHJlZGVjZXNzb3JWZXJ0ZXhlcygpLFxuICAgICAgICAgIHByZWRlY2Vzc29yVmVydGV4TmFtZXMgPSBwcmVkZWNlc3NvclZlcnRleGVzLm1hcCgocHJlZGVjZXNzb3JWZXJ0ZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByZWRlY2Vzc29yVmVydGV4TmFtZSA9IHByZWRlY2Vzc29yVmVydGV4LmdldE5hbWUoKTtcblxuICAgICAgICAgICAgcmV0dXJuIHByZWRlY2Vzc29yVmVydGV4TmFtZTtcbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBwcmVkZWNlc3NvclZlcnRleE5hbWVzO1xuICB9XG5cbiAgZ2V0T3JkZXJlZFByZWRlY2Vzc29yVmVydGV4TmFtZXMoKSB7XG4gICAgY29uc3QgcHJlZGVjZXNzb3JWZXJ0ZXhlcyA9IHRoaXMuZ2V0UHJlZGVjZXNzb3JWZXJ0ZXhlcygpO1xuXG4gICAgb3JkZXJWZXJ0ZXhlcyhwcmVkZWNlc3NvclZlcnRleGVzKTtcblxuICAgIGNvbnN0IG9yZGVyZWRQcmVkZWNlc3NvclZlcnRleGVzID0gcHJlZGVjZXNzb3JWZXJ0ZXhlcywgIC8vL1xuICAgICAgICAgIG9yZGVyZWRQcmVkZWNlc3NvclZlcnRleE5hbWVzID0gdmVydGV4TmFtZXNGcm9tVmVydGV4ZXMob3JkZXJlZFByZWRlY2Vzc29yVmVydGV4ZXMpO1xuXG4gICAgcmV0dXJuIG9yZGVyZWRQcmVkZWNlc3NvclZlcnRleE5hbWVzO1xuICB9XG5cbiAgZ2V0SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXMoKSB7XG4gICAgY29uc3QgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXMgPSB0aGlzLmltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzLm1hcCgoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KSA9PiB7XG4gICAgICBjb25zdCBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lID0gaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4LmdldE5hbWUoKTtcblxuICAgICAgcmV0dXJuIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXM7XG4gIH1cblxuICBnZXRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzKCkge1xuICAgIGNvbnN0IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMgPSB0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMubWFwKChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCkgPT4ge1xuICAgICAgY29uc3QgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lID0gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXguZ2V0TmFtZSgpO1xuXG4gICAgICByZXR1cm4gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXM7XG4gIH1cblxuICBpc0VkZ2VQcmVzZW50QnlTb3VyY2VWZXJ0ZXgoc291cmNlVmVydGV4KSB7XG4gICAgY29uc3Qgc291cmNlVmVydGV4SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXggPSB0aGlzLmlzVmVydGV4SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgoc291cmNlVmVydGV4KSxcbiAgICAgICAgICBlZGdlUHJlc2VudCA9IHNvdXJjZVZlcnRleEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4OyAvLy9cblxuICAgIHJldHVybiBlZGdlUHJlc2VudDtcbiAgfVxuXG4gIGlzRWRnZVByZXNlbnRCeVRhcmdldFZlcnRleCh0YXJnZXRWZXJ0ZXgpIHtcbiAgICBjb25zdCB0YXJnZXRWZXJ0ZXhJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXggPSB0aGlzLmlzVmVydGV4SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KHRhcmdldFZlcnRleCksXG4gICAgICAgICAgZWRnZVByZXNlbnQgPSB0YXJnZXRWZXJ0ZXhJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXg7IC8vL1xuXG4gICAgcmV0dXJuIGVkZ2VQcmVzZW50O1xuICB9XG5cbiAgaXNWZXJ0ZXhJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgodmVydGV4KSB7XG4gICAgY29uc3QgdmVydGV4SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ID0gdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcy5pbmNsdWRlcyh2ZXJ0ZXgpO1xuXG4gICAgcmV0dXJuIHZlcnRleEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleDtcbiAgfVxuXG4gIGlzVmVydGV4SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgodmVydGV4KSB7XG4gICAgY29uc3QgdmVydGV4SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXggPSB0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMuaW5jbHVkZXModmVydGV4KTtcblxuICAgIHJldHVybiB2ZXJ0ZXhJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleDtcbiAgfVxuXG4gIHJldHJpZXZlRm9yd2FyZHNBZmZlY3RlZFZlcnRleGVzKHNvdXJjZVZlcnRleCkge1xuICAgIGNvbnN0IHZpc2l0ZWRWZXJ0ZXhlcyA9IHRoaXMuZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoKCh2ZXJ0ZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRlcm1pbmF0ZSA9ICh2ZXJ0ZXggPT09IHNvdXJjZVZlcnRleCk7XG5cbiAgICAgICAgICAgIGlmICh0ZXJtaW5hdGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZm9yd2FyZHNBZmZlY3RlZFZlcnRleGVzID0gdmlzaXRlZFZlcnRleGVzOyAvLy9cblxuICAgIHJldHVybiBmb3J3YXJkc0FmZmVjdGVkVmVydGV4ZXM7XG4gIH1cblxuICByZXRyaWV2ZUJhY2t3YXJkc0FmZmVjdGVkVmVydGV4ZXMoKSB7XG4gICAgY29uc3QgdmlzaXRlZFZlcnRleGVzID0gdGhpcy5iYWNrd2FyZHNEZXB0aEZpcnN0U2VhcmNoKCh2ZXJ0ZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRlcm1pbmF0ZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAodGVybWluYXRlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGJhY2t3YXJkc0FmZmVjdGVkVmVydGV4ZXMgPSB2aXNpdGVkVmVydGV4ZXM7ICAvLy9cblxuICAgIHJldHVybiBiYWNrd2FyZHNBZmZlY3RlZFZlcnRleGVzO1xuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIHNldEluZGV4KGluZGV4KSB7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICB9XG5cbiAgc2V0SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMpIHtcbiAgICB0aGlzLmltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzID0gaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXM7XG4gIH1cblxuICBzZXRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzKGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMpIHtcbiAgICB0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMgPSBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzO1xuICB9XG5cbiAgZGVjcmVtZW50SW5kZXgoKSB7XG4gICAgdGhpcy5pbmRleC0tO1xuICB9XG5cbiAgcmVtb3ZlSW5jb21pbmdFZGdlcygpIHtcbiAgICBjb25zdCBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXggPSB0aGlzOyAvLy9cblxuICAgIHRoaXMuaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcy5mb3JFYWNoKChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCkgPT4ge1xuICAgICAgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgucmVtb3ZlSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMgPSBbXTtcbiAgfVxuXG4gIHJlbW92ZU91dGdvaW5nRWRnZXMoKSB7XG4gICAgY29uc3QgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXggPSB0aGlzOyAvLy9cblxuICAgIHRoaXMuaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMuZm9yRWFjaCgoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KSA9PiB7XG4gICAgICBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgucmVtb3ZlSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KTtcbiAgICB9KTtcblxuICAgIHRoaXMuaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMgPSBbXTtcbiAgfVxuXG4gIGFkZEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgpIHtcbiAgICB0aGlzLmltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzLnB1c2goaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KTtcbiAgfVxuXG4gIGFkZEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KSB7XG4gICAgdGhpcy5pbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzLnB1c2goaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpO1xuICB9XG5cbiAgcmVtb3ZlSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcy5pbmRleE9mKGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCksXG4gICAgICAgICAgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIHRoaXMuaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gIH1cblxuICByZW1vdmVJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzLmluZGV4T2YoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpLFxuICAgICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICB0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gIH1cblxuICBmb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2goY2FsbGJhY2spIHtcbiAgICBjb25zdCB2ZXJ0ZXggPSB0aGlzLCAgLy8vXG4gICAgICAgICAgdmlzaXRlZFZlcnRleGVzID0gW107XG5cbiAgICBmb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2godmVydGV4LCBjYWxsYmFjaywgdmlzaXRlZFZlcnRleGVzKTtcblxuICAgIHJldHVybiB2aXNpdGVkVmVydGV4ZXM7XG4gIH1cblxuICBiYWNrd2FyZHNEZXB0aEZpcnN0U2VhcmNoKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgdmVydGV4ID0gdGhpcywgIC8vL1xuICAgICAgICAgIHZpc2l0ZWRWZXJ0ZXhlcyA9IFtdO1xuXG4gICAgYmFja3dhcmRzRGVwdGhGaXJzdFNlYXJjaCh2ZXJ0ZXgsIGNhbGxiYWNrLCB2aXNpdGVkVmVydGV4ZXMpO1xuXG4gICAgcmV0dXJuIHZpc2l0ZWRWZXJ0ZXhlcztcbiAgfVxuXG4gIHNvbWVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcy5zb21lKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHNvbWVJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleChjYWxsYmFjaykge1xuICAgIHJldHVybiB0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMuc29tZShjYWxsYmFjayk7XG4gIH1cblxuICBmb3JFYWNoSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KGNhbGxiYWNrKSB7XG4gICAgdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcy5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGZvckVhY2hJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleChjYWxsYmFjaykge1xuICAgIHRoaXMuaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcy5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmFtZUFuZEluZGV4KG5hbWUsIGluZGV4KSB7XG4gICAgY29uc3QgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMgPSBbXSxcbiAgICAgICAgICBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzID0gW10sXG4gICAgICAgICAgZGVwZW5kZW5jeVZlcnRleCA9IG5ldyBWZXJ0ZXgobmFtZSwgaW5kZXgsIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzLCBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzKTtcblxuICAgIHJldHVybiBkZXBlbmRlbmN5VmVydGV4O1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlZlcnRleCIsIm5hbWUiLCJpbmRleCIsImltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzIiwiaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcyIsImdldE5hbWUiLCJnZXRJbmRleCIsImdldEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzIiwiZ2V0SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcyIsImlzU3RyYW5kZWQiLCJpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlc0xlbmd0aCIsImxlbmd0aCIsImltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXNMZW5ndGgiLCJzdHJhbmRlZCIsImdldFN1Y2Nlc3NvclZlcnRleE1hcCIsInN1Y2Nlc3NvclZlcnRleE1hcCIsImZvckVhY2hJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgiLCJpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgiLCJzdWNjZXNzb3JWZXJ0ZXgiLCJzdWNjZXNzb3JWZXJ0ZXhOYW1lIiwiZ2V0UHJlZGVjZXNzb3JWZXJ0ZXhNYXAiLCJwcmVkZWNlc3NvclZlcnRleE1hcCIsImZvckVhY2hJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCIsImltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4IiwicHJlZGVjZXNzb3JWZXJ0ZXgiLCJwcmVkZWNlc3NvclZlcnRleE5hbWUiLCJnZXRTdWNjZXNzb3JWZXJ0ZXhlcyIsInN1Y2Nlc3NvclZlcnRleE5hbWVzIiwiT2JqZWN0Iiwia2V5cyIsInN1Y2Nlc3NvclZlcnRleGVzIiwibWFwIiwiZ2V0UHJlZGVjZXNzb3JWZXJ0ZXhlcyIsInByZWRlY2Vzc29yVmVydGV4TmFtZXMiLCJwcmVkZWNlc3NvclZlcnRleGVzIiwiZ2V0U3VjY2Vzc29yVmVydGV4TmFtZXMiLCJnZXRQcmVkZWNlc3NvclZlcnRleE5hbWVzIiwiZ2V0T3JkZXJlZFByZWRlY2Vzc29yVmVydGV4TmFtZXMiLCJvcmRlclZlcnRleGVzIiwib3JkZXJlZFByZWRlY2Vzc29yVmVydGV4ZXMiLCJvcmRlcmVkUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcyIsInZlcnRleE5hbWVzRnJvbVZlcnRleGVzIiwiZ2V0SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXMiLCJpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcyIsImltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWUiLCJnZXRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzIiwiaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcyIsImltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZSIsImlzRWRnZVByZXNlbnRCeVNvdXJjZVZlcnRleCIsInNvdXJjZVZlcnRleCIsInNvdXJjZVZlcnRleEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4IiwiaXNWZXJ0ZXhJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCIsImVkZ2VQcmVzZW50IiwiaXNFZGdlUHJlc2VudEJ5VGFyZ2V0VmVydGV4IiwidGFyZ2V0VmVydGV4IiwidGFyZ2V0VmVydGV4SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4IiwiaXNWZXJ0ZXhJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgiLCJ2ZXJ0ZXgiLCJ2ZXJ0ZXhJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgiLCJpbmNsdWRlcyIsInZlcnRleEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4IiwicmV0cmlldmVGb3J3YXJkc0FmZmVjdGVkVmVydGV4ZXMiLCJ2aXNpdGVkVmVydGV4ZXMiLCJmb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2giLCJ0ZXJtaW5hdGUiLCJmb3J3YXJkc0FmZmVjdGVkVmVydGV4ZXMiLCJyZXRyaWV2ZUJhY2t3YXJkc0FmZmVjdGVkVmVydGV4ZXMiLCJiYWNrd2FyZHNEZXB0aEZpcnN0U2VhcmNoIiwiYmFja3dhcmRzQWZmZWN0ZWRWZXJ0ZXhlcyIsInNldE5hbWUiLCJzZXRJbmRleCIsInNldEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzIiwic2V0SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcyIsImRlY3JlbWVudEluZGV4IiwicmVtb3ZlSW5jb21pbmdFZGdlcyIsImZvckVhY2giLCJyZW1vdmVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgiLCJyZW1vdmVPdXRnb2luZ0VkZ2VzIiwiYWRkSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4IiwicHVzaCIsImFkZEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4IiwiaW5kZXhPZiIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJyZW1vdmVJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCIsImNhbGxiYWNrIiwic29tZUltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCIsInNvbWUiLCJzb21lSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgiLCJmcm9tTmFtZUFuZEluZGV4IiwiZGVwZW5kZW5jeVZlcnRleCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFLcUJBOzs7c0JBSGtDO3NCQUNhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyRCxJQUFBLEFBQU1BLHVCQUFOO2FBQU1BLE9BQ1BDLElBQUksRUFBRUMsS0FBSyxFQUFFQywwQkFBMEIs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