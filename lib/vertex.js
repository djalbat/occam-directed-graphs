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
var _necessary = require("necessary");
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
var last = _necessary.arrayUtilities.last, tail = _necessary.arrayUtilities.tail;
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
            key: "isVertexReachable",
            value: function isVertexReachable(vertex) {
                var forwardsVisitedVertices = this.retrieveForwardsVisitedVertexes(vertex), lastForwardsVisitedVertex = last(forwardsVisitedVertices), vertexReachable = vertex === lastForwardsVisitedVertex;
                return vertexReachable;
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
            key: "retrieveSuccessorVertexNames",
            value: function retrieveSuccessorVertexNames() {
                var forwardsVisitedVertexes = this.retrieveForwardsVisitedVertexes(), forwardsVisitedVertexesTail = tail(forwardsVisitedVertexes), successorVertexes = forwardsVisitedVertexesTail, successorVertexNames = (0, _vertex.vertexNamesFromVertexes)(successorVertexes);
                return successorVertexNames;
            }
        },
        {
            key: "retrievePredecessorVertexNames",
            value: function retrievePredecessorVertexNames() {
                var backwardsVisitedVertexes = this.retrieveBackwardsVisitedVertexes(), backwardsVisitedVertexesTail = tail(backwardsVisitedVertexes), predecessorVertexes = backwardsVisitedVertexesTail, predecessorVertexNames = (0, _vertex.vertexNamesFromVertexes)(predecessorVertexes);
                return predecessorVertexNames;
            }
        },
        {
            key: "retrieveForwardsVisitedVertexes",
            value: function retrieveForwardsVisitedVertexes() {
                var vertex = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
                var vertexA = vertex, visitedVertexes = this.forwardsDepthFirstSearch(function(vertex) {
                    var vertexB = vertex, terminate = vertexA === vertexB;
                    if (terminate) {
                        return true;
                    }
                }), forwardsVisitedVertexes = visitedVertexes; ///
                return forwardsVisitedVertexes;
            }
        },
        {
            key: "retrieveBackwardsVisitedVertexes",
            value: function retrieveBackwardsVisitedVertexes() {
                var vertex = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
                var vertexA = vertex, visitedVertexes = this.backwardsDepthFirstSearch(function(vertex) {
                    var vertexB = vertex, terminate = vertexA === vertexB;
                    if (terminate) {
                        return true;
                    }
                }), backwardsVisitedVertexes = visitedVertexes; ///
                return backwardsVisitedVertexes;
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
            key: "getImmediateSuccessorVertexNames",
            value: function getImmediateSuccessorVertexNames() {
                var immediateSuccessorVertexNames = (0, _vertex.vertexNamesFromVertexes)(this.immediateSuccessorVertexes);
                return immediateSuccessorVertexNames;
            }
        },
        {
            key: "getImmediatePredecessorVertexNames",
            value: function getImmediatePredecessorVertexNames() {
                var immediatePredecessorVertexNames = (0, _vertex.vertexNamesFromVertexes)(this.immediatePredecessorVertexes);
                return immediatePredecessorVertexNames;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92ZXJ0ZXguanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhlcyB9IGZyb20gXCIuL3V0aWxpdGllcy92ZXJ0ZXhcIjtcbmltcG9ydCB7IGZvcndhcmRzRGVwdGhGaXJzdFNlYXJjaCwgYmFja3dhcmRzRGVwdGhGaXJzdFNlYXJjaCB9IGZyb20gXCIuL3V0aWxpdGllcy9zZWFyY2hcIjtcblxuY29uc3QgeyBsYXN0LCB0YWlsIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVydGV4IHtcbiAgY29uc3RydWN0b3IobmFtZSwgaW5kZXgsIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzLCBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcyA9IGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzO1xuICAgIHRoaXMuaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcyA9IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXM7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbmRleDtcbiAgfVxuXG4gIGdldEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzKCkge1xuICAgIHJldHVybiB0aGlzLmltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzO1xuICB9XG5cbiAgZ2V0SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzO1xuICB9XG5cbiAgaXNTdHJhbmRlZCgpIHtcbiAgICBjb25zdCBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlc0xlbmd0aCA9IHRoaXMuaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMubGVuZ3RoLFxuICAgICAgICAgIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXNMZW5ndGggPSB0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMubGVuZ3RoLFxuICAgICAgICAgIHN0cmFuZGVkID0gKChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlc0xlbmd0aCA9PT0gMCkgJiYgKGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXNMZW5ndGggPT09IDApKTtcblxuICAgIHJldHVybiBzdHJhbmRlZDtcbiAgfVxuXG4gIGlzVmVydGV4UmVhY2hhYmxlKHZlcnRleCkge1xuICAgIGNvbnN0IGZvcndhcmRzVmlzaXRlZFZlcnRpY2VzID0gdGhpcy5yZXRyaWV2ZUZvcndhcmRzVmlzaXRlZFZlcnRleGVzKHZlcnRleCksXG4gICAgICAgICAgbGFzdEZvcndhcmRzVmlzaXRlZFZlcnRleCA9IGxhc3QoZm9yd2FyZHNWaXNpdGVkVmVydGljZXMpLFxuICAgICAgICAgIHZlcnRleFJlYWNoYWJsZSA9ICh2ZXJ0ZXggPT09IGxhc3RGb3J3YXJkc1Zpc2l0ZWRWZXJ0ZXgpO1xuXG4gICAgcmV0dXJuIHZlcnRleFJlYWNoYWJsZTtcbiAgfVxuXG4gIGlzRWRnZVByZXNlbnRCeVNvdXJjZVZlcnRleChzb3VyY2VWZXJ0ZXgpIHtcbiAgICBjb25zdCBzb3VyY2VWZXJ0ZXhJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCA9IHRoaXMuaXNWZXJ0ZXhJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleChzb3VyY2VWZXJ0ZXgpLFxuICAgICAgICAgIGVkZ2VQcmVzZW50ID0gc291cmNlVmVydGV4SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXg7IC8vL1xuXG4gICAgcmV0dXJuIGVkZ2VQcmVzZW50O1xuICB9XG5cbiAgaXNFZGdlUHJlc2VudEJ5VGFyZ2V0VmVydGV4KHRhcmdldFZlcnRleCkge1xuICAgIGNvbnN0IHRhcmdldFZlcnRleEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCA9IHRoaXMuaXNWZXJ0ZXhJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgodGFyZ2V0VmVydGV4KSxcbiAgICAgICAgICBlZGdlUHJlc2VudCA9IHRhcmdldFZlcnRleEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleDsgLy8vXG5cbiAgICByZXR1cm4gZWRnZVByZXNlbnQ7XG4gIH1cblxuICByZXRyaWV2ZVN1Y2Nlc3NvclZlcnRleE5hbWVzKCkge1xuICAgIGNvbnN0IGZvcndhcmRzVmlzaXRlZFZlcnRleGVzID0gdGhpcy5yZXRyaWV2ZUZvcndhcmRzVmlzaXRlZFZlcnRleGVzKCksXG4gICAgICAgICAgZm9yd2FyZHNWaXNpdGVkVmVydGV4ZXNUYWlsID0gdGFpbChmb3J3YXJkc1Zpc2l0ZWRWZXJ0ZXhlcyksXG4gICAgICAgICAgc3VjY2Vzc29yVmVydGV4ZXMgPSBmb3J3YXJkc1Zpc2l0ZWRWZXJ0ZXhlc1RhaWwsXG4gICAgICAgICAgc3VjY2Vzc29yVmVydGV4TmFtZXMgPSB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhlcyhzdWNjZXNzb3JWZXJ0ZXhlcyk7XG5cbiAgICByZXR1cm4gc3VjY2Vzc29yVmVydGV4TmFtZXM7XG4gIH1cblxuICByZXRyaWV2ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMoKSB7XG4gICAgY29uc3QgYmFja3dhcmRzVmlzaXRlZFZlcnRleGVzID0gdGhpcy5yZXRyaWV2ZUJhY2t3YXJkc1Zpc2l0ZWRWZXJ0ZXhlcygpLFxuICAgICAgICAgIGJhY2t3YXJkc1Zpc2l0ZWRWZXJ0ZXhlc1RhaWwgPSB0YWlsKGJhY2t3YXJkc1Zpc2l0ZWRWZXJ0ZXhlcyksXG4gICAgICAgICAgcHJlZGVjZXNzb3JWZXJ0ZXhlcyA9IGJhY2t3YXJkc1Zpc2l0ZWRWZXJ0ZXhlc1RhaWwsXG4gICAgICAgICAgcHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcyA9IHZlcnRleE5hbWVzRnJvbVZlcnRleGVzKHByZWRlY2Vzc29yVmVydGV4ZXMpO1xuXG4gICAgcmV0dXJuIHByZWRlY2Vzc29yVmVydGV4TmFtZXM7XG4gIH1cblxuICByZXRyaWV2ZUZvcndhcmRzVmlzaXRlZFZlcnRleGVzKHZlcnRleCA9IG51bGwpIHtcbiAgICBjb25zdCB2ZXJ0ZXhBID0gdmVydGV4LCAvLy9cbiAgICAgICAgICB2aXNpdGVkVmVydGV4ZXMgPSB0aGlzLmZvcndhcmRzRGVwdGhGaXJzdFNlYXJjaCgodmVydGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2ZXJ0ZXhCID0gdmVydGV4LCAvLy9cbiAgICAgICAgICAgICAgICAgIHRlcm1pbmF0ZSA9ICh2ZXJ0ZXhBID09PSB2ZXJ0ZXhCKTtcblxuICAgICAgICAgICAgaWYgKHRlcm1pbmF0ZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBmb3J3YXJkc1Zpc2l0ZWRWZXJ0ZXhlcyA9IHZpc2l0ZWRWZXJ0ZXhlczsgIC8vL1xuXG4gICAgcmV0dXJuIGZvcndhcmRzVmlzaXRlZFZlcnRleGVzO1xuICB9XG5cbiAgcmV0cmlldmVCYWNrd2FyZHNWaXNpdGVkVmVydGV4ZXModmVydGV4ID0gbnVsbCkge1xuICAgIGNvbnN0IHZlcnRleEEgPSB2ZXJ0ZXgsIC8vL1xuICAgICAgICAgIHZpc2l0ZWRWZXJ0ZXhlcyA9IHRoaXMuYmFja3dhcmRzRGVwdGhGaXJzdFNlYXJjaCgodmVydGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2ZXJ0ZXhCID0gdmVydGV4LCAvLy9cbiAgICAgICAgICAgICAgICAgIHRlcm1pbmF0ZSA9ICh2ZXJ0ZXhBID09PSB2ZXJ0ZXhCKTtcblxuICAgICAgICAgICAgaWYgKHRlcm1pbmF0ZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBiYWNrd2FyZHNWaXNpdGVkVmVydGV4ZXMgPSB2aXNpdGVkVmVydGV4ZXM7ICAvLy9cblxuICAgIHJldHVybiBiYWNrd2FyZHNWaXNpdGVkVmVydGV4ZXM7XG4gIH1cblxuICBpc1ZlcnRleEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCh2ZXJ0ZXgpIHtcbiAgICBjb25zdCB2ZXJ0ZXhJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXggPSB0aGlzLmltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzLmluY2x1ZGVzKHZlcnRleCk7XG5cbiAgICByZXR1cm4gdmVydGV4SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4O1xuICB9XG5cbiAgaXNWZXJ0ZXhJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCh2ZXJ0ZXgpIHtcbiAgICBjb25zdCB2ZXJ0ZXhJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCA9IHRoaXMuaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcy5pbmNsdWRlcyh2ZXJ0ZXgpO1xuXG4gICAgcmV0dXJuIHZlcnRleEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4O1xuICB9XG5cbiAgZ2V0SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXMoKSB7XG4gICAgY29uc3QgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXMgPSB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhlcyh0aGlzLmltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzKTtcblxuICAgIHJldHVybiBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMoKSB7XG4gICAgY29uc3QgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcyA9IHZlcnRleE5hbWVzRnJvbVZlcnRleGVzKHRoaXMuaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcyk7XG5cbiAgICByZXR1cm4gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBzZXRJbmRleChpbmRleCkge1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgfVxuXG4gIHNldEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzKGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzKSB7XG4gICAgdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcyA9IGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzO1xuICB9XG5cbiAgc2V0SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcyhpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzKSB7XG4gICAgdGhpcy5pbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzID0gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcztcbiAgfVxuXG4gIGRlY3JlbWVudEluZGV4KCkge1xuICAgIHRoaXMuaW5kZXgtLTtcbiAgfVxuXG4gIGFkZEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgpIHtcbiAgICB0aGlzLmltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzLnB1c2goaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KTtcbiAgfVxuXG4gIGFkZEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KSB7XG4gICAgdGhpcy5pbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzLnB1c2goaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpO1xuICB9XG5cbiAgcmVtb3ZlSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcy5pbmRleE9mKGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCksXG4gICAgICAgICAgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIHRoaXMuaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gIH1cblxuICByZW1vdmVJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzLmluZGV4T2YoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpLFxuICAgICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICB0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gIH1cblxuICBmb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2goY2FsbGJhY2spIHtcbiAgICBjb25zdCB2ZXJ0ZXggPSB0aGlzLCAgLy8vXG4gICAgICAgICAgdmlzaXRlZFZlcnRleGVzID0gW107XG5cbiAgICBmb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2godmVydGV4LCBjYWxsYmFjaywgdmlzaXRlZFZlcnRleGVzKTtcblxuICAgIHJldHVybiB2aXNpdGVkVmVydGV4ZXM7XG4gIH1cblxuICBiYWNrd2FyZHNEZXB0aEZpcnN0U2VhcmNoKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgdmVydGV4ID0gdGhpcywgIC8vL1xuICAgICAgICAgIHZpc2l0ZWRWZXJ0ZXhlcyA9IFtdO1xuXG4gICAgYmFja3dhcmRzRGVwdGhGaXJzdFNlYXJjaCh2ZXJ0ZXgsIGNhbGxiYWNrLCB2aXNpdGVkVmVydGV4ZXMpO1xuXG4gICAgcmV0dXJuIHZpc2l0ZWRWZXJ0ZXhlcztcbiAgfVxuXG4gIHNvbWVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcy5zb21lKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHNvbWVJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleChjYWxsYmFjaykge1xuICAgIHJldHVybiB0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMuc29tZShjYWxsYmFjayk7XG4gIH1cblxuICBmb3JFYWNoSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KGNhbGxiYWNrKSB7XG4gICAgdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcy5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGZvckVhY2hJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleChjYWxsYmFjaykge1xuICAgIHRoaXMuaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcy5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmFtZUFuZEluZGV4KG5hbWUsIGluZGV4KSB7XG4gICAgY29uc3QgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMgPSBbXSxcbiAgICAgICAgICBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzID0gW10sXG4gICAgICAgICAgZGVwZW5kZW5jeVZlcnRleCA9IG5ldyBWZXJ0ZXgobmFtZSwgaW5kZXgsIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzLCBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzKTtcblxuICAgIHJldHVybiBkZXBlbmRlbmN5VmVydGV4O1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlZlcnRleCIsImxhc3QiLCJhcnJheVV0aWxpdGllcyIsInRhaWwiLCJuYW1lIiwiaW5kZXgiLCJpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcyIsImltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMiLCJnZXROYW1lIiwiZ2V0SW5kZXgiLCJnZXRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcyIsImdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMiLCJpc1N0cmFuZGVkIiwiaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXNMZW5ndGgiLCJsZW5ndGgiLCJpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzTGVuZ3RoIiwic3RyYW5kZWQiLCJpc1ZlcnRleFJlYWNoYWJsZSIsInZlcnRleCIsImZvcndhcmRzVmlzaXRlZFZlcnRpY2VzIiwicmV0cmlldmVGb3J3YXJkc1Zpc2l0ZWRWZXJ0ZXhlcyIsImxhc3RGb3J3YXJkc1Zpc2l0ZWRWZXJ0ZXgiLCJ2ZXJ0ZXhSZWFjaGFibGUiLCJpc0VkZ2VQcmVzZW50QnlTb3VyY2VWZXJ0ZXgiLCJzb3VyY2VWZXJ0ZXgiLCJzb3VyY2VWZXJ0ZXhJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCIsImlzVmVydGV4SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgiLCJlZGdlUHJlc2VudCIsImlzRWRnZVByZXNlbnRCeVRhcmdldFZlcnRleCIsInRhcmdldFZlcnRleCIsInRhcmdldFZlcnRleEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCIsImlzVmVydGV4SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4IiwicmV0cmlldmVTdWNjZXNzb3JWZXJ0ZXhOYW1lcyIsImZvcndhcmRzVmlzaXRlZFZlcnRleGVzIiwiZm9yd2FyZHNWaXNpdGVkVmVydGV4ZXNUYWlsIiwic3VjY2Vzc29yVmVydGV4ZXMiLCJzdWNjZXNzb3JWZXJ0ZXhOYW1lcyIsInZlcnRleE5hbWVzRnJvbVZlcnRleGVzIiwicmV0cmlldmVQcmVkZWNlc3NvclZlcnRleE5hbWVzIiwiYmFja3dhcmRzVmlzaXRlZFZlcnRleGVzIiwicmV0cmlldmVCYWNrd2FyZHNWaXNpdGVkVmVydGV4ZXMiLCJiYWNrd2FyZHNWaXNpdGVkVmVydGV4ZXNUYWlsIiwicHJlZGVjZXNzb3JWZXJ0ZXhlcyIsInByZWRlY2Vzc29yVmVydGV4TmFtZXMiLCJ2ZXJ0ZXhBIiwidmlzaXRlZFZlcnRleGVzIiwiZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoIiwidmVydGV4QiIsInRlcm1pbmF0ZSIsImJhY2t3YXJkc0RlcHRoRmlyc3RTZWFyY2giLCJ2ZXJ0ZXhJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgiLCJpbmNsdWRlcyIsInZlcnRleEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4IiwiZ2V0SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXMiLCJpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcyIsImdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMiLCJpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzIiwic2V0TmFtZSIsInNldEluZGV4Iiwic2V0SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMiLCJzZXRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzIiwiZGVjcmVtZW50SW5kZXgiLCJhZGRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgiLCJpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgiLCJwdXNoIiwiYWRkSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgiLCJpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCIsInJlbW92ZUltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCIsImluZGV4T2YiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwicmVtb3ZlSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgiLCJjYWxsYmFjayIsInNvbWVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgiLCJzb21lIiwic29tZUltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4IiwiZm9yRWFjaEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCIsImZvckVhY2giLCJmb3JFYWNoSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgiLCJmcm9tTmFtZUFuZEluZGV4IiwiZGVwZW5kZW5jeVZlcnRleCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7eUJBUFU7c0JBRVM7c0JBQzRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwRSxJQUFRQyxPQUFlQywwQkFBZkQsTUFBTUUsT0FBU0QsMEJBQVRDO0FBRUMsSUFB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