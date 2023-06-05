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
                var cyclicEdgesLength = this.cyclicEdges.length;
                if (cyclicEdgesLength > 0) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kaXJlY3RlZEdyYXBoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEVkZ2UgZnJvbSBcIi4vZWRnZVwiO1xuaW1wb3J0IEN5Y2xlIGZyb20gXCIuL2N5Y2xlXCI7XG5pbXBvcnQgVmVydGV4IGZyb20gXCIuL3ZlcnRleFwiO1xuXG5pbXBvcnQgeyBvcmRlclZlcnRleGVzLCB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhlcyB9IGZyb20gXCIuL3V0aWxpdGllcy92ZXJ0ZXhcIjtcbmltcG9ydCB7IHJlbW92ZUVkZ2VGcm9tRWRnZXMsIGNoZWNrRWRnZXNJbmNsdWRlc0VkZ2UsIGVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lLCBlZGdlc0J5VGFyZ2V0VmVydGV4TmFtZSB9IGZyb20gXCIuL3V0aWxpdGllcy9lZGdlXCI7XG5cbmNvbnN0IHsgbGFzdCwgZmlyc3QsIGZpbHRlciB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdGVkR3JhcGgge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhNYXAsIGN5Y2xpY0VkZ2VzKSB7XG4gICAgdGhpcy52ZXJ0ZXhNYXAgPSB2ZXJ0ZXhNYXA7XG4gICAgdGhpcy5jeWNsaWNFZGdlcyA9IGN5Y2xpY0VkZ2VzO1xuICB9XG5cbiAgZ2V0VmVydGV4TmFwKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleE1hcDtcbiAgfVxuXG4gIGdldEN5Y2xpY0VkZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLmN5Y2xpY0VkZ2VzO1xuICB9XG5cbiAgZ2V0VmVydGV4ZXMoKSB7XG4gICAgY29uc3QgdmVydGV4TWFwVmFsdWVzID0gT2JqZWN0LnZhbHVlcyh0aGlzLnZlcnRleE1hcCksXG4gICAgICAgICAgdmVydGV4ZXMgPSB2ZXJ0ZXhNYXBWYWx1ZXM7IC8vL1xuXG4gICAgcmV0dXJuIHZlcnRleGVzO1xuICB9XG5cbiAgZ2V0VmVydGV4TmFtZXMoKSB7XG4gICAgY29uc3QgdmVydGV4TWFwS2V5cyA9IE9iamVjdC5rZXlzKHRoaXMudmVydGV4TWFwKSxcbiAgICAgICAgICB2ZXJ0ZXhOYW1lcyA9IHZlcnRleE1hcEtleXM7ICAvLy9cblxuICAgIHJldHVybiB2ZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGdldE9yZGVyZWRWZXJ0ZXhOYW1lcygpIHtcbiAgICBjb25zdCB2ZXJ0ZXhlcyA9IHRoaXMuZ2V0VmVydGV4ZXMoKTtcblxuICAgIG9yZGVyVmVydGV4ZXModmVydGV4ZXMpO1xuXG4gICAgY29uc3Qgb3JkZXJlZFZlcnRleGVzID0gdmVydGV4ZXMsIC8vL1xuICAgICAgICAgIG9yZGVyZWRWZXJ0ZXhOYW1lcyA9IHZlcnRleE5hbWVzRnJvbVZlcnRleGVzKG9yZGVyZWRWZXJ0ZXhlcyk7XG5cbiAgICByZXR1cm4gb3JkZXJlZFZlcnRleE5hbWVzO1xuICB9XG5cbiAgZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQcmVzZW50ID0gdGhpcy5pc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUodmVydGV4TmFtZSksXG4gICAgICAgICAgdmVydGV4ID0gdmVydGV4UHJlc2VudCA/XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLnZlcnRleE1hcFt2ZXJ0ZXhOYW1lXSA6XG4gICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgICByZXR1cm4gdmVydGV4O1xuICB9XG5cbiAgZ2V0RWRnZXNCeVNvdXJjZVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSkge1xuICAgIGNvbnN0IGVkZ2VzID0gW10sXG4gICAgICAgICAgc291cmNlVmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSk7XG5cbiAgICBpZiAoc291cmNlVmVydGV4ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcyA9IHNvdXJjZVZlcnRleC5nZXRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcygpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZXMgPSBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lczsgIC8vL1xuXG4gICAgICB0YXJnZXRWZXJ0ZXhOYW1lcy5mb3JFYWNoKCh0YXJnZXRWZXJ0ZXhOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGVkZ2UgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgICBlZGdlcy5wdXNoKGVkZ2UpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVkZ2VzO1xuICB9XG5cbiAgZ2V0RWRnZXNCeVRhcmdldFZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSkge1xuICAgIGNvbnN0IGVkZ2VzID0gW10sXG4gICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdGhpcy5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICBpZiAodGFyZ2V0VmVydGV4ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzID0gdGFyZ2V0VmVydGV4LmdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMoKSxcbiAgICAgICAgICAgIHNvdXJjZVZlcnRleE5hbWVzID0gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lczsgIC8vL1xuXG4gICAgICBzb3VyY2VWZXJ0ZXhOYW1lcy5mb3JFYWNoKChzb3VyY2VWZXJ0ZXhOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGVkZ2UgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgICBlZGdlcy5wdXNoKGVkZ2UpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVkZ2VzO1xuICB9XG5cbiAgZ2V0Rmlyc3RDeWNsZSgpIHtcbiAgICBsZXQgZmlyc3RDeWNsZSA9IG51bGw7XG5cbiAgICBjb25zdCBjeWNsaWNFZGdlc0xlbmd0aCA9IHRoaXMuY3ljbGljRWRnZXMubGVuZ3RoO1xuXG4gICAgaWYgKGN5Y2xpY0VkZ2VzTGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgZmlyc3RDeWNsaWNFZGdlID0gZmlyc3QodGhpcy5jeWNsaWNFZGdlcyksXG4gICAgICAgICAgICBzb3VyY2VWZXJ0ZXhOYW1lID0gZmlyc3RDeWNsaWNFZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSwgLy8vXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gZmlyc3RDeWNsaWNFZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKSwgLy8vXG4gICAgICAgICAgICBzb3VyY2VWZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgICB0YXJnZXRWZXJ0ZXguZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoKCh2ZXJ0ZXgsIHByZWRlY2Vzc29yVmVydGV4ZXMpID0+IHtcbiAgICAgICAgbGV0IHRlcm1pbmF0ZSA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh2ZXJ0ZXggPT09IHNvdXJjZVZlcnRleCkge1xuICAgICAgICAgIHRlcm1pbmF0ZSA9IHRydWU7XG5cbiAgICAgICAgICBjb25zdCBjeWNsZSA9IEN5Y2xlLmZyb21Tb3VyY2VWZXJ0ZXhBbmRQcmVkZWNlc3NvclZlcnRleGVzKHNvdXJjZVZlcnRleCwgcHJlZGVjZXNzb3JWZXJ0ZXhlcyk7ICAvLy9cblxuICAgICAgICAgIGZpcnN0Q3ljbGUgPSBjeWNsZTsgLy8vXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGVybWluYXRlO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpcnN0Q3ljbGU7XG4gIH1cblxuICBpc0VkZ2VQcmVzZW50KGVkZ2UpIHtcbiAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gZWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IGVkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgIGVkZ2VQcmVzZW50ID0gdGhpcy5pc0VkZ2VQcmVzZW50QnlTb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgIHJldHVybiBlZGdlUHJlc2VudDtcbiAgfVxuXG4gIGFyZUN5Y2xlc1ByZXNlbnQoKSB7XG4gICAgY29uc3QgY3ljbGljRWRnZXNMZW5ndGggPSB0aGlzLmN5Y2xpY0VkZ2VzLmxlbmd0aCxcbiAgICAgICAgICBjeWNsZXNQcmVzZW50ID0gKGN5Y2xpY0VkZ2VzTGVuZ3RoID4gMCk7XG5cbiAgICByZXR1cm4gY3ljbGVzUHJlc2VudDtcbiAgfVxuXG4gIGlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgdmVydGV4TmFtZXMgPSB0aGlzLmdldFZlcnRleE5hbWVzKCksXG4gICAgICAgICAgdmVydGV4TmFtZXNJbmNsdWRlc1ZlcnRleE5hbWUgPSB2ZXJ0ZXhOYW1lcy5pbmNsdWRlcyh2ZXJ0ZXhOYW1lKSxcbiAgICAgICAgICB2ZXJ0ZXhQcmVzZW50ID0gdmVydGV4TmFtZXNJbmNsdWRlc1ZlcnRleE5hbWU7ICAvLy9cblxuICAgIHJldHVybiB2ZXJ0ZXhQcmVzZW50O1xuICB9XG5cbiAgYWRkRWRnZShlZGdlKSB7XG4gICAgY29uc3Qgc291cmNlVmVydGV4TmFtZSA9IGVkZ2UuZ2V0U291cmNlVmVydGV4TmFtZSgpLFxuICAgICAgICAgIHRhcmdldFZlcnRleE5hbWUgPSBlZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKSxcbiAgICAgICAgICBzdWNjZXNzID0gdGhpcy5hZGRFZGdlQnlTb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgY29uc3QgY3ljbGljRWRnZXNJbmNsdWRlc0VkZ2UgPSBjaGVja0VkZ2VzSW5jbHVkZXNFZGdlKGVkZ2UsIHRoaXMuY3ljbGljRWRnZXMpO1xuXG4gICAgICBpZiAoIWN5Y2xpY0VkZ2VzSW5jbHVkZXNFZGdlKSB7XG4gICAgICAgIGNvbnN0IGN5Y2xpY0VkZ2UgPSBlZGdlOyAgLy8vXG5cbiAgICAgICAgdGhpcy5jeWNsaWNFZGdlcy5wdXNoKGN5Y2xpY0VkZ2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdWNjZXNzO1xuICB9XG5cbiAgYWRkRWRnZXMoZWRnZXMpIHtcbiAgICBlZGdlcy5mb3JFYWNoKChlZGdlKSA9PiB7XG4gICAgICB0aGlzLmFkZEVkZ2UoZWRnZSk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGNvbnN0IHZlcnRleFByZXNlbnQgPSB0aGlzLmlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgIGlmICghdmVydGV4UHJlc2VudCkge1xuICAgICAgY29uc3QgdmVydGV4TmFtZXMgPSB0aGlzLmdldFZlcnRleE5hbWVzKCksXG4gICAgICAgICAgICB2ZXJ0ZXhOYW1lc0xlbmd0aCA9IHZlcnRleE5hbWVzLmxlbmd0aCxcbiAgICAgICAgICAgIG5hbWUgPSB2ZXJ0ZXhOYW1lLCAgLy8vXG4gICAgICAgICAgICBpbmRleCA9IHZlcnRleE5hbWVzTGVuZ3RoLCAvLy9cbiAgICAgICAgICAgIHZlcnRleCA9IFZlcnRleC5mcm9tTmFtZUFuZEluZGV4KG5hbWUsIGluZGV4KTtcblxuICAgICAgdGhpcy5zZXRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSwgdmVydGV4KTtcbiAgICB9XG5cbiAgICBjb25zdCB2ZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgIHJldHVybiB2ZXJ0ZXg7XG4gIH1cblxuICByZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGxldCByZW1vdmVkRWRnZXMgPSBudWxsO1xuXG4gICAgY29uc3QgdmVydGV4UHJlc2VudCA9IHRoaXMuaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgaWYgKHZlcnRleFByZXNlbnQpIHtcbiAgICAgIHJlbW92ZWRFZGdlcyA9IFtdO1xuXG4gICAgICBjb25zdCB2ZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgICAgdmVydGV4LmZvckVhY2hJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoKGltbWVkaWF0ZVN1Y2Nlc3NWZXJ0ZXgpID0+IHtcbiAgICAgICAgY29uc3QgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXggPSB2ZXJ0ZXgsICAvLy9cbiAgICAgICAgICAgICAgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lID0gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXguZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICBpbW1lZGlhdGVTdWNjZXNzVmVydGV4TmFtZSA9IGltbWVkaWF0ZVN1Y2Nlc3NWZXJ0ZXguZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICByZW1vdmVkRWRnZVNvdXJjZVZlcnRleE5hbWUgPSBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWUsIC8vL1xuICAgICAgICAgICAgICByZW1vdmVkRWRnZVRhcmdldFZlcnRleE5hbWUgPSBpbW1lZGlhdGVTdWNjZXNzVmVydGV4TmFtZSwgLy8vXG4gICAgICAgICAgICAgIHJlbW92ZWRFZGdlID0gbmV3IEVkZ2UocmVtb3ZlZEVkZ2VTb3VyY2VWZXJ0ZXhOYW1lLCByZW1vdmVkRWRnZVRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgICAgIHJlbW92ZWRFZGdlcy5wdXNoKHJlbW92ZWRFZGdlKTtcblxuICAgICAgICBpbW1lZGlhdGVTdWNjZXNzVmVydGV4LnJlbW92ZUltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KTtcbiAgICAgIH0pO1xuXG4gICAgICB2ZXJ0ZXguZm9yRWFjaEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCkgPT4ge1xuICAgICAgICBjb25zdCBpbW1lZGlhdGVTdWNjZXNzVmVydGV4ID0gdmVydGV4LCAgLy8vXG4gICAgICAgICAgICAgIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZSA9IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4LmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgaW1tZWRpYXRlU3VjY2Vzc1ZlcnRleE5hbWUgPSBpbW1lZGlhdGVTdWNjZXNzVmVydGV4LmdldE5hbWUoKSwgIC8vL1xuICAgICAgICAgICAgICByZW1vdmVkRWRnZVNvdXJjZVZlcnRleE5hbWUgPSBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWUsIC8vL1xuICAgICAgICAgICAgICByZW1vdmVkRWRnZVRhcmdldFZlcnRleE5hbWUgPSBpbW1lZGlhdGVTdWNjZXNzVmVydGV4TmFtZSwgLy8vXG4gICAgICAgICAgICAgIHJlbW92ZWRFZGdlID0gbmV3IEVkZ2UocmVtb3ZlZEVkZ2VTb3VyY2VWZXJ0ZXhOYW1lLCByZW1vdmVkRWRnZVRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgICAgIHJlbW92ZWRFZGdlcy5wdXNoKHJlbW92ZWRFZGdlKTtcblxuICAgICAgICBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleC5yZW1vdmVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoaW1tZWRpYXRlU3VjY2Vzc1ZlcnRleCk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5kZWxldGVWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICAgIGNvbnN0IGRlbGV0ZWRWZXJ0ZXggPSB2ZXJ0ZXgsIC8vL1xuICAgICAgICAgICAgZGVsZXRlZFZlcnRleEluZGV4ID0gZGVsZXRlZFZlcnRleC5nZXRJbmRleCgpLFxuICAgICAgICAgICAgdmVydGV4ZXMgPSB0aGlzLmdldFZlcnRleGVzKCksXG4gICAgICAgICAgICBhZmZlY3RlZFZlcnRleGVzID0gdmVydGV4ZXMucmVkdWNlKChhZmZlY3RlZFZlcnRleGVzLCB2ZXJ0ZXgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgdmVydGV4SW5kZXggPSB2ZXJ0ZXguZ2V0SW5kZXgoKSxcbiAgICAgICAgICAgICAgICAgICAgdmVydGV4QWZmZWN0ZWQgPSAodmVydGV4SW5kZXggPiBkZWxldGVkVmVydGV4SW5kZXgpO1xuXG4gICAgICAgICAgICAgIGlmICh2ZXJ0ZXhBZmZlY3RlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFmZmVjdGVkVmVydGV4ID0gdmVydGV4OyAgLy8vXG5cbiAgICAgICAgICAgICAgICBhZmZlY3RlZFZlcnRleGVzLnB1c2goYWZmZWN0ZWRWZXJ0ZXgpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIGFmZmVjdGVkVmVydGV4ZXM7XG4gICAgICAgICAgICB9LCBbXSk7XG5cbiAgICAgIGFmZmVjdGVkVmVydGV4ZXMuZm9yRWFjaCgoYWZmZWN0ZWRWZXJ0ZXgpID0+IHtcbiAgICAgICAgYWZmZWN0ZWRWZXJ0ZXguZGVjcmVtZW50SW5kZXgoKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuZmlsdGVyQ3ljbGljRWRnZXMoKTtcblxuICAgIHJldHVybiByZW1vdmVkRWRnZXM7XG4gIH1cblxuICByZW1vdmVFZGdlKGVkZ2UsIHJlbW92ZVN0cmFuZGVkVmVydGV4ZXMgPSBmYWxzZSkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VzSW5jbHVkZXNFZGdlID0gY2hlY2tFZGdlc0luY2x1ZGVzRWRnZShlZGdlLCB0aGlzLmN5Y2xpY0VkZ2VzKTtcblxuICAgIGlmIChjeWNsaWNFZGdlc0luY2x1ZGVzRWRnZSkge1xuICAgICAgY29uc3QgY3ljbGljRWRnZSA9IGVkZ2U7ICAvLy9cblxuICAgICAgcmVtb3ZlRWRnZUZyb21FZGdlcyhjeWNsaWNFZGdlLCB0aGlzLmN5Y2xpY0VkZ2VzKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGVkZ2VQcmVzZW50ID0gdGhpcy5pc0VkZ2VQcmVzZW50KGVkZ2UpO1xuXG4gICAgaWYgKGVkZ2VQcmVzZW50KSB7XG4gICAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gZWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gZWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCk7XG5cbiAgICAgIHRoaXMucmVtb3ZlRWRnZUJ5U291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICAgIGlmIChyZW1vdmVTdHJhbmRlZFZlcnRleGVzKSB7XG4gICAgICAgIGNvbnN0IHNvdXJjZVZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpLFxuICAgICAgICAgICAgICB0YXJnZXRWZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICAgICAgc291cmNlVmVydGV4U3RyYW5kZWQgPSBzb3VyY2VWZXJ0ZXguaXNTdHJhbmRlZCgpLFxuICAgICAgICAgICAgICB0YXJnZXRWZXJ0ZXhTdHJhbmRlZCA9IHRhcmdldFZlcnRleC5pc1N0cmFuZGVkKCk7XG5cbiAgICAgICAgaWYgKHNvdXJjZVZlcnRleFN0cmFuZGVkKSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGFyZ2V0VmVydGV4U3RyYW5kZWQpIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmZpbHRlckN5Y2xpY0VkZ2VzKCk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlRWRnZXMoZWRnZXMsIHJlbW92ZVN0cmFuZGVkVmVydGV4ZXMgPSBmYWxzZSkge1xuICAgIGVkZ2VzLmZvckVhY2goKGVkZ2UpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlRWRnZShlZGdlLCByZW1vdmVTdHJhbmRlZFZlcnRleGVzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZUFsbEVkZ2VzQW5kVmVydGV4ZXMoKSB7XG4gICAgdGhpcy52ZXJ0ZXhNYXAgPSB7fTtcbiAgICB0aGlzLmN5Y2xpY0VkZ2VzID0gW107XG4gIH1cblxuICByZW1vdmVFZGdlc0J5U291cmNlVmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCByZW1vdmVTdHJhbmRlZFZlcnRleGVzID0gZmFsc2UpIHtcbiAgICBjb25zdCBjeWNsaWNFZGdlcyA9IGVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUsIHRoaXMuY3ljbGljRWRnZXMpLFxuICAgICAgICAgIGVkZ2VzID0gdGhpcy5nZXRFZGdlc0J5U291cmNlVmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKTtcblxuICAgIHRoaXMucmVtb3ZlRWRnZXMoY3ljbGljRWRnZXMsIHJlbW92ZVN0cmFuZGVkVmVydGV4ZXMpO1xuXG4gICAgdGhpcy5yZW1vdmVFZGdlcyhlZGdlcywgcmVtb3ZlU3RyYW5kZWRWZXJ0ZXhlcyk7XG4gIH1cblxuICByZW1vdmVFZGdlc0J5VGFyZ2V0VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lLCByZW1vdmVTdHJhbmRlZFZlcnRleGVzID0gZmFsc2UpIHtcbiAgICBjb25zdCBjeWNsaWNFZGdlcyA9IGVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUsIHRoaXMuY3ljbGljRWRnZXMpLFxuICAgICAgICAgIGVkZ2VzID0gdGhpcy5nZXRFZGdlc0J5VGFyZ2V0VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgIHRoaXMucmVtb3ZlRWRnZXMoY3ljbGljRWRnZXMsIHJlbW92ZVN0cmFuZGVkVmVydGV4ZXMpO1xuXG4gICAgdGhpcy5yZW1vdmVFZGdlcyhlZGdlcywgcmVtb3ZlU3RyYW5kZWRWZXJ0ZXhlcyk7XG4gIH1cblxuICBhZGRFZGdlQnlTb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKSB7XG4gICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgIGlmIChzb3VyY2VWZXJ0ZXhOYW1lICE9PSB0YXJnZXRWZXJ0ZXhOYW1lKSB7XG4gICAgICBjb25zdCBzb3VyY2VWZXJ0ZXggPSB0aGlzLmFkZFZlcnRleEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuYWRkVmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpLFxuICAgICAgICAgICAgZWRnZVByZXNlbnQgPSBzb3VyY2VWZXJ0ZXguaXNFZGdlUHJlc2VudEJ5VGFyZ2V0VmVydGV4KHRhcmdldFZlcnRleCk7XG5cbiAgICAgIGlmIChlZGdlUHJlc2VudCkge1xuICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHNvdXJjZVZlcnRleEluZGV4ID0gc291cmNlVmVydGV4LmdldEluZGV4KCksXG4gICAgICAgICAgICAgIHRhcmdldFZlcnRleEluZGV4ID0gdGFyZ2V0VmVydGV4LmdldEluZGV4KCksXG4gICAgICAgICAgICAgIGludmFsaWRhdGluZ0VkZ2UgPSAoc291cmNlVmVydGV4SW5kZXggPiB0YXJnZXRWZXJ0ZXhJbmRleCk7XG5cbiAgICAgICAgc3VjY2VzcyA9IGludmFsaWRhdGluZ0VkZ2UgP1xuICAgICAgICAgICAgICAgICAgICBhZGRJbnZhbGlkYXRpbmdFZGdlQnlWZXJ0ZXhlcyhzb3VyY2VWZXJ0ZXgsIHRhcmdldFZlcnRleCkgOlxuICAgICAgICAgICAgICAgICAgICAgIHRydWU7XG5cbiAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICBjb25zdCBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCA9IHNvdXJjZVZlcnRleCwgLy8vXG4gICAgICAgICAgICAgICAgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ID0gdGFyZ2V0VmVydGV4OyAvLy9cblxuICAgICAgICAgIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4LmFkZEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgpO1xuXG4gICAgICAgICAgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4LmFkZEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdWNjZXNzO1xuICB9XG5cbiAgcmVtb3ZlRWRnZUJ5U291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSkge1xuICAgIGNvbnN0IHNvdXJjZVZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpLFxuICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgc291cmNlVmVydGV4LnJlbW92ZUltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCh0YXJnZXRWZXJ0ZXgpO1xuXG4gICAgdGFyZ2V0VmVydGV4LnJlbW92ZUltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KHNvdXJjZVZlcnRleCk7XG4gIH1cblxuICBpc0VkZ2VQcmVzZW50QnlTb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKSB7XG4gICAgbGV0IGVkZ2VQcmVzZW50ID0gZmFsc2U7XG5cbiAgICBjb25zdCBzb3VyY2VWZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICB0YXJnZXRWZXJ0ZXggPSB0aGlzLmdldFZlcnRleEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICBzb3VyY2VWZXJ0ZXhBbmRUYXJnZXRWZXJ0ZXhQcmVzZW50ID0gKHNvdXJjZVZlcnRleCAhPT0gbnVsbCkgJiYgKHRhcmdldFZlcnRleCAhPT0gbnVsbCk7XG5cbiAgICBpZiAoc291cmNlVmVydGV4QW5kVGFyZ2V0VmVydGV4UHJlc2VudCkge1xuICAgICAgZWRnZVByZXNlbnQgPSBzb3VyY2VWZXJ0ZXguaXNFZGdlUHJlc2VudEJ5VGFyZ2V0VmVydGV4KHRhcmdldFZlcnRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVkZ2VQcmVzZW50O1xuICB9XG5cbiAgZmlsdGVyQ3ljbGljRWRnZXMoKSB7XG4gICAgZmlsdGVyKHRoaXMuY3ljbGljRWRnZXMsIChjeWNsaWNFZGdlKSA9PiB7XG4gICAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gY3ljbGljRWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gY3ljbGljRWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICBzb3VyY2VWZXJ0ZXhQcmVzZW50ID0gdGhpcy5pc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSksXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXhQcmVzZW50ID0gdGhpcy5pc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICAgIGlmIChzb3VyY2VWZXJ0ZXhQcmVzZW50ICYmIHRhcmdldFZlcnRleFByZXNlbnQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBmaWx0ZXIodGhpcy5jeWNsaWNFZGdlcywgKGN5Y2xpY0VkZ2UpID0+IHtcbiAgICAgIGNvbnN0IGVkZ2UgPSBjeWNsaWNFZGdlLCAgLy8vXG4gICAgICAgICAgICBzdWNjZXNzID0gdGhpcy5hZGRFZGdlKGVkZ2UpO1xuXG4gICAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZXRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSwgdmVydGV4KSB7XG4gICAgdGhpcy52ZXJ0ZXhNYXBbdmVydGV4TmFtZV0gPSB2ZXJ0ZXg7XG4gIH1cblxuICBkZWxldGVWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGRlbGV0ZSB0aGlzLnZlcnRleE1hcFt2ZXJ0ZXhOYW1lXTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCB2ZXJ0ZXhNYXAgPSB7fSxcbiAgICAgICAgICBjeWNsaWNFZGdlcyA9IFtdLFxuICAgICAgICAgIGRpcmVjdGVkR3JhcGggPSBuZXcgRGlyZWN0ZWRHcmFwaCh2ZXJ0ZXhNYXAsIGN5Y2xpY0VkZ2VzKTtcbiAgICBcbiAgICByZXR1cm4gZGlyZWN0ZWRHcmFwaDsgICAgXG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkSW52YWxpZGF0aW5nRWRnZUJ5VmVydGV4ZXMoc291cmNlVmVydGV4LCB0YXJnZXRWZXJ0ZXgpIHtcbiAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICBjb25zdCBmb3J3YXJkc0FmZmVjdGVkVmVydGV4ZXMgPSB0YXJnZXRWZXJ0ZXgucmV0cmlldmVGb3J3YXJkc0FmZmVjdGVkVmVydGV4ZXMoc291cmNlVmVydGV4KSxcbiAgICAgICAgbGFzdEZvcndhcmRzQWZmZWN0ZWRWZXJ0ZXggPSBsYXN0KGZvcndhcmRzQWZmZWN0ZWRWZXJ0ZXhlcyksXG4gICAgICAgIHJlc3VsdHNJbkN5Y2xlID0gKGxhc3RGb3J3YXJkc0FmZmVjdGVkVmVydGV4ID09PSBzb3VyY2VWZXJ0ZXgpO1xuXG4gIGlmICghcmVzdWx0c0luQ3ljbGUpIHtcbiAgICBjb25zdCBiYWNrd2FyZHNBZmZlY3RlZFZlcnRleGVzID0gc291cmNlVmVydGV4LnJldHJpZXZlQmFja3dhcmRzQWZmZWN0ZWRWZXJ0ZXhlcygpO1xuXG4gICAgb3JkZXJWZXJ0ZXhlcyhiYWNrd2FyZHNBZmZlY3RlZFZlcnRleGVzKTtcblxuICAgIG9yZGVyVmVydGV4ZXMoZm9yd2FyZHNBZmZlY3RlZFZlcnRleGVzKTtcblxuICAgIGNvbnN0IGFmZmVjdGVkVmVydGV4ZXMgPSBbXS5jb25jYXQoYmFja3dhcmRzQWZmZWN0ZWRWZXJ0ZXhlcykuY29uY2F0KGZvcndhcmRzQWZmZWN0ZWRWZXJ0ZXhlcyksXG4gICAgICAgICAgYWZmZWN0ZWRWZXJ0ZXhJbmRpY2VzID0gYWZmZWN0ZWRWZXJ0ZXhlcy5tYXAoKGFmZmVjdGVkVmVydGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhZmZlY3RlZFZlcnRleEluZGV4ID0gYWZmZWN0ZWRWZXJ0ZXguZ2V0SW5kZXgoKTtcblxuICAgICAgICAgICAgcmV0dXJuIGFmZmVjdGVkVmVydGV4SW5kZXg7XG4gICAgICAgICAgfSk7XG5cbiAgICBhZmZlY3RlZFZlcnRleEluZGljZXMuc29ydCgoaW5kZXhBLCBpbmRleEIpID0+IHtcbiAgICAgIGlmIChmYWxzZSkge1xuICAgICAgICAvLy9cbiAgICAgIH0gZWxzZSBpZiAoaW5kZXhBIDwgaW5kZXhCKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH0gZWxzZSBpZiAoaW5kZXhBID4gaW5kZXhCKSB7XG4gICAgICAgIHJldHVybiArMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgYWZmZWN0ZWRWZXJ0ZXhlcy5mb3JFYWNoKChhZmZlY3RlZFZlcnRleCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGFmZmVjdGVkVmVydGV4SW5kZXggPSBhZmZlY3RlZFZlcnRleEluZGljZXNbaW5kZXhdO1xuXG4gICAgICBhZmZlY3RlZFZlcnRleC5zZXRJbmRleChhZmZlY3RlZFZlcnRleEluZGV4KTtcbiAgICB9KTtcblxuICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHN1Y2Nlc3M7XG59XG4iXSwibmFtZXMiOlsiRGlyZWN0ZWRHcmFwaCIsImxhc3QiLCJhcnJheVV0aWxpdGllcyIsImZpcnN0IiwiZmlsdGVyIiwidmVydGV4TWFwIiwiY3ljbGljRWRnZXMiLCJnZXRWZXJ0ZXhOYXAiLCJnZXRDeWNsaWNFZGdlcyIsImdldFZlcnRleGVzIiwidmVydGV4TWFwVmFsdWVzIiwiT2JqZWN0IiwidmFsdWVzIiwidmVydGV4ZXMiLCJnZXRWZXJ0ZXhOYW1lcyIsInZlcnRleE1hcEtleXMiLCJrZXlzIiwidmVydGV4TmFtZXMiLCJnZXRPcmRlcmVkVmVydGV4TmFtZXMiLCJvcmRlclZlcnRleGVzIiwib3JkZXJlZFZlcnRleGVzIiwib3JkZXJlZFZlcnRleE5hbWVzIiwidmVydGV4TmFtZXNGcm9tVmVydGV4ZXMiLCJnZXRWZXJ0ZXhCeVZlcnRleE5hbWUiLCJ2ZXJ0ZXhOYW1lIiwidmVydGV4UHJlc2VudCIsImlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZSIsInZlcnRleCIsImdldEVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lIiwic291cmNlVmVydGV4TmFtZSIsImVkZ2VzIiwic291cmNlVmVydGV4IiwiaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXMiLCJnZXRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcyIsInRhcmdldFZlcnRleE5hbWVzIiwiZm9yRWFjaCIsInRhcmdldFZlcnRleE5hbWUiLCJlZGdlIiwiRWRnZSIsImZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZSIsInB1c2giLCJnZXRFZGdlc0J5VGFyZ2V0VmVydGV4TmFtZSIsInRhcmdldFZlcnRleCIsImltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMiLCJnZXRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzIiwic291cmNlVmVydGV4TmFtZXMiLCJnZXRGaXJzdEN5Y2xlIiwiZmlyc3RDeWNsZSIsImN5Y2xpY0VkZ2VzTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RDeWNsaWNFZGdlIiwiZ2V0U291cmNlVmVydGV4TmFtZSIsImdldFRhcmdldFZlcnRleE5hbWUiLCJmb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2giLCJwcmVkZWNlc3NvclZlcnRleGVzIiwidGVybWluYXRlIiwiY3ljbGUiLCJDeWNsZSIsImZyb21Tb3VyY2VWZXJ0ZXhBbmRQcmVkZWNlc3NvclZlcnRleGVzIiwiaXNFZGdlUHJlc2VudCIsImVkZ2VQcmVzZW50IiwiaXNFZGdlUHJlc2VudEJ5U291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUiLCJhcmVDeWNsZXNQcmVzZW50IiwiY3ljbGVzUHJlc2VudCIsInZlcnRleE5hbWVzSW5jbHVkZXNWZXJ0ZXhOYW1lIiwiaW5jbHVkZXMiLCJhZGRFZGdlIiwic3VjY2VzcyIsImFkZEVkZ2VCeVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lIiwiY3ljbGljRWRnZXNJbmNsdWRlc0VkZ2UiLCJjaGVja0VkZ2VzSW5jbHVkZXNFZGdlIiwiY3ljbGljRWRnZSIsImFkZEVkZ2VzIiwiYWRkVmVydGV4QnlWZXJ0ZXhOYW1lIiwidmVydGV4TmFtZXNMZW5ndGgiLCJuYW1lIiwiaW5kZXgiLCJWZXJ0ZXgiLCJmcm9tTmFtZUFuZEluZGV4Iiwic2V0VmVydGV4QnlWZXJ0ZXhOYW1lIiwicmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lIiwicmVtb3ZlZEVkZ2VzIiwiZm9yRWFjaEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCIsImltbWVkaWF0ZVN1Y2Nlc3NWZXJ0ZXgiLCJpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCIsImltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZSIsImdldE5hbWUiLCJpbW1lZGlhdGVTdWNjZXNzVmVydGV4TmFtZSIsInJlbW92ZWRFZGdlU291cmNlVmVydGV4TmFtZSIsInJlbW92ZWRFZGdlVGFyZ2V0VmVydGV4TmFtZSIsInJlbW92ZWRFZGdlIiwicmVtb3ZlSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgiLCJmb3JFYWNoSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgiLCJyZW1vdmVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgiLCJkZWxldGVWZXJ0ZXhCeVZlcnRleE5hbWUiLCJkZWxldGVkVmVydGV4IiwiZGVsZXRlZFZlcnRleEluZGV4IiwiZ2V0SW5kZXgiLCJhZmZlY3RlZFZlcnRleGVzIiwicmVkdWNlIiwidmVydGV4SW5kZXgiLCJ2ZXJ0ZXhBZmZlY3RlZCIsImFmZmVjdGVkVmVydGV4IiwiZGVjcmVtZW50SW5kZXgiLCJmaWx0ZXJDeWNsaWNFZGdlcyIsInJlbW92ZUVkZ2UiLCJyZW1vdmVTdHJhbmRlZFZlcnRleGVzIiwicmVtb3ZlRWRnZUZyb21FZGdlcyIsInJlbW92ZUVkZ2VCeVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lIiwic291cmNlVmVydGV4U3RyYW5kZWQiLCJpc1N0cmFuZGVkIiwidGFyZ2V0VmVydGV4U3RyYW5kZWQiLCJyZW1vdmVFZGdlcyIsInJlbW92ZUFsbEVkZ2VzQW5kVmVydGV4ZXMiLCJyZW1vdmVFZGdlc0J5U291cmNlVmVydGV4TmFtZSIsImVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lIiwicmVtb3ZlRWRnZXNCeVRhcmdldFZlcnRleE5hbWUiLCJlZGdlc0J5VGFyZ2V0VmVydGV4TmFtZSIsImlzRWRnZVByZXNlbnRCeVRhcmdldFZlcnRleCIsInNvdXJjZVZlcnRleEluZGV4IiwidGFyZ2V0VmVydGV4SW5kZXgiLCJpbnZhbGlkYXRpbmdFZGdlIiwiYWRkSW52YWxpZGF0aW5nRWRnZUJ5VmVydGV4ZXMiLCJpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgiLCJhZGRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgiLCJhZGRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCIsInNvdXJjZVZlcnRleEFuZFRhcmdldFZlcnRleFByZXNlbnQiLCJzb3VyY2VWZXJ0ZXhQcmVzZW50IiwidGFyZ2V0VmVydGV4UHJlc2VudCIsImZyb21Ob3RoaW5nIiwiZGlyZWN0ZWRHcmFwaCIsImZvcndhcmRzQWZmZWN0ZWRWZXJ0ZXhlcyIsInJldHJpZXZlRm9yd2FyZHNBZmZlY3RlZFZlcnRleGVzIiwibGFzdEZvcndhcmRzQWZmZWN0ZWRWZXJ0ZXgiLCJyZXN1bHRzSW5DeWNsZSIsImJhY2t3YXJkc0FmZmVjdGVkVmVydGV4ZXMiLCJyZXRyaWV2ZUJhY2t3YXJkc0FmZmVjdGVkVmVydGV4ZXMiLCJjb25jYXQiLCJhZmZlY3RlZFZlcnRleEluZGljZXMiLCJtYXAiLCJhZmZlY3RlZFZlcnRleEluZGV4Iiwic29ydCIsImluZGV4QSIsImluZGV4QiIsInNldEluZGV4Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWFxQkE7Ozt5QkFYVTsyREFFZDs0REFDQzs2REFDQzt1QkFFb0M7cUJBQ3VEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlHLElBQVFDLE9BQXdCQywwQkFBeEJELE1BQU1FLFFBQWtCRCwwQkFBbEJDLE9BQU9DLFNBQVdGLDBCQUFYRTtBQUVOLElBQUEsQUFBTUosOEJBcVpsQixBQXJaWTthQUFNQSxjQUNQSyxTQUFTLEVBQUVDLFdBQVc7Z0NBRGZOO1FBRWpCLElBQUks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