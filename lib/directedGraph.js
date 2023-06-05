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
                var cyclicEdges = (0, _edge1.filterEdgesBySourceVertexName)(sourceVertexName, this.cyclicEdges), edges = this.getEdgesBySourceVertexName(sourceVertexName);
                this.removeEdges(cyclicEdges, removeStrandedVertexes);
                this.removeEdges(edges, removeStrandedVertexes);
            }
        },
        {
            key: "removeEdgesByTargetVertexName",
            value: function removeEdgesByTargetVertexName(targetVertexName) {
                var removeStrandedVertexes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                var cyclicEdges = (0, _edge1.filterEdgesByTargetVertexName)(targetVertexName, this.cyclicEdges), edges = this.getEdgesByTargetVertexName(targetVertexName);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kaXJlY3RlZEdyYXBoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEVkZ2UgZnJvbSBcIi4vZWRnZVwiO1xuaW1wb3J0IEN5Y2xlIGZyb20gXCIuL2N5Y2xlXCI7XG5pbXBvcnQgVmVydGV4IGZyb20gXCIuL3ZlcnRleFwiO1xuXG5pbXBvcnQgeyBvcmRlclZlcnRleGVzLCB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhlcyB9IGZyb20gXCIuL3V0aWxpdGllcy92ZXJ0ZXhcIjtcbmltcG9ydCB7IHJlbW92ZUVkZ2VGcm9tRWRnZXMsIGNoZWNrRWRnZXNJbmNsdWRlc0VkZ2UsIGZpbHRlckVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lLCBmaWx0ZXJFZGdlc0J5VGFyZ2V0VmVydGV4TmFtZSB9IGZyb20gXCIuL3V0aWxpdGllcy9lZGdlXCI7XG5cbmNvbnN0IHsgbGFzdCwgZmlyc3QsIGZpbHRlciB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdGVkR3JhcGgge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhNYXAsIGN5Y2xpY0VkZ2VzKSB7XG4gICAgdGhpcy52ZXJ0ZXhNYXAgPSB2ZXJ0ZXhNYXA7XG4gICAgdGhpcy5jeWNsaWNFZGdlcyA9IGN5Y2xpY0VkZ2VzO1xuICB9XG5cbiAgZ2V0VmVydGV4TmFwKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleE1hcDtcbiAgfVxuXG4gIGdldEN5Y2xpY0VkZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLmN5Y2xpY0VkZ2VzO1xuICB9XG5cbiAgZ2V0VmVydGV4ZXMoKSB7XG4gICAgY29uc3QgdmVydGV4TWFwVmFsdWVzID0gT2JqZWN0LnZhbHVlcyh0aGlzLnZlcnRleE1hcCksXG4gICAgICAgICAgdmVydGV4ZXMgPSB2ZXJ0ZXhNYXBWYWx1ZXM7IC8vL1xuXG4gICAgcmV0dXJuIHZlcnRleGVzO1xuICB9XG5cbiAgZ2V0VmVydGV4TmFtZXMoKSB7XG4gICAgY29uc3QgdmVydGV4TWFwS2V5cyA9IE9iamVjdC5rZXlzKHRoaXMudmVydGV4TWFwKSxcbiAgICAgICAgICB2ZXJ0ZXhOYW1lcyA9IHZlcnRleE1hcEtleXM7ICAvLy9cblxuICAgIHJldHVybiB2ZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGdldE9yZGVyZWRWZXJ0ZXhOYW1lcygpIHtcbiAgICBjb25zdCB2ZXJ0ZXhlcyA9IHRoaXMuZ2V0VmVydGV4ZXMoKTtcblxuICAgIG9yZGVyVmVydGV4ZXModmVydGV4ZXMpO1xuXG4gICAgY29uc3Qgb3JkZXJlZFZlcnRleGVzID0gdmVydGV4ZXMsIC8vL1xuICAgICAgICAgIG9yZGVyZWRWZXJ0ZXhOYW1lcyA9IHZlcnRleE5hbWVzRnJvbVZlcnRleGVzKG9yZGVyZWRWZXJ0ZXhlcyk7XG5cbiAgICByZXR1cm4gb3JkZXJlZFZlcnRleE5hbWVzO1xuICB9XG5cbiAgZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQcmVzZW50ID0gdGhpcy5pc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUodmVydGV4TmFtZSksXG4gICAgICAgICAgdmVydGV4ID0gdmVydGV4UHJlc2VudCA/XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLnZlcnRleE1hcFt2ZXJ0ZXhOYW1lXSA6XG4gICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgICByZXR1cm4gdmVydGV4O1xuICB9XG5cbiAgZ2V0RWRnZXNCeVNvdXJjZVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSkge1xuICAgIGNvbnN0IGVkZ2VzID0gW10sXG4gICAgICAgICAgc291cmNlVmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSk7XG5cbiAgICBpZiAoc291cmNlVmVydGV4ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcyA9IHNvdXJjZVZlcnRleC5nZXRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcygpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZXMgPSBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lczsgIC8vL1xuXG4gICAgICB0YXJnZXRWZXJ0ZXhOYW1lcy5mb3JFYWNoKCh0YXJnZXRWZXJ0ZXhOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGVkZ2UgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgICBlZGdlcy5wdXNoKGVkZ2UpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVkZ2VzO1xuICB9XG5cbiAgZ2V0RWRnZXNCeVRhcmdldFZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSkge1xuICAgIGNvbnN0IGVkZ2VzID0gW10sXG4gICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICBpZiAodGFyZ2V0VmVydGV4ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzID0gdGFyZ2V0VmVydGV4LmdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMoKSxcbiAgICAgICAgICAgIHNvdXJjZVZlcnRleE5hbWVzID0gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lczsgIC8vL1xuXG4gICAgICBzb3VyY2VWZXJ0ZXhOYW1lcy5mb3JFYWNoKChzb3VyY2VWZXJ0ZXhOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGVkZ2UgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgICBlZGdlcy5wdXNoKGVkZ2UpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVkZ2VzO1xuICB9XG5cbiAgZ2V0Rmlyc3RDeWNsZSgpIHtcbiAgICBsZXQgZmlyc3RDeWNsZSA9IG51bGw7XG5cbiAgICBjb25zdCBjeWNsZXNQcmVzZW50ID0gdGhpcy5hcmVDeWNsZXNQcmVzZW50KCk7XG5cbiAgICBpZiAoY3ljbGVzUHJlc2VudCkge1xuICAgICAgY29uc3QgZmlyc3RDeWNsaWNFZGdlID0gZmlyc3QodGhpcy5jeWNsaWNFZGdlcyksXG4gICAgICAgICAgICBzb3VyY2VWZXJ0ZXhOYW1lID0gZmlyc3RDeWNsaWNFZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSwgLy8vXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gZmlyc3RDeWNsaWNFZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKSwgLy8vXG4gICAgICAgICAgICBzb3VyY2VWZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgICB0YXJnZXRWZXJ0ZXguZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoKCh2ZXJ0ZXgsIHByZWRlY2Vzc29yVmVydGV4ZXMpID0+IHtcbiAgICAgICAgbGV0IHRlcm1pbmF0ZSA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh2ZXJ0ZXggPT09IHNvdXJjZVZlcnRleCkge1xuICAgICAgICAgIHRlcm1pbmF0ZSA9IHRydWU7XG5cbiAgICAgICAgICBjb25zdCBjeWNsZSA9IEN5Y2xlLmZyb21Tb3VyY2VWZXJ0ZXhBbmRQcmVkZWNlc3NvclZlcnRleGVzKHNvdXJjZVZlcnRleCwgcHJlZGVjZXNzb3JWZXJ0ZXhlcyk7ICAvLy9cblxuICAgICAgICAgIGZpcnN0Q3ljbGUgPSBjeWNsZTsgLy8vXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGVybWluYXRlO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpcnN0Q3ljbGU7XG4gIH1cblxuICBhcmVDeWNsZXNQcmVzZW50KCkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VzTGVuZ3RoID0gdGhpcy5jeWNsaWNFZGdlcy5sZW5ndGgsXG4gICAgICAgICAgY3ljbGVzUHJlc2VudCA9IChjeWNsaWNFZGdlc0xlbmd0aCA+IDApO1xuXG4gICAgcmV0dXJuIGN5Y2xlc1ByZXNlbnQ7XG4gIH1cblxuICBpc0VkZ2VQcmVzZW50KGVkZ2UpIHtcbiAgICBsZXQgZWRnZVByZXNlbnQgPSBmYWxzZTtcblxuICAgIGlmICghZWRnZVByZXNlbnQpIHtcbiAgICAgIGNvbnN0IGN5Y2xpY0VkZ2UgPSBlZGdlLCAgLy8vXG4gICAgICAgICAgICBjeWNsaWNFZGdlUHJlc2VudCA9IHRoaXMuaXNDeWNsaWNFZGdlUHJlc2VudChjeWNsaWNFZGdlKTtcblxuICAgICAgZWRnZVByZXNlbnQgPSBjeWNsaWNFZGdlUHJlc2VudDsgIC8vL1xuICAgIH1cblxuICAgIGlmICghZWRnZVByZXNlbnQpIHtcbiAgICAgIGNvbnN0IG5vbkN5Y2xpY0VkZ2UgPSBlZGdlLCAvLy9cbiAgICAgICAgICAgIG5vbkN5Y2xpY0VkZ2VQcmVzZW50ID0gdGhpcy5pc05vbkN5Y2xpY0VkZ2VQcmVzZW50KG5vbkN5Y2xpY0VkZ2UpO1xuXG4gICAgICBlZGdlUHJlc2VudCA9IG5vbkN5Y2xpY0VkZ2VQcmVzZW50OyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gZWRnZVByZXNlbnQ7XG4gIH1cblxuICBpc0N5Y2xpY0VkZ2VQcmVzZW50KGN5Y2xpY0VkZ2UpIHtcbiAgICBjb25zdCBjeWNsaWNFZGdlc0luY2x1ZGVzRWRnZSA9IGNoZWNrRWRnZXNJbmNsdWRlc0VkZ2UodGhpcy5jeWNsaWNFZGdlcywgY3ljbGljRWRnZSksXG4gICAgICAgICAgY3ljbGljRWRnZVByZXNlbnQgPSBjeWNsaWNFZGdlc0luY2x1ZGVzRWRnZTsgIC8vL1xuXG4gICAgcmV0dXJuIGN5Y2xpY0VkZ2VQcmVzZW50O1xuICB9XG5cbiAgaXNOb25DeWNsaWNFZGdlUHJlc2VudChlZGdlKSB7XG4gICAgbGV0IG5vbkN5Y2xpY0VkZ2VQcmVzZW50ID0gZmFsc2U7XG5cbiAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gZWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IGVkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgIHNvdXJjZVZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpLFxuICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpLFxuICAgICAgICAgIHNvdXJjZVZlcnRleEFuZFRhcmdldFZlcnRleFByZXNlbnQgPSAoc291cmNlVmVydGV4ICE9PSBudWxsKSAmJiAodGFyZ2V0VmVydGV4ICE9PSBudWxsKTtcblxuICAgIGlmIChzb3VyY2VWZXJ0ZXhBbmRUYXJnZXRWZXJ0ZXhQcmVzZW50KSB7XG4gICAgICBub25DeWNsaWNFZGdlUHJlc2VudCA9IHNvdXJjZVZlcnRleC5pc0VkZ2VQcmVzZW50QnlUYXJnZXRWZXJ0ZXgodGFyZ2V0VmVydGV4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9uQ3ljbGljRWRnZVByZXNlbnQ7XG4gIH1cblxuICBpc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGNvbnN0IHZlcnRleE5hbWVzID0gdGhpcy5nZXRWZXJ0ZXhOYW1lcygpLFxuICAgICAgICAgIHZlcnRleE5hbWVzSW5jbHVkZXNWZXJ0ZXhOYW1lID0gdmVydGV4TmFtZXMuaW5jbHVkZXModmVydGV4TmFtZSksXG4gICAgICAgICAgdmVydGV4UHJlc2VudCA9IHZlcnRleE5hbWVzSW5jbHVkZXNWZXJ0ZXhOYW1lOyAgLy8vXG5cbiAgICByZXR1cm4gdmVydGV4UHJlc2VudDtcbiAgfVxuXG4gIGFkZEVkZ2UoZWRnZSkge1xuICAgIGNvbnN0IG5vbkN5Y2xpY0VkZ2UgPSBlZGdlLCAvLy9cbiAgICAgICAgICBzdWNjZXNzID0gdGhpcy5hZGROb25DeWNsaWNFZGdlKG5vbkN5Y2xpY0VkZ2UpO1xuXG4gICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICBjb25zdCBjeWNsaWNFZGdlID0gZWRnZTsgIC8vL1xuXG4gICAgICB0aGlzLmFkZEN5Y2xpY0VkZ2UoY3ljbGljRWRnZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1Y2Nlc3M7XG4gIH1cblxuICBhZGRFZGdlcyhlZGdlcykge1xuICAgIGVkZ2VzLmZvckVhY2goKGVkZ2UpID0+IHtcbiAgICAgIHRoaXMuYWRkRWRnZShlZGdlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZEN5Y2xpY0VkZ2UoY3ljbGljRWRnZSkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VzSW5jbHVkZXNDeWNsaWNFZGdlID0gY2hlY2tFZGdlc0luY2x1ZGVzRWRnZSh0aGlzLmN5Y2xpY0VkZ2VzLCBjeWNsaWNFZGdlKTtcblxuICAgIGlmICghY3ljbGljRWRnZXNJbmNsdWRlc0N5Y2xpY0VkZ2UpIHtcbiAgICAgIHRoaXMuY3ljbGljRWRnZXMucHVzaChjeWNsaWNFZGdlKTtcbiAgICB9XG4gIH1cblxuICBhZGRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGNvbnN0IHZlcnRleFByZXNlbnQgPSB0aGlzLmlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgIGlmICghdmVydGV4UHJlc2VudCkge1xuICAgICAgY29uc3QgdmVydGV4TmFtZXMgPSB0aGlzLmdldFZlcnRleE5hbWVzKCksXG4gICAgICAgICAgICB2ZXJ0ZXhOYW1lc0xlbmd0aCA9IHZlcnRleE5hbWVzLmxlbmd0aCxcbiAgICAgICAgICAgIG5hbWUgPSB2ZXJ0ZXhOYW1lLCAgLy8vXG4gICAgICAgICAgICBpbmRleCA9IHZlcnRleE5hbWVzTGVuZ3RoLCAvLy9cbiAgICAgICAgICAgIHZlcnRleCA9IFZlcnRleC5mcm9tTmFtZUFuZEluZGV4KG5hbWUsIGluZGV4KTtcblxuICAgICAgdGhpcy5zZXRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSwgdmVydGV4KTtcbiAgICB9XG5cbiAgICBjb25zdCB2ZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgIHJldHVybiB2ZXJ0ZXg7XG4gIH1cblxuICByZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGxldCByZW1vdmVkRWRnZXMgPSBudWxsO1xuXG4gICAgY29uc3QgdmVydGV4UHJlc2VudCA9IHRoaXMuaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgaWYgKHZlcnRleFByZXNlbnQpIHtcbiAgICAgIHJlbW92ZWRFZGdlcyA9IFtdO1xuXG4gICAgICBjb25zdCB2ZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgICAgdmVydGV4LmZvckVhY2hJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoKGltbWVkaWF0ZVN1Y2Nlc3NWZXJ0ZXgpID0+IHtcbiAgICAgICAgY29uc3QgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXggPSB2ZXJ0ZXgsICAvLy9cbiAgICAgICAgICAgICAgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lID0gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXguZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICBpbW1lZGlhdGVTdWNjZXNzVmVydGV4TmFtZSA9IGltbWVkaWF0ZVN1Y2Nlc3NWZXJ0ZXguZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICByZW1vdmVkRWRnZVNvdXJjZVZlcnRleE5hbWUgPSBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWUsIC8vL1xuICAgICAgICAgICAgICByZW1vdmVkRWRnZVRhcmdldFZlcnRleE5hbWUgPSBpbW1lZGlhdGVTdWNjZXNzVmVydGV4TmFtZSwgLy8vXG4gICAgICAgICAgICAgIHJlbW92ZWRFZGdlID0gbmV3IEVkZ2UocmVtb3ZlZEVkZ2VTb3VyY2VWZXJ0ZXhOYW1lLCByZW1vdmVkRWRnZVRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgICAgIHJlbW92ZWRFZGdlcy5wdXNoKHJlbW92ZWRFZGdlKTtcblxuICAgICAgICBpbW1lZGlhdGVTdWNjZXNzVmVydGV4LnJlbW92ZUltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KTtcbiAgICAgIH0pO1xuXG4gICAgICB2ZXJ0ZXguZm9yRWFjaEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCkgPT4ge1xuICAgICAgICBjb25zdCBpbW1lZGlhdGVTdWNjZXNzVmVydGV4ID0gdmVydGV4LCAgLy8vXG4gICAgICAgICAgICAgIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZSA9IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4LmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgaW1tZWRpYXRlU3VjY2Vzc1ZlcnRleE5hbWUgPSBpbW1lZGlhdGVTdWNjZXNzVmVydGV4LmdldE5hbWUoKSwgIC8vL1xuICAgICAgICAgICAgICByZW1vdmVkRWRnZVNvdXJjZVZlcnRleE5hbWUgPSBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWUsIC8vL1xuICAgICAgICAgICAgICByZW1vdmVkRWRnZVRhcmdldFZlcnRleE5hbWUgPSBpbW1lZGlhdGVTdWNjZXNzVmVydGV4TmFtZSwgLy8vXG4gICAgICAgICAgICAgIHJlbW92ZWRFZGdlID0gbmV3IEVkZ2UocmVtb3ZlZEVkZ2VTb3VyY2VWZXJ0ZXhOYW1lLCByZW1vdmVkRWRnZVRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgICAgIHJlbW92ZWRFZGdlcy5wdXNoKHJlbW92ZWRFZGdlKTtcblxuICAgICAgICBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleC5yZW1vdmVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoaW1tZWRpYXRlU3VjY2Vzc1ZlcnRleCk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5kZWxldGVWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICAgIGNvbnN0IGRlbGV0ZWRWZXJ0ZXggPSB2ZXJ0ZXgsIC8vL1xuICAgICAgICAgICAgZGVsZXRlZFZlcnRleEluZGV4ID0gZGVsZXRlZFZlcnRleC5nZXRJbmRleCgpLFxuICAgICAgICAgICAgdmVydGV4ZXMgPSB0aGlzLmdldFZlcnRleGVzKCksXG4gICAgICAgICAgICBhZmZlY3RlZFZlcnRleGVzID0gdmVydGV4ZXMucmVkdWNlKChhZmZlY3RlZFZlcnRleGVzLCB2ZXJ0ZXgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgdmVydGV4SW5kZXggPSB2ZXJ0ZXguZ2V0SW5kZXgoKSxcbiAgICAgICAgICAgICAgICAgICAgdmVydGV4QWZmZWN0ZWQgPSAodmVydGV4SW5kZXggPiBkZWxldGVkVmVydGV4SW5kZXgpO1xuXG4gICAgICAgICAgICAgIGlmICh2ZXJ0ZXhBZmZlY3RlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFmZmVjdGVkVmVydGV4ID0gdmVydGV4OyAgLy8vXG5cbiAgICAgICAgICAgICAgICBhZmZlY3RlZFZlcnRleGVzLnB1c2goYWZmZWN0ZWRWZXJ0ZXgpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIGFmZmVjdGVkVmVydGV4ZXM7XG4gICAgICAgICAgICB9LCBbXSk7XG5cbiAgICAgIGFmZmVjdGVkVmVydGV4ZXMuZm9yRWFjaCgoYWZmZWN0ZWRWZXJ0ZXgpID0+IHtcbiAgICAgICAgYWZmZWN0ZWRWZXJ0ZXguZGVjcmVtZW50SW5kZXgoKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuZmlsdGVyQ3ljbGljRWRnZXMoKTtcblxuICAgIHJldHVybiByZW1vdmVkRWRnZXM7XG4gIH1cblxuICByZW1vdmVFZGdlKGVkZ2UsIHJlbW92ZVN0cmFuZGVkVmVydGV4ZXMgPSBmYWxzZSkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2UgPSBlZGdlLCAgLy8vXG4gICAgICAgICAgY3ljbGljRWRnZVByZXNlbnQgPSB0aGlzLmlzQ3ljbGljRWRnZVByZXNlbnQoY3ljbGljRWRnZSk7XG5cbiAgICBpZiAoY3ljbGljRWRnZVByZXNlbnQpIHtcbiAgICAgIHRoaXMucmVtb3ZlQ3ljbGljRWRnZShjeWNsaWNFZGdlKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5vbkN5Y2xpY0VkZ2UgPSBlZGdlLCAvLy9cbiAgICAgICAgICBub25DeWNsaWNFZGdlUHJlc2VudCA9IHRoaXMuaXNOb25DeWNsaWNFZGdlUHJlc2VudChub25DeWNsaWNFZGdlKTtcblxuICAgIGlmIChub25DeWNsaWNFZGdlUHJlc2VudCkge1xuICAgICAgdGhpcy5yZW1vdmVOb25DeWNsaWNFZGdlKG5vbkN5Y2xpY0VkZ2UsIHJlbW92ZVN0cmFuZGVkVmVydGV4ZXMpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUVkZ2VzKGVkZ2VzLCByZW1vdmVTdHJhbmRlZFZlcnRleGVzID0gZmFsc2UpIHtcbiAgICBlZGdlcy5mb3JFYWNoKChlZGdlKSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZUVkZ2UoZWRnZSwgcmVtb3ZlU3RyYW5kZWRWZXJ0ZXhlcyk7XG4gICAgfSk7XG4gIH1cblxuICByZW1vdmVDeWNsaWNFZGdlKGN5Y2xpY0VkZ2UpIHtcbiAgICByZW1vdmVFZGdlRnJvbUVkZ2VzKGN5Y2xpY0VkZ2UsIHRoaXMuY3ljbGljRWRnZXMpO1xuICB9XG5cbiAgcmVtb3ZlTm9uQ3ljbGljRWRnZShub25DeWNsaWNFZGdlLCByZW1vdmVTdHJhbmRlZFZlcnRleGVzKSB7XG4gICAgY29uc3Qgc291cmNlVmVydGV4TmFtZSA9IG5vbkN5Y2xpY0VkZ2UuZ2V0U291cmNlVmVydGV4TmFtZSgpLFxuICAgICAgICAgIHRhcmdldFZlcnRleE5hbWUgPSBub25DeWNsaWNFZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKSxcbiAgICAgICAgICBzb3VyY2VWZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICB0YXJnZXRWZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgIHNvdXJjZVZlcnRleC5yZW1vdmVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgodGFyZ2V0VmVydGV4KTtcblxuICAgIHRhcmdldFZlcnRleC5yZW1vdmVJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleChzb3VyY2VWZXJ0ZXgpO1xuXG4gICAgaWYgKHJlbW92ZVN0cmFuZGVkVmVydGV4ZXMpIHtcbiAgICAgIGNvbnN0IHNvdXJjZVZlcnRleFN0cmFuZGVkID0gc291cmNlVmVydGV4LmlzU3RyYW5kZWQoKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleFN0cmFuZGVkID0gdGFyZ2V0VmVydGV4LmlzU3RyYW5kZWQoKTtcblxuICAgICAgaWYgKHNvdXJjZVZlcnRleFN0cmFuZGVkKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGFyZ2V0VmVydGV4U3RyYW5kZWQpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5maWx0ZXJDeWNsaWNFZGdlcygpO1xuICB9XG5cbiAgcmVtb3ZlQWxsRWRnZXNBbmRWZXJ0ZXhlcygpIHtcbiAgICB0aGlzLnZlcnRleE1hcCA9IHt9O1xuICAgIHRoaXMuY3ljbGljRWRnZXMgPSBbXTtcbiAgfVxuXG4gIHJlbW92ZUVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUsIHJlbW92ZVN0cmFuZGVkVmVydGV4ZXMgPSBmYWxzZSkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VzID0gZmlsdGVyRWRnZXNCeVNvdXJjZVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGhpcy5jeWNsaWNFZGdlcyksXG4gICAgICAgICAgZWRnZXMgPSB0aGlzLmdldEVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpO1xuXG4gICAgdGhpcy5yZW1vdmVFZGdlcyhjeWNsaWNFZGdlcywgcmVtb3ZlU3RyYW5kZWRWZXJ0ZXhlcyk7XG5cbiAgICB0aGlzLnJlbW92ZUVkZ2VzKGVkZ2VzLCByZW1vdmVTdHJhbmRlZFZlcnRleGVzKTtcbiAgfVxuXG4gIHJlbW92ZUVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUsIHJlbW92ZVN0cmFuZGVkVmVydGV4ZXMgPSBmYWxzZSkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VzID0gZmlsdGVyRWRnZXNCeVRhcmdldFZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSwgdGhpcy5jeWNsaWNFZGdlcyksXG4gICAgICAgICAgZWRnZXMgPSB0aGlzLmdldEVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgdGhpcy5yZW1vdmVFZGdlcyhjeWNsaWNFZGdlcywgcmVtb3ZlU3RyYW5kZWRWZXJ0ZXhlcyk7XG5cbiAgICB0aGlzLnJlbW92ZUVkZ2VzKGVkZ2VzLCByZW1vdmVTdHJhbmRlZFZlcnRleGVzKTtcbiAgfVxuXG4gIGFkZE5vbkN5Y2xpY0VkZ2Uobm9uQ3ljbGljRWRnZSkge1xuICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gbm9uQ3ljbGljRWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IG5vbkN5Y2xpY0VkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpO1xuXG4gICAgaWYgKHNvdXJjZVZlcnRleE5hbWUgIT09IHRhcmdldFZlcnRleE5hbWUpIHtcbiAgICAgIGNvbnN0IHNvdXJjZVZlcnRleCA9IHRoaXMuYWRkVmVydGV4QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdGhpcy5hZGRWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSksXG4gICAgICAgICAgICBlZGdlUHJlc2VudCA9IHNvdXJjZVZlcnRleC5pc0VkZ2VQcmVzZW50QnlUYXJnZXRWZXJ0ZXgodGFyZ2V0VmVydGV4KTtcblxuICAgICAgaWYgKGVkZ2VQcmVzZW50KSB7XG4gICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgc291cmNlVmVydGV4SW5kZXggPSBzb3VyY2VWZXJ0ZXguZ2V0SW5kZXgoKSxcbiAgICAgICAgICAgICAgdGFyZ2V0VmVydGV4SW5kZXggPSB0YXJnZXRWZXJ0ZXguZ2V0SW5kZXgoKSxcbiAgICAgICAgICAgICAgaW52YWxpZGF0aW5nRWRnZSA9IChzb3VyY2VWZXJ0ZXhJbmRleCA+IHRhcmdldFZlcnRleEluZGV4KTtcblxuICAgICAgICBzdWNjZXNzID0gaW52YWxpZGF0aW5nRWRnZSA/XG4gICAgICAgICAgICAgICAgICAgIGFkZEludmFsaWRhdGluZ0VkZ2VCeVZlcnRleGVzKHNvdXJjZVZlcnRleCwgdGFyZ2V0VmVydGV4KSA6XG4gICAgICAgICAgICAgICAgICAgICAgdHJ1ZTtcblxuICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgIGNvbnN0IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ID0gc291cmNlVmVydGV4LCAvLy9cbiAgICAgICAgICAgICAgICBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXggPSB0YXJnZXRWZXJ0ZXg7IC8vL1xuXG4gICAgICAgICAgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXguYWRkSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCk7XG5cbiAgICAgICAgICBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXguYWRkSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1Y2Nlc3M7XG4gIH1cblxuICBmaWx0ZXJDeWNsaWNFZGdlcygpIHtcbiAgICBmaWx0ZXIodGhpcy5jeWNsaWNFZGdlcywgKGN5Y2xpY0VkZ2UpID0+IHtcbiAgICAgIGNvbnN0IHNvdXJjZVZlcnRleE5hbWUgPSBjeWNsaWNFZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleE5hbWUgPSBjeWNsaWNFZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKSxcbiAgICAgICAgICAgIHNvdXJjZVZlcnRleFByZXNlbnQgPSB0aGlzLmlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleFByZXNlbnQgPSB0aGlzLmlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgaWYgKHNvdXJjZVZlcnRleFByZXNlbnQgJiYgdGFyZ2V0VmVydGV4UHJlc2VudCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGZpbHRlcih0aGlzLmN5Y2xpY0VkZ2VzLCAoY3ljbGljRWRnZSkgPT4ge1xuICAgICAgY29uc3QgZWRnZSA9IGN5Y2xpY0VkZ2UsICAvLy9cbiAgICAgICAgICAgIHN1Y2Nlc3MgPSB0aGlzLmFkZEVkZ2UoZWRnZSk7XG5cbiAgICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lLCB2ZXJ0ZXgpIHtcbiAgICB0aGlzLnZlcnRleE1hcFt2ZXJ0ZXhOYW1lXSA9IHZlcnRleDtcbiAgfVxuXG4gIGRlbGV0ZVZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgZGVsZXRlIHRoaXMudmVydGV4TWFwW3ZlcnRleE5hbWVdO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHZlcnRleE1hcCA9IHt9LFxuICAgICAgICAgIGN5Y2xpY0VkZ2VzID0gW10sXG4gICAgICAgICAgZGlyZWN0ZWRHcmFwaCA9IG5ldyBEaXJlY3RlZEdyYXBoKHZlcnRleE1hcCwgY3ljbGljRWRnZXMpO1xuICAgIFxuICAgIHJldHVybiBkaXJlY3RlZEdyYXBoOyAgICBcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRJbnZhbGlkYXRpbmdFZGdlQnlWZXJ0ZXhlcyhzb3VyY2VWZXJ0ZXgsIHRhcmdldFZlcnRleCkge1xuICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gIGNvbnN0IGZvcndhcmRzQWZmZWN0ZWRWZXJ0ZXhlcyA9IHRhcmdldFZlcnRleC5yZXRyaWV2ZUZvcndhcmRzQWZmZWN0ZWRWZXJ0ZXhlcyhzb3VyY2VWZXJ0ZXgpLFxuICAgICAgICBsYXN0Rm9yd2FyZHNBZmZlY3RlZFZlcnRleCA9IGxhc3QoZm9yd2FyZHNBZmZlY3RlZFZlcnRleGVzKSxcbiAgICAgICAgcmVzdWx0c0luQ3ljbGUgPSAobGFzdEZvcndhcmRzQWZmZWN0ZWRWZXJ0ZXggPT09IHNvdXJjZVZlcnRleCk7XG5cbiAgaWYgKCFyZXN1bHRzSW5DeWNsZSkge1xuICAgIGNvbnN0IGJhY2t3YXJkc0FmZmVjdGVkVmVydGV4ZXMgPSBzb3VyY2VWZXJ0ZXgucmV0cmlldmVCYWNrd2FyZHNBZmZlY3RlZFZlcnRleGVzKCk7XG5cbiAgICBvcmRlclZlcnRleGVzKGJhY2t3YXJkc0FmZmVjdGVkVmVydGV4ZXMpO1xuXG4gICAgb3JkZXJWZXJ0ZXhlcyhmb3J3YXJkc0FmZmVjdGVkVmVydGV4ZXMpO1xuXG4gICAgY29uc3QgYWZmZWN0ZWRWZXJ0ZXhlcyA9IFtdLmNvbmNhdChiYWNrd2FyZHNBZmZlY3RlZFZlcnRleGVzKS5jb25jYXQoZm9yd2FyZHNBZmZlY3RlZFZlcnRleGVzKSxcbiAgICAgICAgICBhZmZlY3RlZFZlcnRleEluZGljZXMgPSBhZmZlY3RlZFZlcnRleGVzLm1hcCgoYWZmZWN0ZWRWZXJ0ZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFmZmVjdGVkVmVydGV4SW5kZXggPSBhZmZlY3RlZFZlcnRleC5nZXRJbmRleCgpO1xuXG4gICAgICAgICAgICByZXR1cm4gYWZmZWN0ZWRWZXJ0ZXhJbmRleDtcbiAgICAgICAgICB9KTtcblxuICAgIGFmZmVjdGVkVmVydGV4SW5kaWNlcy5zb3J0KChpbmRleEEsIGluZGV4QikgPT4ge1xuICAgICAgaWYgKGZhbHNlKSB7XG4gICAgICAgIC8vL1xuICAgICAgfSBlbHNlIGlmIChpbmRleEEgPCBpbmRleEIpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfSBlbHNlIGlmIChpbmRleEEgPiBpbmRleEIpIHtcbiAgICAgICAgcmV0dXJuICsxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBhZmZlY3RlZFZlcnRleGVzLmZvckVhY2goKGFmZmVjdGVkVmVydGV4LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgYWZmZWN0ZWRWZXJ0ZXhJbmRleCA9IGFmZmVjdGVkVmVydGV4SW5kaWNlc1tpbmRleF07XG5cbiAgICAgIGFmZmVjdGVkVmVydGV4LnNldEluZGV4KGFmZmVjdGVkVmVydGV4SW5kZXgpO1xuICAgIH0pO1xuXG4gICAgc3VjY2VzcyA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gc3VjY2Vzcztcbn1cbiJdLCJuYW1lcyI6WyJEaXJlY3RlZEdyYXBoIiwibGFzdCIsImFycmF5VXRpbGl0aWVzIiwiZmlyc3QiLCJmaWx0ZXIiLCJ2ZXJ0ZXhNYXAiLCJjeWNsaWNFZGdlcyIsImdldFZlcnRleE5hcCIsImdldEN5Y2xpY0VkZ2VzIiwiZ2V0VmVydGV4ZXMiLCJ2ZXJ0ZXhNYXBWYWx1ZXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJ2ZXJ0ZXhlcyIsImdldFZlcnRleE5hbWVzIiwidmVydGV4TWFwS2V5cyIsImtleXMiLCJ2ZXJ0ZXhOYW1lcyIsImdldE9yZGVyZWRWZXJ0ZXhOYW1lcyIsIm9yZGVyVmVydGV4ZXMiLCJvcmRlcmVkVmVydGV4ZXMiLCJvcmRlcmVkVmVydGV4TmFtZXMiLCJ2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhlcyIsImdldFZlcnRleEJ5VmVydGV4TmFtZSIsInZlcnRleE5hbWUiLCJ2ZXJ0ZXhQcmVzZW50IiwiaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lIiwidmVydGV4IiwiZ2V0RWRnZXNCeVNvdXJjZVZlcnRleE5hbWUiLCJzb3VyY2VWZXJ0ZXhOYW1lIiwiZWRnZXMiLCJzb3VyY2VWZXJ0ZXgiLCJpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcyIsImdldEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzIiwidGFyZ2V0VmVydGV4TmFtZXMiLCJmb3JFYWNoIiwidGFyZ2V0VmVydGV4TmFtZSIsImVkZ2UiLCJFZGdlIiwiZnJvbVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lIiwicHVzaCIsImdldEVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lIiwidGFyZ2V0VmVydGV4IiwiaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcyIsImdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMiLCJzb3VyY2VWZXJ0ZXhOYW1lcyIsImdldEZpcnN0Q3ljbGUiLCJmaXJzdEN5Y2xlIiwiY3ljbGVzUHJlc2VudCIsImFyZUN5Y2xlc1ByZXNlbnQiLCJmaXJzdEN5Y2xpY0VkZ2UiLCJnZXRTb3VyY2VWZXJ0ZXhOYW1lIiwiZ2V0VGFyZ2V0VmVydGV4TmFtZSIsImZvcndhcmRzRGVwdGhGaXJzdFNlYXJjaCIsInByZWRlY2Vzc29yVmVydGV4ZXMiLCJ0ZXJtaW5hdGUiLCJjeWNsZSIsIkN5Y2xlIiwiZnJvbVNvdXJjZVZlcnRleEFuZFByZWRlY2Vzc29yVmVydGV4ZXMiLCJjeWNsaWNFZGdlc0xlbmd0aCIsImxlbmd0aCIsImlzRWRnZVByZXNlbnQiLCJlZGdlUHJlc2VudCIsImN5Y2xpY0VkZ2UiLCJjeWNsaWNFZGdlUHJlc2VudCIsImlzQ3ljbGljRWRnZVByZXNlbnQiLCJub25DeWNsaWNFZGdlIiwibm9uQ3ljbGljRWRnZVByZXNlbnQiLCJpc05vbkN5Y2xpY0VkZ2VQcmVzZW50IiwiY3ljbGljRWRnZXNJbmNsdWRlc0VkZ2UiLCJjaGVja0VkZ2VzSW5jbHVkZXNFZGdlIiwic291cmNlVmVydGV4QW5kVGFyZ2V0VmVydGV4UHJlc2VudCIsImlzRWRnZVByZXNlbnRCeVRhcmdldFZlcnRleCIsInZlcnRleE5hbWVzSW5jbHVkZXNWZXJ0ZXhOYW1lIiwiaW5jbHVkZXMiLCJhZGRFZGdlIiwic3VjY2VzcyIsImFkZE5vbkN5Y2xpY0VkZ2UiLCJhZGRDeWNsaWNFZGdlIiwiYWRkRWRnZXMiLCJjeWNsaWNFZGdlc0luY2x1ZGVzQ3ljbGljRWRnZSIsImFkZFZlcnRleEJ5VmVydGV4TmFtZSIsInZlcnRleE5hbWVzTGVuZ3RoIiwibmFtZSIsImluZGV4IiwiVmVydGV4IiwiZnJvbU5hbWVBbmRJbmRleCIsInNldFZlcnRleEJ5VmVydGV4TmFtZSIsInJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZSIsInJlbW92ZWRFZGdlcyIsImZvckVhY2hJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgiLCJpbW1lZGlhdGVTdWNjZXNzVmVydGV4IiwiaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgiLCJpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWUiLCJnZXROYW1lIiwiaW1tZWRpYXRlU3VjY2Vzc1ZlcnRleE5hbWUiLCJyZW1vdmVkRWRnZVNvdXJjZVZlcnRleE5hbWUiLCJyZW1vdmVkRWRnZVRhcmdldFZlcnRleE5hbWUiLCJyZW1vdmVkRWRnZSIsInJlbW92ZUltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4IiwiZm9yRWFjaEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4IiwicmVtb3ZlSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4IiwiZGVsZXRlVmVydGV4QnlWZXJ0ZXhOYW1lIiwiZGVsZXRlZFZlcnRleCIsImRlbGV0ZWRWZXJ0ZXhJbmRleCIsImdldEluZGV4IiwiYWZmZWN0ZWRWZXJ0ZXhlcyIsInJlZHVjZSIsInZlcnRleEluZGV4IiwidmVydGV4QWZmZWN0ZWQiLCJhZmZlY3RlZFZlcnRleCIsImRlY3JlbWVudEluZGV4IiwiZmlsdGVyQ3ljbGljRWRnZXMiLCJyZW1vdmVFZGdlIiwicmVtb3ZlU3RyYW5kZWRWZXJ0ZXhlcyIsInJlbW92ZUN5Y2xpY0VkZ2UiLCJyZW1vdmVOb25DeWNsaWNFZGdlIiwicmVtb3ZlRWRnZXMiLCJyZW1vdmVFZGdlRnJvbUVkZ2VzIiwic291cmNlVmVydGV4U3RyYW5kZWQiLCJpc1N0cmFuZGVkIiwidGFyZ2V0VmVydGV4U3RyYW5kZWQiLCJyZW1vdmVBbGxFZGdlc0FuZFZlcnRleGVzIiwicmVtb3ZlRWRnZXNCeVNvdXJjZVZlcnRleE5hbWUiLCJmaWx0ZXJFZGdlc0J5U291cmNlVmVydGV4TmFtZSIsInJlbW92ZUVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lIiwiZmlsdGVyRWRnZXNCeVRhcmdldFZlcnRleE5hbWUiLCJzb3VyY2VWZXJ0ZXhJbmRleCIsInRhcmdldFZlcnRleEluZGV4IiwiaW52YWxpZGF0aW5nRWRnZSIsImFkZEludmFsaWRhdGluZ0VkZ2VCeVZlcnRleGVzIiwiaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4IiwiYWRkSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4IiwiYWRkSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgiLCJzb3VyY2VWZXJ0ZXhQcmVzZW50IiwidGFyZ2V0VmVydGV4UHJlc2VudCIsImZyb21Ob3RoaW5nIiwiZGlyZWN0ZWRHcmFwaCIsImZvcndhcmRzQWZmZWN0ZWRWZXJ0ZXhlcyIsInJldHJpZXZlRm9yd2FyZHNBZmZlY3RlZFZlcnRleGVzIiwibGFzdEZvcndhcmRzQWZmZWN0ZWRWZXJ0ZXgiLCJyZXN1bHRzSW5DeWNsZSIsImJhY2t3YXJkc0FmZmVjdGVkVmVydGV4ZXMiLCJyZXRyaWV2ZUJhY2t3YXJkc0FmZmVjdGVkVmVydGV4ZXMiLCJjb25jYXQiLCJhZmZlY3RlZFZlcnRleEluZGljZXMiLCJtYXAiLCJhZmZlY3RlZFZlcnRleEluZGV4Iiwic29ydCIsImluZGV4QSIsImluZGV4QiIsInNldEluZGV4Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWFxQkE7Ozt5QkFYVTsyREFFZDs0REFDQzs2REFDQzt1QkFFb0M7cUJBQ21FOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFILElBQVFDLE9BQXdCQywwQkFBeEJELE1BQU1FLFFBQWtCRCwwQkFBbEJDLE9BQU9DLFNBQVdGLDBCQUFYRTtBQUVOLElBQUEsQUFBTUosOEJBaWJsQixBQWpiWTthQUFNQSxjQUNQSyxTQUFTLEVBQUVDLFdBQVc7Z0NBRGZOO1FBRWpCLElBQUksQ0FBQ0ssWUFBWUE7UUFDakIsSUFBSSxDQUFDQyxjQUFjQTs7a0JBSEZOOztZQU1uQk8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRjtZQUNkOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRjtZQUNkOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGtCQUFrQkMsT0FBT0MsT0FBTyxJQUFJLENBQUNQLFlBQ3JDUSxXQUFXSCxpQkFBaUIsR0FBRztnQkFFckMsT0FBT0c7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxnQkFBZ0JKLE9BQU9LLEtBQUssSUFBSSxDQUFDWCxZQUNqQ1ksY0FBY0YsZUFBZ0Is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