"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamKahn = require("occam-kahn");
var _necessary = require("necessary");
var _occamPearceKelly = require("occam-pearce-kelly");
var _edge = _interopRequireDefault(require("./edge"));
var _cycle = _interopRequireDefault(require("./cycle"));
var _partialCycle = _interopRequireDefault(require("./partialCycle"));
var _vertex = require("./utilities/vertex");
var _edge1 = require("./utilities/edge");
function _classCallCheck(instance, Constructor) {
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
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var first = _necessary.arrayUtilities.first, filter = _necessary.arrayUtilities.filter;
var DirectedGraph = /*#__PURE__*/ function() {
    function DirectedGraph(cyclicEdges, directedAcyclicGraph) {
        _classCallCheck(this, DirectedGraph);
        this.cyclicEdges = cyclicEdges;
        this.directedAcyclicGraph = directedAcyclicGraph;
    }
    _createClass(DirectedGraph, [
        {
            key: "getCyclicEdges",
            value: function getCyclicEdges() {
                return this.cyclicEdges;
            }
        },
        {
            key: "getDirectedAcyclicGraph",
            value: function getDirectedAcyclicGraph() {
                return this.directedAcyclicGraph;
            }
        },
        {
            key: "getVertexNames",
            value: function getVertexNames() {
                return this.directedAcyclicGraph.getVertexNames();
            }
        },
        {
            key: "getOrderedVertexNames",
            value: function getOrderedVertexNames() {
                return this.directedAcyclicGraph.getOrderedVertexNames();
            }
        },
        {
            key: "addVertexByVertexName",
            value: function addVertexByVertexName(vertexName) {
                this.directedAcyclicGraph.addVertexByVertexName(vertexName);
            }
        },
        {
            key: "isEdgePresentByVertexNames",
            value: function isEdgePresentByVertexNames(sourceVertexName, targetVertexName) {
                return this.directedAcyclicGraph.isEdgePresentByVertexNames(sourceVertexName, targetVertexName);
            }
        },
        {
            key: "isVertexPresentByVertexName",
            value: function isVertexPresentByVertexName(vertexName) {
                return this.directedAcyclicGraph.isVertexPresentByVertexName(vertexName);
            }
        },
        {
            key: "getSuccessorVertexNamesByVertexName",
            value: function getSuccessorVertexNamesByVertexName(vertexName) {
                return this.directedAcyclicGraph.getSuccessorVertexNamesByVertexName(vertexName);
            }
        },
        {
            key: "getPredecessorVertexNamesByVertexName",
            value: function getPredecessorVertexNamesByVertexName(vertexName) {
                return this.directedAcyclicGraph.getPredecessorVertexNamesByVertexName(vertexName);
            }
        },
        {
            key: "getImmediatePredecessorVertexNamesByVertexName",
            value: function getImmediatePredecessorVertexNamesByVertexName(vertexName) {
                var includeCyclicEdges = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                var immediatePredecessorVertexNames = this.directedAcyclicGraph.getImmediatePredecessorVertexNamesByVertexName(vertexName);
                if (includeCyclicEdges) {
                    this.cyclicEdges.forEach(function(cyclicEdge) {
                        var cyclicEdgeTargetVertexName = cyclicEdge.getTargetVertexName();
                        if (cyclicEdgeTargetVertexName === vertexName) {
                            var cyclicEdgeSourceVertexName = cyclicEdge.getSourceVertexName(), immediatePredecessorVertexName = cyclicEdgeSourceVertexName; ///
                            immediatePredecessorVertexNames.push(immediatePredecessorVertexName);
                        }
                    });
                }
                return immediatePredecessorVertexNames;
            }
        },
        {
            key: "getImmediateSuccessorVertexNamesByVertexName",
            value: function getImmediateSuccessorVertexNamesByVertexName(vertexName) {
                var includeCyclicEdges = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                var immediateSuccessorVertexNames = this.directedAcyclicGraph.getImmediateSuccessorVertexNamesByVertexName(vertexName);
                if (includeCyclicEdges) {
                    this.cyclicEdges.forEach(function(cyclicEdge) {
                        var cyclicEdgeSourceVertexName = cyclicEdge.getSourceVertexName();
                        if (cyclicEdgeSourceVertexName === vertexName) {
                            var cyclicEdgeTargetVertexName = cyclicEdge.getTargetVertexName(), immediateSuccessorVertexName = cyclicEdgeTargetVertexName; ///
                            immediateSuccessorVertexNames.push(immediateSuccessorVertexName);
                        }
                    });
                }
                return immediateSuccessorVertexNames;
            }
        },
        {
            key: "areCyclesPresentByVertexName",
            value: function areCyclesPresentByVertexName(vertexName) {
                var cyclesPresent = false;
                var vertexPresent = this.directedAcyclicGraph.isVertexPresentByVertexName(vertexName);
                if (vertexPresent) {
                    var firstCycle = this.getFirstCycleByVertexName(vertexName);
                    cyclesPresent = firstCycle !== null;
                }
                return cyclesPresent;
            }
        },
        {
            key: "getFirstCycleByVertexName",
            value: function getFirstCycleByVertexName(vertexName) {
                var _this = this;
                var firstCycle = null;
                var vertex = this.directedAcyclicGraph.getVertexByVertexName(vertexName), cyclicEdges = this.cyclicEdges.slice(), partialCycles = [], cycles = [];
                (0, _vertex).forwardsDepthFirstSearch(vertex, function(visitedVertex, getPredecessorVertices) {
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
                    var targetVertexName = partialCycle.getTargetVertexName(), targetVertex = _this.directedAcyclicGraph.getVertexByVertexName(targetVertexName);
                    (0, _vertex).forwardsDepthFirstSearch(targetVertex, function(visitedVertex, getPredecessorVertices) {
                        var visitedVertexName = visitedVertex.getName();
                        if (visitedVertexName === vertexName) {
                            var predecessorVertices = getPredecessorVertices(), successorVertices = predecessorVertices, cycle = _cycle.default.fromVertexNamePartialCycleAndSuccessorVertices(vertexName, partialCycle, successorVertices);
                            cycles.push(cycle);
                        }
                        var cyclesLength = cycles.length, terminate = cyclesLength > 0;
                        return terminate;
                    });
                });
                var cyclesLength1 = cycles.length;
                if (cyclesLength1 > 0) {
                    firstCycle = first(cycles);
                }
                return firstCycle;
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
            key: "areCyclesPresent",
            value: function areCyclesPresent() {
                var cyclicEdgesLength = this.cyclicEdges.length, cyclesPresent = cyclicEdgesLength > 0;
                return cyclesPresent;
            }
        },
        {
            key: "addVerticesByVertexNames",
            value: function addVerticesByVertexNames(vertexNames) {
                var _this = this;
                vertexNames.forEach(function(vertexName) {
                    return _this.addVertexByVertexName(vertexName);
                });
            }
        },
        {
            key: "removeVertexByVertexName",
            value: function removeVertexByVertexName(vertexName) {
                this.directedAcyclicGraph.removeVertexByVertexName(vertexName);
                this.filterCyclicEdges();
            }
        },
        {
            key: "removeVerticesByVertexNames",
            value: function removeVerticesByVertexNames(vertexNames) {
                var _this = this;
                vertexNames.forEach(function(vertexName) {
                    return _this.removeVertexByVertexName(vertexName);
                });
            }
        },
        {
            key: "addEdge",
            value: function addEdge(edge) {
                var success = this.directedAcyclicGraph.addEdge(edge);
                if (!success) {
                    var cyclicEdgesIncludesEdge = (0, _edge1).checkEdgesIncludesEdge(edge, this.cyclicEdges);
                    if (!cyclicEdgesIncludesEdge) {
                        var cyclicEdge = edge; ///
                        this.cyclicEdges.push(cyclicEdge);
                    }
                }
            }
        },
        {
            key: "addEdges",
            value: function addEdges(edges) {
                var _this = this;
                edges.forEach(function(edge) {
                    return _this.addEdge(edge);
                });
            }
        },
        {
            key: "removeEdge",
            value: function removeEdge(edge) {
                var removeStrandedVertices = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                var cyclicEdgesIncludesEdge = (0, _edge1).checkEdgesIncludesEdge(edge, this.cyclicEdges), edgePresent = this.directedAcyclicGraph.isEdgePresent(edge), edgeCyclic = cyclicEdgesIncludesEdge; ///
                if (false) {
                ///
                } else if (edgeCyclic) {
                    var cyclicEdge = edge; ///
                    (0, _edge1).removeEdgeFromEdges(cyclicEdge, this.cyclicEdges);
                } else if (edgePresent) {
                    this.directedAcyclicGraph.removeEdge(edge);
                    if (removeStrandedVertices) {
                        var sourceVertexName = edge.getSourceVertexName(), targetVertexName = edge.getTargetVertexName(), sourceVertex = this.directedAcyclicGraph.getVertexByVertexName(sourceVertexName), targetVertex = this.directedAcyclicGraph.getVertexByVertexName(targetVertexName), sourceVertexStranded = sourceVertex.isStranded(), targetVertexStranded = targetVertex.isStranded();
                        if (sourceVertexStranded) {
                            this.directedAcyclicGraph.removeVertexByVertexName(sourceVertexName);
                        }
                        if (targetVertexStranded) {
                            this.directedAcyclicGraph.removeVertexByVertexName(targetVertexName);
                        }
                    }
                }
                this.filterCyclicEdges();
            }
        },
        {
            key: "removeEdges",
            value: function removeEdges(edges) {
                var removeStrandedVertices = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                var _this = this;
                edges.forEach(function(edge) {
                    return _this.removeEdge(edge, removeStrandedVertices);
                });
            }
        },
        {
            key: "addEdgeByVertexNames",
            value: function addEdgeByVertexNames(sourceVertexName, targetVertexName) {
                var edge = _edge.default.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);
                this.addEdge(edge);
            }
        },
        {
            key: "removeEdgeByVertexNames",
            value: function removeEdgeByVertexNames(sourceVertexName, targetVertexName) {
                var removeStrandedVertices = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
                var edge = _edge.default.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);
                this.removeEdge(edge, removeStrandedVertices);
            }
        },
        {
            key: "removeEdgesByTargetVertexName",
            value: function removeEdgesByTargetVertexName(targetVertexName) {
                var removeStrandedVertices = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                var cyclicEdges = (0, _edge1).edgesByTargetVertexName(targetVertexName, this.cyclicEdges), edges = this.directedAcyclicGraph.getEdgesByTargetVertexName(targetVertexName);
                this.removeEdges(cyclicEdges, removeStrandedVertices);
                this.removeEdges(edges, removeStrandedVertices);
            }
        },
        {
            key: "removeEdgesBySourceVertexName",
            value: function removeEdgesBySourceVertexName(sourceVertexName) {
                var removeStrandedVertices = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                var cyclicEdges = (0, _edge1).edgesBySourceVertexName(sourceVertexName, this.cyclicEdges), edges = this.directedAcyclicGraph.getEdgesBySourceVertexName(sourceVertexName);
                this.removeEdges(cyclicEdges, removeStrandedVertices);
                this.removeEdges(edges, removeStrandedVertices);
            }
        },
        {
            key: "removeAllEdgesAndVertices",
            value: function removeAllEdgesAndVertices() {
                this.directedAcyclicGraph = _occamPearceKelly.DirectedAcyclicGraph.fromNothing();
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
                    var edge = cyclicEdge, success = _this.directedAcyclicGraph.addEdge(edge);
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
                var cyclicEdges = [], directedAcyclicGraph = _occamPearceKelly.DirectedAcyclicGraph.fromNothing(), directedGraph = new DirectedGraph(cyclicEdges, directedAcyclicGraph);
                return directedGraph;
            }
        },
        {
            key: "fromVertexLiterals",
            value: function fromVertexLiterals(vertexLiterals) {
                var vertexNames = (0, _vertex).vertexNamesFromVertexLiterals(vertexLiterals), edges = (0, _edge1).edgesFromVertexLiterals(vertexLiterals), directedGraph = DirectedGraph.fromVertexNamesAndEdges(vertexNames, edges);
                return directedGraph;
            }
        },
        {
            key: "fromVertexNamesAndEdges",
            value: function fromVertexNamesAndEdges(vertexNames, edges) {
                var directedGraph;
                var graph = _occamKahn.Graph.fromVertexNamesAndEdges(vertexNames, edges), cyclesPresent = graph.areCyclesPresent();
                if (cyclesPresent) {
                    var cyclicEdges = [], directedAcyclicGraph = _occamPearceKelly.DirectedAcyclicGraph.fromVertexNames(vertexNames);
                    directedGraph = new DirectedGraph(cyclicEdges, directedAcyclicGraph);
                    edges.forEach(function(edge) {
                        return directedGraph.addEdge(edge);
                    });
                } else {
                    var orderedVertices = graph.getOrderedVertices(), cyclicEdges1 = [], directedAcyclicGraph1 = _occamPearceKelly.DirectedAcyclicGraph.fromOrderedVertices(orderedVertices);
                    directedGraph = new DirectedGraph(cyclicEdges1, directedAcyclicGraph1);
                }
                return directedGraph;
            }
        }
    ]);
    return DirectedGraph;
}();
exports.default = DirectedGraph;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kaXJlY3RlZEdyYXBoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBHcmFwaCB9IGZyb20gXCJvY2NhbS1rYWhuXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IERpcmVjdGVkQWN5Y2xpY0dyYXBoIH0gZnJvbSBcIm9jY2FtLXBlYXJjZS1rZWxseVwiO1xuXG5pbXBvcnQgRWRnZSBmcm9tIFwiLi9lZGdlXCI7XG5pbXBvcnQgQ3ljbGUgZnJvbSBcIi4vY3ljbGVcIjtcbmltcG9ydCBQYXJ0aWFsQ3ljbGUgZnJvbSBcIi4vcGFydGlhbEN5Y2xlXCI7XG5cbmltcG9ydCB7IHZlcnRleE5hbWVzRnJvbVZlcnRleExpdGVyYWxzLCBmb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2ggfSBmcm9tIFwiLi91dGlsaXRpZXMvdmVydGV4XCI7XG5pbXBvcnQgeyBlZGdlc0Zyb21WZXJ0ZXhMaXRlcmFscywgY2hlY2tFZGdlc0luY2x1ZGVzRWRnZSwgcmVtb3ZlRWRnZUZyb21FZGdlcywgZWRnZXNCeVNvdXJjZVZlcnRleE5hbWUsIGVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2VkZ2VcIjtcblxuY29uc3QgeyBmaXJzdCwgZmlsdGVyIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0ZWRHcmFwaCB7XG4gIGNvbnN0cnVjdG9yKGN5Y2xpY0VkZ2VzLCBkaXJlY3RlZEFjeWNsaWNHcmFwaCkge1xuICAgIHRoaXMuY3ljbGljRWRnZXMgPSBjeWNsaWNFZGdlcztcblxuICAgIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGggPSBkaXJlY3RlZEFjeWNsaWNHcmFwaDtcbiAgfVxuXG4gIGdldEN5Y2xpY0VkZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLmN5Y2xpY0VkZ2VzO1xuICB9XG5cbiAgZ2V0RGlyZWN0ZWRBY3ljbGljR3JhcGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGg7XG4gIH1cblxuICBnZXRWZXJ0ZXhOYW1lcygpIHsgcmV0dXJuIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0VmVydGV4TmFtZXMoKTsgfVxuXG4gIGdldE9yZGVyZWRWZXJ0ZXhOYW1lcygpIHsgcmV0dXJuIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0T3JkZXJlZFZlcnRleE5hbWVzKCk7IH1cblxuICBhZGRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSkgeyB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmFkZFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTsgfVxuXG4gIGlzRWRnZVByZXNlbnRCeVZlcnRleE5hbWVzKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpIHsgcmV0dXJuIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguaXNFZGdlUHJlc2VudEJ5VmVydGV4TmFtZXMoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSk7IH1cblxuICBpc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUodmVydGV4TmFtZSkgeyByZXR1cm4gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5pc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7IH1cblxuICBnZXRTdWNjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7IHJldHVybiB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldFN1Y2Nlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpOyB9XG5cbiAgZ2V0UHJlZGVjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7IHJldHVybiB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldFByZWRlY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7IH1cblxuICBnZXRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUsIGluY2x1ZGVDeWNsaWNFZGdlcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcyA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgIGlmIChpbmNsdWRlQ3ljbGljRWRnZXMpIHtcbiAgICAgIHRoaXMuY3ljbGljRWRnZXMuZm9yRWFjaCgoY3ljbGljRWRnZSkgPT4ge1xuICAgICAgICBjb25zdCBjeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZSA9IGN5Y2xpY0VkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpO1xuXG4gICAgICAgIGlmIChjeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZSA9PT0gdmVydGV4TmFtZSkge1xuICAgICAgICAgIGNvbnN0IGN5Y2xpY0VkZ2VTb3VyY2VWZXJ0ZXhOYW1lID0gY3ljbGljRWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICAgICAgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lID0gY3ljbGljRWRnZVNvdXJjZVZlcnRleE5hbWU7ICAvLy9cblxuICAgICAgICAgIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMucHVzaChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGdldEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUsIGluY2x1ZGVDeWNsaWNFZGdlcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXMgPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgaWYgKGluY2x1ZGVDeWNsaWNFZGdlcykge1xuICAgICAgdGhpcy5jeWNsaWNFZGdlcy5mb3JFYWNoKChjeWNsaWNFZGdlKSA9PiB7XG4gICAgICAgIGNvbnN0IGN5Y2xpY0VkZ2VTb3VyY2VWZXJ0ZXhOYW1lID0gY3ljbGljRWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCk7XG5cbiAgICAgICAgaWYgKGN5Y2xpY0VkZ2VTb3VyY2VWZXJ0ZXhOYW1lID09PSB2ZXJ0ZXhOYW1lKSB7XG4gICAgICAgICAgY29uc3QgY3ljbGljRWRnZVRhcmdldFZlcnRleE5hbWUgPSBjeWNsaWNFZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKSxcbiAgICAgICAgICAgICAgICBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lID0gY3ljbGljRWRnZVRhcmdldFZlcnRleE5hbWU7ICAvLy9cblxuICAgICAgICAgIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzLnB1c2goaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGFyZUN5Y2xlc1ByZXNlbnRCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGxldCBjeWNsZXNQcmVzZW50ID0gZmFsc2U7XG5cbiAgICBjb25zdCB2ZXJ0ZXhQcmVzZW50ID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5pc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICBpZiAodmVydGV4UHJlc2VudCkge1xuICAgICAgY29uc3QgZmlyc3RDeWNsZSA9IHRoaXMuZ2V0Rmlyc3RDeWNsZUJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgICAgY3ljbGVzUHJlc2VudCA9IChmaXJzdEN5Y2xlICE9PSBudWxsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3ljbGVzUHJlc2VudDtcbiAgfVxuXG4gIGdldEZpcnN0Q3ljbGVCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGxldCBmaXJzdEN5Y2xlID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCB2ZXJ0ZXggPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSxcbiAgICAgICAgICBjeWNsaWNFZGdlcyA9IHRoaXMuY3ljbGljRWRnZXMuc2xpY2UoKSwgLy8vXG4gICAgICAgICAgcGFydGlhbEN5Y2xlcyA9IFtdLFxuICAgICAgICAgIGN5Y2xlcyA9IFtdO1xuXG4gICAgZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoKHZlcnRleCwgKHZpc2l0ZWRWZXJ0ZXgsIGdldFByZWRlY2Vzc29yVmVydGljZXMpID0+IHtcbiAgICAgIGNvbnN0IHZpc2l0ZWRWZXJ0ZXhOYW1lID0gdmlzaXRlZFZlcnRleC5nZXROYW1lKCksXG4gICAgICAgICAgICBzb3VyY2VWZXJ0ZXhOYW1lID0gdmlzaXRlZFZlcnRleE5hbWU7IC8vL1xuXG4gICAgICBmaWx0ZXIoY3ljbGljRWRnZXMsIChjeWNsaWNFZGdlKSA9PiB7XG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSBjeWNsaWNFZGdlLm1hdGNoU291cmNlVmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKTtcblxuICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgIGNvbnN0IHByZWRlY2Vzc29yVmVydGljZXMgPSBnZXRQcmVkZWNlc3NvclZlcnRpY2VzKCksXG4gICAgICAgICAgICAgICAgcGFydGlhbEN5Y2xlID0gIFBhcnRpYWxDeWNsZS5mcm9tQ3ljbGljRWRnZUFuZFByZWRlY2Vzc29yVmVydGljZXMoY3ljbGljRWRnZSwgcHJlZGVjZXNzb3JWZXJ0aWNlcyk7XG4gICAgICAgICAgXG4gICAgICAgICAgcGFydGlhbEN5Y2xlcy5wdXNoKHBhcnRpYWxDeWNsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBjeWNsaWNFZGdlc0xlbmd0aCA9IGN5Y2xpY0VkZ2VzLmxlbmd0aCxcbiAgICAgICAgICAgIHRlcm1pbmF0ZSA9IChjeWNsaWNFZGdlc0xlbmd0aCA9PT0gMCk7XG5cbiAgICAgIHJldHVybiB0ZXJtaW5hdGU7XG4gICAgfSk7XG5cbiAgICBwYXJ0aWFsQ3ljbGVzLnNvbWUoKHBhcnRpYWxDeWNsZSkgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0VmVydGV4TmFtZSA9IHBhcnRpYWxDeWNsZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXggPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldFZlcnRleEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoKHRhcmdldFZlcnRleCwgKHZpc2l0ZWRWZXJ0ZXgsIGdldFByZWRlY2Vzc29yVmVydGljZXMpID0+IHtcbiAgICAgICAgY29uc3QgdmlzaXRlZFZlcnRleE5hbWUgPSB2aXNpdGVkVmVydGV4LmdldE5hbWUoKTtcblxuICAgICAgICBpZiAodmlzaXRlZFZlcnRleE5hbWUgPT09IHZlcnRleE5hbWUpIHtcbiAgICAgICAgICBjb25zdCBwcmVkZWNlc3NvclZlcnRpY2VzID0gZ2V0UHJlZGVjZXNzb3JWZXJ0aWNlcygpLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3NvclZlcnRpY2VzID0gcHJlZGVjZXNzb3JWZXJ0aWNlcywgIC8vL1xuICAgICAgICAgICAgICAgIGN5Y2xlID0gQ3ljbGUuZnJvbVZlcnRleE5hbWVQYXJ0aWFsQ3ljbGVBbmRTdWNjZXNzb3JWZXJ0aWNlcyh2ZXJ0ZXhOYW1lLCBwYXJ0aWFsQ3ljbGUsIHN1Y2Nlc3NvclZlcnRpY2VzKTtcblxuICAgICAgICAgIGN5Y2xlcy5wdXNoKGN5Y2xlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGN5Y2xlc0xlbmd0aCA9IGN5Y2xlcy5sZW5ndGgsXG4gICAgICAgICAgICAgIHRlcm1pbmF0ZSA9IChjeWNsZXNMZW5ndGggPiAwKTtcblxuICAgICAgICByZXR1cm4gdGVybWluYXRlO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjeWNsZXNMZW5ndGggPSBjeWNsZXMubGVuZ3RoO1xuICAgIFxuICAgIGlmIChjeWNsZXNMZW5ndGggPiAwKSB7XG4gICAgICBmaXJzdEN5Y2xlID0gZmlyc3QoY3ljbGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmlyc3RDeWNsZTtcbiAgfVxuXG4gIGdldEZpcnN0Q3ljbGUoKSB7XG4gICAgY29uc3QgZmlyc3RDeWNsaWNFZGdlID0gZmlyc3QodGhpcy5jeWNsaWNFZGdlcyksXG4gICAgICAgICAgY3ljbGljRWRnZSA9IGZpcnN0Q3ljbGljRWRnZSwgLy8vXG4gICAgICAgICAgc291cmNlVmVydGV4TmFtZSA9IGN5Y2xpY0VkZ2UuZ2V0U291cmNlVmVydGV4TmFtZSgpLFxuICAgICAgICAgIHZlcnRleE5hbWUgPSBzb3VyY2VWZXJ0ZXhOYW1lLCAgLy8vXG4gICAgICAgICAgZmlyc3RDeWNsZSA9IHRoaXMuZ2V0Rmlyc3RDeWNsZUJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgIHJldHVybiBmaXJzdEN5Y2xlO1xuICB9XG5cbiAgYXJlQ3ljbGVzUHJlc2VudCgpIHtcbiAgICBjb25zdCBjeWNsaWNFZGdlc0xlbmd0aCA9IHRoaXMuY3ljbGljRWRnZXMubGVuZ3RoLFxuICAgICAgICAgIGN5Y2xlc1ByZXNlbnQgPSAoY3ljbGljRWRnZXNMZW5ndGggPiAwKTtcblxuICAgIHJldHVybiBjeWNsZXNQcmVzZW50O1xuICB9XG5cbiAgYWRkVmVydGljZXNCeVZlcnRleE5hbWVzKHZlcnRleE5hbWVzKSB7XG4gICAgdmVydGV4TmFtZXMuZm9yRWFjaCgodmVydGV4TmFtZSkgPT4gdGhpcy5hZGRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSkpO1xuICB9XG5cbiAgcmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLnJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgIHRoaXMuZmlsdGVyQ3ljbGljRWRnZXMoKTtcbiAgfVxuXG4gIHJlbW92ZVZlcnRpY2VzQnlWZXJ0ZXhOYW1lcyh2ZXJ0ZXhOYW1lcykge1xuICAgIHZlcnRleE5hbWVzLmZvckVhY2goKHZlcnRleE5hbWUpID0+IHRoaXMucmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpKTtcbiAgfVxuXG4gIGFkZEVkZ2UoZWRnZSkge1xuICAgIGNvbnN0IHN1Y2Nlc3MgPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmFkZEVkZ2UoZWRnZSk7XG4gICAgXG4gICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICBjb25zdCBjeWNsaWNFZGdlc0luY2x1ZGVzRWRnZSA9IGNoZWNrRWRnZXNJbmNsdWRlc0VkZ2UoZWRnZSwgdGhpcy5jeWNsaWNFZGdlcyk7XG5cbiAgICAgIGlmICghY3ljbGljRWRnZXNJbmNsdWRlc0VkZ2UpIHtcbiAgICAgICAgY29uc3QgY3ljbGljRWRnZSA9IGVkZ2U7ICAvLy9cblxuICAgICAgICB0aGlzLmN5Y2xpY0VkZ2VzLnB1c2goY3ljbGljRWRnZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICBhZGRFZGdlcyhlZGdlcykge1xuICAgIGVkZ2VzLmZvckVhY2goKGVkZ2UpID0+IHRoaXMuYWRkRWRnZShlZGdlKSk7XG4gIH1cblxuICByZW1vdmVFZGdlKGVkZ2UsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMgPSBmYWxzZSkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VzSW5jbHVkZXNFZGdlID0gY2hlY2tFZGdlc0luY2x1ZGVzRWRnZShlZGdlLCB0aGlzLmN5Y2xpY0VkZ2VzKSxcbiAgICAgICAgICBlZGdlUHJlc2VudCA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguaXNFZGdlUHJlc2VudChlZGdlKSxcbiAgICAgICAgICBlZGdlQ3ljbGljID0gY3ljbGljRWRnZXNJbmNsdWRlc0VkZ2U7IC8vL1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKGVkZ2VDeWNsaWMpIHtcbiAgICAgIGNvbnN0IGN5Y2xpY0VkZ2UgPSBlZGdlOyAgLy8vXG5cbiAgICAgIHJlbW92ZUVkZ2VGcm9tRWRnZXMoY3ljbGljRWRnZSwgdGhpcy5jeWNsaWNFZGdlcyk7XG4gICAgfSBlbHNlIGlmIChlZGdlUHJlc2VudCkge1xuICAgICAgdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5yZW1vdmVFZGdlKGVkZ2UpO1xuXG4gICAgICBpZiAocmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcykge1xuICAgICAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gZWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICAgIHRhcmdldFZlcnRleE5hbWUgPSBlZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKSxcbiAgICAgICAgICAgICAgc291cmNlVmVydGV4ID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSksXG4gICAgICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpLFxuICAgICAgICAgICAgICBzb3VyY2VWZXJ0ZXhTdHJhbmRlZCA9IHNvdXJjZVZlcnRleC5pc1N0cmFuZGVkKCksXG4gICAgICAgICAgICAgIHRhcmdldFZlcnRleFN0cmFuZGVkID0gdGFyZ2V0VmVydGV4LmlzU3RyYW5kZWQoKTtcblxuICAgICAgICBpZiAoc291cmNlVmVydGV4U3RyYW5kZWQpIHtcbiAgICAgICAgICB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLnJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0YXJnZXRWZXJ0ZXhTdHJhbmRlZCkge1xuICAgICAgICAgIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGgucmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5maWx0ZXJDeWNsaWNFZGdlcygpO1xuICB9XG5cbiAgcmVtb3ZlRWRnZXMoZWRnZXMsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMgPSBmYWxzZSkge1xuICAgIGVkZ2VzLmZvckVhY2goKGVkZ2UpID0+IHRoaXMucmVtb3ZlRWRnZShlZGdlLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzKSk7XG4gIH1cblxuICBhZGRFZGdlQnlWZXJ0ZXhOYW1lcyhzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgZWRnZSA9IEVkZ2UuZnJvbVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgdGhpcy5hZGRFZGdlKGVkZ2UpO1xuICB9XG5cbiAgcmVtb3ZlRWRnZUJ5VmVydGV4TmFtZXMoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSwgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgZWRnZSA9IEVkZ2UuZnJvbVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgdGhpcy5yZW1vdmVFZGdlKGVkZ2UsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMpO1xuICB9XG5cbiAgcmVtb3ZlRWRnZXNCeVRhcmdldFZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSwgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgY3ljbGljRWRnZXMgPSBlZGdlc0J5VGFyZ2V0VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lLCB0aGlzLmN5Y2xpY0VkZ2VzKSxcbiAgICAgICAgICBlZGdlcyA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0RWRnZXNCeVRhcmdldFZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICB0aGlzLnJlbW92ZUVkZ2VzKGN5Y2xpY0VkZ2VzLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzKTtcblxuICAgIHRoaXMucmVtb3ZlRWRnZXMoZWRnZXMsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMpO1xuICB9XG5cbiAgcmVtb3ZlRWRnZXNCeVNvdXJjZVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgY3ljbGljRWRnZXMgPSBlZGdlc0J5U291cmNlVmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0aGlzLmN5Y2xpY0VkZ2VzKSxcbiAgICAgICAgICBlZGdlcyA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0RWRnZXNCeVNvdXJjZVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSk7XG5cbiAgICB0aGlzLnJlbW92ZUVkZ2VzKGN5Y2xpY0VkZ2VzLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzKTtcblxuICAgIHRoaXMucmVtb3ZlRWRnZXMoZWRnZXMsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMpO1xuICB9XG5cbiAgcmVtb3ZlQWxsRWRnZXNBbmRWZXJ0aWNlcygpIHtcbiAgICB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoID0gRGlyZWN0ZWRBY3ljbGljR3JhcGguZnJvbU5vdGhpbmcoKTtcblxuICAgIHRoaXMuY3ljbGljRWRnZXMgPSBbXTtcbiAgfVxuXG4gIGZpbHRlckN5Y2xpY0VkZ2VzKCkge1xuICAgIGZpbHRlcih0aGlzLmN5Y2xpY0VkZ2VzLCAoY3ljbGljRWRnZSkgPT4ge1xuICAgICAgY29uc3Qgc291cmNlVmVydGV4TmFtZSA9IGN5Y2xpY0VkZ2UuZ2V0U291cmNlVmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IGN5Y2xpY0VkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgc291cmNlVmVydGV4UHJlc2VudCA9IHRoaXMuaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4UHJlc2VudCA9IHRoaXMuaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgICBpZiAoc291cmNlVmVydGV4UHJlc2VudCAmJiB0YXJnZXRWZXJ0ZXhQcmVzZW50KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZmlsdGVyKHRoaXMuY3ljbGljRWRnZXMsIChjeWNsaWNFZGdlKSA9PiB7XG4gICAgICBjb25zdCBlZGdlID0gY3ljbGljRWRnZSwgIC8vL1xuICAgICAgICAgICAgc3VjY2VzcyA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguYWRkRWRnZShlZGdlKTtcblxuICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VzID0gW10sXG4gICAgICAgICAgZGlyZWN0ZWRBY3ljbGljR3JhcGggPSBEaXJlY3RlZEFjeWNsaWNHcmFwaC5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGRpcmVjdGVkR3JhcGggPSBuZXcgRGlyZWN0ZWRHcmFwaChjeWNsaWNFZGdlcywgZGlyZWN0ZWRBY3ljbGljR3JhcGgpO1xuICAgIFxuICAgIHJldHVybiBkaXJlY3RlZEdyYXBoOyAgICBcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmVydGV4TGl0ZXJhbHModmVydGV4TGl0ZXJhbHMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhOYW1lcyA9IHZlcnRleE5hbWVzRnJvbVZlcnRleExpdGVyYWxzKHZlcnRleExpdGVyYWxzKSxcbiAgICAgICAgICBlZGdlcyA9IGVkZ2VzRnJvbVZlcnRleExpdGVyYWxzKHZlcnRleExpdGVyYWxzKSxcbiAgICAgICAgICBkaXJlY3RlZEdyYXBoID0gRGlyZWN0ZWRHcmFwaC5mcm9tVmVydGV4TmFtZXNBbmRFZGdlcyh2ZXJ0ZXhOYW1lcywgZWRnZXMpO1xuXG4gICAgcmV0dXJuIGRpcmVjdGVkR3JhcGg7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZlcnRleE5hbWVzQW5kRWRnZXModmVydGV4TmFtZXMsIGVkZ2VzKSB7XG4gICAgbGV0IGRpcmVjdGVkR3JhcGg7XG5cbiAgICBjb25zdCBncmFwaCA9IEdyYXBoLmZyb21WZXJ0ZXhOYW1lc0FuZEVkZ2VzKHZlcnRleE5hbWVzLCBlZGdlcyksXG4gICAgICAgICAgY3ljbGVzUHJlc2VudCA9IGdyYXBoLmFyZUN5Y2xlc1ByZXNlbnQoKTtcblxuICAgIGlmIChjeWNsZXNQcmVzZW50KSB7XG4gICAgICBjb25zdCBjeWNsaWNFZGdlcyA9IFtdLFxuICAgICAgICAgICAgZGlyZWN0ZWRBY3ljbGljR3JhcGggPSBEaXJlY3RlZEFjeWNsaWNHcmFwaC5mcm9tVmVydGV4TmFtZXModmVydGV4TmFtZXMpO1xuXG4gICAgICBkaXJlY3RlZEdyYXBoID0gbmV3IERpcmVjdGVkR3JhcGgoY3ljbGljRWRnZXMsIGRpcmVjdGVkQWN5Y2xpY0dyYXBoKTtcblxuICAgICAgZWRnZXMuZm9yRWFjaCgoZWRnZSkgPT4gZGlyZWN0ZWRHcmFwaC5hZGRFZGdlKGVkZ2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgb3JkZXJlZFZlcnRpY2VzID0gZ3JhcGguZ2V0T3JkZXJlZFZlcnRpY2VzKCksXG4gICAgICAgICAgICBjeWNsaWNFZGdlcyA9IFtdLFxuICAgICAgICAgICAgZGlyZWN0ZWRBY3ljbGljR3JhcGggPSBEaXJlY3RlZEFjeWNsaWNHcmFwaC5mcm9tT3JkZXJlZFZlcnRpY2VzKG9yZGVyZWRWZXJ0aWNlcyk7XG5cbiAgICAgIGRpcmVjdGVkR3JhcGggPSBuZXcgRGlyZWN0ZWRHcmFwaChjeWNsaWNFZGdlcywgZGlyZWN0ZWRBY3ljbGljR3JhcGgpO1xuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3RlZEdyYXBoO1xuICB9XG59XG4iXSwibmFtZXMiOlsiZmlyc3QiLCJmaWx0ZXIiLCJEaXJlY3RlZEdyYXBoIiwiY3ljbGljRWRnZXMiLCJkaXJlY3RlZEFjeWNsaWNHcmFwaCIsImdldEN5Y2xpY0VkZ2VzIiwiZ2V0RGlyZWN0ZWRBY3ljbGljR3JhcGgiLCJnZXRWZXJ0ZXhOYW1lcyIsImdldE9yZGVyZWRWZXJ0ZXhOYW1lcyIsImFkZFZlcnRleEJ5VmVydGV4TmFtZSIsInZlcnRleE5hbWUiLCJpc0VkZ2VQcmVzZW50QnlWZXJ0ZXhOYW1lcyIsInNvdXJjZVZlcnRleE5hbWUiLCJ0YXJnZXRWZXJ0ZXhOYW1lIiwiaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lIiwiZ2V0U3VjY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUiLCJnZXRQcmVkZWNlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lIiwiZ2V0SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSIsImluY2x1ZGVDeWNsaWNFZGdlcyIsImltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMiLCJmb3JFYWNoIiwiY3ljbGljRWRnZSIsImN5Y2xpY0VkZ2VUYXJnZXRWZXJ0ZXhOYW1lIiwiZ2V0VGFyZ2V0VmVydGV4TmFtZSIsImN5Y2xpY0VkZ2VTb3VyY2VWZXJ0ZXhOYW1lIiwiZ2V0U291cmNlVmVydGV4TmFtZSIsImltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZSIsInB1c2giLCJnZXRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSIsImltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzIiwiaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZSIsImFyZUN5Y2xlc1ByZXNlbnRCeVZlcnRleE5hbWUiLCJjeWNsZXNQcmVzZW50IiwidmVydGV4UHJlc2VudCIsImZpcnN0Q3ljbGUiLCJnZXRGaXJzdEN5Y2xlQnlWZXJ0ZXhOYW1lIiwidmVydGV4IiwiZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lIiwic2xpY2UiLCJwYXJ0aWFsQ3ljbGVzIiwiY3ljbGVzIiwidmlzaXRlZFZlcnRleCIsImdldFByZWRlY2Vzc29yVmVydGljZXMiLCJ2aXNpdGVkVmVydGV4TmFtZSIsImdldE5hbWUiLCJtYXRjaGVzIiwibWF0Y2hTb3VyY2VWZXJ0ZXhOYW1lIiwicHJlZGVjZXNzb3JWZXJ0aWNlcyIsInBhcnRpYWxDeWNsZSIsImZyb21DeWNsaWNFZGdlQW5kUHJlZGVjZXNzb3JWZXJ0aWNlcyIsImN5Y2xpY0VkZ2VzTGVuZ3RoIiwibGVuZ3RoIiwidGVybWluYXRlIiwic29tZSIsInRhcmdldFZlcnRleCIsInN1Y2Nlc3NvclZlcnRpY2VzIiwiY3ljbGUiLCJmcm9tVmVydGV4TmFtZVBhcnRpYWxDeWNsZUFuZFN1Y2Nlc3NvclZlcnRpY2VzIiwiY3ljbGVzTGVuZ3RoIiwiZ2V0Rmlyc3RDeWNsZSIsImZpcnN0Q3ljbGljRWRnZSIsImFyZUN5Y2xlc1ByZXNlbnQiLCJhZGRWZXJ0aWNlc0J5VmVydGV4TmFtZXMiLCJ2ZXJ0ZXhOYW1lcyIsInJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZSIsImZpbHRlckN5Y2xpY0VkZ2VzIiwicmVtb3ZlVmVydGljZXNCeVZlcnRleE5hbWVzIiwiYWRkRWRnZSIsImVkZ2UiLCJzdWNjZXNzIiwiY3ljbGljRWRnZXNJbmNsdWRlc0VkZ2UiLCJhZGRFZGdlcyIsImVkZ2VzIiwicmVtb3ZlRWRnZSIsInJlbW92ZVN0cmFuZGVkVmVydGljZXMiLCJlZGdlUHJlc2VudCIsImlzRWRnZVByZXNlbnQiLCJlZGdlQ3ljbGljIiwic291cmNlVmVydGV4Iiwic291cmNlVmVydGV4U3RyYW5kZWQiLCJpc1N0cmFuZGVkIiwidGFyZ2V0VmVydGV4U3RyYW5kZWQiLCJyZW1vdmVFZGdlcyIsImFkZEVkZ2VCeVZlcnRleE5hbWVzIiwiZnJvbVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lIiwicmVtb3ZlRWRnZUJ5VmVydGV4TmFtZXMiLCJyZW1vdmVFZGdlc0J5VGFyZ2V0VmVydGV4TmFtZSIsImdldEVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lIiwicmVtb3ZlRWRnZXNCeVNvdXJjZVZlcnRleE5hbWUiLCJnZXRFZGdlc0J5U291cmNlVmVydGV4TmFtZSIsInJlbW92ZUFsbEVkZ2VzQW5kVmVydGljZXMiLCJmcm9tTm90aGluZyIsInNvdXJjZVZlcnRleFByZXNlbnQiLCJ0YXJnZXRWZXJ0ZXhQcmVzZW50IiwiZGlyZWN0ZWRHcmFwaCIsImZyb21WZXJ0ZXhMaXRlcmFscyIsInZlcnRleExpdGVyYWxzIiwiZnJvbVZlcnRleE5hbWVzQW5kRWRnZXMiLCJncmFwaCIsImZyb21WZXJ0ZXhOYW1lcyIsIm9yZGVyZWRWZXJ0aWNlcyIsImdldE9yZGVyZWRWZXJ0aWNlcyIsImZyb21PcmRlcmVkVmVydGljZXMiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRVUsR0FBWSxDQUFaLFVBQVk7QUFDSCxHQUFXLENBQVgsVUFBVztBQUNMLEdBQW9CLENBQXBCLGlCQUFvQjtBQUV4QyxHQUFRLENBQVIsS0FBUTtBQUNQLEdBQVMsQ0FBVCxNQUFTO0FBQ0YsR0FBZ0IsQ0FBaEIsYUFBZ0I7QUFFK0IsR0FBb0IsQ0FBcEIsT0FBb0I7QUFDMkMsR0FBa0IsQ0FBbEIsTUFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekosR0FBSyxDQUFHQSxL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