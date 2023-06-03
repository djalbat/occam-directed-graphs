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
var _partialCycle = /*#__PURE__*/ _interop_require_default(require("./partialCycle"));
var _vertex1 = require("./utilities/vertex");
var _edge1 = require("./utilities/edge");
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
var last = _necessary.arrayUtilities.last, first = _necessary.arrayUtilities.first, filter = _necessary.arrayUtilities.filter;
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
            key: "isEmpty",
            value: function isEmpty() {
                var vertices = this.getVertices(), verticesLength = vertices.length, empty = verticesLength === 0;
                return empty;
            }
        },
        {
            key: "getVertices",
            value: function getVertices() {
                var vertexMapValues = Object.values(this.vertexMap), vertices = vertexMapValues; ///
                return vertices;
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
            key: "getVertexByVertexName",
            value: function getVertexByVertexName(vertexName) {
                var vertexPresent = this.isVertexPresentByVertexName(vertexName), vertex = vertexPresent ? this.vertexMap[vertexName] : null;
                return vertex;
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
            key: "getImmediateSuccessorVertexNamesByVertexName",
            value: function getImmediateSuccessorVertexNamesByVertexName(vertexName) {
                var vertex = this.getVertexByVertexName(vertexName), immediateSuccessorVertexNames = vertex.getImmediateSuccessorVertexNames();
                return immediateSuccessorVertexNames;
            }
        },
        {
            key: "getPredecessorVertexNamesByVertexName",
            value: function getPredecessorVertexNamesByVertexName(vertexName) {
                var vertex = this.getVertexByVertexName(vertexName), predecessorVertexNames = vertex.getPredecessorVertexNames();
                return predecessorVertexNames;
            }
        },
        {
            key: "getSuccessorVertexNamesByVertexName",
            value: function getSuccessorVertexNamesByVertexName(vertexName) {
                var vertex = this.getVertexByVertexName(vertexName), successorVertexNames = vertex.getSuccessorVertexNames();
                return successorVertexNames;
            }
        },
        {
            key: "getEdgesByTargetVertexName",
            value: function getEdgesByTargetVertexName(targetVertexName) {
                var edges = [], targetVertex = this.getVertexByVertexName(targetVertexName);
                if (targetVertex !== null) {
                    var immediatePredecessorVertexNames = targetVertex.getImmediatePredecessorVertexNames(), sourceVertexNames = immediatePredecessorVertexNames; ///
                    sourceVertexNames.forEach(function(sourceVertexName) {
                        var edge = _edge.default.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);
                        edges.push(edge);
                    });
                }
                return edges;
            }
        },
        {
            key: "getEdgesBySourceVertexName",
            value: function getEdgesBySourceVertexName(sourceVertexName) {
                var edges = [], sourceVertex = this.getVertexByVertexName(sourceVertexName);
                if (sourceVertex !== null) {
                    var immediateSuccessorVertexNames = sourceVertex.getImmediateSuccessorVertexNames(), targetVertexNames = immediateSuccessorVertexNames; ///
                    targetVertexNames.forEach(function(targetVertexName) {
                        var edge = _edge.default.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);
                        edges.push(edge);
                    });
                }
                return edges;
            }
        },
        {
            key: "getFirstCycleByVertexName",
            value: function getFirstCycleByVertexName(vertexName) {
                var _this = this;
                var firstCycle = null;
                var vertex = this.getVertexByVertexName(vertexName), cyclicEdges = this.cyclicEdges.slice(), partialCycles = [], cycles = [];
                (0, _vertex1.forwardsDepthFirstSearch)(vertex, function(visitedVertex, getPredecessorVertices) {
                    var visitedVertexName = visitedVertex.getName(), sourceVertexName = visitedVertexName; ///
                    filter(cyclicEdges, function(cyclicEdge) {
                        var matches = cyclicEdge.matchSourceVertexName(sourceVertexName);
                        if (matches) {
                            var predecessorVertices = getPredecessorVertices(), partialCycle = _partialCycle.default.fromCyclicEdgeAndPredecessorVertices(cyclicEdge, predecessorVertices);
                            partialCycles.push(partialCycle);
                        } else {
                            return true;
                        }
                    });
                    var cyclicEdgesLength = cyclicEdges.length, terminate = cyclicEdgesLength === 0;
                    return terminate;
                });
                partialCycles.some(function(partialCycle) {
                    var targetVertexName = partialCycle.getTargetVertexName(), targetVertex = _this.getVertexByVertexName(targetVertexName);
                    (0, _vertex1.forwardsDepthFirstSearch)(targetVertex, function(visitedVertex, getPredecessorVertices) {
                        var visitedVertexName = visitedVertex.getName();
                        if (visitedVertexName === vertexName) {
                            var predecessorVertices = getPredecessorVertices(), successorVertices = predecessorVertices, cycle = _cycle.default.fromVertexNamePartialCycleAndSuccessorVertices(vertexName, partialCycle, successorVertices);
                            cycles.push(cycle);
                        }
                        var cyclesLength = cycles.length, terminate = cyclesLength > 0;
                        return terminate;
                    });
                });
                var cyclesLength = cycles.length;
                if (cyclesLength > 0) {
                    firstCycle = first(cycles);
                }
                return firstCycle;
            }
        },
        {
            key: "getOrderedVertexNames",
            value: function getOrderedVertexNames() {
                var vertices = this.getVertices();
                (0, _vertex1.orderVertices)(vertices);
                var orderedVertices = vertices, orderedVertexNames = (0, _vertex1.vertexNamesFromVertices)(orderedVertices);
                return orderedVertexNames;
            }
        },
        {
            key: "getFirstCycle",
            value: function getFirstCycle() {
                var firstCyclicEdge = first(this.cyclicEdges), cyclicEdge = firstCyclicEdge, sourceVertexName = cyclicEdge.getSourceVertexName(), vertexName = sourceVertexName, firstCycle = this.getFirstCycleByVertexName(vertexName);
                return firstCycle;
            }
        },
        {
            key: "isEdgePresent",
            value: function isEdgePresent(edge) {
                var sourceVertexName = edge.getSourceVertexName(), targetVertexName = edge.getTargetVertexName(), edgePresent = this.isEdgePresentBySourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);
                return edgePresent;
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
            key: "isVertexPresentByVertexName",
            value: function isVertexPresentByVertexName(vertexName) {
                var vertexNames = this.getVertexNames(), vertexNamesIncludesVertexName = vertexNames.includes(vertexName), vertexPresent = vertexNamesIncludesVertexName; ///
                return vertexPresent;
            }
        },
        {
            key: "areCyclesPresentByVertexName",
            value: function areCyclesPresentByVertexName(vertexName) {
                var cyclesPresent = false;
                var vertexPresent = this.isVertexPresentByVertexName(vertexName);
                if (vertexPresent) {
                    var firstCycle = this.getFirstCycleByVertexName(vertexName);
                    cyclesPresent = firstCycle !== null;
                }
                return cyclesPresent;
            }
        },
        {
            key: "isEdgePresentBySourceVertexNameAndTargetVertexName",
            value: function isEdgePresentBySourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName) {
                var edgePresent = false;
                var sourceVertex = this.getVertexByVertexName(sourceVertexName), targetVertex = this.getVertexByVertexName(targetVertexName), sourceVertexAndTargetVertexPresent = sourceVertex !== null && targetVertex !== null;
                if (sourceVertexAndTargetVertexPresent) {
                    edgePresent = sourceVertex.isEdgePresentByTargetVertex(targetVertex);
                }
                return edgePresent;
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
        },
        {
            key: "addEdge",
            value: function addEdge(edge) {
                var sourceVertexName = edge.getSourceVertexName(), targetVertexName = edge.getTargetVertexName(), success = this.addEdgeBySourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);
                if (!success) {
                    var cyclicEdgesIncludesEdge = (0, _edge1.checkEdgesIncludesEdge)(edge, this.cyclicEdges);
                    if (!cyclicEdgesIncludesEdge) {
                        var cyclicEdge = edge; ///
                        this.cyclicEdges.push(cyclicEdge);
                    }
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
            key: "addVerticesByVertexNames",
            value: function addVerticesByVertexNames(vertexNames) {
                var _this = this;
                vertexNames.forEach(function(vertexName) {
                    _this.addVertexByVertexName(vertexName);
                });
            }
        },
        {
            key: "addEdgeBySourceVertexNameAndTargetVertexName",
            value: function addEdgeBySourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName) {
                var success = false;
                if (sourceVertexName !== targetVertexName) {
                    var sourceVertex = this.addVertexByVertexName(sourceVertexName), targetVertex = this.addVertexByVertexName(targetVertexName), edgePresent = sourceVertex.isEdgePresentByTargetVertex(targetVertex);
                    if (edgePresent) {
                        success = true;
                    } else {
                        var sourceVertexIndex = sourceVertex.getIndex(), targetVertexIndex = targetVertex.getIndex(), invalidatingEdge = sourceVertexIndex > targetVertexIndex;
                        success = invalidatingEdge ? addInvalidatingEdgeByVertices(sourceVertex, targetVertex) : true;
                        if (success) {
                            var immediatePredecessorVertex = sourceVertex, immediateSuccessorVertex = targetVertex; ///
                            immediatePredecessorVertex.addImmediateSuccessorVertex(immediateSuccessorVertex);
                            immediateSuccessorVertex.addImmediatePredecessorVertex(immediatePredecessorVertex);
                        }
                    }
                }
                return success;
            }
        },
        {
            key: "removeVertexByVertexName",
            value: function removeVertexByVertexName(vertexName) {
                var removedEdges = null;
                var vertexPresent = this.isVertexPresentByVertexName(vertexName);
                if (vertexPresent) {
                    removedEdges = [];
                    var vertex = this.getVertexByVertexName(vertexName);
                    vertex.forEachImmediateSuccessorVertex(function(immediateSuccessVertex) {
                        var immediatePredecessorVertex = vertex, immediatePredecessorVertexName = immediatePredecessorVertex.getName(), immediateSuccessVertexName = immediateSuccessVertex.getName(), removedEdgeSourceVertexName = immediatePredecessorVertexName, removedEdgeTargetVertexName = immediateSuccessVertexName, removedEdge = new _edge.default(removedEdgeSourceVertexName, removedEdgeTargetVertexName);
                        removedEdges.push(removedEdge);
                        immediateSuccessVertex.removeImmediatePredecessorVertex(immediatePredecessorVertex);
                    });
                    vertex.forEachImmediatePredecessorVertex(function(immediatePredecessorVertex) {
                        var immediateSuccessVertex = vertex, immediatePredecessorVertexName = immediatePredecessorVertex.getName(), immediateSuccessVertexName = immediateSuccessVertex.getName(), removedEdgeSourceVertexName = immediatePredecessorVertexName, removedEdgeTargetVertexName = immediateSuccessVertexName, removedEdge = new _edge.default(removedEdgeSourceVertexName, removedEdgeTargetVertexName);
                        removedEdges.push(removedEdge);
                        immediatePredecessorVertex.removeImmediateSuccessorVertex(immediateSuccessVertex);
                    });
                    this.deleteVertexByVertexName(vertexName);
                    var deletedVertex = vertex, deletedVertexIndex = deletedVertex.getIndex(), vertices = this.getVertices(), affectedVertices = vertices.reduce(function(affectedVertices, vertex) {
                        var vertexIndex = vertex.getIndex(), vertexAffected = vertexIndex > deletedVertexIndex;
                        if (vertexAffected) {
                            var affectedVertex = vertex; ///
                            affectedVertices.push(affectedVertex);
                        }
                        return affectedVertices;
                    }, []);
                    affectedVertices.forEach(function(affectedVertex) {
                        affectedVertex.decrementIndex();
                    });
                }
                this.filterCyclicEdges();
                return removedEdges;
            }
        },
        {
            key: "removeEdge",
            value: function removeEdge(edge) {
                var removeStrandedVertices = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                var cyclicEdgesIncludesEdge = (0, _edge1.checkEdgesIncludesEdge)(edge, this.cyclicEdges);
                if (cyclicEdgesIncludesEdge) {
                    var cyclicEdge = edge; ///
                    (0, _edge1.removeEdgeFromEdges)(cyclicEdge, this.cyclicEdges);
                    return;
                }
                var edgePresent = this.isEdgePresent(edge);
                if (edgePresent) {
                    var sourceVertexName = edge.getSourceVertexName(), targetVertexName = edge.getTargetVertexName();
                    this.removeEdgeBySourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);
                    if (removeStrandedVertices) {
                        var sourceVertex = this.getVertexByVertexName(sourceVertexName), targetVertex = this.getVertexByVertexName(targetVertexName), sourceVertexStranded = sourceVertex.isStranded(), targetVertexStranded = targetVertex.isStranded();
                        if (sourceVertexStranded) {
                            this.removeVertexByVertexName(sourceVertexName);
                        }
                        if (targetVertexStranded) {
                            this.removeVertexByVertexName(targetVertexName);
                        }
                    }
                    this.filterCyclicEdges();
                }
            }
        },
        {
            key: "removeEdges",
            value: function removeEdges(edges) {
                var removeStrandedVertices = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                var _this = this;
                edges.forEach(function(edge) {
                    _this.removeEdge(edge, removeStrandedVertices);
                });
            }
        },
        {
            key: "removeEdgesByTargetVertexName",
            value: function removeEdgesByTargetVertexName(targetVertexName) {
                var removeStrandedVertices = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                var cyclicEdges = (0, _edge1.edgesByTargetVertexName)(targetVertexName, this.cyclicEdges), edges = this.getEdgesByTargetVertexName(targetVertexName);
                this.removeEdges(cyclicEdges, removeStrandedVertices);
                this.removeEdges(edges, removeStrandedVertices);
            }
        },
        {
            key: "removeEdgesBySourceVertexName",
            value: function removeEdgesBySourceVertexName(sourceVertexName) {
                var removeStrandedVertices = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                var cyclicEdges = (0, _edge1.edgesBySourceVertexName)(sourceVertexName, this.cyclicEdges), edges = this.getEdgesBySourceVertexName(sourceVertexName);
                this.removeEdges(cyclicEdges, removeStrandedVertices);
                this.removeEdges(edges, removeStrandedVertices);
            }
        },
        {
            key: "removeEdgeBySourceVertexNameAndTargetVertexName",
            value: function removeEdgeBySourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName) {
                var sourceVertex = this.getVertexByVertexName(sourceVertexName), targetVertex = this.getVertexByVertexName(targetVertexName);
                sourceVertex.removeImmediateSuccessorVertex(targetVertex);
                targetVertex.removeImmediatePredecessorVertex(sourceVertex);
            }
        },
        {
            key: "removeAllEdgesAndVertices",
            value: function removeAllEdgesAndVertices() {
                this.vertexMap = {};
                this.cyclicEdges = [];
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
function addInvalidatingEdgeByVertices(sourceVertex, targetVertex) {
    var success = false;
    var forwardsAffectedVertices = targetVertex.retrieveForwardsAffectedVertices(sourceVertex), lastForwardsAffectedVertex = last(forwardsAffectedVertices), resultsInCycle = lastForwardsAffectedVertex === sourceVertex;
    if (!resultsInCycle) {
        var backwardsAffectedVertices = sourceVertex.retrieveBackwardsAffectedVertices();
        (0, _vertex1.orderVertices)(backwardsAffectedVertices);
        (0, _vertex1.orderVertices)(forwardsAffectedVertices);
        var affectedVertices = [].concat(backwardsAffectedVertices).concat(forwardsAffectedVertices), affectedVertexIndices = affectedVertices.map(function(affectedVertex) {
            var affectedVertexIndex = affectedVertex.getIndex();
            return affectedVertexIndex;
        });
        affectedVertexIndices.sort(function(indexA, indexB) {
            return indexA - indexB;
        });
        affectedVertices.forEach(function(affectedVertex, index) {
            var affectedVertexIndex = affectedVertexIndices[index];
            affectedVertex.setIndex(affectedVertexIndex);
        });
        success = true;
    }
    return success;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kaXJlY3RlZEdyYXBoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEVkZ2UgZnJvbSBcIi4vZWRnZVwiO1xuaW1wb3J0IEN5Y2xlIGZyb20gXCIuL2N5Y2xlXCI7XG5pbXBvcnQgVmVydGV4IGZyb20gXCIuL3ZlcnRleFwiO1xuaW1wb3J0IFBhcnRpYWxDeWNsZSBmcm9tIFwiLi9wYXJ0aWFsQ3ljbGVcIjtcblxuaW1wb3J0IHsgZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoLCBvcmRlclZlcnRpY2VzLCB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0aWNlcyB9IGZyb20gXCIuL3V0aWxpdGllcy92ZXJ0ZXhcIjtcbmltcG9ydCB7IHJlbW92ZUVkZ2VGcm9tRWRnZXMsIGNoZWNrRWRnZXNJbmNsdWRlc0VkZ2UsIGVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lLCBlZGdlc0J5VGFyZ2V0VmVydGV4TmFtZSB9IGZyb20gXCIuL3V0aWxpdGllcy9lZGdlXCI7XG5cbmNvbnN0IHsgbGFzdCwgZmlyc3QsIGZpbHRlciB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdGVkR3JhcGgge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhNYXAsIGN5Y2xpY0VkZ2VzKSB7XG4gICAgdGhpcy52ZXJ0ZXhNYXAgPSB2ZXJ0ZXhNYXA7XG4gICAgdGhpcy5jeWNsaWNFZGdlcyA9IGN5Y2xpY0VkZ2VzO1xuICB9XG5cbiAgZ2V0VmVydGV4TmFwKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleE1hcDtcbiAgfVxuXG4gIGdldEN5Y2xpY0VkZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLmN5Y2xpY0VkZ2VzO1xuICB9XG5cbiAgaXNFbXB0eSgpIHtcbiAgICBjb25zdCB2ZXJ0aWNlcyA9IHRoaXMuZ2V0VmVydGljZXMoKSxcbiAgICAgICAgICB2ZXJ0aWNlc0xlbmd0aCA9IHZlcnRpY2VzLmxlbmd0aCxcbiAgICAgICAgICBlbXB0eSA9ICh2ZXJ0aWNlc0xlbmd0aCA9PT0gMCk7XG5cbiAgICByZXR1cm4gZW1wdHk7XG4gIH1cblxuICBnZXRWZXJ0aWNlcygpIHtcbiAgICBjb25zdCB2ZXJ0ZXhNYXBWYWx1ZXMgPSBPYmplY3QudmFsdWVzKHRoaXMudmVydGV4TWFwKSxcbiAgICAgICAgICB2ZXJ0aWNlcyA9IHZlcnRleE1hcFZhbHVlczsgLy8vXG5cbiAgICByZXR1cm4gdmVydGljZXM7XG4gIH1cblxuICBnZXRWZXJ0ZXhOYW1lcygpIHtcbiAgICBjb25zdCB2ZXJ0ZXhNYXBLZXlzID0gT2JqZWN0LmtleXModGhpcy52ZXJ0ZXhNYXApLFxuICAgICAgICAgIHZlcnRleE5hbWVzID0gdmVydGV4TWFwS2V5czsgIC8vL1xuXG4gICAgcmV0dXJuIHZlcnRleE5hbWVzO1xuICB9XG5cbiAgZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQcmVzZW50ID0gdGhpcy5pc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUodmVydGV4TmFtZSksXG4gICAgICAgICAgdmVydGV4ID0gdmVydGV4UHJlc2VudCA/XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLnZlcnRleE1hcFt2ZXJ0ZXhOYW1lXSA6XG4gICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgICByZXR1cm4gdmVydGV4O1xuICB9XG5cbiAgZ2V0SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgdmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSksXG4gICAgICAgICAgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcyA9IHZlcnRleC5nZXRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzKCk7XG5cbiAgICByZXR1cm4gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGdldEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBjb25zdCB2ZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSxcbiAgICAgICAgICBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcyA9IHZlcnRleC5nZXRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcygpO1xuXG4gICAgcmV0dXJuIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzO1xuICB9XG5cbiAgZ2V0UHJlZGVjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgdmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSksXG4gICAgICAgICAgcHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcyA9IHZlcnRleC5nZXRQcmVkZWNlc3NvclZlcnRleE5hbWVzKCk7XG5cbiAgICByZXR1cm4gcHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGdldFN1Y2Nlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBjb25zdCB2ZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSxcbiAgICAgICAgICBzdWNjZXNzb3JWZXJ0ZXhOYW1lcyA9IHZlcnRleC5nZXRTdWNjZXNzb3JWZXJ0ZXhOYW1lcygpO1xuXG4gICAgcmV0dXJuIHN1Y2Nlc3NvclZlcnRleE5hbWVzO1xuICB9XG5cbiAgZ2V0RWRnZXNCeVRhcmdldFZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSkge1xuICAgIGNvbnN0IGVkZ2VzID0gW10sXG4gICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICBpZiAodGFyZ2V0VmVydGV4ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzID0gdGFyZ2V0VmVydGV4LmdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMoKSxcbiAgICAgICAgICAgIHNvdXJjZVZlcnRleE5hbWVzID0gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lczsgIC8vL1xuXG4gICAgICBzb3VyY2VWZXJ0ZXhOYW1lcy5mb3JFYWNoKChzb3VyY2VWZXJ0ZXhOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGVkZ2UgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgICBlZGdlcy5wdXNoKGVkZ2UpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVkZ2VzO1xuICB9XG5cbiAgZ2V0RWRnZXNCeVNvdXJjZVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSkge1xuICAgIGNvbnN0IGVkZ2VzID0gW10sXG4gICAgICAgICAgc291cmNlVmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSk7XG5cbiAgICBpZiAoc291cmNlVmVydGV4ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcyA9IHNvdXJjZVZlcnRleC5nZXRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcygpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZXMgPSBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lczsgIC8vL1xuXG4gICAgICB0YXJnZXRWZXJ0ZXhOYW1lcy5mb3JFYWNoKCh0YXJnZXRWZXJ0ZXhOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGVkZ2UgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgICBlZGdlcy5wdXNoKGVkZ2UpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVkZ2VzO1xuICB9XG5cbiAgZ2V0Rmlyc3RDeWNsZUJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgbGV0IGZpcnN0Q3ljbGUgPSBudWxsO1xuXG4gICAgY29uc3QgdmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSksXG4gICAgICAgICAgY3ljbGljRWRnZXMgPSB0aGlzLmN5Y2xpY0VkZ2VzLnNsaWNlKCksIC8vL1xuICAgICAgICAgIHBhcnRpYWxDeWNsZXMgPSBbXSxcbiAgICAgICAgICBjeWNsZXMgPSBbXTtcblxuICAgIGZvcndhcmRzRGVwdGhGaXJzdFNlYXJjaCh2ZXJ0ZXgsICh2aXNpdGVkVmVydGV4LCBnZXRQcmVkZWNlc3NvclZlcnRpY2VzKSA9PiB7XG4gICAgICBjb25zdCB2aXNpdGVkVmVydGV4TmFtZSA9IHZpc2l0ZWRWZXJ0ZXguZ2V0TmFtZSgpLFxuICAgICAgICAgICAgc291cmNlVmVydGV4TmFtZSA9IHZpc2l0ZWRWZXJ0ZXhOYW1lOyAvLy9cblxuICAgICAgZmlsdGVyKGN5Y2xpY0VkZ2VzLCAoY3ljbGljRWRnZSkgPT4ge1xuICAgICAgICBjb25zdCBtYXRjaGVzID0gY3ljbGljRWRnZS5tYXRjaFNvdXJjZVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSk7XG5cbiAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICBjb25zdCBwcmVkZWNlc3NvclZlcnRpY2VzID0gZ2V0UHJlZGVjZXNzb3JWZXJ0aWNlcygpLFxuICAgICAgICAgICAgICAgIHBhcnRpYWxDeWNsZSA9ICBQYXJ0aWFsQ3ljbGUuZnJvbUN5Y2xpY0VkZ2VBbmRQcmVkZWNlc3NvclZlcnRpY2VzKGN5Y2xpY0VkZ2UsIHByZWRlY2Vzc29yVmVydGljZXMpO1xuXG4gICAgICAgICAgcGFydGlhbEN5Y2xlcy5wdXNoKHBhcnRpYWxDeWNsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBjeWNsaWNFZGdlc0xlbmd0aCA9IGN5Y2xpY0VkZ2VzLmxlbmd0aCxcbiAgICAgICAgICAgIHRlcm1pbmF0ZSA9IChjeWNsaWNFZGdlc0xlbmd0aCA9PT0gMCk7XG5cbiAgICAgIHJldHVybiB0ZXJtaW5hdGU7XG4gICAgfSk7XG5cbiAgICBwYXJ0aWFsQ3ljbGVzLnNvbWUoKHBhcnRpYWxDeWNsZSkgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0VmVydGV4TmFtZSA9IHBhcnRpYWxDeWNsZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoKHRhcmdldFZlcnRleCwgKHZpc2l0ZWRWZXJ0ZXgsIGdldFByZWRlY2Vzc29yVmVydGljZXMpID0+IHtcbiAgICAgICAgY29uc3QgdmlzaXRlZFZlcnRleE5hbWUgPSB2aXNpdGVkVmVydGV4LmdldE5hbWUoKTtcblxuICAgICAgICBpZiAodmlzaXRlZFZlcnRleE5hbWUgPT09IHZlcnRleE5hbWUpIHtcbiAgICAgICAgICBjb25zdCBwcmVkZWNlc3NvclZlcnRpY2VzID0gZ2V0UHJlZGVjZXNzb3JWZXJ0aWNlcygpLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3NvclZlcnRpY2VzID0gcHJlZGVjZXNzb3JWZXJ0aWNlcywgIC8vL1xuICAgICAgICAgICAgICAgIGN5Y2xlID0gQ3ljbGUuZnJvbVZlcnRleE5hbWVQYXJ0aWFsQ3ljbGVBbmRTdWNjZXNzb3JWZXJ0aWNlcyh2ZXJ0ZXhOYW1lLCBwYXJ0aWFsQ3ljbGUsIHN1Y2Nlc3NvclZlcnRpY2VzKTtcblxuICAgICAgICAgIGN5Y2xlcy5wdXNoKGN5Y2xlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGN5Y2xlc0xlbmd0aCA9IGN5Y2xlcy5sZW5ndGgsXG4gICAgICAgICAgICAgIHRlcm1pbmF0ZSA9IChjeWNsZXNMZW5ndGggPiAwKTtcblxuICAgICAgICByZXR1cm4gdGVybWluYXRlO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjeWNsZXNMZW5ndGggPSBjeWNsZXMubGVuZ3RoO1xuXG4gICAgaWYgKGN5Y2xlc0xlbmd0aCA+IDApIHtcbiAgICAgIGZpcnN0Q3ljbGUgPSBmaXJzdChjeWNsZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBmaXJzdEN5Y2xlO1xuICB9XG5cbiAgZ2V0T3JkZXJlZFZlcnRleE5hbWVzKCkge1xuICAgIGNvbnN0IHZlcnRpY2VzID0gdGhpcy5nZXRWZXJ0aWNlcygpO1xuXG4gICAgb3JkZXJWZXJ0aWNlcyh2ZXJ0aWNlcyk7XG5cbiAgICBjb25zdCBvcmRlcmVkVmVydGljZXMgPSB2ZXJ0aWNlcywgLy8vXG4gICAgICAgICAgb3JkZXJlZFZlcnRleE5hbWVzID0gdmVydGV4TmFtZXNGcm9tVmVydGljZXMob3JkZXJlZFZlcnRpY2VzKTtcblxuICAgIHJldHVybiBvcmRlcmVkVmVydGV4TmFtZXM7XG4gIH1cblxuICBnZXRGaXJzdEN5Y2xlKCkge1xuICAgIGNvbnN0IGZpcnN0Q3ljbGljRWRnZSA9IGZpcnN0KHRoaXMuY3ljbGljRWRnZXMpLFxuICAgICAgICAgIGN5Y2xpY0VkZ2UgPSBmaXJzdEN5Y2xpY0VkZ2UsIC8vL1xuICAgICAgICAgIHNvdXJjZVZlcnRleE5hbWUgPSBjeWNsaWNFZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSxcbiAgICAgICAgICB2ZXJ0ZXhOYW1lID0gc291cmNlVmVydGV4TmFtZSwgIC8vL1xuICAgICAgICAgIGZpcnN0Q3ljbGUgPSB0aGlzLmdldEZpcnN0Q3ljbGVCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICByZXR1cm4gZmlyc3RDeWNsZTtcbiAgfVxuXG4gIGlzRWRnZVByZXNlbnQoZWRnZSkge1xuICAgIGNvbnN0IHNvdXJjZVZlcnRleE5hbWUgPSBlZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSxcbiAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gZWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgZWRnZVByZXNlbnQgPSB0aGlzLmlzRWRnZVByZXNlbnRCeVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgcmV0dXJuIGVkZ2VQcmVzZW50O1xuICB9XG5cbiAgYXJlQ3ljbGVzUHJlc2VudCgpIHtcbiAgICBjb25zdCBjeWNsaWNFZGdlc0xlbmd0aCA9IHRoaXMuY3ljbGljRWRnZXMubGVuZ3RoLFxuICAgICAgICAgIGN5Y2xlc1ByZXNlbnQgPSAoY3ljbGljRWRnZXNMZW5ndGggPiAwKTtcblxuICAgIHJldHVybiBjeWNsZXNQcmVzZW50O1xuICB9XG5cbiAgaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBjb25zdCB2ZXJ0ZXhOYW1lcyA9IHRoaXMuZ2V0VmVydGV4TmFtZXMoKSxcbiAgICAgICAgICB2ZXJ0ZXhOYW1lc0luY2x1ZGVzVmVydGV4TmFtZSA9IHZlcnRleE5hbWVzLmluY2x1ZGVzKHZlcnRleE5hbWUpLFxuICAgICAgICAgIHZlcnRleFByZXNlbnQgPSB2ZXJ0ZXhOYW1lc0luY2x1ZGVzVmVydGV4TmFtZTsgIC8vL1xuXG4gICAgcmV0dXJuIHZlcnRleFByZXNlbnQ7XG4gIH1cblxuICBhcmVDeWNsZXNQcmVzZW50QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBsZXQgY3ljbGVzUHJlc2VudCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdmVydGV4UHJlc2VudCA9IHRoaXMuaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgaWYgKHZlcnRleFByZXNlbnQpIHtcbiAgICAgIGNvbnN0IGZpcnN0Q3ljbGUgPSB0aGlzLmdldEZpcnN0Q3ljbGVCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICAgIGN5Y2xlc1ByZXNlbnQgPSAoZmlyc3RDeWNsZSAhPT0gbnVsbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGN5Y2xlc1ByZXNlbnQ7XG4gIH1cblxuICBpc0VkZ2VQcmVzZW50QnlTb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKSB7XG4gICAgbGV0IGVkZ2VQcmVzZW50ID0gZmFsc2U7XG5cbiAgICBjb25zdCBzb3VyY2VWZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICB0YXJnZXRWZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICBzb3VyY2VWZXJ0ZXhBbmRUYXJnZXRWZXJ0ZXhQcmVzZW50ID0gKHNvdXJjZVZlcnRleCAhPT0gbnVsbCkgJiYgKHRhcmdldFZlcnRleCAhPT0gbnVsbCk7XG5cbiAgICBpZiAoc291cmNlVmVydGV4QW5kVGFyZ2V0VmVydGV4UHJlc2VudCkge1xuICAgICAgZWRnZVByZXNlbnQgPSBzb3VyY2VWZXJ0ZXguaXNFZGdlUHJlc2VudEJ5VGFyZ2V0VmVydGV4KHRhcmdldFZlcnRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVkZ2VQcmVzZW50O1xuICB9XG5cbiAgc2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUsIHZlcnRleCkge1xuICAgIHRoaXMudmVydGV4TWFwW3ZlcnRleE5hbWVdID0gdmVydGV4O1xuICB9XG5cbiAgZGVsZXRlVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBkZWxldGUgdGhpcy52ZXJ0ZXhNYXBbdmVydGV4TmFtZV07XG4gIH1cblxuICBhZGRFZGdlKGVkZ2UpIHtcbiAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gZWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IGVkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgIHN1Y2Nlc3MgPSB0aGlzLmFkZEVkZ2VCeVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICBjb25zdCBjeWNsaWNFZGdlc0luY2x1ZGVzRWRnZSA9IGNoZWNrRWRnZXNJbmNsdWRlc0VkZ2UoZWRnZSwgdGhpcy5jeWNsaWNFZGdlcyk7XG5cbiAgICAgIGlmICghY3ljbGljRWRnZXNJbmNsdWRlc0VkZ2UpIHtcbiAgICAgICAgY29uc3QgY3ljbGljRWRnZSA9IGVkZ2U7ICAvLy9cblxuICAgICAgICB0aGlzLmN5Y2xpY0VkZ2VzLnB1c2goY3ljbGljRWRnZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1Y2Nlc3M7XG4gIH1cblxuICBhZGRFZGdlcyhlZGdlcykge1xuICAgIGVkZ2VzLmZvckVhY2goKGVkZ2UpID0+IHtcbiAgICAgIHRoaXMuYWRkRWRnZShlZGdlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgdmVydGV4UHJlc2VudCA9IHRoaXMuaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgaWYgKCF2ZXJ0ZXhQcmVzZW50KSB7XG4gICAgICBjb25zdCB2ZXJ0ZXhOYW1lcyA9IHRoaXMuZ2V0VmVydGV4TmFtZXMoKSxcbiAgICAgICAgICAgIHZlcnRleE5hbWVzTGVuZ3RoID0gdmVydGV4TmFtZXMubGVuZ3RoLFxuICAgICAgICAgICAgbmFtZSA9IHZlcnRleE5hbWUsICAvLy9cbiAgICAgICAgICAgIGluZGV4ID0gdmVydGV4TmFtZXNMZW5ndGgsIC8vL1xuICAgICAgICAgICAgdmVydGV4ID0gVmVydGV4LmZyb21OYW1lQW5kSW5kZXgobmFtZSwgaW5kZXgpO1xuXG4gICAgICB0aGlzLnNldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lLCB2ZXJ0ZXgpO1xuICAgIH1cblxuICAgIGNvbnN0IHZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgcmV0dXJuIHZlcnRleDtcbiAgfVxuXG4gIGFkZFZlcnRpY2VzQnlWZXJ0ZXhOYW1lcyh2ZXJ0ZXhOYW1lcykge1xuICAgIHZlcnRleE5hbWVzLmZvckVhY2goKHZlcnRleE5hbWUpID0+IHtcbiAgICAgIHRoaXMuYWRkVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkRWRnZUJ5U291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSkge1xuICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICBpZiAoc291cmNlVmVydGV4TmFtZSAhPT0gdGFyZ2V0VmVydGV4TmFtZSkge1xuICAgICAgY29uc3Qgc291cmNlVmVydGV4ID0gdGhpcy5hZGRWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSksXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXggPSB0aGlzLmFkZFZlcnRleEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICAgIGVkZ2VQcmVzZW50ID0gc291cmNlVmVydGV4LmlzRWRnZVByZXNlbnRCeVRhcmdldFZlcnRleCh0YXJnZXRWZXJ0ZXgpO1xuXG4gICAgICBpZiAoZWRnZVByZXNlbnQpIHtcbiAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBzb3VyY2VWZXJ0ZXhJbmRleCA9IHNvdXJjZVZlcnRleC5nZXRJbmRleCgpLFxuICAgICAgICAgICAgICB0YXJnZXRWZXJ0ZXhJbmRleCA9IHRhcmdldFZlcnRleC5nZXRJbmRleCgpLFxuICAgICAgICAgICAgICBpbnZhbGlkYXRpbmdFZGdlID0gKHNvdXJjZVZlcnRleEluZGV4ID4gdGFyZ2V0VmVydGV4SW5kZXgpO1xuXG4gICAgICAgIHN1Y2Nlc3MgPSBpbnZhbGlkYXRpbmdFZGdlID9cbiAgICAgICAgICAgICAgICAgICAgYWRkSW52YWxpZGF0aW5nRWRnZUJ5VmVydGljZXMoc291cmNlVmVydGV4LCB0YXJnZXRWZXJ0ZXgpIDpcbiAgICAgICAgICAgICAgICAgICAgICB0cnVlO1xuXG4gICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgY29uc3QgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXggPSBzb3VyY2VWZXJ0ZXgsIC8vL1xuICAgICAgICAgICAgICAgIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCA9IHRhcmdldFZlcnRleDsgLy8vXG5cbiAgICAgICAgICBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleC5hZGRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KTtcblxuICAgICAgICAgIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleC5hZGRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3VjY2VzcztcbiAgfVxuXG4gIHJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgbGV0IHJlbW92ZWRFZGdlcyA9IG51bGw7XG5cbiAgICBjb25zdCB2ZXJ0ZXhQcmVzZW50ID0gdGhpcy5pc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICBpZiAodmVydGV4UHJlc2VudCkge1xuICAgICAgcmVtb3ZlZEVkZ2VzID0gW107XG5cbiAgICAgIGNvbnN0IHZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgICB2ZXJ0ZXguZm9yRWFjaEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCgoaW1tZWRpYXRlU3VjY2Vzc1ZlcnRleCkgPT4ge1xuICAgICAgICBjb25zdCBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCA9IHZlcnRleCwgIC8vL1xuICAgICAgICAgICAgICBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWUgPSBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleC5nZXROYW1lKCksXG4gICAgICAgICAgICAgIGltbWVkaWF0ZVN1Y2Nlc3NWZXJ0ZXhOYW1lID0gaW1tZWRpYXRlU3VjY2Vzc1ZlcnRleC5nZXROYW1lKCksXG4gICAgICAgICAgICAgIHJlbW92ZWRFZGdlU291cmNlVmVydGV4TmFtZSA9IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZSwgLy8vXG4gICAgICAgICAgICAgIHJlbW92ZWRFZGdlVGFyZ2V0VmVydGV4TmFtZSA9IGltbWVkaWF0ZVN1Y2Nlc3NWZXJ0ZXhOYW1lLCAvLy9cbiAgICAgICAgICAgICAgcmVtb3ZlZEVkZ2UgPSBuZXcgRWRnZShyZW1vdmVkRWRnZVNvdXJjZVZlcnRleE5hbWUsIHJlbW92ZWRFZGdlVGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICAgICAgcmVtb3ZlZEVkZ2VzLnB1c2gocmVtb3ZlZEVkZ2UpO1xuXG4gICAgICAgIGltbWVkaWF0ZVN1Y2Nlc3NWZXJ0ZXgucmVtb3ZlSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpO1xuICAgICAgfSk7XG5cbiAgICAgIHZlcnRleC5mb3JFYWNoSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgoKGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGltbWVkaWF0ZVN1Y2Nlc3NWZXJ0ZXggPSB2ZXJ0ZXgsICAvLy9cbiAgICAgICAgICAgICAgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lID0gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXguZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICBpbW1lZGlhdGVTdWNjZXNzVmVydGV4TmFtZSA9IGltbWVkaWF0ZVN1Y2Nlc3NWZXJ0ZXguZ2V0TmFtZSgpLCAgLy8vXG4gICAgICAgICAgICAgIHJlbW92ZWRFZGdlU291cmNlVmVydGV4TmFtZSA9IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZSwgLy8vXG4gICAgICAgICAgICAgIHJlbW92ZWRFZGdlVGFyZ2V0VmVydGV4TmFtZSA9IGltbWVkaWF0ZVN1Y2Nlc3NWZXJ0ZXhOYW1lLCAvLy9cbiAgICAgICAgICAgICAgcmVtb3ZlZEVkZ2UgPSBuZXcgRWRnZShyZW1vdmVkRWRnZVNvdXJjZVZlcnRleE5hbWUsIHJlbW92ZWRFZGdlVGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICAgICAgcmVtb3ZlZEVkZ2VzLnB1c2gocmVtb3ZlZEVkZ2UpO1xuXG4gICAgICAgIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4LnJlbW92ZUltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleChpbW1lZGlhdGVTdWNjZXNzVmVydGV4KTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmRlbGV0ZVZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgICAgY29uc3QgZGVsZXRlZFZlcnRleCA9IHZlcnRleCwgLy8vXG4gICAgICAgICAgICBkZWxldGVkVmVydGV4SW5kZXggPSBkZWxldGVkVmVydGV4LmdldEluZGV4KCksXG4gICAgICAgICAgICB2ZXJ0aWNlcyA9IHRoaXMuZ2V0VmVydGljZXMoKSxcbiAgICAgICAgICAgIGFmZmVjdGVkVmVydGljZXMgPSB2ZXJ0aWNlcy5yZWR1Y2UoKGFmZmVjdGVkVmVydGljZXMsIHZlcnRleCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB2ZXJ0ZXhJbmRleCA9IHZlcnRleC5nZXRJbmRleCgpLFxuICAgICAgICAgICAgICAgICAgICB2ZXJ0ZXhBZmZlY3RlZCA9ICh2ZXJ0ZXhJbmRleCA+IGRlbGV0ZWRWZXJ0ZXhJbmRleCk7XG5cbiAgICAgICAgICAgICAgaWYgKHZlcnRleEFmZmVjdGVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWZmZWN0ZWRWZXJ0ZXggPSB2ZXJ0ZXg7ICAvLy9cblxuICAgICAgICAgICAgICAgIGFmZmVjdGVkVmVydGljZXMucHVzaChhZmZlY3RlZFZlcnRleCk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm4gYWZmZWN0ZWRWZXJ0aWNlcztcbiAgICAgICAgICAgIH0sIFtdKTtcblxuICAgICAgYWZmZWN0ZWRWZXJ0aWNlcy5mb3JFYWNoKChhZmZlY3RlZFZlcnRleCkgPT4ge1xuICAgICAgICBhZmZlY3RlZFZlcnRleC5kZWNyZW1lbnRJbmRleCgpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5maWx0ZXJDeWNsaWNFZGdlcygpO1xuXG4gICAgcmV0dXJuIHJlbW92ZWRFZGdlcztcbiAgfVxuXG4gIHJlbW92ZUVkZ2UoZWRnZSwgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgY3ljbGljRWRnZXNJbmNsdWRlc0VkZ2UgPSBjaGVja0VkZ2VzSW5jbHVkZXNFZGdlKGVkZ2UsIHRoaXMuY3ljbGljRWRnZXMpO1xuXG4gICAgaWYgKGN5Y2xpY0VkZ2VzSW5jbHVkZXNFZGdlKSB7XG4gICAgICBjb25zdCBjeWNsaWNFZGdlID0gZWRnZTsgIC8vL1xuXG4gICAgICByZW1vdmVFZGdlRnJvbUVkZ2VzKGN5Y2xpY0VkZ2UsIHRoaXMuY3ljbGljRWRnZXMpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZWRnZVByZXNlbnQgPSB0aGlzLmlzRWRnZVByZXNlbnQoZWRnZSk7XG5cbiAgICBpZiAoZWRnZVByZXNlbnQpIHtcbiAgICAgIGNvbnN0IHNvdXJjZVZlcnRleE5hbWUgPSBlZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleE5hbWUgPSBlZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKTtcblxuICAgICAgdGhpcy5yZW1vdmVFZGdlQnlTb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgaWYgKHJlbW92ZVN0cmFuZGVkVmVydGljZXMpIHtcbiAgICAgICAgY29uc3Qgc291cmNlVmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSksXG4gICAgICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpLFxuICAgICAgICAgICAgICBzb3VyY2VWZXJ0ZXhTdHJhbmRlZCA9IHNvdXJjZVZlcnRleC5pc1N0cmFuZGVkKCksXG4gICAgICAgICAgICAgIHRhcmdldFZlcnRleFN0cmFuZGVkID0gdGFyZ2V0VmVydGV4LmlzU3RyYW5kZWQoKTtcblxuICAgICAgICBpZiAoc291cmNlVmVydGV4U3RyYW5kZWQpIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0YXJnZXRWZXJ0ZXhTdHJhbmRlZCkge1xuICAgICAgICAgIHRoaXMucmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZmlsdGVyQ3ljbGljRWRnZXMoKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVFZGdlcyhlZGdlcywgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyA9IGZhbHNlKSB7XG4gICAgZWRnZXMuZm9yRWFjaCgoZWRnZSkgPT4ge1xuICAgICAgdGhpcy5yZW1vdmVFZGdlKGVkZ2UsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlRWRnZXNCeVRhcmdldFZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSwgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgY3ljbGljRWRnZXMgPSBlZGdlc0J5VGFyZ2V0VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lLCB0aGlzLmN5Y2xpY0VkZ2VzKSxcbiAgICAgICAgICBlZGdlcyA9IHRoaXMuZ2V0RWRnZXNCeVRhcmdldFZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICB0aGlzLnJlbW92ZUVkZ2VzKGN5Y2xpY0VkZ2VzLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzKTtcblxuICAgIHRoaXMucmVtb3ZlRWRnZXMoZWRnZXMsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMpO1xuICB9XG5cbiAgcmVtb3ZlRWRnZXNCeVNvdXJjZVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgY3ljbGljRWRnZXMgPSBlZGdlc0J5U291cmNlVmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0aGlzLmN5Y2xpY0VkZ2VzKSxcbiAgICAgICAgICBlZGdlcyA9IHRoaXMuZ2V0RWRnZXNCeVNvdXJjZVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSk7XG5cbiAgICB0aGlzLnJlbW92ZUVkZ2VzKGN5Y2xpY0VkZ2VzLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzKTtcblxuICAgIHRoaXMucmVtb3ZlRWRnZXMoZWRnZXMsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMpO1xuICB9XG5cbiAgcmVtb3ZlRWRnZUJ5U291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSkge1xuICAgIGNvbnN0IHNvdXJjZVZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpLFxuICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgc291cmNlVmVydGV4LnJlbW92ZUltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCh0YXJnZXRWZXJ0ZXgpO1xuXG4gICAgdGFyZ2V0VmVydGV4LnJlbW92ZUltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KHNvdXJjZVZlcnRleCk7XG4gIH1cblxuICByZW1vdmVBbGxFZGdlc0FuZFZlcnRpY2VzKCkge1xuICAgIHRoaXMudmVydGV4TWFwID0ge307XG4gICAgdGhpcy5jeWNsaWNFZGdlcyA9IFtdO1xuICB9XG5cbiAgZmlsdGVyQ3ljbGljRWRnZXMoKSB7XG4gICAgZmlsdGVyKHRoaXMuY3ljbGljRWRnZXMsIChjeWNsaWNFZGdlKSA9PiB7XG4gICAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gY3ljbGljRWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gY3ljbGljRWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICBzb3VyY2VWZXJ0ZXhQcmVzZW50ID0gdGhpcy5pc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSksXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXhQcmVzZW50ID0gdGhpcy5pc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICAgIGlmIChzb3VyY2VWZXJ0ZXhQcmVzZW50ICYmIHRhcmdldFZlcnRleFByZXNlbnQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBmaWx0ZXIodGhpcy5jeWNsaWNFZGdlcywgKGN5Y2xpY0VkZ2UpID0+IHtcbiAgICAgIGNvbnN0IGVkZ2UgPSBjeWNsaWNFZGdlLCAgLy8vXG4gICAgICAgICAgICBzdWNjZXNzID0gdGhpcy5hZGRFZGdlKGVkZ2UpO1xuXG4gICAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgdmVydGV4TWFwID0ge30sXG4gICAgICAgICAgY3ljbGljRWRnZXMgPSBbXSxcbiAgICAgICAgICBkaXJlY3RlZEdyYXBoID0gbmV3IERpcmVjdGVkR3JhcGgodmVydGV4TWFwLCBjeWNsaWNFZGdlcyk7XG4gICAgXG4gICAgcmV0dXJuIGRpcmVjdGVkR3JhcGg7ICAgIFxuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEludmFsaWRhdGluZ0VkZ2VCeVZlcnRpY2VzKHNvdXJjZVZlcnRleCwgdGFyZ2V0VmVydGV4KSB7XG4gIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgY29uc3QgZm9yd2FyZHNBZmZlY3RlZFZlcnRpY2VzID0gdGFyZ2V0VmVydGV4LnJldHJpZXZlRm9yd2FyZHNBZmZlY3RlZFZlcnRpY2VzKHNvdXJjZVZlcnRleCksXG4gICAgICAgIGxhc3RGb3J3YXJkc0FmZmVjdGVkVmVydGV4ID0gbGFzdChmb3J3YXJkc0FmZmVjdGVkVmVydGljZXMpLFxuICAgICAgICByZXN1bHRzSW5DeWNsZSA9IChsYXN0Rm9yd2FyZHNBZmZlY3RlZFZlcnRleCA9PT0gc291cmNlVmVydGV4KTtcblxuICBpZiAoIXJlc3VsdHNJbkN5Y2xlKSB7XG4gICAgY29uc3QgYmFja3dhcmRzQWZmZWN0ZWRWZXJ0aWNlcyA9IHNvdXJjZVZlcnRleC5yZXRyaWV2ZUJhY2t3YXJkc0FmZmVjdGVkVmVydGljZXMoKTtcblxuICAgIG9yZGVyVmVydGljZXMoYmFja3dhcmRzQWZmZWN0ZWRWZXJ0aWNlcyk7XG5cbiAgICBvcmRlclZlcnRpY2VzKGZvcndhcmRzQWZmZWN0ZWRWZXJ0aWNlcyk7XG5cbiAgICBjb25zdCBhZmZlY3RlZFZlcnRpY2VzID0gW10uY29uY2F0KGJhY2t3YXJkc0FmZmVjdGVkVmVydGljZXMpLmNvbmNhdChmb3J3YXJkc0FmZmVjdGVkVmVydGljZXMpLFxuICAgICAgICAgIGFmZmVjdGVkVmVydGV4SW5kaWNlcyA9IGFmZmVjdGVkVmVydGljZXMubWFwKChhZmZlY3RlZFZlcnRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYWZmZWN0ZWRWZXJ0ZXhJbmRleCA9IGFmZmVjdGVkVmVydGV4LmdldEluZGV4KCk7XG5cbiAgICAgICAgICAgIHJldHVybiBhZmZlY3RlZFZlcnRleEluZGV4O1xuICAgICAgICAgIH0pO1xuXG4gICAgYWZmZWN0ZWRWZXJ0ZXhJbmRpY2VzLnNvcnQoKGluZGV4QSwgaW5kZXhCKSA9PiAoaW5kZXhBIC0gaW5kZXhCKSk7XG5cbiAgICBhZmZlY3RlZFZlcnRpY2VzLmZvckVhY2goKGFmZmVjdGVkVmVydGV4LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgYWZmZWN0ZWRWZXJ0ZXhJbmRleCA9IGFmZmVjdGVkVmVydGV4SW5kaWNlc1tpbmRleF07XG5cbiAgICAgIGFmZmVjdGVkVmVydGV4LnNldEluZGV4KGFmZmVjdGVkVmVydGV4SW5kZXgpO1xuICAgIH0pO1xuXG4gICAgc3VjY2VzcyA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gc3VjY2Vzcztcbn1cbiJdLCJuYW1lcyI6WyJEaXJlY3RlZEdyYXBoIiwibGFzdCIsImFycmF5VXRpbGl0aWVzIiwiZmlyc3QiLCJmaWx0ZXIiLCJ2ZXJ0ZXhNYXAiLCJjeWNsaWNFZGdlcyIsImdldFZlcnRleE5hcCIsImdldEN5Y2xpY0VkZ2VzIiwiaXNFbXB0eSIsInZlcnRpY2VzIiwiZ2V0VmVydGljZXMiLCJ2ZXJ0aWNlc0xlbmd0aCIsImxlbmd0aCIsImVtcHR5IiwidmVydGV4TWFwVmFsdWVzIiwiT2JqZWN0IiwidmFsdWVzIiwiZ2V0VmVydGV4TmFtZXMiLCJ2ZXJ0ZXhNYXBLZXlzIiwia2V5cyIsInZlcnRleE5hbWVzIiwiZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lIiwidmVydGV4TmFtZSIsInZlcnRleFByZXNlbnQiLCJpc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUiLCJ2ZXJ0ZXgiLCJnZXRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lIiwiaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcyIsImdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMiLCJnZXRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSIsImltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzIiwiZ2V0SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXMiLCJnZXRQcmVkZWNlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lIiwicHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcyIsImdldFByZWRlY2Vzc29yVmVydGV4TmFtZXMiLCJnZXRTdWNjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSIsInN1Y2Nlc3NvclZlcnRleE5hbWVzIiwiZ2V0U3VjY2Vzc29yVmVydGV4TmFtZXMiLCJnZXRFZGdlc0J5VGFyZ2V0VmVydGV4TmFtZSIsInRhcmdldFZlcnRleE5hbWUiLCJlZGdlcyIsInRhcmdldFZlcnRleCIsInNvdXJjZVZlcnRleE5hbWVzIiwiZm9yRWFjaCIsInNvdXJjZVZlcnRleE5hbWUiLCJlZGdlIiwiRWRnZSIsImZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZSIsInB1c2giLCJnZXRFZGdlc0J5U291cmNlVmVydGV4TmFtZSIsInNvdXJjZVZlcnRleCIsInRhcmdldFZlcnRleE5hbWVzIiwiZ2V0Rmlyc3RDeWNsZUJ5VmVydGV4TmFtZSIsImZpcnN0Q3ljbGUiLCJzbGljZSIsInBhcnRpYWxDeWNsZXMiLCJjeWNsZXMiLCJmb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2giLCJ2aXNpdGVkVmVydGV4IiwiZ2V0UHJlZGVjZXNzb3JWZXJ0aWNlcyIsInZpc2l0ZWRWZXJ0ZXhOYW1lIiwiZ2V0TmFtZSIsImN5Y2xpY0VkZ2UiLCJtYXRjaGVzIiwibWF0Y2hTb3VyY2VWZXJ0ZXhOYW1lIiwicHJlZGVjZXNzb3JWZXJ0aWNlcyIsInBhcnRpYWxDeWNsZSIsIlBhcnRpYWxDeWNsZSIsImZyb21DeWNsaWNFZGdlQW5kUHJlZGVjZXNzb3JWZXJ0aWNlcyIsImN5Y2xpY0VkZ2VzTGVuZ3RoIiwidGVybWluYXRlIiwic29tZSIsImdldFRhcmdldFZlcnRleE5hbWUiLCJzdWNjZXNzb3JWZXJ0aWNlcyIsImN5Y2xlIiwiQ3ljbGUiLCJmcm9tVmVydGV4TmFtZVBhcnRpYWxDeWNsZUFuZFN1Y2Nlc3NvclZlcnRpY2VzIiwiY3ljbGVzTGVuZ3RoIiwiZ2V0T3JkZXJlZFZlcnRleE5hbWVzIiwib3JkZXJWZXJ0aWNlcyIsIm9yZGVyZWRWZXJ0aWNlcyIsIm9yZGVyZWRWZXJ0ZXhOYW1lcyIsInZlcnRleE5hbWVzRnJvbVZlcnRpY2VzIiwiZ2V0Rmlyc3RDeWNsZSIsImZpcnN0Q3ljbGljRWRnZSIsImdldFNvdXJjZVZlcnRleE5hbWUiLCJpc0VkZ2VQcmVzZW50IiwiZWRnZVByZXNlbnQiLCJpc0VkZ2VQcmVzZW50QnlTb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZSIsImFyZUN5Y2xlc1ByZXNlbnQiLCJjeWNsZXNQcmVzZW50IiwidmVydGV4TmFtZXNJbmNsdWRlc1ZlcnRleE5hbWUiLCJpbmNsdWRlcyIsImFyZUN5Y2xlc1ByZXNlbnRCeVZlcnRleE5hbWUiLCJzb3VyY2VWZXJ0ZXhBbmRUYXJnZXRWZXJ0ZXhQcmVzZW50IiwiaXNFZGdlUHJlc2VudEJ5VGFyZ2V0VmVydGV4Iiwic2V0VmVydGV4QnlWZXJ0ZXhOYW1lIiwiZGVsZXRlVmVydGV4QnlWZXJ0ZXhOYW1lIiwiYWRkRWRnZSIsInN1Y2Nlc3MiLCJhZGRFZGdlQnlTb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZSIsImN5Y2xpY0VkZ2VzSW5jbHVkZXNFZGdlIiwiY2hlY2tFZGdlc0luY2x1ZGVzRWRnZSIsImFkZEVkZ2VzIiwiYWRkVmVydGV4QnlWZXJ0ZXhOYW1lIiwidmVydGV4TmFtZXNMZW5ndGgiLCJuYW1lIiwiaW5kZXgiLCJWZXJ0ZXgiLCJmcm9tTmFtZUFuZEluZGV4IiwiYWRkVmVydGljZXNCeVZlcnRleE5hbWVzIiwic291cmNlVmVydGV4SW5kZXgiLCJnZXRJbmRleCIsInRhcmdldFZlcnRleEluZGV4IiwiaW52YWxpZGF0aW5nRWRnZSIsImFkZEludmFsaWRhdGluZ0VkZ2VCeVZlcnRpY2VzIiwiaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgiLCJpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgiLCJhZGRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgiLCJhZGRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCIsInJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZSIsInJlbW92ZWRFZGdlcyIsImZvckVhY2hJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgiLCJpbW1lZGlhdGVTdWNjZXNzVmVydGV4IiwiaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lIiwiaW1tZWRpYXRlU3VjY2Vzc1ZlcnRleE5hbWUiLCJyZW1vdmVkRWRnZVNvdXJjZVZlcnRleE5hbWUiLCJyZW1vdmVkRWRnZVRhcmdldFZlcnRleE5hbWUiLCJyZW1vdmVkRWRnZSIsInJlbW92ZUltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4IiwiZm9yRWFjaEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4IiwicmVtb3ZlSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4IiwiZGVsZXRlZFZlcnRleCIsImRlbGV0ZWRWZXJ0ZXhJbmRleCIsImFmZmVjdGVkVmVydGljZXMiLCJyZWR1Y2UiLCJ2ZXJ0ZXhJbmRleCIsInZlcnRleEFmZmVjdGVkIiwiYWZmZWN0ZWRWZXJ0ZXgiLCJkZWNyZW1lbnRJbmRleCIsImZpbHRlckN5Y2xpY0VkZ2VzIiwicmVtb3ZlRWRnZSIsInJlbW92ZVN0cmFuZGVkVmVydGljZXMiLCJyZW1vdmVFZGdlRnJvbUVkZ2VzIiwicmVtb3ZlRWRnZUJ5U291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUiLCJzb3VyY2VWZXJ0ZXhTdHJhbmRlZCIsImlzU3RyYW5kZWQiLCJ0YXJnZXRWZXJ0ZXhTdHJhbmRlZCIsInJlbW92ZUVkZ2VzIiwicmVtb3ZlRWRnZXNCeVRhcmdldFZlcnRleE5hbWUiLCJlZGdlc0J5VGFyZ2V0VmVydGV4TmFtZSIsInJlbW92ZUVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lIiwiZWRnZXNCeVNvdXJjZVZlcnRleE5hbWUiLCJyZW1vdmVBbGxFZGdlc0FuZFZlcnRpY2VzIiwic291cmNlVmVydGV4UHJlc2VudCIsInRhcmdldFZlcnRleFByZXNlbnQiLCJmcm9tTm90aGluZyIsImRpcmVjdGVkR3JhcGgiLCJmb3J3YXJkc0FmZmVjdGVkVmVydGljZXMiLCJyZXRyaWV2ZUZvcndhcmRzQWZmZWN0ZWRWZXJ0aWNlcyIsImxhc3RGb3J3YXJkc0FmZmVjdGVkVmVydGV4IiwicmVzdWx0c0luQ3ljbGUiLCJiYWNrd2FyZHNBZmZlY3RlZFZlcnRpY2VzIiwicmV0cmlldmVCYWNrd2FyZHNBZmZlY3RlZFZlcnRpY2VzIiwiY29uY2F0IiwiYWZmZWN0ZWRWZXJ0ZXhJbmRpY2VzIiwibWFwIiwiYWZmZWN0ZWRWZXJ0ZXhJbmRleCIsInNvcnQiLCJpbmRleEEiLCJpbmRleEIiLCJzZXRJbmRleCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFjcUJBOzs7eUJBWlU7MkRBRWQ7NERBQ0M7NkRBQ0M7bUVBQ007dUJBRXdEO3FCQUM2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5RyxJQUFRQyxPQUF3QkMsMEJBQXhCRCxNQUFNRSxRQUFrQkQsMEJBQWxCQyxPQUFPQyxTQUFXRiwwQkFBWEU7QUFFTixJQUFBLEFBQU1KLDhCQXVmbEIsQUF2Zlk7YUFBTUEsY0FDUEssU0FBUyxFQUFFQyxXQUFXO2dDQURmTjtRQUVqQixJ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