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
                var sourceVertexName = edge.getSourceVertexName(), targetVertexName = edge.getTargetVertexName(), sourceVertex = this.getVertexByVertexName(sourceVertexName), targetVertex = this.getVertexByVertexName(targetVertexName), sourceVertexAndTargetVertexPresent = sourceVertex !== null && targetVertex !== null;
                if (sourceVertexAndTargetVertexPresent) {
                    nonCyclicEdgePresent = sourceVertex.isEdgePresentByTargetVertex(targetVertex);
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
            key: "addEdge",
            value: function addEdge(edge) {
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
            key: "addNonCyclicEdge",
            value: function addNonCyclicEdge(nonCyclicEdge) {
                var success = false;
                var sourceVertexName = nonCyclicEdge.getSourceVertexName(), targetVertexName = nonCyclicEdge.getTargetVertexName();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kaXJlY3RlZEdyYXBoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEVkZ2UgZnJvbSBcIi4vZWRnZVwiO1xuaW1wb3J0IEN5Y2xlIGZyb20gXCIuL2N5Y2xlXCI7XG5pbXBvcnQgVmVydGV4IGZyb20gXCIuL3ZlcnRleFwiO1xuXG5pbXBvcnQgeyBvcmRlclZlcnRleGVzLCB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhlcyB9IGZyb20gXCIuL3V0aWxpdGllcy92ZXJ0ZXhcIjtcbmltcG9ydCB7IHJlbW92ZUVkZ2VGcm9tRWRnZXMsIGNoZWNrRWRnZXNJbmNsdWRlc0VkZ2UsIGVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lLCBlZGdlc0J5VGFyZ2V0VmVydGV4TmFtZSB9IGZyb20gXCIuL3V0aWxpdGllcy9lZGdlXCI7XG5cbmNvbnN0IHsgbGFzdCwgZmlyc3QsIGZpbHRlciB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdGVkR3JhcGgge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhNYXAsIGN5Y2xpY0VkZ2VzKSB7XG4gICAgdGhpcy52ZXJ0ZXhNYXAgPSB2ZXJ0ZXhNYXA7XG4gICAgdGhpcy5jeWNsaWNFZGdlcyA9IGN5Y2xpY0VkZ2VzO1xuICB9XG5cbiAgZ2V0VmVydGV4TmFwKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleE1hcDtcbiAgfVxuXG4gIGdldEN5Y2xpY0VkZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLmN5Y2xpY0VkZ2VzO1xuICB9XG5cbiAgZ2V0VmVydGV4ZXMoKSB7XG4gICAgY29uc3QgdmVydGV4TWFwVmFsdWVzID0gT2JqZWN0LnZhbHVlcyh0aGlzLnZlcnRleE1hcCksXG4gICAgICAgICAgdmVydGV4ZXMgPSB2ZXJ0ZXhNYXBWYWx1ZXM7IC8vL1xuXG4gICAgcmV0dXJuIHZlcnRleGVzO1xuICB9XG5cbiAgZ2V0VmVydGV4TmFtZXMoKSB7XG4gICAgY29uc3QgdmVydGV4TWFwS2V5cyA9IE9iamVjdC5rZXlzKHRoaXMudmVydGV4TWFwKSxcbiAgICAgICAgICB2ZXJ0ZXhOYW1lcyA9IHZlcnRleE1hcEtleXM7ICAvLy9cblxuICAgIHJldHVybiB2ZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGdldE9yZGVyZWRWZXJ0ZXhOYW1lcygpIHtcbiAgICBjb25zdCB2ZXJ0ZXhlcyA9IHRoaXMuZ2V0VmVydGV4ZXMoKTtcblxuICAgIG9yZGVyVmVydGV4ZXModmVydGV4ZXMpO1xuXG4gICAgY29uc3Qgb3JkZXJlZFZlcnRleGVzID0gdmVydGV4ZXMsIC8vL1xuICAgICAgICAgIG9yZGVyZWRWZXJ0ZXhOYW1lcyA9IHZlcnRleE5hbWVzRnJvbVZlcnRleGVzKG9yZGVyZWRWZXJ0ZXhlcyk7XG5cbiAgICByZXR1cm4gb3JkZXJlZFZlcnRleE5hbWVzO1xuICB9XG5cbiAgZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQcmVzZW50ID0gdGhpcy5pc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUodmVydGV4TmFtZSksXG4gICAgICAgICAgdmVydGV4ID0gdmVydGV4UHJlc2VudCA/XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLnZlcnRleE1hcFt2ZXJ0ZXhOYW1lXSA6XG4gICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgICByZXR1cm4gdmVydGV4O1xuICB9XG5cbiAgZ2V0RWRnZXNCeVNvdXJjZVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSkge1xuICAgIGNvbnN0IGVkZ2VzID0gW10sXG4gICAgICAgICAgc291cmNlVmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSk7XG5cbiAgICBpZiAoc291cmNlVmVydGV4ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcyA9IHNvdXJjZVZlcnRleC5nZXRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcygpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZXMgPSBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lczsgIC8vL1xuXG4gICAgICB0YXJnZXRWZXJ0ZXhOYW1lcy5mb3JFYWNoKCh0YXJnZXRWZXJ0ZXhOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGVkZ2UgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgICBlZGdlcy5wdXNoKGVkZ2UpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVkZ2VzO1xuICB9XG5cbiAgZ2V0RWRnZXNCeVRhcmdldFZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSkge1xuICAgIGNvbnN0IGVkZ2VzID0gW10sXG4gICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICBpZiAodGFyZ2V0VmVydGV4ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzID0gdGFyZ2V0VmVydGV4LmdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMoKSxcbiAgICAgICAgICAgIHNvdXJjZVZlcnRleE5hbWVzID0gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lczsgIC8vL1xuXG4gICAgICBzb3VyY2VWZXJ0ZXhOYW1lcy5mb3JFYWNoKChzb3VyY2VWZXJ0ZXhOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGVkZ2UgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgICBlZGdlcy5wdXNoKGVkZ2UpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVkZ2VzO1xuICB9XG5cbiAgZ2V0Rmlyc3RDeWNsZSgpIHtcbiAgICBsZXQgZmlyc3RDeWNsZSA9IG51bGw7XG5cbiAgICBjb25zdCBjeWNsZXNQcmVzZW50ID0gdGhpcy5hcmVDeWNsZXNQcmVzZW50KCk7XG5cbiAgICBpZiAoY3ljbGVzUHJlc2VudCkge1xuICAgICAgY29uc3QgZmlyc3RDeWNsaWNFZGdlID0gZmlyc3QodGhpcy5jeWNsaWNFZGdlcyksXG4gICAgICAgICAgICBzb3VyY2VWZXJ0ZXhOYW1lID0gZmlyc3RDeWNsaWNFZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSwgLy8vXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gZmlyc3RDeWNsaWNFZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKSwgLy8vXG4gICAgICAgICAgICBzb3VyY2VWZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgICB0YXJnZXRWZXJ0ZXguZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoKCh2ZXJ0ZXgsIHByZWRlY2Vzc29yVmVydGV4ZXMpID0+IHtcbiAgICAgICAgbGV0IHRlcm1pbmF0ZSA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh2ZXJ0ZXggPT09IHNvdXJjZVZlcnRleCkge1xuICAgICAgICAgIHRlcm1pbmF0ZSA9IHRydWU7XG5cbiAgICAgICAgICBjb25zdCBjeWNsZSA9IEN5Y2xlLmZyb21Tb3VyY2VWZXJ0ZXhBbmRQcmVkZWNlc3NvclZlcnRleGVzKHNvdXJjZVZlcnRleCwgcHJlZGVjZXNzb3JWZXJ0ZXhlcyk7ICAvLy9cblxuICAgICAgICAgIGZpcnN0Q3ljbGUgPSBjeWNsZTsgLy8vXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGVybWluYXRlO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpcnN0Q3ljbGU7XG4gIH1cblxuICBhcmVDeWNsZXNQcmVzZW50KCkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VzTGVuZ3RoID0gdGhpcy5jeWNsaWNFZGdlcy5sZW5ndGgsXG4gICAgICAgICAgY3ljbGVzUHJlc2VudCA9IChjeWNsaWNFZGdlc0xlbmd0aCA+IDApO1xuXG4gICAgcmV0dXJuIGN5Y2xlc1ByZXNlbnQ7XG4gIH1cblxuICBpc0VkZ2VQcmVzZW50KGVkZ2UpIHtcbiAgICBsZXQgZWRnZVByZXNlbnQgPSBmYWxzZTtcblxuICAgIGlmICghZWRnZVByZXNlbnQpIHtcbiAgICAgIGNvbnN0IGN5Y2xpY0VkZ2UgPSBlZGdlLCAgLy8vXG4gICAgICAgICAgICBjeWNsaWNFZGdlUHJlc2VudCA9IHRoaXMuaXNDeWNsaWNFZGdlUHJlc2VudChjeWNsaWNFZGdlKTtcblxuICAgICAgZWRnZVByZXNlbnQgPSBjeWNsaWNFZGdlUHJlc2VudDsgIC8vL1xuICAgIH1cblxuICAgIGlmICghZWRnZVByZXNlbnQpIHtcbiAgICAgIGNvbnN0IG5vbkN5Y2xpY0VkZ2UgPSBlZGdlLCAvLy9cbiAgICAgICAgICAgIG5vbkN5Y2xpY0VkZ2VQcmVzZW50ID0gdGhpcy5pc05vbkN5Y2xpY0VkZ2VQcmVzZW50KG5vbkN5Y2xpY0VkZ2UpO1xuXG4gICAgICBlZGdlUHJlc2VudCA9IG5vbkN5Y2xpY0VkZ2VQcmVzZW50OyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gZWRnZVByZXNlbnQ7XG4gIH1cblxuICBpc0N5Y2xpY0VkZ2VQcmVzZW50KGN5Y2xpY0VkZ2UpIHtcbiAgICBjb25zdCBjeWNsaWNFZGdlc0luY2x1ZGVzRWRnZSA9IGNoZWNrRWRnZXNJbmNsdWRlc0VkZ2UodGhpcy5jeWNsaWNFZGdlcywgY3ljbGljRWRnZSksXG4gICAgICAgICAgY3ljbGljRWRnZVByZXNlbnQgPSBjeWNsaWNFZGdlc0luY2x1ZGVzRWRnZTsgIC8vL1xuXG4gICAgcmV0dXJuIGN5Y2xpY0VkZ2VQcmVzZW50O1xuICB9XG5cbiAgaXNOb25DeWNsaWNFZGdlUHJlc2VudChlZGdlKSB7XG4gICAgbGV0IG5vbkN5Y2xpY0VkZ2VQcmVzZW50ID0gZmFsc2U7XG5cbiAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gZWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IGVkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgIHNvdXJjZVZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpLFxuICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpLFxuICAgICAgICAgIHNvdXJjZVZlcnRleEFuZFRhcmdldFZlcnRleFByZXNlbnQgPSAoc291cmNlVmVydGV4ICE9PSBudWxsKSAmJiAodGFyZ2V0VmVydGV4ICE9PSBudWxsKTtcblxuICAgIGlmIChzb3VyY2VWZXJ0ZXhBbmRUYXJnZXRWZXJ0ZXhQcmVzZW50KSB7XG4gICAgICBub25DeWNsaWNFZGdlUHJlc2VudCA9IHNvdXJjZVZlcnRleC5pc0VkZ2VQcmVzZW50QnlUYXJnZXRWZXJ0ZXgodGFyZ2V0VmVydGV4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9uQ3ljbGljRWRnZVByZXNlbnQ7XG4gIH1cblxuICBpc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGNvbnN0IHZlcnRleE5hbWVzID0gdGhpcy5nZXRWZXJ0ZXhOYW1lcygpLFxuICAgICAgICAgIHZlcnRleE5hbWVzSW5jbHVkZXNWZXJ0ZXhOYW1lID0gdmVydGV4TmFtZXMuaW5jbHVkZXModmVydGV4TmFtZSksXG4gICAgICAgICAgdmVydGV4UHJlc2VudCA9IHZlcnRleE5hbWVzSW5jbHVkZXNWZXJ0ZXhOYW1lOyAgLy8vXG5cbiAgICByZXR1cm4gdmVydGV4UHJlc2VudDtcbiAgfVxuXG4gIGFkZEVkZ2UoZWRnZSkge1xuICAgIGNvbnN0IG5vbkN5Y2xpY0VkZ2UgPSBlZGdlLCAvLy9cbiAgICAgICAgICBzdWNjZXNzID0gdGhpcy5hZGROb25DeWNsaWNFZGdlKG5vbkN5Y2xpY0VkZ2UpO1xuXG4gICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICBjb25zdCBjeWNsaWNFZGdlID0gZWRnZTsgIC8vL1xuXG4gICAgICB0aGlzLmFkZEN5Y2xpY0VkZ2UoY3ljbGljRWRnZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1Y2Nlc3M7XG4gIH1cblxuICBhZGRFZGdlcyhlZGdlcykge1xuICAgIGVkZ2VzLmZvckVhY2goKGVkZ2UpID0+IHtcbiAgICAgIHRoaXMuYWRkRWRnZShlZGdlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZEN5Y2xpY0VkZ2UoY3ljbGljRWRnZSkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VzSW5jbHVkZXNDeWNsaWNFZGdlID0gY2hlY2tFZGdlc0luY2x1ZGVzRWRnZSh0aGlzLmN5Y2xpY0VkZ2VzLCBjeWNsaWNFZGdlKTtcblxuICAgIGlmICghY3ljbGljRWRnZXNJbmNsdWRlc0N5Y2xpY0VkZ2UpIHtcbiAgICAgIHRoaXMuY3ljbGljRWRnZXMucHVzaChjeWNsaWNFZGdlKTtcbiAgICB9XG4gIH1cblxuICBhZGRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGNvbnN0IHZlcnRleFByZXNlbnQgPSB0aGlzLmlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgIGlmICghdmVydGV4UHJlc2VudCkge1xuICAgICAgY29uc3QgdmVydGV4TmFtZXMgPSB0aGlzLmdldFZlcnRleE5hbWVzKCksXG4gICAgICAgICAgICB2ZXJ0ZXhOYW1lc0xlbmd0aCA9IHZlcnRleE5hbWVzLmxlbmd0aCxcbiAgICAgICAgICAgIG5hbWUgPSB2ZXJ0ZXhOYW1lLCAgLy8vXG4gICAgICAgICAgICBpbmRleCA9IHZlcnRleE5hbWVzTGVuZ3RoLCAvLy9cbiAgICAgICAgICAgIHZlcnRleCA9IFZlcnRleC5mcm9tTmFtZUFuZEluZGV4KG5hbWUsIGluZGV4KTtcblxuICAgICAgdGhpcy5zZXRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSwgdmVydGV4KTtcbiAgICB9XG5cbiAgICBjb25zdCB2ZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgIHJldHVybiB2ZXJ0ZXg7XG4gIH1cblxuICByZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGxldCByZW1vdmVkRWRnZXMgPSBudWxsO1xuXG4gICAgY29uc3QgdmVydGV4UHJlc2VudCA9IHRoaXMuaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgaWYgKHZlcnRleFByZXNlbnQpIHtcbiAgICAgIHJlbW92ZWRFZGdlcyA9IFtdO1xuXG4gICAgICBjb25zdCB2ZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgICAgdmVydGV4LmZvckVhY2hJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoKGltbWVkaWF0ZVN1Y2Nlc3NWZXJ0ZXgpID0+IHtcbiAgICAgICAgY29uc3QgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXggPSB2ZXJ0ZXgsICAvLy9cbiAgICAgICAgICAgICAgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lID0gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXguZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICBpbW1lZGlhdGVTdWNjZXNzVmVydGV4TmFtZSA9IGltbWVkaWF0ZVN1Y2Nlc3NWZXJ0ZXguZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICByZW1vdmVkRWRnZVNvdXJjZVZlcnRleE5hbWUgPSBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWUsIC8vL1xuICAgICAgICAgICAgICByZW1vdmVkRWRnZVRhcmdldFZlcnRleE5hbWUgPSBpbW1lZGlhdGVTdWNjZXNzVmVydGV4TmFtZSwgLy8vXG4gICAgICAgICAgICAgIHJlbW92ZWRFZGdlID0gbmV3IEVkZ2UocmVtb3ZlZEVkZ2VTb3VyY2VWZXJ0ZXhOYW1lLCByZW1vdmVkRWRnZVRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgICAgIHJlbW92ZWRFZGdlcy5wdXNoKHJlbW92ZWRFZGdlKTtcblxuICAgICAgICBpbW1lZGlhdGVTdWNjZXNzVmVydGV4LnJlbW92ZUltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KTtcbiAgICAgIH0pO1xuXG4gICAgICB2ZXJ0ZXguZm9yRWFjaEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCkgPT4ge1xuICAgICAgICBjb25zdCBpbW1lZGlhdGVTdWNjZXNzVmVydGV4ID0gdmVydGV4LCAgLy8vXG4gICAgICAgICAgICAgIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZSA9IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4LmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgaW1tZWRpYXRlU3VjY2Vzc1ZlcnRleE5hbWUgPSBpbW1lZGlhdGVTdWNjZXNzVmVydGV4LmdldE5hbWUoKSwgIC8vL1xuICAgICAgICAgICAgICByZW1vdmVkRWRnZVNvdXJjZVZlcnRleE5hbWUgPSBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWUsIC8vL1xuICAgICAgICAgICAgICByZW1vdmVkRWRnZVRhcmdldFZlcnRleE5hbWUgPSBpbW1lZGlhdGVTdWNjZXNzVmVydGV4TmFtZSwgLy8vXG4gICAgICAgICAgICAgIHJlbW92ZWRFZGdlID0gbmV3IEVkZ2UocmVtb3ZlZEVkZ2VTb3VyY2VWZXJ0ZXhOYW1lLCByZW1vdmVkRWRnZVRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgICAgIHJlbW92ZWRFZGdlcy5wdXNoKHJlbW92ZWRFZGdlKTtcblxuICAgICAgICBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleC5yZW1vdmVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoaW1tZWRpYXRlU3VjY2Vzc1ZlcnRleCk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5kZWxldGVWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICAgIGNvbnN0IGRlbGV0ZWRWZXJ0ZXggPSB2ZXJ0ZXgsIC8vL1xuICAgICAgICAgICAgZGVsZXRlZFZlcnRleEluZGV4ID0gZGVsZXRlZFZlcnRleC5nZXRJbmRleCgpLFxuICAgICAgICAgICAgdmVydGV4ZXMgPSB0aGlzLmdldFZlcnRleGVzKCksXG4gICAgICAgICAgICBhZmZlY3RlZFZlcnRleGVzID0gdmVydGV4ZXMucmVkdWNlKChhZmZlY3RlZFZlcnRleGVzLCB2ZXJ0ZXgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgdmVydGV4SW5kZXggPSB2ZXJ0ZXguZ2V0SW5kZXgoKSxcbiAgICAgICAgICAgICAgICAgICAgdmVydGV4QWZmZWN0ZWQgPSAodmVydGV4SW5kZXggPiBkZWxldGVkVmVydGV4SW5kZXgpO1xuXG4gICAgICAgICAgICAgIGlmICh2ZXJ0ZXhBZmZlY3RlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFmZmVjdGVkVmVydGV4ID0gdmVydGV4OyAgLy8vXG5cbiAgICAgICAgICAgICAgICBhZmZlY3RlZFZlcnRleGVzLnB1c2goYWZmZWN0ZWRWZXJ0ZXgpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIGFmZmVjdGVkVmVydGV4ZXM7XG4gICAgICAgICAgICB9LCBbXSk7XG5cbiAgICAgIGFmZmVjdGVkVmVydGV4ZXMuZm9yRWFjaCgoYWZmZWN0ZWRWZXJ0ZXgpID0+IHtcbiAgICAgICAgYWZmZWN0ZWRWZXJ0ZXguZGVjcmVtZW50SW5kZXgoKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuZmlsdGVyQ3ljbGljRWRnZXMoKTtcblxuICAgIHJldHVybiByZW1vdmVkRWRnZXM7XG4gIH1cblxuICByZW1vdmVFZGdlKGVkZ2UsIHJlbW92ZVN0cmFuZGVkVmVydGV4ZXMgPSBmYWxzZSkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2UgPSBlZGdlLCAgLy8vXG4gICAgICAgICAgY3ljbGljRWRnZVByZXNlbnQgPSB0aGlzLmlzQ3ljbGljRWRnZVByZXNlbnQoY3ljbGljRWRnZSk7XG5cbiAgICBpZiAoY3ljbGljRWRnZVByZXNlbnQpIHtcbiAgICAgIHRoaXMucmVtb3ZlQ3ljbGljRWRnZShjeWNsaWNFZGdlKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5vbkN5Y2xpY0VkZ2UgPSBlZGdlLCAvLy9cbiAgICAgICAgICBub25DeWNsaWNFZGdlUHJlc2VudCA9IHRoaXMuaXNOb25DeWNsaWNFZGdlUHJlc2VudChub25DeWNsaWNFZGdlKTtcblxuICAgIGlmIChub25DeWNsaWNFZGdlUHJlc2VudCkge1xuICAgICAgdGhpcy5yZW1vdmVOb25DeWNsaWNFZGdlKG5vbkN5Y2xpY0VkZ2UsIHJlbW92ZVN0cmFuZGVkVmVydGV4ZXMpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUVkZ2VzKGVkZ2VzLCByZW1vdmVTdHJhbmRlZFZlcnRleGVzID0gZmFsc2UpIHtcbiAgICBlZGdlcy5mb3JFYWNoKChlZGdlKSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZUVkZ2UoZWRnZSwgcmVtb3ZlU3RyYW5kZWRWZXJ0ZXhlcyk7XG4gICAgfSk7XG4gIH1cblxuICByZW1vdmVDeWNsaWNFZGdlKGN5Y2xpY0VkZ2UpIHtcbiAgICByZW1vdmVFZGdlRnJvbUVkZ2VzKGN5Y2xpY0VkZ2UsIHRoaXMuY3ljbGljRWRnZXMpO1xuICB9XG5cbiAgcmVtb3ZlTm9uQ3ljbGljRWRnZShub25DeWNsaWNFZGdlLCByZW1vdmVTdHJhbmRlZFZlcnRleGVzKSB7XG4gICAgY29uc3Qgc291cmNlVmVydGV4TmFtZSA9IG5vbkN5Y2xpY0VkZ2UuZ2V0U291cmNlVmVydGV4TmFtZSgpLFxuICAgICAgICAgIHRhcmdldFZlcnRleE5hbWUgPSBub25DeWNsaWNFZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKTtcblxuICAgIHRoaXMucmVtb3ZlRWRnZUJ5U291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICBpZiAocmVtb3ZlU3RyYW5kZWRWZXJ0ZXhlcykge1xuICAgICAgY29uc3Qgc291cmNlVmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSksXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICAgIHNvdXJjZVZlcnRleFN0cmFuZGVkID0gc291cmNlVmVydGV4LmlzU3RyYW5kZWQoKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleFN0cmFuZGVkID0gdGFyZ2V0VmVydGV4LmlzU3RyYW5kZWQoKTtcblxuICAgICAgaWYgKHNvdXJjZVZlcnRleFN0cmFuZGVkKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGFyZ2V0VmVydGV4U3RyYW5kZWQpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5maWx0ZXJDeWNsaWNFZGdlcygpO1xuICB9XG5cbiAgcmVtb3ZlQWxsRWRnZXNBbmRWZXJ0ZXhlcygpIHtcbiAgICB0aGlzLnZlcnRleE1hcCA9IHt9O1xuICAgIHRoaXMuY3ljbGljRWRnZXMgPSBbXTtcbiAgfVxuXG4gIHJlbW92ZUVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUsIHJlbW92ZVN0cmFuZGVkVmVydGV4ZXMgPSBmYWxzZSkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VzID0gZWRnZXNCeVNvdXJjZVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGhpcy5jeWNsaWNFZGdlcyksXG4gICAgICAgICAgZWRnZXMgPSB0aGlzLmdldEVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpO1xuXG4gICAgdGhpcy5yZW1vdmVFZGdlcyhjeWNsaWNFZGdlcywgcmVtb3ZlU3RyYW5kZWRWZXJ0ZXhlcyk7XG5cbiAgICB0aGlzLnJlbW92ZUVkZ2VzKGVkZ2VzLCByZW1vdmVTdHJhbmRlZFZlcnRleGVzKTtcbiAgfVxuXG4gIHJlbW92ZUVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUsIHJlbW92ZVN0cmFuZGVkVmVydGV4ZXMgPSBmYWxzZSkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VzID0gZWRnZXNCeVRhcmdldFZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSwgdGhpcy5jeWNsaWNFZGdlcyksXG4gICAgICAgICAgZWRnZXMgPSB0aGlzLmdldEVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgdGhpcy5yZW1vdmVFZGdlcyhjeWNsaWNFZGdlcywgcmVtb3ZlU3RyYW5kZWRWZXJ0ZXhlcyk7XG5cbiAgICB0aGlzLnJlbW92ZUVkZ2VzKGVkZ2VzLCByZW1vdmVTdHJhbmRlZFZlcnRleGVzKTtcbiAgfVxuXG4gIGFkZE5vbkN5Y2xpY0VkZ2Uobm9uQ3ljbGljRWRnZSkge1xuICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gbm9uQ3ljbGljRWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IG5vbkN5Y2xpY0VkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpO1xuXG4gICAgaWYgKHNvdXJjZVZlcnRleE5hbWUgIT09IHRhcmdldFZlcnRleE5hbWUpIHtcbiAgICAgIGNvbnN0IHNvdXJjZVZlcnRleCA9IHRoaXMuYWRkVmVydGV4QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdGhpcy5hZGRWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSksXG4gICAgICAgICAgICBlZGdlUHJlc2VudCA9IHNvdXJjZVZlcnRleC5pc0VkZ2VQcmVzZW50QnlUYXJnZXRWZXJ0ZXgodGFyZ2V0VmVydGV4KTtcblxuICAgICAgaWYgKGVkZ2VQcmVzZW50KSB7XG4gICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgc291cmNlVmVydGV4SW5kZXggPSBzb3VyY2VWZXJ0ZXguZ2V0SW5kZXgoKSxcbiAgICAgICAgICAgICAgdGFyZ2V0VmVydGV4SW5kZXggPSB0YXJnZXRWZXJ0ZXguZ2V0SW5kZXgoKSxcbiAgICAgICAgICAgICAgaW52YWxpZGF0aW5nRWRnZSA9IChzb3VyY2VWZXJ0ZXhJbmRleCA+IHRhcmdldFZlcnRleEluZGV4KTtcblxuICAgICAgICBzdWNjZXNzID0gaW52YWxpZGF0aW5nRWRnZSA/XG4gICAgICAgICAgICAgICAgICAgIGFkZEludmFsaWRhdGluZ0VkZ2VCeVZlcnRleGVzKHNvdXJjZVZlcnRleCwgdGFyZ2V0VmVydGV4KSA6XG4gICAgICAgICAgICAgICAgICAgICAgdHJ1ZTtcblxuICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgIGNvbnN0IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ID0gc291cmNlVmVydGV4LCAvLy9cbiAgICAgICAgICAgICAgICBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXggPSB0YXJnZXRWZXJ0ZXg7IC8vL1xuXG4gICAgICAgICAgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXguYWRkSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCk7XG5cbiAgICAgICAgICBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXguYWRkSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1Y2Nlc3M7XG4gIH1cblxuICByZW1vdmVFZGdlQnlTb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3Qgc291cmNlVmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSksXG4gICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICBzb3VyY2VWZXJ0ZXgucmVtb3ZlSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KHRhcmdldFZlcnRleCk7XG5cbiAgICB0YXJnZXRWZXJ0ZXgucmVtb3ZlSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgoc291cmNlVmVydGV4KTtcbiAgfVxuXG4gIGZpbHRlckN5Y2xpY0VkZ2VzKCkge1xuICAgIGZpbHRlcih0aGlzLmN5Y2xpY0VkZ2VzLCAoY3ljbGljRWRnZSkgPT4ge1xuICAgICAgY29uc3Qgc291cmNlVmVydGV4TmFtZSA9IGN5Y2xpY0VkZ2UuZ2V0U291cmNlVmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IGN5Y2xpY0VkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgc291cmNlVmVydGV4UHJlc2VudCA9IHRoaXMuaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4UHJlc2VudCA9IHRoaXMuaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgICBpZiAoc291cmNlVmVydGV4UHJlc2VudCAmJiB0YXJnZXRWZXJ0ZXhQcmVzZW50KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZmlsdGVyKHRoaXMuY3ljbGljRWRnZXMsIChjeWNsaWNFZGdlKSA9PiB7XG4gICAgICBjb25zdCBlZGdlID0gY3ljbGljRWRnZSwgIC8vL1xuICAgICAgICAgICAgc3VjY2VzcyA9IHRoaXMuYWRkRWRnZShlZGdlKTtcblxuICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUsIHZlcnRleCkge1xuICAgIHRoaXMudmVydGV4TWFwW3ZlcnRleE5hbWVdID0gdmVydGV4O1xuICB9XG5cbiAgZGVsZXRlVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBkZWxldGUgdGhpcy52ZXJ0ZXhNYXBbdmVydGV4TmFtZV07XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgdmVydGV4TWFwID0ge30sXG4gICAgICAgICAgY3ljbGljRWRnZXMgPSBbXSxcbiAgICAgICAgICBkaXJlY3RlZEdyYXBoID0gbmV3IERpcmVjdGVkR3JhcGgodmVydGV4TWFwLCBjeWNsaWNFZGdlcyk7XG4gICAgXG4gICAgcmV0dXJuIGRpcmVjdGVkR3JhcGg7ICAgIFxuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEludmFsaWRhdGluZ0VkZ2VCeVZlcnRleGVzKHNvdXJjZVZlcnRleCwgdGFyZ2V0VmVydGV4KSB7XG4gIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgY29uc3QgZm9yd2FyZHNBZmZlY3RlZFZlcnRleGVzID0gdGFyZ2V0VmVydGV4LnJldHJpZXZlRm9yd2FyZHNBZmZlY3RlZFZlcnRleGVzKHNvdXJjZVZlcnRleCksXG4gICAgICAgIGxhc3RGb3J3YXJkc0FmZmVjdGVkVmVydGV4ID0gbGFzdChmb3J3YXJkc0FmZmVjdGVkVmVydGV4ZXMpLFxuICAgICAgICByZXN1bHRzSW5DeWNsZSA9IChsYXN0Rm9yd2FyZHNBZmZlY3RlZFZlcnRleCA9PT0gc291cmNlVmVydGV4KTtcblxuICBpZiAoIXJlc3VsdHNJbkN5Y2xlKSB7XG4gICAgY29uc3QgYmFja3dhcmRzQWZmZWN0ZWRWZXJ0ZXhlcyA9IHNvdXJjZVZlcnRleC5yZXRyaWV2ZUJhY2t3YXJkc0FmZmVjdGVkVmVydGV4ZXMoKTtcblxuICAgIG9yZGVyVmVydGV4ZXMoYmFja3dhcmRzQWZmZWN0ZWRWZXJ0ZXhlcyk7XG5cbiAgICBvcmRlclZlcnRleGVzKGZvcndhcmRzQWZmZWN0ZWRWZXJ0ZXhlcyk7XG5cbiAgICBjb25zdCBhZmZlY3RlZFZlcnRleGVzID0gW10uY29uY2F0KGJhY2t3YXJkc0FmZmVjdGVkVmVydGV4ZXMpLmNvbmNhdChmb3J3YXJkc0FmZmVjdGVkVmVydGV4ZXMpLFxuICAgICAgICAgIGFmZmVjdGVkVmVydGV4SW5kaWNlcyA9IGFmZmVjdGVkVmVydGV4ZXMubWFwKChhZmZlY3RlZFZlcnRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYWZmZWN0ZWRWZXJ0ZXhJbmRleCA9IGFmZmVjdGVkVmVydGV4LmdldEluZGV4KCk7XG5cbiAgICAgICAgICAgIHJldHVybiBhZmZlY3RlZFZlcnRleEluZGV4O1xuICAgICAgICAgIH0pO1xuXG4gICAgYWZmZWN0ZWRWZXJ0ZXhJbmRpY2VzLnNvcnQoKGluZGV4QSwgaW5kZXhCKSA9PiB7XG4gICAgICBpZiAoZmFsc2UpIHtcbiAgICAgICAgLy8vXG4gICAgICB9IGVsc2UgaWYgKGluZGV4QSA8IGluZGV4Qikge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9IGVsc2UgaWYgKGluZGV4QSA+IGluZGV4Qikge1xuICAgICAgICByZXR1cm4gKzE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGFmZmVjdGVkVmVydGV4ZXMuZm9yRWFjaCgoYWZmZWN0ZWRWZXJ0ZXgsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBhZmZlY3RlZFZlcnRleEluZGV4ID0gYWZmZWN0ZWRWZXJ0ZXhJbmRpY2VzW2luZGV4XTtcblxuICAgICAgYWZmZWN0ZWRWZXJ0ZXguc2V0SW5kZXgoYWZmZWN0ZWRWZXJ0ZXhJbmRleCk7XG4gICAgfSk7XG5cbiAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBzdWNjZXNzO1xufVxuIl0sIm5hbWVzIjpbIkRpcmVjdGVkR3JhcGgiLCJsYXN0IiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsImZpbHRlciIsInZlcnRleE1hcCIsImN5Y2xpY0VkZ2VzIiwiZ2V0VmVydGV4TmFwIiwiZ2V0Q3ljbGljRWRnZXMiLCJnZXRWZXJ0ZXhlcyIsInZlcnRleE1hcFZhbHVlcyIsIk9iamVjdCIsInZhbHVlcyIsInZlcnRleGVzIiwiZ2V0VmVydGV4TmFtZXMiLCJ2ZXJ0ZXhNYXBLZXlzIiwia2V5cyIsInZlcnRleE5hbWVzIiwiZ2V0T3JkZXJlZFZlcnRleE5hbWVzIiwib3JkZXJWZXJ0ZXhlcyIsIm9yZGVyZWRWZXJ0ZXhlcyIsIm9yZGVyZWRWZXJ0ZXhOYW1lcyIsInZlcnRleE5hbWVzRnJvbVZlcnRleGVzIiwiZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lIiwidmVydGV4TmFtZSIsInZlcnRleFByZXNlbnQiLCJpc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUiLCJ2ZXJ0ZXgiLCJnZXRFZGdlc0J5U291cmNlVmVydGV4TmFtZSIsInNvdXJjZVZlcnRleE5hbWUiLCJlZGdlcyIsInNvdXJjZVZlcnRleCIsImltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzIiwiZ2V0SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXMiLCJ0YXJnZXRWZXJ0ZXhOYW1lcyIsImZvckVhY2giLCJ0YXJnZXRWZXJ0ZXhOYW1lIiwiZWRnZSIsIkVkZ2UiLCJmcm9tU291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUiLCJwdXNoIiwiZ2V0RWRnZXNCeVRhcmdldFZlcnRleE5hbWUiLCJ0YXJnZXRWZXJ0ZXgiLCJpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzIiwiZ2V0SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcyIsInNvdXJjZVZlcnRleE5hbWVzIiwiZ2V0Rmlyc3RDeWNsZSIsImZpcnN0Q3ljbGUiLCJjeWNsZXNQcmVzZW50IiwiYXJlQ3ljbGVzUHJlc2VudCIsImZpcnN0Q3ljbGljRWRnZSIsImdldFNvdXJjZVZlcnRleE5hbWUiLCJnZXRUYXJnZXRWZXJ0ZXhOYW1lIiwiZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoIiwicHJlZGVjZXNzb3JWZXJ0ZXhlcyIsInRlcm1pbmF0ZSIsImN5Y2xlIiwiQ3ljbGUiLCJmcm9tU291cmNlVmVydGV4QW5kUHJlZGVjZXNzb3JWZXJ0ZXhlcyIsImN5Y2xpY0VkZ2VzTGVuZ3RoIiwibGVuZ3RoIiwiaXNFZGdlUHJlc2VudCIsImVkZ2VQcmVzZW50IiwiY3ljbGljRWRnZSIsImN5Y2xpY0VkZ2VQcmVzZW50IiwiaXNDeWNsaWNFZGdlUHJlc2VudCIsIm5vbkN5Y2xpY0VkZ2UiLCJub25DeWNsaWNFZGdlUHJlc2VudCIsImlzTm9uQ3ljbGljRWRnZVByZXNlbnQiLCJjeWNsaWNFZGdlc0luY2x1ZGVzRWRnZSIsImNoZWNrRWRnZXNJbmNsdWRlc0VkZ2UiLCJzb3VyY2VWZXJ0ZXhBbmRUYXJnZXRWZXJ0ZXhQcmVzZW50IiwiaXNFZGdlUHJlc2VudEJ5VGFyZ2V0VmVydGV4IiwidmVydGV4TmFtZXNJbmNsdWRlc1ZlcnRleE5hbWUiLCJpbmNsdWRlcyIsImFkZEVkZ2UiLCJzdWNjZXNzIiwiYWRkTm9uQ3ljbGljRWRnZSIsImFkZEN5Y2xpY0VkZ2UiLCJhZGRFZGdlcyIsImN5Y2xpY0VkZ2VzSW5jbHVkZXNDeWNsaWNFZGdlIiwiYWRkVmVydGV4QnlWZXJ0ZXhOYW1lIiwidmVydGV4TmFtZXNMZW5ndGgiLCJuYW1lIiwiaW5kZXgiLCJWZXJ0ZXgiLCJmcm9tTmFtZUFuZEluZGV4Iiwic2V0VmVydGV4QnlWZXJ0ZXhOYW1lIiwicmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lIiwicmVtb3ZlZEVkZ2VzIiwiZm9yRWFjaEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCIsImltbWVkaWF0ZVN1Y2Nlc3NWZXJ0ZXgiLCJpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCIsImltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZSIsImdldE5hbWUiLCJpbW1lZGlhdGVTdWNjZXNzVmVydGV4TmFtZSIsInJlbW92ZWRFZGdlU291cmNlVmVydGV4TmFtZSIsInJlbW92ZWRFZGdlVGFyZ2V0VmVydGV4TmFtZSIsInJlbW92ZWRFZGdlIiwicmVtb3ZlSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgiLCJmb3JFYWNoSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgiLCJyZW1vdmVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgiLCJkZWxldGVWZXJ0ZXhCeVZlcnRleE5hbWUiLCJkZWxldGVkVmVydGV4IiwiZGVsZXRlZFZlcnRleEluZGV4IiwiZ2V0SW5kZXgiLCJhZmZlY3RlZFZlcnRleGVzIiwicmVkdWNlIiwidmVydGV4SW5kZXgiLCJ2ZXJ0ZXhBZmZlY3RlZCIsImFmZmVjdGVkVmVydGV4IiwiZGVjcmVtZW50SW5kZXgiLCJmaWx0ZXJDeWNsaWNFZGdlcyIsInJlbW92ZUVkZ2UiLCJyZW1vdmVTdHJhbmRlZFZlcnRleGVzIiwicmVtb3ZlQ3ljbGljRWRnZSIsInJlbW92ZU5vbkN5Y2xpY0VkZ2UiLCJyZW1vdmVFZGdlcyIsInJlbW92ZUVkZ2VGcm9tRWRnZXMiLCJyZW1vdmVFZGdlQnlTb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZSIsInNvdXJjZVZlcnRleFN0cmFuZGVkIiwiaXNTdHJhbmRlZCIsInRhcmdldFZlcnRleFN0cmFuZGVkIiwicmVtb3ZlQWxsRWRnZXNBbmRWZXJ0ZXhlcyIsInJlbW92ZUVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lIiwiZWRnZXNCeVNvdXJjZVZlcnRleE5hbWUiLCJyZW1vdmVFZGdlc0J5VGFyZ2V0VmVydGV4TmFtZSIsImVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lIiwic291cmNlVmVydGV4SW5kZXgiLCJ0YXJnZXRWZXJ0ZXhJbmRleCIsImludmFsaWRhdGluZ0VkZ2UiLCJhZGRJbnZhbGlkYXRpbmdFZGdlQnlWZXJ0ZXhlcyIsImltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCIsImFkZEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCIsImFkZEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4Iiwic291cmNlVmVydGV4UHJlc2VudCIsInRhcmdldFZlcnRleFByZXNlbnQiLCJmcm9tTm90aGluZyIsImRpcmVjdGVkR3JhcGgiLCJmb3J3YXJkc0FmZmVjdGVkVmVydGV4ZXMiLCJyZXRyaWV2ZUZvcndhcmRzQWZmZWN0ZWRWZXJ0ZXhlcyIsImxhc3RGb3J3YXJkc0FmZmVjdGVkVmVydGV4IiwicmVzdWx0c0luQ3ljbGUiLCJiYWNrd2FyZHNBZmZlY3RlZFZlcnRleGVzIiwicmV0cmlldmVCYWNrd2FyZHNBZmZlY3RlZFZlcnRleGVzIiwiY29uY2F0IiwiYWZmZWN0ZWRWZXJ0ZXhJbmRpY2VzIiwibWFwIiwiYWZmZWN0ZWRWZXJ0ZXhJbmRleCIsInNvcnQiLCJpbmRleEEiLCJpbmRleEIiLCJzZXRJbmRleCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFhcUJBOzs7eUJBWFU7MkRBRWQ7NERBQ0M7NkRBQ0M7dUJBRW9DO3FCQUN1RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5RyxJQUFRQyxPQUF3QkMsMEJBQXhCRCxNQUFNRSxRQUFrQkQsMEJBQWxCQyxPQUFPQyxTQUFXRiwwQkFBWEU7QUFFTixJQUFBLEFBQU1KLDhCQXdibEIsQUF4Ylk7YUFBTUEsY0FDUEssU0FBUyxFQUFFQyxXQUFXO2dDQURmTjtRQUVqQixJ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