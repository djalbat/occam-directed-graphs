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
var _search = require("./utilities/search");
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
            key: "getFirstCycleByVertexName",
            value: function getFirstCycleByVertexName(vertexName) {
                var _this = this;
                var firstCycle = null;
                var vertex = this.getVertexByVertexName(vertexName), cyclicEdges = this.cyclicEdges.slice(), partialCycles = [], cycles = [];
                (0, _search.forwardsDepthFirstSearch)(vertex, function(visitedVertex, predecessorVertexes) {
                    var visitedVertexName = visitedVertex.getName(), sourceVertexName = visitedVertexName; ///
                    filter(cyclicEdges, function(cyclicEdge) {
                        var matches = cyclicEdge.matchSourceVertexName(sourceVertexName);
                        if (matches) {
                            var partialCycle = _partialCycle.default.fromCyclicEdgeAndPredecessorVertexes(cyclicEdge, predecessorVertexes);
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
                    (0, _search.forwardsDepthFirstSearch)(targetVertex, function(visitedVertex, predecessorVertexes) {
                        var visitedVertexName = visitedVertex.getName();
                        if (visitedVertexName === vertexName) {
                            var successorVertexes = predecessorVertexes, cycle = _cycle.default.fromVertexNamePartialCycleAndSuccessorVertexes(vertexName, partialCycle, successorVertexes);
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
            key: "getSuccessorVertexNamesByVertexName",
            value: function getSuccessorVertexNamesByVertexName(vertexName) {
                var vertex = this.getVertexByVertexName(vertexName), successorVertexNames = vertex.getSuccessorVertexNames();
                return successorVertexNames;
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
                    var deletedVertex = vertex, deletedVertexIndex = deletedVertex.getIndex(), vertexes = this.getVertexes(), affectedVertexes = vertexes.reduce(function(affectedVertexes, vertex) {
                        var vertexIndex = vertex.getIndex(), vertexAffected = vertexIndex > deletedVertexIndex;
                        if (vertexAffected) {
                            var affectedVertex = vertex; ///
                            affectedVertexes.push(affectedVertex);
                        }
                        return affectedVertexes;
                    }, []);
                    affectedVertexes.forEach(function(affectedVertex) {
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
                var removeStrandedVertexes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
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
                    if (removeStrandedVertexes) {
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
                this.cyclicEdges = [];
            }
        },
        {
            key: "removeEdgesBySourceVertexName",
            value: function removeEdgesBySourceVertexName(sourceVertexName) {
                var removeStrandedVertexes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                var cyclicEdges = (0, _edge1.edgesBySourceVertexName)(sourceVertexName, this.cyclicEdges), edges = this.getEdgesBySourceVertexName(sourceVertexName);
                this.removeEdges(cyclicEdges, removeStrandedVertexes);
                this.removeEdges(edges, removeStrandedVertexes);
            }
        },
        {
            key: "removeEdgesByTargetVertexName",
            value: function removeEdgesByTargetVertexName(targetVertexName) {
                var removeStrandedVertexes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                var cyclicEdges = (0, _edge1.edgesByTargetVertexName)(targetVertexName, this.cyclicEdges), edges = this.getEdgesByTargetVertexName(targetVertexName);
                this.removeEdges(cyclicEdges, removeStrandedVertexes);
                this.removeEdges(edges, removeStrandedVertexes);
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
                        success = invalidatingEdge ? addInvalidatingEdgeByVertexes(sourceVertex, targetVertex) : true;
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
            key: "removeEdgeBySourceVertexNameAndTargetVertexName",
            value: function removeEdgeBySourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName) {
                var sourceVertex = this.getVertexByVertexName(sourceVertexName), targetVertex = this.getVertexByVertexName(targetVertexName);
                sourceVertex.removeImmediateSuccessorVertex(targetVertex);
                targetVertex.removeImmediatePredecessorVertex(sourceVertex);
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
function addInvalidatingEdgeByVertexes(sourceVertex, targetVertex) {
    var success = false;
    var forwardsAffectedVertexes = targetVertex.retrieveForwardsAffectedVertexes(sourceVertex), lastForwardsAffectedVertex = last(forwardsAffectedVertexes), resultsInCycle = lastForwardsAffectedVertex === sourceVertex;
    if (!resultsInCycle) {
        var backwardsAffectedVertexes = sourceVertex.retrieveBackwardsAffectedVertexes();
        (0, _vertex1.orderVertexes)(backwardsAffectedVertexes);
        (0, _vertex1.orderVertexes)(forwardsAffectedVertexes);
        var affectedVertexes = [].concat(backwardsAffectedVertexes).concat(forwardsAffectedVertexes), affectedVertexIndices = affectedVertexes.map(function(affectedVertex) {
            var affectedVertexIndex = affectedVertex.getIndex();
            return affectedVertexIndex;
        });
        affectedVertexIndices.sort(function(indexA, indexB) {
            if (false) {
            ///
            } else if (indexA < indexB) {
                return -1;
            } else if (indexA > indexB) {
                return +1;
            } else {
                return 0;
            }
        });
        affectedVertexes.forEach(function(affectedVertex, index) {
            var affectedVertexIndex = affectedVertexIndices[index];
            affectedVertex.setIndex(affectedVertexIndex);
        });
        success = true;
    }
    return success;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kaXJlY3RlZEdyYXBoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEVkZ2UgZnJvbSBcIi4vZWRnZVwiO1xuaW1wb3J0IEN5Y2xlIGZyb20gXCIuL2N5Y2xlXCI7XG5pbXBvcnQgVmVydGV4IGZyb20gXCIuL3ZlcnRleFwiO1xuaW1wb3J0IFBhcnRpYWxDeWNsZSBmcm9tIFwiLi9wYXJ0aWFsQ3ljbGVcIjtcblxuaW1wb3J0IHsgZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3NlYXJjaFwiO1xuaW1wb3J0IHsgb3JkZXJWZXJ0ZXhlcywgdmVydGV4TmFtZXNGcm9tVmVydGV4ZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvdmVydGV4XCI7XG5pbXBvcnQgeyByZW1vdmVFZGdlRnJvbUVkZ2VzLCBjaGVja0VkZ2VzSW5jbHVkZXNFZGdlLCBlZGdlc0J5U291cmNlVmVydGV4TmFtZSwgZWRnZXNCeVRhcmdldFZlcnRleE5hbWUgfSBmcm9tIFwiLi91dGlsaXRpZXMvZWRnZVwiO1xuXG5jb25zdCB7IGxhc3QsIGZpcnN0LCBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RlZEdyYXBoIHtcbiAgY29uc3RydWN0b3IodmVydGV4TWFwLCBjeWNsaWNFZGdlcykge1xuICAgIHRoaXMudmVydGV4TWFwID0gdmVydGV4TWFwO1xuICAgIHRoaXMuY3ljbGljRWRnZXMgPSBjeWNsaWNFZGdlcztcbiAgfVxuXG4gIGdldFZlcnRleE5hcCgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhNYXA7XG4gIH1cblxuICBnZXRDeWNsaWNFZGdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5jeWNsaWNFZGdlcztcbiAgfVxuXG4gIGdldFZlcnRleGVzKCkge1xuICAgIGNvbnN0IHZlcnRleE1hcFZhbHVlcyA9IE9iamVjdC52YWx1ZXModGhpcy52ZXJ0ZXhNYXApLFxuICAgICAgICAgIHZlcnRleGVzID0gdmVydGV4TWFwVmFsdWVzOyAvLy9cblxuICAgIHJldHVybiB2ZXJ0ZXhlcztcbiAgfVxuXG4gIGdldFZlcnRleE5hbWVzKCkge1xuICAgIGNvbnN0IHZlcnRleE1hcEtleXMgPSBPYmplY3Qua2V5cyh0aGlzLnZlcnRleE1hcCksXG4gICAgICAgICAgdmVydGV4TmFtZXMgPSB2ZXJ0ZXhNYXBLZXlzOyAgLy8vXG5cbiAgICByZXR1cm4gdmVydGV4TmFtZXM7XG4gIH1cblxuICBnZXRPcmRlcmVkVmVydGV4TmFtZXMoKSB7XG4gICAgY29uc3QgdmVydGV4ZXMgPSB0aGlzLmdldFZlcnRleGVzKCk7XG5cbiAgICBvcmRlclZlcnRleGVzKHZlcnRleGVzKTtcblxuICAgIGNvbnN0IG9yZGVyZWRWZXJ0ZXhlcyA9IHZlcnRleGVzLCAvLy9cbiAgICAgICAgICBvcmRlcmVkVmVydGV4TmFtZXMgPSB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhlcyhvcmRlcmVkVmVydGV4ZXMpO1xuXG4gICAgcmV0dXJuIG9yZGVyZWRWZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGdldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgdmVydGV4UHJlc2VudCA9IHRoaXMuaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpLFxuICAgICAgICAgIHZlcnRleCA9IHZlcnRleFByZXNlbnQgP1xuICAgICAgICAgICAgICAgICAgICAgdGhpcy52ZXJ0ZXhNYXBbdmVydGV4TmFtZV0gOlxuICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gICAgcmV0dXJuIHZlcnRleDtcbiAgfVxuXG4gIGdldEZpcnN0Q3ljbGVCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGxldCBmaXJzdEN5Y2xlID0gbnVsbDtcblxuICAgIGNvbnN0IHZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpLFxuICAgICAgICAgIGN5Y2xpY0VkZ2VzID0gdGhpcy5jeWNsaWNFZGdlcy5zbGljZSgpLCAvLy9cbiAgICAgICAgICBwYXJ0aWFsQ3ljbGVzID0gW10sXG4gICAgICAgICAgY3ljbGVzID0gW107XG5cbiAgICBmb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2godmVydGV4LCAodmlzaXRlZFZlcnRleCwgcHJlZGVjZXNzb3JWZXJ0ZXhlcykgPT4ge1xuICAgICAgY29uc3QgdmlzaXRlZFZlcnRleE5hbWUgPSB2aXNpdGVkVmVydGV4LmdldE5hbWUoKSxcbiAgICAgICAgICAgIHNvdXJjZVZlcnRleE5hbWUgPSB2aXNpdGVkVmVydGV4TmFtZTsgLy8vXG5cbiAgICAgIGZpbHRlcihjeWNsaWNFZGdlcywgKGN5Y2xpY0VkZ2UpID0+IHtcbiAgICAgICAgY29uc3QgbWF0Y2hlcyA9IGN5Y2xpY0VkZ2UubWF0Y2hTb3VyY2VWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpO1xuXG4gICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgY29uc3QgcGFydGlhbEN5Y2xlID0gIFBhcnRpYWxDeWNsZS5mcm9tQ3ljbGljRWRnZUFuZFByZWRlY2Vzc29yVmVydGV4ZXMoY3ljbGljRWRnZSwgcHJlZGVjZXNzb3JWZXJ0ZXhlcyk7XG5cbiAgICAgICAgICBwYXJ0aWFsQ3ljbGVzLnB1c2gocGFydGlhbEN5Y2xlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGN5Y2xpY0VkZ2VzTGVuZ3RoID0gY3ljbGljRWRnZXMubGVuZ3RoLFxuICAgICAgICAgICAgdGVybWluYXRlID0gKGN5Y2xpY0VkZ2VzTGVuZ3RoID09PSAwKTtcblxuICAgICAgcmV0dXJuIHRlcm1pbmF0ZTtcbiAgICB9KTtcblxuICAgIHBhcnRpYWxDeWNsZXMuc29tZSgocGFydGlhbEN5Y2xlKSA9PiB7XG4gICAgICBjb25zdCB0YXJnZXRWZXJ0ZXhOYW1lID0gcGFydGlhbEN5Y2xlLmdldFRhcmdldFZlcnRleE5hbWUoKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgICBmb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2godGFyZ2V0VmVydGV4LCAodmlzaXRlZFZlcnRleCwgcHJlZGVjZXNzb3JWZXJ0ZXhlcykgPT4ge1xuICAgICAgICBjb25zdCB2aXNpdGVkVmVydGV4TmFtZSA9IHZpc2l0ZWRWZXJ0ZXguZ2V0TmFtZSgpO1xuXG4gICAgICAgIGlmICh2aXNpdGVkVmVydGV4TmFtZSA9PT0gdmVydGV4TmFtZSkge1xuICAgICAgICAgIGNvbnN0IHN1Y2Nlc3NvclZlcnRleGVzID0gcHJlZGVjZXNzb3JWZXJ0ZXhlcywgIC8vL1xuICAgICAgICAgICAgICAgIGN5Y2xlID0gQ3ljbGUuZnJvbVZlcnRleE5hbWVQYXJ0aWFsQ3ljbGVBbmRTdWNjZXNzb3JWZXJ0ZXhlcyh2ZXJ0ZXhOYW1lLCBwYXJ0aWFsQ3ljbGUsIHN1Y2Nlc3NvclZlcnRleGVzKTtcblxuICAgICAgICAgIGN5Y2xlcy5wdXNoKGN5Y2xlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGN5Y2xlc0xlbmd0aCA9IGN5Y2xlcy5sZW5ndGgsXG4gICAgICAgICAgICAgIHRlcm1pbmF0ZSA9IChjeWNsZXNMZW5ndGggPiAwKTtcblxuICAgICAgICByZXR1cm4gdGVybWluYXRlO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjeWNsZXNMZW5ndGggPSBjeWNsZXMubGVuZ3RoO1xuXG4gICAgaWYgKGN5Y2xlc0xlbmd0aCA+IDApIHtcbiAgICAgIGZpcnN0Q3ljbGUgPSBmaXJzdChjeWNsZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBmaXJzdEN5Y2xlO1xuICB9XG5cbiAgZ2V0RWRnZXNCeVNvdXJjZVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSkge1xuICAgIGNvbnN0IGVkZ2VzID0gW10sXG4gICAgICAgICAgc291cmNlVmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSk7XG5cbiAgICBpZiAoc291cmNlVmVydGV4ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcyA9IHNvdXJjZVZlcnRleC5nZXRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcygpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZXMgPSBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lczsgIC8vL1xuXG4gICAgICB0YXJnZXRWZXJ0ZXhOYW1lcy5mb3JFYWNoKCh0YXJnZXRWZXJ0ZXhOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGVkZ2UgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgICBlZGdlcy5wdXNoKGVkZ2UpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVkZ2VzO1xuICB9XG5cbiAgZ2V0RWRnZXNCeVRhcmdldFZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSkge1xuICAgIGNvbnN0IGVkZ2VzID0gW10sXG4gICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICBpZiAodGFyZ2V0VmVydGV4ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzID0gdGFyZ2V0VmVydGV4LmdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMoKSxcbiAgICAgICAgICAgIHNvdXJjZVZlcnRleE5hbWVzID0gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lczsgIC8vL1xuXG4gICAgICBzb3VyY2VWZXJ0ZXhOYW1lcy5mb3JFYWNoKChzb3VyY2VWZXJ0ZXhOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGVkZ2UgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgICBlZGdlcy5wdXNoKGVkZ2UpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVkZ2VzO1xuICB9XG5cbiAgZ2V0Rmlyc3RDeWNsZSgpIHtcbiAgICBjb25zdCBmaXJzdEN5Y2xpY0VkZ2UgPSBmaXJzdCh0aGlzLmN5Y2xpY0VkZ2VzKSxcbiAgICAgICAgICBjeWNsaWNFZGdlID0gZmlyc3RDeWNsaWNFZGdlLCAvLy9cbiAgICAgICAgICBzb3VyY2VWZXJ0ZXhOYW1lID0gY3ljbGljRWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgdmVydGV4TmFtZSA9IHNvdXJjZVZlcnRleE5hbWUsICAvLy9cbiAgICAgICAgICBmaXJzdEN5Y2xlID0gdGhpcy5nZXRGaXJzdEN5Y2xlQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgcmV0dXJuIGZpcnN0Q3ljbGU7XG4gIH1cblxuICBpc0VkZ2VQcmVzZW50KGVkZ2UpIHtcbiAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gZWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IGVkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgIGVkZ2VQcmVzZW50ID0gdGhpcy5pc0VkZ2VQcmVzZW50QnlTb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgIHJldHVybiBlZGdlUHJlc2VudDtcbiAgfVxuXG4gIGFyZUN5Y2xlc1ByZXNlbnQoKSB7XG4gICAgY29uc3QgY3ljbGljRWRnZXNMZW5ndGggPSB0aGlzLmN5Y2xpY0VkZ2VzLmxlbmd0aCxcbiAgICAgICAgICBjeWNsZXNQcmVzZW50ID0gKGN5Y2xpY0VkZ2VzTGVuZ3RoID4gMCk7XG5cbiAgICByZXR1cm4gY3ljbGVzUHJlc2VudDtcbiAgfVxuXG4gIGlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgdmVydGV4TmFtZXMgPSB0aGlzLmdldFZlcnRleE5hbWVzKCksXG4gICAgICAgICAgdmVydGV4TmFtZXNJbmNsdWRlc1ZlcnRleE5hbWUgPSB2ZXJ0ZXhOYW1lcy5pbmNsdWRlcyh2ZXJ0ZXhOYW1lKSxcbiAgICAgICAgICB2ZXJ0ZXhQcmVzZW50ID0gdmVydGV4TmFtZXNJbmNsdWRlc1ZlcnRleE5hbWU7ICAvLy9cblxuICAgIHJldHVybiB2ZXJ0ZXhQcmVzZW50O1xuICB9XG5cbiAgYXJlQ3ljbGVzUHJlc2VudEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgbGV0IGN5Y2xlc1ByZXNlbnQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZlcnRleFByZXNlbnQgPSB0aGlzLmlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgIGlmICh2ZXJ0ZXhQcmVzZW50KSB7XG4gICAgICBjb25zdCBmaXJzdEN5Y2xlID0gdGhpcy5nZXRGaXJzdEN5Y2xlQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgICBjeWNsZXNQcmVzZW50ID0gKGZpcnN0Q3ljbGUgIT09IG51bGwpO1xuICAgIH1cblxuICAgIHJldHVybiBjeWNsZXNQcmVzZW50O1xuICB9XG5cbiAgZ2V0U3VjY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGNvbnN0IHZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpLFxuICAgICAgICAgIHN1Y2Nlc3NvclZlcnRleE5hbWVzID0gdmVydGV4LmdldFN1Y2Nlc3NvclZlcnRleE5hbWVzKCk7XG5cbiAgICByZXR1cm4gc3VjY2Vzc29yVmVydGV4TmFtZXM7XG4gIH1cblxuICBnZXRQcmVkZWNlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBjb25zdCB2ZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSxcbiAgICAgICAgICBwcmVkZWNlc3NvclZlcnRleE5hbWVzID0gdmVydGV4LmdldFByZWRlY2Vzc29yVmVydGV4TmFtZXMoKTtcblxuICAgIHJldHVybiBwcmVkZWNlc3NvclZlcnRleE5hbWVzO1xuICB9XG5cbiAgZ2V0SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGNvbnN0IHZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpLFxuICAgICAgICAgIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzID0gdmVydGV4LmdldEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzKCk7XG5cbiAgICByZXR1cm4gaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXM7XG4gIH1cblxuICBnZXRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBjb25zdCB2ZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSxcbiAgICAgICAgICBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzID0gdmVydGV4LmdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMoKTtcblxuICAgIHJldHVybiBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzO1xuICB9XG5cbiAgYWRkRWRnZShlZGdlKSB7XG4gICAgY29uc3Qgc291cmNlVmVydGV4TmFtZSA9IGVkZ2UuZ2V0U291cmNlVmVydGV4TmFtZSgpLFxuICAgICAgICAgIHRhcmdldFZlcnRleE5hbWUgPSBlZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKSxcbiAgICAgICAgICBzdWNjZXNzID0gdGhpcy5hZGRFZGdlQnlTb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgY29uc3QgY3ljbGljRWRnZXNJbmNsdWRlc0VkZ2UgPSBjaGVja0VkZ2VzSW5jbHVkZXNFZGdlKGVkZ2UsIHRoaXMuY3ljbGljRWRnZXMpO1xuXG4gICAgICBpZiAoIWN5Y2xpY0VkZ2VzSW5jbHVkZXNFZGdlKSB7XG4gICAgICAgIGNvbnN0IGN5Y2xpY0VkZ2UgPSBlZGdlOyAgLy8vXG5cbiAgICAgICAgdGhpcy5jeWNsaWNFZGdlcy5wdXNoKGN5Y2xpY0VkZ2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdWNjZXNzO1xuICB9XG5cbiAgYWRkRWRnZXMoZWRnZXMpIHtcbiAgICBlZGdlcy5mb3JFYWNoKChlZGdlKSA9PiB7XG4gICAgICB0aGlzLmFkZEVkZ2UoZWRnZSk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGNvbnN0IHZlcnRleFByZXNlbnQgPSB0aGlzLmlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgIGlmICghdmVydGV4UHJlc2VudCkge1xuICAgICAgY29uc3QgdmVydGV4TmFtZXMgPSB0aGlzLmdldFZlcnRleE5hbWVzKCksXG4gICAgICAgICAgICB2ZXJ0ZXhOYW1lc0xlbmd0aCA9IHZlcnRleE5hbWVzLmxlbmd0aCxcbiAgICAgICAgICAgIG5hbWUgPSB2ZXJ0ZXhOYW1lLCAgLy8vXG4gICAgICAgICAgICBpbmRleCA9IHZlcnRleE5hbWVzTGVuZ3RoLCAvLy9cbiAgICAgICAgICAgIHZlcnRleCA9IFZlcnRleC5mcm9tTmFtZUFuZEluZGV4KG5hbWUsIGluZGV4KTtcblxuICAgICAgdGhpcy5zZXRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSwgdmVydGV4KTtcbiAgICB9XG5cbiAgICBjb25zdCB2ZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgIHJldHVybiB2ZXJ0ZXg7XG4gIH1cblxuICByZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGxldCByZW1vdmVkRWRnZXMgPSBudWxsO1xuXG4gICAgY29uc3QgdmVydGV4UHJlc2VudCA9IHRoaXMuaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgaWYgKHZlcnRleFByZXNlbnQpIHtcbiAgICAgIHJlbW92ZWRFZGdlcyA9IFtdO1xuXG4gICAgICBjb25zdCB2ZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgICAgdmVydGV4LmZvckVhY2hJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoKGltbWVkaWF0ZVN1Y2Nlc3NWZXJ0ZXgpID0+IHtcbiAgICAgICAgY29uc3QgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXggPSB2ZXJ0ZXgsICAvLy9cbiAgICAgICAgICAgICAgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lID0gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXguZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICBpbW1lZGlhdGVTdWNjZXNzVmVydGV4TmFtZSA9IGltbWVkaWF0ZVN1Y2Nlc3NWZXJ0ZXguZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICByZW1vdmVkRWRnZVNvdXJjZVZlcnRleE5hbWUgPSBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWUsIC8vL1xuICAgICAgICAgICAgICByZW1vdmVkRWRnZVRhcmdldFZlcnRleE5hbWUgPSBpbW1lZGlhdGVTdWNjZXNzVmVydGV4TmFtZSwgLy8vXG4gICAgICAgICAgICAgIHJlbW92ZWRFZGdlID0gbmV3IEVkZ2UocmVtb3ZlZEVkZ2VTb3VyY2VWZXJ0ZXhOYW1lLCByZW1vdmVkRWRnZVRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgICAgIHJlbW92ZWRFZGdlcy5wdXNoKHJlbW92ZWRFZGdlKTtcblxuICAgICAgICBpbW1lZGlhdGVTdWNjZXNzVmVydGV4LnJlbW92ZUltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KTtcbiAgICAgIH0pO1xuXG4gICAgICB2ZXJ0ZXguZm9yRWFjaEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCkgPT4ge1xuICAgICAgICBjb25zdCBpbW1lZGlhdGVTdWNjZXNzVmVydGV4ID0gdmVydGV4LCAgLy8vXG4gICAgICAgICAgICAgIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZSA9IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4LmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgaW1tZWRpYXRlU3VjY2Vzc1ZlcnRleE5hbWUgPSBpbW1lZGlhdGVTdWNjZXNzVmVydGV4LmdldE5hbWUoKSwgIC8vL1xuICAgICAgICAgICAgICByZW1vdmVkRWRnZVNvdXJjZVZlcnRleE5hbWUgPSBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWUsIC8vL1xuICAgICAgICAgICAgICByZW1vdmVkRWRnZVRhcmdldFZlcnRleE5hbWUgPSBpbW1lZGlhdGVTdWNjZXNzVmVydGV4TmFtZSwgLy8vXG4gICAgICAgICAgICAgIHJlbW92ZWRFZGdlID0gbmV3IEVkZ2UocmVtb3ZlZEVkZ2VTb3VyY2VWZXJ0ZXhOYW1lLCByZW1vdmVkRWRnZVRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgICAgIHJlbW92ZWRFZGdlcy5wdXNoKHJlbW92ZWRFZGdlKTtcblxuICAgICAgICBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleC5yZW1vdmVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoaW1tZWRpYXRlU3VjY2Vzc1ZlcnRleCk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5kZWxldGVWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICAgIGNvbnN0IGRlbGV0ZWRWZXJ0ZXggPSB2ZXJ0ZXgsIC8vL1xuICAgICAgICAgICAgZGVsZXRlZFZlcnRleEluZGV4ID0gZGVsZXRlZFZlcnRleC5nZXRJbmRleCgpLFxuICAgICAgICAgICAgdmVydGV4ZXMgPSB0aGlzLmdldFZlcnRleGVzKCksXG4gICAgICAgICAgICBhZmZlY3RlZFZlcnRleGVzID0gdmVydGV4ZXMucmVkdWNlKChhZmZlY3RlZFZlcnRleGVzLCB2ZXJ0ZXgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgdmVydGV4SW5kZXggPSB2ZXJ0ZXguZ2V0SW5kZXgoKSxcbiAgICAgICAgICAgICAgICAgICAgdmVydGV4QWZmZWN0ZWQgPSAodmVydGV4SW5kZXggPiBkZWxldGVkVmVydGV4SW5kZXgpO1xuXG4gICAgICAgICAgICAgIGlmICh2ZXJ0ZXhBZmZlY3RlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFmZmVjdGVkVmVydGV4ID0gdmVydGV4OyAgLy8vXG5cbiAgICAgICAgICAgICAgICBhZmZlY3RlZFZlcnRleGVzLnB1c2goYWZmZWN0ZWRWZXJ0ZXgpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIGFmZmVjdGVkVmVydGV4ZXM7XG4gICAgICAgICAgICB9LCBbXSk7XG5cbiAgICAgIGFmZmVjdGVkVmVydGV4ZXMuZm9yRWFjaCgoYWZmZWN0ZWRWZXJ0ZXgpID0+IHtcbiAgICAgICAgYWZmZWN0ZWRWZXJ0ZXguZGVjcmVtZW50SW5kZXgoKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuZmlsdGVyQ3ljbGljRWRnZXMoKTtcblxuICAgIHJldHVybiByZW1vdmVkRWRnZXM7XG4gIH1cblxuICByZW1vdmVFZGdlKGVkZ2UsIHJlbW92ZVN0cmFuZGVkVmVydGV4ZXMgPSBmYWxzZSkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VzSW5jbHVkZXNFZGdlID0gY2hlY2tFZGdlc0luY2x1ZGVzRWRnZShlZGdlLCB0aGlzLmN5Y2xpY0VkZ2VzKTtcblxuICAgIGlmIChjeWNsaWNFZGdlc0luY2x1ZGVzRWRnZSkge1xuICAgICAgY29uc3QgY3ljbGljRWRnZSA9IGVkZ2U7ICAvLy9cblxuICAgICAgcmVtb3ZlRWRnZUZyb21FZGdlcyhjeWNsaWNFZGdlLCB0aGlzLmN5Y2xpY0VkZ2VzKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGVkZ2VQcmVzZW50ID0gdGhpcy5pc0VkZ2VQcmVzZW50KGVkZ2UpO1xuXG4gICAgaWYgKGVkZ2VQcmVzZW50KSB7XG4gICAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gZWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gZWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCk7XG5cbiAgICAgIHRoaXMucmVtb3ZlRWRnZUJ5U291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICAgIGlmIChyZW1vdmVTdHJhbmRlZFZlcnRleGVzKSB7XG4gICAgICAgIGNvbnN0IHNvdXJjZVZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpLFxuICAgICAgICAgICAgICB0YXJnZXRWZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICAgICAgc291cmNlVmVydGV4U3RyYW5kZWQgPSBzb3VyY2VWZXJ0ZXguaXNTdHJhbmRlZCgpLFxuICAgICAgICAgICAgICB0YXJnZXRWZXJ0ZXhTdHJhbmRlZCA9IHRhcmdldFZlcnRleC5pc1N0cmFuZGVkKCk7XG5cbiAgICAgICAgaWYgKHNvdXJjZVZlcnRleFN0cmFuZGVkKSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGFyZ2V0VmVydGV4U3RyYW5kZWQpIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmZpbHRlckN5Y2xpY0VkZ2VzKCk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlRWRnZXMoZWRnZXMsIHJlbW92ZVN0cmFuZGVkVmVydGV4ZXMgPSBmYWxzZSkge1xuICAgIGVkZ2VzLmZvckVhY2goKGVkZ2UpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlRWRnZShlZGdlLCByZW1vdmVTdHJhbmRlZFZlcnRleGVzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZUFsbEVkZ2VzQW5kVmVydGV4ZXMoKSB7XG4gICAgdGhpcy52ZXJ0ZXhNYXAgPSB7fTtcbiAgICB0aGlzLmN5Y2xpY0VkZ2VzID0gW107XG4gIH1cblxuICByZW1vdmVFZGdlc0J5U291cmNlVmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCByZW1vdmVTdHJhbmRlZFZlcnRleGVzID0gZmFsc2UpIHtcbiAgICBjb25zdCBjeWNsaWNFZGdlcyA9IGVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUsIHRoaXMuY3ljbGljRWRnZXMpLFxuICAgICAgICAgIGVkZ2VzID0gdGhpcy5nZXRFZGdlc0J5U291cmNlVmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKTtcblxuICAgIHRoaXMucmVtb3ZlRWRnZXMoY3ljbGljRWRnZXMsIHJlbW92ZVN0cmFuZGVkVmVydGV4ZXMpO1xuXG4gICAgdGhpcy5yZW1vdmVFZGdlcyhlZGdlcywgcmVtb3ZlU3RyYW5kZWRWZXJ0ZXhlcyk7XG4gIH1cblxuICByZW1vdmVFZGdlc0J5VGFyZ2V0VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lLCByZW1vdmVTdHJhbmRlZFZlcnRleGVzID0gZmFsc2UpIHtcbiAgICBjb25zdCBjeWNsaWNFZGdlcyA9IGVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUsIHRoaXMuY3ljbGljRWRnZXMpLFxuICAgICAgICAgIGVkZ2VzID0gdGhpcy5nZXRFZGdlc0J5VGFyZ2V0VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgIHRoaXMucmVtb3ZlRWRnZXMoY3ljbGljRWRnZXMsIHJlbW92ZVN0cmFuZGVkVmVydGV4ZXMpO1xuXG4gICAgdGhpcy5yZW1vdmVFZGdlcyhlZGdlcywgcmVtb3ZlU3RyYW5kZWRWZXJ0ZXhlcyk7XG4gIH1cblxuICBhZGRFZGdlQnlTb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKSB7XG4gICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgIGlmIChzb3VyY2VWZXJ0ZXhOYW1lICE9PSB0YXJnZXRWZXJ0ZXhOYW1lKSB7XG4gICAgICBjb25zdCBzb3VyY2VWZXJ0ZXggPSB0aGlzLmFkZFZlcnRleEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuYWRkVmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpLFxuICAgICAgICAgICAgZWRnZVByZXNlbnQgPSBzb3VyY2VWZXJ0ZXguaXNFZGdlUHJlc2VudEJ5VGFyZ2V0VmVydGV4KHRhcmdldFZlcnRleCk7XG5cbiAgICAgIGlmIChlZGdlUHJlc2VudCkge1xuICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHNvdXJjZVZlcnRleEluZGV4ID0gc291cmNlVmVydGV4LmdldEluZGV4KCksXG4gICAgICAgICAgICAgIHRhcmdldFZlcnRleEluZGV4ID0gdGFyZ2V0VmVydGV4LmdldEluZGV4KCksXG4gICAgICAgICAgICAgIGludmFsaWRhdGluZ0VkZ2UgPSAoc291cmNlVmVydGV4SW5kZXggPiB0YXJnZXRWZXJ0ZXhJbmRleCk7XG5cbiAgICAgICAgc3VjY2VzcyA9IGludmFsaWRhdGluZ0VkZ2UgP1xuICAgICAgICAgICAgICAgICAgICBhZGRJbnZhbGlkYXRpbmdFZGdlQnlWZXJ0ZXhlcyhzb3VyY2VWZXJ0ZXgsIHRhcmdldFZlcnRleCkgOlxuICAgICAgICAgICAgICAgICAgICAgIHRydWU7XG5cbiAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICBjb25zdCBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCA9IHNvdXJjZVZlcnRleCwgLy8vXG4gICAgICAgICAgICAgICAgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ID0gdGFyZ2V0VmVydGV4OyAvLy9cblxuICAgICAgICAgIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4LmFkZEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgpO1xuXG4gICAgICAgICAgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4LmFkZEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdWNjZXNzO1xuICB9XG5cbiAgcmVtb3ZlRWRnZUJ5U291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSkge1xuICAgIGNvbnN0IHNvdXJjZVZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpLFxuICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgc291cmNlVmVydGV4LnJlbW92ZUltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCh0YXJnZXRWZXJ0ZXgpO1xuXG4gICAgdGFyZ2V0VmVydGV4LnJlbW92ZUltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KHNvdXJjZVZlcnRleCk7XG4gIH1cblxuICBpc0VkZ2VQcmVzZW50QnlTb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKSB7XG4gICAgbGV0IGVkZ2VQcmVzZW50ID0gZmFsc2U7XG5cbiAgICBjb25zdCBzb3VyY2VWZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICB0YXJnZXRWZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICBzb3VyY2VWZXJ0ZXhBbmRUYXJnZXRWZXJ0ZXhQcmVzZW50ID0gKHNvdXJjZVZlcnRleCAhPT0gbnVsbCkgJiYgKHRhcmdldFZlcnRleCAhPT0gbnVsbCk7XG5cbiAgICBpZiAoc291cmNlVmVydGV4QW5kVGFyZ2V0VmVydGV4UHJlc2VudCkge1xuICAgICAgZWRnZVByZXNlbnQgPSBzb3VyY2VWZXJ0ZXguaXNFZGdlUHJlc2VudEJ5VGFyZ2V0VmVydGV4KHRhcmdldFZlcnRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVkZ2VQcmVzZW50O1xuICB9XG5cbiAgZmlsdGVyQ3ljbGljRWRnZXMoKSB7XG4gICAgZmlsdGVyKHRoaXMuY3ljbGljRWRnZXMsIChjeWNsaWNFZGdlKSA9PiB7XG4gICAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gY3ljbGljRWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gY3ljbGljRWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICBzb3VyY2VWZXJ0ZXhQcmVzZW50ID0gdGhpcy5pc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSksXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXhQcmVzZW50ID0gdGhpcy5pc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICAgIGlmIChzb3VyY2VWZXJ0ZXhQcmVzZW50ICYmIHRhcmdldFZlcnRleFByZXNlbnQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBmaWx0ZXIodGhpcy5jeWNsaWNFZGdlcywgKGN5Y2xpY0VkZ2UpID0+IHtcbiAgICAgIGNvbnN0IGVkZ2UgPSBjeWNsaWNFZGdlLCAgLy8vXG4gICAgICAgICAgICBzdWNjZXNzID0gdGhpcy5hZGRFZGdlKGVkZ2UpO1xuXG4gICAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZXRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSwgdmVydGV4KSB7XG4gICAgdGhpcy52ZXJ0ZXhNYXBbdmVydGV4TmFtZV0gPSB2ZXJ0ZXg7XG4gIH1cblxuICBkZWxldGVWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGRlbGV0ZSB0aGlzLnZlcnRleE1hcFt2ZXJ0ZXhOYW1lXTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCB2ZXJ0ZXhNYXAgPSB7fSxcbiAgICAgICAgICBjeWNsaWNFZGdlcyA9IFtdLFxuICAgICAgICAgIGRpcmVjdGVkR3JhcGggPSBuZXcgRGlyZWN0ZWRHcmFwaCh2ZXJ0ZXhNYXAsIGN5Y2xpY0VkZ2VzKTtcbiAgICBcbiAgICByZXR1cm4gZGlyZWN0ZWRHcmFwaDsgICAgXG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkSW52YWxpZGF0aW5nRWRnZUJ5VmVydGV4ZXMoc291cmNlVmVydGV4LCB0YXJnZXRWZXJ0ZXgpIHtcbiAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICBjb25zdCBmb3J3YXJkc0FmZmVjdGVkVmVydGV4ZXMgPSB0YXJnZXRWZXJ0ZXgucmV0cmlldmVGb3J3YXJkc0FmZmVjdGVkVmVydGV4ZXMoc291cmNlVmVydGV4KSxcbiAgICAgICAgbGFzdEZvcndhcmRzQWZmZWN0ZWRWZXJ0ZXggPSBsYXN0KGZvcndhcmRzQWZmZWN0ZWRWZXJ0ZXhlcyksXG4gICAgICAgIHJlc3VsdHNJbkN5Y2xlID0gKGxhc3RGb3J3YXJkc0FmZmVjdGVkVmVydGV4ID09PSBzb3VyY2VWZXJ0ZXgpO1xuXG4gIGlmICghcmVzdWx0c0luQ3ljbGUpIHtcbiAgICBjb25zdCBiYWNrd2FyZHNBZmZlY3RlZFZlcnRleGVzID0gc291cmNlVmVydGV4LnJldHJpZXZlQmFja3dhcmRzQWZmZWN0ZWRWZXJ0ZXhlcygpO1xuXG4gICAgb3JkZXJWZXJ0ZXhlcyhiYWNrd2FyZHNBZmZlY3RlZFZlcnRleGVzKTtcblxuICAgIG9yZGVyVmVydGV4ZXMoZm9yd2FyZHNBZmZlY3RlZFZlcnRleGVzKTtcblxuICAgIGNvbnN0IGFmZmVjdGVkVmVydGV4ZXMgPSBbXS5jb25jYXQoYmFja3dhcmRzQWZmZWN0ZWRWZXJ0ZXhlcykuY29uY2F0KGZvcndhcmRzQWZmZWN0ZWRWZXJ0ZXhlcyksXG4gICAgICAgICAgYWZmZWN0ZWRWZXJ0ZXhJbmRpY2VzID0gYWZmZWN0ZWRWZXJ0ZXhlcy5tYXAoKGFmZmVjdGVkVmVydGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhZmZlY3RlZFZlcnRleEluZGV4ID0gYWZmZWN0ZWRWZXJ0ZXguZ2V0SW5kZXgoKTtcblxuICAgICAgICAgICAgcmV0dXJuIGFmZmVjdGVkVmVydGV4SW5kZXg7XG4gICAgICAgICAgfSk7XG5cbiAgICBhZmZlY3RlZFZlcnRleEluZGljZXMuc29ydCgoaW5kZXhBLCBpbmRleEIpID0+IHtcbiAgICAgIGlmIChmYWxzZSkge1xuICAgICAgICAvLy9cbiAgICAgIH0gZWxzZSBpZiAoaW5kZXhBIDwgaW5kZXhCKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH0gZWxzZSBpZiAoaW5kZXhBID4gaW5kZXhCKSB7XG4gICAgICAgIHJldHVybiArMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgYWZmZWN0ZWRWZXJ0ZXhlcy5mb3JFYWNoKChhZmZlY3RlZFZlcnRleCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGFmZmVjdGVkVmVydGV4SW5kZXggPSBhZmZlY3RlZFZlcnRleEluZGljZXNbaW5kZXhdO1xuXG4gICAgICBhZmZlY3RlZFZlcnRleC5zZXRJbmRleChhZmZlY3RlZFZlcnRleEluZGV4KTtcbiAgICB9KTtcblxuICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHN1Y2Nlc3M7XG59XG4iXSwibmFtZXMiOlsiRGlyZWN0ZWRHcmFwaCIsImxhc3QiLCJhcnJheVV0aWxpdGllcyIsImZpcnN0IiwiZmlsdGVyIiwidmVydGV4TWFwIiwiY3ljbGljRWRnZXMiLCJnZXRWZXJ0ZXhOYXAiLCJnZXRDeWNsaWNFZGdlcyIsImdldFZlcnRleGVzIiwidmVydGV4TWFwVmFsdWVzIiwiT2JqZWN0IiwidmFsdWVzIiwidmVydGV4ZXMiLCJnZXRWZXJ0ZXhOYW1lcyIsInZlcnRleE1hcEtleXMiLCJrZXlzIiwidmVydGV4TmFtZXMiLCJnZXRPcmRlcmVkVmVydGV4TmFtZXMiLCJvcmRlclZlcnRleGVzIiwib3JkZXJlZFZlcnRleGVzIiwib3JkZXJlZFZlcnRleE5hbWVzIiwidmVydGV4TmFtZXNGcm9tVmVydGV4ZXMiLCJnZXRWZXJ0ZXhCeVZlcnRleE5hbWUiLCJ2ZXJ0ZXhOYW1lIiwidmVydGV4UHJlc2VudCIsImlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZSIsInZlcnRleCIsImdldEZpcnN0Q3ljbGVCeVZlcnRleE5hbWUiLCJmaXJzdEN5Y2xlIiwic2xpY2UiLCJwYXJ0aWFsQ3ljbGVzIiwiY3ljbGVzIiwiZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoIiwidmlzaXRlZFZlcnRleCIsInByZWRlY2Vzc29yVmVydGV4ZXMiLCJ2aXNpdGVkVmVydGV4TmFtZSIsImdldE5hbWUiLCJzb3VyY2VWZXJ0ZXhOYW1lIiwiY3ljbGljRWRnZSIsIm1hdGNoZXMiLCJtYXRjaFNvdXJjZVZlcnRleE5hbWUiLCJwYXJ0aWFsQ3ljbGUiLCJQYXJ0aWFsQ3ljbGUiLCJmcm9tQ3ljbGljRWRnZUFuZFByZWRlY2Vzc29yVmVydGV4ZXMiLCJwdXNoIiwiY3ljbGljRWRnZXNMZW5ndGgiLCJsZW5ndGgiLCJ0ZXJtaW5hdGUiLCJzb21lIiwidGFyZ2V0VmVydGV4TmFtZSIsImdldFRhcmdldFZlcnRleE5hbWUiLCJ0YXJnZXRWZXJ0ZXgiLCJzdWNjZXNzb3JWZXJ0ZXhlcyIsImN5Y2xlIiwiQ3ljbGUiLCJmcm9tVmVydGV4TmFtZVBhcnRpYWxDeWNsZUFuZFN1Y2Nlc3NvclZlcnRleGVzIiwiY3ljbGVzTGVuZ3RoIiwiZ2V0RWRnZXNCeVNvdXJjZVZlcnRleE5hbWUiLCJlZGdlcyIsInNvdXJjZVZlcnRleCIsImltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzIiwiZ2V0SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXMiLCJ0YXJnZXRWZXJ0ZXhOYW1lcyIsImZvckVhY2giLCJlZGdlIiwiRWRnZSIsImZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZSIsImdldEVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lIiwiaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcyIsImdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMiLCJzb3VyY2VWZXJ0ZXhOYW1lcyIsImdldEZpcnN0Q3ljbGUiLCJmaXJzdEN5Y2xpY0VkZ2UiLCJnZXRTb3VyY2VWZXJ0ZXhOYW1lIiwiaXNFZGdlUHJlc2VudCIsImVkZ2VQcmVzZW50IiwiaXNFZGdlUHJlc2VudEJ5U291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUiLCJhcmVDeWNsZXNQcmVzZW50IiwiY3ljbGVzUHJlc2VudCIsInZlcnRleE5hbWVzSW5jbHVkZXNWZXJ0ZXhOYW1lIiwiaW5jbHVkZXMiLCJhcmVDeWNsZXNQcmVzZW50QnlWZXJ0ZXhOYW1lIiwiZ2V0U3VjY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUiLCJzdWNjZXNzb3JWZXJ0ZXhOYW1lcyIsImdldFN1Y2Nlc3NvclZlcnRleE5hbWVzIiwiZ2V0UHJlZGVjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSIsInByZWRlY2Vzc29yVmVydGV4TmFtZXMiLCJnZXRQcmVkZWNlc3NvclZlcnRleE5hbWVzIiwiZ2V0SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUiLCJnZXRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lIiwiYWRkRWRnZSIsInN1Y2Nlc3MiLCJhZGRFZGdlQnlTb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZSIsImN5Y2xpY0VkZ2VzSW5jbHVkZXNFZGdlIiwiY2hlY2tFZGdlc0luY2x1ZGVzRWRnZSIsImFkZEVkZ2VzIiwiYWRkVmVydGV4QnlWZXJ0ZXhOYW1lIiwidmVydGV4TmFtZXNMZW5ndGgiLCJuYW1lIiwiaW5kZXgiLCJWZXJ0ZXgiLCJmcm9tTmFtZUFuZEluZGV4Iiwic2V0VmVydGV4QnlWZXJ0ZXhOYW1lIiwicmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lIiwicmVtb3ZlZEVkZ2VzIiwiZm9yRWFjaEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCIsImltbWVkaWF0ZVN1Y2Nlc3NWZXJ0ZXgiLCJpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCIsImltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZSIsImltbWVkaWF0ZVN1Y2Nlc3NWZXJ0ZXhOYW1lIiwicmVtb3ZlZEVkZ2VTb3VyY2VWZXJ0ZXhOYW1lIiwicmVtb3ZlZEVkZ2VUYXJnZXRWZXJ0ZXhOYW1lIiwicmVtb3ZlZEVkZ2UiLCJyZW1vdmVJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCIsImZvckVhY2hJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCIsInJlbW92ZUltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCIsImRlbGV0ZVZlcnRleEJ5VmVydGV4TmFtZSIsImRlbGV0ZWRWZXJ0ZXgiLCJkZWxldGVkVmVydGV4SW5kZXgiLCJnZXRJbmRleCIsImFmZmVjdGVkVmVydGV4ZXMiLCJyZWR1Y2UiLCJ2ZXJ0ZXhJbmRleCIsInZlcnRleEFmZmVjdGVkIiwiYWZmZWN0ZWRWZXJ0ZXgiLCJkZWNyZW1lbnRJbmRleCIsImZpbHRlckN5Y2xpY0VkZ2VzIiwicmVtb3ZlRWRnZSIsInJlbW92ZVN0cmFuZGVkVmVydGV4ZXMiLCJyZW1vdmVFZGdlRnJvbUVkZ2VzIiwicmVtb3ZlRWRnZUJ5U291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUiLCJzb3VyY2VWZXJ0ZXhTdHJhbmRlZCIsImlzU3RyYW5kZWQiLCJ0YXJnZXRWZXJ0ZXhTdHJhbmRlZCIsInJlbW92ZUVkZ2VzIiwicmVtb3ZlQWxsRWRnZXNBbmRWZXJ0ZXhlcyIsInJlbW92ZUVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lIiwiZWRnZXNCeVNvdXJjZVZlcnRleE5hbWUiLCJyZW1vdmVFZGdlc0J5VGFyZ2V0VmVydGV4TmFtZSIsImVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lIiwiaXNFZGdlUHJlc2VudEJ5VGFyZ2V0VmVydGV4Iiwic291cmNlVmVydGV4SW5kZXgiLCJ0YXJnZXRWZXJ0ZXhJbmRleCIsImludmFsaWRhdGluZ0VkZ2UiLCJhZGRJbnZhbGlkYXRpbmdFZGdlQnlWZXJ0ZXhlcyIsImltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCIsImFkZEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCIsImFkZEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4Iiwic291cmNlVmVydGV4QW5kVGFyZ2V0VmVydGV4UHJlc2VudCIsInNvdXJjZVZlcnRleFByZXNlbnQiLCJ0YXJnZXRWZXJ0ZXhQcmVzZW50IiwiZnJvbU5vdGhpbmciLCJkaXJlY3RlZEdyYXBoIiwiZm9yd2FyZHNBZmZlY3RlZFZlcnRleGVzIiwicmV0cmlldmVGb3J3YXJkc0FmZmVjdGVkVmVydGV4ZXMiLCJsYXN0Rm9yd2FyZHNBZmZlY3RlZFZlcnRleCIsInJlc3VsdHNJbkN5Y2xlIiwiYmFja3dhcmRzQWZmZWN0ZWRWZXJ0ZXhlcyIsInJldHJpZXZlQmFja3dhcmRzQWZmZWN0ZWRWZXJ0ZXhlcyIsImNvbmNhdCIsImFmZmVjdGVkVmVydGV4SW5kaWNlcyIsIm1hcCIsImFmZmVjdGVkVmVydGV4SW5kZXgiLCJzb3J0IiwiaW5kZXhBIiwiaW5kZXhCIiwic2V0SW5kZXgiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBZXFCQTs7O3lCQWJVOzJEQUVkOzREQUNDOzZEQUNDO21FQUNNO3NCQUVnQjt1QkFDYztxQkFDdUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUcsSUFBUUMsT0FBd0JDLDBCQUF4QkQsTUFBTUUsUUFBa0JELDBCQUFsQkMsT0FBT0MsU0FBV0YsMEJBQVhFO0FBRU4sSUFBQSxBQUFNSiw4QkF1ZWxCLEFBdmVZO2FBQU1BLGNBQ1BLLFNBQVMsRUFBRUMsV0FBVztnQ0FEZk47UUFFakIsSUFBSSxDQUFDSyxZQUFZQTtRQUNqQixJQUFJLENBQUNDLGNBQWNBOztrQkFIRk47O1lBTW5CTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGO1lBQ2Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGO1lBQ2Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsa0JBQWtCQyxPQUFPQyxPQUFPLElBQUksQ0FBQ1AsWUFDckNRLFdBQVdILGlCQUFpQixHQUFHO2dCQUVyQyxPQUFPRztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGdCQUFnQkosT0FB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