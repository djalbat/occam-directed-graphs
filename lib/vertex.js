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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92ZXJ0ZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhlcyB9IGZyb20gXCIuL3V0aWxpdGllcy92ZXJ0ZXhcIjtcbmltcG9ydCB7IGZvcndhcmRzRGVwdGhGaXJzdFNlYXJjaCwgYmFja3dhcmRzRGVwdGhGaXJzdFNlYXJjaCB9IGZyb20gXCIuL3V0aWxpdGllcy9zZWFyY2hcIjtcblxuY29uc3QgeyBsYXN0LCB0YWlsIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVydGV4IHtcbiAgY29uc3RydWN0b3IobmFtZSwgaW5kZXgsIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzLCBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcyA9IGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzO1xuICAgIHRoaXMuaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcyA9IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXM7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbmRleDtcbiAgfVxuXG4gIGdldEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzKCkge1xuICAgIHJldHVybiB0aGlzLmltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzO1xuICB9XG5cbiAgZ2V0SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzO1xuICB9XG5cbiAgaXNTdHJhbmRlZCgpIHtcbiAgICBjb25zdCBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlc0xlbmd0aCA9IHRoaXMuaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMubGVuZ3RoLFxuICAgICAgICAgIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXNMZW5ndGggPSB0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMubGVuZ3RoLFxuICAgICAgICAgIHN0cmFuZGVkID0gKChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlc0xlbmd0aCA9PT0gMCkgJiYgKGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXNMZW5ndGggPT09IDApKTtcblxuICAgIHJldHVybiBzdHJhbmRlZDtcbiAgfVxuXG4gIGlzVmVydGV4UmVhY2hhYmxlKHZlcnRleCkge1xuICAgIGNvbnN0IGZvcndhcmRzVmlzaXRlZFZlcnRpY2VzID0gdGhpcy5yZXRyaWV2ZUZvcndhcmRzVmlzaXRlZFZlcnRleGVzKHZlcnRleCksXG4gICAgICAgICAgbGFzdEZvcndhcmRzVmlzaXRlZFZlcnRleCA9IGxhc3QoZm9yd2FyZHNWaXNpdGVkVmVydGljZXMpLFxuICAgICAgICAgIHZlcnRleFJlYWNoYWJsZSA9ICh2ZXJ0ZXggPT09IGxhc3RGb3J3YXJkc1Zpc2l0ZWRWZXJ0ZXgpO1xuXG4gICAgcmV0dXJuIHZlcnRleFJlYWNoYWJsZTtcbiAgfVxuXG4gIGlzRWRnZVByZXNlbnRCeVNvdXJjZVZlcnRleChzb3VyY2VWZXJ0ZXgpIHtcbiAgICBjb25zdCBzb3VyY2VWZXJ0ZXhJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCA9IHRoaXMuaXNWZXJ0ZXhJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleChzb3VyY2VWZXJ0ZXgpLFxuICAgICAgICAgIGVkZ2VQcmVzZW50ID0gc291cmNlVmVydGV4SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXg7IC8vL1xuXG4gICAgcmV0dXJuIGVkZ2VQcmVzZW50O1xuICB9XG5cbiAgaXNFZGdlUHJlc2VudEJ5VGFyZ2V0VmVydGV4KHRhcmdldFZlcnRleCkge1xuICAgIGNvbnN0IHRhcmdldFZlcnRleEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCA9IHRoaXMuaXNWZXJ0ZXhJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgodGFyZ2V0VmVydGV4KSxcbiAgICAgICAgICBlZGdlUHJlc2VudCA9IHRhcmdldFZlcnRleEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleDsgLy8vXG5cbiAgICByZXR1cm4gZWRnZVByZXNlbnQ7XG4gIH1cblxuICByZXRyaWV2ZVN1Y2Nlc3NvclZlcnRleE5hbWVzKCkge1xuICAgIGNvbnN0IGZvcndhcmRzVmlzaXRlZFZlcnRleGVzID0gdGhpcy5yZXRyaWV2ZUZvcndhcmRzVmlzaXRlZFZlcnRleGVzKCksXG4gICAgICAgICAgZm9yd2FyZHNWaXNpdGVkVmVydGV4ZXNUYWlsID0gdGFpbChmb3J3YXJkc1Zpc2l0ZWRWZXJ0ZXhlcyksXG4gICAgICAgICAgc3VjY2Vzc29yVmVydGV4ZXMgPSBmb3J3YXJkc1Zpc2l0ZWRWZXJ0ZXhlc1RhaWwsXG4gICAgICAgICAgc3VjY2Vzc29yVmVydGV4TmFtZXMgPSB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhlcyhzdWNjZXNzb3JWZXJ0ZXhlcyk7XG5cbiAgICByZXR1cm4gc3VjY2Vzc29yVmVydGV4TmFtZXM7XG4gIH1cblxuICByZXRyaWV2ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMoKSB7XG4gICAgY29uc3QgYmFja3dhcmRzVmlzaXRlZFZlcnRleGVzID0gdGhpcy5yZXRyaWV2ZUJhY2t3YXJkc1Zpc2l0ZWRWZXJ0ZXhlcygpLFxuICAgICAgICAgIGJhY2t3YXJkc1Zpc2l0ZWRWZXJ0ZXhlc1RhaWwgPSB0YWlsKGJhY2t3YXJkc1Zpc2l0ZWRWZXJ0ZXhlcyksXG4gICAgICAgICAgcHJlZGVjZXNzb3JWZXJ0ZXhlcyA9IGJhY2t3YXJkc1Zpc2l0ZWRWZXJ0ZXhlc1RhaWwsXG4gICAgICAgICAgcHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcyA9IHZlcnRleE5hbWVzRnJvbVZlcnRleGVzKHByZWRlY2Vzc29yVmVydGV4ZXMpO1xuXG4gICAgcmV0dXJuIHByZWRlY2Vzc29yVmVydGV4TmFtZXM7XG4gIH1cblxuICByZXRyaWV2ZUZvcndhcmRzVmlzaXRlZFZlcnRleGVzKHZlcnRleCA9IG51bGwpIHtcbiAgICBjb25zdCB2ZXJ0ZXhBID0gdmVydGV4LCAvLy9cbiAgICAgICAgICB2aXNpdGVkVmVydGV4ZXMgPSB0aGlzLmZvcndhcmRzRGVwdGhGaXJzdFNlYXJjaCgodmVydGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2ZXJ0ZXhCID0gdmVydGV4LCAvLy9cbiAgICAgICAgICAgICAgICAgIHRlcm1pbmF0ZSA9ICh2ZXJ0ZXhBID09PSB2ZXJ0ZXhCKTtcblxuICAgICAgICAgICAgaWYgKHRlcm1pbmF0ZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBmb3J3YXJkc1Zpc2l0ZWRWZXJ0ZXhlcyA9IHZpc2l0ZWRWZXJ0ZXhlczsgIC8vL1xuXG4gICAgcmV0dXJuIGZvcndhcmRzVmlzaXRlZFZlcnRleGVzO1xuICB9XG5cbiAgcmV0cmlldmVCYWNrd2FyZHNWaXNpdGVkVmVydGV4ZXModmVydGV4ID0gbnVsbCkge1xuICAgIGNvbnN0IHZlcnRleEEgPSB2ZXJ0ZXgsIC8vL1xuICAgICAgICAgIHZpc2l0ZWRWZXJ0ZXhlcyA9IHRoaXMuYmFja3dhcmRzRGVwdGhGaXJzdFNlYXJjaCgodmVydGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2ZXJ0ZXhCID0gdmVydGV4LCAvLy9cbiAgICAgICAgICAgICAgICAgIHRlcm1pbmF0ZSA9ICh2ZXJ0ZXhBID09PSB2ZXJ0ZXhCKTtcblxuICAgICAgICAgICAgaWYgKHRlcm1pbmF0ZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBiYWNrd2FyZHNWaXNpdGVkVmVydGV4ZXMgPSB2aXNpdGVkVmVydGV4ZXM7ICAvLy9cblxuICAgIHJldHVybiBiYWNrd2FyZHNWaXNpdGVkVmVydGV4ZXM7XG4gIH1cblxuICBpc1ZlcnRleEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCh2ZXJ0ZXgpIHtcbiAgICBjb25zdCB2ZXJ0ZXhJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXggPSB0aGlzLmltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzLmluY2x1ZGVzKHZlcnRleCk7XG5cbiAgICByZXR1cm4gdmVydGV4SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4O1xuICB9XG5cbiAgaXNWZXJ0ZXhJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCh2ZXJ0ZXgpIHtcbiAgICBjb25zdCB2ZXJ0ZXhJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCA9IHRoaXMuaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcy5pbmNsdWRlcyh2ZXJ0ZXgpO1xuXG4gICAgcmV0dXJuIHZlcnRleEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4O1xuICB9XG5cbiAgZ2V0SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXMoKSB7XG4gICAgY29uc3QgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXMgPSB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhlcyh0aGlzLmltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzKTtcblxuICAgIHJldHVybiBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMoKSB7XG4gICAgY29uc3QgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcyA9IHZlcnRleE5hbWVzRnJvbVZlcnRleGVzKHRoaXMuaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcyk7XG5cbiAgICByZXR1cm4gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBzZXRJbmRleChpbmRleCkge1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgfVxuXG4gIHNldEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzKGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzKSB7XG4gICAgdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcyA9IGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzO1xuICB9XG5cbiAgc2V0SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcyhpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzKSB7XG4gICAgdGhpcy5pbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzID0gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcztcbiAgfVxuXG4gIGRlY3JlbWVudEluZGV4KCkge1xuICAgIHRoaXMuaW5kZXgtLTtcbiAgfVxuXG4gIGFkZEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgpIHtcbiAgICB0aGlzLmltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzLnB1c2goaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KTtcbiAgfVxuXG4gIGFkZEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KSB7XG4gICAgdGhpcy5pbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzLnB1c2goaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpO1xuICB9XG5cbiAgcmVtb3ZlSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcy5pbmRleE9mKGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCksXG4gICAgICAgICAgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIHRoaXMuaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gIH1cblxuICByZW1vdmVJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzLmluZGV4T2YoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpLFxuICAgICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICB0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gIH1cblxuICBmb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2goY2FsbGJhY2spIHtcbiAgICBjb25zdCB2ZXJ0ZXggPSB0aGlzLCAgLy8vXG4gICAgICAgICAgdmlzaXRlZFZlcnRleGVzID0gW107XG5cbiAgICBmb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2godmVydGV4LCBjYWxsYmFjaywgdmlzaXRlZFZlcnRleGVzKTtcblxuICAgIHJldHVybiB2aXNpdGVkVmVydGV4ZXM7XG4gIH1cblxuICBiYWNrd2FyZHNEZXB0aEZpcnN0U2VhcmNoKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgdmVydGV4ID0gdGhpcywgIC8vL1xuICAgICAgICAgIHZpc2l0ZWRWZXJ0ZXhlcyA9IFtdO1xuXG4gICAgYmFja3dhcmRzRGVwdGhGaXJzdFNlYXJjaCh2ZXJ0ZXgsIGNhbGxiYWNrLCB2aXNpdGVkVmVydGV4ZXMpO1xuXG4gICAgcmV0dXJuIHZpc2l0ZWRWZXJ0ZXhlcztcbiAgfVxuXG4gIHNvbWVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcy5zb21lKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHNvbWVJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleChjYWxsYmFjaykge1xuICAgIHJldHVybiB0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMuc29tZShjYWxsYmFjayk7XG4gIH1cblxuICBmb3JFYWNoSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KGNhbGxiYWNrKSB7XG4gICAgdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcy5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGZvckVhY2hJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleChjYWxsYmFjaykge1xuICAgIHRoaXMuaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcy5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmFtZUFuZEluZGV4KG5hbWUsIGluZGV4KSB7XG4gICAgY29uc3QgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMgPSBbXSxcbiAgICAgICAgICBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzID0gW10sXG4gICAgICAgICAgZGVwZW5kZW5jeVZlcnRleCA9IG5ldyBWZXJ0ZXgobmFtZSwgaW5kZXgsIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzLCBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzKTtcblxuICAgIHJldHVybiBkZXBlbmRlbmN5VmVydGV4O1xuICB9XG59XG4iXSwibmFtZXMiOlsiVmVydGV4IiwibGFzdCIsImFycmF5VXRpbGl0aWVzIiwidGFpbCIsIm5hbWUiLCJpbmRleCIsImltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzIiwiaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcyIsImdldE5hbWUiLCJnZXRJbmRleCIsImdldEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzIiwiZ2V0SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcyIsImlzU3RyYW5kZWQiLCJpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlc0xlbmd0aCIsImxlbmd0aCIsImltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXNMZW5ndGgiLCJzdHJhbmRlZCIsImlzVmVydGV4UmVhY2hhYmxlIiwidmVydGV4IiwiZm9yd2FyZHNWaXNpdGVkVmVydGljZXMiLCJyZXRyaWV2ZUZvcndhcmRzVmlzaXRlZFZlcnRleGVzIiwibGFzdEZvcndhcmRzVmlzaXRlZFZlcnRleCIsInZlcnRleFJlYWNoYWJsZSIsImlzRWRnZVByZXNlbnRCeVNvdXJjZVZlcnRleCIsInNvdXJjZVZlcnRleCIsInNvdXJjZVZlcnRleEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4IiwiaXNWZXJ0ZXhJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCIsImVkZ2VQcmVzZW50IiwiaXNFZGdlUHJlc2VudEJ5VGFyZ2V0VmVydGV4IiwidGFyZ2V0VmVydGV4IiwidGFyZ2V0VmVydGV4SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4IiwiaXNWZXJ0ZXhJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgiLCJyZXRyaWV2ZVN1Y2Nlc3NvclZlcnRleE5hbWVzIiwiZm9yd2FyZHNWaXNpdGVkVmVydGV4ZXMiLCJmb3J3YXJkc1Zpc2l0ZWRWZXJ0ZXhlc1RhaWwiLCJzdWNjZXNzb3JWZXJ0ZXhlcyIsInN1Y2Nlc3NvclZlcnRleE5hbWVzIiwidmVydGV4TmFtZXNGcm9tVmVydGV4ZXMiLCJyZXRyaWV2ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMiLCJiYWNrd2FyZHNWaXNpdGVkVmVydGV4ZXMiLCJyZXRyaWV2ZUJhY2t3YXJkc1Zpc2l0ZWRWZXJ0ZXhlcyIsImJhY2t3YXJkc1Zpc2l0ZWRWZXJ0ZXhlc1RhaWwiLCJwcmVkZWNlc3NvclZlcnRleGVzIiwicHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcyIsInZlcnRleEEiLCJ2aXNpdGVkVmVydGV4ZXMiLCJmb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2giLCJ2ZXJ0ZXhCIiwidGVybWluYXRlIiwiYmFja3dhcmRzRGVwdGhGaXJzdFNlYXJjaCIsInZlcnRleEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCIsImluY2x1ZGVzIiwidmVydGV4SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgiLCJnZXRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcyIsImltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzIiwiZ2V0SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcyIsImltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMiLCJzZXROYW1lIiwic2V0SW5kZXgiLCJzZXRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcyIsInNldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMiLCJkZWNyZW1lbnRJbmRleCIsImFkZEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCIsImltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCIsInB1c2giLCJhZGRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCIsImltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4IiwicmVtb3ZlSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4IiwiaW5kZXhPZiIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJyZW1vdmVJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCIsImNhbGxiYWNrIiwic29tZUltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCIsInNvbWUiLCJzb21lSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgiLCJmb3JFYWNoSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4IiwiZm9yRWFjaCIsImZvckVhY2hJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCIsImZyb21OYW1lQW5kSW5kZXgiLCJkZXBlbmRlbmN5VmVydGV4Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7Ozt5QkFQVTtzQkFFUztzQkFDNEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBFLElBQVFDLE9BQWVDLHlCQUFjLENBQTdCRCxNQUFNRSxPQUFTRCx5QkFBYyxDQUF2QkM7QUFFQyxJQUFBLEFBQU1ILHVCQUFOO2FBQU1BLE9BQ1BJLElBQUksRUFBRUMs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