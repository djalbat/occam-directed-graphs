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
var _edge1 = require("./utilities/edge");
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
var first = _necessary.arrayUtilities.first, filter = _necessary.arrayUtilities.filter;
var DirectedGraph = /*#__PURE__*/ function() {
    function DirectedGraph(vertexMap, cyclicEdges) {
        _class_call_check(this, DirectedGraph);
        this.vertexMap = vertexMap;
        this.cyclicEdges = cyclicEdges;
    }
    _create_class(DirectedGraph, [
        {
            key: "getVertexNap",
            value: function getVertexNap() {
                return this.vertexMap;
            }
        },
        {
            key: "getCyclicEdges",
            value: function getCyclicEdges() {
                return this.cyclicEdges;
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
                    var firstCyclicEdge = first(this.cyclicEdges), sourceVertexName = firstCyclicEdge.getSourceVertexName(), targetVertexName = firstCyclicEdge.getTargetVertexName(), sourceVertex = this.getVertexByVertexName(sourceVertexName), targetVertex = this.getVertexByVertexName(targetVertexName);
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
            key: "areCyclesPresent",
            value: function areCyclesPresent() {
                var cyclicEdgesLength = this.cyclicEdges.length, cyclesPresent = cyclicEdgesLength > 0;
                return cyclesPresent;
            }
        },
        {
            key: "isEdgePresent",
            value: function isEdgePresent(edge) {
                var edgePresent = false;
                if (!edgePresent) {
                    var cyclicEdge = edge, cyclicEdgePresent = this.isCyclicEdgePresent(cyclicEdge);
                    edgePresent = cyclicEdgePresent; ///
                }
                if (!edgePresent) {
                    var nonCyclicEdge = edge, nonCyclicEdgePresent = this.isNonCyclicEdgePresent(nonCyclicEdge);
                    edgePresent = nonCyclicEdgePresent; ///
                }
                return edgePresent;
            }
        },
        {
            key: "isCyclicEdgePresent",
            value: function isCyclicEdgePresent(cyclicEdge) {
                var cyclicEdgesIncludesEdge = (0, _edge1.checkEdgesIncludesEdge)(this.cyclicEdges, cyclicEdge), cyclicEdgePresent = cyclicEdgesIncludesEdge; ///
                return cyclicEdgePresent;
            }
        },
        {
            key: "isNonCyclicEdgePresent",
            value: function isNonCyclicEdgePresent(edge) {
                var nonCyclicEdgePresent = false;
                var sourceVertexName = edge.getSourceVertexName(), sourceVertex = this.getVertexByVertexName(sourceVertexName);
                if (sourceVertex !== null) {
                    var targetVertexName = edge.getTargetVertexName(), targetVertex = this.getVertexByVertexName(targetVertexName);
                    if (targetVertex !== null) {
                        var edgePresent = sourceVertex.isEdgePresentByTargetVertex(targetVertex);
                        nonCyclicEdgePresent = edgePresent; ///
                    }
                }
                return nonCyclicEdgePresent;
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
                var nonCyclicEdge = edge, success = this.addNonCyclicEdge(nonCyclicEdge);
                if (!success) {
                    var cyclicEdge = edge; ///
                    this.addCyclicEdge(cyclicEdge);
                }
                return success;
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
            key: "addCyclicEdge",
            value: function addCyclicEdge(cyclicEdge) {
                var cyclicEdgesIncludesCyclicEdge = (0, _edge1.checkEdgesIncludesEdge)(this.cyclicEdges, cyclicEdge);
                if (!cyclicEdgesIncludesCyclicEdge) {
                    this.cyclicEdges.push(cyclicEdge);
                }
            }
        },
        {
            key: "addNonCyclicEdge",
            value: function addNonCyclicEdge(nonCyclicEdge) {
                var success = true;
                var sourceVertexName = nonCyclicEdge.getSourceVertexName(), targetVertexName = nonCyclicEdge.getTargetVertexName(), sourceVertex = this.addVertexByVertexName(sourceVertexName), targetVertex = this.addVertexByVertexName(targetVertexName), edgePresent = sourceVertex.isEdgePresentByTargetVertex(targetVertex);
                if (!edgePresent) {
                    var sourceVertexIndex = sourceVertex.getIndex(), targetVertexIndex = targetVertex.getIndex();
                    success = sourceVertexIndex < targetVertexIndex ? true : this.addNonCyclicEdgeByVertexes(sourceVertex, targetVertex);
                    if (success) {
                        var immediatePredecessorVertex = sourceVertex, immediateSuccessorVertex = targetVertex; ///
                        immediatePredecessorVertex.addImmediateSuccessorVertex(immediateSuccessorVertex);
                        immediateSuccessorVertex.addImmediatePredecessorVertex(immediatePredecessorVertex);
                    }
                }
                return success;
            }
        },
        {
            key: "addNonCyclicEdgeByVertexes",
            value: function addNonCyclicEdgeByVertexes(sourceVertex, targetVertex) {
                var success = false;
                var sourceVertexReachable = targetVertex.isVertexReachable(sourceVertex);
                if (!sourceVertexReachable) {
                    var forwardsVisitedVertexes = targetVertex.retrieveForwardsVisitedVertexes(), backwardsVisitedVertexes = sourceVertex.retrieveBackwardsVisitedVertexes();
                    (0, _vertex1.orderVertexes)(backwardsVisitedVertexes);
                    (0, _vertex1.orderVertexes)(forwardsVisitedVertexes);
                    var visitedVertexes = _to_consumable_array(backwardsVisitedVertexes).concat(_to_consumable_array(forwardsVisitedVertexes)), visitedIndexes = (0, _vertex1.indexesFromVertexes)(visitedVertexes);
                    (0, _index.orderIndexes)(visitedIndexes);
                    visitedVertexes.forEach(function(visitedVertex, index) {
                        var visitedIndex = visitedIndexes[index];
                        index = visitedIndex; ///
                        visitedVertex.setIndex(index);
                    });
                    success = true;
                }
                return success;
            }
        },
        {
            key: "removeEdge",
            value: function removeEdge(edge) {
                var removeStrandedVertexes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                var cyclicEdge = edge, cyclicEdgePresent = this.isCyclicEdgePresent(cyclicEdge);
                if (cyclicEdgePresent) {
                    this.removeCyclicEdge(cyclicEdge);
                    return;
                }
                var nonCyclicEdge = edge, nonCyclicEdgePresent = this.isNonCyclicEdgePresent(nonCyclicEdge);
                if (nonCyclicEdgePresent) {
                    this.removeNonCyclicEdge(nonCyclicEdge, removeStrandedVertexes);
                }
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
            key: "removeCyclicEdge",
            value: function removeCyclicEdge(cyclicEdge) {
                (0, _edge1.removeEdgeFromEdges)(cyclicEdge, this.cyclicEdges);
            }
        },
        {
            key: "removeNonCyclicEdge",
            value: function removeNonCyclicEdge(nonCyclicEdge, removeStrandedVertexes) {
                var sourceVertexName = nonCyclicEdge.getSourceVertexName(), targetVertexName = nonCyclicEdge.getTargetVertexName(), sourceVertex = this.getVertexByVertexName(sourceVertexName), targetVertex = this.getVertexByVertexName(targetVertexName);
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
            key: "removeAllEdgesAndVertexes",
            value: function removeAllEdgesAndVertexes() {
                this.vertexMap = {};
                this.cyclicEdges = [];
            }
        },
        {
            key: "removeEdgesBySourceVertexName",
            value: function removeEdgesBySourceVertexName(sourceVertexName) {
                var removeStrandedVertexes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                var cyclicEdges = (0, _edge1.filterEdgesBySourceVertexName)(this.cyclicEdges, sourceVertexName), edges = this.getEdgesBySourceVertexName(sourceVertexName);
                this.removeEdges(cyclicEdges, removeStrandedVertexes);
                this.removeEdges(edges, removeStrandedVertexes);
            }
        },
        {
            key: "removeEdgesByTargetVertexName",
            value: function removeEdgesByTargetVertexName(targetVertexName) {
                var removeStrandedVertexes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                var cyclicEdges = (0, _edge1.filterEdgesByTargetVertexName)(this.cyclicEdges, targetVertexName), edges = this.getEdgesByTargetVertexName(targetVertexName);
                this.removeEdges(cyclicEdges, removeStrandedVertexes);
                this.removeEdges(edges, removeStrandedVertexes);
            }
        },
        {
            key: "filterCyclicEdges",
            value: function filterCyclicEdges() {
                var _this = this;
                filter(this.cyclicEdges, function(cyclicEdge) {
                    var sourceVertexName = cyclicEdge.getSourceVertexName(), targetVertexName = cyclicEdge.getTargetVertexName(), sourceVertexPresent = _this.isVertexPresentByVertexName(sourceVertexName), targetVertexPresent = _this.isVertexPresentByVertexName(targetVertexName);
                    if (sourceVertexPresent && targetVertexPresent) {
                        return true;
                    }
                });
                filter(this.cyclicEdges, function(cyclicEdge) {
                    var edge = cyclicEdge, success = _this.addEdge(edge);
                    if (!success) {
                        return true;
                    }
                });
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
                var vertexMap = {}, cyclicEdges = [], directedGraph = new DirectedGraph(vertexMap, cyclicEdges);
                return directedGraph;
            }
        }
    ]);
    return DirectedGraph;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kaXJlY3RlZEdyYXBoLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEVkZ2UgZnJvbSBcIi4vZWRnZVwiO1xuaW1wb3J0IEN5Y2xlIGZyb20gXCIuL2N5Y2xlXCI7XG5pbXBvcnQgVmVydGV4IGZyb20gXCIuL3ZlcnRleFwiO1xuXG5pbXBvcnQgeyBvcmRlckluZGV4ZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvaW5kZXhcIjtcbmltcG9ydCB7IG9yZGVyVmVydGV4ZXMsIGluZGV4ZXNGcm9tVmVydGV4ZXMsIHZlcnRleE5hbWVzRnJvbVZlcnRleGVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3ZlcnRleFwiO1xuaW1wb3J0IHsgcmVtb3ZlRWRnZUZyb21FZGdlcywgY2hlY2tFZGdlc0luY2x1ZGVzRWRnZSwgZmlsdGVyRWRnZXNCeVNvdXJjZVZlcnRleE5hbWUsIGZpbHRlckVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2VkZ2VcIjtcblxuY29uc3QgeyBmaXJzdCwgZmlsdGVyIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0ZWRHcmFwaCB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleE1hcCwgY3ljbGljRWRnZXMpIHtcbiAgICB0aGlzLnZlcnRleE1hcCA9IHZlcnRleE1hcDtcbiAgICB0aGlzLmN5Y2xpY0VkZ2VzID0gY3ljbGljRWRnZXM7XG4gIH1cblxuICBnZXRWZXJ0ZXhOYXAoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4TWFwO1xuICB9XG5cbiAgZ2V0Q3ljbGljRWRnZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3ljbGljRWRnZXM7XG4gIH1cblxuICBnZXRWZXJ0ZXhlcygpIHtcbiAgICBjb25zdCB2ZXJ0ZXhNYXBWYWx1ZXMgPSBPYmplY3QudmFsdWVzKHRoaXMudmVydGV4TWFwKSxcbiAgICAgICAgICB2ZXJ0ZXhlcyA9IHZlcnRleE1hcFZhbHVlczsgLy8vXG5cbiAgICByZXR1cm4gdmVydGV4ZXM7XG4gIH1cblxuICBnZXRWZXJ0ZXhOYW1lcygpIHtcbiAgICBjb25zdCB2ZXJ0ZXhNYXBLZXlzID0gT2JqZWN0LmtleXModGhpcy52ZXJ0ZXhNYXApLFxuICAgICAgICAgIHZlcnRleE5hbWVzID0gdmVydGV4TWFwS2V5czsgIC8vL1xuXG4gICAgcmV0dXJuIHZlcnRleE5hbWVzO1xuICB9XG5cbiAgZ2V0T3JkZXJlZFZlcnRleE5hbWVzKCkge1xuICAgIGNvbnN0IHZlcnRleGVzID0gdGhpcy5nZXRWZXJ0ZXhlcygpO1xuXG4gICAgb3JkZXJWZXJ0ZXhlcyh2ZXJ0ZXhlcyk7XG5cbiAgICBjb25zdCBvcmRlcmVkVmVydGV4ZXMgPSB2ZXJ0ZXhlcywgLy8vXG4gICAgICAgICAgb3JkZXJlZFZlcnRleE5hbWVzID0gdmVydGV4TmFtZXNGcm9tVmVydGV4ZXMob3JkZXJlZFZlcnRleGVzKTtcblxuICAgIHJldHVybiBvcmRlcmVkVmVydGV4TmFtZXM7XG4gIH1cblxuICBnZXRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGNvbnN0IHZlcnRleFByZXNlbnQgPSB0aGlzLmlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSxcbiAgICAgICAgICB2ZXJ0ZXggPSB2ZXJ0ZXhQcmVzZW50ID9cbiAgICAgICAgICAgICAgICAgICAgIHRoaXMudmVydGV4TWFwW3ZlcnRleE5hbWVdIDpcbiAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICAgIHJldHVybiB2ZXJ0ZXg7XG4gIH1cblxuICBnZXRFZGdlc0J5U291cmNlVmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgZWRnZXMgPSBbXSxcbiAgICAgICAgICBzb3VyY2VWZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKTtcblxuICAgIGlmIChzb3VyY2VWZXJ0ZXggIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzID0gc291cmNlVmVydGV4LmdldEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzKCksXG4gICAgICAgICAgICBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcyA9IHZlcnRleE5hbWVzRnJvbVZlcnRleGVzKGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleE5hbWVzID0gaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXM7ICAvLy9cblxuICAgICAgdGFyZ2V0VmVydGV4TmFtZXMuZm9yRWFjaCgodGFyZ2V0VmVydGV4TmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBlZGdlID0gRWRnZS5mcm9tU291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICAgICAgZWRnZXMucHVzaChlZGdlKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBlZGdlcztcbiAgfVxuXG4gIGdldEVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpIHtcbiAgICBjb25zdCBlZGdlcyA9IFtdLFxuICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgaWYgKHRhcmdldFZlcnRleCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcyA9IHRhcmdldFZlcnRleC5nZXRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzKCksXG4gICAgICAgICAgICBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzID0gdmVydGV4TmFtZXNGcm9tVmVydGV4ZXMoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcyksXG4gICAgICAgICAgICBzb3VyY2VWZXJ0ZXhOYW1lcyA9IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXM7ICAvLy9cblxuICAgICAgc291cmNlVmVydGV4TmFtZXMuZm9yRWFjaCgoc291cmNlVmVydGV4TmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBlZGdlID0gRWRnZS5mcm9tU291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICAgICAgZWRnZXMucHVzaChlZGdlKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBlZGdlcztcbiAgfVxuXG4gIGdldEZpcnN0Q3ljbGUoKSB7XG4gICAgbGV0IGZpcnN0Q3ljbGUgPSBudWxsO1xuXG4gICAgY29uc3QgY3ljbGVzUHJlc2VudCA9IHRoaXMuYXJlQ3ljbGVzUHJlc2VudCgpO1xuXG4gICAgaWYgKGN5Y2xlc1ByZXNlbnQpIHtcbiAgICAgIGNvbnN0IGZpcnN0Q3ljbGljRWRnZSA9IGZpcnN0KHRoaXMuY3ljbGljRWRnZXMpLFxuICAgICAgICAgICAgc291cmNlVmVydGV4TmFtZSA9IGZpcnN0Q3ljbGljRWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksIC8vL1xuICAgICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IGZpcnN0Q3ljbGljRWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCksIC8vL1xuICAgICAgICAgICAgc291cmNlVmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSksXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgdGFyZ2V0VmVydGV4LmZvcndhcmRzRGVwdGhGaXJzdFNlYXJjaCgodmVydGV4LCBwcmVkZWNlc3NvclZlcnRleGVzKSA9PiB7XG4gICAgICAgIGxldCB0ZXJtaW5hdGUgPSBmYWxzZTtcblxuICAgICAgICBpZiAodmVydGV4ID09PSBzb3VyY2VWZXJ0ZXgpIHtcbiAgICAgICAgICB0ZXJtaW5hdGUgPSB0cnVlO1xuXG4gICAgICAgICAgY29uc3QgY3ljbGUgPSBDeWNsZS5mcm9tU291cmNlVmVydGV4QW5kUHJlZGVjZXNzb3JWZXJ0ZXhlcyhzb3VyY2VWZXJ0ZXgsIHByZWRlY2Vzc29yVmVydGV4ZXMpOyAgLy8vXG5cbiAgICAgICAgICBmaXJzdEN5Y2xlID0gY3ljbGU7IC8vL1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRlcm1pbmF0ZTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBmaXJzdEN5Y2xlO1xuICB9XG5cbiAgYXJlQ3ljbGVzUHJlc2VudCgpIHtcbiAgICBjb25zdCBjeWNsaWNFZGdlc0xlbmd0aCA9IHRoaXMuY3ljbGljRWRnZXMubGVuZ3RoLFxuICAgICAgICAgIGN5Y2xlc1ByZXNlbnQgPSAoY3ljbGljRWRnZXNMZW5ndGggPiAwKTtcblxuICAgIHJldHVybiBjeWNsZXNQcmVzZW50O1xuICB9XG5cbiAgaXNFZGdlUHJlc2VudChlZGdlKSB7XG4gICAgbGV0IGVkZ2VQcmVzZW50ID0gZmFsc2U7XG5cbiAgICBpZiAoIWVkZ2VQcmVzZW50KSB7XG4gICAgICBjb25zdCBjeWNsaWNFZGdlID0gZWRnZSwgIC8vL1xuICAgICAgICAgICAgY3ljbGljRWRnZVByZXNlbnQgPSB0aGlzLmlzQ3ljbGljRWRnZVByZXNlbnQoY3ljbGljRWRnZSk7XG5cbiAgICAgIGVkZ2VQcmVzZW50ID0gY3ljbGljRWRnZVByZXNlbnQ7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAoIWVkZ2VQcmVzZW50KSB7XG4gICAgICBjb25zdCBub25DeWNsaWNFZGdlID0gZWRnZSwgLy8vXG4gICAgICAgICAgICBub25DeWNsaWNFZGdlUHJlc2VudCA9IHRoaXMuaXNOb25DeWNsaWNFZGdlUHJlc2VudChub25DeWNsaWNFZGdlKTtcblxuICAgICAgZWRnZVByZXNlbnQgPSBub25DeWNsaWNFZGdlUHJlc2VudDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGVkZ2VQcmVzZW50O1xuICB9XG5cbiAgaXNDeWNsaWNFZGdlUHJlc2VudChjeWNsaWNFZGdlKSB7XG4gICAgY29uc3QgY3ljbGljRWRnZXNJbmNsdWRlc0VkZ2UgPSBjaGVja0VkZ2VzSW5jbHVkZXNFZGdlKHRoaXMuY3ljbGljRWRnZXMsIGN5Y2xpY0VkZ2UpLFxuICAgICAgICAgIGN5Y2xpY0VkZ2VQcmVzZW50ID0gY3ljbGljRWRnZXNJbmNsdWRlc0VkZ2U7ICAvLy9cblxuICAgIHJldHVybiBjeWNsaWNFZGdlUHJlc2VudDtcbiAgfVxuXG4gIGlzTm9uQ3ljbGljRWRnZVByZXNlbnQoZWRnZSkge1xuICAgIGxldCBub25DeWNsaWNFZGdlUHJlc2VudCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc291cmNlVmVydGV4TmFtZSA9IGVkZ2UuZ2V0U291cmNlVmVydGV4TmFtZSgpLFxuICAgICAgICAgIHNvdXJjZVZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpO1xuXG4gICAgaWYgKHNvdXJjZVZlcnRleCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdGFyZ2V0VmVydGV4TmFtZSA9IGVkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICAgIGlmICh0YXJnZXRWZXJ0ZXggIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgZWRnZVByZXNlbnQgPSBzb3VyY2VWZXJ0ZXguaXNFZGdlUHJlc2VudEJ5VGFyZ2V0VmVydGV4KHRhcmdldFZlcnRleCk7XG5cbiAgICAgICAgbm9uQ3ljbGljRWRnZVByZXNlbnQgPSBlZGdlUHJlc2VudDsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vbkN5Y2xpY0VkZ2VQcmVzZW50O1xuICB9XG5cbiAgaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBjb25zdCB2ZXJ0ZXhOYW1lcyA9IHRoaXMuZ2V0VmVydGV4TmFtZXMoKSxcbiAgICAgICAgICB2ZXJ0ZXhOYW1lc0luY2x1ZGVzVmVydGV4TmFtZSA9IHZlcnRleE5hbWVzLmluY2x1ZGVzKHZlcnRleE5hbWUpLFxuICAgICAgICAgIHZlcnRleFByZXNlbnQgPSB2ZXJ0ZXhOYW1lc0luY2x1ZGVzVmVydGV4TmFtZTsgIC8vL1xuXG4gICAgcmV0dXJuIHZlcnRleFByZXNlbnQ7XG4gIH1cblxuICBhZGRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGNvbnN0IHZlcnRleFByZXNlbnQgPSB0aGlzLmlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgIGlmICghdmVydGV4UHJlc2VudCkge1xuICAgICAgY29uc3QgdmVydGV4TmFtZXMgPSB0aGlzLmdldFZlcnRleE5hbWVzKCksXG4gICAgICAgICAgICB2ZXJ0ZXhOYW1lc0xlbmd0aCA9IHZlcnRleE5hbWVzLmxlbmd0aCxcbiAgICAgICAgICAgIG5hbWUgPSB2ZXJ0ZXhOYW1lLCAgLy8vXG4gICAgICAgICAgICBpbmRleCA9IHZlcnRleE5hbWVzTGVuZ3RoLCAvLy9cbiAgICAgICAgICAgIHZlcnRleCA9IFZlcnRleC5mcm9tTmFtZUFuZEluZGV4KG5hbWUsIGluZGV4KTtcblxuICAgICAgdGhpcy5zZXRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSwgdmVydGV4KTtcbiAgICB9XG5cbiAgICBjb25zdCB2ZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgIHJldHVybiB2ZXJ0ZXg7XG4gIH1cblxuICByZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGNvbnN0IHZlcnRleFByZXNlbnQgPSB0aGlzLmlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgIGlmICghdmVydGV4UHJlc2VudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgdmVydGV4LmZvckVhY2hJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoKGltbWVkaWF0ZVN1Y2Nlc3NWZXJ0ZXgpID0+IHtcbiAgICAgIGNvbnN0IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ID0gdmVydGV4OyAgLy8vXG5cbiAgICAgIGltbWVkaWF0ZVN1Y2Nlc3NWZXJ0ZXgucmVtb3ZlSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpO1xuICAgIH0pO1xuXG4gICAgdmVydGV4LmZvckVhY2hJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCgoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpID0+IHtcbiAgICAgIGNvbnN0IGltbWVkaWF0ZVN1Y2Nlc3NWZXJ0ZXggPSB2ZXJ0ZXg7ICAvLy9cblxuICAgICAgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgucmVtb3ZlSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KGltbWVkaWF0ZVN1Y2Nlc3NWZXJ0ZXgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5kZWxldGVWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICBjb25zdCB2ZXJ0ZXhlcyA9IHRoaXMuZ2V0VmVydGV4ZXMoKSxcbiAgICAgICAgICBkZWxldGVkVmVydGV4ID0gdmVydGV4LCAvLy9cbiAgICAgICAgICBkZWxldGVkVmVydGV4SW5kZXggPSBkZWxldGVkVmVydGV4LmdldEluZGV4KCk7XG5cbiAgICB2ZXJ0ZXhlcy5mb3JFYWNoKCh2ZXJ0ZXgpID0+IHtcbiAgICAgIGNvbnN0IHZlcnRleEluZGV4ID0gdmVydGV4LmdldEluZGV4KCk7XG5cbiAgICAgIGlmICh2ZXJ0ZXhJbmRleCA+IGRlbGV0ZWRWZXJ0ZXhJbmRleCkge1xuICAgICAgICB2ZXJ0ZXguZGVjcmVtZW50SW5kZXgoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuZmlsdGVyQ3ljbGljRWRnZXMoKTtcbiAgfVxuXG4gIGFkZEVkZ2UoZWRnZSkge1xuICAgIGNvbnN0IHNvdXJjZVZlcnRleE5hbWUgPSBlZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSxcbiAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gZWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCk7XG5cbiAgICBpZiAoc291cmNlVmVydGV4TmFtZSA9PT0gdGFyZ2V0VmVydGV4TmFtZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5vbkN5Y2xpY0VkZ2UgPSBlZGdlLCAvLy9cbiAgICAgICAgICBzdWNjZXNzID0gdGhpcy5hZGROb25DeWNsaWNFZGdlKG5vbkN5Y2xpY0VkZ2UpO1xuXG4gICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICBjb25zdCBjeWNsaWNFZGdlID0gZWRnZTsgIC8vL1xuXG4gICAgICB0aGlzLmFkZEN5Y2xpY0VkZ2UoY3ljbGljRWRnZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1Y2Nlc3M7XG4gIH1cblxuICBhZGRFZGdlcyhlZGdlcykge1xuICAgIGVkZ2VzLmZvckVhY2goKGVkZ2UpID0+IHtcbiAgICAgIHRoaXMuYWRkRWRnZShlZGdlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZEN5Y2xpY0VkZ2UoY3ljbGljRWRnZSkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VzSW5jbHVkZXNDeWNsaWNFZGdlID0gY2hlY2tFZGdlc0luY2x1ZGVzRWRnZSh0aGlzLmN5Y2xpY0VkZ2VzLCBjeWNsaWNFZGdlKTtcblxuICAgIGlmICghY3ljbGljRWRnZXNJbmNsdWRlc0N5Y2xpY0VkZ2UpIHtcbiAgICAgIHRoaXMuY3ljbGljRWRnZXMucHVzaChjeWNsaWNFZGdlKTtcbiAgICB9XG4gIH1cblxuICBhZGROb25DeWNsaWNFZGdlKG5vbkN5Y2xpY0VkZ2UpIHtcbiAgICBsZXQgc3VjY2VzcyA9IHRydWU7XG5cbiAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gbm9uQ3ljbGljRWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IG5vbkN5Y2xpY0VkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgIHNvdXJjZVZlcnRleCA9IHRoaXMuYWRkVmVydGV4QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpLFxuICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuYWRkVmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpLFxuICAgICAgICAgIGVkZ2VQcmVzZW50ID0gc291cmNlVmVydGV4LmlzRWRnZVByZXNlbnRCeVRhcmdldFZlcnRleCh0YXJnZXRWZXJ0ZXgpO1xuXG4gICAgaWYgKCFlZGdlUHJlc2VudCkge1xuICAgICAgY29uc3Qgc291cmNlVmVydGV4SW5kZXggPSBzb3VyY2VWZXJ0ZXguZ2V0SW5kZXgoKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleEluZGV4ID0gdGFyZ2V0VmVydGV4LmdldEluZGV4KCk7XG5cbiAgICAgIHN1Y2Nlc3MgPSAoc291cmNlVmVydGV4SW5kZXggPCB0YXJnZXRWZXJ0ZXhJbmRleCkgP1xuICAgICAgICAgICAgICAgICAgdHJ1ZSA6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkTm9uQ3ljbGljRWRnZUJ5VmVydGV4ZXMoc291cmNlVmVydGV4LCB0YXJnZXRWZXJ0ZXgpO1xuXG4gICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICBjb25zdCBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCA9IHNvdXJjZVZlcnRleCwgLy8vXG4gICAgICAgICAgICAgIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCA9IHRhcmdldFZlcnRleDsgLy8vXG5cbiAgICAgICAgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXguYWRkSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCk7XG5cbiAgICAgICAgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4LmFkZEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3VjY2VzcztcbiAgfVxuXG4gIGFkZE5vbkN5Y2xpY0VkZ2VCeVZlcnRleGVzKHNvdXJjZVZlcnRleCwgdGFyZ2V0VmVydGV4KSB7XG4gICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNvdXJjZVZlcnRleFJlYWNoYWJsZSA9IHRhcmdldFZlcnRleC5pc1ZlcnRleFJlYWNoYWJsZShzb3VyY2VWZXJ0ZXgpO1xuXG4gICAgaWYgKCFzb3VyY2VWZXJ0ZXhSZWFjaGFibGUpIHtcbiAgICAgIGNvbnN0IGZvcndhcmRzVmlzaXRlZFZlcnRleGVzID0gdGFyZ2V0VmVydGV4LnJldHJpZXZlRm9yd2FyZHNWaXNpdGVkVmVydGV4ZXMoKSxcbiAgICAgICAgICAgIGJhY2t3YXJkc1Zpc2l0ZWRWZXJ0ZXhlcyA9IHNvdXJjZVZlcnRleC5yZXRyaWV2ZUJhY2t3YXJkc1Zpc2l0ZWRWZXJ0ZXhlcygpO1xuXG4gICAgICBvcmRlclZlcnRleGVzKGJhY2t3YXJkc1Zpc2l0ZWRWZXJ0ZXhlcyk7XG5cbiAgICAgIG9yZGVyVmVydGV4ZXMoZm9yd2FyZHNWaXNpdGVkVmVydGV4ZXMpO1xuXG4gICAgICBjb25zdCB2aXNpdGVkVmVydGV4ZXMgPSBbXG4gICAgICAgICAgICAgIC4uLmJhY2t3YXJkc1Zpc2l0ZWRWZXJ0ZXhlcyxcbiAgICAgICAgICAgICAgLi4uZm9yd2FyZHNWaXNpdGVkVmVydGV4ZXNcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB2aXNpdGVkSW5kZXhlcyA9IGluZGV4ZXNGcm9tVmVydGV4ZXModmlzaXRlZFZlcnRleGVzKTtcblxuICAgICAgb3JkZXJJbmRleGVzKHZpc2l0ZWRJbmRleGVzKTtcblxuICAgICAgdmlzaXRlZFZlcnRleGVzLmZvckVhY2goKHZpc2l0ZWRWZXJ0ZXgsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHZpc2l0ZWRJbmRleCA9IHZpc2l0ZWRJbmRleGVzW2luZGV4XTtcblxuICAgICAgICBpbmRleCA9IHZpc2l0ZWRJbmRleDsgLy8vXG5cbiAgICAgICAgdmlzaXRlZFZlcnRleC5zZXRJbmRleChpbmRleCk7XG4gICAgICB9KTtcblxuICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1Y2Nlc3M7XG4gIH1cblxuICByZW1vdmVFZGdlKGVkZ2UsIHJlbW92ZVN0cmFuZGVkVmVydGV4ZXMgPSBmYWxzZSkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2UgPSBlZGdlLCAgLy8vXG4gICAgICAgICAgY3ljbGljRWRnZVByZXNlbnQgPSB0aGlzLmlzQ3ljbGljRWRnZVByZXNlbnQoY3ljbGljRWRnZSk7XG5cbiAgICBpZiAoY3ljbGljRWRnZVByZXNlbnQpIHtcbiAgICAgIHRoaXMucmVtb3ZlQ3ljbGljRWRnZShjeWNsaWNFZGdlKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5vbkN5Y2xpY0VkZ2UgPSBlZGdlLCAvLy9cbiAgICAgICAgICBub25DeWNsaWNFZGdlUHJlc2VudCA9IHRoaXMuaXNOb25DeWNsaWNFZGdlUHJlc2VudChub25DeWNsaWNFZGdlKTtcblxuICAgIGlmIChub25DeWNsaWNFZGdlUHJlc2VudCkge1xuICAgICAgdGhpcy5yZW1vdmVOb25DeWNsaWNFZGdlKG5vbkN5Y2xpY0VkZ2UsIHJlbW92ZVN0cmFuZGVkVmVydGV4ZXMpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUVkZ2VzKGVkZ2VzLCByZW1vdmVTdHJhbmRlZFZlcnRleGVzID0gZmFsc2UpIHtcbiAgICBlZGdlcy5mb3JFYWNoKChlZGdlKSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZUVkZ2UoZWRnZSwgcmVtb3ZlU3RyYW5kZWRWZXJ0ZXhlcyk7XG4gICAgfSk7XG4gIH1cblxuICByZW1vdmVDeWNsaWNFZGdlKGN5Y2xpY0VkZ2UpIHtcbiAgICByZW1vdmVFZGdlRnJvbUVkZ2VzKGN5Y2xpY0VkZ2UsIHRoaXMuY3ljbGljRWRnZXMpO1xuICB9XG5cbiAgcmVtb3ZlTm9uQ3ljbGljRWRnZShub25DeWNsaWNFZGdlLCByZW1vdmVTdHJhbmRlZFZlcnRleGVzKSB7XG4gICAgY29uc3Qgc291cmNlVmVydGV4TmFtZSA9IG5vbkN5Y2xpY0VkZ2UuZ2V0U291cmNlVmVydGV4TmFtZSgpLFxuICAgICAgICAgIHRhcmdldFZlcnRleE5hbWUgPSBub25DeWNsaWNFZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKSxcbiAgICAgICAgICBzb3VyY2VWZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICB0YXJnZXRWZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgIHNvdXJjZVZlcnRleC5yZW1vdmVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgodGFyZ2V0VmVydGV4KTtcblxuICAgIHRhcmdldFZlcnRleC5yZW1vdmVJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleChzb3VyY2VWZXJ0ZXgpO1xuXG4gICAgaWYgKHJlbW92ZVN0cmFuZGVkVmVydGV4ZXMpIHtcbiAgICAgIGNvbnN0IHNvdXJjZVZlcnRleFN0cmFuZGVkID0gc291cmNlVmVydGV4LmlzU3RyYW5kZWQoKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleFN0cmFuZGVkID0gdGFyZ2V0VmVydGV4LmlzU3RyYW5kZWQoKTtcblxuICAgICAgaWYgKHNvdXJjZVZlcnRleFN0cmFuZGVkKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGFyZ2V0VmVydGV4U3RyYW5kZWQpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5maWx0ZXJDeWNsaWNFZGdlcygpO1xuICB9XG5cbiAgcmVtb3ZlQWxsRWRnZXNBbmRWZXJ0ZXhlcygpIHtcbiAgICB0aGlzLnZlcnRleE1hcCA9IHt9O1xuICAgIHRoaXMuY3ljbGljRWRnZXMgPSBbXTtcbiAgfVxuXG4gIHJlbW92ZUVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUsIHJlbW92ZVN0cmFuZGVkVmVydGV4ZXMgPSBmYWxzZSkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VzID0gZmlsdGVyRWRnZXNCeVNvdXJjZVZlcnRleE5hbWUodGhpcy5jeWNsaWNFZGdlcywgc291cmNlVmVydGV4TmFtZSksXG4gICAgICAgICAgZWRnZXMgPSB0aGlzLmdldEVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpO1xuXG4gICAgdGhpcy5yZW1vdmVFZGdlcyhjeWNsaWNFZGdlcywgcmVtb3ZlU3RyYW5kZWRWZXJ0ZXhlcyk7XG5cbiAgICB0aGlzLnJlbW92ZUVkZ2VzKGVkZ2VzLCByZW1vdmVTdHJhbmRlZFZlcnRleGVzKTtcbiAgfVxuXG4gIHJlbW92ZUVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUsIHJlbW92ZVN0cmFuZGVkVmVydGV4ZXMgPSBmYWxzZSkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VzID0gZmlsdGVyRWRnZXNCeVRhcmdldFZlcnRleE5hbWUodGhpcy5jeWNsaWNFZGdlcywgdGFyZ2V0VmVydGV4TmFtZSksXG4gICAgICAgICAgZWRnZXMgPSB0aGlzLmdldEVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgdGhpcy5yZW1vdmVFZGdlcyhjeWNsaWNFZGdlcywgcmVtb3ZlU3RyYW5kZWRWZXJ0ZXhlcyk7XG5cbiAgICB0aGlzLnJlbW92ZUVkZ2VzKGVkZ2VzLCByZW1vdmVTdHJhbmRlZFZlcnRleGVzKTtcbiAgfVxuXG4gIGZpbHRlckN5Y2xpY0VkZ2VzKCkge1xuICAgIGZpbHRlcih0aGlzLmN5Y2xpY0VkZ2VzLCAoY3ljbGljRWRnZSkgPT4ge1xuICAgICAgY29uc3Qgc291cmNlVmVydGV4TmFtZSA9IGN5Y2xpY0VkZ2UuZ2V0U291cmNlVmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IGN5Y2xpY0VkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgc291cmNlVmVydGV4UHJlc2VudCA9IHRoaXMuaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4UHJlc2VudCA9IHRoaXMuaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgICBpZiAoc291cmNlVmVydGV4UHJlc2VudCAmJiB0YXJnZXRWZXJ0ZXhQcmVzZW50KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZmlsdGVyKHRoaXMuY3ljbGljRWRnZXMsIChjeWNsaWNFZGdlKSA9PiB7XG4gICAgICBjb25zdCBlZGdlID0gY3ljbGljRWRnZSwgIC8vL1xuICAgICAgICAgICAgc3VjY2VzcyA9IHRoaXMuYWRkRWRnZShlZGdlKTtcblxuICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUsIHZlcnRleCkge1xuICAgIHRoaXMudmVydGV4TWFwW3ZlcnRleE5hbWVdID0gdmVydGV4O1xuICB9XG5cbiAgZGVsZXRlVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBkZWxldGUgdGhpcy52ZXJ0ZXhNYXBbdmVydGV4TmFtZV07XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgdmVydGV4TWFwID0ge30sXG4gICAgICAgICAgY3ljbGljRWRnZXMgPSBbXSxcbiAgICAgICAgICBkaXJlY3RlZEdyYXBoID0gbmV3IERpcmVjdGVkR3JhcGgodmVydGV4TWFwLCBjeWNsaWNFZGdlcyk7XG4gICAgXG4gICAgcmV0dXJuIGRpcmVjdGVkR3JhcGg7ICAgIFxuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkRpcmVjdGVkR3JhcGgiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiZmlsdGVyIiwidmVydGV4TWFwIiwiY3ljbGljRWRnZXMiLCJnZXRWZXJ0ZXhOYXAiLCJnZXRDeWNsaWNFZGdlcyIsImdldFZlcnRleGVzIiwidmVydGV4TWFwVmFsdWVzIiwiT2JqZWN0IiwidmFsdWVzIiwidmVydGV4ZXMiLCJnZXRWZXJ0ZXhOYW1lcyIsInZlcnRleE1hcEtleXMiLCJrZXlzIiwidmVydGV4TmFtZXMiLCJnZXRPcmRlcmVkVmVydGV4TmFtZXMiLCJvcmRlclZlcnRleGVzIiwib3JkZXJlZFZlcnRleGVzIiwib3JkZXJlZFZlcnRleE5hbWVzIiwidmVydGV4TmFtZXNGcm9tVmVydGV4ZXMiLCJnZXRWZXJ0ZXhCeVZlcnRleE5hbWUiLCJ2ZXJ0ZXhOYW1lIiwidmVydGV4UHJlc2VudCIsImlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZSIsInZlcnRleCIsImdldEVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lIiwic291cmNlVmVydGV4TmFtZSIsImVkZ2VzIiwic291cmNlVmVydGV4IiwiaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMiLCJnZXRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcyIsImltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzIiwidGFyZ2V0VmVydGV4TmFtZXMiLCJmb3JFYWNoIiwidGFyZ2V0VmVydGV4TmFtZSIsImVkZ2UiLCJFZGdlIiwiZnJvbVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lIiwicHVzaCIsImdldEVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lIiwidGFyZ2V0VmVydGV4IiwiaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcyIsImdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMiLCJpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzIiwic291cmNlVmVydGV4TmFtZXMiLCJnZXRGaXJzdEN5Y2xlIiwiZmlyc3RDeWNsZSIsImN5Y2xlc1ByZXNlbnQiLCJhcmVDeWNsZXNQcmVzZW50IiwiZmlyc3RDeWNsaWNFZGdlIiwiZ2V0U291cmNlVmVydGV4TmFtZSIsImdldFRhcmdldFZlcnRleE5hbWUiLCJmb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2giLCJwcmVkZWNlc3NvclZlcnRleGVzIiwidGVybWluYXRlIiwiY3ljbGUiLCJDeWNsZSIsImZyb21Tb3VyY2VWZXJ0ZXhBbmRQcmVkZWNlc3NvclZlcnRleGVzIiwiY3ljbGljRWRnZXNMZW5ndGgiLCJsZW5ndGgiLCJpc0VkZ2VQcmVzZW50IiwiZWRnZVByZXNlbnQiLCJjeWNsaWNFZGdlIiwiY3ljbGljRWRnZVByZXNlbnQiLCJpc0N5Y2xpY0VkZ2VQcmVzZW50Iiwibm9uQ3ljbGljRWRnZSIsIm5vbkN5Y2xpY0VkZ2VQcmVzZW50IiwiaXNOb25DeWNsaWNFZGdlUHJlc2VudCIsImN5Y2xpY0VkZ2VzSW5jbHVkZXNFZGdlIiwiY2hlY2tFZGdlc0luY2x1ZGVzRWRnZSIsImlzRWRnZVByZXNlbnRCeVRhcmdldFZlcnRleCIsInZlcnRleE5hbWVzSW5jbHVkZXNWZXJ0ZXhOYW1lIiwiaW5jbHVkZXMiLCJhZGRWZXJ0ZXhCeVZlcnRleE5hbWUiLCJ2ZXJ0ZXhOYW1lc0xlbmd0aCIsIm5hbWUiLCJpbmRleCIsIlZlcnRleCIsImZyb21OYW1lQW5kSW5kZXgiLCJzZXRWZXJ0ZXhCeVZlcnRleE5hbWUiLCJyZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUiLCJmb3JFYWNoSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4IiwiaW1tZWRpYXRlU3VjY2Vzc1ZlcnRleCIsImltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4IiwicmVtb3ZlSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgiLCJmb3JFYWNoSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgiLCJyZW1vdmVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgiLCJkZWxldGVWZXJ0ZXhCeVZlcnRleE5hbWUiLCJkZWxldGVkVmVydGV4IiwiZGVsZXRlZFZlcnRleEluZGV4IiwiZ2V0SW5kZXgiLCJ2ZXJ0ZXhJbmRleCIsImRlY3JlbWVudEluZGV4IiwiZmlsdGVyQ3ljbGljRWRnZXMiLCJhZGRFZGdlIiwic3VjY2VzcyIsImFkZE5vbkN5Y2xpY0VkZ2UiLCJhZGRDeWNsaWNFZGdlIiwiYWRkRWRnZXMiLCJjeWNsaWNFZGdlc0luY2x1ZGVzQ3ljbGljRWRnZSIsInNvdXJjZVZlcnRleEluZGV4IiwidGFyZ2V0VmVydGV4SW5kZXgiLCJhZGROb25DeWNsaWNFZGdlQnlWZXJ0ZXhlcyIsImltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCIsImFkZEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCIsImFkZEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4Iiwic291cmNlVmVydGV4UmVhY2hhYmxlIiwiaXNWZXJ0ZXhSZWFjaGFibGUiLCJmb3J3YXJkc1Zpc2l0ZWRWZXJ0ZXhlcyIsInJldHJpZXZlRm9yd2FyZHNWaXNpdGVkVmVydGV4ZXMiLCJiYWNrd2FyZHNWaXNpdGVkVmVydGV4ZXMiLCJyZXRyaWV2ZUJhY2t3YXJkc1Zpc2l0ZWRWZXJ0ZXhlcyIsInZpc2l0ZWRWZXJ0ZXhlcyIsInZpc2l0ZWRJbmRleGVzIiwiaW5kZXhlc0Zyb21WZXJ0ZXhlcyIsIm9yZGVySW5kZXhlcyIsInZpc2l0ZWRWZXJ0ZXgiLCJ2aXNpdGVkSW5kZXgiLCJzZXRJbmRleCIsInJlbW92ZUVkZ2UiLCJyZW1vdmVTdHJhbmRlZFZlcnRleGVzIiwicmVtb3ZlQ3ljbGljRWRnZSIsInJlbW92ZU5vbkN5Y2xpY0VkZ2UiLCJyZW1vdmVFZGdlcyIsInJlbW92ZUVkZ2VGcm9tRWRnZXMiLCJzb3VyY2VWZXJ0ZXhTdHJhbmRlZCIsImlzU3RyYW5kZWQiLCJ0YXJnZXRWZXJ0ZXhTdHJhbmRlZCIsInJlbW92ZUFsbEVkZ2VzQW5kVmVydGV4ZXMiLCJyZW1vdmVFZGdlc0J5U291cmNlVmVydGV4TmFtZSIsImZpbHRlckVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lIiwicmVtb3ZlRWRnZXNCeVRhcmdldFZlcnRleE5hbWUiLCJmaWx0ZXJFZGdlc0J5VGFyZ2V0VmVydGV4TmFtZSIsInNvdXJjZVZlcnRleFByZXNlbnQiLCJ0YXJnZXRWZXJ0ZXhQcmVzZW50IiwiZnJvbU5vdGhpbmciLCJkaXJlY3RlZEdyYXBoIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWNxQkE7Ozt5QkFaVTsyREFFZDs0REFDQzs2REFDQztxQkFFVTt1QkFDK0M7cUJBQzhDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxSCxJQUFRQyxRQUFrQkMsMEJBQWxCRCxPQUFPRSxTQUFXRCwwQkFBWEM7QUFFQSxJQUFBLEFBQU1ILDhCQUFOO2FBQU1BLGNBQ1BJLFNBQVMsRUFBRUMsV0FBVztnQ0FEZkw7UUFFakIsSUFBSSxDQUFDSSxZQUFZQTtRQUNqQixJQUFJLENBQUNDLGNBQWNBOztrQkFIRkw7O1lBTW5CTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGO1lBQ2Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGO1lBQ2Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsa0JBQWtCQyxPQUFPQyxPQUFPLElBQUksQ0FBQ1AsWUFD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