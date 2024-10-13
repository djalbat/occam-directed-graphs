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
                var _this = this;
                var removeStrandedVertexes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
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
                var sourceVertexForwardsReachable = targetVertex.isVertexForwardsReachable(sourceVertex);
                if (sourceVertexForwardsReachable) {
                    return;
                }
                var forwardsReachableVertexes = targetVertex.retrieveForwardsReachableVertexes(), backwardsReachableVertexes = sourceVertex.retrieveBackwardsReachableVertexes();
                (0, _vertex1.orderVertexes)(backwardsReachableVertexes);
                (0, _vertex1.orderVertexes)(forwardsReachableVertexes);
                var reachableVertexes = _to_consumable_array(backwardsReachableVertexes).concat(_to_consumable_array(forwardsReachableVertexes)), reachableIndexes = (0, _index.indexesFromVertexes)(reachableVertexes);
                (0, _index.orderIndexes)(reachableIndexes);
                reachableVertexes.forEach(function(reachableVertex, index) {
                    var reachableIndex = reachableIndexes[index];
                    index = reachableIndex; ///
                    reachableVertex.setIndex(index);
                });
            }
        },
        {
            key: "filterCyclicEdges",
            value: function filterCyclicEdges() {
                var _this = this;
                var cyclicEdges = this.getCyclicEdges(), edges = cyclicEdges; ///
                edges.forEach(function(edge) {
                    var sourceVertexName = edge.getSourceVertexName(), targetVertexName = edge.getTargetVertexName(), sourceVertex = _this.getVertexByVertexName(sourceVertexName), targetVertex = _this.getVertexByVertexName(targetVertexName), sourceVertexForwardsReachable = targetVertex.isVertexForwardsReachable(sourceVertex);
                    if (!sourceVertexForwardsReachable) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kaXJlY3RlZEdyYXBoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEVkZ2UgZnJvbSBcIi4vZWRnZVwiO1xuaW1wb3J0IEN5Y2xlIGZyb20gXCIuL2N5Y2xlXCI7XG5pbXBvcnQgVmVydGV4IGZyb20gXCIuL3ZlcnRleFwiO1xuXG5pbXBvcnQgeyBvcmRlckluZGV4ZXMsIGluZGV4ZXNGcm9tVmVydGV4ZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvaW5kZXhcIjtcbmltcG9ydCB7IG9yZGVyVmVydGV4ZXMsIHZlcnRleE5hbWVzRnJvbVZlcnRleGVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3ZlcnRleFwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0ZWRHcmFwaCB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleE1hcCkge1xuICAgIHRoaXMudmVydGV4TWFwID0gdmVydGV4TWFwO1xuICB9XG5cbiAgZ2V0VmVydGV4TmFwKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleE1hcDtcbiAgfVxuXG4gIGdldFZlcnRleGVzKCkge1xuICAgIGNvbnN0IHZlcnRleE1hcFZhbHVlcyA9IE9iamVjdC52YWx1ZXModGhpcy52ZXJ0ZXhNYXApLFxuICAgICAgICAgIHZlcnRleGVzID0gdmVydGV4TWFwVmFsdWVzOyAvLy9cblxuICAgIHJldHVybiB2ZXJ0ZXhlcztcbiAgfVxuXG4gIGdldFZlcnRleE5hbWVzKCkge1xuICAgIGNvbnN0IHZlcnRleE1hcEtleXMgPSBPYmplY3Qua2V5cyh0aGlzLnZlcnRleE1hcCksXG4gICAgICAgICAgdmVydGV4TmFtZXMgPSB2ZXJ0ZXhNYXBLZXlzOyAgLy8vXG5cbiAgICByZXR1cm4gdmVydGV4TmFtZXM7XG4gIH1cblxuICBnZXRPcmRlcmVkVmVydGV4TmFtZXMoKSB7XG4gICAgY29uc3QgdmVydGV4ZXMgPSB0aGlzLmdldFZlcnRleGVzKCk7XG5cbiAgICBvcmRlclZlcnRleGVzKHZlcnRleGVzKTtcblxuICAgIGNvbnN0IG9yZGVyZWRWZXJ0ZXhlcyA9IHZlcnRleGVzLCAvLy9cbiAgICAgICAgICBvcmRlcmVkVmVydGV4TmFtZXMgPSB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhlcyhvcmRlcmVkVmVydGV4ZXMpO1xuXG4gICAgcmV0dXJuIG9yZGVyZWRWZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGdldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgdmVydGV4UHJlc2VudCA9IHRoaXMuaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpLFxuICAgICAgICAgIHZlcnRleCA9IHZlcnRleFByZXNlbnQgP1xuICAgICAgICAgICAgICAgICAgICAgdGhpcy52ZXJ0ZXhNYXBbdmVydGV4TmFtZV0gOlxuICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gICAgcmV0dXJuIHZlcnRleDtcbiAgfVxuXG4gIGdldEVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpIHtcbiAgICBjb25zdCBlZGdlcyA9IFtdLFxuICAgICAgICAgIHNvdXJjZVZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpO1xuXG4gICAgaWYgKHNvdXJjZVZlcnRleCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMgPSBzb3VyY2VWZXJ0ZXguZ2V0SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMoKSxcbiAgICAgICAgICAgIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzID0gdmVydGV4TmFtZXNGcm9tVmVydGV4ZXMoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZXMgPSBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lczsgIC8vL1xuXG4gICAgICB0YXJnZXRWZXJ0ZXhOYW1lcy5mb3JFYWNoKCh0YXJnZXRWZXJ0ZXhOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGVkZ2UgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgICBlZGdlcy5wdXNoKGVkZ2UpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVkZ2VzO1xuICB9XG5cbiAgZ2V0RWRnZXNCeVRhcmdldFZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSkge1xuICAgIGNvbnN0IGVkZ2VzID0gW10sXG4gICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICBpZiAodGFyZ2V0VmVydGV4ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzID0gdGFyZ2V0VmVydGV4LmdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMoKSxcbiAgICAgICAgICAgIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMgPSB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhlcyhpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzKSxcbiAgICAgICAgICAgIHNvdXJjZVZlcnRleE5hbWVzID0gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lczsgIC8vL1xuXG4gICAgICBzb3VyY2VWZXJ0ZXhOYW1lcy5mb3JFYWNoKChzb3VyY2VWZXJ0ZXhOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGVkZ2UgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgICBlZGdlcy5wdXNoKGVkZ2UpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVkZ2VzO1xuICB9XG5cbiAgZ2V0Rmlyc3RDeWNsZSgpIHtcbiAgICBsZXQgZmlyc3RDeWNsZSA9IG51bGw7XG5cbiAgICBjb25zdCBjeWNsZXNQcmVzZW50ID0gdGhpcy5hcmVDeWNsZXNQcmVzZW50KCk7XG5cbiAgICBpZiAoY3ljbGVzUHJlc2VudCkge1xuICAgICAgY29uc3QgY3ljbGljRWRnZXMgPSB0aGlzLmdldEN5Y2xpY0VkZ2VzKCksXG4gICAgICAgICAgICBmaXJzdEN5Y2xpY0VkZ2UgPSBmaXJzdChjeWNsaWNFZGdlcyksXG4gICAgICAgICAgICBzb3VyY2VWZXJ0ZXhOYW1lID0gZmlyc3RDeWNsaWNFZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSwgLy8vXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gZmlyc3RDeWNsaWNFZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKSwgLy8vXG4gICAgICAgICAgICBzb3VyY2VWZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgICB0YXJnZXRWZXJ0ZXguZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoKCh2ZXJ0ZXgsIHByZWRlY2Vzc29yVmVydGV4ZXMpID0+IHtcbiAgICAgICAgbGV0IHRlcm1pbmF0ZSA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh2ZXJ0ZXggPT09IHNvdXJjZVZlcnRleCkge1xuICAgICAgICAgIHRlcm1pbmF0ZSA9IHRydWU7XG5cbiAgICAgICAgICBjb25zdCBjeWNsZSA9IEN5Y2xlLmZyb21Tb3VyY2VWZXJ0ZXhBbmRQcmVkZWNlc3NvclZlcnRleGVzKHNvdXJjZVZlcnRleCwgcHJlZGVjZXNzb3JWZXJ0ZXhlcyk7ICAvLy9cblxuICAgICAgICAgIGZpcnN0Q3ljbGUgPSBjeWNsZTsgLy8vXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGVybWluYXRlO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpcnN0Q3ljbGU7XG4gIH1cblxuICBnZXRDeWNsaWNFZGdlcygpIHtcbiAgICBjb25zdCBjeWNsaWNFZGdlcyA9IFtdLFxuICAgICAgICAgIHZlcnRleGVzID0gdGhpcy5nZXRWZXJ0ZXhlcygpO1xuXG4gICAgdmVydGV4ZXMuZm9yRWFjaCgodmVydGV4KSA9PiB7XG4gICAgICBjb25zdCBzb3VyY2VWZXJ0ZXggPSB2ZXJ0ZXgsICAvLy9cbiAgICAgICAgICAgIHNvdXJjZVZlcnRleEluZGV4ID0gc291cmNlVmVydGV4LmdldEluZGV4KCk7XG5cbiAgICAgIHZlcnRleC5mb3JFYWNoSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgpID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0VmVydGV4ID0gaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4LCAgLy8vXG4gICAgICAgICAgICAgIHRhcmdldFZlcnRleEluZGV4ID0gdGFyZ2V0VmVydGV4LmdldEluZGV4KCk7XG5cbiAgICAgICAgaWYgKHRhcmdldFZlcnRleEluZGV4IDwgc291cmNlVmVydGV4SW5kZXgpIHtcbiAgICAgICAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gc291cmNlVmVydGV4LmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gdGFyZ2V0VmVydGV4LmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICBlZGdlID0gRWRnZS5mcm9tU291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSksXG4gICAgICAgICAgICAgICAgY3ljbGljRWRnZSA9IGVkZ2U7ICAvLy9cblxuICAgICAgICAgIGN5Y2xpY0VkZ2VzLnB1c2goY3ljbGljRWRnZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBzb3VyY2VWZXJ0ZXhcbiAgICB9KTtcblxuICAgIHJldHVybiBjeWNsaWNFZGdlcztcbiAgfVxuXG4gIGFyZUN5Y2xlc1ByZXNlbnQoKSB7XG4gICAgY29uc3QgdmVydGV4ZXMgPSB0aGlzLmdldFZlcnRleGVzKCksXG4gICAgICAgICAgY3ljbGVzUHJlc2VudCA9IHZlcnRleGVzLnNvbWUoKHZlcnRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc291cmNlVmVydGV4ID0gdmVydGV4LCAgLy8vXG4gICAgICAgICAgICAgICAgICBzb3VyY2VWZXJ0ZXhJbmRleCA9IHNvdXJjZVZlcnRleC5nZXRJbmRleCgpLFxuICAgICAgICAgICAgICAgICAgY3ljbGljRWRnZVByZXNlbnQgPSB2ZXJ0ZXguc29tZUltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCgoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldFZlcnRleCA9IGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCwgIC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRWZXJ0ZXhJbmRleCA9IHRhcmdldFZlcnRleC5nZXRJbmRleCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRWZXJ0ZXhJbmRleCA8IHNvdXJjZVZlcnRleEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoY3ljbGljRWRnZVByZXNlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gY3ljbGVzUHJlc2VudDtcbiAgfVxuXG4gIGlzRWRnZVByZXNlbnQoZWRnZSkge1xuICAgIGxldCBlZGdlUHJlc2VudCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc291cmNlVmVydGV4TmFtZSA9IGVkZ2UuZ2V0U291cmNlVmVydGV4TmFtZSgpLFxuICAgICAgICAgIHNvdXJjZVZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpO1xuXG4gICAgaWYgKHNvdXJjZVZlcnRleCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdGFyZ2V0VmVydGV4TmFtZSA9IGVkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICAgIGlmICh0YXJnZXRWZXJ0ZXggIT09IG51bGwpIHtcbiAgICAgICAgZWRnZVByZXNlbnQgPSBzb3VyY2VWZXJ0ZXguaXNFZGdlUHJlc2VudEJ5VGFyZ2V0VmVydGV4KHRhcmdldFZlcnRleCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVkZ2VQcmVzZW50O1xuICB9XG5cbiAgaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBjb25zdCB2ZXJ0ZXhOYW1lcyA9IHRoaXMuZ2V0VmVydGV4TmFtZXMoKSxcbiAgICAgICAgICB2ZXJ0ZXhOYW1lc0luY2x1ZGVzVmVydGV4TmFtZSA9IHZlcnRleE5hbWVzLmluY2x1ZGVzKHZlcnRleE5hbWUpLFxuICAgICAgICAgIHZlcnRleFByZXNlbnQgPSB2ZXJ0ZXhOYW1lc0luY2x1ZGVzVmVydGV4TmFtZTsgIC8vL1xuXG4gICAgcmV0dXJuIHZlcnRleFByZXNlbnQ7XG4gIH1cblxuICBnZXRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgdmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSksXG4gICAgICAgICAgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXMgPSB2ZXJ0ZXguZ2V0SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXMoKTtcblxuICAgIHJldHVybiBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGNvbnN0IHZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpLFxuICAgICAgICAgIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMgPSB2ZXJ0ZXguZ2V0SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcygpO1xuXG4gICAgcmV0dXJuIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXM7XG4gIH1cblxuICBpc0VkZ2VQcmVzZW50QnlTb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgZWRnZSA9IEVkZ2UuZnJvbVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpLFxuICAgICAgICAgIGVkZ2VQcmVzZW50ID0gdGhpcy5pc0VkZ2VQcmVzZW50KGVkZ2UpO1xuXG4gICAgcmV0dXJuIGVkZ2VQcmVzZW50O1xuICB9XG5cbiAgYWRkVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQcmVzZW50ID0gdGhpcy5pc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICBpZiAoIXZlcnRleFByZXNlbnQpIHtcbiAgICAgIGNvbnN0IHZlcnRleE5hbWVzID0gdGhpcy5nZXRWZXJ0ZXhOYW1lcygpLFxuICAgICAgICAgICAgdmVydGV4TmFtZXNMZW5ndGggPSB2ZXJ0ZXhOYW1lcy5sZW5ndGgsXG4gICAgICAgICAgICBuYW1lID0gdmVydGV4TmFtZSwgIC8vL1xuICAgICAgICAgICAgaW5kZXggPSB2ZXJ0ZXhOYW1lc0xlbmd0aCwgLy8vXG4gICAgICAgICAgICB2ZXJ0ZXggPSBWZXJ0ZXguZnJvbU5hbWVBbmRJbmRleChuYW1lLCBpbmRleCk7XG5cbiAgICAgIHRoaXMuc2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUsIHZlcnRleCk7XG4gICAgfVxuXG4gICAgY29uc3QgdmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICByZXR1cm4gdmVydGV4O1xuICB9XG5cbiAgcmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQcmVzZW50ID0gdGhpcy5pc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICBpZiAoIXZlcnRleFByZXNlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB2ZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgIHZlcnRleC5mb3JFYWNoSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KChpbW1lZGlhdGVTdWNjZXNzVmVydGV4KSA9PiB7XG4gICAgICBjb25zdCBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCA9IHZlcnRleDsgIC8vL1xuXG4gICAgICBpbW1lZGlhdGVTdWNjZXNzVmVydGV4LnJlbW92ZUltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KTtcbiAgICB9KTtcblxuICAgIHZlcnRleC5mb3JFYWNoSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgoKGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KSA9PiB7XG4gICAgICBjb25zdCBpbW1lZGlhdGVTdWNjZXNzVmVydGV4ID0gdmVydGV4OyAgLy8vXG5cbiAgICAgIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4LnJlbW92ZUltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleChpbW1lZGlhdGVTdWNjZXNzVmVydGV4KTtcbiAgICB9KTtcblxuICAgIHRoaXMuZGVsZXRlVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgY29uc3QgdmVydGV4ZXMgPSB0aGlzLmdldFZlcnRleGVzKCksXG4gICAgICAgICAgZGVsZXRlZFZlcnRleCA9IHZlcnRleCwgLy8vXG4gICAgICAgICAgZGVsZXRlZFZlcnRleEluZGV4ID0gZGVsZXRlZFZlcnRleC5nZXRJbmRleCgpO1xuXG4gICAgdmVydGV4ZXMuZm9yRWFjaCgodmVydGV4KSA9PiB7XG4gICAgICBjb25zdCB2ZXJ0ZXhJbmRleCA9IHZlcnRleC5nZXRJbmRleCgpO1xuXG4gICAgICBpZiAodmVydGV4SW5kZXggPiBkZWxldGVkVmVydGV4SW5kZXgpIHtcbiAgICAgICAgdmVydGV4LmRlY3JlbWVudEluZGV4KCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmZpbHRlckN5Y2xpY0VkZ2VzKCk7XG4gIH1cblxuICBhZGRWZXJ0ZXhlc0J5VmVydGV4TmFtZXModmVydGV4TmFtZXMpIHtcbiAgICB2ZXJ0ZXhOYW1lcy5mb3JFYWNoKCh2ZXJ0ZXhOYW1lKSA9PiB7XG4gICAgICB0aGlzLmFkZFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZVZlcnRleGVzQnlWZXJ0ZXhOYW1lcyh2ZXJ0ZXhOYW1lcykge1xuICAgIHZlcnRleE5hbWVzLmZvckVhY2goKHZlcnRleE5hbWUpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkRWRnZShlZGdlKSB7XG4gICAgY29uc3Qgc291cmNlVmVydGV4TmFtZSA9IGVkZ2UuZ2V0U291cmNlVmVydGV4TmFtZSgpLFxuICAgICAgICAgIHRhcmdldFZlcnRleE5hbWUgPSBlZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKTtcblxuICAgIGlmIChzb3VyY2VWZXJ0ZXhOYW1lID09PSB0YXJnZXRWZXJ0ZXhOYW1lKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc291cmNlVmVydGV4ID0gdGhpcy5hZGRWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSksXG4gICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdGhpcy5hZGRWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSksXG4gICAgICAgICAgZWRnZVByZXNlbnQgPSBzb3VyY2VWZXJ0ZXguaXNFZGdlUHJlc2VudEJ5VGFyZ2V0VmVydGV4KHRhcmdldFZlcnRleCk7XG5cbiAgICBpZiAoZWRnZVByZXNlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzb3VyY2VWZXJ0ZXhJbmRleCA9IHNvdXJjZVZlcnRleC5nZXRJbmRleCgpLFxuICAgICAgICAgIHRhcmdldFZlcnRleEluZGV4ID0gdGFyZ2V0VmVydGV4LmdldEluZGV4KCk7XG5cbiAgICBpZiAoc291cmNlVmVydGV4SW5kZXggPiB0YXJnZXRWZXJ0ZXhJbmRleCkge1xuICAgICAgdGhpcy5yZW9yZGVyVmVydGV4ZXNCeVNvdXJjZVZlcnRleEFuZFRhcmdldFZlcnRleChzb3VyY2VWZXJ0ZXgsIHRhcmdldFZlcnRleCk7XG4gICAgfVxuXG4gICAgY29uc3QgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXggPSBzb3VyY2VWZXJ0ZXgsIC8vL1xuICAgICAgICAgIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCA9IHRhcmdldFZlcnRleDsgLy8vXG5cbiAgICBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleC5hZGRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KTtcblxuICAgIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleC5hZGRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCk7XG4gIH1cblxuICBhZGRFZGdlcyhlZGdlcykge1xuICAgIGVkZ2VzLmZvckVhY2goKGVkZ2UpID0+IHtcbiAgICAgIHRoaXMuYWRkRWRnZShlZGdlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZUVkZ2UoZWRnZSwgcmVtb3ZlU3RyYW5kZWRWZXJ0ZXhlcykge1xuICAgIGNvbnN0IHNvdXJjZVZlcnRleE5hbWUgPSBlZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSxcbiAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gZWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgc291cmNlVmVydGV4ID0gdGhpcy5hZGRWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSksXG4gICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdGhpcy5hZGRWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSksXG4gICAgICAgICAgZWRnZVByZXNlbnQgPSBzb3VyY2VWZXJ0ZXguaXNFZGdlUHJlc2VudEJ5VGFyZ2V0VmVydGV4KHRhcmdldFZlcnRleCk7XG5cbiAgICBpZiAoIWVkZ2VQcmVzZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc291cmNlVmVydGV4LnJlbW92ZUltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCh0YXJnZXRWZXJ0ZXgpO1xuXG4gICAgdGFyZ2V0VmVydGV4LnJlbW92ZUltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KHNvdXJjZVZlcnRleCk7XG5cbiAgICBpZiAocmVtb3ZlU3RyYW5kZWRWZXJ0ZXhlcykge1xuICAgICAgY29uc3Qgc291cmNlVmVydGV4U3RyYW5kZWQgPSBzb3VyY2VWZXJ0ZXguaXNTdHJhbmRlZCgpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4U3RyYW5kZWQgPSB0YXJnZXRWZXJ0ZXguaXNTdHJhbmRlZCgpO1xuXG4gICAgICBpZiAoc291cmNlVmVydGV4U3RyYW5kZWQpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0YXJnZXRWZXJ0ZXhTdHJhbmRlZCkge1xuICAgICAgICB0aGlzLnJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmZpbHRlckN5Y2xpY0VkZ2VzKCk7XG4gIH1cblxuICByZW1vdmVFZGdlcyhlZGdlcywgcmVtb3ZlU3RyYW5kZWRWZXJ0ZXhlcyA9IGZhbHNlKSB7XG4gICAgZWRnZXMuZm9yRWFjaCgoZWRnZSkgPT4ge1xuICAgICAgdGhpcy5yZW1vdmVFZGdlKGVkZ2UsIHJlbW92ZVN0cmFuZGVkVmVydGV4ZXMpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlQWxsRWRnZXNBbmRWZXJ0ZXhlcygpIHtcbiAgICB0aGlzLnZlcnRleE1hcCA9IHt9O1xuICB9XG5cbiAgYWRkRWRnZUJ5U291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSkge1xuICAgIGNvbnN0IGVkZ2UgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgIHRoaXMuYWRkRWRnZShlZGdlKTtcbiAgfVxuXG4gIHJlb3JkZXJWZXJ0ZXhlc0J5U291cmNlVmVydGV4QW5kVGFyZ2V0VmVydGV4KHNvdXJjZVZlcnRleCwgdGFyZ2V0VmVydGV4KSB7XG4gICAgY29uc3Qgc291cmNlVmVydGV4Rm9yd2FyZHNSZWFjaGFibGUgPSB0YXJnZXRWZXJ0ZXguaXNWZXJ0ZXhGb3J3YXJkc1JlYWNoYWJsZShzb3VyY2VWZXJ0ZXgpO1xuXG4gICAgaWYgKHNvdXJjZVZlcnRleEZvcndhcmRzUmVhY2hhYmxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZm9yd2FyZHNSZWFjaGFibGVWZXJ0ZXhlcyA9IHRhcmdldFZlcnRleC5yZXRyaWV2ZUZvcndhcmRzUmVhY2hhYmxlVmVydGV4ZXMoKSxcbiAgICAgICAgICBiYWNrd2FyZHNSZWFjaGFibGVWZXJ0ZXhlcyA9IHNvdXJjZVZlcnRleC5yZXRyaWV2ZUJhY2t3YXJkc1JlYWNoYWJsZVZlcnRleGVzKCk7XG5cbiAgICBvcmRlclZlcnRleGVzKGJhY2t3YXJkc1JlYWNoYWJsZVZlcnRleGVzKTtcblxuICAgIG9yZGVyVmVydGV4ZXMoZm9yd2FyZHNSZWFjaGFibGVWZXJ0ZXhlcyk7XG5cbiAgICBjb25zdCByZWFjaGFibGVWZXJ0ZXhlcyA9IFtcbiAgICAgICAgICAgIC4uLmJhY2t3YXJkc1JlYWNoYWJsZVZlcnRleGVzLFxuICAgICAgICAgICAgLi4uZm9yd2FyZHNSZWFjaGFibGVWZXJ0ZXhlc1xuICAgICAgICAgIF0sXG4gICAgICAgICAgcmVhY2hhYmxlSW5kZXhlcyA9IGluZGV4ZXNGcm9tVmVydGV4ZXMocmVhY2hhYmxlVmVydGV4ZXMpO1xuXG4gICAgb3JkZXJJbmRleGVzKHJlYWNoYWJsZUluZGV4ZXMpO1xuXG4gICAgcmVhY2hhYmxlVmVydGV4ZXMuZm9yRWFjaCgocmVhY2hhYmxlVmVydGV4LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgcmVhY2hhYmxlSW5kZXggPSByZWFjaGFibGVJbmRleGVzW2luZGV4XTtcblxuICAgICAgaW5kZXggPSByZWFjaGFibGVJbmRleDsgLy8vXG5cbiAgICAgIHJlYWNoYWJsZVZlcnRleC5zZXRJbmRleChpbmRleCk7XG4gICAgfSk7XG4gIH1cblxuICBmaWx0ZXJDeWNsaWNFZGdlcygpIHtcbiAgICBjb25zdCBjeWNsaWNFZGdlcyA9IHRoaXMuZ2V0Q3ljbGljRWRnZXMoKSxcbiAgICAgICAgICBlZGdlcyA9IGN5Y2xpY0VkZ2VzOyAgLy8vXG5cbiAgICBlZGdlcy5mb3JFYWNoKChlZGdlKSA9PiB7XG4gICAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gZWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gZWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICBzb3VyY2VWZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpLFxuICAgICAgICAgICAgc291cmNlVmVydGV4Rm9yd2FyZHNSZWFjaGFibGUgPSB0YXJnZXRWZXJ0ZXguaXNWZXJ0ZXhGb3J3YXJkc1JlYWNoYWJsZShzb3VyY2VWZXJ0ZXgpO1xuXG4gICAgICBpZiAoIXNvdXJjZVZlcnRleEZvcndhcmRzUmVhY2hhYmxlKSB7XG4gICAgICAgIHRoaXMucmVvcmRlclZlcnRleGVzQnlTb3VyY2VWZXJ0ZXhBbmRUYXJnZXRWZXJ0ZXgoc291cmNlVmVydGV4LCB0YXJnZXRWZXJ0ZXgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUsIHZlcnRleCkge1xuICAgIHRoaXMudmVydGV4TWFwW3ZlcnRleE5hbWVdID0gdmVydGV4O1xuICB9XG5cbiAgZGVsZXRlVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBkZWxldGUgdGhpcy52ZXJ0ZXhNYXBbdmVydGV4TmFtZV07XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgdmVydGV4TWFwID0ge30sXG4gICAgICAgICAgZGlyZWN0ZWRHcmFwaCA9IG5ldyBEaXJlY3RlZEdyYXBoKHZlcnRleE1hcCk7XG4gICAgXG4gICAgcmV0dXJuIGRpcmVjdGVkR3JhcGg7ICAgIFxuICB9XG59XG4iXSwibmFtZXMiOlsiRGlyZWN0ZWRHcmFwaCIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJ2ZXJ0ZXhNYXAiLCJnZXRWZXJ0ZXhOYXAiLCJnZXRWZXJ0ZXhlcyIsInZlcnRleE1hcFZhbHVlcyIsIk9iamVjdCIsInZhbHVlcyIsInZlcnRleGVzIiwiZ2V0VmVydGV4TmFtZXMiLCJ2ZXJ0ZXhNYXBLZXlzIiwia2V5cyIsInZlcnRleE5hbWVzIiwiZ2V0T3JkZXJlZFZlcnRleE5hbWVzIiwib3JkZXJWZXJ0ZXhlcyIsIm9yZGVyZWRWZXJ0ZXhlcyIsIm9yZGVyZWRWZXJ0ZXhOYW1lcyIsInZlcnRleE5hbWVzRnJvbVZlcnRleGVzIiwiZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lIiwidmVydGV4TmFtZSIsInZlcnRleFByZXNlbnQiLCJpc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUiLCJ2ZXJ0ZXgiLCJnZXRFZGdlc0J5U291cmNlVmVydGV4TmFtZSIsInNvdXJjZVZlcnRleE5hbWUiLCJlZGdlcyIsInNvdXJjZVZlcnRleCIsImltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleGVzIiwiZ2V0SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMiLCJpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcyIsInRhcmdldFZlcnRleE5hbWVzIiwiZm9yRWFjaCIsInRhcmdldFZlcnRleE5hbWUiLCJlZGdlIiwiRWRnZSIsImZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZSIsInB1c2giLCJnZXRFZGdlc0J5VGFyZ2V0VmVydGV4TmFtZSIsInRhcmdldFZlcnRleCIsImltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMiLCJnZXRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzIiwiaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcyIsInNvdXJjZVZlcnRleE5hbWVzIiwiZ2V0Rmlyc3RDeWNsZSIsImZpcnN0Q3ljbGUiLCJjeWNsZXNQcmVzZW50IiwiYXJlQ3ljbGVzUHJlc2VudCIsImN5Y2xpY0VkZ2VzIiwiZ2V0Q3ljbGljRWRnZXMiLCJmaXJzdEN5Y2xpY0VkZ2UiLCJnZXRTb3VyY2VWZXJ0ZXhOYW1lIiwiZ2V0VGFyZ2V0VmVydGV4TmFtZSIsImZvcndhcmRzRGVwdGhGaXJzdFNlYXJjaCIsInByZWRlY2Vzc29yVmVydGV4ZXMiLCJ0ZXJtaW5hdGUiLCJjeWNsZSIsIkN5Y2xlIiwiZnJvbVNvdXJjZVZlcnRleEFuZFByZWRlY2Vzc29yVmVydGV4ZXMiLCJzb3VyY2VWZXJ0ZXhJbmRleCIsImdldEluZGV4IiwiZm9yRWFjaEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCIsImltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCIsInRhcmdldFZlcnRleEluZGV4IiwiZ2V0TmFtZSIsImN5Y2xpY0VkZ2UiLCJzb21lIiwiY3ljbGljRWRnZVByZXNlbnQiLCJzb21lSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4IiwiaXNFZGdlUHJlc2VudCIsImVkZ2VQcmVzZW50IiwiaXNFZGdlUHJlc2VudEJ5VGFyZ2V0VmVydGV4IiwidmVydGV4TmFtZXNJbmNsdWRlc1ZlcnRleE5hbWUiLCJpbmNsdWRlcyIsImdldEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lIiwiZ2V0SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXMiLCJnZXRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lIiwiZ2V0SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcyIsImlzRWRnZVByZXNlbnRCeVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lIiwiYWRkVmVydGV4QnlWZXJ0ZXhOYW1lIiwidmVydGV4TmFtZXNMZW5ndGgiLCJsZW5ndGgiLCJuYW1lIiwiaW5kZXgiLCJWZXJ0ZXgiLCJmcm9tTmFtZUFuZEluZGV4Iiwic2V0VmVydGV4QnlWZXJ0ZXhOYW1lIiwicmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lIiwiaW1tZWRpYXRlU3VjY2Vzc1ZlcnRleCIsImltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4IiwicmVtb3ZlSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgiLCJmb3JFYWNoSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgiLCJyZW1vdmVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgiLCJkZWxldGVWZXJ0ZXhCeVZlcnRleE5hbWUiLCJkZWxldGVkVmVydGV4IiwiZGVsZXRlZFZlcnRleEluZGV4IiwidmVydGV4SW5kZXgiLCJkZWNyZW1lbnRJbmRleCIsImZpbHRlckN5Y2xpY0VkZ2VzIiwiYWRkVmVydGV4ZXNCeVZlcnRleE5hbWVzIiwicmVtb3ZlVmVydGV4ZXNCeVZlcnRleE5hbWVzIiwiYWRkRWRnZSIsInJlb3JkZXJWZXJ0ZXhlc0J5U291cmNlVmVydGV4QW5kVGFyZ2V0VmVydGV4IiwiYWRkSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4IiwiYWRkSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgiLCJhZGRFZGdlcyIsInJlbW92ZUVkZ2UiLCJyZW1vdmVTdHJhbmRlZFZlcnRleGVzIiwic291cmNlVmVydGV4U3RyYW5kZWQiLCJpc1N0cmFuZGVkIiwidGFyZ2V0VmVydGV4U3RyYW5kZWQiLCJyZW1vdmVFZGdlcyIsInJlbW92ZUFsbEVkZ2VzQW5kVmVydGV4ZXMiLCJhZGRFZGdlQnlTb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZSIsInNvdXJjZVZlcnRleEZvcndhcmRzUmVhY2hhYmxlIiwiaXNWZXJ0ZXhGb3J3YXJkc1JlYWNoYWJsZSIsImZvcndhcmRzUmVhY2hhYmxlVmVydGV4ZXMiLCJyZXRyaWV2ZUZvcndhcmRzUmVhY2hhYmxlVmVydGV4ZXMiLCJiYWNrd2FyZHNSZWFjaGFibGVWZXJ0ZXhlcyIsInJldHJpZXZlQmFja3dhcmRzUmVhY2hhYmxlVmVydGV4ZXMiLCJyZWFjaGFibGVWZXJ0ZXhlcyIsInJlYWNoYWJsZUluZGV4ZXMiLCJpbmRleGVzRnJvbVZlcnRleGVzIiwib3JkZXJJbmRleGVzIiwicmVhY2hhYmxlVmVydGV4IiwicmVhY2hhYmxlSW5kZXgiLCJzZXRJbmRleCIsImZyb21Ob3RoaW5nIiwiZGlyZWN0ZWRHcmFwaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFhcUJBOzs7eUJBWFU7MkRBRWQ7NERBQ0M7NkRBQ0M7cUJBRStCO3VCQUNLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2RCxJQUFNLEFBQUVDLFFBQVVDLHlCQUFjLENBQXhCRDtBQUVPLElBQUEsQUFBTUQsOEJBQU47YUFBTUEsY0FDUEcsU0FBUztnQ0FERkg7UUFFakIsSUFBSSxDQUFDRyxTQUFTLEdBQUdBOztrQkFGQUg7O1lBS25CSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELFNBQVM7WUFDdkI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsa0JBQWtCQyxPQUFPQyxNQUFNLENBQUMsSUFBSSxDQUFDTCxTQUFTLEdBQzlDTSxXQUFXSCxpQkFBaUIsR0FBRztnQkFFckMsT0FBT0c7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxnQkFBZ0JKLE9BQU9LLElBQUksQ0FBQyxJQUFJLENBQUNULFNBQVMsR0FDMUNVLGNBQWNGLGVBQWdCLEdBQUc7Z0JBRXZDLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUwsV0FBVyxJQUFJLENBQUNKLFdBQVc7Z0JBRWpDVSxJQUFBQSxzQkFBYSxFQUFDTjtnQkFFZCxJQUFNTyxrQkFBa0JQLFVBQ2xCUSxxQkFBcUJDLElBQUFBLGdDQUF1QixFQUFDRjtnQkFFbkQsT0FBT0M7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0JDLFVBQVU7Z0JBQzlCLElBQU1DLGdCQUFnQixJQUFJLENBQUNDLDJCQUEyQixDQUFDRixhQUNqREcsU0FBU0YsZ0JBQ0UsSUFBSSxDQUFDbEIsU0FBUyxDQUFDaUIsV0FBVyxHQUN4QjtnQkFF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