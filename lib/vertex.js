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
        },
        {
            key: "exhaustiveForwardsDepthFirstSearch",
            value: function exhaustiveForwardsDepthFirstSearch(callback) {
                var vertex = this, visitedVertexes = [];
                (0, _search.exhaustiveForwardsDepthFirstSearch)(vertex, callback, visitedVertexes);
                return visitedVertexes;
            }
        },
        {
            key: "exhaustiveBackwardsDepthFirstSearch",
            value: function exhaustiveBackwardsDepthFirstSearch(callback) {
                var vertex = this, visitedVertexes = [];
                (0, _search.exhaustiveBackwardsDepthFirstSearch)(vertex, callback, visitedVertexes);
                return visitedVertexes;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92ZXJ0ZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhlcyB9IGZyb20gXCIuL3V0aWxpdGllcy92ZXJ0ZXhcIjtcbmltcG9ydCB7IGZvcndhcmRzRGVwdGhGaXJzdFNlYXJjaCxcbiAgICAgICAgIGJhY2t3YXJkc0RlcHRoRmlyc3RTZWFyY2gsXG4gICAgICAgICBleGhhdXN0aXZlRm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoLFxuICAgICAgICAgZXhoYXVzdGl2ZUJhY2t3YXJkc0RlcHRoRmlyc3RTZWFyY2ggfSBmcm9tIFwiLi91dGlsaXRpZXMvc2VhcmNoXCI7XG5cbmNvbnN0IHsgbGFzdCwgdGFpbCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlcnRleCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGluZGV4LCBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcywgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgIHRoaXMuaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMgPSBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcztcbiAgICB0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMgPSBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0SW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5kZXg7XG4gIH1cblxuICBnZXRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcztcbiAgfVxuXG4gIGdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcztcbiAgfVxuXG4gIGlzU3RyYW5kZWQoKSB7XG4gICAgY29uc3QgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXNMZW5ndGggPSB0aGlzLmltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzLmxlbmd0aCxcbiAgICAgICAgICBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzTGVuZ3RoID0gdGhpcy5pbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzLmxlbmd0aCxcbiAgICAgICAgICBzdHJhbmRlZCA9ICgoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXNMZW5ndGggPT09IDApICYmIChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzTGVuZ3RoID09PSAwKSk7XG5cbiAgICByZXR1cm4gc3RyYW5kZWQ7XG4gIH1cblxuICBpc1ZlcnRleFJlYWNoYWJsZSh2ZXJ0ZXgpIHtcbiAgICBjb25zdCBmb3J3YXJkc1Zpc2l0ZWRWZXJ0aWNlcyA9IHRoaXMucmV0cmlldmVGb3J3YXJkc1Zpc2l0ZWRWZXJ0ZXhlcyh2ZXJ0ZXgpLFxuICAgICAgICAgIGxhc3RGb3J3YXJkc1Zpc2l0ZWRWZXJ0ZXggPSBsYXN0KGZvcndhcmRzVmlzaXRlZFZlcnRpY2VzKSxcbiAgICAgICAgICB2ZXJ0ZXhSZWFjaGFibGUgPSAodmVydGV4ID09PSBsYXN0Rm9yd2FyZHNWaXNpdGVkVmVydGV4KTtcblxuICAgIHJldHVybiB2ZXJ0ZXhSZWFjaGFibGU7XG4gIH1cblxuICBpc0VkZ2VQcmVzZW50QnlTb3VyY2VWZXJ0ZXgoc291cmNlVmVydGV4KSB7XG4gICAgY29uc3Qgc291cmNlVmVydGV4SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXggPSB0aGlzLmlzVmVydGV4SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgoc291cmNlVmVydGV4KSxcbiAgICAgICAgICBlZGdlUHJlc2VudCA9IHNvdXJjZVZlcnRleEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4OyAvLy9cblxuICAgIHJldHVybiBlZGdlUHJlc2VudDtcbiAgfVxuXG4gIGlzRWRnZVByZXNlbnRCeVRhcmdldFZlcnRleCh0YXJnZXRWZXJ0ZXgpIHtcbiAgICBjb25zdCB0YXJnZXRWZXJ0ZXhJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXggPSB0aGlzLmlzVmVydGV4SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KHRhcmdldFZlcnRleCksXG4gICAgICAgICAgZWRnZVByZXNlbnQgPSB0YXJnZXRWZXJ0ZXhJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXg7IC8vL1xuXG4gICAgcmV0dXJuIGVkZ2VQcmVzZW50O1xuICB9XG5cbiAgcmV0cmlldmVTdWNjZXNzb3JWZXJ0ZXhOYW1lcygpIHtcbiAgICBjb25zdCBmb3J3YXJkc1Zpc2l0ZWRWZXJ0ZXhlcyA9IHRoaXMucmV0cmlldmVGb3J3YXJkc1Zpc2l0ZWRWZXJ0ZXhlcygpLFxuICAgICAgICAgIGZvcndhcmRzVmlzaXRlZFZlcnRleGVzVGFpbCA9IHRhaWwoZm9yd2FyZHNWaXNpdGVkVmVydGV4ZXMpLFxuICAgICAgICAgIHN1Y2Nlc3NvclZlcnRleGVzID0gZm9yd2FyZHNWaXNpdGVkVmVydGV4ZXNUYWlsLFxuICAgICAgICAgIHN1Y2Nlc3NvclZlcnRleE5hbWVzID0gdmVydGV4TmFtZXNGcm9tVmVydGV4ZXMoc3VjY2Vzc29yVmVydGV4ZXMpO1xuXG4gICAgcmV0dXJuIHN1Y2Nlc3NvclZlcnRleE5hbWVzO1xuICB9XG5cbiAgcmV0cmlldmVQcmVkZWNlc3NvclZlcnRleE5hbWVzKCkge1xuICAgIGNvbnN0IGJhY2t3YXJkc1Zpc2l0ZWRWZXJ0ZXhlcyA9IHRoaXMucmV0cmlldmVCYWNrd2FyZHNWaXNpdGVkVmVydGV4ZXMoKSxcbiAgICAgICAgICBiYWNrd2FyZHNWaXNpdGVkVmVydGV4ZXNUYWlsID0gdGFpbChiYWNrd2FyZHNWaXNpdGVkVmVydGV4ZXMpLFxuICAgICAgICAgIHByZWRlY2Vzc29yVmVydGV4ZXMgPSBiYWNrd2FyZHNWaXNpdGVkVmVydGV4ZXNUYWlsLFxuICAgICAgICAgIHByZWRlY2Vzc29yVmVydGV4TmFtZXMgPSB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhlcyhwcmVkZWNlc3NvclZlcnRleGVzKTtcblxuICAgIHJldHVybiBwcmVkZWNlc3NvclZlcnRleE5hbWVzO1xuICB9XG5cbiAgcmV0cmlldmVGb3J3YXJkc1Zpc2l0ZWRWZXJ0ZXhlcyh2ZXJ0ZXggPSBudWxsKSB7XG4gICAgY29uc3QgdmVydGV4QSA9IHZlcnRleCwgLy8vXG4gICAgICAgICAgdmlzaXRlZFZlcnRleGVzID0gdGhpcy5mb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2goKHZlcnRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmVydGV4QiA9IHZlcnRleCwgLy8vXG4gICAgICAgICAgICAgICAgICB0ZXJtaW5hdGUgPSAodmVydGV4QSA9PT0gdmVydGV4Qik7XG5cbiAgICAgICAgICAgIGlmICh0ZXJtaW5hdGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZm9yd2FyZHNWaXNpdGVkVmVydGV4ZXMgPSB2aXNpdGVkVmVydGV4ZXM7ICAvLy9cblxuICAgIHJldHVybiBmb3J3YXJkc1Zpc2l0ZWRWZXJ0ZXhlcztcbiAgfVxuXG4gIHJldHJpZXZlQmFja3dhcmRzVmlzaXRlZFZlcnRleGVzKHZlcnRleCA9IG51bGwpIHtcbiAgICBjb25zdCB2ZXJ0ZXhBID0gdmVydGV4LCAvLy9cbiAgICAgICAgICB2aXNpdGVkVmVydGV4ZXMgPSB0aGlzLmJhY2t3YXJkc0RlcHRoRmlyc3RTZWFyY2goKHZlcnRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmVydGV4QiA9IHZlcnRleCwgLy8vXG4gICAgICAgICAgICAgICAgICB0ZXJtaW5hdGUgPSAodmVydGV4QSA9PT0gdmVydGV4Qik7XG5cbiAgICAgICAgICAgIGlmICh0ZXJtaW5hdGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgYmFja3dhcmRzVmlzaXRlZFZlcnRleGVzID0gdmlzaXRlZFZlcnRleGVzOyAgLy8vXG5cbiAgICByZXR1cm4gYmFja3dhcmRzVmlzaXRlZFZlcnRleGVzO1xuICB9XG5cbiAgaXNWZXJ0ZXhJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgodmVydGV4KSB7XG4gICAgY29uc3QgdmVydGV4SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ID0gdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcy5pbmNsdWRlcyh2ZXJ0ZXgpO1xuXG4gICAgcmV0dXJuIHZlcnRleEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleDtcbiAgfVxuXG4gIGlzVmVydGV4SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgodmVydGV4KSB7XG4gICAgY29uc3QgdmVydGV4SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXggPSB0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMuaW5jbHVkZXModmVydGV4KTtcblxuICAgIHJldHVybiB2ZXJ0ZXhJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleDtcbiAgfVxuXG4gIGdldEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzKCkge1xuICAgIGNvbnN0IGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzID0gdmVydGV4TmFtZXNGcm9tVmVydGV4ZXModGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcyk7XG5cbiAgICByZXR1cm4gaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXM7XG4gIH1cblxuICBnZXRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzKCkge1xuICAgIGNvbnN0IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMgPSB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhlcyh0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMpO1xuXG4gICAgcmV0dXJuIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXM7XG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgc2V0SW5kZXgoaW5kZXgpIHtcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gIH1cblxuICBzZXRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcyhpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcykge1xuICAgIHRoaXMuaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMgPSBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcztcbiAgfVxuXG4gIHNldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcykge1xuICAgIHRoaXMuaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcyA9IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXM7XG4gIH1cblxuICBkZWNyZW1lbnRJbmRleCgpIHtcbiAgICB0aGlzLmluZGV4LS07XG4gIH1cblxuICBhZGRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KSB7XG4gICAgdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcy5wdXNoKGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCk7XG4gIH1cblxuICBhZGRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCkge1xuICAgIHRoaXMuaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcy5wdXNoKGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KTtcbiAgfVxuXG4gIHJlbW92ZUltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMuaW5kZXhPZihpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgpLFxuICAgICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICB0aGlzLmltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuICB9XG5cbiAgcmVtb3ZlSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcy5pbmRleE9mKGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KSxcbiAgICAgICAgICBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgdGhpcy5pbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuICB9XG5cbiAgZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgdmVydGV4ID0gdGhpcywgIC8vL1xuICAgICAgICAgIHZpc2l0ZWRWZXJ0ZXhlcyA9IFtdO1xuXG4gICAgZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoKHZlcnRleCwgY2FsbGJhY2ssIHZpc2l0ZWRWZXJ0ZXhlcyk7XG5cbiAgICByZXR1cm4gdmlzaXRlZFZlcnRleGVzO1xuICB9XG5cbiAgYmFja3dhcmRzRGVwdGhGaXJzdFNlYXJjaChjYWxsYmFjaykge1xuICAgIGNvbnN0IHZlcnRleCA9IHRoaXMsICAvLy9cbiAgICAgICAgICB2aXNpdGVkVmVydGV4ZXMgPSBbXTtcblxuICAgIGJhY2t3YXJkc0RlcHRoRmlyc3RTZWFyY2godmVydGV4LCBjYWxsYmFjaywgdmlzaXRlZFZlcnRleGVzKTtcblxuICAgIHJldHVybiB2aXNpdGVkVmVydGV4ZXM7XG4gIH1cblxuICBzb21lSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRoaXMuaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMuc29tZShjYWxsYmFjayk7XG4gIH1cblxuICBzb21lSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5pbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzLnNvbWUoY2FsbGJhY2spO1xuICB9XG5cbiAgZm9yRWFjaEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleChjYWxsYmFjaykge1xuICAgIHRoaXMuaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cblxuICBmb3JFYWNoSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgoY2FsbGJhY2spIHtcbiAgICB0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cblxuICBleGhhdXN0aXZlRm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgdmVydGV4ID0gdGhpcywgIC8vL1xuICAgICAgICAgIHZpc2l0ZWRWZXJ0ZXhlcyA9IFtdO1xuXG4gICAgZXhoYXVzdGl2ZUZvcndhcmRzRGVwdGhGaXJzdFNlYXJjaCh2ZXJ0ZXgsIGNhbGxiYWNrLCB2aXNpdGVkVmVydGV4ZXMpO1xuXG4gICAgcmV0dXJuIHZpc2l0ZWRWZXJ0ZXhlcztcbiAgfVxuXG4gIGV4aGF1c3RpdmVCYWNrd2FyZHNEZXB0aEZpcnN0U2VhcmNoKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgdmVydGV4ID0gdGhpcywgIC8vL1xuICAgICAgICAgIHZpc2l0ZWRWZXJ0ZXhlcyA9IFtdO1xuXG4gICAgZXhoYXVzdGl2ZUJhY2t3YXJkc0RlcHRoRmlyc3RTZWFyY2godmVydGV4LCBjYWxsYmFjaywgdmlzaXRlZFZlcnRleGVzKTtcblxuICAgIHJldHVybiB2aXNpdGVkVmVydGV4ZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5hbWVBbmRJbmRleChuYW1lLCBpbmRleCkge1xuICAgIGNvbnN0IGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzID0gW10sXG4gICAgICAgICAgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcyA9IFtdLFxuICAgICAgICAgIGRlcGVuZGVuY3lWZXJ0ZXggPSBuZXcgVmVydGV4KG5hbWUsIGluZGV4LCBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcywgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcyk7XG5cbiAgICByZXR1cm4gZGVwZW5kZW5jeVZlcnRleDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlZlcnRleCIsImxhc3QiLCJhcnJheVV0aWxpdGllcyIsInRhaWwiLCJuYW1lIiwiaW5kZXgiLCJpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcyIsImltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMiLCJnZXROYW1lIiwiZ2V0SW5kZXgiLCJnZXRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcyIsImdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMiLCJpc1N0cmFuZGVkIiwiaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXNMZW5ndGgiLCJsZW5ndGgiLCJpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzTGVuZ3RoIiwic3RyYW5kZWQiLCJpc1ZlcnRleFJlYWNoYWJsZSIsInZlcnRleCIsImZvcndhcmRzVmlzaXRlZFZlcnRpY2VzIiwicmV0cmlldmVGb3J3YXJkc1Zpc2l0ZWRWZXJ0ZXhlcyIsImxhc3RGb3J3YXJkc1Zpc2l0ZWRWZXJ0ZXgiLCJ2ZXJ0ZXhSZWFjaGFibGUiLCJpc0VkZ2VQcmVzZW50QnlTb3VyY2VWZXJ0ZXgiLCJzb3VyY2VWZXJ0ZXgiLCJzb3VyY2VWZXJ0ZXhJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCIsImlzVmVydGV4SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgiLCJlZGdlUHJlc2VudCIsImlzRWRnZVByZXNlbnRCeVRhcmdldFZlcnRleCIsInRhcmdldFZlcnRleCIsInRhcmdldFZlcnRleEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCIsImlzVmVydGV4SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4IiwicmV0cmlldmVTdWNjZXNzb3JWZXJ0ZXhOYW1lcyIsImZvcndhcmRzVmlzaXRlZFZlcnRleGVzIiwiZm9yd2FyZHNWaXNpdGVkVmVydGV4ZXNUYWlsIiwic3VjY2Vzc29yVmVydGV4ZXMiLCJzdWNjZXNzb3JWZXJ0ZXhOYW1lcyIsInZlcnRleE5hbWVzRnJvbVZlcnRleGVzIiwicmV0cmlldmVQcmVkZWNlc3NvclZlcnRleE5hbWVzIiwiYmFja3dhcmRzVmlzaXRlZFZlcnRleGVzIiwicmV0cmlldmVCYWNrd2FyZHNWaXNpdGVkVmVydGV4ZXMiLCJiYWNrd2FyZHNWaXNpdGVkVmVydGV4ZXNUYWlsIiwicHJlZGVjZXNzb3JWZXJ0ZXhlcyIsInByZWRlY2Vzc29yVmVydGV4TmFtZXMiLCJ2ZXJ0ZXhBIiwidmlzaXRlZFZlcnRleGVzIiwiZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoIiwidmVydGV4QiIsInRlcm1pbmF0ZSIsImJhY2t3YXJkc0RlcHRoRmlyc3RTZWFyY2giLCJ2ZXJ0ZXhJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgiLCJpbmNsdWRlcyIsInZlcnRleEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4IiwiZ2V0SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXMiLCJpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcyIsImdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMiLCJpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzIiwic2V0TmFtZSIsInNldEluZGV4Iiwic2V0SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMiLCJzZXRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzIiwiZGVjcmVtZW50SW5kZXgiLCJhZGRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgiLCJpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgiLCJwdXNoIiwiYWRkSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgiLCJpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCIsInJlbW92ZUltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCIsImluZGV4T2YiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwicmVtb3ZlSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgiLCJjYWxsYmFjayIsInNvbWVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgiLCJzb21lIiwic29tZUltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4IiwiZm9yRWFjaEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCIsImZvckVhY2giLCJmb3JFYWNoSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgiLCJleGhhdXN0aXZlRm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoIiwiZXhoYXVzdGl2ZUJhY2t3YXJkc0RlcHRoRmlyc3RTZWFyY2giLCJmcm9tTmFtZUFuZEluZGV4IiwiZGVwZW5kZW5jeVZlcnRleCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFZcUJBOzs7eUJBVlU7c0JBRVM7c0JBSVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBELElBQVFDLE9BQWVDLHlCQUFjLENBQTdCRCxNQUFNRSxPQUFTRCx5QkFBYyxDQUF2QkM7QUFFQyxJQUFBLEFBQU1ILHVCQUFOO2FBQU1BLE9BQ1BJLElBQUksRUFBRUMsS0FBSyxFQUFFQywwQkFBMEIsRUFBRUMsNEJBQTRCO2dDQUQ5RFA7UUFFakIsSUFBSSxDQUFDSSxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQywwQkFBMEIsR0FBR0E7UUFDbEMsSUFBSSxDQUFDQyw0QkFBNEIsR0FBR0E7O2tCQUxuQlA7O1lBUW5CUSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLElBQUk7WUFDbEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJ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