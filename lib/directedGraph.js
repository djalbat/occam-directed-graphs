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
                var cyclicEdgesIncludesEdge = (0, _edge1.checkEdgesIncludesEdge)(this.cyclicEdges, edge);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kaXJlY3RlZEdyYXBoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEVkZ2UgZnJvbSBcIi4vZWRnZVwiO1xuaW1wb3J0IEN5Y2xlIGZyb20gXCIuL2N5Y2xlXCI7XG5pbXBvcnQgVmVydGV4IGZyb20gXCIuL3ZlcnRleFwiO1xuXG5pbXBvcnQgeyBvcmRlclZlcnRleGVzLCB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhlcyB9IGZyb20gXCIuL3V0aWxpdGllcy92ZXJ0ZXhcIjtcbmltcG9ydCB7IHJlbW92ZUVkZ2VGcm9tRWRnZXMsIGNoZWNrRWRnZXNJbmNsdWRlc0VkZ2UsIGVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lLCBlZGdlc0J5VGFyZ2V0VmVydGV4TmFtZSB9IGZyb20gXCIuL3V0aWxpdGllcy9lZGdlXCI7XG5cbmNvbnN0IHsgbGFzdCwgZmlyc3QsIGZpbHRlciB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdGVkR3JhcGgge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhNYXAsIGN5Y2xpY0VkZ2VzKSB7XG4gICAgdGhpcy52ZXJ0ZXhNYXAgPSB2ZXJ0ZXhNYXA7XG4gICAgdGhpcy5jeWNsaWNFZGdlcyA9IGN5Y2xpY0VkZ2VzO1xuICB9XG5cbiAgZ2V0VmVydGV4TmFwKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleE1hcDtcbiAgfVxuXG4gIGdldEN5Y2xpY0VkZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLmN5Y2xpY0VkZ2VzO1xuICB9XG5cbiAgZ2V0VmVydGV4ZXMoKSB7XG4gICAgY29uc3QgdmVydGV4TWFwVmFsdWVzID0gT2JqZWN0LnZhbHVlcyh0aGlzLnZlcnRleE1hcCksXG4gICAgICAgICAgdmVydGV4ZXMgPSB2ZXJ0ZXhNYXBWYWx1ZXM7IC8vL1xuXG4gICAgcmV0dXJuIHZlcnRleGVzO1xuICB9XG5cbiAgZ2V0VmVydGV4TmFtZXMoKSB7XG4gICAgY29uc3QgdmVydGV4TWFwS2V5cyA9IE9iamVjdC5rZXlzKHRoaXMudmVydGV4TWFwKSxcbiAgICAgICAgICB2ZXJ0ZXhOYW1lcyA9IHZlcnRleE1hcEtleXM7ICAvLy9cblxuICAgIHJldHVybiB2ZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGdldE9yZGVyZWRWZXJ0ZXhOYW1lcygpIHtcbiAgICBjb25zdCB2ZXJ0ZXhlcyA9IHRoaXMuZ2V0VmVydGV4ZXMoKTtcblxuICAgIG9yZGVyVmVydGV4ZXModmVydGV4ZXMpO1xuXG4gICAgY29uc3Qgb3JkZXJlZFZlcnRleGVzID0gdmVydGV4ZXMsIC8vL1xuICAgICAgICAgIG9yZGVyZWRWZXJ0ZXhOYW1lcyA9IHZlcnRleE5hbWVzRnJvbVZlcnRleGVzKG9yZGVyZWRWZXJ0ZXhlcyk7XG5cbiAgICByZXR1cm4gb3JkZXJlZFZlcnRleE5hbWVzO1xuICB9XG5cbiAgZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQcmVzZW50ID0gdGhpcy5pc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUodmVydGV4TmFtZSksXG4gICAgICAgICAgdmVydGV4ID0gdmVydGV4UHJlc2VudCA/XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLnZlcnRleE1hcFt2ZXJ0ZXhOYW1lXSA6XG4gICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgICByZXR1cm4gdmVydGV4O1xuICB9XG5cbiAgZ2V0RWRnZXNCeVNvdXJjZVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSkge1xuICAgIGNvbnN0IGVkZ2VzID0gW10sXG4gICAgICAgICAgc291cmNlVmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSk7XG5cbiAgICBpZiAoc291cmNlVmVydGV4ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcyA9IHNvdXJjZVZlcnRleC5nZXRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcygpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZXMgPSBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lczsgIC8vL1xuXG4gICAgICB0YXJnZXRWZXJ0ZXhOYW1lcy5mb3JFYWNoKCh0YXJnZXRWZXJ0ZXhOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGVkZ2UgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgICBlZGdlcy5wdXNoKGVkZ2UpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVkZ2VzO1xuICB9XG5cbiAgZ2V0RWRnZXNCeVRhcmdldFZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSkge1xuICAgIGNvbnN0IGVkZ2VzID0gW10sXG4gICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICBpZiAodGFyZ2V0VmVydGV4ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzID0gdGFyZ2V0VmVydGV4LmdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMoKSxcbiAgICAgICAgICAgIHNvdXJjZVZlcnRleE5hbWVzID0gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lczsgIC8vL1xuXG4gICAgICBzb3VyY2VWZXJ0ZXhOYW1lcy5mb3JFYWNoKChzb3VyY2VWZXJ0ZXhOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGVkZ2UgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgICBlZGdlcy5wdXNoKGVkZ2UpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVkZ2VzO1xuICB9XG5cbiAgZ2V0Rmlyc3RDeWNsZSgpIHtcbiAgICBsZXQgZmlyc3RDeWNsZSA9IG51bGw7XG5cbiAgICBjb25zdCBjeWNsZXNQcmVzZW50ID0gdGhpcy5hcmVDeWNsZXNQcmVzZW50KCk7XG5cbiAgICBpZiAoY3ljbGVzUHJlc2VudCkge1xuICAgICAgY29uc3QgZmlyc3RDeWNsaWNFZGdlID0gZmlyc3QodGhpcy5jeWNsaWNFZGdlcyksXG4gICAgICAgICAgICBzb3VyY2VWZXJ0ZXhOYW1lID0gZmlyc3RDeWNsaWNFZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSwgLy8vXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gZmlyc3RDeWNsaWNFZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKSwgLy8vXG4gICAgICAgICAgICBzb3VyY2VWZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgICB0YXJnZXRWZXJ0ZXguZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoKCh2ZXJ0ZXgsIHByZWRlY2Vzc29yVmVydGV4ZXMpID0+IHtcbiAgICAgICAgbGV0IHRlcm1pbmF0ZSA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh2ZXJ0ZXggPT09IHNvdXJjZVZlcnRleCkge1xuICAgICAgICAgIHRlcm1pbmF0ZSA9IHRydWU7XG5cbiAgICAgICAgICBjb25zdCBjeWNsZSA9IEN5Y2xlLmZyb21Tb3VyY2VWZXJ0ZXhBbmRQcmVkZWNlc3NvclZlcnRleGVzKHNvdXJjZVZlcnRleCwgcHJlZGVjZXNzb3JWZXJ0ZXhlcyk7ICAvLy9cblxuICAgICAgICAgIGZpcnN0Q3ljbGUgPSBjeWNsZTsgLy8vXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGVybWluYXRlO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpcnN0Q3ljbGU7XG4gIH1cblxuICBpc0VkZ2VQcmVzZW50KGVkZ2UpIHtcbiAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gZWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IGVkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgIGVkZ2VQcmVzZW50ID0gdGhpcy5pc0VkZ2VQcmVzZW50QnlTb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgIHJldHVybiBlZGdlUHJlc2VudDtcbiAgfVxuXG4gIGFyZUN5Y2xlc1ByZXNlbnQoKSB7XG4gICAgY29uc3QgY3ljbGljRWRnZXNMZW5ndGggPSB0aGlzLmN5Y2xpY0VkZ2VzLmxlbmd0aCxcbiAgICAgICAgICBjeWNsZXNQcmVzZW50ID0gKGN5Y2xpY0VkZ2VzTGVuZ3RoID4gMCk7XG5cbiAgICByZXR1cm4gY3ljbGVzUHJlc2VudDtcbiAgfVxuXG4gIGlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgdmVydGV4TmFtZXMgPSB0aGlzLmdldFZlcnRleE5hbWVzKCksXG4gICAgICAgICAgdmVydGV4TmFtZXNJbmNsdWRlc1ZlcnRleE5hbWUgPSB2ZXJ0ZXhOYW1lcy5pbmNsdWRlcyh2ZXJ0ZXhOYW1lKSxcbiAgICAgICAgICB2ZXJ0ZXhQcmVzZW50ID0gdmVydGV4TmFtZXNJbmNsdWRlc1ZlcnRleE5hbWU7ICAvLy9cblxuICAgIHJldHVybiB2ZXJ0ZXhQcmVzZW50O1xuICB9XG5cbiAgYWRkRWRnZShlZGdlKSB7XG4gICAgY29uc3Qgc291cmNlVmVydGV4TmFtZSA9IGVkZ2UuZ2V0U291cmNlVmVydGV4TmFtZSgpLFxuICAgICAgICAgIHRhcmdldFZlcnRleE5hbWUgPSBlZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKSxcbiAgICAgICAgICBzdWNjZXNzID0gdGhpcy5hZGRFZGdlQnlTb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgY29uc3QgY3ljbGljRWRnZSA9IGVkZ2U7ICAvLy9cblxuICAgICAgdGhpcy5hZGRDeWNsaWNFZGdlKGN5Y2xpY0VkZ2UpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWNjZXNzO1xuICB9XG5cbiAgYWRkRWRnZXMoZWRnZXMpIHtcbiAgICBlZGdlcy5mb3JFYWNoKChlZGdlKSA9PiB7XG4gICAgICB0aGlzLmFkZEVkZ2UoZWRnZSk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRDeWNsaWNFZGdlKGN5Y2xpY0VkZ2UpIHtcbiAgICBjb25zdCBjeWNsaWNFZGdlc0luY2x1ZGVzQ3ljbGljRWRnZSA9IGNoZWNrRWRnZXNJbmNsdWRlc0VkZ2UodGhpcy5jeWNsaWNFZGdlcywgY3ljbGljRWRnZSk7XG5cbiAgICBpZiAoIWN5Y2xpY0VkZ2VzSW5jbHVkZXNDeWNsaWNFZGdlKSB7XG4gICAgICB0aGlzLmN5Y2xpY0VkZ2VzLnB1c2goY3ljbGljRWRnZSk7XG4gICAgfVxuICB9XG5cbiAgYWRkVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQcmVzZW50ID0gdGhpcy5pc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICBpZiAoIXZlcnRleFByZXNlbnQpIHtcbiAgICAgIGNvbnN0IHZlcnRleE5hbWVzID0gdGhpcy5nZXRWZXJ0ZXhOYW1lcygpLFxuICAgICAgICAgICAgdmVydGV4TmFtZXNMZW5ndGggPSB2ZXJ0ZXhOYW1lcy5sZW5ndGgsXG4gICAgICAgICAgICBuYW1lID0gdmVydGV4TmFtZSwgIC8vL1xuICAgICAgICAgICAgaW5kZXggPSB2ZXJ0ZXhOYW1lc0xlbmd0aCwgLy8vXG4gICAgICAgICAgICB2ZXJ0ZXggPSBWZXJ0ZXguZnJvbU5hbWVBbmRJbmRleChuYW1lLCBpbmRleCk7XG5cbiAgICAgIHRoaXMuc2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUsIHZlcnRleCk7XG4gICAgfVxuXG4gICAgY29uc3QgdmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICByZXR1cm4gdmVydGV4O1xuICB9XG5cbiAgcmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBsZXQgcmVtb3ZlZEVkZ2VzID0gbnVsbDtcblxuICAgIGNvbnN0IHZlcnRleFByZXNlbnQgPSB0aGlzLmlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgIGlmICh2ZXJ0ZXhQcmVzZW50KSB7XG4gICAgICByZW1vdmVkRWRnZXMgPSBbXTtcblxuICAgICAgY29uc3QgdmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICAgIHZlcnRleC5mb3JFYWNoSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KChpbW1lZGlhdGVTdWNjZXNzVmVydGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ID0gdmVydGV4LCAgLy8vXG4gICAgICAgICAgICAgIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZSA9IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4LmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgaW1tZWRpYXRlU3VjY2Vzc1ZlcnRleE5hbWUgPSBpbW1lZGlhdGVTdWNjZXNzVmVydGV4LmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgcmVtb3ZlZEVkZ2VTb3VyY2VWZXJ0ZXhOYW1lID0gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lLCAvLy9cbiAgICAgICAgICAgICAgcmVtb3ZlZEVkZ2VUYXJnZXRWZXJ0ZXhOYW1lID0gaW1tZWRpYXRlU3VjY2Vzc1ZlcnRleE5hbWUsIC8vL1xuICAgICAgICAgICAgICByZW1vdmVkRWRnZSA9IG5ldyBFZGdlKHJlbW92ZWRFZGdlU291cmNlVmVydGV4TmFtZSwgcmVtb3ZlZEVkZ2VUYXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgICByZW1vdmVkRWRnZXMucHVzaChyZW1vdmVkRWRnZSk7XG5cbiAgICAgICAgaW1tZWRpYXRlU3VjY2Vzc1ZlcnRleC5yZW1vdmVJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCk7XG4gICAgICB9KTtcblxuICAgICAgdmVydGV4LmZvckVhY2hJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCgoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpID0+IHtcbiAgICAgICAgY29uc3QgaW1tZWRpYXRlU3VjY2Vzc1ZlcnRleCA9IHZlcnRleCwgIC8vL1xuICAgICAgICAgICAgICBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWUgPSBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleC5nZXROYW1lKCksXG4gICAgICAgICAgICAgIGltbWVkaWF0ZVN1Y2Nlc3NWZXJ0ZXhOYW1lID0gaW1tZWRpYXRlU3VjY2Vzc1ZlcnRleC5nZXROYW1lKCksICAvLy9cbiAgICAgICAgICAgICAgcmVtb3ZlZEVkZ2VTb3VyY2VWZXJ0ZXhOYW1lID0gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lLCAvLy9cbiAgICAgICAgICAgICAgcmVtb3ZlZEVkZ2VUYXJnZXRWZXJ0ZXhOYW1lID0gaW1tZWRpYXRlU3VjY2Vzc1ZlcnRleE5hbWUsIC8vL1xuICAgICAgICAgICAgICByZW1vdmVkRWRnZSA9IG5ldyBFZGdlKHJlbW92ZWRFZGdlU291cmNlVmVydGV4TmFtZSwgcmVtb3ZlZEVkZ2VUYXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgICByZW1vdmVkRWRnZXMucHVzaChyZW1vdmVkRWRnZSk7XG5cbiAgICAgICAgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgucmVtb3ZlSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KGltbWVkaWF0ZVN1Y2Nlc3NWZXJ0ZXgpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuZGVsZXRlVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgICBjb25zdCBkZWxldGVkVmVydGV4ID0gdmVydGV4LCAvLy9cbiAgICAgICAgICAgIGRlbGV0ZWRWZXJ0ZXhJbmRleCA9IGRlbGV0ZWRWZXJ0ZXguZ2V0SW5kZXgoKSxcbiAgICAgICAgICAgIHZlcnRleGVzID0gdGhpcy5nZXRWZXJ0ZXhlcygpLFxuICAgICAgICAgICAgYWZmZWN0ZWRWZXJ0ZXhlcyA9IHZlcnRleGVzLnJlZHVjZSgoYWZmZWN0ZWRWZXJ0ZXhlcywgdmVydGV4KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHZlcnRleEluZGV4ID0gdmVydGV4LmdldEluZGV4KCksXG4gICAgICAgICAgICAgICAgICAgIHZlcnRleEFmZmVjdGVkID0gKHZlcnRleEluZGV4ID4gZGVsZXRlZFZlcnRleEluZGV4KTtcblxuICAgICAgICAgICAgICBpZiAodmVydGV4QWZmZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhZmZlY3RlZFZlcnRleCA9IHZlcnRleDsgIC8vL1xuXG4gICAgICAgICAgICAgICAgYWZmZWN0ZWRWZXJ0ZXhlcy5wdXNoKGFmZmVjdGVkVmVydGV4KTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiBhZmZlY3RlZFZlcnRleGVzO1xuICAgICAgICAgICAgfSwgW10pO1xuXG4gICAgICBhZmZlY3RlZFZlcnRleGVzLmZvckVhY2goKGFmZmVjdGVkVmVydGV4KSA9PiB7XG4gICAgICAgIGFmZmVjdGVkVmVydGV4LmRlY3JlbWVudEluZGV4KCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmZpbHRlckN5Y2xpY0VkZ2VzKCk7XG5cbiAgICByZXR1cm4gcmVtb3ZlZEVkZ2VzO1xuICB9XG5cbiAgcmVtb3ZlRWRnZShlZGdlLCByZW1vdmVTdHJhbmRlZFZlcnRleGVzID0gZmFsc2UpIHtcbiAgICBjb25zdCBjeWNsaWNFZGdlc0luY2x1ZGVzRWRnZSA9IGNoZWNrRWRnZXNJbmNsdWRlc0VkZ2UodGhpcy5jeWNsaWNFZGdlcywgZWRnZSk7XG5cbiAgICBpZiAoY3ljbGljRWRnZXNJbmNsdWRlc0VkZ2UpIHtcbiAgICAgIGNvbnN0IGN5Y2xpY0VkZ2UgPSBlZGdlOyAgLy8vXG5cbiAgICAgIHJlbW92ZUVkZ2VGcm9tRWRnZXMoY3ljbGljRWRnZSwgdGhpcy5jeWNsaWNFZGdlcyk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBlZGdlUHJlc2VudCA9IHRoaXMuaXNFZGdlUHJlc2VudChlZGdlKTtcblxuICAgIGlmIChlZGdlUHJlc2VudCkge1xuICAgICAgY29uc3Qgc291cmNlVmVydGV4TmFtZSA9IGVkZ2UuZ2V0U291cmNlVmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IGVkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpO1xuXG4gICAgICB0aGlzLnJlbW92ZUVkZ2VCeVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgICBpZiAocmVtb3ZlU3RyYW5kZWRWZXJ0ZXhlcykge1xuICAgICAgICBjb25zdCBzb3VyY2VWZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSksXG4gICAgICAgICAgICAgIHNvdXJjZVZlcnRleFN0cmFuZGVkID0gc291cmNlVmVydGV4LmlzU3RyYW5kZWQoKSxcbiAgICAgICAgICAgICAgdGFyZ2V0VmVydGV4U3RyYW5kZWQgPSB0YXJnZXRWZXJ0ZXguaXNTdHJhbmRlZCgpO1xuXG4gICAgICAgIGlmIChzb3VyY2VWZXJ0ZXhTdHJhbmRlZCkge1xuICAgICAgICAgIHRoaXMucmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRhcmdldFZlcnRleFN0cmFuZGVkKSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5maWx0ZXJDeWNsaWNFZGdlcygpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUVkZ2VzKGVkZ2VzLCByZW1vdmVTdHJhbmRlZFZlcnRleGVzID0gZmFsc2UpIHtcbiAgICBlZGdlcy5mb3JFYWNoKChlZGdlKSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZUVkZ2UoZWRnZSwgcmVtb3ZlU3RyYW5kZWRWZXJ0ZXhlcyk7XG4gICAgfSk7XG4gIH1cblxuICByZW1vdmVBbGxFZGdlc0FuZFZlcnRleGVzKCkge1xuICAgIHRoaXMudmVydGV4TWFwID0ge307XG4gICAgdGhpcy5jeWNsaWNFZGdlcyA9IFtdO1xuICB9XG5cbiAgcmVtb3ZlRWRnZXNCeVNvdXJjZVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgcmVtb3ZlU3RyYW5kZWRWZXJ0ZXhlcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgY3ljbGljRWRnZXMgPSBlZGdlc0J5U291cmNlVmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0aGlzLmN5Y2xpY0VkZ2VzKSxcbiAgICAgICAgICBlZGdlcyA9IHRoaXMuZ2V0RWRnZXNCeVNvdXJjZVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSk7XG5cbiAgICB0aGlzLnJlbW92ZUVkZ2VzKGN5Y2xpY0VkZ2VzLCByZW1vdmVTdHJhbmRlZFZlcnRleGVzKTtcblxuICAgIHRoaXMucmVtb3ZlRWRnZXMoZWRnZXMsIHJlbW92ZVN0cmFuZGVkVmVydGV4ZXMpO1xuICB9XG5cbiAgcmVtb3ZlRWRnZXNCeVRhcmdldFZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSwgcmVtb3ZlU3RyYW5kZWRWZXJ0ZXhlcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgY3ljbGljRWRnZXMgPSBlZGdlc0J5VGFyZ2V0VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lLCB0aGlzLmN5Y2xpY0VkZ2VzKSxcbiAgICAgICAgICBlZGdlcyA9IHRoaXMuZ2V0RWRnZXNCeVRhcmdldFZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICB0aGlzLnJlbW92ZUVkZ2VzKGN5Y2xpY0VkZ2VzLCByZW1vdmVTdHJhbmRlZFZlcnRleGVzKTtcblxuICAgIHRoaXMucmVtb3ZlRWRnZXMoZWRnZXMsIHJlbW92ZVN0cmFuZGVkVmVydGV4ZXMpO1xuICB9XG5cbiAgYWRkRWRnZUJ5U291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSkge1xuICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICBpZiAoc291cmNlVmVydGV4TmFtZSAhPT0gdGFyZ2V0VmVydGV4TmFtZSkge1xuICAgICAgY29uc3Qgc291cmNlVmVydGV4ID0gdGhpcy5hZGRWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSksXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXggPSB0aGlzLmFkZFZlcnRleEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICAgIGVkZ2VQcmVzZW50ID0gc291cmNlVmVydGV4LmlzRWRnZVByZXNlbnRCeVRhcmdldFZlcnRleCh0YXJnZXRWZXJ0ZXgpO1xuXG4gICAgICBpZiAoZWRnZVByZXNlbnQpIHtcbiAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBzb3VyY2VWZXJ0ZXhJbmRleCA9IHNvdXJjZVZlcnRleC5nZXRJbmRleCgpLFxuICAgICAgICAgICAgICB0YXJnZXRWZXJ0ZXhJbmRleCA9IHRhcmdldFZlcnRleC5nZXRJbmRleCgpLFxuICAgICAgICAgICAgICBpbnZhbGlkYXRpbmdFZGdlID0gKHNvdXJjZVZlcnRleEluZGV4ID4gdGFyZ2V0VmVydGV4SW5kZXgpO1xuXG4gICAgICAgIHN1Y2Nlc3MgPSBpbnZhbGlkYXRpbmdFZGdlID9cbiAgICAgICAgICAgICAgICAgICAgYWRkSW52YWxpZGF0aW5nRWRnZUJ5VmVydGV4ZXMoc291cmNlVmVydGV4LCB0YXJnZXRWZXJ0ZXgpIDpcbiAgICAgICAgICAgICAgICAgICAgICB0cnVlO1xuXG4gICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgY29uc3QgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXggPSBzb3VyY2VWZXJ0ZXgsIC8vL1xuICAgICAgICAgICAgICAgIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCA9IHRhcmdldFZlcnRleDsgLy8vXG5cbiAgICAgICAgICBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleC5hZGRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KTtcblxuICAgICAgICAgIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleC5hZGRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3VjY2VzcztcbiAgfVxuXG4gIHJlbW92ZUVkZ2VCeVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpIHtcbiAgICBjb25zdCBzb3VyY2VWZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICB0YXJnZXRWZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgIHNvdXJjZVZlcnRleC5yZW1vdmVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgodGFyZ2V0VmVydGV4KTtcblxuICAgIHRhcmdldFZlcnRleC5yZW1vdmVJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleChzb3VyY2VWZXJ0ZXgpO1xuICB9XG5cbiAgaXNFZGdlUHJlc2VudEJ5U291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSkge1xuICAgIGxldCBlZGdlUHJlc2VudCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc291cmNlVmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSksXG4gICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSksXG4gICAgICAgICAgc291cmNlVmVydGV4QW5kVGFyZ2V0VmVydGV4UHJlc2VudCA9IChzb3VyY2VWZXJ0ZXggIT09IG51bGwpICYmICh0YXJnZXRWZXJ0ZXggIT09IG51bGwpO1xuXG4gICAgaWYgKHNvdXJjZVZlcnRleEFuZFRhcmdldFZlcnRleFByZXNlbnQpIHtcbiAgICAgIGVkZ2VQcmVzZW50ID0gc291cmNlVmVydGV4LmlzRWRnZVByZXNlbnRCeVRhcmdldFZlcnRleCh0YXJnZXRWZXJ0ZXgpO1xuICAgIH1cblxuICAgIHJldHVybiBlZGdlUHJlc2VudDtcbiAgfVxuXG4gIGZpbHRlckN5Y2xpY0VkZ2VzKCkge1xuICAgIGZpbHRlcih0aGlzLmN5Y2xpY0VkZ2VzLCAoY3ljbGljRWRnZSkgPT4ge1xuICAgICAgY29uc3Qgc291cmNlVmVydGV4TmFtZSA9IGN5Y2xpY0VkZ2UuZ2V0U291cmNlVmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IGN5Y2xpY0VkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgc291cmNlVmVydGV4UHJlc2VudCA9IHRoaXMuaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4UHJlc2VudCA9IHRoaXMuaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgICBpZiAoc291cmNlVmVydGV4UHJlc2VudCAmJiB0YXJnZXRWZXJ0ZXhQcmVzZW50KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZmlsdGVyKHRoaXMuY3ljbGljRWRnZXMsIChjeWNsaWNFZGdlKSA9PiB7XG4gICAgICBjb25zdCBlZGdlID0gY3ljbGljRWRnZSwgIC8vL1xuICAgICAgICAgICAgc3VjY2VzcyA9IHRoaXMuYWRkRWRnZShlZGdlKTtcblxuICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUsIHZlcnRleCkge1xuICAgIHRoaXMudmVydGV4TWFwW3ZlcnRleE5hbWVdID0gdmVydGV4O1xuICB9XG5cbiAgZGVsZXRlVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBkZWxldGUgdGhpcy52ZXJ0ZXhNYXBbdmVydGV4TmFtZV07XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgdmVydGV4TWFwID0ge30sXG4gICAgICAgICAgY3ljbGljRWRnZXMgPSBbXSxcbiAgICAgICAgICBkaXJlY3RlZEdyYXBoID0gbmV3IERpcmVjdGVkR3JhcGgodmVydGV4TWFwLCBjeWNsaWNFZGdlcyk7XG4gICAgXG4gICAgcmV0dXJuIGRpcmVjdGVkR3JhcGg7ICAgIFxuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEludmFsaWRhdGluZ0VkZ2VCeVZlcnRleGVzKHNvdXJjZVZlcnRleCwgdGFyZ2V0VmVydGV4KSB7XG4gIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgY29uc3QgZm9yd2FyZHNBZmZlY3RlZFZlcnRleGVzID0gdGFyZ2V0VmVydGV4LnJldHJpZXZlRm9yd2FyZHNBZmZlY3RlZFZlcnRleGVzKHNvdXJjZVZlcnRleCksXG4gICAgICAgIGxhc3RGb3J3YXJkc0FmZmVjdGVkVmVydGV4ID0gbGFzdChmb3J3YXJkc0FmZmVjdGVkVmVydGV4ZXMpLFxuICAgICAgICByZXN1bHRzSW5DeWNsZSA9IChsYXN0Rm9yd2FyZHNBZmZlY3RlZFZlcnRleCA9PT0gc291cmNlVmVydGV4KTtcblxuICBpZiAoIXJlc3VsdHNJbkN5Y2xlKSB7XG4gICAgY29uc3QgYmFja3dhcmRzQWZmZWN0ZWRWZXJ0ZXhlcyA9IHNvdXJjZVZlcnRleC5yZXRyaWV2ZUJhY2t3YXJkc0FmZmVjdGVkVmVydGV4ZXMoKTtcblxuICAgIG9yZGVyVmVydGV4ZXMoYmFja3dhcmRzQWZmZWN0ZWRWZXJ0ZXhlcyk7XG5cbiAgICBvcmRlclZlcnRleGVzKGZvcndhcmRzQWZmZWN0ZWRWZXJ0ZXhlcyk7XG5cbiAgICBjb25zdCBhZmZlY3RlZFZlcnRleGVzID0gW10uY29uY2F0KGJhY2t3YXJkc0FmZmVjdGVkVmVydGV4ZXMpLmNvbmNhdChmb3J3YXJkc0FmZmVjdGVkVmVydGV4ZXMpLFxuICAgICAgICAgIGFmZmVjdGVkVmVydGV4SW5kaWNlcyA9IGFmZmVjdGVkVmVydGV4ZXMubWFwKChhZmZlY3RlZFZlcnRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYWZmZWN0ZWRWZXJ0ZXhJbmRleCA9IGFmZmVjdGVkVmVydGV4LmdldEluZGV4KCk7XG5cbiAgICAgICAgICAgIHJldHVybiBhZmZlY3RlZFZlcnRleEluZGV4O1xuICAgICAgICAgIH0pO1xuXG4gICAgYWZmZWN0ZWRWZXJ0ZXhJbmRpY2VzLnNvcnQoKGluZGV4QSwgaW5kZXhCKSA9PiB7XG4gICAgICBpZiAoZmFsc2UpIHtcbiAgICAgICAgLy8vXG4gICAgICB9IGVsc2UgaWYgKGluZGV4QSA8IGluZGV4Qikge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9IGVsc2UgaWYgKGluZGV4QSA+IGluZGV4Qikge1xuICAgICAgICByZXR1cm4gKzE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGFmZmVjdGVkVmVydGV4ZXMuZm9yRWFjaCgoYWZmZWN0ZWRWZXJ0ZXgsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBhZmZlY3RlZFZlcnRleEluZGV4ID0gYWZmZWN0ZWRWZXJ0ZXhJbmRpY2VzW2luZGV4XTtcblxuICAgICAgYWZmZWN0ZWRWZXJ0ZXguc2V0SW5kZXgoYWZmZWN0ZWRWZXJ0ZXhJbmRleCk7XG4gICAgfSk7XG5cbiAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBzdWNjZXNzO1xufVxuIl0sIm5hbWVzIjpbIkRpcmVjdGVkR3JhcGgiLCJsYXN0IiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsImZpbHRlciIsInZlcnRleE1hcCIsImN5Y2xpY0VkZ2VzIiwiZ2V0VmVydGV4TmFwIiwiZ2V0Q3ljbGljRWRnZXMiLCJnZXRWZXJ0ZXhlcyIsInZlcnRleE1hcFZhbHVlcyIsIk9iamVjdCIsInZhbHVlcyIsInZlcnRleGVzIiwiZ2V0VmVydGV4TmFtZXMiLCJ2ZXJ0ZXhNYXBLZXlzIiwia2V5cyIsInZlcnRleE5hbWVzIiwiZ2V0T3JkZXJlZFZlcnRleE5hbWVzIiwib3JkZXJWZXJ0ZXhlcyIsIm9yZGVyZWRWZXJ0ZXhlcyIsIm9yZGVyZWRWZXJ0ZXhOYW1lcyIsInZlcnRleE5hbWVzRnJvbVZlcnRleGVzIiwiZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lIiwidmVydGV4TmFtZSIsInZlcnRleFByZXNlbnQiLCJpc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUiLCJ2ZXJ0ZXgiLCJnZXRFZGdlc0J5U291cmNlVmVydGV4TmFtZSIsInNvdXJjZVZlcnRleE5hbWUiLCJlZGdlcyIsInNvdXJjZVZlcnRleCIsImltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzIiwiZ2V0SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXMiLCJ0YXJnZXRWZXJ0ZXhOYW1lcyIsImZvckVhY2giLCJ0YXJnZXRWZXJ0ZXhOYW1lIiwiZWRnZSIsIkVkZ2UiLCJmcm9tU291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUiLCJwdXNoIiwiZ2V0RWRnZXNCeVRhcmdldFZlcnRleE5hbWUiLCJ0YXJnZXRWZXJ0ZXgiLCJpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzIiwiZ2V0SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcyIsInNvdXJjZVZlcnRleE5hbWVzIiwiZ2V0Rmlyc3RDeWNsZSIsImZpcnN0Q3ljbGUiLCJjeWNsZXNQcmVzZW50IiwiYXJlQ3ljbGVzUHJlc2VudCIsImZpcnN0Q3ljbGljRWRnZSIsImdldFNvdXJjZVZlcnRleE5hbWUiLCJnZXRUYXJnZXRWZXJ0ZXhOYW1lIiwiZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoIiwicHJlZGVjZXNzb3JWZXJ0ZXhlcyIsInRlcm1pbmF0ZSIsImN5Y2xlIiwiQ3ljbGUiLCJmcm9tU291cmNlVmVydGV4QW5kUHJlZGVjZXNzb3JWZXJ0ZXhlcyIsImlzRWRnZVByZXNlbnQiLCJlZGdlUHJlc2VudCIsImlzRWRnZVByZXNlbnRCeVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lIiwiY3ljbGljRWRnZXNMZW5ndGgiLCJsZW5ndGgiLCJ2ZXJ0ZXhOYW1lc0luY2x1ZGVzVmVydGV4TmFtZSIsImluY2x1ZGVzIiwiYWRkRWRnZSIsInN1Y2Nlc3MiLCJhZGRFZGdlQnlTb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZSIsImN5Y2xpY0VkZ2UiLCJhZGRDeWNsaWNFZGdlIiwiYWRkRWRnZXMiLCJjeWNsaWNFZGdlc0luY2x1ZGVzQ3ljbGljRWRnZSIsImNoZWNrRWRnZXNJbmNsdWRlc0VkZ2UiLCJhZGRWZXJ0ZXhCeVZlcnRleE5hbWUiLCJ2ZXJ0ZXhOYW1lc0xlbmd0aCIsIm5hbWUiLCJpbmRleCIsIlZlcnRleCIsImZyb21OYW1lQW5kSW5kZXgiLCJzZXRWZXJ0ZXhCeVZlcnRleE5hbWUiLCJyZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUiLCJyZW1vdmVkRWRnZXMiLCJmb3JFYWNoSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4IiwiaW1tZWRpYXRlU3VjY2Vzc1ZlcnRleCIsImltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4IiwiaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lIiwiZ2V0TmFtZSIsImltbWVkaWF0ZVN1Y2Nlc3NWZXJ0ZXhOYW1lIiwicmVtb3ZlZEVkZ2VTb3VyY2VWZXJ0ZXhOYW1lIiwicmVtb3ZlZEVkZ2VUYXJnZXRWZXJ0ZXhOYW1lIiwicmVtb3ZlZEVkZ2UiLCJyZW1vdmVJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCIsImZvckVhY2hJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCIsInJlbW92ZUltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCIsImRlbGV0ZVZlcnRleEJ5VmVydGV4TmFtZSIsImRlbGV0ZWRWZXJ0ZXgiLCJkZWxldGVkVmVydGV4SW5kZXgiLCJnZXRJbmRleCIsImFmZmVjdGVkVmVydGV4ZXMiLCJyZWR1Y2UiLCJ2ZXJ0ZXhJbmRleCIsInZlcnRleEFmZmVjdGVkIiwiYWZmZWN0ZWRWZXJ0ZXgiLCJkZWNyZW1lbnRJbmRleCIsImZpbHRlckN5Y2xpY0VkZ2VzIiwicmVtb3ZlRWRnZSIsInJlbW92ZVN0cmFuZGVkVmVydGV4ZXMiLCJjeWNsaWNFZGdlc0luY2x1ZGVzRWRnZSIsInJlbW92ZUVkZ2VGcm9tRWRnZXMiLCJyZW1vdmVFZGdlQnlTb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZSIsInNvdXJjZVZlcnRleFN0cmFuZGVkIiwiaXNTdHJhbmRlZCIsInRhcmdldFZlcnRleFN0cmFuZGVkIiwicmVtb3ZlRWRnZXMiLCJyZW1vdmVBbGxFZGdlc0FuZFZlcnRleGVzIiwicmVtb3ZlRWRnZXNCeVNvdXJjZVZlcnRleE5hbWUiLCJlZGdlc0J5U291cmNlVmVydGV4TmFtZSIsInJlbW92ZUVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lIiwiZWRnZXNCeVRhcmdldFZlcnRleE5hbWUiLCJpc0VkZ2VQcmVzZW50QnlUYXJnZXRWZXJ0ZXgiLCJzb3VyY2VWZXJ0ZXhJbmRleCIsInRhcmdldFZlcnRleEluZGV4IiwiaW52YWxpZGF0aW5nRWRnZSIsImFkZEludmFsaWRhdGluZ0VkZ2VCeVZlcnRleGVzIiwiaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4IiwiYWRkSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4IiwiYWRkSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgiLCJzb3VyY2VWZXJ0ZXhBbmRUYXJnZXRWZXJ0ZXhQcmVzZW50Iiwic291cmNlVmVydGV4UHJlc2VudCIsInRhcmdldFZlcnRleFByZXNlbnQiLCJmcm9tTm90aGluZyIsImRpcmVjdGVkR3JhcGgiLCJmb3J3YXJkc0FmZmVjdGVkVmVydGV4ZXMiLCJyZXRyaWV2ZUZvcndhcmRzQWZmZWN0ZWRWZXJ0ZXhlcyIsImxhc3RGb3J3YXJkc0FmZmVjdGVkVmVydGV4IiwicmVzdWx0c0luQ3ljbGUiLCJiYWNrd2FyZHNBZmZlY3RlZFZlcnRleGVzIiwicmV0cmlldmVCYWNrd2FyZHNBZmZlY3RlZFZlcnRleGVzIiwiY29uY2F0IiwiYWZmZWN0ZWRWZXJ0ZXhJbmRpY2VzIiwibWFwIiwiYWZmZWN0ZWRWZXJ0ZXhJbmRleCIsInNvcnQiLCJpbmRleEEiLCJpbmRleEIiLCJzZXRJbmRleCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFhcUJBOzs7eUJBWFU7MkRBRWQ7NERBQ0M7NkRBQ0M7dUJBRW9DO3FCQUN1RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5RyxJQUFRQyxPQUF3QkMsMEJB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