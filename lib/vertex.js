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
var last = _necessary.arrayUtilities.last;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92ZXJ0ZXguanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBmb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2gsIGJhY2t3YXJkc0RlcHRoRmlyc3RTZWFyY2ggfSBmcm9tIFwiLi91dGlsaXRpZXMvc2VhcmNoXCI7XG5cbmNvbnN0IHsgbGFzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlcnRleCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGluZGV4LCBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcywgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgIHRoaXMuaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMgPSBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcztcbiAgICB0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMgPSBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0SW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5kZXg7XG4gIH1cblxuICBnZXRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcztcbiAgfVxuXG4gIGdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcztcbiAgfVxuXG4gIGlzU3RyYW5kZWQoKSB7XG4gICAgY29uc3QgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXNMZW5ndGggPSB0aGlzLmltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzLmxlbmd0aCxcbiAgICAgICAgICBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzTGVuZ3RoID0gdGhpcy5pbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzLmxlbmd0aCxcbiAgICAgICAgICBzdHJhbmRlZCA9ICgoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXNMZW5ndGggPT09IDApICYmIChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzTGVuZ3RoID09PSAwKSk7XG5cbiAgICByZXR1cm4gc3RyYW5kZWQ7XG4gIH1cblxuICBpc1ZlcnRleFJlYWNoYWJsZSh2ZXJ0ZXgpIHtcbiAgICBjb25zdCBmb3J3YXJkc1Zpc2l0ZWRWZXJ0aWNlcyA9IHRoaXMucmV0cmlldmVGb3J3YXJkc1Zpc2l0ZWRWZXJ0ZXhlcyh2ZXJ0ZXgpLFxuICAgICAgICAgIGxhc3RGb3J3YXJkc1Zpc2l0ZWRWZXJ0ZXggPSBsYXN0KGZvcndhcmRzVmlzaXRlZFZlcnRpY2VzKSxcbiAgICAgICAgICB2ZXJ0ZXhSZWFjaGFibGUgPSAodmVydGV4ID09PSBsYXN0Rm9yd2FyZHNWaXNpdGVkVmVydGV4KTtcblxuICAgIHJldHVybiB2ZXJ0ZXhSZWFjaGFibGU7XG4gIH1cblxuICBpc0VkZ2VQcmVzZW50QnlTb3VyY2VWZXJ0ZXgoc291cmNlVmVydGV4KSB7XG4gICAgY29uc3Qgc291cmNlVmVydGV4SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXggPSB0aGlzLmlzVmVydGV4SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgoc291cmNlVmVydGV4KSxcbiAgICAgICAgICBlZGdlUHJlc2VudCA9IHNvdXJjZVZlcnRleEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4OyAvLy9cblxuICAgIHJldHVybiBlZGdlUHJlc2VudDtcbiAgfVxuXG4gIGlzRWRnZVByZXNlbnRCeVRhcmdldFZlcnRleCh0YXJnZXRWZXJ0ZXgpIHtcbiAgICBjb25zdCB0YXJnZXRWZXJ0ZXhJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXggPSB0aGlzLmlzVmVydGV4SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KHRhcmdldFZlcnRleCksXG4gICAgICAgICAgZWRnZVByZXNlbnQgPSB0YXJnZXRWZXJ0ZXhJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXg7IC8vL1xuXG4gICAgcmV0dXJuIGVkZ2VQcmVzZW50O1xuICB9XG5cbiAgcmV0cmlldmVGb3J3YXJkc1Zpc2l0ZWRWZXJ0ZXhlcyh2ZXJ0ZXggPSBudWxsKSB7XG4gICAgY29uc3QgdmVydGV4QSA9IHZlcnRleCwgLy8vXG4gICAgICAgICAgdmlzaXRlZFZlcnRleGVzID0gdGhpcy5mb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2goKHZlcnRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmVydGV4QiA9IHZlcnRleCwgLy8vXG4gICAgICAgICAgICAgICAgICB0ZXJtaW5hdGUgPSAodmVydGV4QSA9PT0gdmVydGV4Qik7XG5cbiAgICAgICAgICAgIGlmICh0ZXJtaW5hdGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZm9yd2FyZHNWaXNpdGVkVmVydGV4ZXMgPSB2aXNpdGVkVmVydGV4ZXM7ICAvLy9cblxuICAgIHJldHVybiBmb3J3YXJkc1Zpc2l0ZWRWZXJ0ZXhlcztcbiAgfVxuXG4gIHJldHJpZXZlQmFja3dhcmRzVmlzaXRlZFZlcnRleGVzKHZlcnRleCA9IG51bGwpIHtcbiAgICBjb25zdCB2ZXJ0ZXhBID0gdmVydGV4LCAvLy9cbiAgICAgICAgICB2aXNpdGVkVmVydGV4ZXMgPSB0aGlzLmJhY2t3YXJkc0RlcHRoRmlyc3RTZWFyY2goKHZlcnRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmVydGV4QiA9IHZlcnRleCwgLy8vXG4gICAgICAgICAgICAgICAgICB0ZXJtaW5hdGUgPSAodmVydGV4QSA9PT0gdmVydGV4Qik7XG5cbiAgICAgICAgICAgIGlmICh0ZXJtaW5hdGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgYmFja3dhcmRzVmlzaXRlZFZlcnRleGVzID0gdmlzaXRlZFZlcnRleGVzOyAgLy8vXG5cbiAgICByZXR1cm4gYmFja3dhcmRzVmlzaXRlZFZlcnRleGVzO1xuICB9XG5cbiAgaXNWZXJ0ZXhJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgodmVydGV4KSB7XG4gICAgY29uc3QgdmVydGV4SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ID0gdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcy5pbmNsdWRlcyh2ZXJ0ZXgpO1xuXG4gICAgcmV0dXJuIHZlcnRleEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleDtcbiAgfVxuXG4gIGlzVmVydGV4SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgodmVydGV4KSB7XG4gICAgY29uc3QgdmVydGV4SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXggPSB0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMuaW5jbHVkZXModmVydGV4KTtcblxuICAgIHJldHVybiB2ZXJ0ZXhJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleDtcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBzZXRJbmRleChpbmRleCkge1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgfVxuXG4gIHNldEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzKGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzKSB7XG4gICAgdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcyA9IGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzO1xuICB9XG5cbiAgc2V0SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcyhpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzKSB7XG4gICAgdGhpcy5pbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzID0gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcztcbiAgfVxuXG4gIGRlY3JlbWVudEluZGV4KCkge1xuICAgIHRoaXMuaW5kZXgtLTtcbiAgfVxuXG4gIGFkZEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgpIHtcbiAgICB0aGlzLmltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzLnB1c2goaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KTtcbiAgfVxuXG4gIGFkZEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KSB7XG4gICAgdGhpcy5pbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzLnB1c2goaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpO1xuICB9XG5cbiAgcmVtb3ZlSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcy5pbmRleE9mKGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCksXG4gICAgICAgICAgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIHRoaXMuaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gIH1cblxuICByZW1vdmVJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzLmluZGV4T2YoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpLFxuICAgICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICB0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gIH1cblxuICBmb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2goY2FsbGJhY2spIHtcbiAgICBjb25zdCB2ZXJ0ZXggPSB0aGlzLCAgLy8vXG4gICAgICAgICAgdmlzaXRlZFZlcnRleGVzID0gW107XG5cbiAgICBmb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2godmVydGV4LCBjYWxsYmFjaywgdmlzaXRlZFZlcnRleGVzKTtcblxuICAgIHJldHVybiB2aXNpdGVkVmVydGV4ZXM7XG4gIH1cblxuICBiYWNrd2FyZHNEZXB0aEZpcnN0U2VhcmNoKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgdmVydGV4ID0gdGhpcywgIC8vL1xuICAgICAgICAgIHZpc2l0ZWRWZXJ0ZXhlcyA9IFtdO1xuXG4gICAgYmFja3dhcmRzRGVwdGhGaXJzdFNlYXJjaCh2ZXJ0ZXgsIGNhbGxiYWNrLCB2aXNpdGVkVmVydGV4ZXMpO1xuXG4gICAgcmV0dXJuIHZpc2l0ZWRWZXJ0ZXhlcztcbiAgfVxuXG4gIHNvbWVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcy5zb21lKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHNvbWVJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleChjYWxsYmFjaykge1xuICAgIHJldHVybiB0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMuc29tZShjYWxsYmFjayk7XG4gIH1cblxuICBmb3JFYWNoSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KGNhbGxiYWNrKSB7XG4gICAgdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcy5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGZvckVhY2hJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleChjYWxsYmFjaykge1xuICAgIHRoaXMuaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcy5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmFtZUFuZEluZGV4KG5hbWUsIGluZGV4KSB7XG4gICAgY29uc3QgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMgPSBbXSxcbiAgICAgICAgICBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzID0gW10sXG4gICAgICAgICAgZGVwZW5kZW5jeVZlcnRleCA9IG5ldyBWZXJ0ZXgobmFtZSwgaW5kZXgsIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzLCBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzKTtcblxuICAgIHJldHVybiBkZXBlbmRlbmN5VmVydGV4O1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlZlcnRleCIsImxhc3QiLCJhcnJheVV0aWxpdGllcyIsIm5hbWUiLCJpbmRleCIsImltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzIiwiaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcyIsImdldE5hbWUiLCJnZXRJbmRleCIsImdldEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzIiwiZ2V0SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcyIsImlzU3RyYW5kZWQiLCJpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlc0xlbmd0aCIsImxlbmd0aCIsImltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXNMZW5ndGgiLCJzdHJhbmRlZCIsImlzVmVydGV4UmVhY2hhYmxlIiwidmVydGV4IiwiZm9yd2FyZHNWaXNpdGVkVmVydGljZXMiLCJyZXRyaWV2ZUZvcndhcmRzVmlzaXRlZFZlcnRleGVzIiwibGFzdEZvcndhcmRzVmlzaXRlZFZlcnRleCIsInZlcnRleFJlYWNoYWJsZSIsImlzRWRnZVByZXNlbnRCeVNvdXJjZVZlcnRleCIsInNvdXJjZVZlcnRleCIsInNvdXJjZVZlcnRleEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4IiwiaXNWZXJ0ZXhJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCIsImVkZ2VQcmVzZW50IiwiaXNFZGdlUHJlc2VudEJ5VGFyZ2V0VmVydGV4IiwidGFyZ2V0VmVydGV4IiwidGFyZ2V0VmVydGV4SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4IiwiaXNWZXJ0ZXhJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgiLCJ2ZXJ0ZXhBIiwidmlzaXRlZFZlcnRleGVzIiwiZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoIiwidmVydGV4QiIsInRlcm1pbmF0ZSIsImZvcndhcmRzVmlzaXRlZFZlcnRleGVzIiwicmV0cmlldmVCYWNrd2FyZHNWaXNpdGVkVmVydGV4ZXMiLCJiYWNrd2FyZHNEZXB0aEZpcnN0U2VhcmNoIiwiYmFja3dhcmRzVmlzaXRlZFZlcnRleGVzIiwidmVydGV4SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4IiwiaW5jbHVkZXMiLCJ2ZXJ0ZXhJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCIsInNldE5hbWUiLCJzZXRJbmRleCIsInNldEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzIiwic2V0SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcyIsImRlY3JlbWVudEluZGV4IiwiYWRkSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4IiwiaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4IiwicHVzaCIsImFkZEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4IiwiaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgiLCJyZW1vdmVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgiLCJpbmRleE9mIiwic3RhcnQiLCJkZWxldGVDb3VudCIsInNwbGljZSIsInJlbW92ZUltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4IiwiY2FsbGJhY2siLCJzb21lSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4Iiwic29tZSIsInNvbWVJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCIsImZvckVhY2hJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgiLCJmb3JFYWNoIiwiZm9yRWFjaEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4IiwiZnJvbU5hbWVBbmRJbmRleCIsImRlcGVuZGVuY3lWZXJ0ZXgiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7O3lCQU5VO3NCQUVxQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEUsSUFBTSxBQUFFQyxPQUFTQywwQkFBVEQ7QUFFTyxJQUFBLEFBQU1ELHVCQUFOO2FBQU1BLE9BQ1BHLElBQUksRUFBRUMsS0FBSyxFQUFFQywwQkFBMEIsRUFBRUMsNEJBQTRCO2dDQUQ5RE47UUFFakIsSUFBSSxDQUFDRyxPQUFPQTtRQUNaLElBQUksQ0FBQ0MsUUFBUUE7UUFDYixJQUFJLENBQUNDLDZCQUE2QkE7UUFDbEMsSUFBSSxDQUFDQywrQkFBK0JBOztrQkFMbkJOOztZQVFuQk8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSjtZQUNkOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSjtZQUNkOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSjtZQUNkOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSjtZQUNkOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLG1DQUFtQyxJQUFJLENBQUNQLDJCQUEyQlEsUUFDbkVDLHFDQUFxQyxJQUFJLENBQUNSLDZCQUE2Qk8sUUFDdkVFLFdBQVksQUFBQ0gscUNBQXFDLEtBQU9FLHVDQUF1QztnQkFFdEcsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0JDLE1BQU07Z0JBQ3RCLElBQU1DLDBCQUEwQixJQUFJLENBQUNDLGdDQUFnQ0YsU0FDL0RHLDRCQUE0Qm5CLEtBQUtpQiwwQkFDakNHLGtCQUFtQkosV0FBV0c7Z0JBRXBDLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEs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