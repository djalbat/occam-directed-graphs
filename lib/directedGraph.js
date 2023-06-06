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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kaXJlY3RlZEdyYXBoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEVkZ2UgZnJvbSBcIi4vZWRnZVwiO1xuaW1wb3J0IEN5Y2xlIGZyb20gXCIuL2N5Y2xlXCI7XG5pbXBvcnQgVmVydGV4IGZyb20gXCIuL3ZlcnRleFwiO1xuXG5pbXBvcnQgeyBvcmRlclZlcnRleGVzLCB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhlcyB9IGZyb20gXCIuL3V0aWxpdGllcy92ZXJ0ZXhcIjtcbmltcG9ydCB7IHJlbW92ZUVkZ2VGcm9tRWRnZXMsIGNoZWNrRWRnZXNJbmNsdWRlc0VkZ2UsIGZpbHRlckVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lLCBmaWx0ZXJFZGdlc0J5VGFyZ2V0VmVydGV4TmFtZSB9IGZyb20gXCIuL3V0aWxpdGllcy9lZGdlXCI7XG5cbmNvbnN0IHsgbGFzdCwgZmlyc3QsIGZpbHRlciB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdGVkR3JhcGgge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhNYXAsIGN5Y2xpY0VkZ2VzKSB7XG4gICAgdGhpcy52ZXJ0ZXhNYXAgPSB2ZXJ0ZXhNYXA7XG4gICAgdGhpcy5jeWNsaWNFZGdlcyA9IGN5Y2xpY0VkZ2VzO1xuICB9XG5cbiAgZ2V0VmVydGV4TmFwKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleE1hcDtcbiAgfVxuXG4gIGdldEN5Y2xpY0VkZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLmN5Y2xpY0VkZ2VzO1xuICB9XG5cbiAgZ2V0VmVydGV4ZXMoKSB7XG4gICAgY29uc3QgdmVydGV4TWFwVmFsdWVzID0gT2JqZWN0LnZhbHVlcyh0aGlzLnZlcnRleE1hcCksXG4gICAgICAgICAgdmVydGV4ZXMgPSB2ZXJ0ZXhNYXBWYWx1ZXM7IC8vL1xuXG4gICAgcmV0dXJuIHZlcnRleGVzO1xuICB9XG5cbiAgZ2V0VmVydGV4TmFtZXMoKSB7XG4gICAgY29uc3QgdmVydGV4TWFwS2V5cyA9IE9iamVjdC5rZXlzKHRoaXMudmVydGV4TWFwKSxcbiAgICAgICAgICB2ZXJ0ZXhOYW1lcyA9IHZlcnRleE1hcEtleXM7ICAvLy9cblxuICAgIHJldHVybiB2ZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGdldE9yZGVyZWRWZXJ0ZXhOYW1lcygpIHtcbiAgICBjb25zdCB2ZXJ0ZXhlcyA9IHRoaXMuZ2V0VmVydGV4ZXMoKTtcblxuICAgIG9yZGVyVmVydGV4ZXModmVydGV4ZXMpO1xuXG4gICAgY29uc3Qgb3JkZXJlZFZlcnRleGVzID0gdmVydGV4ZXMsIC8vL1xuICAgICAgICAgIG9yZGVyZWRWZXJ0ZXhOYW1lcyA9IHZlcnRleE5hbWVzRnJvbVZlcnRleGVzKG9yZGVyZWRWZXJ0ZXhlcyk7XG5cbiAgICByZXR1cm4gb3JkZXJlZFZlcnRleE5hbWVzO1xuICB9XG5cbiAgZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQcmVzZW50ID0gdGhpcy5pc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUodmVydGV4TmFtZSksXG4gICAgICAgICAgdmVydGV4ID0gdmVydGV4UHJlc2VudCA/XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLnZlcnRleE1hcFt2ZXJ0ZXhOYW1lXSA6XG4gICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgICByZXR1cm4gdmVydGV4O1xuICB9XG5cbiAgZ2V0RWRnZXNCeVNvdXJjZVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSkge1xuICAgIGNvbnN0IGVkZ2VzID0gW10sXG4gICAgICAgICAgc291cmNlVmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSk7XG5cbiAgICBpZiAoc291cmNlVmVydGV4ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcyA9IHNvdXJjZVZlcnRleC5nZXRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcygpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZXMgPSBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lczsgIC8vL1xuXG4gICAgICB0YXJnZXRWZXJ0ZXhOYW1lcy5mb3JFYWNoKCh0YXJnZXRWZXJ0ZXhOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGVkZ2UgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgICBlZGdlcy5wdXNoKGVkZ2UpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVkZ2VzO1xuICB9XG5cbiAgZ2V0RWRnZXNCeVRhcmdldFZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSkge1xuICAgIGNvbnN0IGVkZ2VzID0gW10sXG4gICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICBpZiAodGFyZ2V0VmVydGV4ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzID0gdGFyZ2V0VmVydGV4LmdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMoKSxcbiAgICAgICAgICAgIHNvdXJjZVZlcnRleE5hbWVzID0gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lczsgIC8vL1xuXG4gICAgICBzb3VyY2VWZXJ0ZXhOYW1lcy5mb3JFYWNoKChzb3VyY2VWZXJ0ZXhOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGVkZ2UgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgICBlZGdlcy5wdXNoKGVkZ2UpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVkZ2VzO1xuICB9XG5cbiAgZ2V0Rmlyc3RDeWNsZSgpIHtcbiAgICBsZXQgZmlyc3RDeWNsZSA9IG51bGw7XG5cbiAgICBjb25zdCBjeWNsZXNQcmVzZW50ID0gdGhpcy5hcmVDeWNsZXNQcmVzZW50KCk7XG5cbiAgICBpZiAoY3ljbGVzUHJlc2VudCkge1xuICAgICAgY29uc3QgZmlyc3RDeWNsaWNFZGdlID0gZmlyc3QodGhpcy5jeWNsaWNFZGdlcyksXG4gICAgICAgICAgICBzb3VyY2VWZXJ0ZXhOYW1lID0gZmlyc3RDeWNsaWNFZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSwgLy8vXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gZmlyc3RDeWNsaWNFZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKSwgLy8vXG4gICAgICAgICAgICBzb3VyY2VWZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgICB0YXJnZXRWZXJ0ZXguZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoKCh2ZXJ0ZXgsIHByZWRlY2Vzc29yVmVydGV4ZXMpID0+IHtcbiAgICAgICAgbGV0IHRlcm1pbmF0ZSA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh2ZXJ0ZXggPT09IHNvdXJjZVZlcnRleCkge1xuICAgICAgICAgIHRlcm1pbmF0ZSA9IHRydWU7XG5cbiAgICAgICAgICBjb25zdCBjeWNsZSA9IEN5Y2xlLmZyb21Tb3VyY2VWZXJ0ZXhBbmRQcmVkZWNlc3NvclZlcnRleGVzKHNvdXJjZVZlcnRleCwgcHJlZGVjZXNzb3JWZXJ0ZXhlcyk7ICAvLy9cblxuICAgICAgICAgIGZpcnN0Q3ljbGUgPSBjeWNsZTsgLy8vXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGVybWluYXRlO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpcnN0Q3ljbGU7XG4gIH1cblxuICBhcmVDeWNsZXNQcmVzZW50KCkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VzTGVuZ3RoID0gdGhpcy5jeWNsaWNFZGdlcy5sZW5ndGgsXG4gICAgICAgICAgY3ljbGVzUHJlc2VudCA9IChjeWNsaWNFZGdlc0xlbmd0aCA+IDApO1xuXG4gICAgcmV0dXJuIGN5Y2xlc1ByZXNlbnQ7XG4gIH1cblxuICBpc0VkZ2VQcmVzZW50KGVkZ2UpIHtcbiAgICBsZXQgZWRnZVByZXNlbnQgPSBmYWxzZTtcblxuICAgIGlmICghZWRnZVByZXNlbnQpIHtcbiAgICAgIGNvbnN0IGN5Y2xpY0VkZ2UgPSBlZGdlLCAgLy8vXG4gICAgICAgICAgICBjeWNsaWNFZGdlUHJlc2VudCA9IHRoaXMuaXNDeWNsaWNFZGdlUHJlc2VudChjeWNsaWNFZGdlKTtcblxuICAgICAgZWRnZVByZXNlbnQgPSBjeWNsaWNFZGdlUHJlc2VudDsgIC8vL1xuICAgIH1cblxuICAgIGlmICghZWRnZVByZXNlbnQpIHtcbiAgICAgIGNvbnN0IG5vbkN5Y2xpY0VkZ2UgPSBlZGdlLCAvLy9cbiAgICAgICAgICAgIG5vbkN5Y2xpY0VkZ2VQcmVzZW50ID0gdGhpcy5pc05vbkN5Y2xpY0VkZ2VQcmVzZW50KG5vbkN5Y2xpY0VkZ2UpO1xuXG4gICAgICBlZGdlUHJlc2VudCA9IG5vbkN5Y2xpY0VkZ2VQcmVzZW50OyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gZWRnZVByZXNlbnQ7XG4gIH1cblxuICBpc0N5Y2xpY0VkZ2VQcmVzZW50KGN5Y2xpY0VkZ2UpIHtcbiAgICBjb25zdCBjeWNsaWNFZGdlc0luY2x1ZGVzRWRnZSA9IGNoZWNrRWRnZXNJbmNsdWRlc0VkZ2UodGhpcy5jeWNsaWNFZGdlcywgY3ljbGljRWRnZSksXG4gICAgICAgICAgY3ljbGljRWRnZVByZXNlbnQgPSBjeWNsaWNFZGdlc0luY2x1ZGVzRWRnZTsgIC8vL1xuXG4gICAgcmV0dXJuIGN5Y2xpY0VkZ2VQcmVzZW50O1xuICB9XG5cbiAgaXNOb25DeWNsaWNFZGdlUHJlc2VudChlZGdlKSB7XG4gICAgbGV0IG5vbkN5Y2xpY0VkZ2VQcmVzZW50ID0gZmFsc2U7XG5cbiAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gZWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgc291cmNlVmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSk7XG5cbiAgICBpZiAoc291cmNlVmVydGV4ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0YXJnZXRWZXJ0ZXhOYW1lID0gZWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgaWYgKHRhcmdldFZlcnRleCAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBlZGdlUHJlc2VudCA9IHNvdXJjZVZlcnRleC5pc0VkZ2VQcmVzZW50QnlUYXJnZXRWZXJ0ZXgodGFyZ2V0VmVydGV4KTtcblxuICAgICAgICBub25DeWNsaWNFZGdlUHJlc2VudCA9IGVkZ2VQcmVzZW50OyAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9uQ3ljbGljRWRnZVByZXNlbnQ7XG4gIH1cblxuICBpc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGNvbnN0IHZlcnRleE5hbWVzID0gdGhpcy5nZXRWZXJ0ZXhOYW1lcygpLFxuICAgICAgICAgIHZlcnRleE5hbWVzSW5jbHVkZXNWZXJ0ZXhOYW1lID0gdmVydGV4TmFtZXMuaW5jbHVkZXModmVydGV4TmFtZSksXG4gICAgICAgICAgdmVydGV4UHJlc2VudCA9IHZlcnRleE5hbWVzSW5jbHVkZXNWZXJ0ZXhOYW1lOyAgLy8vXG5cbiAgICByZXR1cm4gdmVydGV4UHJlc2VudDtcbiAgfVxuXG4gIGFkZEVkZ2UoZWRnZSkge1xuICAgIGNvbnN0IG5vbkN5Y2xpY0VkZ2UgPSBlZGdlLCAvLy9cbiAgICAgICAgICBzdWNjZXNzID0gdGhpcy5hZGROb25DeWNsaWNFZGdlKG5vbkN5Y2xpY0VkZ2UpO1xuXG4gICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICBjb25zdCBjeWNsaWNFZGdlID0gZWRnZTsgIC8vL1xuXG4gICAgICB0aGlzLmFkZEN5Y2xpY0VkZ2UoY3ljbGljRWRnZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1Y2Nlc3M7XG4gIH1cblxuICBhZGRFZGdlcyhlZGdlcykge1xuICAgIGVkZ2VzLmZvckVhY2goKGVkZ2UpID0+IHtcbiAgICAgIHRoaXMuYWRkRWRnZShlZGdlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZEN5Y2xpY0VkZ2UoY3ljbGljRWRnZSkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VzSW5jbHVkZXNDeWNsaWNFZGdlID0gY2hlY2tFZGdlc0luY2x1ZGVzRWRnZSh0aGlzLmN5Y2xpY0VkZ2VzLCBjeWNsaWNFZGdlKTtcblxuICAgIGlmICghY3ljbGljRWRnZXNJbmNsdWRlc0N5Y2xpY0VkZ2UpIHtcbiAgICAgIHRoaXMuY3ljbGljRWRnZXMucHVzaChjeWNsaWNFZGdlKTtcbiAgICB9XG4gIH1cblxuICBhZGRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGNvbnN0IHZlcnRleFByZXNlbnQgPSB0aGlzLmlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgIGlmICghdmVydGV4UHJlc2VudCkge1xuICAgICAgY29uc3QgdmVydGV4TmFtZXMgPSB0aGlzLmdldFZlcnRleE5hbWVzKCksXG4gICAgICAgICAgICB2ZXJ0ZXhOYW1lc0xlbmd0aCA9IHZlcnRleE5hbWVzLmxlbmd0aCxcbiAgICAgICAgICAgIG5hbWUgPSB2ZXJ0ZXhOYW1lLCAgLy8vXG4gICAgICAgICAgICBpbmRleCA9IHZlcnRleE5hbWVzTGVuZ3RoLCAvLy9cbiAgICAgICAgICAgIHZlcnRleCA9IFZlcnRleC5mcm9tTmFtZUFuZEluZGV4KG5hbWUsIGluZGV4KTtcblxuICAgICAgdGhpcy5zZXRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSwgdmVydGV4KTtcbiAgICB9XG5cbiAgICBjb25zdCB2ZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgIHJldHVybiB2ZXJ0ZXg7XG4gIH1cblxuICByZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGNvbnN0IHZlcnRleFByZXNlbnQgPSB0aGlzLmlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgIGlmICghdmVydGV4UHJlc2VudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgdmVydGV4LmZvckVhY2hJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoKGltbWVkaWF0ZVN1Y2Nlc3NWZXJ0ZXgpID0+IHtcbiAgICAgIGNvbnN0IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ID0gdmVydGV4OyAgLy8vXG5cbiAgICAgIGltbWVkaWF0ZVN1Y2Nlc3NWZXJ0ZXgucmVtb3ZlSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpO1xuICAgIH0pO1xuXG4gICAgdmVydGV4LmZvckVhY2hJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCgoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpID0+IHtcbiAgICAgIGNvbnN0IGltbWVkaWF0ZVN1Y2Nlc3NWZXJ0ZXggPSB2ZXJ0ZXg7ICAvLy9cblxuICAgICAgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgucmVtb3ZlSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KGltbWVkaWF0ZVN1Y2Nlc3NWZXJ0ZXgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5kZWxldGVWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICBjb25zdCB2ZXJ0ZXhlcyA9IHRoaXMuZ2V0VmVydGV4ZXMoKSxcbiAgICAgICAgICBkZWxldGVkVmVydGV4ID0gdmVydGV4LCAvLy9cbiAgICAgICAgICBkZWxldGVkVmVydGV4SW5kZXggPSBkZWxldGVkVmVydGV4LmdldEluZGV4KCk7XG5cbiAgICB2ZXJ0ZXhlcy5mb3JFYWNoKCh2ZXJ0ZXgpID0+IHtcbiAgICAgIGNvbnN0IHZlcnRleEluZGV4ID0gdmVydGV4LmdldEluZGV4KCk7XG5cbiAgICAgIGlmICh2ZXJ0ZXhJbmRleCA+IGRlbGV0ZWRWZXJ0ZXhJbmRleCkge1xuICAgICAgICB2ZXJ0ZXguZGVjcmVtZW50SW5kZXgoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuZmlsdGVyQ3ljbGljRWRnZXMoKTtcbiAgfVxuXG4gIHJlbW92ZUVkZ2UoZWRnZSwgcmVtb3ZlU3RyYW5kZWRWZXJ0ZXhlcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgY3ljbGljRWRnZSA9IGVkZ2UsICAvLy9cbiAgICAgICAgICBjeWNsaWNFZGdlUHJlc2VudCA9IHRoaXMuaXNDeWNsaWNFZGdlUHJlc2VudChjeWNsaWNFZGdlKTtcblxuICAgIGlmIChjeWNsaWNFZGdlUHJlc2VudCkge1xuICAgICAgdGhpcy5yZW1vdmVDeWNsaWNFZGdlKGN5Y2xpY0VkZ2UpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgbm9uQ3ljbGljRWRnZSA9IGVkZ2UsIC8vL1xuICAgICAgICAgIG5vbkN5Y2xpY0VkZ2VQcmVzZW50ID0gdGhpcy5pc05vbkN5Y2xpY0VkZ2VQcmVzZW50KG5vbkN5Y2xpY0VkZ2UpO1xuXG4gICAgaWYgKG5vbkN5Y2xpY0VkZ2VQcmVzZW50KSB7XG4gICAgICB0aGlzLnJlbW92ZU5vbkN5Y2xpY0VkZ2Uobm9uQ3ljbGljRWRnZSwgcmVtb3ZlU3RyYW5kZWRWZXJ0ZXhlcyk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlRWRnZXMoZWRnZXMsIHJlbW92ZVN0cmFuZGVkVmVydGV4ZXMgPSBmYWxzZSkge1xuICAgIGVkZ2VzLmZvckVhY2goKGVkZ2UpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlRWRnZShlZGdlLCByZW1vdmVTdHJhbmRlZFZlcnRleGVzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZUN5Y2xpY0VkZ2UoY3ljbGljRWRnZSkge1xuICAgIHJlbW92ZUVkZ2VGcm9tRWRnZXMoY3ljbGljRWRnZSwgdGhpcy5jeWNsaWNFZGdlcyk7XG4gIH1cblxuICByZW1vdmVOb25DeWNsaWNFZGdlKG5vbkN5Y2xpY0VkZ2UsIHJlbW92ZVN0cmFuZGVkVmVydGV4ZXMpIHtcbiAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gbm9uQ3ljbGljRWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IG5vbkN5Y2xpY0VkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgIHNvdXJjZVZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpLFxuICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgc291cmNlVmVydGV4LnJlbW92ZUltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCh0YXJnZXRWZXJ0ZXgpO1xuXG4gICAgdGFyZ2V0VmVydGV4LnJlbW92ZUltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KHNvdXJjZVZlcnRleCk7XG5cbiAgICBpZiAocmVtb3ZlU3RyYW5kZWRWZXJ0ZXhlcykge1xuICAgICAgY29uc3Qgc291cmNlVmVydGV4U3RyYW5kZWQgPSBzb3VyY2VWZXJ0ZXguaXNTdHJhbmRlZCgpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4U3RyYW5kZWQgPSB0YXJnZXRWZXJ0ZXguaXNTdHJhbmRlZCgpO1xuXG4gICAgICBpZiAoc291cmNlVmVydGV4U3RyYW5kZWQpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0YXJnZXRWZXJ0ZXhTdHJhbmRlZCkge1xuICAgICAgICB0aGlzLnJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmZpbHRlckN5Y2xpY0VkZ2VzKCk7XG4gIH1cblxuICByZW1vdmVBbGxFZGdlc0FuZFZlcnRleGVzKCkge1xuICAgIHRoaXMudmVydGV4TWFwID0ge307XG4gICAgdGhpcy5jeWNsaWNFZGdlcyA9IFtdO1xuICB9XG5cbiAgcmVtb3ZlRWRnZXNCeVNvdXJjZVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgcmVtb3ZlU3RyYW5kZWRWZXJ0ZXhlcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgY3ljbGljRWRnZXMgPSBmaWx0ZXJFZGdlc0J5U291cmNlVmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0aGlzLmN5Y2xpY0VkZ2VzKSxcbiAgICAgICAgICBlZGdlcyA9IHRoaXMuZ2V0RWRnZXNCeVNvdXJjZVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSk7XG5cbiAgICB0aGlzLnJlbW92ZUVkZ2VzKGN5Y2xpY0VkZ2VzLCByZW1vdmVTdHJhbmRlZFZlcnRleGVzKTtcblxuICAgIHRoaXMucmVtb3ZlRWRnZXMoZWRnZXMsIHJlbW92ZVN0cmFuZGVkVmVydGV4ZXMpO1xuICB9XG5cbiAgcmVtb3ZlRWRnZXNCeVRhcmdldFZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSwgcmVtb3ZlU3RyYW5kZWRWZXJ0ZXhlcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgY3ljbGljRWRnZXMgPSBmaWx0ZXJFZGdlc0J5VGFyZ2V0VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lLCB0aGlzLmN5Y2xpY0VkZ2VzKSxcbiAgICAgICAgICBlZGdlcyA9IHRoaXMuZ2V0RWRnZXNCeVRhcmdldFZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICB0aGlzLnJlbW92ZUVkZ2VzKGN5Y2xpY0VkZ2VzLCByZW1vdmVTdHJhbmRlZFZlcnRleGVzKTtcblxuICAgIHRoaXMucmVtb3ZlRWRnZXMoZWRnZXMsIHJlbW92ZVN0cmFuZGVkVmVydGV4ZXMpO1xuICB9XG5cbiAgYWRkTm9uQ3ljbGljRWRnZShub25DeWNsaWNFZGdlKSB7XG4gICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNvdXJjZVZlcnRleE5hbWUgPSBub25DeWNsaWNFZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSxcbiAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gbm9uQ3ljbGljRWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCk7XG5cbiAgICBpZiAoc291cmNlVmVydGV4TmFtZSAhPT0gdGFyZ2V0VmVydGV4TmFtZSkge1xuICAgICAgY29uc3Qgc291cmNlVmVydGV4ID0gdGhpcy5hZGRWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSksXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXggPSB0aGlzLmFkZFZlcnRleEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICAgIGVkZ2VQcmVzZW50ID0gc291cmNlVmVydGV4LmlzRWRnZVByZXNlbnRCeVRhcmdldFZlcnRleCh0YXJnZXRWZXJ0ZXgpO1xuXG4gICAgICBpZiAoZWRnZVByZXNlbnQpIHtcbiAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBzb3VyY2VWZXJ0ZXhJbmRleCA9IHNvdXJjZVZlcnRleC5nZXRJbmRleCgpLFxuICAgICAgICAgICAgICB0YXJnZXRWZXJ0ZXhJbmRleCA9IHRhcmdldFZlcnRleC5nZXRJbmRleCgpLFxuICAgICAgICAgICAgICBpbnZhbGlkYXRpbmdFZGdlID0gKHNvdXJjZVZlcnRleEluZGV4ID4gdGFyZ2V0VmVydGV4SW5kZXgpO1xuXG4gICAgICAgIHN1Y2Nlc3MgPSBpbnZhbGlkYXRpbmdFZGdlID9cbiAgICAgICAgICAgICAgICAgICAgYWRkSW52YWxpZGF0aW5nRWRnZUJ5VmVydGV4ZXMoc291cmNlVmVydGV4LCB0YXJnZXRWZXJ0ZXgpIDpcbiAgICAgICAgICAgICAgICAgICAgICB0cnVlO1xuXG4gICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgY29uc3QgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXggPSBzb3VyY2VWZXJ0ZXgsIC8vL1xuICAgICAgICAgICAgICAgIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCA9IHRhcmdldFZlcnRleDsgLy8vXG5cbiAgICAgICAgICBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleC5hZGRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KTtcblxuICAgICAgICAgIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleC5hZGRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3VjY2VzcztcbiAgfVxuXG4gIGZpbHRlckN5Y2xpY0VkZ2VzKCkge1xuICAgIGZpbHRlcih0aGlzLmN5Y2xpY0VkZ2VzLCAoY3ljbGljRWRnZSkgPT4ge1xuICAgICAgY29uc3Qgc291cmNlVmVydGV4TmFtZSA9IGN5Y2xpY0VkZ2UuZ2V0U291cmNlVmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IGN5Y2xpY0VkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgc291cmNlVmVydGV4UHJlc2VudCA9IHRoaXMuaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4UHJlc2VudCA9IHRoaXMuaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgICBpZiAoc291cmNlVmVydGV4UHJlc2VudCAmJiB0YXJnZXRWZXJ0ZXhQcmVzZW50KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZmlsdGVyKHRoaXMuY3ljbGljRWRnZXMsIChjeWNsaWNFZGdlKSA9PiB7XG4gICAgICBjb25zdCBlZGdlID0gY3ljbGljRWRnZSwgIC8vL1xuICAgICAgICAgICAgc3VjY2VzcyA9IHRoaXMuYWRkRWRnZShlZGdlKTtcblxuICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUsIHZlcnRleCkge1xuICAgIHRoaXMudmVydGV4TWFwW3ZlcnRleE5hbWVdID0gdmVydGV4O1xuICB9XG5cbiAgZGVsZXRlVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBkZWxldGUgdGhpcy52ZXJ0ZXhNYXBbdmVydGV4TmFtZV07XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgdmVydGV4TWFwID0ge30sXG4gICAgICAgICAgY3ljbGljRWRnZXMgPSBbXSxcbiAgICAgICAgICBkaXJlY3RlZEdyYXBoID0gbmV3IERpcmVjdGVkR3JhcGgodmVydGV4TWFwLCBjeWNsaWNFZGdlcyk7XG4gICAgXG4gICAgcmV0dXJuIGRpcmVjdGVkR3JhcGg7ICAgIFxuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEludmFsaWRhdGluZ0VkZ2VCeVZlcnRleGVzKHNvdXJjZVZlcnRleCwgdGFyZ2V0VmVydGV4KSB7XG4gIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgY29uc3QgZm9yd2FyZHNBZmZlY3RlZFZlcnRleGVzID0gdGFyZ2V0VmVydGV4LnJldHJpZXZlRm9yd2FyZHNBZmZlY3RlZFZlcnRleGVzKHNvdXJjZVZlcnRleCksXG4gICAgICAgIGxhc3RGb3J3YXJkc0FmZmVjdGVkVmVydGV4ID0gbGFzdChmb3J3YXJkc0FmZmVjdGVkVmVydGV4ZXMpLFxuICAgICAgICByZXN1bHRzSW5DeWNsZSA9IChsYXN0Rm9yd2FyZHNBZmZlY3RlZFZlcnRleCA9PT0gc291cmNlVmVydGV4KTtcblxuICBpZiAoIXJlc3VsdHNJbkN5Y2xlKSB7XG4gICAgY29uc3QgYmFja3dhcmRzQWZmZWN0ZWRWZXJ0ZXhlcyA9IHNvdXJjZVZlcnRleC5yZXRyaWV2ZUJhY2t3YXJkc0FmZmVjdGVkVmVydGV4ZXMoKTtcblxuICAgIG9yZGVyVmVydGV4ZXMoYmFja3dhcmRzQWZmZWN0ZWRWZXJ0ZXhlcyk7XG5cbiAgICBvcmRlclZlcnRleGVzKGZvcndhcmRzQWZmZWN0ZWRWZXJ0ZXhlcyk7XG5cbiAgICBjb25zdCBhZmZlY3RlZFZlcnRleGVzID0gW10uY29uY2F0KGJhY2t3YXJkc0FmZmVjdGVkVmVydGV4ZXMpLmNvbmNhdChmb3J3YXJkc0FmZmVjdGVkVmVydGV4ZXMpLFxuICAgICAgICAgIGFmZmVjdGVkVmVydGV4SW5kaWNlcyA9IGFmZmVjdGVkVmVydGV4ZXMubWFwKChhZmZlY3RlZFZlcnRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYWZmZWN0ZWRWZXJ0ZXhJbmRleCA9IGFmZmVjdGVkVmVydGV4LmdldEluZGV4KCk7XG5cbiAgICAgICAgICAgIHJldHVybiBhZmZlY3RlZFZlcnRleEluZGV4O1xuICAgICAgICAgIH0pO1xuXG4gICAgYWZmZWN0ZWRWZXJ0ZXhJbmRpY2VzLnNvcnQoKGluZGV4QSwgaW5kZXhCKSA9PiB7XG4gICAgICBpZiAoZmFsc2UpIHtcbiAgICAgICAgLy8vXG4gICAgICB9IGVsc2UgaWYgKGluZGV4QSA8IGluZGV4Qikge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9IGVsc2UgaWYgKGluZGV4QSA+IGluZGV4Qikge1xuICAgICAgICByZXR1cm4gKzE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGFmZmVjdGVkVmVydGV4ZXMuZm9yRWFjaCgoYWZmZWN0ZWRWZXJ0ZXgsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBhZmZlY3RlZFZlcnRleEluZGV4ID0gYWZmZWN0ZWRWZXJ0ZXhJbmRpY2VzW2luZGV4XTtcblxuICAgICAgYWZmZWN0ZWRWZXJ0ZXguc2V0SW5kZXgoYWZmZWN0ZWRWZXJ0ZXhJbmRleCk7XG4gICAgfSk7XG5cbiAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBzdWNjZXNzO1xufVxuIl0sIm5hbWVzIjpbIkRpcmVjdGVkR3JhcGgiLCJsYXN0IiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsImZpbHRlciIsInZlcnRleE1hcCIsImN5Y2xpY0VkZ2VzIiwiZ2V0VmVydGV4TmFwIiwiZ2V0Q3ljbGljRWRnZXMiLCJnZXRWZXJ0ZXhlcyIsInZlcnRleE1hcFZhbHVlcyIsIk9iamVjdCIsInZhbHVlcyIsInZlcnRleGVzIiwiZ2V0VmVydGV4TmFtZXMiLCJ2ZXJ0ZXhNYXBLZXlzIiwia2V5cyIsInZlcnRleE5hbWVzIiwiZ2V0T3JkZXJlZFZlcnRleE5hbWVzIiwib3JkZXJWZXJ0ZXhlcyIsIm9yZGVyZWRWZXJ0ZXhlcyIsIm9yZGVyZWRWZXJ0ZXhOYW1lcyIsInZlcnRleE5hbWVzRnJvbVZlcnRleGVzIiwiZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lIiwidmVydGV4TmFtZSIsInZlcnRleFByZXNlbnQiLCJpc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUiLCJ2ZXJ0ZXgiLCJnZXRFZGdlc0J5U291cmNlVmVydGV4TmFtZSIsInNvdXJjZVZlcnRleE5hbWUiLCJlZGdlcyIsInNvdXJjZVZlcnRleCIsImltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzIiwiZ2V0SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXMiLCJ0YXJnZXRWZXJ0ZXhOYW1lcyIsImZvckVhY2giLCJ0YXJnZXRWZXJ0ZXhOYW1lIiwiZWRnZSIsIkVkZ2UiLCJmcm9tU291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUiLCJwdXNoIiwiZ2V0RWRnZXNCeVRhcmdldFZlcnRleE5hbWUiLCJ0YXJnZXRWZXJ0ZXgiLCJpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzIiwiZ2V0SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcyIsInNvdXJjZVZlcnRleE5hbWVzIiwiZ2V0Rmlyc3RDeWNsZSIsImZpcnN0Q3ljbGUiLCJjeWNsZXNQcmVzZW50IiwiYXJlQ3ljbGVzUHJlc2VudCIsImZpcnN0Q3ljbGljRWRnZSIsImdldFNvdXJjZVZlcnRleE5hbWUiLCJnZXRUYXJnZXRWZXJ0ZXhOYW1lIiwiZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoIiwicHJlZGVjZXNzb3JWZXJ0ZXhlcyIsInRlcm1pbmF0ZSIsImN5Y2xlIiwiQ3ljbGUiLCJmcm9tU291cmNlVmVydGV4QW5kUHJlZGVjZXNzb3JWZXJ0ZXhlcyIsImN5Y2xpY0VkZ2VzTGVuZ3RoIiwibGVuZ3RoIiwiaXNFZGdlUHJlc2VudCIsImVkZ2VQcmVzZW50IiwiY3ljbGljRWRnZSIsImN5Y2xpY0VkZ2VQcmVzZW50IiwiaXNDeWNsaWNFZGdlUHJlc2VudCIsIm5vbkN5Y2xpY0VkZ2UiLCJub25DeWNsaWNFZGdlUHJlc2VudCIsImlzTm9uQ3ljbGljRWRnZVByZXNlbnQiLCJjeWNsaWNFZGdlc0luY2x1ZGVzRWRnZSIsImNoZWNrRWRnZXNJbmNsdWRlc0VkZ2UiLCJpc0VkZ2VQcmVzZW50QnlUYXJnZXRWZXJ0ZXgiLCJ2ZXJ0ZXhOYW1lc0luY2x1ZGVzVmVydGV4TmFtZSIsImluY2x1ZGVzIiwiYWRkRWRnZSIsInN1Y2Nlc3MiLCJhZGROb25DeWNsaWNFZGdlIiwiYWRkQ3ljbGljRWRnZSIsImFkZEVkZ2VzIiwiY3ljbGljRWRnZXNJbmNsdWRlc0N5Y2xpY0VkZ2UiLCJhZGRWZXJ0ZXhCeVZlcnRleE5hbWUiLCJ2ZXJ0ZXhOYW1lc0xlbmd0aCIsIm5hbWUiLCJpbmRleCIsIlZlcnRleCIsImZyb21OYW1lQW5kSW5kZXgiLCJzZXRWZXJ0ZXhCeVZlcnRleE5hbWUiLCJyZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUiLCJmb3JFYWNoSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4IiwiaW1tZWRpYXRlU3VjY2Vzc1ZlcnRleCIsImltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4IiwicmVtb3ZlSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgiLCJmb3JFYWNoSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgiLCJyZW1vdmVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgiLCJkZWxldGVWZXJ0ZXhCeVZlcnRleE5hbWUiLCJkZWxldGVkVmVydGV4IiwiZGVsZXRlZFZlcnRleEluZGV4IiwiZ2V0SW5kZXgiLCJ2ZXJ0ZXhJbmRleCIsImRlY3JlbWVudEluZGV4IiwiZmlsdGVyQ3ljbGljRWRnZXMiLCJyZW1vdmVFZGdlIiwicmVtb3ZlU3RyYW5kZWRWZXJ0ZXhlcyIsInJlbW92ZUN5Y2xpY0VkZ2UiLCJyZW1vdmVOb25DeWNsaWNFZGdlIiwicmVtb3ZlRWRnZXMiLCJyZW1vdmVFZGdlRnJvbUVkZ2VzIiwic291cmNlVmVydGV4U3RyYW5kZWQiLCJpc1N0cmFuZGVkIiwidGFyZ2V0VmVydGV4U3RyYW5kZWQiLCJyZW1vdmVBbGxFZGdlc0FuZFZlcnRleGVzIiwicmVtb3ZlRWRnZXNCeVNvdXJjZVZlcnRleE5hbWUiLCJmaWx0ZXJFZGdlc0J5U291cmNlVmVydGV4TmFtZSIsInJlbW92ZUVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lIiwiZmlsdGVyRWRnZXNCeVRhcmdldFZlcnRleE5hbWUiLCJzb3VyY2VWZXJ0ZXhJbmRleCIsInRhcmdldFZlcnRleEluZGV4IiwiaW52YWxpZGF0aW5nRWRnZSIsImFkZEludmFsaWRhdGluZ0VkZ2VCeVZlcnRleGVzIiwiaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4IiwiYWRkSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4IiwiYWRkSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgiLCJzb3VyY2VWZXJ0ZXhQcmVzZW50IiwidGFyZ2V0VmVydGV4UHJlc2VudCIsImZyb21Ob3RoaW5nIiwiZGlyZWN0ZWRHcmFwaCIsImZvcndhcmRzQWZmZWN0ZWRWZXJ0ZXhlcyIsInJldHJpZXZlRm9yd2FyZHNBZmZlY3RlZFZlcnRleGVzIiwibGFzdEZvcndhcmRzQWZmZWN0ZWRWZXJ0ZXgiLCJyZXN1bHRzSW5DeWNsZSIsImJhY2t3YXJkc0FmZmVjdGVkVmVydGV4ZXMiLCJyZXRyaWV2ZUJhY2t3YXJkc0FmZmVjdGVkVmVydGV4ZXMiLCJhZmZlY3RlZFZlcnRleGVzIiwiY29uY2F0IiwiYWZmZWN0ZWRWZXJ0ZXhJbmRpY2VzIiwibWFwIiwiYWZmZWN0ZWRWZXJ0ZXgiLCJhZmZlY3RlZFZlcnRleEluZGV4Iiwic29ydCIsImluZGV4QSIsImluZGV4QiIsInNldEluZGV4Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWFxQkE7Ozt5QkFYVTsyREFFZDs0REFDQzs2REFDQzt1QkFFb0M7cUJBQ21FOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFILElBQVFDLE9BQXdCQywwQkFBeEJELE1BQU1FLFFBQWtCRCwwQkFBbEJDLE9BQU9DLFNBQVdGLDBCQUFYRTtBQUVOLElBQUEsQUFBTUosOEJBMlpsQixBQTNaWTthQUFNQSxjQUNQSyxTQUFTLEVBQUVDLFdBQVc7Z0NBRGZOO1FBRWpCLElBQUksQ0FBQ0ssWUFBWUE7UUFDakIsSUFBSSxDQUFDQyxjQUFjQTs7a0JBSEZOOztZQU1uQk8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRjtZQUNkOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRjtZQUNkOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNB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