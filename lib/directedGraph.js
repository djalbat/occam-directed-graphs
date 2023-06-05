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
            key: "isCyclicEdgePresent",
            value: function isCyclicEdgePresent(edge) {
                var cyclicEdgesIncludesEdge = (0, _edge1.checkEdgesIncludesEdge)(this.cyclicEdges, edge), cyclicEdgePresent = cyclicEdgesIncludesEdge; ///
                return cyclicEdgePresent;
            }
        },
        {
            key: "isNonCyclicEdgePresent",
            value: function isNonCyclicEdgePresent(edge) {
                var sourceVertexName = edge.getSourceVertexName(), targetVertexName = edge.getTargetVertexName(), nonCyclicEdgePresent = this.isEdgePresentBySourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);
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
            key: "addEdge",
            value: function addEdge(edge) {
                var sourceVertexName = edge.getSourceVertexName(), targetVertexName = edge.getTargetVertexName(), success = this.addEdgeBySourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);
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
                var cyclicEdgePresent = this.isCyclicEdgePresent(edge);
                if (cyclicEdgePresent) {
                    var cyclicEdge = edge; ///
                    this.removeCyclicEdge(cyclicEdge);
                    return;
                }
                var nonCyclicEdgePresent = this.isNonCyclicEdgePresent(edge);
                if (nonCyclicEdgePresent) {
                    var nonCyclicEdge = edge; ///
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
                var sourceVertexName = nonCyclicEdge.getSourceVertexName(), targetVertexName = nonCyclicEdge.getTargetVertexName();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kaXJlY3RlZEdyYXBoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEVkZ2UgZnJvbSBcIi4vZWRnZVwiO1xuaW1wb3J0IEN5Y2xlIGZyb20gXCIuL2N5Y2xlXCI7XG5pbXBvcnQgVmVydGV4IGZyb20gXCIuL3ZlcnRleFwiO1xuXG5pbXBvcnQgeyBvcmRlclZlcnRleGVzLCB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhlcyB9IGZyb20gXCIuL3V0aWxpdGllcy92ZXJ0ZXhcIjtcbmltcG9ydCB7IHJlbW92ZUVkZ2VGcm9tRWRnZXMsIGNoZWNrRWRnZXNJbmNsdWRlc0VkZ2UsIGVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lLCBlZGdlc0J5VGFyZ2V0VmVydGV4TmFtZSB9IGZyb20gXCIuL3V0aWxpdGllcy9lZGdlXCI7XG5cbmNvbnN0IHsgbGFzdCwgZmlyc3QsIGZpbHRlciB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdGVkR3JhcGgge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhNYXAsIGN5Y2xpY0VkZ2VzKSB7XG4gICAgdGhpcy52ZXJ0ZXhNYXAgPSB2ZXJ0ZXhNYXA7XG4gICAgdGhpcy5jeWNsaWNFZGdlcyA9IGN5Y2xpY0VkZ2VzO1xuICB9XG5cbiAgZ2V0VmVydGV4TmFwKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleE1hcDtcbiAgfVxuXG4gIGdldEN5Y2xpY0VkZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLmN5Y2xpY0VkZ2VzO1xuICB9XG5cbiAgZ2V0VmVydGV4ZXMoKSB7XG4gICAgY29uc3QgdmVydGV4TWFwVmFsdWVzID0gT2JqZWN0LnZhbHVlcyh0aGlzLnZlcnRleE1hcCksXG4gICAgICAgICAgdmVydGV4ZXMgPSB2ZXJ0ZXhNYXBWYWx1ZXM7IC8vL1xuXG4gICAgcmV0dXJuIHZlcnRleGVzO1xuICB9XG5cbiAgZ2V0VmVydGV4TmFtZXMoKSB7XG4gICAgY29uc3QgdmVydGV4TWFwS2V5cyA9IE9iamVjdC5rZXlzKHRoaXMudmVydGV4TWFwKSxcbiAgICAgICAgICB2ZXJ0ZXhOYW1lcyA9IHZlcnRleE1hcEtleXM7ICAvLy9cblxuICAgIHJldHVybiB2ZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGdldE9yZGVyZWRWZXJ0ZXhOYW1lcygpIHtcbiAgICBjb25zdCB2ZXJ0ZXhlcyA9IHRoaXMuZ2V0VmVydGV4ZXMoKTtcblxuICAgIG9yZGVyVmVydGV4ZXModmVydGV4ZXMpO1xuXG4gICAgY29uc3Qgb3JkZXJlZFZlcnRleGVzID0gdmVydGV4ZXMsIC8vL1xuICAgICAgICAgIG9yZGVyZWRWZXJ0ZXhOYW1lcyA9IHZlcnRleE5hbWVzRnJvbVZlcnRleGVzKG9yZGVyZWRWZXJ0ZXhlcyk7XG5cbiAgICByZXR1cm4gb3JkZXJlZFZlcnRleE5hbWVzO1xuICB9XG5cbiAgZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQcmVzZW50ID0gdGhpcy5pc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUodmVydGV4TmFtZSksXG4gICAgICAgICAgdmVydGV4ID0gdmVydGV4UHJlc2VudCA/XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLnZlcnRleE1hcFt2ZXJ0ZXhOYW1lXSA6XG4gICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgICByZXR1cm4gdmVydGV4O1xuICB9XG5cbiAgZ2V0RWRnZXNCeVNvdXJjZVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSkge1xuICAgIGNvbnN0IGVkZ2VzID0gW10sXG4gICAgICAgICAgc291cmNlVmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSk7XG5cbiAgICBpZiAoc291cmNlVmVydGV4ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcyA9IHNvdXJjZVZlcnRleC5nZXRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcygpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZXMgPSBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lczsgIC8vL1xuXG4gICAgICB0YXJnZXRWZXJ0ZXhOYW1lcy5mb3JFYWNoKCh0YXJnZXRWZXJ0ZXhOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGVkZ2UgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgICBlZGdlcy5wdXNoKGVkZ2UpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVkZ2VzO1xuICB9XG5cbiAgZ2V0RWRnZXNCeVRhcmdldFZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSkge1xuICAgIGNvbnN0IGVkZ2VzID0gW10sXG4gICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICBpZiAodGFyZ2V0VmVydGV4ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzID0gdGFyZ2V0VmVydGV4LmdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMoKSxcbiAgICAgICAgICAgIHNvdXJjZVZlcnRleE5hbWVzID0gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lczsgIC8vL1xuXG4gICAgICBzb3VyY2VWZXJ0ZXhOYW1lcy5mb3JFYWNoKChzb3VyY2VWZXJ0ZXhOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGVkZ2UgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgICBlZGdlcy5wdXNoKGVkZ2UpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVkZ2VzO1xuICB9XG5cbiAgZ2V0Rmlyc3RDeWNsZSgpIHtcbiAgICBsZXQgZmlyc3RDeWNsZSA9IG51bGw7XG5cbiAgICBjb25zdCBjeWNsZXNQcmVzZW50ID0gdGhpcy5hcmVDeWNsZXNQcmVzZW50KCk7XG5cbiAgICBpZiAoY3ljbGVzUHJlc2VudCkge1xuICAgICAgY29uc3QgZmlyc3RDeWNsaWNFZGdlID0gZmlyc3QodGhpcy5jeWNsaWNFZGdlcyksXG4gICAgICAgICAgICBzb3VyY2VWZXJ0ZXhOYW1lID0gZmlyc3RDeWNsaWNFZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSwgLy8vXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gZmlyc3RDeWNsaWNFZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKSwgLy8vXG4gICAgICAgICAgICBzb3VyY2VWZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgICB0YXJnZXRWZXJ0ZXguZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoKCh2ZXJ0ZXgsIHByZWRlY2Vzc29yVmVydGV4ZXMpID0+IHtcbiAgICAgICAgbGV0IHRlcm1pbmF0ZSA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh2ZXJ0ZXggPT09IHNvdXJjZVZlcnRleCkge1xuICAgICAgICAgIHRlcm1pbmF0ZSA9IHRydWU7XG5cbiAgICAgICAgICBjb25zdCBjeWNsZSA9IEN5Y2xlLmZyb21Tb3VyY2VWZXJ0ZXhBbmRQcmVkZWNlc3NvclZlcnRleGVzKHNvdXJjZVZlcnRleCwgcHJlZGVjZXNzb3JWZXJ0ZXhlcyk7ICAvLy9cblxuICAgICAgICAgIGZpcnN0Q3ljbGUgPSBjeWNsZTsgLy8vXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGVybWluYXRlO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpcnN0Q3ljbGU7XG4gIH1cblxuICBhcmVDeWNsZXNQcmVzZW50KCkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VzTGVuZ3RoID0gdGhpcy5jeWNsaWNFZGdlcy5sZW5ndGgsXG4gICAgICAgICAgY3ljbGVzUHJlc2VudCA9IChjeWNsaWNFZGdlc0xlbmd0aCA+IDApO1xuXG4gICAgcmV0dXJuIGN5Y2xlc1ByZXNlbnQ7XG4gIH1cblxuICBpc0N5Y2xpY0VkZ2VQcmVzZW50KGVkZ2UpIHtcbiAgICBjb25zdCBjeWNsaWNFZGdlc0luY2x1ZGVzRWRnZSA9IGNoZWNrRWRnZXNJbmNsdWRlc0VkZ2UodGhpcy5jeWNsaWNFZGdlcywgZWRnZSksXG4gICAgICAgICAgY3ljbGljRWRnZVByZXNlbnQgPSBjeWNsaWNFZGdlc0luY2x1ZGVzRWRnZTsgIC8vL1xuXG4gICAgcmV0dXJuIGN5Y2xpY0VkZ2VQcmVzZW50O1xuICB9XG5cbiAgaXNOb25DeWNsaWNFZGdlUHJlc2VudChlZGdlKSB7XG4gICAgY29uc3Qgc291cmNlVmVydGV4TmFtZSA9IGVkZ2UuZ2V0U291cmNlVmVydGV4TmFtZSgpLFxuICAgICAgICAgIHRhcmdldFZlcnRleE5hbWUgPSBlZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKSxcbiAgICAgICAgICBub25DeWNsaWNFZGdlUHJlc2VudCA9IHRoaXMuaXNFZGdlUHJlc2VudEJ5U291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICByZXR1cm4gbm9uQ3ljbGljRWRnZVByZXNlbnQ7XG4gIH1cblxuICBpc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGNvbnN0IHZlcnRleE5hbWVzID0gdGhpcy5nZXRWZXJ0ZXhOYW1lcygpLFxuICAgICAgICAgIHZlcnRleE5hbWVzSW5jbHVkZXNWZXJ0ZXhOYW1lID0gdmVydGV4TmFtZXMuaW5jbHVkZXModmVydGV4TmFtZSksXG4gICAgICAgICAgdmVydGV4UHJlc2VudCA9IHZlcnRleE5hbWVzSW5jbHVkZXNWZXJ0ZXhOYW1lOyAgLy8vXG5cbiAgICByZXR1cm4gdmVydGV4UHJlc2VudDtcbiAgfVxuXG4gIGlzRWRnZVByZXNlbnRCeVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpIHtcbiAgICBsZXQgZWRnZVByZXNlbnQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNvdXJjZVZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpLFxuICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpLFxuICAgICAgICAgIHNvdXJjZVZlcnRleEFuZFRhcmdldFZlcnRleFByZXNlbnQgPSAoc291cmNlVmVydGV4ICE9PSBudWxsKSAmJiAodGFyZ2V0VmVydGV4ICE9PSBudWxsKTtcblxuICAgIGlmIChzb3VyY2VWZXJ0ZXhBbmRUYXJnZXRWZXJ0ZXhQcmVzZW50KSB7XG4gICAgICBlZGdlUHJlc2VudCA9IHNvdXJjZVZlcnRleC5pc0VkZ2VQcmVzZW50QnlUYXJnZXRWZXJ0ZXgodGFyZ2V0VmVydGV4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWRnZVByZXNlbnQ7XG4gIH1cblxuICBhZGRFZGdlKGVkZ2UpIHtcbiAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gZWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IGVkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgIHN1Y2Nlc3MgPSB0aGlzLmFkZEVkZ2VCeVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICBjb25zdCBjeWNsaWNFZGdlID0gZWRnZTsgIC8vL1xuXG4gICAgICB0aGlzLmFkZEN5Y2xpY0VkZ2UoY3ljbGljRWRnZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1Y2Nlc3M7XG4gIH1cblxuICBhZGRFZGdlcyhlZGdlcykge1xuICAgIGVkZ2VzLmZvckVhY2goKGVkZ2UpID0+IHtcbiAgICAgIHRoaXMuYWRkRWRnZShlZGdlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZEN5Y2xpY0VkZ2UoY3ljbGljRWRnZSkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VzSW5jbHVkZXNDeWNsaWNFZGdlID0gY2hlY2tFZGdlc0luY2x1ZGVzRWRnZSh0aGlzLmN5Y2xpY0VkZ2VzLCBjeWNsaWNFZGdlKTtcblxuICAgIGlmICghY3ljbGljRWRnZXNJbmNsdWRlc0N5Y2xpY0VkZ2UpIHtcbiAgICAgIHRoaXMuY3ljbGljRWRnZXMucHVzaChjeWNsaWNFZGdlKTtcbiAgICB9XG4gIH1cblxuICBhZGRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGNvbnN0IHZlcnRleFByZXNlbnQgPSB0aGlzLmlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgIGlmICghdmVydGV4UHJlc2VudCkge1xuICAgICAgY29uc3QgdmVydGV4TmFtZXMgPSB0aGlzLmdldFZlcnRleE5hbWVzKCksXG4gICAgICAgICAgICB2ZXJ0ZXhOYW1lc0xlbmd0aCA9IHZlcnRleE5hbWVzLmxlbmd0aCxcbiAgICAgICAgICAgIG5hbWUgPSB2ZXJ0ZXhOYW1lLCAgLy8vXG4gICAgICAgICAgICBpbmRleCA9IHZlcnRleE5hbWVzTGVuZ3RoLCAvLy9cbiAgICAgICAgICAgIHZlcnRleCA9IFZlcnRleC5mcm9tTmFtZUFuZEluZGV4KG5hbWUsIGluZGV4KTtcblxuICAgICAgdGhpcy5zZXRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSwgdmVydGV4KTtcbiAgICB9XG5cbiAgICBjb25zdCB2ZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgIHJldHVybiB2ZXJ0ZXg7XG4gIH1cblxuICByZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGxldCByZW1vdmVkRWRnZXMgPSBudWxsO1xuXG4gICAgY29uc3QgdmVydGV4UHJlc2VudCA9IHRoaXMuaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgaWYgKHZlcnRleFByZXNlbnQpIHtcbiAgICAgIHJlbW92ZWRFZGdlcyA9IFtdO1xuXG4gICAgICBjb25zdCB2ZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgICAgdmVydGV4LmZvckVhY2hJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoKGltbWVkaWF0ZVN1Y2Nlc3NWZXJ0ZXgpID0+IHtcbiAgICAgICAgY29uc3QgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXggPSB2ZXJ0ZXgsICAvLy9cbiAgICAgICAgICAgICAgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lID0gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXguZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICBpbW1lZGlhdGVTdWNjZXNzVmVydGV4TmFtZSA9IGltbWVkaWF0ZVN1Y2Nlc3NWZXJ0ZXguZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICByZW1vdmVkRWRnZVNvdXJjZVZlcnRleE5hbWUgPSBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWUsIC8vL1xuICAgICAgICAgICAgICByZW1vdmVkRWRnZVRhcmdldFZlcnRleE5hbWUgPSBpbW1lZGlhdGVTdWNjZXNzVmVydGV4TmFtZSwgLy8vXG4gICAgICAgICAgICAgIHJlbW92ZWRFZGdlID0gbmV3IEVkZ2UocmVtb3ZlZEVkZ2VTb3VyY2VWZXJ0ZXhOYW1lLCByZW1vdmVkRWRnZVRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgICAgIHJlbW92ZWRFZGdlcy5wdXNoKHJlbW92ZWRFZGdlKTtcblxuICAgICAgICBpbW1lZGlhdGVTdWNjZXNzVmVydGV4LnJlbW92ZUltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KTtcbiAgICAgIH0pO1xuXG4gICAgICB2ZXJ0ZXguZm9yRWFjaEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCkgPT4ge1xuICAgICAgICBjb25zdCBpbW1lZGlhdGVTdWNjZXNzVmVydGV4ID0gdmVydGV4LCAgLy8vXG4gICAgICAgICAgICAgIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZSA9IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4LmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgaW1tZWRpYXRlU3VjY2Vzc1ZlcnRleE5hbWUgPSBpbW1lZGlhdGVTdWNjZXNzVmVydGV4LmdldE5hbWUoKSwgIC8vL1xuICAgICAgICAgICAgICByZW1vdmVkRWRnZVNvdXJjZVZlcnRleE5hbWUgPSBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWUsIC8vL1xuICAgICAgICAgICAgICByZW1vdmVkRWRnZVRhcmdldFZlcnRleE5hbWUgPSBpbW1lZGlhdGVTdWNjZXNzVmVydGV4TmFtZSwgLy8vXG4gICAgICAgICAgICAgIHJlbW92ZWRFZGdlID0gbmV3IEVkZ2UocmVtb3ZlZEVkZ2VTb3VyY2VWZXJ0ZXhOYW1lLCByZW1vdmVkRWRnZVRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgICAgIHJlbW92ZWRFZGdlcy5wdXNoKHJlbW92ZWRFZGdlKTtcblxuICAgICAgICBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleC5yZW1vdmVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoaW1tZWRpYXRlU3VjY2Vzc1ZlcnRleCk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5kZWxldGVWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICAgIGNvbnN0IGRlbGV0ZWRWZXJ0ZXggPSB2ZXJ0ZXgsIC8vL1xuICAgICAgICAgICAgZGVsZXRlZFZlcnRleEluZGV4ID0gZGVsZXRlZFZlcnRleC5nZXRJbmRleCgpLFxuICAgICAgICAgICAgdmVydGV4ZXMgPSB0aGlzLmdldFZlcnRleGVzKCksXG4gICAgICAgICAgICBhZmZlY3RlZFZlcnRleGVzID0gdmVydGV4ZXMucmVkdWNlKChhZmZlY3RlZFZlcnRleGVzLCB2ZXJ0ZXgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgdmVydGV4SW5kZXggPSB2ZXJ0ZXguZ2V0SW5kZXgoKSxcbiAgICAgICAgICAgICAgICAgICAgdmVydGV4QWZmZWN0ZWQgPSAodmVydGV4SW5kZXggPiBkZWxldGVkVmVydGV4SW5kZXgpO1xuXG4gICAgICAgICAgICAgIGlmICh2ZXJ0ZXhBZmZlY3RlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFmZmVjdGVkVmVydGV4ID0gdmVydGV4OyAgLy8vXG5cbiAgICAgICAgICAgICAgICBhZmZlY3RlZFZlcnRleGVzLnB1c2goYWZmZWN0ZWRWZXJ0ZXgpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIGFmZmVjdGVkVmVydGV4ZXM7XG4gICAgICAgICAgICB9LCBbXSk7XG5cbiAgICAgIGFmZmVjdGVkVmVydGV4ZXMuZm9yRWFjaCgoYWZmZWN0ZWRWZXJ0ZXgpID0+IHtcbiAgICAgICAgYWZmZWN0ZWRWZXJ0ZXguZGVjcmVtZW50SW5kZXgoKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuZmlsdGVyQ3ljbGljRWRnZXMoKTtcblxuICAgIHJldHVybiByZW1vdmVkRWRnZXM7XG4gIH1cblxuICByZW1vdmVFZGdlKGVkZ2UsIHJlbW92ZVN0cmFuZGVkVmVydGV4ZXMgPSBmYWxzZSkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VQcmVzZW50ID0gdGhpcy5pc0N5Y2xpY0VkZ2VQcmVzZW50KGVkZ2UpO1xuXG4gICAgaWYgKGN5Y2xpY0VkZ2VQcmVzZW50KSB7XG4gICAgICBjb25zdCBjeWNsaWNFZGdlID0gZWRnZTsgIC8vL1xuXG4gICAgICB0aGlzLnJlbW92ZUN5Y2xpY0VkZ2UoY3ljbGljRWRnZSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBub25DeWNsaWNFZGdlUHJlc2VudCA9IHRoaXMuaXNOb25DeWNsaWNFZGdlUHJlc2VudChlZGdlKTtcblxuICAgIGlmIChub25DeWNsaWNFZGdlUHJlc2VudCkge1xuICAgICAgY29uc3Qgbm9uQ3ljbGljRWRnZSA9IGVkZ2U7IC8vL1xuXG4gICAgICB0aGlzLnJlbW92ZU5vbkN5Y2xpY0VkZ2Uobm9uQ3ljbGljRWRnZSwgcmVtb3ZlU3RyYW5kZWRWZXJ0ZXhlcyk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlRWRnZXMoZWRnZXMsIHJlbW92ZVN0cmFuZGVkVmVydGV4ZXMgPSBmYWxzZSkge1xuICAgIGVkZ2VzLmZvckVhY2goKGVkZ2UpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlRWRnZShlZGdlLCByZW1vdmVTdHJhbmRlZFZlcnRleGVzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZUN5Y2xpY0VkZ2UoY3ljbGljRWRnZSkge1xuICAgIHJlbW92ZUVkZ2VGcm9tRWRnZXMoY3ljbGljRWRnZSwgdGhpcy5jeWNsaWNFZGdlcyk7XG4gIH1cblxuICByZW1vdmVOb25DeWNsaWNFZGdlKG5vbkN5Y2xpY0VkZ2UsIHJlbW92ZVN0cmFuZGVkVmVydGV4ZXMpIHtcbiAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gbm9uQ3ljbGljRWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IG5vbkN5Y2xpY0VkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpO1xuXG4gICAgdGhpcy5yZW1vdmVFZGdlQnlTb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgIGlmIChyZW1vdmVTdHJhbmRlZFZlcnRleGVzKSB7XG4gICAgICBjb25zdCBzb3VyY2VWZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpLFxuICAgICAgICAgICAgc291cmNlVmVydGV4U3RyYW5kZWQgPSBzb3VyY2VWZXJ0ZXguaXNTdHJhbmRlZCgpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4U3RyYW5kZWQgPSB0YXJnZXRWZXJ0ZXguaXNTdHJhbmRlZCgpO1xuXG4gICAgICBpZiAoc291cmNlVmVydGV4U3RyYW5kZWQpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0YXJnZXRWZXJ0ZXhTdHJhbmRlZCkge1xuICAgICAgICB0aGlzLnJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmZpbHRlckN5Y2xpY0VkZ2VzKCk7XG5cbiAgfVxuXG4gIHJlbW92ZUFsbEVkZ2VzQW5kVmVydGV4ZXMoKSB7XG4gICAgdGhpcy52ZXJ0ZXhNYXAgPSB7fTtcbiAgICB0aGlzLmN5Y2xpY0VkZ2VzID0gW107XG4gIH1cblxuICByZW1vdmVFZGdlc0J5U291cmNlVmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCByZW1vdmVTdHJhbmRlZFZlcnRleGVzID0gZmFsc2UpIHtcbiAgICBjb25zdCBjeWNsaWNFZGdlcyA9IGVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUsIHRoaXMuY3ljbGljRWRnZXMpLFxuICAgICAgICAgIGVkZ2VzID0gdGhpcy5nZXRFZGdlc0J5U291cmNlVmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKTtcblxuICAgIHRoaXMucmVtb3ZlRWRnZXMoY3ljbGljRWRnZXMsIHJlbW92ZVN0cmFuZGVkVmVydGV4ZXMpO1xuXG4gICAgdGhpcy5yZW1vdmVFZGdlcyhlZGdlcywgcmVtb3ZlU3RyYW5kZWRWZXJ0ZXhlcyk7XG4gIH1cblxuICByZW1vdmVFZGdlc0J5VGFyZ2V0VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lLCByZW1vdmVTdHJhbmRlZFZlcnRleGVzID0gZmFsc2UpIHtcbiAgICBjb25zdCBjeWNsaWNFZGdlcyA9IGVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUsIHRoaXMuY3ljbGljRWRnZXMpLFxuICAgICAgICAgIGVkZ2VzID0gdGhpcy5nZXRFZGdlc0J5VGFyZ2V0VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgIHRoaXMucmVtb3ZlRWRnZXMoY3ljbGljRWRnZXMsIHJlbW92ZVN0cmFuZGVkVmVydGV4ZXMpO1xuXG4gICAgdGhpcy5yZW1vdmVFZGdlcyhlZGdlcywgcmVtb3ZlU3RyYW5kZWRWZXJ0ZXhlcyk7XG4gIH1cblxuICBhZGRFZGdlQnlTb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKSB7XG4gICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgIGlmIChzb3VyY2VWZXJ0ZXhOYW1lICE9PSB0YXJnZXRWZXJ0ZXhOYW1lKSB7XG4gICAgICBjb25zdCBzb3VyY2VWZXJ0ZXggPSB0aGlzLmFkZFZlcnRleEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuYWRkVmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpLFxuICAgICAgICAgICAgZWRnZVByZXNlbnQgPSBzb3VyY2VWZXJ0ZXguaXNFZGdlUHJlc2VudEJ5VGFyZ2V0VmVydGV4KHRhcmdldFZlcnRleCk7XG5cbiAgICAgIGlmIChlZGdlUHJlc2VudCkge1xuICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHNvdXJjZVZlcnRleEluZGV4ID0gc291cmNlVmVydGV4LmdldEluZGV4KCksXG4gICAgICAgICAgICAgIHRhcmdldFZlcnRleEluZGV4ID0gdGFyZ2V0VmVydGV4LmdldEluZGV4KCksXG4gICAgICAgICAgICAgIGludmFsaWRhdGluZ0VkZ2UgPSAoc291cmNlVmVydGV4SW5kZXggPiB0YXJnZXRWZXJ0ZXhJbmRleCk7XG5cbiAgICAgICAgc3VjY2VzcyA9IGludmFsaWRhdGluZ0VkZ2UgP1xuICAgICAgICAgICAgICAgICAgICBhZGRJbnZhbGlkYXRpbmdFZGdlQnlWZXJ0ZXhlcyhzb3VyY2VWZXJ0ZXgsIHRhcmdldFZlcnRleCkgOlxuICAgICAgICAgICAgICAgICAgICAgIHRydWU7XG5cbiAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICBjb25zdCBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCA9IHNvdXJjZVZlcnRleCwgLy8vXG4gICAgICAgICAgICAgICAgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ID0gdGFyZ2V0VmVydGV4OyAvLy9cblxuICAgICAgICAgIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4LmFkZEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgpO1xuXG4gICAgICAgICAgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4LmFkZEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdWNjZXNzO1xuICB9XG5cbiAgcmVtb3ZlRWRnZUJ5U291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSkge1xuICAgIGNvbnN0IHNvdXJjZVZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpLFxuICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgc291cmNlVmVydGV4LnJlbW92ZUltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCh0YXJnZXRWZXJ0ZXgpO1xuXG4gICAgdGFyZ2V0VmVydGV4LnJlbW92ZUltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KHNvdXJjZVZlcnRleCk7XG4gIH1cblxuICBmaWx0ZXJDeWNsaWNFZGdlcygpIHtcbiAgICBmaWx0ZXIodGhpcy5jeWNsaWNFZGdlcywgKGN5Y2xpY0VkZ2UpID0+IHtcbiAgICAgIGNvbnN0IHNvdXJjZVZlcnRleE5hbWUgPSBjeWNsaWNFZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleE5hbWUgPSBjeWNsaWNFZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKSxcbiAgICAgICAgICAgIHNvdXJjZVZlcnRleFByZXNlbnQgPSB0aGlzLmlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleFByZXNlbnQgPSB0aGlzLmlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgaWYgKHNvdXJjZVZlcnRleFByZXNlbnQgJiYgdGFyZ2V0VmVydGV4UHJlc2VudCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGZpbHRlcih0aGlzLmN5Y2xpY0VkZ2VzLCAoY3ljbGljRWRnZSkgPT4ge1xuICAgICAgY29uc3QgZWRnZSA9IGN5Y2xpY0VkZ2UsICAvLy9cbiAgICAgICAgICAgIHN1Y2Nlc3MgPSB0aGlzLmFkZEVkZ2UoZWRnZSk7XG5cbiAgICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lLCB2ZXJ0ZXgpIHtcbiAgICB0aGlzLnZlcnRleE1hcFt2ZXJ0ZXhOYW1lXSA9IHZlcnRleDtcbiAgfVxuXG4gIGRlbGV0ZVZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgZGVsZXRlIHRoaXMudmVydGV4TWFwW3ZlcnRleE5hbWVdO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHZlcnRleE1hcCA9IHt9LFxuICAgICAgICAgIGN5Y2xpY0VkZ2VzID0gW10sXG4gICAgICAgICAgZGlyZWN0ZWRHcmFwaCA9IG5ldyBEaXJlY3RlZEdyYXBoKHZlcnRleE1hcCwgY3ljbGljRWRnZXMpO1xuICAgIFxuICAgIHJldHVybiBkaXJlY3RlZEdyYXBoOyAgICBcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRJbnZhbGlkYXRpbmdFZGdlQnlWZXJ0ZXhlcyhzb3VyY2VWZXJ0ZXgsIHRhcmdldFZlcnRleCkge1xuICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gIGNvbnN0IGZvcndhcmRzQWZmZWN0ZWRWZXJ0ZXhlcyA9IHRhcmdldFZlcnRleC5yZXRyaWV2ZUZvcndhcmRzQWZmZWN0ZWRWZXJ0ZXhlcyhzb3VyY2VWZXJ0ZXgpLFxuICAgICAgICBsYXN0Rm9yd2FyZHNBZmZlY3RlZFZlcnRleCA9IGxhc3QoZm9yd2FyZHNBZmZlY3RlZFZlcnRleGVzKSxcbiAgICAgICAgcmVzdWx0c0luQ3ljbGUgPSAobGFzdEZvcndhcmRzQWZmZWN0ZWRWZXJ0ZXggPT09IHNvdXJjZVZlcnRleCk7XG5cbiAgaWYgKCFyZXN1bHRzSW5DeWNsZSkge1xuICAgIGNvbnN0IGJhY2t3YXJkc0FmZmVjdGVkVmVydGV4ZXMgPSBzb3VyY2VWZXJ0ZXgucmV0cmlldmVCYWNrd2FyZHNBZmZlY3RlZFZlcnRleGVzKCk7XG5cbiAgICBvcmRlclZlcnRleGVzKGJhY2t3YXJkc0FmZmVjdGVkVmVydGV4ZXMpO1xuXG4gICAgb3JkZXJWZXJ0ZXhlcyhmb3J3YXJkc0FmZmVjdGVkVmVydGV4ZXMpO1xuXG4gICAgY29uc3QgYWZmZWN0ZWRWZXJ0ZXhlcyA9IFtdLmNvbmNhdChiYWNrd2FyZHNBZmZlY3RlZFZlcnRleGVzKS5jb25jYXQoZm9yd2FyZHNBZmZlY3RlZFZlcnRleGVzKSxcbiAgICAgICAgICBhZmZlY3RlZFZlcnRleEluZGljZXMgPSBhZmZlY3RlZFZlcnRleGVzLm1hcCgoYWZmZWN0ZWRWZXJ0ZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFmZmVjdGVkVmVydGV4SW5kZXggPSBhZmZlY3RlZFZlcnRleC5nZXRJbmRleCgpO1xuXG4gICAgICAgICAgICByZXR1cm4gYWZmZWN0ZWRWZXJ0ZXhJbmRleDtcbiAgICAgICAgICB9KTtcblxuICAgIGFmZmVjdGVkVmVydGV4SW5kaWNlcy5zb3J0KChpbmRleEEsIGluZGV4QikgPT4ge1xuICAgICAgaWYgKGZhbHNlKSB7XG4gICAgICAgIC8vL1xuICAgICAgfSBlbHNlIGlmIChpbmRleEEgPCBpbmRleEIpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfSBlbHNlIGlmIChpbmRleEEgPiBpbmRleEIpIHtcbiAgICAgICAgcmV0dXJuICsxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBhZmZlY3RlZFZlcnRleGVzLmZvckVhY2goKGFmZmVjdGVkVmVydGV4LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgYWZmZWN0ZWRWZXJ0ZXhJbmRleCA9IGFmZmVjdGVkVmVydGV4SW5kaWNlc1tpbmRleF07XG5cbiAgICAgIGFmZmVjdGVkVmVydGV4LnNldEluZGV4KGFmZmVjdGVkVmVydGV4SW5kZXgpO1xuICAgIH0pO1xuXG4gICAgc3VjY2VzcyA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gc3VjY2Vzcztcbn1cbiJdLCJuYW1lcyI6WyJEaXJlY3RlZEdyYXBoIiwibGFzdCIsImFycmF5VXRpbGl0aWVzIiwiZmlyc3QiLCJmaWx0ZXIiLCJ2ZXJ0ZXhNYXAiLCJjeWNsaWNFZGdlcyIsImdldFZlcnRleE5hcCIsImdldEN5Y2xpY0VkZ2VzIiwiZ2V0VmVydGV4ZXMiLCJ2ZXJ0ZXhNYXBWYWx1ZXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJ2ZXJ0ZXhlcyIsImdldFZlcnRleE5hbWVzIiwidmVydGV4TWFwS2V5cyIsImtleXMiLCJ2ZXJ0ZXhOYW1lcyIsImdldE9yZGVyZWRWZXJ0ZXhOYW1lcyIsIm9yZGVyVmVydGV4ZXMiLCJvcmRlcmVkVmVydGV4ZXMiLCJvcmRlcmVkVmVydGV4TmFtZXMiLCJ2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhlcyIsImdldFZlcnRleEJ5VmVydGV4TmFtZSIsInZlcnRleE5hbWUiLCJ2ZXJ0ZXhQcmVzZW50IiwiaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lIiwidmVydGV4IiwiZ2V0RWRnZXNCeVNvdXJjZVZlcnRleE5hbWUiLCJzb3VyY2VWZXJ0ZXhOYW1lIiwiZWRnZXMiLCJzb3VyY2VWZXJ0ZXgiLCJpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcyIsImdldEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzIiwidGFyZ2V0VmVydGV4TmFtZXMiLCJmb3JFYWNoIiwidGFyZ2V0VmVydGV4TmFtZSIsImVkZ2UiLCJFZGdlIiwiZnJvbVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lIiwicHVzaCIsImdldEVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lIiwidGFyZ2V0VmVydGV4IiwiaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcyIsImdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMiLCJzb3VyY2VWZXJ0ZXhOYW1lcyIsImdldEZpcnN0Q3ljbGUiLCJmaXJzdEN5Y2xlIiwiY3ljbGVzUHJlc2VudCIsImFyZUN5Y2xlc1ByZXNlbnQiLCJmaXJzdEN5Y2xpY0VkZ2UiLCJnZXRTb3VyY2VWZXJ0ZXhOYW1lIiwiZ2V0VGFyZ2V0VmVydGV4TmFtZSIsImZvcndhcmRzRGVwdGhGaXJzdFNlYXJjaCIsInByZWRlY2Vzc29yVmVydGV4ZXMiLCJ0ZXJtaW5hdGUiLCJjeWNsZSIsIkN5Y2xlIiwiZnJvbVNvdXJjZVZlcnRleEFuZFByZWRlY2Vzc29yVmVydGV4ZXMiLCJjeWNsaWNFZGdlc0xlbmd0aCIsImxlbmd0aCIsImlzQ3ljbGljRWRnZVByZXNlbnQiLCJjeWNsaWNFZGdlc0luY2x1ZGVzRWRnZSIsImNoZWNrRWRnZXNJbmNsdWRlc0VkZ2UiLCJjeWNsaWNFZGdlUHJlc2VudCIsImlzTm9uQ3ljbGljRWRnZVByZXNlbnQiLCJub25DeWNsaWNFZGdlUHJlc2VudCIsImlzRWRnZVByZXNlbnRCeVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lIiwidmVydGV4TmFtZXNJbmNsdWRlc1ZlcnRleE5hbWUiLCJpbmNsdWRlcyIsImVkZ2VQcmVzZW50Iiwic291cmNlVmVydGV4QW5kVGFyZ2V0VmVydGV4UHJlc2VudCIsImlzRWRnZVByZXNlbnRCeVRhcmdldFZlcnRleCIsImFkZEVkZ2UiLCJzdWNjZXNzIiwiYWRkRWRnZUJ5U291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUiLCJjeWNsaWNFZGdlIiwiYWRkQ3ljbGljRWRnZSIsImFkZEVkZ2VzIiwiY3ljbGljRWRnZXNJbmNsdWRlc0N5Y2xpY0VkZ2UiLCJhZGRWZXJ0ZXhCeVZlcnRleE5hbWUiLCJ2ZXJ0ZXhOYW1lc0xlbmd0aCIsIm5hbWUiLCJpbmRleCIsIlZlcnRleCIsImZyb21OYW1lQW5kSW5kZXgiLCJzZXRWZXJ0ZXhCeVZlcnRleE5hbWUiLCJyZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUiLCJyZW1vdmVkRWRnZXMiLCJmb3JFYWNoSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4IiwiaW1tZWRpYXRlU3VjY2Vzc1ZlcnRleCIsImltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4IiwiaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lIiwiZ2V0TmFtZSIsImltbWVkaWF0ZVN1Y2Nlc3NWZXJ0ZXhOYW1lIiwicmVtb3ZlZEVkZ2VTb3VyY2VWZXJ0ZXhOYW1lIiwicmVtb3ZlZEVkZ2VUYXJnZXRWZXJ0ZXhOYW1lIiwicmVtb3ZlZEVkZ2UiLCJyZW1vdmVJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCIsImZvckVhY2hJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCIsInJlbW92ZUltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCIsImRlbGV0ZVZlcnRleEJ5VmVydGV4TmFtZSIsImRlbGV0ZWRWZXJ0ZXgiLCJkZWxldGVkVmVydGV4SW5kZXgiLCJnZXRJbmRleCIsImFmZmVjdGVkVmVydGV4ZXMiLCJyZWR1Y2UiLCJ2ZXJ0ZXhJbmRleCIsInZlcnRleEFmZmVjdGVkIiwiYWZmZWN0ZWRWZXJ0ZXgiLCJkZWNyZW1lbnRJbmRleCIsImZpbHRlckN5Y2xpY0VkZ2VzIiwicmVtb3ZlRWRnZSIsInJlbW92ZVN0cmFuZGVkVmVydGV4ZXMiLCJyZW1vdmVDeWNsaWNFZGdlIiwibm9uQ3ljbGljRWRnZSIsInJlbW92ZU5vbkN5Y2xpY0VkZ2UiLCJyZW1vdmVFZGdlcyIsInJlbW92ZUVkZ2VGcm9tRWRnZXMiLCJyZW1vdmVFZGdlQnlTb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZSIsInNvdXJjZVZlcnRleFN0cmFuZGVkIiwiaXNTdHJhbmRlZCIsInRhcmdldFZlcnRleFN0cmFuZGVkIiwicmVtb3ZlQWxsRWRnZXNBbmRWZXJ0ZXhlcyIsInJlbW92ZUVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lIiwiZWRnZXNCeVNvdXJjZVZlcnRleE5hbWUiLCJyZW1vdmVFZGdlc0J5VGFyZ2V0VmVydGV4TmFtZSIsImVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lIiwic291cmNlVmVydGV4SW5kZXgiLCJ0YXJnZXRWZXJ0ZXhJbmRleCIsImludmFsaWRhdGluZ0VkZ2UiLCJhZGRJbnZhbGlkYXRpbmdFZGdlQnlWZXJ0ZXhlcyIsImltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCIsImFkZEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCIsImFkZEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4Iiwic291cmNlVmVydGV4UHJlc2VudCIsInRhcmdldFZlcnRleFByZXNlbnQiLCJmcm9tTm90aGluZyIsImRpcmVjdGVkR3JhcGgiLCJmb3J3YXJkc0FmZmVjdGVkVmVydGV4ZXMiLCJyZXRyaWV2ZUZvcndhcmRzQWZmZWN0ZWRWZXJ0ZXhlcyIsImxhc3RGb3J3YXJkc0FmZmVjdGVkVmVydGV4IiwicmVzdWx0c0luQ3ljbGUiLCJiYWNrd2FyZHNBZmZlY3RlZFZlcnRleGVzIiwicmV0cmlldmVCYWNrd2FyZHNBZmZlY3RlZFZlcnRleGVzIiwiY29uY2F0IiwiYWZmZWN0ZWRWZXJ0ZXhJbmRpY2VzIiwibWFwIiwiYWZmZWN0ZWRWZXJ0ZXhJbmRleCIsInNvcnQiLCJpbmRleEEiLCJpbmRleEIiLCJzZXRJbmRleCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFhcUJBOzs7eUJBWFU7MkRBRWQ7NERBQ0M7NkRBQ0M7dUJBRW9DO3FCQUN1RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5RyxJQUFRQyxPQUF3QkMsMEJBQXhCRCxNQUFNRSxRQUFrQkQsMEJBQWxCQyxPQUFPQyxTQUFXRiwwQkFBWEU7QUFFTixJQUFBLEFBQU1KLDhCQTJhbEIsQUEzYVk7YUFBTUEsY0FDUEssU0FBUyxFQUFFQyxXQUFXO2dDQURmTjtRQUVqQixJQUFJLENBQUNLLFlBQVlBO1FBQ2pCLElBQUksQ0FBQ0MsY0FBY0E7O2tCQUhGTjs7WUFNbkJPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0Y7WUFDZDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0Y7WUFDZDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxrQkFBa0JDLE9BQU9DLE9BQU8sSUFBSSxDQUFDUCxZQUNyQ1EsV0FBV0gsaUJBQWlCLEdBQUc7Z0JBRXJDLE9BQU9HO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsZ0JBQWdCSixPQUFPSyxLQUFLLElBQUksQ0FBQ1gsWUFDakNZLGNBQWNGLGVBQWdCLEdBQUc7Z0JBRXZDLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUwsV0FBVyxJQUFJLENBQUNKO2dCQUV0QlUsSUFBQUEsd0JBQWNOO2dCQUVkLElBQU1PLGtCQUFrQlAsVUFDbEJRLHFCQUFxQkMsSUFBQUEsa0NBQXdCRjtnQkFFbkQsT0FBT0M7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0JDLFVBQVU7Z0JBQzlCLElBQU1DLGdCQUFnQixJQUFJLENBQUNDLDRCQUE0QkYsYUFDakRHLFNBQVNGLGdCQUNFLElBQUksQ0FBQ3BCLFNBQVMsQ0FBQ21CLFdBQVcsR0FDeEI7Z0JBRW5CLE9BQU9HO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsMkJBQTJCQyxnQkFBZ0I7Z0JBQ3pDLElBQU1DLFFBQVEsRUFBRSxFQUNWQyxlQUFlLElBQUksQ0FBQ1Isc0JBQXNCTTtnQkFFaEQsSUFBSUUsaUJBQWlCLE1BQU07b0JBQ3pCLElBQU1DLGdDQUFnQ0QsYUFBYUUsb0NBQzdDQyxvQkFBb0JGLCtCQUFnQyxHQUFHO29CQUU3REUsa0JBQWtCQyxRQUFRLFNBQUNDO3dCQUN6QixJQUFNQyxPQUFPQyxjQUFLQyx3Q0FBd0NWLGtCQUFrQk87d0JBRTVFTixNQUFNVSxLQUFLSDtvQkFDYjtnQkFDRjtnQkFFQSxPQUFPUDtZQUNUOzs7WUFFQVcsS0FBQUE7bUJBQUFBLFNBQUFBLDJCQUEyQkwsZ0JBQWdCO2dCQUN6QyxJQUFNTixRQUFRLEVBQUUsRUFDVlksZUFBZSxJQUFJLENBQUNuQixzQkFBc0JhO2dCQUVoRCxJQUFJTSxpQkFBaUIsTUFBTTtvQkFDekIsSUFBTUMsa0NBQWtDRCxhQUFhRSxzQ0FDL0NDLG9CQUFvQkYsaUNBQWtDLEdBQUc7b0JBRS9ERSxrQkFBa0JWLFFBQVEsU0FBQ047d0JBQ3pCLElBQU1RLE9BQU9DLGNBQUtDLHdDQUF3Q1Ysa0JBQWtCTzt3QkFFNUVOLE1BQU1VLEtBQUtIO29CQUNiO2dCQUNGO2dCQUVBLE9BQU9QO1lBQ1Q7OztZQUVBZ0IsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLGFBQWE7Z0JBRWpCLElBQU1DLGdCQUFnQixJQUFJLENBQUNDO2dCQUUzQixJQUFJRCxlQUFlO29CQUNqQixJQUFNRSxrQkFBa0IvQyxNQUFNLElBQUksQ0FBQ0csY0FDN0J1QixtQkFBbUJxQixnQkFBZ0JDLHVCQUNuQ2YsbUJBQW1CYyxnQkFBZ0JFLHVCQUNuQ3JCLGVBQWUsSUFBSSxDQUFDUixzQkFBc0JNLG1CQUMxQ2EsZUFBZSxJQUFJLENBQUNuQixzQkFBc0JhO29CQUVoRE0sYUFBYVcseUJBQXlCLFNBQUMxQixRQUFRMkI7d0JBQzdDLElBQUlDLFlBQVk7d0JBRWhCLElBQUk1QixXQUFXSSxjQUFjOzRCQUMzQndCLFlBQVk7NEJBRVosSUFBTUMsUUFBUUMsZUFBTUMsdUNBQXVDM0IsY0FBY3VCLHNCQUF1QixHQUFHOzRCQUVuR1AsYUFBYVMsT0FBTyxHQUFHO3dCQUN6Qjt3QkFFQSxPQUFPRDtvQkFDVDtnQkFDRjtnQkFFQSxPQUFPUjtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1VLG9CQUFvQixJQUFJLENBQUNyRCxZQUFZc0QsUUFDckNaLGdCQUFpQlcsb0JBQW9CO2dCQUUzQyxPQUFPWDtZQUNUOzs7WUFFQWEsS0FBQUE7bUJBQUFBLFNBQUFBLG9CQUFvQnhCLElBQUk7Z0JBQ3RCLElBQU15QiwwQkFBMEJDLElBQUFBLCtCQUF1QixJQUFJLENBQUN6RCxhQUFhK0IsT0FDbkUyQixvQkFBb0JGLHlCQUEwQixHQUFHO2dCQUV2RCxPQUFPRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLHVCQUF1QjVCLElBQUk7Z0JBQ3pCLElBQU1SLG1CQUFtQlEsS0FBS2MsdUJBQ3hCZixtQkFBbUJDLEtBQUtlLHVCQUN4QmMsdUJBQXVCLElBQUksQ0FBQ0MsbURBQW1EdEMsa0JBQWtCTztnQkFFdkcsT0FBTzhCO1lBQ1Q7OztZQUVBeEMsS0FBQUE7bUJBQUFBLFNBQUFBLDRCQUE0QkYsVUFBVTtnQkFDcEMsSUFBTVAsY0FBYyxJQUFJLENBQUNILGtCQUNuQnNELGdDQUFnQ25ELFlBQVlvRCxTQUFTN0MsYUFDckRDLGdCQUFnQjJDLCtCQUFnQyxHQUFHO2dCQUV6RCxPQUFPM0M7WUFDVDs7O1lBRUEwQyxLQUFBQTttQkFBQUEsU0FBQUEsbURBQW1EdEMsZ0JBQWdCLEVBQUVPLGdCQUFnQjtnQkFDbkYsSUFBSWtDLGNBQWM7Z0JBRWxCLElBQU12QyxlQUFlLElBQUksQ0FBQ1Isc0JBQXNCTSxtQkFDMUNhLGVBQWUsSUFBSSxDQUFDbkIsc0JBQXNCYSxtQkFDMUNtQyxxQ0FBcUMsQUFBQ3hDLGlCQUFpQixRQUFVVyxpQkFBaUI7Z0JBRXhGLElBQUk2QixvQ0FBb0M7b0JBQ3RDRCxjQUFjdkMsYUFBYXlDLDRCQUE0QjlCO2dCQUN6RDtnQkFFQSxPQUFPNEI7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRcEMsSUFBSTtnQkFDVixJQUFNUixtQkFBbUJRLEtBQUtjLHVCQUN4QmYsbUJBQW1CQyxLQUFLZSx1QkFDeEJzQixVQUFVLElBQUksQ0FBQ0MsNkNBQTZDOUMsa0JBQWtCTztnQkFFcEYsSUFBSSxDQUFDc0MsU0FBUztvQkFDWixJQUFNRSxhQUFhdkMsTUFBTyxHQUFHO29CQUU3QixJQUFJLENBQUN3QyxjQUFjRDtnQkFDckI7Z0JBRUEsT0FBT0Y7WUFDVDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTaEQsS0FBSzs7Z0JBQ1pBLE1BQU1LLFFBQVEsU0FBQ0U7b0JBQ2IsTUFBS29DLFFBQVFwQztnQkFDZjtZQUNGOzs7WUFFQXdDLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjRCxVQUFVO2dCQUN0QixJQUFNRyxnQ0FBZ0NoQixJQUFBQSwrQkFBdUIsSUFBSSxDQUFDekQsYUFBYXNFO2dCQUUvRSxJQUFJLENBQUNHLCtCQUErQjtvQkFDbEMsSUFBSSxDQUFDekUsWUFBWWtDLEtBQUtvQztnQkFDeEI7WUFDRjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0J4RCxVQUFVO2dCQUM5QixJQUFNQyxnQkFBZ0IsSUFBSSxDQUFDQyw0QkFBNEJGO2dCQUV2RCxJQUFJLENBQUNDLGVBQWU7b0JBQ2xCLElBQU1SLGNBQWMsSUFBSSxDQUFDSCxrQkFDbkJtRSxvQkFBb0JoRSxZQUFZMkMsUUFDaENzQixPQUFPMUQsWUFDUDJELFFBQVFGLG1CQUNSdEQsU0FBU3lELGdCQUFPQyxpQkFBaUJILE1BQU1DO29CQUU3QyxJQUFJLENBQUNHLHNCQUFzQjlELFlBQVlHO2dCQUN6QztnQkFFQSxJQUFNQSxVQUFTLElBQUksQ0FBQ0osc0JBQXNCQztnQkFFMUMsT0FBT0c7WUFDVDs7O1lBRUE0RCxLQUFBQTttQkFBQUEsU0FBQUEseUJBQXlCL0QsVUFBVTtnQkFDakMsSUFBSWdFLGVBQWU7Z0JBRW5CLElBQU0vRCxnQkFBZ0IsSUFBSSxDQUFDQyw0QkFBNEJGO2dCQUV2RCxJQUFJQyxlQUFlO29CQUNqQitELGVBQWUsRUFBRTtvQkFFakIsSUFBTTdELFNBQVMsSUFBSSxDQUFDSixzQkFBc0JDO29CQUUxQ0csT0FBTzhELGdDQUFnQyxTQUFDQzt3QkFDdEMsSUFBTUMsNkJBQTZCaEUsUUFDN0JpRSxpQ0FBaUNELDJCQUEyQkUsV0FDNURDLDZCQUE2QkosdUJBQXVCRyxXQUNwREUsOEJBQThCSCxnQ0FDOUJJLDhCQUE4QkYsNEJBQzlCRyxjQUFjLElBQUkzRCxjQUFLeUQsNkJBQTZCQzt3QkFFMURSLGFBQWFoRCxLQUFLeUQ7d0JBRWxCUCx1QkFBdUJRLGlDQUFpQ1A7b0JBQzFEO29CQUVBaEUsT0FBT3dFLGtDQUFrQyxTQUFDUjt3QkFDeEMsSUFBTUQseUJBQXlCL0QsUUFDekJpRSxpQ0FBaUNELDJCQUEyQkUsV0FDNURDLDZCQUE2QkosdUJBQXVCRyxXQUNwREUsOEJBQThCSCxnQ0FDOUJJLDhCQUE4QkYsNEJBQzlCRyxjQUFjLElBQUkzRCxjQUFLeUQsNkJBQTZCQzt3QkFFMURSLGFBQWFoRCxLQUFLeUQ7d0JBRWxCTiwyQkFBMkJTLCtCQUErQlY7b0JBQzVEO29CQUVBLElBQUksQ0FBQ1cseUJBQXlCN0U7b0JBRTlCLElBQU04RSxnQkFBZ0IzRSxRQUNoQjRFLHFCQUFxQkQsY0FBY0UsWUFDbkMzRixXQUFXLElBQUksQ0FBQ0osZUFDaEJnRyxtQkFBbUI1RixTQUFTNkYsT0FBTyxTQUFDRCxrQkFBa0I5RTt3QkFDcEQsSUFBTWdGLGNBQWNoRixPQUFPNkUsWUFDckJJLGlCQUFrQkQsY0FBY0o7d0JBRXRDLElBQUlLLGdCQUFnQjs0QkFDbEIsSUFBTUMsaUJBQWlCbEYsUUFBUyxHQUFHOzRCQUVuQzhFLGlCQUFpQmpFLEtBQUtxRTt3QkFDeEI7d0JBRUEsT0FBT0o7b0JBQ1QsR0FBRyxFQUFFO29CQUVYQSxpQkFBaUJ0RSxRQUFRLFNBQUMwRTt3QkFDeEJBLGVBQWVDO29CQUNqQjtnQkFDRjtnQkFFQSxJQUFJLENBQUNDO2dCQUVMLE9BQU92QjtZQUNUOzs7WUFFQXdCLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXM0UsSUFBSTtvQkFBRTRFLHlCQUFBQSxpRUFBeUI7Z0JBQ3hDLElBQU1qRCxvQkFBb0IsSUFBSSxDQUFDSCxvQkFBb0J4QjtnQkFFbkQsSUFBSTJCLG1CQUFtQjtvQkFDckIsSUFBTVksYUFBYXZDLE1BQU8sR0FBRztvQkFFN0IsSUFBSSxDQUFDNkUsaUJBQWlCdEM7b0JBRXRCO2dCQUNGO2dCQUVBLElBQU1WLHVCQUF1QixJQUFJLENBQUNELHVCQUF1QjVCO2dCQUV6RCxJQUFJNkIsc0JBQXNCO29CQUN4QixJQUFNaUQsZ0JBQWdCOUUsTUFBTSxHQUFHO29CQUUvQixJQUFJLENBQUMrRSxvQkFBb0JELGVBQWVGO2dCQUMxQztZQUNGOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLFlBQVl2RixLQUFLO29CQUFFbUYseUJBQUFBLGlFQUF5Qjs7Z0JBQzFDbkYsTUFBTUssUUFBUSxTQUFDRTtvQkFDYixNQUFLMkUsV0FBVzNFLE1BQU00RTtnQkFDeEI7WUFDRjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJ0QyxVQUFVO2dCQUN6QjBDLElBQUFBLDRCQUFvQjFDLFlBQVksSUFBSSxDQUFDdEU7WUFDdkM7OztZQUVBOEcsS0FBQUE7bUJBQUFBLFNBQUFBLG9CQUFvQkQsYUFBYSxFQUFFRixzQkFBc0I7Z0JBQ3ZELElBQU1wRixtQkFBbUJzRixjQUFjaEUsdUJBQ2pDZixtQkFBbUIrRSxjQUFjL0Q7Z0JBRXZDLElBQUksQ0FBQ21FLGdEQUFnRDFGLGtCQUFrQk87Z0JBRXZFLElBQUk2RSx3QkFBd0I7b0JBQzFCLElBQU1sRixlQUFlLElBQUksQ0FBQ1Isc0JBQXNCTSxtQkFDMUNhLGVBQWUsSUFBSSxDQUFDbkIsc0JBQXNCYSxtQkFDMUNvRix1QkFBdUJ6RixhQUFhMEYsY0FDcENDLHVCQUF1QmhGLGFBQWErRTtvQkFFMUMsSUFBSUQsc0JBQXNCO3dCQUN4QixJQUFJLENBQUNqQyx5QkFBeUIxRDtvQkFDaEM7b0JBRUEsSUFBSTZGLHNCQUFzQjt3QkFDeEIsSUFBSSxDQUFDbkMseUJBQXlCbkQ7b0JBQ2hDO2dCQUNGO2dCQUVBLElBQUksQ0FBQzJFO1lBRVA7OztZQUVBWSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDdEgsWUFBWSxDQUFDO2dCQUNsQixJQUFJLENBQUNDLGNBQWMsRUFBRTtZQUN2Qjs7O1lBRUFzSCxLQUFBQTttQkFBQUEsU0FBQUEsOEJBQThCL0YsZ0JBQWdCO29CQUFFb0YseUJBQUFBLGlFQUF5QjtnQkFDdkUsSUFBTTNHLGNBQWN1SCxJQUFBQSxnQ0FBd0JoRyxrQkFBa0IsSUFBSSxDQUFDdkIsY0FDN0R3QixRQUFRLElBQUksQ0FBQ0YsMkJBQTJCQztnQkFFOUMsSUFBSSxDQUFDd0YsWUFBWS9HLGFBQWEyRztnQkFFOUIsSUFBSSxDQUFDSSxZQUFZdkYsT0FBT21GO1lBQzFCOzs7WUFFQWEsS0FBQUE7bUJBQUFBLFNBQUFBLDhCQUE4QjFGLGdCQUFnQjtvQkFBRTZFLHlCQUFBQSxpRUFBeUI7Z0JBQ3ZFLElBQU0zRyxjQUFjeUgsSUFBQUEsZ0NBQXdCM0Ysa0JBQWtCLElBQUksQ0FBQzlCLGNBQzdEd0IsUUFBUSxJQUFJLENBQUNXLDJCQUEyQkw7Z0JBRTlDLElBQUksQ0FBQ2lGLFlBQVkvRyxhQUFhMkc7Z0JBRTlCLElBQUksQ0FBQ0ksWUFBWXZGLE9BQU9tRjtZQUMxQjs7O1lBRUF0QyxLQUFBQTttQkFBQUEsU0FBQUEsNkNBQTZDOUMsZ0JBQWdCLEVBQUVPLGdCQUFnQjtnQkFDN0UsSUFBSXNDLFVBQVU7Z0JBRWQsSUFBSTdDLHFCQUFxQk8sa0JBQWtCO29CQUN6QyxJQUFNTCxlQUFlLElBQUksQ0FBQ2lELHNCQUFzQm5ELG1CQUMxQ2EsZUFBZSxJQUFJLENBQUNzQyxzQkFBc0I1QyxtQkFDMUNrQyxjQUFjdkMsYUFBYXlDLDRCQUE0QjlCO29CQUU3RCxJQUFJNEIsYUFBYTt3QkFDZkksVUFBVTtvQkFDWixPQUFPO3dCQUNMLElBQU1zRCxvQkFBb0JqRyxhQUFheUUsWUFDakN5QixvQkFBb0J2RixhQUFhOEQsWUFDakMwQixtQkFBb0JGLG9CQUFvQkM7d0JBRTlDdkQsVUFBVXdELG1CQUNFQyw4QkFBOEJwRyxjQUFjVyxnQkFDMUM7d0JBRWQsSUFBSWdDLFNBQVM7NEJBQ1gsSUFBTWlCLDZCQUE2QjVELGNBQzdCcUcsMkJBQTJCMUYsY0FBYyxHQUFHOzRCQUVsRGlELDJCQUEyQjBDLDRCQUE0QkQ7NEJBRXZEQSx5QkFBeUJFLDhCQUE4QjNDO3dCQUN6RDtvQkFDRjtnQkFDRjtnQkFFQSxPQUFPakI7WUFDVDs7O1lBRUE2QyxLQUFBQTttQkFBQUEsU0FBQUEsZ0RBQWdEMUYsZ0JBQWdCLEVBQUVPLGdCQUFnQjtnQkFDaEYsSUFBTUwsZUFBZSxJQUFJLENBQUNSLHNCQUFzQk0sbUJBQzFDYSxlQUFlLElBQUksQ0FBQ25CLHNCQUFzQmE7Z0JBRWhETCxhQUFhcUUsK0JBQStCMUQ7Z0JBRTVDQSxhQUFhd0QsaUNBQWlDbkU7WUFDaEQ7OztZQUVBZ0YsS0FBQUE7bUJBQUFBLFNBQUFBOztnQkFDRTNHLE9BQU8sSUFBSSxDQUFDRSxhQUFhLFNBQUNzRTtvQkFDeEIsSUFBTS9DLG1CQUFtQitDLFdBQVd6Qix1QkFDOUJmLG1CQUFtQndDLFdBQVd4Qix1QkFDOUJtRixzQkFBc0IsTUFBSzdHLDRCQUE0QkcsbUJBQ3ZEMkcsc0JBQXNCLE1BQUs5Ryw0QkFBNEJVO29CQUU3RCxJQUFJbUcsdUJBQXVCQyxxQkFBcUI7d0JBQzlDLE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRUFwSSxPQUFPLElBQUksQ0FBQ0UsYUFBYSxTQUFDc0U7b0JBQ3hCLElBQU12QyxPQUFPdUMsWUFDUEYsVUFBVSxNQUFLRCxRQUFRcEM7b0JBRTdCLElBQUksQ0FBQ3FDLFNBQVM7d0JBQ1osT0FBTztvQkFDVDtnQkFDRjtZQUNGOzs7WUFFQVksS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQjlELFVBQVUsRUFBRUcsTUFBTTtnQkFDdEMsSUFBSSxDQUFDdEIsU0FBUyxDQUFDbUIsV0FBVyxHQUFHRztZQUMvQjs7O1lBRUEwRSxLQUFBQTttQkFBQUEsU0FBQUEseUJBQXlCN0UsVUFBVTtnQkFDakMsT0FBTyxJQUFJLENBQUNuQixTQUFTLENBQUNtQixXQUFXO1lBQ25DOzs7O1lBRU9pSCxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNcEksWUFBWSxDQUFDLEdBQ2JDLGNBQWMsRUFBRSxFQUNoQm9JLGdCQUFnQixJQXJhTDFJLGNBcWF1QkssV0FBV0M7Z0JBRW5ELE9BQU9vSTtZQUNUOzs7V0F4YW1CMUk7O0FBMmFyQixTQUFTbUksOEJBQThCcEcsWUFBWSxFQUFFVyxZQUFZO0lBQy9ELElBQUlnQyxVQUFVO0lBRWQsSUFBTWlFLDJCQUEyQmpHLGFBQWFrRyxpQ0FBaUM3RyxlQUN6RThHLDZCQUE2QjVJLEtBQUswSSwyQkFDbENHLGlCQUFrQkQsK0JBQStCOUc7SUFFdkQsSUFBSSxDQUFDK0csZ0JBQWdCO1FBQ25CLElBQU1DLDRCQUE0QmhILGFBQWFpSDtRQUUvQzdILElBQUFBLHdCQUFjNEg7UUFFZDVILElBQUFBLHdCQUFjd0g7UUFFZCxJQUFNbEMsbUJBQW1CLEVBQUUsQ0FBQ3dDLE9BQU9GLDJCQUEyQkUsT0FBT04sMkJBQy9ETyx3QkFBd0J6QyxpQkFBaUIwQyxJQUFJLFNBQUN0QztZQUM1QyxJQUFNdUMsc0JBQXNCdkMsZUFBZUw7WUFFM0MsT0FBTzRDO1FBQ1Q7UUFFTkYsc0JBQXNCRyxLQUFLLFNBQUNDLFFBQVFDO1lBQ2xDLElBQUksT0FBTztZQUNULEdBQUc7WUFDTCxPQUFPLElBQUlELFNBQVNDLFFBQVE7Z0JBQzFCLE9BQU8sQ0FBQztZQUNWLE9BQU8sSUFBSUQsU0FBU0MsUUFBUTtnQkFDMUIsT0FBTyxDQUFDO1lBQ1YsT0FBTztnQkFDTCxPQUFPO1lBQ1Q7UUFDRjtRQUVBOUMsaUJBQWlCdEUsUUFBUSxTQUFDMEUsZ0JBQWdCMUI7WUFDeEMsSUFBTWlFLHNCQUFzQkYscUJBQXFCLENBQUMvRCxNQUFNO1lBRXhEMEIsZUFBZTJDLFNBQVNKO1FBQzFCO1FBRUExRSxVQUFVO0lBQ1o7SUFFQSxPQUFPQTtBQUNUIn0=