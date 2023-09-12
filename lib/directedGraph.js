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
                    targetVertex.exhaustiveForwardsDepthFirstSearch(function(vertex, predecessorVertexes) {
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
            key: "getImmediateSuccessorVertexNamesByVertexName",
            value: function getImmediateSuccessorVertexNamesByVertexName(vertexName) {
                var vertex = this.getVertexByVertexName(vertexName), immediateSuccessorVertexNames = vertex.getImmediateSuccessorVertexNames();
                return immediateSuccessorVertexNames;
            }
        },
        {
            key: "getImmediatePredecessorVertexNamesByVertexName",
            value: function getImmediatePredecessorVertexNamesByVertexName(vertexName) {
                var vertex = this.getVertexByVertexName(vertexName), immediatePredecessorVertexNames = vertex.getImmediatePredecessorVertexNames();
                return immediatePredecessorVertexNames;
            }
        },
        {
            key: "isEdgePresentBySourceVertexNameAndTargetVertexName",
            value: function isEdgePresentBySourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName) {
                var edge = _edge.default.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName), edgePresent = this.isEdgePresent(edge);
                return edgePresent;
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
            key: "addVertexesByVertexNames",
            value: function addVertexesByVertexNames(vertexNames) {
                var _this = this;
                vertexNames.forEach(function(vertexName) {
                    _this.addVertexByVertexName(vertexName);
                });
            }
        },
        {
            key: "removeVertexesByVertexNames",
            value: function removeVertexesByVertexNames(vertexNames) {
                var _this = this;
                vertexNames.forEach(function(vertexName) {
                    _this.removeVertexByVertexName(vertexName);
                });
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
            key: "addEdgeBySourceVertexNameAndTargetVertexName",
            value: function addEdgeBySourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName) {
                var edge = _edge.default.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);
                this.addEdge(edge);
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
                var _this = this;
                var cyclicEdges = this.getCyclicEdges(), edges = cyclicEdges; ///
                edges.forEach(function(edge) {
                    var sourceVertexName = edge.getSourceVertexName(), targetVertexName = edge.getTargetVertexName(), sourceVertex = _this.getVertexByVertexName(sourceVertexName), targetVertex = _this.getVertexByVertexName(targetVertexName), sourceVertexReachable = targetVertex.isVertexReachable(sourceVertex);
                    if (!sourceVertexReachable) {
                        _this.reorderVertexesBySourceVertexAndTargetVertex(sourceVertex, targetVertex);
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
                var vertexMap = {}, directedGraph = new DirectedGraph(vertexMap);
                return directedGraph;
            }
        }
    ]);
    return DirectedGraph;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kaXJlY3RlZEdyYXBoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEVkZ2UgZnJvbSBcIi4vZWRnZVwiO1xuaW1wb3J0IEN5Y2xlIGZyb20gXCIuL2N5Y2xlXCI7XG5pbXBvcnQgVmVydGV4IGZyb20gXCIuL3ZlcnRleFwiO1xuXG5pbXBvcnQgeyBvcmRlckluZGV4ZXMsIGluZGV4ZXNGcm9tVmVydGV4ZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvaW5kZXhcIjtcbmltcG9ydCB7IG9yZGVyVmVydGV4ZXMsIHZlcnRleE5hbWVzRnJvbVZlcnRleGVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3ZlcnRleFwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0ZWRHcmFwaCB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleE1hcCkge1xuICAgIHRoaXMudmVydGV4TWFwID0gdmVydGV4TWFwO1xuICB9XG5cbiAgZ2V0VmVydGV4TmFwKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleE1hcDtcbiAgfVxuXG4gIGdldFZlcnRleGVzKCkge1xuICAgIGNvbnN0IHZlcnRleE1hcFZhbHVlcyA9IE9iamVjdC52YWx1ZXModGhpcy52ZXJ0ZXhNYXApLFxuICAgICAgICAgIHZlcnRleGVzID0gdmVydGV4TWFwVmFsdWVzOyAvLy9cblxuICAgIHJldHVybiB2ZXJ0ZXhlcztcbiAgfVxuXG4gIGdldFZlcnRleE5hbWVzKCkge1xuICAgIGNvbnN0IHZlcnRleE1hcEtleXMgPSBPYmplY3Qua2V5cyh0aGlzLnZlcnRleE1hcCksXG4gICAgICAgICAgdmVydGV4TmFtZXMgPSB2ZXJ0ZXhNYXBLZXlzOyAgLy8vXG5cbiAgICByZXR1cm4gdmVydGV4TmFtZXM7XG4gIH1cblxuICBnZXRPcmRlcmVkVmVydGV4TmFtZXMoKSB7XG4gICAgY29uc3QgdmVydGV4ZXMgPSB0aGlzLmdldFZlcnRleGVzKCk7XG5cbiAgICBvcmRlclZlcnRleGVzKHZlcnRleGVzKTtcblxuICAgIGNvbnN0IG9yZGVyZWRWZXJ0ZXhlcyA9IHZlcnRleGVzLCAvLy9cbiAgICAgICAgICBvcmRlcmVkVmVydGV4TmFtZXMgPSB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhlcyhvcmRlcmVkVmVydGV4ZXMpO1xuXG4gICAgcmV0dXJuIG9yZGVyZWRWZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGdldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgdmVydGV4UHJlc2VudCA9IHRoaXMuaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpLFxuICAgICAgICAgIHZlcnRleCA9IHZlcnRleFByZXNlbnQgP1xuICAgICAgICAgICAgICAgICAgICAgdGhpcy52ZXJ0ZXhNYXBbdmVydGV4TmFtZV0gOlxuICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gICAgcmV0dXJuIHZlcnRleDtcbiAgfVxuXG4gIGdldEVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpIHtcbiAgICBjb25zdCBlZGdlcyA9IFtdLFxuICAgICAgICAgIHNvdXJjZVZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpO1xuXG4gICAgaWYgKHNvdXJjZVZlcnRleCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMgPSBzb3VyY2VWZXJ0ZXguZ2V0SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMoKSxcbiAgICAgICAgICAgIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzID0gdmVydGV4TmFtZXNGcm9tVmVydGV4ZXMoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZXMgPSBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lczsgIC8vL1xuXG4gICAgICB0YXJnZXRWZXJ0ZXhOYW1lcy5mb3JFYWNoKCh0YXJnZXRWZXJ0ZXhOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGVkZ2UgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgICBlZGdlcy5wdXNoKGVkZ2UpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVkZ2VzO1xuICB9XG5cbiAgZ2V0RWRnZXNCeVRhcmdldFZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSkge1xuICAgIGNvbnN0IGVkZ2VzID0gW10sXG4gICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICBpZiAodGFyZ2V0VmVydGV4ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzID0gdGFyZ2V0VmVydGV4LmdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMoKSxcbiAgICAgICAgICAgIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMgPSB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhlcyhpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzKSxcbiAgICAgICAgICAgIHNvdXJjZVZlcnRleE5hbWVzID0gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lczsgIC8vL1xuXG4gICAgICBzb3VyY2VWZXJ0ZXhOYW1lcy5mb3JFYWNoKChzb3VyY2VWZXJ0ZXhOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGVkZ2UgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgICBlZGdlcy5wdXNoKGVkZ2UpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVkZ2VzO1xuICB9XG5cbiAgZ2V0Rmlyc3RDeWNsZSgpIHtcbiAgICBsZXQgZmlyc3RDeWNsZSA9IG51bGw7XG5cbiAgICBjb25zdCBjeWNsZXNQcmVzZW50ID0gdGhpcy5hcmVDeWNsZXNQcmVzZW50KCk7XG5cbiAgICBpZiAoY3ljbGVzUHJlc2VudCkge1xuICAgICAgY29uc3QgY3ljbGljRWRnZXMgPSB0aGlzLmdldEN5Y2xpY0VkZ2VzKCksXG4gICAgICAgICAgICBmaXJzdEN5Y2xpY0VkZ2UgPSBmaXJzdChjeWNsaWNFZGdlcyksXG4gICAgICAgICAgICBzb3VyY2VWZXJ0ZXhOYW1lID0gZmlyc3RDeWNsaWNFZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSwgLy8vXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gZmlyc3RDeWNsaWNFZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKSwgLy8vXG4gICAgICAgICAgICBzb3VyY2VWZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgICB0YXJnZXRWZXJ0ZXguZXhoYXVzdGl2ZUZvcndhcmRzRGVwdGhGaXJzdFNlYXJjaCgodmVydGV4LCBwcmVkZWNlc3NvclZlcnRleGVzKSA9PiB7XG4gICAgICAgIGxldCB0ZXJtaW5hdGUgPSBmYWxzZTtcblxuICAgICAgICBpZiAodmVydGV4ID09PSBzb3VyY2VWZXJ0ZXgpIHtcbiAgICAgICAgICB0ZXJtaW5hdGUgPSB0cnVlO1xuXG4gICAgICAgICAgY29uc3QgY3ljbGUgPSBDeWNsZS5mcm9tU291cmNlVmVydGV4QW5kUHJlZGVjZXNzb3JWZXJ0ZXhlcyhzb3VyY2VWZXJ0ZXgsIHByZWRlY2Vzc29yVmVydGV4ZXMpOyAgLy8vXG5cbiAgICAgICAgICBmaXJzdEN5Y2xlID0gY3ljbGU7IC8vL1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRlcm1pbmF0ZTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBmaXJzdEN5Y2xlO1xuICB9XG5cbiAgZ2V0Q3ljbGljRWRnZXMoKSB7XG4gICAgY29uc3QgY3ljbGljRWRnZXMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhlcyA9IHRoaXMuZ2V0VmVydGV4ZXMoKTtcblxuICAgIHZlcnRleGVzLmZvckVhY2goKHZlcnRleCkgPT4ge1xuICAgICAgY29uc3Qgc291cmNlVmVydGV4ID0gdmVydGV4LCAgLy8vXG4gICAgICAgICAgICBzb3VyY2VWZXJ0ZXhJbmRleCA9IHNvdXJjZVZlcnRleC5nZXRJbmRleCgpO1xuXG4gICAgICB2ZXJ0ZXguZm9yRWFjaEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCgoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHRhcmdldFZlcnRleCA9IGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCwgIC8vL1xuICAgICAgICAgICAgICB0YXJnZXRWZXJ0ZXhJbmRleCA9IHRhcmdldFZlcnRleC5nZXRJbmRleCgpO1xuXG4gICAgICAgIGlmICh0YXJnZXRWZXJ0ZXhJbmRleCA8IHNvdXJjZVZlcnRleEluZGV4KSB7XG4gICAgICAgICAgY29uc3Qgc291cmNlVmVydGV4TmFtZSA9IHNvdXJjZVZlcnRleC5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IHRhcmdldFZlcnRleC5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgZWRnZSA9IEVkZ2UuZnJvbVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpLFxuICAgICAgICAgICAgICAgIGN5Y2xpY0VkZ2UgPSBlZGdlOyAgLy8vXG5cbiAgICAgICAgICBjeWNsaWNFZGdlcy5wdXNoKGN5Y2xpY0VkZ2UpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgc291cmNlVmVydGV4XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY3ljbGljRWRnZXM7XG4gIH1cblxuICBhcmVDeWNsZXNQcmVzZW50KCkge1xuICAgIGNvbnN0IHZlcnRleGVzID0gdGhpcy5nZXRWZXJ0ZXhlcygpLFxuICAgICAgICAgIGN5Y2xlc1ByZXNlbnQgPSB2ZXJ0ZXhlcy5zb21lKCh2ZXJ0ZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNvdXJjZVZlcnRleCA9IHZlcnRleCwgIC8vL1xuICAgICAgICAgICAgICAgICAgc291cmNlVmVydGV4SW5kZXggPSBzb3VyY2VWZXJ0ZXguZ2V0SW5kZXgoKSxcbiAgICAgICAgICAgICAgICAgIGN5Y2xpY0VkZ2VQcmVzZW50ID0gdmVydGV4LnNvbWVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoKGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRWZXJ0ZXggPSBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgsICAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0VmVydGV4SW5kZXggPSB0YXJnZXRWZXJ0ZXguZ2V0SW5kZXgoKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0VmVydGV4SW5kZXggPCBzb3VyY2VWZXJ0ZXhJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGN5Y2xpY0VkZ2VQcmVzZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGN5Y2xlc1ByZXNlbnQ7XG4gIH1cblxuICBpc0VkZ2VQcmVzZW50KGVkZ2UpIHtcbiAgICBsZXQgZWRnZVByZXNlbnQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNvdXJjZVZlcnRleE5hbWUgPSBlZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSxcbiAgICAgICAgICBzb3VyY2VWZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKTtcblxuICAgIGlmIChzb3VyY2VWZXJ0ZXggIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHRhcmdldFZlcnRleE5hbWUgPSBlZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgICBpZiAodGFyZ2V0VmVydGV4ICE9PSBudWxsKSB7XG4gICAgICAgIGVkZ2VQcmVzZW50ID0gc291cmNlVmVydGV4LmlzRWRnZVByZXNlbnRCeVRhcmdldFZlcnRleCh0YXJnZXRWZXJ0ZXgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlZGdlUHJlc2VudDtcbiAgfVxuXG4gIGlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgdmVydGV4TmFtZXMgPSB0aGlzLmdldFZlcnRleE5hbWVzKCksXG4gICAgICAgICAgdmVydGV4TmFtZXNJbmNsdWRlc1ZlcnRleE5hbWUgPSB2ZXJ0ZXhOYW1lcy5pbmNsdWRlcyh2ZXJ0ZXhOYW1lKSxcbiAgICAgICAgICB2ZXJ0ZXhQcmVzZW50ID0gdmVydGV4TmFtZXNJbmNsdWRlc1ZlcnRleE5hbWU7ICAvLy9cblxuICAgIHJldHVybiB2ZXJ0ZXhQcmVzZW50O1xuICB9XG5cbiAgZ2V0SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGNvbnN0IHZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpLFxuICAgICAgICAgIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzID0gdmVydGV4LmdldEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzKCk7XG5cbiAgICByZXR1cm4gaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXM7XG4gIH1cblxuICBnZXRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBjb25zdCB2ZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSxcbiAgICAgICAgICBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzID0gdmVydGV4LmdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMoKTtcblxuICAgIHJldHVybiBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzO1xuICB9XG5cbiAgaXNFZGdlUHJlc2VudEJ5U291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSkge1xuICAgIGNvbnN0IGVkZ2UgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICBlZGdlUHJlc2VudCA9IHRoaXMuaXNFZGdlUHJlc2VudChlZGdlKTtcblxuICAgIHJldHVybiBlZGdlUHJlc2VudDtcbiAgfVxuXG4gIGFkZFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgdmVydGV4UHJlc2VudCA9IHRoaXMuaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgaWYgKCF2ZXJ0ZXhQcmVzZW50KSB7XG4gICAgICBjb25zdCB2ZXJ0ZXhOYW1lcyA9IHRoaXMuZ2V0VmVydGV4TmFtZXMoKSxcbiAgICAgICAgICAgIHZlcnRleE5hbWVzTGVuZ3RoID0gdmVydGV4TmFtZXMubGVuZ3RoLFxuICAgICAgICAgICAgbmFtZSA9IHZlcnRleE5hbWUsICAvLy9cbiAgICAgICAgICAgIGluZGV4ID0gdmVydGV4TmFtZXNMZW5ndGgsIC8vL1xuICAgICAgICAgICAgdmVydGV4ID0gVmVydGV4LmZyb21OYW1lQW5kSW5kZXgobmFtZSwgaW5kZXgpO1xuXG4gICAgICB0aGlzLnNldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lLCB2ZXJ0ZXgpO1xuICAgIH1cblxuICAgIGNvbnN0IHZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgcmV0dXJuIHZlcnRleDtcbiAgfVxuXG4gIHJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgdmVydGV4UHJlc2VudCA9IHRoaXMuaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgaWYgKCF2ZXJ0ZXhQcmVzZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICB2ZXJ0ZXguZm9yRWFjaEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCgoaW1tZWRpYXRlU3VjY2Vzc1ZlcnRleCkgPT4ge1xuICAgICAgY29uc3QgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXggPSB2ZXJ0ZXg7ICAvLy9cblxuICAgICAgaW1tZWRpYXRlU3VjY2Vzc1ZlcnRleC5yZW1vdmVJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCk7XG4gICAgfSk7XG5cbiAgICB2ZXJ0ZXguZm9yRWFjaEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCkgPT4ge1xuICAgICAgY29uc3QgaW1tZWRpYXRlU3VjY2Vzc1ZlcnRleCA9IHZlcnRleDsgIC8vL1xuXG4gICAgICBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleC5yZW1vdmVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoaW1tZWRpYXRlU3VjY2Vzc1ZlcnRleCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmRlbGV0ZVZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgIGNvbnN0IHZlcnRleGVzID0gdGhpcy5nZXRWZXJ0ZXhlcygpLFxuICAgICAgICAgIGRlbGV0ZWRWZXJ0ZXggPSB2ZXJ0ZXgsIC8vL1xuICAgICAgICAgIGRlbGV0ZWRWZXJ0ZXhJbmRleCA9IGRlbGV0ZWRWZXJ0ZXguZ2V0SW5kZXgoKTtcblxuICAgIHZlcnRleGVzLmZvckVhY2goKHZlcnRleCkgPT4ge1xuICAgICAgY29uc3QgdmVydGV4SW5kZXggPSB2ZXJ0ZXguZ2V0SW5kZXgoKTtcblxuICAgICAgaWYgKHZlcnRleEluZGV4ID4gZGVsZXRlZFZlcnRleEluZGV4KSB7XG4gICAgICAgIHZlcnRleC5kZWNyZW1lbnRJbmRleCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5maWx0ZXJDeWNsaWNFZGdlcygpO1xuICB9XG5cbiAgYWRkVmVydGV4ZXNCeVZlcnRleE5hbWVzKHZlcnRleE5hbWVzKSB7XG4gICAgdmVydGV4TmFtZXMuZm9yRWFjaCgodmVydGV4TmFtZSkgPT4ge1xuICAgICAgdGhpcy5hZGRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG4gICAgfSk7XG4gIH1cblxuICByZW1vdmVWZXJ0ZXhlc0J5VmVydGV4TmFtZXModmVydGV4TmFtZXMpIHtcbiAgICB2ZXJ0ZXhOYW1lcy5mb3JFYWNoKCh2ZXJ0ZXhOYW1lKSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZEVkZ2UoZWRnZSkge1xuICAgIGNvbnN0IHNvdXJjZVZlcnRleE5hbWUgPSBlZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSxcbiAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gZWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCk7XG5cbiAgICBpZiAoc291cmNlVmVydGV4TmFtZSA9PT0gdGFyZ2V0VmVydGV4TmFtZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNvdXJjZVZlcnRleCA9IHRoaXMuYWRkVmVydGV4QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpLFxuICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuYWRkVmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpLFxuICAgICAgICAgIGVkZ2VQcmVzZW50ID0gc291cmNlVmVydGV4LmlzRWRnZVByZXNlbnRCeVRhcmdldFZlcnRleCh0YXJnZXRWZXJ0ZXgpO1xuXG4gICAgaWYgKGVkZ2VQcmVzZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc291cmNlVmVydGV4SW5kZXggPSBzb3VyY2VWZXJ0ZXguZ2V0SW5kZXgoKSxcbiAgICAgICAgICB0YXJnZXRWZXJ0ZXhJbmRleCA9IHRhcmdldFZlcnRleC5nZXRJbmRleCgpO1xuXG4gICAgaWYgKHNvdXJjZVZlcnRleEluZGV4ID4gdGFyZ2V0VmVydGV4SW5kZXgpIHtcbiAgICAgIHRoaXMucmVvcmRlclZlcnRleGVzQnlTb3VyY2VWZXJ0ZXhBbmRUYXJnZXRWZXJ0ZXgoc291cmNlVmVydGV4LCB0YXJnZXRWZXJ0ZXgpO1xuICAgIH1cblxuICAgIGNvbnN0IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ID0gc291cmNlVmVydGV4LCAvLy9cbiAgICAgICAgICBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXggPSB0YXJnZXRWZXJ0ZXg7IC8vL1xuXG4gICAgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXguYWRkSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCk7XG5cbiAgICBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXguYWRkSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpO1xuICB9XG5cbiAgYWRkRWRnZXMoZWRnZXMpIHtcbiAgICBlZGdlcy5mb3JFYWNoKChlZGdlKSA9PiB7XG4gICAgICB0aGlzLmFkZEVkZ2UoZWRnZSk7XG4gICAgfSk7XG4gIH1cblxuICByZW1vdmVFZGdlKGVkZ2UsIHJlbW92ZVN0cmFuZGVkVmVydGV4ZXMpIHtcbiAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gZWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IGVkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgIHNvdXJjZVZlcnRleCA9IHRoaXMuYWRkVmVydGV4QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpLFxuICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuYWRkVmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpLFxuICAgICAgICAgIGVkZ2VQcmVzZW50ID0gc291cmNlVmVydGV4LmlzRWRnZVByZXNlbnRCeVRhcmdldFZlcnRleCh0YXJnZXRWZXJ0ZXgpO1xuXG4gICAgaWYgKCFlZGdlUHJlc2VudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNvdXJjZVZlcnRleC5yZW1vdmVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgodGFyZ2V0VmVydGV4KTtcblxuICAgIHRhcmdldFZlcnRleC5yZW1vdmVJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleChzb3VyY2VWZXJ0ZXgpO1xuXG4gICAgaWYgKHJlbW92ZVN0cmFuZGVkVmVydGV4ZXMpIHtcbiAgICAgIGNvbnN0IHNvdXJjZVZlcnRleFN0cmFuZGVkID0gc291cmNlVmVydGV4LmlzU3RyYW5kZWQoKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleFN0cmFuZGVkID0gdGFyZ2V0VmVydGV4LmlzU3RyYW5kZWQoKTtcblxuICAgICAgaWYgKHNvdXJjZVZlcnRleFN0cmFuZGVkKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGFyZ2V0VmVydGV4U3RyYW5kZWQpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5maWx0ZXJDeWNsaWNFZGdlcygpO1xuICB9XG5cbiAgcmVtb3ZlRWRnZXMoZWRnZXMsIHJlbW92ZVN0cmFuZGVkVmVydGV4ZXMgPSBmYWxzZSkge1xuICAgIGVkZ2VzLmZvckVhY2goKGVkZ2UpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlRWRnZShlZGdlLCByZW1vdmVTdHJhbmRlZFZlcnRleGVzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZUFsbEVkZ2VzQW5kVmVydGV4ZXMoKSB7XG4gICAgdGhpcy52ZXJ0ZXhNYXAgPSB7fTtcbiAgfVxuXG4gIGFkZEVkZ2VCeVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpIHtcbiAgICBjb25zdCBlZGdlID0gRWRnZS5mcm9tU291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICB0aGlzLmFkZEVkZ2UoZWRnZSk7XG4gIH1cblxuICByZW9yZGVyVmVydGV4ZXNCeVNvdXJjZVZlcnRleEFuZFRhcmdldFZlcnRleChzb3VyY2VWZXJ0ZXgsIHRhcmdldFZlcnRleCkge1xuICAgIGNvbnN0IHNvdXJjZVZlcnRleFJlYWNoYWJsZSA9IHRhcmdldFZlcnRleC5pc1ZlcnRleFJlYWNoYWJsZShzb3VyY2VWZXJ0ZXgpO1xuXG4gICAgaWYgKHNvdXJjZVZlcnRleFJlYWNoYWJsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGZvcndhcmRzVmlzaXRlZFZlcnRleGVzID0gdGFyZ2V0VmVydGV4LnJldHJpZXZlRm9yd2FyZHNWaXNpdGVkVmVydGV4ZXMoKSxcbiAgICAgICAgICBiYWNrd2FyZHNWaXNpdGVkVmVydGV4ZXMgPSBzb3VyY2VWZXJ0ZXgucmV0cmlldmVCYWNrd2FyZHNWaXNpdGVkVmVydGV4ZXMoKTtcblxuICAgIG9yZGVyVmVydGV4ZXMoYmFja3dhcmRzVmlzaXRlZFZlcnRleGVzKTtcblxuICAgIG9yZGVyVmVydGV4ZXMoZm9yd2FyZHNWaXNpdGVkVmVydGV4ZXMpO1xuXG4gICAgY29uc3QgdmlzaXRlZFZlcnRleGVzID0gW1xuICAgICAgICAgICAgLi4uYmFja3dhcmRzVmlzaXRlZFZlcnRleGVzLFxuICAgICAgICAgICAgLi4uZm9yd2FyZHNWaXNpdGVkVmVydGV4ZXNcbiAgICAgICAgICBdLFxuICAgICAgICAgIHZpc2l0ZWRJbmRleGVzID0gaW5kZXhlc0Zyb21WZXJ0ZXhlcyh2aXNpdGVkVmVydGV4ZXMpO1xuXG4gICAgb3JkZXJJbmRleGVzKHZpc2l0ZWRJbmRleGVzKTtcblxuICAgIHZpc2l0ZWRWZXJ0ZXhlcy5mb3JFYWNoKCh2aXNpdGVkVmVydGV4LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgdmlzaXRlZEluZGV4ID0gdmlzaXRlZEluZGV4ZXNbaW5kZXhdO1xuXG4gICAgICBpbmRleCA9IHZpc2l0ZWRJbmRleDsgLy8vXG5cbiAgICAgIHZpc2l0ZWRWZXJ0ZXguc2V0SW5kZXgoaW5kZXgpO1xuICAgIH0pO1xuICB9XG5cbiAgZmlsdGVyQ3ljbGljRWRnZXMoKSB7XG4gICAgY29uc3QgY3ljbGljRWRnZXMgPSB0aGlzLmdldEN5Y2xpY0VkZ2VzKCksXG4gICAgICAgICAgZWRnZXMgPSBjeWNsaWNFZGdlczsgIC8vL1xuXG4gICAgZWRnZXMuZm9yRWFjaCgoZWRnZSkgPT4ge1xuICAgICAgY29uc3Qgc291cmNlVmVydGV4TmFtZSA9IGVkZ2UuZ2V0U291cmNlVmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IGVkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgc291cmNlVmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSksXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICAgIHNvdXJjZVZlcnRleFJlYWNoYWJsZSA9IHRhcmdldFZlcnRleC5pc1ZlcnRleFJlYWNoYWJsZShzb3VyY2VWZXJ0ZXgpO1xuXG4gICAgICBpZiAoIXNvdXJjZVZlcnRleFJlYWNoYWJsZSkge1xuICAgICAgICB0aGlzLnJlb3JkZXJWZXJ0ZXhlc0J5U291cmNlVmVydGV4QW5kVGFyZ2V0VmVydGV4KHNvdXJjZVZlcnRleCwgdGFyZ2V0VmVydGV4KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lLCB2ZXJ0ZXgpIHtcbiAgICB0aGlzLnZlcnRleE1hcFt2ZXJ0ZXhOYW1lXSA9IHZlcnRleDtcbiAgfVxuXG4gIGRlbGV0ZVZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgZGVsZXRlIHRoaXMudmVydGV4TWFwW3ZlcnRleE5hbWVdO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHZlcnRleE1hcCA9IHt9LFxuICAgICAgICAgIGRpcmVjdGVkR3JhcGggPSBuZXcgRGlyZWN0ZWRHcmFwaCh2ZXJ0ZXhNYXApO1xuICAgIFxuICAgIHJldHVybiBkaXJlY3RlZEdyYXBoOyAgICBcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkRpcmVjdGVkR3JhcGgiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwidmVydGV4TWFwIiwiZ2V0VmVydGV4TmFwIiwiZ2V0VmVydGV4ZXMiLCJ2ZXJ0ZXhNYXBWYWx1ZXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJ2ZXJ0ZXhlcyIsImdldFZlcnRleE5hbWVzIiwidmVydGV4TWFwS2V5cyIsImtleXMiLCJ2ZXJ0ZXhOYW1lcyIsImdldE9yZGVyZWRWZXJ0ZXhOYW1lcyIsIm9yZGVyVmVydGV4ZXMiLCJvcmRlcmVkVmVydGV4ZXMiLCJvcmRlcmVkVmVydGV4TmFtZXMiLCJ2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhlcyIsImdldFZlcnRleEJ5VmVydGV4TmFtZSIsInZlcnRleE5hbWUiLCJ2ZXJ0ZXhQcmVzZW50IiwiaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lIiwidmVydGV4IiwiZ2V0RWRnZXNCeVNvdXJjZVZlcnRleE5hbWUiLCJzb3VyY2VWZXJ0ZXhOYW1lIiwiZWRnZXMiLCJzb3VyY2VWZXJ0ZXgiLCJpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcyIsImdldEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzIiwiaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXMiLCJ0YXJnZXRWZXJ0ZXhOYW1lcyIsImZvckVhY2giLCJ0YXJnZXRWZXJ0ZXhOYW1lIiwiZWRnZSIsIkVkZ2UiLCJmcm9tU291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUiLCJwdXNoIiwiZ2V0RWRnZXNCeVRhcmdldFZlcnRleE5hbWUiLCJ0YXJnZXRWZXJ0ZXgiLCJpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzIiwiZ2V0SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcyIsImltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMiLCJzb3VyY2VWZXJ0ZXhOYW1lcyIsImdldEZpcnN0Q3ljbGUiLCJmaXJzdEN5Y2xlIiwiY3ljbGVzUHJlc2VudCIsImFyZUN5Y2xlc1ByZXNlbnQiLCJjeWNsaWNFZGdlcyIsImdldEN5Y2xpY0VkZ2VzIiwiZmlyc3RDeWNsaWNFZGdlIiwiZ2V0U291cmNlVmVydGV4TmFtZSIsImdldFRhcmdldFZlcnRleE5hbWUiLCJleGhhdXN0aXZlRm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoIiwicHJlZGVjZXNzb3JWZXJ0ZXhlcyIsInRlcm1pbmF0ZSIsImN5Y2xlIiwiQ3ljbGUiLCJmcm9tU291cmNlVmVydGV4QW5kUHJlZGVjZXNzb3JWZXJ0ZXhlcyIsInNvdXJjZVZlcnRleEluZGV4IiwiZ2V0SW5kZXgiLCJmb3JFYWNoSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4IiwiaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4IiwidGFyZ2V0VmVydGV4SW5kZXgiLCJnZXROYW1lIiwiY3ljbGljRWRnZSIsInNvbWUiLCJjeWNsaWNFZGdlUHJlc2VudCIsInNvbWVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgiLCJpc0VkZ2VQcmVzZW50IiwiZWRnZVByZXNlbnQiLCJpc0VkZ2VQcmVzZW50QnlUYXJnZXRWZXJ0ZXgiLCJ2ZXJ0ZXhOYW1lc0luY2x1ZGVzVmVydGV4TmFtZSIsImluY2x1ZGVzIiwiZ2V0SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUiLCJnZXRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcyIsImdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUiLCJnZXRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzIiwiaXNFZGdlUHJlc2VudEJ5U291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUiLCJhZGRWZXJ0ZXhCeVZlcnRleE5hbWUiLCJ2ZXJ0ZXhOYW1lc0xlbmd0aCIsImxlbmd0aCIsIm5hbWUiLCJpbmRleCIsIlZlcnRleCIsImZyb21OYW1lQW5kSW5kZXgiLCJzZXRWZXJ0ZXhCeVZlcnRleE5hbWUiLCJyZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUiLCJpbW1lZGlhdGVTdWNjZXNzVmVydGV4IiwiaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgiLCJyZW1vdmVJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCIsImZvckVhY2hJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCIsInJlbW92ZUltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCIsImRlbGV0ZVZlcnRleEJ5VmVydGV4TmFtZSIsImRlbGV0ZWRWZXJ0ZXgiLCJkZWxldGVkVmVydGV4SW5kZXgiLCJ2ZXJ0ZXhJbmRleCIsImRlY3JlbWVudEluZGV4IiwiZmlsdGVyQ3ljbGljRWRnZXMiLCJhZGRWZXJ0ZXhlc0J5VmVydGV4TmFtZXMiLCJyZW1vdmVWZXJ0ZXhlc0J5VmVydGV4TmFtZXMiLCJhZGRFZGdlIiwicmVvcmRlclZlcnRleGVzQnlTb3VyY2VWZXJ0ZXhBbmRUYXJnZXRWZXJ0ZXgiLCJhZGRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgiLCJhZGRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCIsImFkZEVkZ2VzIiwicmVtb3ZlRWRnZSIsInJlbW92ZVN0cmFuZGVkVmVydGV4ZXMiLCJzb3VyY2VWZXJ0ZXhTdHJhbmRlZCIsImlzU3RyYW5kZWQiLCJ0YXJnZXRWZXJ0ZXhTdHJhbmRlZCIsInJlbW92ZUVkZ2VzIiwicmVtb3ZlQWxsRWRnZXNBbmRWZXJ0ZXhlcyIsImFkZEVkZ2VCeVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lIiwic291cmNlVmVydGV4UmVhY2hhYmxlIiwiaXNWZXJ0ZXhSZWFjaGFibGUiLCJmb3J3YXJkc1Zpc2l0ZWRWZXJ0ZXhlcyIsInJldHJpZXZlRm9yd2FyZHNWaXNpdGVkVmVydGV4ZXMiLCJiYWNrd2FyZHNWaXNpdGVkVmVydGV4ZXMiLCJyZXRyaWV2ZUJhY2t3YXJkc1Zpc2l0ZWRWZXJ0ZXhlcyIsInZpc2l0ZWRWZXJ0ZXhlcyIsInZpc2l0ZWRJbmRleGVzIiwiaW5kZXhlc0Zyb21WZXJ0ZXhlcyIsIm9yZGVySW5kZXhlcyIsInZpc2l0ZWRWZXJ0ZXgiLCJ2aXNpdGVkSW5kZXgiLCJzZXRJbmRleCIsImZyb21Ob3RoaW5nIiwiZGlyZWN0ZWRHcmFwaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFhcUJBOzs7eUJB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