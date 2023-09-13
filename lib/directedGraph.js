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
                var sourceVertexForwardsReachable = targetVertex.isVertexForwardsReachable(sourceVertex);
                if (sourceVertexForwardsReachable) {
                    return;
                }
                var forwardsReachableVertexes = targetVertex.retrieveForwardsReachableVertexes(), backwardsReachableVertexes = sourceVertex.retrieveBackwardsReachableertexes();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kaXJlY3RlZEdyYXBoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEVkZ2UgZnJvbSBcIi4vZWRnZVwiO1xuaW1wb3J0IEN5Y2xlIGZyb20gXCIuL2N5Y2xlXCI7XG5pbXBvcnQgVmVydGV4IGZyb20gXCIuL3ZlcnRleFwiO1xuXG5pbXBvcnQgeyBvcmRlckluZGV4ZXMsIGluZGV4ZXNGcm9tVmVydGV4ZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvaW5kZXhcIjtcbmltcG9ydCB7IG9yZGVyVmVydGV4ZXMsIHZlcnRleE5hbWVzRnJvbVZlcnRleGVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3ZlcnRleFwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0ZWRHcmFwaCB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleE1hcCkge1xuICAgIHRoaXMudmVydGV4TWFwID0gdmVydGV4TWFwO1xuICB9XG5cbiAgZ2V0VmVydGV4TmFwKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleE1hcDtcbiAgfVxuXG4gIGdldFZlcnRleGVzKCkge1xuICAgIGNvbnN0IHZlcnRleE1hcFZhbHVlcyA9IE9iamVjdC52YWx1ZXModGhpcy52ZXJ0ZXhNYXApLFxuICAgICAgICAgIHZlcnRleGVzID0gdmVydGV4TWFwVmFsdWVzOyAvLy9cblxuICAgIHJldHVybiB2ZXJ0ZXhlcztcbiAgfVxuXG4gIGdldFZlcnRleE5hbWVzKCkge1xuICAgIGNvbnN0IHZlcnRleE1hcEtleXMgPSBPYmplY3Qua2V5cyh0aGlzLnZlcnRleE1hcCksXG4gICAgICAgICAgdmVydGV4TmFtZXMgPSB2ZXJ0ZXhNYXBLZXlzOyAgLy8vXG5cbiAgICByZXR1cm4gdmVydGV4TmFtZXM7XG4gIH1cblxuICBnZXRPcmRlcmVkVmVydGV4TmFtZXMoKSB7XG4gICAgY29uc3QgdmVydGV4ZXMgPSB0aGlzLmdldFZlcnRleGVzKCk7XG5cbiAgICBvcmRlclZlcnRleGVzKHZlcnRleGVzKTtcblxuICAgIGNvbnN0IG9yZGVyZWRWZXJ0ZXhlcyA9IHZlcnRleGVzLCAvLy9cbiAgICAgICAgICBvcmRlcmVkVmVydGV4TmFtZXMgPSB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhlcyhvcmRlcmVkVmVydGV4ZXMpO1xuXG4gICAgcmV0dXJuIG9yZGVyZWRWZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGdldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgdmVydGV4UHJlc2VudCA9IHRoaXMuaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpLFxuICAgICAgICAgIHZlcnRleCA9IHZlcnRleFByZXNlbnQgP1xuICAgICAgICAgICAgICAgICAgICAgdGhpcy52ZXJ0ZXhNYXBbdmVydGV4TmFtZV0gOlxuICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gICAgcmV0dXJuIHZlcnRleDtcbiAgfVxuXG4gIGdldEVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpIHtcbiAgICBjb25zdCBlZGdlcyA9IFtdLFxuICAgICAgICAgIHNvdXJjZVZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpO1xuXG4gICAgaWYgKHNvdXJjZVZlcnRleCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMgPSBzb3VyY2VWZXJ0ZXguZ2V0SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMoKSxcbiAgICAgICAgICAgIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzID0gdmVydGV4TmFtZXNGcm9tVmVydGV4ZXMoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZXMgPSBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lczsgIC8vL1xuXG4gICAgICB0YXJnZXRWZXJ0ZXhOYW1lcy5mb3JFYWNoKCh0YXJnZXRWZXJ0ZXhOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGVkZ2UgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgICBlZGdlcy5wdXNoKGVkZ2UpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVkZ2VzO1xuICB9XG5cbiAgZ2V0RWRnZXNCeVRhcmdldFZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSkge1xuICAgIGNvbnN0IGVkZ2VzID0gW10sXG4gICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICBpZiAodGFyZ2V0VmVydGV4ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzID0gdGFyZ2V0VmVydGV4LmdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMoKSxcbiAgICAgICAgICAgIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMgPSB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhlcyhpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleGVzKSxcbiAgICAgICAgICAgIHNvdXJjZVZlcnRleE5hbWVzID0gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lczsgIC8vL1xuXG4gICAgICBzb3VyY2VWZXJ0ZXhOYW1lcy5mb3JFYWNoKChzb3VyY2VWZXJ0ZXhOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGVkZ2UgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgICBlZGdlcy5wdXNoKGVkZ2UpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVkZ2VzO1xuICB9XG5cbiAgZ2V0Rmlyc3RDeWNsZSgpIHtcbiAgICBsZXQgZmlyc3RDeWNsZSA9IG51bGw7XG5cbiAgICBjb25zdCBjeWNsZXNQcmVzZW50ID0gdGhpcy5hcmVDeWNsZXNQcmVzZW50KCk7XG5cbiAgICBpZiAoY3ljbGVzUHJlc2VudCkge1xuICAgICAgY29uc3QgY3ljbGljRWRnZXMgPSB0aGlzLmdldEN5Y2xpY0VkZ2VzKCksXG4gICAgICAgICAgICBmaXJzdEN5Y2xpY0VkZ2UgPSBmaXJzdChjeWNsaWNFZGdlcyksXG4gICAgICAgICAgICBzb3VyY2VWZXJ0ZXhOYW1lID0gZmlyc3RDeWNsaWNFZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSwgLy8vXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gZmlyc3RDeWNsaWNFZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKSwgLy8vXG4gICAgICAgICAgICBzb3VyY2VWZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgICB0YXJnZXRWZXJ0ZXguZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoKCh2ZXJ0ZXgsIHByZWRlY2Vzc29yVmVydGV4ZXMpID0+IHtcbiAgICAgICAgbGV0IHRlcm1pbmF0ZSA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh2ZXJ0ZXggPT09IHNvdXJjZVZlcnRleCkge1xuICAgICAgICAgIHRlcm1pbmF0ZSA9IHRydWU7XG5cbiAgICAgICAgICBjb25zdCBjeWNsZSA9IEN5Y2xlLmZyb21Tb3VyY2VWZXJ0ZXhBbmRQcmVkZWNlc3NvclZlcnRleGVzKHNvdXJjZVZlcnRleCwgcHJlZGVjZXNzb3JWZXJ0ZXhlcyk7ICAvLy9cblxuICAgICAgICAgIGZpcnN0Q3ljbGUgPSBjeWNsZTsgLy8vXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGVybWluYXRlO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpcnN0Q3ljbGU7XG4gIH1cblxuICBnZXRDeWNsaWNFZGdlcygpIHtcbiAgICBjb25zdCBjeWNsaWNFZGdlcyA9IFtdLFxuICAgICAgICAgIHZlcnRleGVzID0gdGhpcy5nZXRWZXJ0ZXhlcygpO1xuXG4gICAgdmVydGV4ZXMuZm9yRWFjaCgodmVydGV4KSA9PiB7XG4gICAgICBjb25zdCBzb3VyY2VWZXJ0ZXggPSB2ZXJ0ZXgsICAvLy9cbiAgICAgICAgICAgIHNvdXJjZVZlcnRleEluZGV4ID0gc291cmNlVmVydGV4LmdldEluZGV4KCk7XG5cbiAgICAgIHZlcnRleC5mb3JFYWNoSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgpID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0VmVydGV4ID0gaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4LCAgLy8vXG4gICAgICAgICAgICAgIHRhcmdldFZlcnRleEluZGV4ID0gdGFyZ2V0VmVydGV4LmdldEluZGV4KCk7XG5cbiAgICAgICAgaWYgKHRhcmdldFZlcnRleEluZGV4IDwgc291cmNlVmVydGV4SW5kZXgpIHtcbiAgICAgICAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gc291cmNlVmVydGV4LmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gdGFyZ2V0VmVydGV4LmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICBlZGdlID0gRWRnZS5mcm9tU291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSksXG4gICAgICAgICAgICAgICAgY3ljbGljRWRnZSA9IGVkZ2U7ICAvLy9cblxuICAgICAgICAgIGN5Y2xpY0VkZ2VzLnB1c2goY3ljbGljRWRnZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBzb3VyY2VWZXJ0ZXhcbiAgICB9KTtcblxuICAgIHJldHVybiBjeWNsaWNFZGdlcztcbiAgfVxuXG4gIGFyZUN5Y2xlc1ByZXNlbnQoKSB7XG4gICAgY29uc3QgdmVydGV4ZXMgPSB0aGlzLmdldFZlcnRleGVzKCksXG4gICAgICAgICAgY3ljbGVzUHJlc2VudCA9IHZlcnRleGVzLnNvbWUoKHZlcnRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc291cmNlVmVydGV4ID0gdmVydGV4LCAgLy8vXG4gICAgICAgICAgICAgICAgICBzb3VyY2VWZXJ0ZXhJbmRleCA9IHNvdXJjZVZlcnRleC5nZXRJbmRleCgpLFxuICAgICAgICAgICAgICAgICAgY3ljbGljRWRnZVByZXNlbnQgPSB2ZXJ0ZXguc29tZUltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCgoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldFZlcnRleCA9IGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCwgIC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRWZXJ0ZXhJbmRleCA9IHRhcmdldFZlcnRleC5nZXRJbmRleCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRWZXJ0ZXhJbmRleCA8IHNvdXJjZVZlcnRleEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoY3ljbGljRWRnZVByZXNlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gY3ljbGVzUHJlc2VudDtcbiAgfVxuXG4gIGlzRWRnZVByZXNlbnQoZWRnZSkge1xuICAgIGxldCBlZGdlUHJlc2VudCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc291cmNlVmVydGV4TmFtZSA9IGVkZ2UuZ2V0U291cmNlVmVydGV4TmFtZSgpLFxuICAgICAgICAgIHNvdXJjZVZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpO1xuXG4gICAgaWYgKHNvdXJjZVZlcnRleCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdGFyZ2V0VmVydGV4TmFtZSA9IGVkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICAgIGlmICh0YXJnZXRWZXJ0ZXggIT09IG51bGwpIHtcbiAgICAgICAgZWRnZVByZXNlbnQgPSBzb3VyY2VWZXJ0ZXguaXNFZGdlUHJlc2VudEJ5VGFyZ2V0VmVydGV4KHRhcmdldFZlcnRleCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVkZ2VQcmVzZW50O1xuICB9XG5cbiAgaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBjb25zdCB2ZXJ0ZXhOYW1lcyA9IHRoaXMuZ2V0VmVydGV4TmFtZXMoKSxcbiAgICAgICAgICB2ZXJ0ZXhOYW1lc0luY2x1ZGVzVmVydGV4TmFtZSA9IHZlcnRleE5hbWVzLmluY2x1ZGVzKHZlcnRleE5hbWUpLFxuICAgICAgICAgIHZlcnRleFByZXNlbnQgPSB2ZXJ0ZXhOYW1lc0luY2x1ZGVzVmVydGV4TmFtZTsgIC8vL1xuXG4gICAgcmV0dXJuIHZlcnRleFByZXNlbnQ7XG4gIH1cblxuICBnZXRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgdmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSksXG4gICAgICAgICAgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXMgPSB2ZXJ0ZXguZ2V0SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXMoKTtcblxuICAgIHJldHVybiBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGNvbnN0IHZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpLFxuICAgICAgICAgIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMgPSB2ZXJ0ZXguZ2V0SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcygpO1xuXG4gICAgcmV0dXJuIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXM7XG4gIH1cblxuICBpc0VkZ2VQcmVzZW50QnlTb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgZWRnZSA9IEVkZ2UuZnJvbVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpLFxuICAgICAgICAgIGVkZ2VQcmVzZW50ID0gdGhpcy5pc0VkZ2VQcmVzZW50KGVkZ2UpO1xuXG4gICAgcmV0dXJuIGVkZ2VQcmVzZW50O1xuICB9XG5cbiAgYWRkVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQcmVzZW50ID0gdGhpcy5pc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICBpZiAoIXZlcnRleFByZXNlbnQpIHtcbiAgICAgIGNvbnN0IHZlcnRleE5hbWVzID0gdGhpcy5nZXRWZXJ0ZXhOYW1lcygpLFxuICAgICAgICAgICAgdmVydGV4TmFtZXNMZW5ndGggPSB2ZXJ0ZXhOYW1lcy5sZW5ndGgsXG4gICAgICAgICAgICBuYW1lID0gdmVydGV4TmFtZSwgIC8vL1xuICAgICAgICAgICAgaW5kZXggPSB2ZXJ0ZXhOYW1lc0xlbmd0aCwgLy8vXG4gICAgICAgICAgICB2ZXJ0ZXggPSBWZXJ0ZXguZnJvbU5hbWVBbmRJbmRleChuYW1lLCBpbmRleCk7XG5cbiAgICAgIHRoaXMuc2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUsIHZlcnRleCk7XG4gICAgfVxuXG4gICAgY29uc3QgdmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICByZXR1cm4gdmVydGV4O1xuICB9XG5cbiAgcmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQcmVzZW50ID0gdGhpcy5pc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICBpZiAoIXZlcnRleFByZXNlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB2ZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgIHZlcnRleC5mb3JFYWNoSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KChpbW1lZGlhdGVTdWNjZXNzVmVydGV4KSA9PiB7XG4gICAgICBjb25zdCBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCA9IHZlcnRleDsgIC8vL1xuXG4gICAgICBpbW1lZGlhdGVTdWNjZXNzVmVydGV4LnJlbW92ZUltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KTtcbiAgICB9KTtcblxuICAgIHZlcnRleC5mb3JFYWNoSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgoKGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KSA9PiB7XG4gICAgICBjb25zdCBpbW1lZGlhdGVTdWNjZXNzVmVydGV4ID0gdmVydGV4OyAgLy8vXG5cbiAgICAgIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4LnJlbW92ZUltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleChpbW1lZGlhdGVTdWNjZXNzVmVydGV4KTtcbiAgICB9KTtcblxuICAgIHRoaXMuZGVsZXRlVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgY29uc3QgdmVydGV4ZXMgPSB0aGlzLmdldFZlcnRleGVzKCksXG4gICAgICAgICAgZGVsZXRlZFZlcnRleCA9IHZlcnRleCwgLy8vXG4gICAgICAgICAgZGVsZXRlZFZlcnRleEluZGV4ID0gZGVsZXRlZFZlcnRleC5nZXRJbmRleCgpO1xuXG4gICAgdmVydGV4ZXMuZm9yRWFjaCgodmVydGV4KSA9PiB7XG4gICAgICBjb25zdCB2ZXJ0ZXhJbmRleCA9IHZlcnRleC5nZXRJbmRleCgpO1xuXG4gICAgICBpZiAodmVydGV4SW5kZXggPiBkZWxldGVkVmVydGV4SW5kZXgpIHtcbiAgICAgICAgdmVydGV4LmRlY3JlbWVudEluZGV4KCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmZpbHRlckN5Y2xpY0VkZ2VzKCk7XG4gIH1cblxuICBhZGRWZXJ0ZXhlc0J5VmVydGV4TmFtZXModmVydGV4TmFtZXMpIHtcbiAgICB2ZXJ0ZXhOYW1lcy5mb3JFYWNoKCh2ZXJ0ZXhOYW1lKSA9PiB7XG4gICAgICB0aGlzLmFkZFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZVZlcnRleGVzQnlWZXJ0ZXhOYW1lcyh2ZXJ0ZXhOYW1lcykge1xuICAgIHZlcnRleE5hbWVzLmZvckVhY2goKHZlcnRleE5hbWUpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkRWRnZShlZGdlKSB7XG4gICAgY29uc3Qgc291cmNlVmVydGV4TmFtZSA9IGVkZ2UuZ2V0U291cmNlVmVydGV4TmFtZSgpLFxuICAgICAgICAgIHRhcmdldFZlcnRleE5hbWUgPSBlZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKTtcblxuICAgIGlmIChzb3VyY2VWZXJ0ZXhOYW1lID09PSB0YXJnZXRWZXJ0ZXhOYW1lKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc291cmNlVmVydGV4ID0gdGhpcy5hZGRWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSksXG4gICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdGhpcy5hZGRWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSksXG4gICAgICAgICAgZWRnZVByZXNlbnQgPSBzb3VyY2VWZXJ0ZXguaXNFZGdlUHJlc2VudEJ5VGFyZ2V0VmVydGV4KHRhcmdldFZlcnRleCk7XG5cbiAgICBpZiAoZWRnZVByZXNlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzb3VyY2VWZXJ0ZXhJbmRleCA9IHNvdXJjZVZlcnRleC5nZXRJbmRleCgpLFxuICAgICAgICAgIHRhcmdldFZlcnRleEluZGV4ID0gdGFyZ2V0VmVydGV4LmdldEluZGV4KCk7XG5cbiAgICBpZiAoc291cmNlVmVydGV4SW5kZXggPiB0YXJnZXRWZXJ0ZXhJbmRleCkge1xuICAgICAgdGhpcy5yZW9yZGVyVmVydGV4ZXNCeVNvdXJjZVZlcnRleEFuZFRhcmdldFZlcnRleChzb3VyY2VWZXJ0ZXgsIHRhcmdldFZlcnRleCk7XG4gICAgfVxuXG4gICAgY29uc3QgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXggPSBzb3VyY2VWZXJ0ZXgsIC8vL1xuICAgICAgICAgIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCA9IHRhcmdldFZlcnRleDsgLy8vXG5cbiAgICBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleC5hZGRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KTtcblxuICAgIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleC5hZGRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCk7XG4gIH1cblxuICBhZGRFZGdlcyhlZGdlcykge1xuICAgIGVkZ2VzLmZvckVhY2goKGVkZ2UpID0+IHtcbiAgICAgIHRoaXMuYWRkRWRnZShlZGdlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZUVkZ2UoZWRnZSwgcmVtb3ZlU3RyYW5kZWRWZXJ0ZXhlcykge1xuICAgIGNvbnN0IHNvdXJjZVZlcnRleE5hbWUgPSBlZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSxcbiAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gZWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgc291cmNlVmVydGV4ID0gdGhpcy5hZGRWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSksXG4gICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdGhpcy5hZGRWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSksXG4gICAgICAgICAgZWRnZVByZXNlbnQgPSBzb3VyY2VWZXJ0ZXguaXNFZGdlUHJlc2VudEJ5VGFyZ2V0VmVydGV4KHRhcmdldFZlcnRleCk7XG5cbiAgICBpZiAoIWVkZ2VQcmVzZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc291cmNlVmVydGV4LnJlbW92ZUltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCh0YXJnZXRWZXJ0ZXgpO1xuXG4gICAgdGFyZ2V0VmVydGV4LnJlbW92ZUltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KHNvdXJjZVZlcnRleCk7XG5cbiAgICBpZiAocmVtb3ZlU3RyYW5kZWRWZXJ0ZXhlcykge1xuICAgICAgY29uc3Qgc291cmNlVmVydGV4U3RyYW5kZWQgPSBzb3VyY2VWZXJ0ZXguaXNTdHJhbmRlZCgpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4U3RyYW5kZWQgPSB0YXJnZXRWZXJ0ZXguaXNTdHJhbmRlZCgpO1xuXG4gICAgICBpZiAoc291cmNlVmVydGV4U3RyYW5kZWQpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0YXJnZXRWZXJ0ZXhTdHJhbmRlZCkge1xuICAgICAgICB0aGlzLnJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmZpbHRlckN5Y2xpY0VkZ2VzKCk7XG4gIH1cblxuICByZW1vdmVFZGdlcyhlZGdlcywgcmVtb3ZlU3RyYW5kZWRWZXJ0ZXhlcyA9IGZhbHNlKSB7XG4gICAgZWRnZXMuZm9yRWFjaCgoZWRnZSkgPT4ge1xuICAgICAgdGhpcy5yZW1vdmVFZGdlKGVkZ2UsIHJlbW92ZVN0cmFuZGVkVmVydGV4ZXMpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlQWxsRWRnZXNBbmRWZXJ0ZXhlcygpIHtcbiAgICB0aGlzLnZlcnRleE1hcCA9IHt9O1xuICB9XG5cbiAgYWRkRWRnZUJ5U291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSkge1xuICAgIGNvbnN0IGVkZ2UgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgIHRoaXMuYWRkRWRnZShlZGdlKTtcbiAgfVxuXG4gIHJlb3JkZXJWZXJ0ZXhlc0J5U291cmNlVmVydGV4QW5kVGFyZ2V0VmVydGV4KHNvdXJjZVZlcnRleCwgdGFyZ2V0VmVydGV4KSB7XG4gICAgY29uc3Qgc291cmNlVmVydGV4Rm9yd2FyZHNSZWFjaGFibGUgPSB0YXJnZXRWZXJ0ZXguaXNWZXJ0ZXhGb3J3YXJkc1JlYWNoYWJsZShzb3VyY2VWZXJ0ZXgpO1xuXG4gICAgaWYgKHNvdXJjZVZlcnRleEZvcndhcmRzUmVhY2hhYmxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZm9yd2FyZHNSZWFjaGFibGVWZXJ0ZXhlcyA9IHRhcmdldFZlcnRleC5yZXRyaWV2ZUZvcndhcmRzUmVhY2hhYmxlVmVydGV4ZXMoKSxcbiAgICAgICAgICBiYWNrd2FyZHNSZWFjaGFibGVWZXJ0ZXhlcyA9IHNvdXJjZVZlcnRleC5yZXRyaWV2ZUJhY2t3YXJkc1JlYWNoYWJsZWVydGV4ZXMoKTtcblxuICAgIG9yZGVyVmVydGV4ZXMoYmFja3dhcmRzUmVhY2hhYmxlVmVydGV4ZXMpO1xuXG4gICAgb3JkZXJWZXJ0ZXhlcyhmb3J3YXJkc1JlYWNoYWJsZVZlcnRleGVzKTtcblxuICAgIGNvbnN0IHJlYWNoYWJsZVZlcnRleGVzID0gW1xuICAgICAgICAgICAgLi4uYmFja3dhcmRzUmVhY2hhYmxlVmVydGV4ZXMsXG4gICAgICAgICAgICAuLi5mb3J3YXJkc1JlYWNoYWJsZVZlcnRleGVzXG4gICAgICAgICAgXSxcbiAgICAgICAgICByZWFjaGFibGVJbmRleGVzID0gaW5kZXhlc0Zyb21WZXJ0ZXhlcyhyZWFjaGFibGVWZXJ0ZXhlcyk7XG5cbiAgICBvcmRlckluZGV4ZXMocmVhY2hhYmxlSW5kZXhlcyk7XG5cbiAgICByZWFjaGFibGVWZXJ0ZXhlcy5mb3JFYWNoKChyZWFjaGFibGVWZXJ0ZXgsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCByZWFjaGFibGVJbmRleCA9IHJlYWNoYWJsZUluZGV4ZXNbaW5kZXhdO1xuXG4gICAgICBpbmRleCA9IHJlYWNoYWJsZUluZGV4OyAvLy9cblxuICAgICAgcmVhY2hhYmxlVmVydGV4LnNldEluZGV4KGluZGV4KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZpbHRlckN5Y2xpY0VkZ2VzKCkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VzID0gdGhpcy5nZXRDeWNsaWNFZGdlcygpLFxuICAgICAgICAgIGVkZ2VzID0gY3ljbGljRWRnZXM7ICAvLy9cblxuICAgIGVkZ2VzLmZvckVhY2goKGVkZ2UpID0+IHtcbiAgICAgIGNvbnN0IHNvdXJjZVZlcnRleE5hbWUgPSBlZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleE5hbWUgPSBlZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKSxcbiAgICAgICAgICAgIHNvdXJjZVZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSksXG4gICAgICAgICAgICBzb3VyY2VWZXJ0ZXhGb3J3YXJkc1JlYWNoYWJsZSA9IHRhcmdldFZlcnRleC5pc1ZlcnRleEZvcndhcmRzUmVhY2hhYmxlKHNvdXJjZVZlcnRleCk7XG5cbiAgICAgIGlmICghc291cmNlVmVydGV4Rm9yd2FyZHNSZWFjaGFibGUpIHtcbiAgICAgICAgdGhpcy5yZW9yZGVyVmVydGV4ZXNCeVNvdXJjZVZlcnRleEFuZFRhcmdldFZlcnRleChzb3VyY2VWZXJ0ZXgsIHRhcmdldFZlcnRleCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZXRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSwgdmVydGV4KSB7XG4gICAgdGhpcy52ZXJ0ZXhNYXBbdmVydGV4TmFtZV0gPSB2ZXJ0ZXg7XG4gIH1cblxuICBkZWxldGVWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGRlbGV0ZSB0aGlzLnZlcnRleE1hcFt2ZXJ0ZXhOYW1lXTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCB2ZXJ0ZXhNYXAgPSB7fSxcbiAgICAgICAgICBkaXJlY3RlZEdyYXBoID0gbmV3IERpcmVjdGVkR3JhcGgodmVydGV4TWFwKTtcbiAgICBcbiAgICByZXR1cm4gZGlyZWN0ZWRHcmFwaDsgICAgXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJEaXJlY3RlZEdyYXBoIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsInZlcnRleE1hcCIsImdldFZlcnRleE5hcCIsImdldFZlcnRleGVzIiwidmVydGV4TWFwVmFsdWVzIiwiT2JqZWN0IiwidmFsdWVzIiwidmVydGV4ZXMiLCJnZXRWZXJ0ZXhOYW1lcyIsInZlcnRleE1hcEtleXMiLCJrZXlzIiwidmVydGV4TmFtZXMiLCJnZXRPcmRlcmVkVmVydGV4TmFtZXMiLCJvcmRlclZlcnRleGVzIiwib3JkZXJlZFZlcnRleGVzIiwib3JkZXJlZFZlcnRleE5hbWVzIiwidmVydGV4TmFtZXNGcm9tVmVydGV4ZXMiLCJnZXRWZXJ0ZXhCeVZlcnRleE5hbWUiLCJ2ZXJ0ZXhOYW1lIiwidmVydGV4UHJlc2VudCIsImlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZSIsInZlcnRleCIsImdldEVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lIiwic291cmNlVmVydGV4TmFtZSIsImVkZ2VzIiwic291cmNlVmVydGV4IiwiaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ZXMiLCJnZXRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhlcyIsImltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzIiwidGFyZ2V0VmVydGV4TmFtZXMiLCJmb3JFYWNoIiwidGFyZ2V0VmVydGV4TmFtZSIsImVkZ2UiLCJFZGdlIiwiZnJvbVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lIiwicHVzaCIsImdldEVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lIiwidGFyZ2V0VmVydGV4IiwiaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhlcyIsImdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ZXMiLCJpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzIiwic291cmNlVmVydGV4TmFtZXMiLCJnZXRGaXJzdEN5Y2xlIiwiZmlyc3RDeWNsZSIsImN5Y2xlc1ByZXNlbnQiLCJhcmVDeWNsZXNQcmVzZW50IiwiY3ljbGljRWRnZXMiLCJnZXRDeWNsaWNFZGdlcyIsImZpcnN0Q3ljbGljRWRnZSIsImdldFNvdXJjZVZlcnRleE5hbWUiLCJnZXRUYXJnZXRWZXJ0ZXhOYW1lIiwiZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoIiwicHJlZGVjZXNzb3JWZXJ0ZXhlcyIsInRlcm1pbmF0ZSIsImN5Y2xlIiwiQ3ljbGUiLCJmcm9tU291cmNlVmVydGV4QW5kUHJlZGVjZXNzb3JWZXJ0ZXhlcyIsInNvdXJjZVZlcnRleEluZGV4IiwiZ2V0SW5kZXgiLCJmb3JFYWNoSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4IiwiaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4IiwidGFyZ2V0VmVydGV4SW5kZXgiLCJnZXROYW1lIiwiY3ljbGljRWRnZSIsInNvbWUiLCJjeWNsaWNFZGdlUHJlc2VudCIsInNvbWVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgiLCJpc0VkZ2VQcmVzZW50IiwiZWRnZVByZXNlbnQiLCJpc0VkZ2VQcmVzZW50QnlUYXJnZXRWZXJ0ZXgiLCJ2ZXJ0ZXhOYW1lc0luY2x1ZGVzVmVydGV4TmFtZSIsImluY2x1ZGVzIiwiZ2V0SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUiLCJnZXRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcyIsImdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUiLCJnZXRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzIiwiaXNFZGdlUHJlc2VudEJ5U291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUiLCJhZGRWZXJ0ZXhCeVZlcnRleE5hbWUiLCJ2ZXJ0ZXhOYW1lc0xlbmd0aCIsImxlbmd0aCIsIm5hbWUiLCJpbmRleCIsIlZlcnRleCIsImZyb21OYW1lQW5kSW5kZXgiLCJzZXRWZXJ0ZXhCeVZlcnRleE5hbWUiLCJyZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUiLCJpbW1lZGlhdGVTdWNjZXNzVmVydGV4IiwiaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgiLCJyZW1vdmVJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCIsImZvckVhY2hJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCIsInJlbW92ZUltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCIsImRlbGV0ZVZlcnRleEJ5VmVydGV4TmFtZSIsImRlbGV0ZWRWZXJ0ZXgiLCJkZWxldGVkVmVydGV4SW5kZXgiLCJ2ZXJ0ZXhJbmRleCIsImRlY3JlbWVudEluZGV4IiwiZmlsdGVyQ3ljbGljRWRnZXMiLCJhZGRWZXJ0ZXhlc0J5VmVydGV4TmFtZXMiLCJyZW1vdmVWZXJ0ZXhlc0J5VmVydGV4TmFtZXMiLCJhZGRFZGdlIiwicmVvcmRlclZlcnRleGVzQnlTb3VyY2VWZXJ0ZXhBbmRUYXJnZXRWZXJ0ZXgiLCJhZGRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgiLCJhZGRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCIsImFkZEVkZ2VzIiwicmVtb3ZlRWRnZSIsInJlbW92ZVN0cmFuZGVkVmVydGV4ZXMiLCJzb3VyY2VWZXJ0ZXhTdHJhbmRlZCIsImlzU3RyYW5kZWQiLCJ0YXJnZXRWZXJ0ZXhTdHJhbmRlZCIsInJlbW92ZUVkZ2VzIiwicmVtb3ZlQWxsRWRnZXNBbmRWZXJ0ZXhlcyIsImFkZEVkZ2VCeVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lIiwic291cmNlVmVydGV4Rm9yd2FyZHNSZWFjaGFibGUiLCJpc1ZlcnRleEZvcndhcmRzUmVhY2hhYmxlIiwiZm9yd2FyZHNSZWFjaGFibGVWZXJ0ZXhlcyIsInJldHJpZXZlRm9yd2FyZHNSZWFjaGFibGVWZXJ0ZXhlcyIsImJhY2t3YXJkc1JlYWNoYWJsZVZlcnRleGVzIiwicmV0cmlldmVCYWNrd2FyZHNSZWFjaGFibGVlcnRleGVzIiwicmVhY2hhYmxlVmVydGV4ZXMiLCJyZWFjaGFibGVJbmRleGVzIiwiaW5kZXhlc0Zyb21WZXJ0ZXhlcyIsIm9yZGVySW5kZXhlcyIsInJlYWNoYWJsZVZlcnRleCIsInJlYWNoYWJsZUluZGV4Iiwic2V0SW5kZXgiLCJmcm9tTm90aGluZyIsImRpcmVjdGVkR3JhcGgiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBYXFCQTs7O3lCQVhVOzJEQUVkOzREQUNDOzZEQUNDO3FCQUUrQjt1QkFDSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkQsSUFBTSxBQUFFQyxRQUFVQyx5QkFBYyxDQUF4QkQ7QUFFTyxJQUFBLEFBQU1ELDhCQUFOO2FBQU1BLGNBQ1BHLFNBQVM7Z0NBREZIO1FBRWpCLElBQUksQ0FBQ0csU0FBUyxHQUFHQTs7a0JBRkFIOztZQUtuQkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxTQUFTO1lBQ3ZCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGtCQUFrQkMsT0FBT0MsTUFBTSxDQUFDLElBQUksQ0FBQ0wsU0FBUyxHQUM5Q00sV0FBV0gsaUJBQWlCLEdBQUc7Z0JBRXJDLE9BQU9HO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsZ0JBQWdCSixPQUFPSyxJQUFJLENBQUMsSUFBSSxDQUFDVCxTQUFTLEdBQzFDVSxjQUFjRixlQUFnQixHQUFHO2dCQUV2QyxPQUFPRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1MLFdBQVcsSUFBSSxDQUFDSixXQUFXO2dCQUVqQ1UsSUFBQUEsc0JBQWEsRUFBQ047Z0JBRWQsSUFBTU8sa0JBQWtCUCxVQUNsQlEscUJBQXFCQyxJQUFBQSxnQ0FBdUIsRUFBQ0Y7Z0JBRW5ELE9BQU9DO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCQyxVQUFVO2dCQUM5QixJQUFNQyxnQkFBZ0IsSUFBSSxDQUFDQywyQkFBMkIsQ0FBQ0YsYUFDakRHLFNBQVNGLGdCQUNFLElBQUksQ0FBQ2xCLFNBQVMsQ0FBQ2lCLFdBQVcsR0FDeEI7Z0JBRW5C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