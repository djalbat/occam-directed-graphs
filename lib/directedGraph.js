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
var _necessary = require("necessary");
var _edge = /*#__PURE__*/ _interop_require_default(require("./edge"));
var _cycle = /*#__PURE__*/ _interop_require_default(require("./cycle"));
var _vertex = /*#__PURE__*/ _interop_require_default(require("./vertex"));
var _index = require("./utilities/index");
var _vertex1 = require("./utilities/vertex");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var first = _necessary.arrayUtilities.first;
var DirectedGraph = /*#__PURE__*/ function() {
    function DirectedGraph(vertexMap) {
        _class_call_check(this, DirectedGraph);
        this.vertexMap = vertexMap;
    }
    _create_class(DirectedGraph, [
        {
            key: "getVertexNap",
            value: function getVertexNap() {
                return this.vertexMap;
            }
        },
        {
            key: "getVertexes",
            value: function getVertexes() {
                var vertexMapValues = Object.values(this.vertexMap), vertexes = vertexMapValues; ///
                return vertexes;
            }
        },
        {
            key: "getVertexNames",
            value: function getVertexNames() {
                var vertexMapKeys = Object.keys(this.vertexMap), vertexNames = vertexMapKeys; ///
                return vertexNames;
            }
        },
        {
            key: "getOrderedVertexNames",
            value: function getOrderedVertexNames() {
                var vertexes = this.getVertexes();
                (0, _vertex1.orderVertexes)(vertexes);
                var orderedVertexes = vertexes, orderedVertexNames = (0, _vertex1.vertexNamesFromVertexes)(orderedVertexes);
                return orderedVertexNames;
            }
        },
        {
            key: "getVertexByVertexName",
            value: function getVertexByVertexName(vertexName) {
                var vertexPresent = this.isVertexPresentByVertexName(vertexName), vertex = vertexPresent ? this.vertexMap[vertexName] : null;
                return vertex;
            }
        },
        {
            key: "getEdgesBySourceVertexName",
            value: function getEdgesBySourceVertexName(sourceVertexName) {
                var edges = [], sourceVertex = this.getVertexByVertexName(sourceVertexName);
                if (sourceVertex !== null) {
                    var immediateSuccessorVertexes = sourceVertex.getImmediateSuccessorVertexes(), immediateSuccessorVertexNames = (0, _vertex1.vertexNamesFromVertexes)(immediateSuccessorVertexes), targetVertexNames = immediateSuccessorVertexNames; ///
                    targetVertexNames.forEach(function(targetVertexName) {
                        var edge = _edge.default.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);
                        edges.push(edge);
                    });
                }
                return edges;
            }
        },
        {
            key: "getEdgesByTargetVertexName",
            value: function getEdgesByTargetVertexName(targetVertexName) {
                var edges = [], targetVertex = this.getVertexByVertexName(targetVertexName);
                if (targetVertex !== null) {
                    var immediatePredecessorVertexes = targetVertex.getImmediatePredecessorVertexes(), immediatePredecessorVertexNames = (0, _vertex1.vertexNamesFromVertexes)(immediatePredecessorVertexes), sourceVertexNames = immediatePredecessorVertexNames; ///
                    sourceVertexNames.forEach(function(sourceVertexName) {
                        var edge = _edge.default.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);
                        edges.push(edge);
                    });
                }
                return edges;
            }
        },
        {
            key: "getFirstCycle",
            value: function getFirstCycle() {
                var firstCycle = null;
                var cyclesPresent = this.areCyclesPresent();
                if (cyclesPresent) {
                    var cyclicEdges = this.getCyclicEdges(), firstCyclicEdge = first(cyclicEdges), sourceVertexName = firstCyclicEdge.getSourceVertexName(), targetVertexName = firstCyclicEdge.getTargetVertexName(), sourceVertex = this.getVertexByVertexName(sourceVertexName), targetVertex = this.getVertexByVertexName(targetVertexName);
                    targetVertex.forwardsDepthFirstSearch(function(vertex, predecessorVertexes) {
                        var terminate = false;
                        if (vertex === sourceVertex) {
                            terminate = true;
                            var cycle = _cycle.default.fromSourceVertexAndPredecessorVertexes(sourceVertex, predecessorVertexes); ///
                            firstCycle = cycle; ///
                        }
                        return terminate;
                    });
                }
                return firstCycle;
            }
        },
        {
            key: "getCyclicEdges",
            value: function getCyclicEdges() {
                var cyclicEdges = [], vertexes = this.getVertexes();
                vertexes.forEach(function(vertex) {
                    var sourceVertex = vertex, sourceVertexIndex = sourceVertex.getIndex();
                    vertex.forEachImmediateSuccessorVertex(function(immediateSuccessorVertex) {
                        var targetVertex = immediateSuccessorVertex, targetVertexIndex = targetVertex.getIndex();
                        if (targetVertexIndex < sourceVertexIndex) {
                            var sourceVertexName = sourceVertex.getName(), targetVertexName = targetVertex.getName(), edge = _edge.default.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName), cyclicEdge = edge; ///
                            cyclicEdges.push(cyclicEdge);
                        }
                    });
                    sourceVertex;
                });
                return cyclicEdges;
            }
        },
        {
            key: "areCyclesPresent",
            value: function areCyclesPresent() {
                var vertexes = this.getVertexes(), cyclesPresent = vertexes.some(function(vertex) {
                    var sourceVertex = vertex, sourceVertexIndex = sourceVertex.getIndex(), cyclicEdgePresent = vertex.someImmediateSuccessorVertex(function(immediateSuccessorVertex) {
                        var targetVertex = immediateSuccessorVertex, targetVertexIndex = targetVertex.getIndex();
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
        },
        {
            key: "isEdgePresent",
            value: function isEdgePresent(edge) {
                var edgePresent = false;
                var sourceVertexName = edge.getSourceVertexName(), sourceVertex = this.getVertexByVertexName(sourceVertexName);
                if (sourceVertex !== null) {
                    var targetVertexName = edge.getTargetVertexName(), targetVertex = this.getVertexByVertexName(targetVertexName);
                    if (targetVertex !== null) {
                        edgePresent = sourceVertex.isEdgePresentByTargetVertex(targetVertex);
                    }
                }
                return edgePresent;
            }
        },
        {
            key: "isVertexPresentByVertexName",
            value: function isVertexPresentByVertexName(vertexName) {
                var vertexNames = this.getVertexNames(), vertexNamesIncludesVertexName = vertexNames.includes(vertexName), vertexPresent = vertexNamesIncludesVertexName; ///
                return vertexPresent;
            }
        },
        {
            key: "addVertexByVertexName",
            value: function addVertexByVertexName(vertexName) {
                var vertexPresent = this.isVertexPresentByVertexName(vertexName);
                if (!vertexPresent) {
                    var vertexNames = this.getVertexNames(), vertexNamesLength = vertexNames.length, name = vertexName, index = vertexNamesLength, vertex = _vertex.default.fromNameAndIndex(name, index);
                    this.setVertexByVertexName(vertexName, vertex);
                }
                var vertex1 = this.getVertexByVertexName(vertexName);
                return vertex1;
            }
        },
        {
            key: "removeVertexByVertexName",
            value: function removeVertexByVertexName(vertexName) {
                var vertexPresent = this.isVertexPresentByVertexName(vertexName);
                if (!vertexPresent) {
                    return;
                }
                var vertex = this.getVertexByVertexName(vertexName);
                vertex.forEachImmediateSuccessorVertex(function(immediateSuccessVertex) {
                    var immediatePredecessorVertex = vertex; ///
                    immediateSuccessVertex.removeImmediatePredecessorVertex(immediatePredecessorVertex);
                });
                vertex.forEachImmediatePredecessorVertex(function(immediatePredecessorVertex) {
                    var immediateSuccessVertex = vertex; ///
                    immediatePredecessorVertex.removeImmediateSuccessorVertex(immediateSuccessVertex);
                });
                this.deleteVertexByVertexName(vertexName);
                var vertexes = this.getVertexes(), deletedVertex = vertex, deletedVertexIndex = deletedVertex.getIndex();
                vertexes.forEach(function(vertex) {
                    var vertexIndex = vertex.getIndex();
                    if (vertexIndex > deletedVertexIndex) {
                        vertex.decrementIndex();
                    }
                });
                this.filterCyclicEdges();
            }
        },
        {
            key: "addEdge",
            value: function addEdge(edge) {
                var sourceVertexName = edge.getSourceVertexName(), targetVertexName = edge.getTargetVertexName();
                if (sourceVertexName === targetVertexName) {
                    return;
                }
                var sourceVertex = this.addVertexByVertexName(sourceVertexName), targetVertex = this.addVertexByVertexName(targetVertexName), edgePresent = sourceVertex.isEdgePresentByTargetVertex(targetVertex);
                if (edgePresent) {
                    return;
                }
                var sourceVertexIndex = sourceVertex.getIndex(), targetVertexIndex = targetVertex.getIndex();
                if (sourceVertexIndex > targetVertexIndex) {
                    this.reorderVertexesBySourceVertexAndTargetVertex(sourceVertex, targetVertex);
                }
                var immediatePredecessorVertex = sourceVertex, immediateSuccessorVertex = targetVertex; ///
                immediatePredecessorVertex.addImmediateSuccessorVertex(immediateSuccessorVertex);
                immediateSuccessorVertex.addImmediatePredecessorVertex(immediatePredecessorVertex);
            }
        },
        {
            key: "addEdges",
            value: function addEdges(edges) {
                var _this = this;
                edges.forEach(function(edge) {
                    _this.addEdge(edge);
                });
            }
        },
        {
            key: "removeEdge",
            value: function removeEdge(edge, removeStrandedVertexes) {
                var sourceVertexName = edge.getSourceVertexName(), targetVertexName = edge.getTargetVertexName(), sourceVertex = this.addVertexByVertexName(sourceVertexName), targetVertex = this.addVertexByVertexName(targetVertexName), edgePresent = sourceVertex.isEdgePresentByTargetVertex(targetVertex);
                if (!edgePresent) {
                    return;
                }
                sourceVertex.removeImmediateSuccessorVertex(targetVertex);
                targetVertex.removeImmediatePredecessorVertex(sourceVertex);
                if (removeStrandedVertexes) {
                    var sourceVertexStranded = sourceVertex.isStranded(), targetVertexStranded = targetVertex.isStranded();
                    if (sourceVertexStranded) {
                        this.removeVertexByVertexName(sourceVertexName);
                    }
                    if (targetVertexStranded) {
                        this.removeVertexByVertexName(targetVertexName);
                    }
                }
                this.filterCyclicEdges();
            }
        },
        {
            key: "removeEdges",
            value: function removeEdges(edges) {
                var removeStrandedVertexes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                var _this = this;
                edges.forEach(function(edge) {
                    _this.removeEdge(edge, removeStrandedVertexes);
                });
            }
        },
        {
            key: "removeAllEdgesAndVertexes",
            value: function removeAllEdgesAndVertexes() {
                this.vertexMap = {};
            }
        },
        {
            key: "reorderVertexesBySourceVertexAndTargetVertex",
            value: function reorderVertexesBySourceVertexAndTargetVertex(sourceVertex, targetVertex) {
                var sourceVertexReachable = targetVertex.isVertexReachable(sourceVertex);
                if (sourceVertexReachable) {
                    return;
                }
                var forwardsVisitedVertexes = targetVertex.retrieveForwardsVisitedVertexes(), backwardsVisitedVertexes = sourceVertex.retrieveBackwardsVisitedVertexes();
                (0, _vertex1.orderVertexes)(backwardsVisitedVertexes);
                (0, _vertex1.orderVertexes)(forwardsVisitedVertexes);
                var visitedVertexes = _to_consumable_array(backwardsVisitedVertexes).concat(_to_consumable_array(forwardsVisitedVertexes)), visitedIndexes = (0, _index.indexesFromVertexes)(visitedVertexes);
                (0, _index.orderIndexes)(visitedIndexes);
                visitedVertexes.forEach(function(visitedVertex, index) {
                    var visitedIndex = visitedIndexes[index];
                    index = visitedIndex; ///
                    visitedVertex.setIndex(index);
                });
            }
        },
        {
            key: "filterCyclicEdges",
            value: function filterCyclicEdges() {
                var cyclicEdges = this.getCyclicEdges(), edges = cyclicEdges; ///
                this.removeEdges(edges);
                this.addEdges(edges);
            }
        },
        {
            key: "setVertexByVertexName",
            value: function setVertexByVertexName(vertexName, vertex) {
                this.vertexMap[vertexName] = vertex;
            }
        },
        {
            key: "deleteVertexByVertexName",
            value: function deleteVertexByVertexName(vertexName) {
                delete this.vertexMap[vertexName];
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var vertexMap = {}, directedGraph = new DirectedGraph(vertexMap);
                return directedGraph;
            }
        }
    ]);
    return DirectedGraph;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kaXJlY3RlZEdyYXBoLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEVkZ2UgZnJvbSBcIi4vZWRnZVwiO1xuaW1wb3J0IEN5Y2xlIGZyb20gXCIuL2N5Y2xlXCI7XG5pbXBvcnQgVmVydGV4IGZyb20gXCIuL3ZlcnRleFwiO1xuXG5pbXBvcnQgeyBvcmRlckluZGV4ZXMsIGluZGV4ZXNGcm9tVmVydGV4ZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvaW5kZXhcIjtcbmltcG9ydCB7IG9yZGVyVmVydGV4ZXMsIHZlcnRleE5hbWVzRnJvbVZlcnRleGVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3ZlcnRleFwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0ZWRHcmFwaCB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleE1hcCkge1xuICAgIHRoaXMudmVydGV4TWFwID0gdmVydGV4TWFwO1xuICB9XG5cbiAgZ2V0VmVydGV4TmFwKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleE1hcDtcbiAgfVxuXG4gIGdldFZlcnRleGVzKCkge1xuICAgIGNvbnN0IHZlcnRleE1hcFZhbHVlcyA9IE9iamVjdC52YWx1ZXModGhpcy52ZXJ0ZXhNYXApLFxuICAgICAgICAgIHZlcnRleGVzID0gdmVydGV4TWFwVmFsdWVzOyAvLy9cblxuICAgIHJldHVybiB2ZXJ0ZXhlcztcbiAgfVxuXG4gIGdldFZlcnRleE5hbWVzKCkge1xuICAgIGNvbnN0IHZlcnRleE1hcEtleXMgPSBPYmplY3Qua2V5cyh0aGlzLnZlcnRleE1hcCksXG4gICAgICAgICAgdmVydGV4TmFtZXMgPSB2ZXJ0ZXhNYXBLZXlzOyAgLy8vXG5cbiAgICByZXR1cm4gdmVydGV4TmFtZXM7XG4gIH1cblxuICBnZXRPcmRlcmVkVmVydGV4TmFtZXMoKSB7XG4gICAgY29uc3QgdmVydGV4ZXMgPSB0aGlzLmdldFZlcnRleGVzKCk7XG5cbiAgICBvcmRlclZlcnRleGVzKHZlcnRleGVzKTtcblxuICAgIGNvbnN0IG9yZGVyZWRWZXJ0ZXhlcyA9IHZlcnRleGVzLCAvLy9cbiAgICAgICAgICBvcmRlcmVkVmVydGV4TmFtZXMgPSB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhlcyhvcmRlcmVkVmVydGV4ZXMpO1xuXG4gICAgcmV0dXJuIG9yZGVyZWRWZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGdldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgdmVydGV4UHJlc2VudCA9IHRoaXMuaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpLFxuICAgICAgICAgIHZlcnRleCA9IHZlcnRleFByZXNlbnQgP1xuICAgICAgICAgICAgICAgICAgICAgdGhpcy52ZXJ0ZXhNYXBbdmVydGV4TmFtZV0gOlxuICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gICAgcmV0dXJuIHZlcnRleDtcbiAgfVxuXG4gIGdldEVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpIHtcbiAgICBjb25zdCBlZGdlcyA9IFtdLFxuICAgICAgICAgIHNvdXJjZVZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpO1xuXG4gICAgaWYgKHNvdXJjZVZlcnRleCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMgPSBzb3VyY2VWZXJ0ZXguZ2V0SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMoKSxcbiAgICAgICAgICAgIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzID0gdmVydGV4TmFtZXNGcm9tVmVydGV4ZXMoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZXMgPSBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lczsgIC8vL1xuXG4gICAgICB0YXJnZXRWZXJ0ZXhOYW1lcy5mb3JFYWNoKCh0YXJnZXRWZXJ0ZXhOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGVkZ2UgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgICBlZGdlcy5wdXNoKGVkZ2UpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVkZ2VzO1xuICB9XG5cbiAgZ2V0RWRnZXNCeVRhcmdldFZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSkge1xuICAgIGNvbnN0IGVkZ2VzID0gW10sXG4gICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICBpZiAodGFyZ2V0VmVydGV4ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzID0gdGFyZ2V0VmVydGV4LmdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMoKSxcbiAgICAgICAgICAgIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMgPSB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhlcyhpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzKSxcbiAgICAgICAgICAgIHNvdXJjZVZlcnRleE5hbWVzID0gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lczsgIC8vL1xuXG4gICAgICBzb3VyY2VWZXJ0ZXhOYW1lcy5mb3JFYWNoKChzb3VyY2VWZXJ0ZXhOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGVkZ2UgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgICBlZGdlcy5wdXNoKGVkZ2UpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVkZ2VzO1xuICB9XG5cbiAgZ2V0Rmlyc3RDeWNsZSgpIHtcbiAgICBsZXQgZmlyc3RDeWNsZSA9IG51bGw7XG5cbiAgICBjb25zdCBjeWNsZXNQcmVzZW50ID0gdGhpcy5hcmVDeWNsZXNQcmVzZW50KCk7XG5cbiAgICBpZiAoY3ljbGVzUHJlc2VudCkge1xuICAgICAgY29uc3QgY3ljbGljRWRnZXMgPSB0aGlzLmdldEN5Y2xpY0VkZ2VzKCksXG4gICAgICAgICAgICBmaXJzdEN5Y2xpY0VkZ2UgPSBmaXJzdChjeWNsaWNFZGdlcyksXG4gICAgICAgICAgICBzb3VyY2VWZXJ0ZXhOYW1lID0gZmlyc3RDeWNsaWNFZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSwgLy8vXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gZmlyc3RDeWNsaWNFZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKSwgLy8vXG4gICAgICAgICAgICBzb3VyY2VWZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgICB0YXJnZXRWZXJ0ZXguZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoKCh2ZXJ0ZXgsIHByZWRlY2Vzc29yVmVydGV4ZXMpID0+IHtcbiAgICAgICAgbGV0IHRlcm1pbmF0ZSA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh2ZXJ0ZXggPT09IHNvdXJjZVZlcnRleCkge1xuICAgICAgICAgIHRlcm1pbmF0ZSA9IHRydWU7XG5cbiAgICAgICAgICBjb25zdCBjeWNsZSA9IEN5Y2xlLmZyb21Tb3VyY2VWZXJ0ZXhBbmRQcmVkZWNlc3NvclZlcnRleGVzKHNvdXJjZVZlcnRleCwgcHJlZGVjZXNzb3JWZXJ0ZXhlcyk7ICAvLy9cblxuICAgICAgICAgIGZpcnN0Q3ljbGUgPSBjeWNsZTsgLy8vXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGVybWluYXRlO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpcnN0Q3ljbGU7XG4gIH1cblxuICBnZXRDeWNsaWNFZGdlcygpIHtcbiAgICBjb25zdCBjeWNsaWNFZGdlcyA9IFtdLFxuICAgICAgICAgIHZlcnRleGVzID0gdGhpcy5nZXRWZXJ0ZXhlcygpO1xuXG4gICAgdmVydGV4ZXMuZm9yRWFjaCgodmVydGV4KSA9PiB7XG4gICAgICBjb25zdCBzb3VyY2VWZXJ0ZXggPSB2ZXJ0ZXgsICAvLy9cbiAgICAgICAgICAgIHNvdXJjZVZlcnRleEluZGV4ID0gc291cmNlVmVydGV4LmdldEluZGV4KCk7XG5cbiAgICAgIHZlcnRleC5mb3JFYWNoSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgpID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0VmVydGV4ID0gaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4LCAgLy8vXG4gICAgICAgICAgICAgIHRhcmdldFZlcnRleEluZGV4ID0gdGFyZ2V0VmVydGV4LmdldEluZGV4KCk7XG5cbiAgICAgICAgaWYgKHRhcmdldFZlcnRleEluZGV4IDwgc291cmNlVmVydGV4SW5kZXgpIHtcbiAgICAgICAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gc291cmNlVmVydGV4LmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gdGFyZ2V0VmVydGV4LmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICBlZGdlID0gRWRnZS5mcm9tU291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSksXG4gICAgICAgICAgICAgICAgY3ljbGljRWRnZSA9IGVkZ2U7ICAvLy9cblxuICAgICAgICAgIGN5Y2xpY0VkZ2VzLnB1c2goY3ljbGljRWRnZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBzb3VyY2VWZXJ0ZXhcbiAgICB9KTtcblxuICAgIHJldHVybiBjeWNsaWNFZGdlcztcbiAgfVxuXG4gIGFyZUN5Y2xlc1ByZXNlbnQoKSB7XG4gICAgY29uc3QgdmVydGV4ZXMgPSB0aGlzLmdldFZlcnRleGVzKCksXG4gICAgICAgICAgY3ljbGVzUHJlc2VudCA9IHZlcnRleGVzLnNvbWUoKHZlcnRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc291cmNlVmVydGV4ID0gdmVydGV4LCAgLy8vXG4gICAgICAgICAgICAgICAgICBzb3VyY2VWZXJ0ZXhJbmRleCA9IHNvdXJjZVZlcnRleC5nZXRJbmRleCgpLFxuICAgICAgICAgICAgICAgICAgY3ljbGljRWRnZVByZXNlbnQgPSB2ZXJ0ZXguc29tZUltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCgoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldFZlcnRleCA9IGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCwgIC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRWZXJ0ZXhJbmRleCA9IHRhcmdldFZlcnRleC5nZXRJbmRleCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRWZXJ0ZXhJbmRleCA8IHNvdXJjZVZlcnRleEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoY3ljbGljRWRnZVByZXNlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gY3ljbGVzUHJlc2VudDtcbiAgfVxuXG4gIGlzRWRnZVByZXNlbnQoZWRnZSkge1xuICAgIGxldCBlZGdlUHJlc2VudCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc291cmNlVmVydGV4TmFtZSA9IGVkZ2UuZ2V0U291cmNlVmVydGV4TmFtZSgpLFxuICAgICAgICAgIHNvdXJjZVZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpO1xuXG4gICAgaWYgKHNvdXJjZVZlcnRleCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdGFyZ2V0VmVydGV4TmFtZSA9IGVkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICAgIGlmICh0YXJnZXRWZXJ0ZXggIT09IG51bGwpIHtcbiAgICAgICAgZWRnZVByZXNlbnQgPSBzb3VyY2VWZXJ0ZXguaXNFZGdlUHJlc2VudEJ5VGFyZ2V0VmVydGV4KHRhcmdldFZlcnRleCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVkZ2VQcmVzZW50O1xuICB9XG5cbiAgaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBjb25zdCB2ZXJ0ZXhOYW1lcyA9IHRoaXMuZ2V0VmVydGV4TmFtZXMoKSxcbiAgICAgICAgICB2ZXJ0ZXhOYW1lc0luY2x1ZGVzVmVydGV4TmFtZSA9IHZlcnRleE5hbWVzLmluY2x1ZGVzKHZlcnRleE5hbWUpLFxuICAgICAgICAgIHZlcnRleFByZXNlbnQgPSB2ZXJ0ZXhOYW1lc0luY2x1ZGVzVmVydGV4TmFtZTsgIC8vL1xuXG4gICAgcmV0dXJuIHZlcnRleFByZXNlbnQ7XG4gIH1cblxuICBhZGRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGNvbnN0IHZlcnRleFByZXNlbnQgPSB0aGlzLmlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgIGlmICghdmVydGV4UHJlc2VudCkge1xuICAgICAgY29uc3QgdmVydGV4TmFtZXMgPSB0aGlzLmdldFZlcnRleE5hbWVzKCksXG4gICAgICAgICAgICB2ZXJ0ZXhOYW1lc0xlbmd0aCA9IHZlcnRleE5hbWVzLmxlbmd0aCxcbiAgICAgICAgICAgIG5hbWUgPSB2ZXJ0ZXhOYW1lLCAgLy8vXG4gICAgICAgICAgICBpbmRleCA9IHZlcnRleE5hbWVzTGVuZ3RoLCAvLy9cbiAgICAgICAgICAgIHZlcnRleCA9IFZlcnRleC5mcm9tTmFtZUFuZEluZGV4KG5hbWUsIGluZGV4KTtcblxuICAgICAgdGhpcy5zZXRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSwgdmVydGV4KTtcbiAgICB9XG5cbiAgICBjb25zdCB2ZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgIHJldHVybiB2ZXJ0ZXg7XG4gIH1cblxuICByZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGNvbnN0IHZlcnRleFByZXNlbnQgPSB0aGlzLmlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgIGlmICghdmVydGV4UHJlc2VudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgdmVydGV4LmZvckVhY2hJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoKGltbWVkaWF0ZVN1Y2Nlc3NWZXJ0ZXgpID0+IHtcbiAgICAgIGNvbnN0IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ID0gdmVydGV4OyAgLy8vXG5cbiAgICAgIGltbWVkaWF0ZVN1Y2Nlc3NWZXJ0ZXgucmVtb3ZlSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpO1xuICAgIH0pO1xuXG4gICAgdmVydGV4LmZvckVhY2hJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCgoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpID0+IHtcbiAgICAgIGNvbnN0IGltbWVkaWF0ZVN1Y2Nlc3NWZXJ0ZXggPSB2ZXJ0ZXg7ICAvLy9cblxuICAgICAgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgucmVtb3ZlSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KGltbWVkaWF0ZVN1Y2Nlc3NWZXJ0ZXgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5kZWxldGVWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICBjb25zdCB2ZXJ0ZXhlcyA9IHRoaXMuZ2V0VmVydGV4ZXMoKSxcbiAgICAgICAgICBkZWxldGVkVmVydGV4ID0gdmVydGV4LCAvLy9cbiAgICAgICAgICBkZWxldGVkVmVydGV4SW5kZXggPSBkZWxldGVkVmVydGV4LmdldEluZGV4KCk7XG5cbiAgICB2ZXJ0ZXhlcy5mb3JFYWNoKCh2ZXJ0ZXgpID0+IHtcbiAgICAgIGNvbnN0IHZlcnRleEluZGV4ID0gdmVydGV4LmdldEluZGV4KCk7XG5cbiAgICAgIGlmICh2ZXJ0ZXhJbmRleCA+IGRlbGV0ZWRWZXJ0ZXhJbmRleCkge1xuICAgICAgICB2ZXJ0ZXguZGVjcmVtZW50SW5kZXgoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuZmlsdGVyQ3ljbGljRWRnZXMoKTtcbiAgfVxuXG4gIGFkZEVkZ2UoZWRnZSkge1xuICAgIGNvbnN0IHNvdXJjZVZlcnRleE5hbWUgPSBlZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSxcbiAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gZWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCk7XG5cbiAgICBpZiAoc291cmNlVmVydGV4TmFtZSA9PT0gdGFyZ2V0VmVydGV4TmFtZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNvdXJjZVZlcnRleCA9IHRoaXMuYWRkVmVydGV4QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpLFxuICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuYWRkVmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpLFxuICAgICAgICAgIGVkZ2VQcmVzZW50ID0gc291cmNlVmVydGV4LmlzRWRnZVByZXNlbnRCeVRhcmdldFZlcnRleCh0YXJnZXRWZXJ0ZXgpO1xuXG4gICAgaWYgKGVkZ2VQcmVzZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc291cmNlVmVydGV4SW5kZXggPSBzb3VyY2VWZXJ0ZXguZ2V0SW5kZXgoKSxcbiAgICAgICAgICB0YXJnZXRWZXJ0ZXhJbmRleCA9IHRhcmdldFZlcnRleC5nZXRJbmRleCgpO1xuXG4gICAgaWYgKHNvdXJjZVZlcnRleEluZGV4ID4gdGFyZ2V0VmVydGV4SW5kZXgpIHtcbiAgICAgIHRoaXMucmVvcmRlclZlcnRleGVzQnlTb3VyY2VWZXJ0ZXhBbmRUYXJnZXRWZXJ0ZXgoc291cmNlVmVydGV4LCB0YXJnZXRWZXJ0ZXgpO1xuICAgIH1cblxuICAgIGNvbnN0IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ID0gc291cmNlVmVydGV4LCAvLy9cbiAgICAgICAgICBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXggPSB0YXJnZXRWZXJ0ZXg7IC8vL1xuXG4gICAgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXguYWRkSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCk7XG5cbiAgICBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXguYWRkSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpO1xuICB9XG5cbiAgYWRkRWRnZXMoZWRnZXMpIHtcbiAgICBlZGdlcy5mb3JFYWNoKChlZGdlKSA9PiB7XG4gICAgICB0aGlzLmFkZEVkZ2UoZWRnZSk7XG4gICAgfSk7XG4gIH1cblxuICByZW1vdmVFZGdlKGVkZ2UsIHJlbW92ZVN0cmFuZGVkVmVydGV4ZXMpIHtcbiAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gZWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IGVkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgIHNvdXJjZVZlcnRleCA9IHRoaXMuYWRkVmVydGV4QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpLFxuICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuYWRkVmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpLFxuICAgICAgICAgIGVkZ2VQcmVzZW50ID0gc291cmNlVmVydGV4LmlzRWRnZVByZXNlbnRCeVRhcmdldFZlcnRleCh0YXJnZXRWZXJ0ZXgpO1xuXG4gICAgaWYgKCFlZGdlUHJlc2VudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNvdXJjZVZlcnRleC5yZW1vdmVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgodGFyZ2V0VmVydGV4KTtcblxuICAgIHRhcmdldFZlcnRleC5yZW1vdmVJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleChzb3VyY2VWZXJ0ZXgpO1xuXG4gICAgaWYgKHJlbW92ZVN0cmFuZGVkVmVydGV4ZXMpIHtcbiAgICAgIGNvbnN0IHNvdXJjZVZlcnRleFN0cmFuZGVkID0gc291cmNlVmVydGV4LmlzU3RyYW5kZWQoKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleFN0cmFuZGVkID0gdGFyZ2V0VmVydGV4LmlzU3RyYW5kZWQoKTtcblxuICAgICAgaWYgKHNvdXJjZVZlcnRleFN0cmFuZGVkKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGFyZ2V0VmVydGV4U3RyYW5kZWQpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5maWx0ZXJDeWNsaWNFZGdlcygpO1xuICB9XG5cbiAgcmVtb3ZlRWRnZXMoZWRnZXMsIHJlbW92ZVN0cmFuZGVkVmVydGV4ZXMgPSBmYWxzZSkge1xuICAgIGVkZ2VzLmZvckVhY2goKGVkZ2UpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlRWRnZShlZGdlLCByZW1vdmVTdHJhbmRlZFZlcnRleGVzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZUFsbEVkZ2VzQW5kVmVydGV4ZXMoKSB7XG4gICAgdGhpcy52ZXJ0ZXhNYXAgPSB7fTtcbiAgfVxuXG4gIHJlb3JkZXJWZXJ0ZXhlc0J5U291cmNlVmVydGV4QW5kVGFyZ2V0VmVydGV4KHNvdXJjZVZlcnRleCwgdGFyZ2V0VmVydGV4KSB7XG4gICAgY29uc3Qgc291cmNlVmVydGV4UmVhY2hhYmxlID0gdGFyZ2V0VmVydGV4LmlzVmVydGV4UmVhY2hhYmxlKHNvdXJjZVZlcnRleCk7XG5cbiAgICBpZiAoc291cmNlVmVydGV4UmVhY2hhYmxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZm9yd2FyZHNWaXNpdGVkVmVydGV4ZXMgPSB0YXJnZXRWZXJ0ZXgucmV0cmlldmVGb3J3YXJkc1Zpc2l0ZWRWZXJ0ZXhlcygpLFxuICAgICAgICAgIGJhY2t3YXJkc1Zpc2l0ZWRWZXJ0ZXhlcyA9IHNvdXJjZVZlcnRleC5yZXRyaWV2ZUJhY2t3YXJkc1Zpc2l0ZWRWZXJ0ZXhlcygpO1xuXG4gICAgb3JkZXJWZXJ0ZXhlcyhiYWNrd2FyZHNWaXNpdGVkVmVydGV4ZXMpO1xuXG4gICAgb3JkZXJWZXJ0ZXhlcyhmb3J3YXJkc1Zpc2l0ZWRWZXJ0ZXhlcyk7XG5cbiAgICBjb25zdCB2aXNpdGVkVmVydGV4ZXMgPSBbXG4gICAgICAgICAgICAuLi5iYWNrd2FyZHNWaXNpdGVkVmVydGV4ZXMsXG4gICAgICAgICAgICAuLi5mb3J3YXJkc1Zpc2l0ZWRWZXJ0ZXhlc1xuICAgICAgICAgIF0sXG4gICAgICAgICAgdmlzaXRlZEluZGV4ZXMgPSBpbmRleGVzRnJvbVZlcnRleGVzKHZpc2l0ZWRWZXJ0ZXhlcyk7XG5cbiAgICBvcmRlckluZGV4ZXModmlzaXRlZEluZGV4ZXMpO1xuXG4gICAgdmlzaXRlZFZlcnRleGVzLmZvckVhY2goKHZpc2l0ZWRWZXJ0ZXgsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCB2aXNpdGVkSW5kZXggPSB2aXNpdGVkSW5kZXhlc1tpbmRleF07XG5cbiAgICAgIGluZGV4ID0gdmlzaXRlZEluZGV4OyAvLy9cblxuICAgICAgdmlzaXRlZFZlcnRleC5zZXRJbmRleChpbmRleCk7XG4gICAgfSk7XG4gIH1cblxuICBmaWx0ZXJDeWNsaWNFZGdlcygpIHtcbiAgICBjb25zdCBjeWNsaWNFZGdlcyA9IHRoaXMuZ2V0Q3ljbGljRWRnZXMoKSxcbiAgICAgICAgICBlZGdlcyA9IGN5Y2xpY0VkZ2VzOyAgLy8vXG5cbiAgICB0aGlzLnJlbW92ZUVkZ2VzKGVkZ2VzKTtcblxuICAgIHRoaXMuYWRkRWRnZXMoZWRnZXMpO1xuICB9XG5cbiAgc2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUsIHZlcnRleCkge1xuICAgIHRoaXMudmVydGV4TWFwW3ZlcnRleE5hbWVdID0gdmVydGV4O1xuICB9XG5cbiAgZGVsZXRlVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBkZWxldGUgdGhpcy52ZXJ0ZXhNYXBbdmVydGV4TmFtZV07XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgdmVydGV4TWFwID0ge30sXG4gICAgICAgICAgZGlyZWN0ZWRHcmFwaCA9IG5ldyBEaXJlY3RlZEdyYXBoKHZlcnRleE1hcCk7XG4gICAgXG4gICAgcmV0dXJuIGRpcmVjdGVkR3JhcGg7ICAgIFxuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkRpcmVjdGVkR3JhcGgiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwidmVydGV4TWFwIiwiZ2V0VmVydGV4TmFwIiwiZ2V0VmVydGV4ZXMiLCJ2ZXJ0ZXhNYXBWYWx1ZXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJ2ZXJ0ZXhlcyIsImdldFZlcnRleE5hbWVzIiwidmVydGV4TWFwS2V5cyIsImtleXMiLCJ2ZXJ0ZXhOYW1lcyIsImdldE9yZGVyZWRWZXJ0ZXhOYW1lcyIsIm9yZGVyVmVydGV4ZXMiLCJvcmRlcmVkVmVydGV4ZXMiLCJvcmRlcmVkVmVydGV4TmFtZXMiLCJ2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhlcyIsImdldFZlcnRleEJ5VmVydGV4TmFtZSIsInZlcnRleE5hbWUiLCJ2ZXJ0ZXhQcmVzZW50IiwiaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lIiwidmVydGV4IiwiZ2V0RWRnZXNCeVNvdXJjZVZlcnRleE5hbWUiLCJzb3VyY2VWZXJ0ZXhOYW1lIiwiZWRnZXMiLCJzb3VyY2VWZXJ0ZXgiLCJpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcyIsImdldEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzIiwiaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXMiLCJ0YXJnZXRWZXJ0ZXhOYW1lcyIsImZvckVhY2giLCJ0YXJnZXRWZXJ0ZXhOYW1lIiwiZWRnZSIsIkVkZ2UiLCJmcm9tU291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUiLCJwdXNoIiwiZ2V0RWRnZXNCeVRhcmdldFZlcnRleE5hbWUiLCJ0YXJnZXRWZXJ0ZXgiLCJpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzIiwiZ2V0SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcyIsImltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMiLCJzb3VyY2VWZXJ0ZXhOYW1lcyIsImdldEZpcnN0Q3ljbGUiLCJmaXJzdEN5Y2xlIiwiY3ljbGVzUHJlc2VudCIsImFyZUN5Y2xlc1ByZXNlbnQiLCJjeWNsaWNFZGdlcyIsImdldEN5Y2xpY0VkZ2VzIiwiZmlyc3RDeWNsaWNFZGdlIiwiZ2V0U291cmNlVmVydGV4TmFtZSIsImdldFRhcmdldFZlcnRleE5hbWUiLCJmb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2giLCJwcmVkZWNlc3NvclZlcnRleGVzIiwidGVybWluYXRlIiwiY3ljbGUiLCJDeWNsZSIsImZyb21Tb3VyY2VWZXJ0ZXhBbmRQcmVkZWNlc3NvclZlcnRleGVzIiwic291cmNlVmVydGV4SW5kZXgiLCJnZXRJbmRleCIsImZvckVhY2hJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgiLCJpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgiLCJ0YXJnZXRWZXJ0ZXhJbmRleCIsImdldE5hbWUiLCJjeWNsaWNFZGdlIiwic29tZSIsImN5Y2xpY0VkZ2VQcmVzZW50Iiwic29tZUltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCIsImlzRWRnZVByZXNlbnQiLCJlZGdlUHJlc2VudCIsImlzRWRnZVByZXNlbnRCeVRhcmdldFZlcnRleCIsInZlcnRleE5hbWVzSW5jbHVkZXNWZXJ0ZXhOYW1lIiwiaW5jbHVkZXMiLCJhZGRWZXJ0ZXhCeVZlcnRleE5hbWUiLCJ2ZXJ0ZXhOYW1lc0xlbmd0aCIsImxlbmd0aCIsIm5hbWUiLCJpbmRleCIsIlZlcnRleCIsImZyb21OYW1lQW5kSW5kZXgiLCJzZXRWZXJ0ZXhCeVZlcnRleE5hbWUiLCJyZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUiLCJpbW1lZGlhdGVTdWNjZXNzVmVydGV4IiwiaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgiLCJyZW1vdmVJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCIsImZvckVhY2hJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCIsInJlbW92ZUltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCIsImRlbGV0ZVZlcnRleEJ5VmVydGV4TmFtZSIsImRlbGV0ZWRWZXJ0ZXgiLCJkZWxldGVkVmVydGV4SW5kZXgiLCJ2ZXJ0ZXhJbmRleCIsImRlY3JlbWVudEluZGV4IiwiZmlsdGVyQ3ljbGljRWRnZXMiLCJhZGRFZGdlIiwicmVvcmRlclZlcnRleGVzQnlTb3VyY2VWZXJ0ZXhBbmRUYXJnZXRWZXJ0ZXgiLCJhZGRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgiLCJhZGRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCIsImFkZEVkZ2VzIiwicmVtb3ZlRWRnZSIsInJlbW92ZVN0cmFuZGVkVmVydGV4ZXMiLCJzb3VyY2VWZXJ0ZXhTdHJhbmRlZCIsImlzU3RyYW5kZWQiLCJ0YXJnZXRWZXJ0ZXhTdHJhbmRlZCIsInJlbW92ZUVkZ2VzIiwicmVtb3ZlQWxsRWRnZXNBbmRWZXJ0ZXhlcyIsInNvdXJjZVZlcnRleFJlYWNoYWJsZSIsImlzVmVydGV4UmVhY2hhYmxlIiwiZm9yd2FyZHNWaXNpdGVkVmVydGV4ZXMiLCJyZXRyaWV2ZUZvcndhcmRzVmlzaXRlZFZlcnRleGVzIiwiYmFja3dhcmRzVmlzaXRlZFZlcnRleGVzIiwicmV0cmlldmVCYWNrd2FyZHNWaXNpdGVkVmVydGV4ZXMiLCJ2aXNpdGVkVmVydGV4ZXMiLCJ2aXNpdGVkSW5kZXhlcyIsImluZGV4ZXNGcm9tVmVydGV4ZXMiLCJvcmRlckluZGV4ZXMiLCJ2aXNpdGVkVmVydGV4IiwidmlzaXRlZEluZGV4Iiwic2V0SW5kZXgiLCJmcm9tTm90aGluZyIsImRpcmVjdGVkR3JhcGgiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBYXFCQTs7O3lCQVhVOzJEQUVkOzREQUNDOzZEQUNDO3FCQUUrQjt1QkFDSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkQsSUFBTSxBQUFFQyxRQUFVQywwQkFBVkQ7QUFFTyxJQUFBLEFBQU1ELDhCQUFOO2FBQU1BLGNBQ1BHLFNBQVM7Z0NBREZIO1FBRWpCLElBQUksQ0FBQ0csWUFBWUE7O2tCQUZBSDs7WUFLbkJJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0Q7WUFDZDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxrQkFBa0JDLE9BQU9DLE9BQU8sSUFBSSxDQUFDTCxZQUNyQ00sV0FBV0gsaUJBQWlCLEdBQUc7Z0JBRXJDLE9BQU9HO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsZ0JBQWdCSixPQUFPSyxLQUFLLElBQUksQ0FBQ1QsWUFDakNVLGNBQWNGLGVBQWdCLEdBQUc7Z0JBRXZDLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUwsV0FBVyxJQUFJLENBQUNKO2dCQUV0QlUsSUFBQUEsd0JBQWNOO2dCQUVkLElBQU1PLGtCQUFrQlAsVUFDbEJRLHFCQUFxQkMsSUFBQUEsa0NBQXdCRjtnQkFFbkQsT0FBT0M7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0JDLFVBQVU7Z0JBQzlCLElBQU1DLGdCQUFnQixJQUFJLENBQUNDLDRCQUE0QkYsYUFDakRHLFNBQVNGLGdCQUNFLElBQUksQ0FBQ2xCLFNBQVMsQ0FBQ2lCLFdBQVcsR0FDeEI7Z0JBRW5CLE9BQU9HO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsMkJBQTJCQyxnQkFBZ0I7Z0JBQ3pDLElBQU1DLFFBQVEsRUFBRSxFQUNWQyxlQUFlLElBQUksQ0FBQ1Isc0JBQXNCTTtnQkFFaEQsSUFBSUUsaUJBQWlCLE1BQU07b0JBQ3pCLElBQU1DLDZCQUE2QkQsYUFBYUUsaUNBQzFDQyxnQ0FBZ0NaLElBQUFBLGtDQUF3QlUsNkJBQ3hERyxvQkFBb0JELCtCQUFnQyxHQUFHO29CQUU3REMsa0JBQWtCQyxRQUFRLFNBQUNDO3dCQUN6QixJQUFNQyxPQUFPQyxjQUFLQyx3Q0FBd0NYLGtCQUFrQlE7d0JBRTVFUCxNQUFNVyxLQUFLSDtvQkFDYjtnQkFDRjtnQkFFQSxPQUFPUjtZQUNUOzs7WUFFQVksS0FBQUE7bUJBQUFBLFNBQUFBLDJCQUEyQkwsZ0JBQWdCO2dCQUN6QyxJQUFNUCxRQUFRLEVBQUUsRUFDVmEsZUFBZSxJQUFJLENBQUNwQixzQkFBc0JjO2dCQUVoRCxJQUFJTSxpQkFBaUIsTUFBTTtvQkFDekIsSUFBTUMsK0JBQStCRCxhQUFhRSxtQ0FDNUNDLGtDQUFrQ3hCLElBQUFBLGtDQUF3QnNCLCtCQUMxREcsb0JBQW9CRCxpQ0FBa0MsR0FBRztvQkFFL0RDLGtCQUFrQlgsUUFBUSxTQUFDUDt3QkFDekIsSUFBTVMsT0FBT0MsY0FBS0Msd0NBQXdDWCxrQkFBa0JRO3dCQUU1RVAsTUFBTVcsS0FBS0g7b0JBQ2I7Z0JBQ0Y7Z0JBRUEsT0FBT1I7WUFDVDs7O1lBRUFrQixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsYUFBYTtnQkFFakIsSUFBTUMsZ0JBQWdCLElBQUksQ0FBQ0M7Z0JBRTNCLElBQUlELGVBQWU7b0JBQ2pCLElBQU1FLGNBQWMsSUFBSSxDQUFDQyxrQkFDbkJDLGtCQUFrQmpELE1BQU0rQyxjQUN4QnZCLG1CQUFtQnlCLGdCQUFnQkMsdUJBQ25DbEIsbUJBQW1CaUIsZ0JBQWdCRSx1QkFDbkN6QixlQUFlLElBQUksQ0FBQ1Isc0JBQXNCTSxtQkFDMUNjLGVBQWUsSUFBSSxDQUFDcEIsc0JBQXNCYztvQkFFaERNLGFBQWFjLHlCQUF5QixTQUFDOUIsUUFBUStCO3dCQUM3QyxJQUFJQyxZQUFZO3dCQUVoQixJQUFJaEMsV0FBV0ksY0FBYzs0QkFDM0I0QixZQUFZOzRCQUVaLElBQU1DLFFBQVFDLGVBQU1DLHVDQUF1Qy9CLGNBQWMyQixzQkFBdUIsR0FBRzs0QkFFbkdULGFBQWFXLE9BQU8sR0FBRzt3QkFDekI7d0JBRUEsT0FBT0Q7b0JBQ1Q7Z0JBQ0Y7Z0JBRUEsT0FBT1Y7WUFDVDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNRCxjQUFjLEVBQUUsRUFDaEJ2QyxXQUFXLElBQUksQ0FBQ0o7Z0JBRXRCSSxTQUFTdUIsUUFBUSxTQUFDVDtvQkFDaEIsSUFBTUksZUFBZUosUUFDZm9DLG9CQUFvQmhDLGFBQWFpQztvQkFFdkNyQyxPQUFPc0MsZ0NBQWdDLFNBQUNDO3dCQUN0QyxJQUFNdkIsZUFBZXVCLDBCQUNmQyxvQkFBb0J4QixhQUFhcUI7d0JBRXZDLElBQUlHLG9CQUFvQkosbUJBQW1COzRCQUN6QyxJQUFNbEMsbUJBQW1CRSxhQUFhcUMsV0FDaEMvQixtQkFBbUJNLGFBQWF5QixXQUNoQzlCLE9BQU9DLGNBQUtDLHdDQUF3Q1gsa0JBQWtCUSxtQkFDdEVnQyxhQUFhL0IsTUFBTyxHQUFHOzRCQUU3QmMsWUFBWVgsS0FBSzRCO3dCQUNuQjtvQkFDRjtvQkFFQXRDO2dCQUNGO2dCQUVBLE9BQU9xQjtZQUNUOzs7WUFFQUQsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU10QyxXQUFXLElBQUksQ0FBQ0osZUFDaEJ5QyxnQkFBZ0JyQyxTQUFTeUQsS0FBSyxTQUFDM0M7b0JBQzdCLElBQU1JLGVBQWVKLFFBQ2ZvQyxvQkFBb0JoQyxhQUFhaUMsWUFDakNPLG9CQUFvQjVDLE9BQU82Qyw2QkFBNkIsU0FBQ047d0JBQ3ZELElBQU12QixlQUFldUIsMEJBQ2ZDLG9CQUFvQnhCLGFBQWFxQjt3QkFFdkMsSUFBSUcsb0JBQW9CSixtQkFBbUI7NEJBQ3pDLE9BQU87d0JBQ1Q7b0JBQ0Y7b0JBRU4sSUFBSVEsbUJBQW1CO3dCQUNyQixPQUFPO29CQUNUO2dCQUNGO2dCQUVOLE9BQU9yQjtZQUNUOzs7WUFFQXVCLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjbkMsSUFBSTtnQkFDaEIsSUFBSW9DLGNBQWM7Z0JBRWxCLElBQU03QyxtQkFBbUJTLEtBQUtpQix1QkFDeEJ4QixlQUFlLElBQUksQ0FBQ1Isc0JBQXNCTTtnQkFFaEQsSUFBSUUsaUJBQWlCLE1BQU07b0JBQ3pCLElBQU1NLG1CQUFtQkMsS0FBS2tCLHVCQUN4QmIsZUFBZSxJQUFJLENBQUNwQixzQkFBc0JjO29CQUVoRCxJQUFJTSxpQkFBaUIsTUFBTTt3QkFDekIrQixjQUFjM0MsYUFBYTRDLDRCQUE0QmhDO29CQUN6RDtnQkFDRjtnQkFFQSxPQUFPK0I7WUFDVDs7O1lBRUFoRCxLQUFBQTttQkFBQUEsU0FBQUEsNEJBQTRCRixVQUFVO2dCQUNwQyxJQUFNUCxjQUFjLElBQUksQ0FBQ0gsa0JBQ25COEQsZ0NBQWdDM0QsWUFBWTRELFNBQVNyRCxhQUNyREMsZ0JBQWdCbUQsK0JBQWdDLEdBQUc7Z0JBRXpELE9BQU9uRDtZQUNUOzs7WUFFQXFELEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0J0RCxVQUFVO2dCQUM5QixJQUFNQyxnQkFBZ0IsSUFBSSxDQUFDQyw0QkFBNEJGO2dCQUV2RCxJQUFJLENBQUNDLGVBQWU7b0JBQ2xCLElBQU1SLGNBQWMsSUFBSSxDQUFDSCxrQkFDbkJpRSxvQkFBb0I5RCxZQUFZK0QsUUFDaENDLE9BQU96RCxZQUNQMEQsUUFBUUgsbUJBQ1JwRCxTQUFTd0QsZ0JBQU9DLGlCQUFpQkgsTUFBTUM7b0JBRTdDLElBQUksQ0FBQ0csc0JBQXNCN0QsWUFBWUc7Z0JBQ3pDO2dCQUVBLElBQU1BLFVBQVMsSUFBSSxDQUFDSixzQkFBc0JDO2dCQUUxQyxPQUFPRztZQUNUOzs7WUFFQTJELEtBQUFBO21CQUFBQSxTQUFBQSx5QkFBeUI5RCxVQUFVO2dCQUNqQyxJQUFNQyxnQkFBZ0IsSUFBSSxDQUFDQyw0QkFBNEJGO2dCQUV2RCxJQUFJLENBQUNDLGVBQWU7b0JBQ2xCO2dCQUNGO2dCQUVBLElBQU1FLFNBQVMsSUFBSSxDQUFDSixzQkFBc0JDO2dCQUUxQ0csT0FBT3NDLGdDQUFnQyxTQUFDc0I7b0JBQ3RDLElBQU1DLDZCQUE2QjdELFFBQVMsR0FBRztvQkFFL0M0RCx1QkFBdUJFLGlDQUFpQ0Q7Z0JBQzFEO2dCQUVBN0QsT0FBTytELGtDQUFrQyxTQUFDRjtvQkFDeEMsSUFBTUQseUJBQXlCNUQsUUFBUyxHQUFHO29CQUUzQzZELDJCQUEyQkcsK0JBQStCSjtnQkFDNUQ7Z0JBRUEsSUFBSSxDQUFDSyx5QkFBeUJwRTtnQkFFOUIsSUFBTVgsV0FBVyxJQUFJLENBQUNKLGVBQ2hCb0YsZ0JBQWdCbEUsUUFDaEJtRSxxQkFBcUJELGNBQWM3QjtnQkFFekNuRCxTQUFTdUIsUUFBUSxTQUFDVDtvQkFDaEIsSUFBTW9FLGNBQWNwRSxPQUFPcUM7b0JBRTNCLElBQUkrQixjQUFjRCxvQkFBb0I7d0JBQ3BDbkUsT0FBT3FFO29CQUNUO2dCQUNGO2dCQUVBLElBQUksQ0FBQ0M7WUFDUDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRNUQsSUFBSTtnQkFDVixJQUFNVCxtQkFBbUJTLEtBQUtpQix1QkFDeEJsQixtQkFBbUJDLEtBQUtrQjtnQkFFOUIsSUFBSTNCLHFCQUFxQlEsa0JBQWtCO29CQUN6QztnQkFDRjtnQkFFQSxJQUFNTixlQUFlLElBQUksQ0FBQytDLHNCQUFzQmpELG1CQUMxQ2MsZUFBZSxJQUFJLENBQUNtQyxzQkFBc0J6QyxtQkFDMUNxQyxjQUFjM0MsYUFBYTRDLDRCQUE0QmhDO2dCQUU3RCxJQUFJK0IsYUFBYTtvQkFDZjtnQkFDRjtnQkFFQSxJQUFNWCxvQkFBb0JoQyxhQUFhaUMsWUFDakNHLG9CQUFvQnhCLGFBQWFxQjtnQkFFdkMsSUFBSUQsb0JBQW9CSSxtQkFBbUI7b0JBQ3pDLElBQUksQ0FBQ2dDLDZDQUE2Q3BFLGNBQWNZO2dCQUNsRTtnQkFFQSxJQUFNNkMsNkJBQTZCekQsY0FDN0JtQywyQkFBMkJ2QixjQUFjLEdBQUc7Z0JBRWxENkMsMkJBQTJCWSw0QkFBNEJsQztnQkFFdkRBLHlCQUF5Qm1DLDhCQUE4QmI7WUFDekQ7OztZQUVBYyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU3hFLEtBQUs7O2dCQUNaQSxNQUFNTSxRQUFRLFNBQUNFO29CQUNiLE1BQUs0RCxRQUFRNUQ7Z0JBQ2Y7WUFDRjs7O1lBRUFpRSxLQUFBQTttQkFBQUEsU0FBQUEsV0FBV2pFLElBQUksRUFBRWtFLHNCQUFzQjtnQkFDckMsSUFBTTNFLG1CQUFtQlMsS0FBS2lCLHVCQUN4QmxCLG1CQUFtQkMsS0FBS2tCLHVCQUN4QnpCLGVBQWUsSUFBSSxDQUFDK0Msc0JBQXNCakQsbUJBQzFDYyxlQUFlLElBQUksQ0FBQ21DLHNCQUFzQnpDLG1CQUMxQ3FDLGNBQWMzQyxhQUFhNEMsNEJBQTRCaEM7Z0JBRTdELElBQUksQ0FBQytCLGFBQWE7b0JBQ2hCO2dCQUNGO2dCQUVBM0MsYUFBYTRELCtCQUErQmhEO2dCQUU1Q0EsYUFBYThDLGlDQUFpQzFEO2dCQUU5QyxJQUFJeUUsd0JBQXdCO29CQUMxQixJQUFNQyx1QkFBdUIxRSxhQUFhMkUsY0FDcENDLHVCQUF1QmhFLGFBQWErRDtvQkFFMUMsSUFBSUQsc0JBQXNCO3dCQUN4QixJQUFJLENBQUNuQix5QkFBeUJ6RDtvQkFDaEM7b0JBRUEsSUFBSThFLHNCQUFzQjt3QkFDeEIsSUFBSSxDQUFDckIseUJBQXlCakQ7b0JBQ2hDO2dCQUNGO2dCQUVBLElBQUksQ0FBQzREO1lBQ1A7OztZQUVBVyxLQUFBQTttQkFBQUEsU0FBQUEsWUFBWTlFLEtBQUs7b0JBQUUwRSx5QkFBQUEsaUVBQXlCOztnQkFDMUMxRSxNQUFNTSxRQUFRLFNBQUNFO29CQUNiLE1BQUtpRSxXQUFXakUsTUFBTWtFO2dCQUN4QjtZQUNGOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ3RHLFlBQVksQ0FBQztZQUNwQjs7O1lBRUE0RixLQUFBQTttQkFBQUEsU0FBQUEsNkNBQTZDcEUsWUFBWSxFQUFFWSxZQUFZO2dCQUNyRSxJQUFNbUUsd0JBQXdCbkUsYUFBYW9FLGtCQUFrQmhGO2dCQUU3RCxJQUFJK0UsdUJBQXVCO29CQUN6QjtnQkFDRjtnQkFFQSxJQUFNRSwwQkFBMEJyRSxhQUFhc0UsbUNBQ3ZDQywyQkFBMkJuRixhQUFhb0Y7Z0JBRTlDaEcsSUFBQUEsd0JBQWMrRjtnQkFFZC9GLElBQUFBLHdCQUFjNkY7Z0JBRWQsSUFBTUksa0JBQWtCLEFBQ2hCLHFCQUFHRixpQ0FDSCxxQkFBR0YsMkJBRUxLLGlCQUFpQkMsSUFBQUEsNEJBQW9CRjtnQkFFM0NHLElBQUFBLHFCQUFhRjtnQkFFYkQsZ0JBQWdCaEYsUUFBUSxTQUFDb0YsZUFBZXRDO29CQUN0QyxJQUFNdUMsZUFBZUosY0FBYyxDQUFDbkMsTUFBTTtvQkFFMUNBLFFBQVF1QyxjQUFjLEdBQUc7b0JBRXpCRCxjQUFjRSxTQUFTeEM7Z0JBQ3pCO1lBQ0Y7OztZQUVBZSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTTdDLGNBQWMsSUFBSSxDQUFDQyxrQkFDbkJ2QixRQUFRc0IsYUFBYyxHQUFHO2dCQUUvQixJQUFJLENBQUN3RCxZQUFZOUU7Z0JBRWpCLElBQUksQ0FBQ3dFLFNBQVN4RTtZQUNoQjs7O1lBRUF1RCxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCN0QsVUFBVSxFQUFFRyxNQUFNO2dCQUN0QyxJQUFJLENBQUNwQixTQUFTLENBQUNpQixXQUFXLEdBQUdHO1lBQy9COzs7WUFFQWlFLEtBQUFBO21CQUFBQSxTQUFBQSx5QkFBeUJwRSxVQUFVO2dCQUNqQyxPQUFPLElBQUksQ0FBQ2pCLFNBQVMsQ0FBQ2lCLFdBQVc7WUFDbkM7Ozs7WUFFT21HLEtBQUFBO21CQUFQLFNBQU9BO2dCQUNMLElBQU1wSCxZQUFZLENBQUMsR0FDYnFILGdCQUFnQixJQXBYTHhILGNBb1h1Qkc7Z0JBRXhDLE9BQU9xSDtZQUNUOzs7V0F2WG1CeEgifQ==