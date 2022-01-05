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
            key: "getPredecessorVertexNamesByVertexName",
            value: function getPredecessorVertexNamesByVertexName(vertexName) {
                return this.directedAcyclicGraph.getPredecessorVertexNamesByVertexName(vertexName);
            }
        },
        {
            key: "getSuccessorVertexNamesByVertexName",
            value: function getSuccessorVertexNamesByVertexName(vertexName) {
                return this.directedAcyclicGraph.getSuccessorVertexNamesByVertexName(vertexName);
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
            key: "isVertexPresentByVertexName",
            value: function isVertexPresentByVertexName(vertexName) {
                return this.directedAcyclicGraph.isVertexPresentByVertexName(vertexName);
            }
        },
        {
            key: "isEdgePresentByVertexNames",
            value: function isEdgePresentByVertexNames(sourceVertexName, targetVertexName) {
                return this.directedAcyclicGraph.isEdgePresentByVertexNames(sourceVertexName, targetVertexName);
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
            key: "areCyclesPresent",
            value: function areCyclesPresent() {
                var cyclicEdgesLength = this.cyclicEdges.length, cyclesPresent = cyclicEdgesLength > 0;
                return cyclesPresent;
            }
        },
        {
            key: "addVertexByVertexName",
            value: function addVertexByVertexName(vertexName) {
                this.directedAcyclicGraph.addVertexByVertexName(vertexName);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kaXJlY3RlZEdyYXBoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBHcmFwaCB9IGZyb20gXCJvY2NhbS1rYWhuXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IERpcmVjdGVkQWN5Y2xpY0dyYXBoIH0gZnJvbSBcIm9jY2FtLXBlYXJjZS1rZWxseVwiO1xuXG5pbXBvcnQgRWRnZSBmcm9tIFwiLi9lZGdlXCI7XG5pbXBvcnQgQ3ljbGUgZnJvbSBcIi4vY3ljbGVcIjtcbmltcG9ydCBQYXJ0aWFsQ3ljbGUgZnJvbSBcIi4vcGFydGlhbEN5Y2xlXCI7XG5cbmltcG9ydCB7IHZlcnRleE5hbWVzRnJvbVZlcnRleExpdGVyYWxzLCBmb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2ggfSBmcm9tIFwiLi91dGlsaXRpZXMvdmVydGV4XCI7XG5pbXBvcnQgeyBlZGdlc0Zyb21WZXJ0ZXhMaXRlcmFscywgY2hlY2tFZGdlc0luY2x1ZGVzRWRnZSwgcmVtb3ZlRWRnZUZyb21FZGdlcywgZWRnZXNCeVNvdXJjZVZlcnRleE5hbWUsIGVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2VkZ2VcIjtcblxuY29uc3QgeyBmaXJzdCwgZmlsdGVyIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0ZWRHcmFwaCB7XG4gIGNvbnN0cnVjdG9yKGN5Y2xpY0VkZ2VzLCBkaXJlY3RlZEFjeWNsaWNHcmFwaCkge1xuICAgIHRoaXMuY3ljbGljRWRnZXMgPSBjeWNsaWNFZGdlcztcblxuICAgIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGggPSBkaXJlY3RlZEFjeWNsaWNHcmFwaDtcbiAgfVxuXG4gIGdldEN5Y2xpY0VkZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLmN5Y2xpY0VkZ2VzO1xuICB9XG5cbiAgZ2V0RGlyZWN0ZWRBY3ljbGljR3JhcGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGg7XG4gIH1cblxuICBnZXRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUsIGluY2x1ZGVDeWNsaWNFZGdlcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcyA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgIGlmIChpbmNsdWRlQ3ljbGljRWRnZXMpIHtcbiAgICAgIHRoaXMuY3ljbGljRWRnZXMuZm9yRWFjaCgoY3ljbGljRWRnZSkgPT4ge1xuICAgICAgICBjb25zdCBjeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZSA9IGN5Y2xpY0VkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpO1xuXG4gICAgICAgIGlmIChjeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZSA9PT0gdmVydGV4TmFtZSkge1xuICAgICAgICAgIGNvbnN0IGN5Y2xpY0VkZ2VTb3VyY2VWZXJ0ZXhOYW1lID0gY3ljbGljRWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICAgICAgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lID0gY3ljbGljRWRnZVNvdXJjZVZlcnRleE5hbWU7ICAvLy9cblxuICAgICAgICAgIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMucHVzaChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGdldEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUsIGluY2x1ZGVDeWNsaWNFZGdlcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXMgPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgaWYgKGluY2x1ZGVDeWNsaWNFZGdlcykge1xuICAgICAgdGhpcy5jeWNsaWNFZGdlcy5mb3JFYWNoKChjeWNsaWNFZGdlKSA9PiB7XG4gICAgICAgIGNvbnN0IGN5Y2xpY0VkZ2VTb3VyY2VWZXJ0ZXhOYW1lID0gY3ljbGljRWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCk7XG5cbiAgICAgICAgaWYgKGN5Y2xpY0VkZ2VTb3VyY2VWZXJ0ZXhOYW1lID09PSB2ZXJ0ZXhOYW1lKSB7XG4gICAgICAgICAgY29uc3QgY3ljbGljRWRnZVRhcmdldFZlcnRleE5hbWUgPSBjeWNsaWNFZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKSxcbiAgICAgICAgICAgICAgICBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lID0gY3ljbGljRWRnZVRhcmdldFZlcnRleE5hbWU7ICAvLy9cblxuICAgICAgICAgIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzLnB1c2goaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGdldFByZWRlY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUodmVydGV4TmFtZSkgeyByZXR1cm4gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRQcmVkZWNlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpOyB9XG5cbiAgZ2V0U3VjY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUodmVydGV4TmFtZSkgeyByZXR1cm4gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRTdWNjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTsgfVxuXG4gIGFyZUN5Y2xlc1ByZXNlbnRCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGxldCBjeWNsZXNQcmVzZW50ID0gZmFsc2U7XG5cbiAgICBjb25zdCB2ZXJ0ZXhQcmVzZW50ID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5pc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICBpZiAodmVydGV4UHJlc2VudCkge1xuICAgICAgY29uc3QgZmlyc3RDeWNsZSA9IHRoaXMuZ2V0Rmlyc3RDeWNsZUJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgICAgY3ljbGVzUHJlc2VudCA9IChmaXJzdEN5Y2xlICE9PSBudWxsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3ljbGVzUHJlc2VudDtcbiAgfVxuXG4gIGlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7IHJldHVybiB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTsgfVxuXG4gIGlzRWRnZVByZXNlbnRCeVZlcnRleE5hbWVzKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpIHsgcmV0dXJuIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguaXNFZGdlUHJlc2VudEJ5VmVydGV4TmFtZXMoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSk7IH1cblxuICBnZXRGaXJzdEN5Y2xlQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBsZXQgZmlyc3RDeWNsZSA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgdmVydGV4ID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSksXG4gICAgICAgICAgY3ljbGljRWRnZXMgPSB0aGlzLmN5Y2xpY0VkZ2VzLnNsaWNlKCksIC8vL1xuICAgICAgICAgIHBhcnRpYWxDeWNsZXMgPSBbXSxcbiAgICAgICAgICBjeWNsZXMgPSBbXTtcblxuICAgIGZvcndhcmRzRGVwdGhGaXJzdFNlYXJjaCh2ZXJ0ZXgsICh2aXNpdGVkVmVydGV4LCBnZXRQcmVkZWNlc3NvclZlcnRpY2VzKSA9PiB7XG4gICAgICBjb25zdCB2aXNpdGVkVmVydGV4TmFtZSA9IHZpc2l0ZWRWZXJ0ZXguZ2V0TmFtZSgpLFxuICAgICAgICAgICAgc291cmNlVmVydGV4TmFtZSA9IHZpc2l0ZWRWZXJ0ZXhOYW1lOyAvLy9cblxuICAgICAgZmlsdGVyKGN5Y2xpY0VkZ2VzLCAoY3ljbGljRWRnZSkgPT4ge1xuICAgICAgICBjb25zdCBtYXRjaGVzID0gY3ljbGljRWRnZS5tYXRjaFNvdXJjZVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSk7XG5cbiAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICBjb25zdCBwcmVkZWNlc3NvclZlcnRpY2VzID0gZ2V0UHJlZGVjZXNzb3JWZXJ0aWNlcygpLFxuICAgICAgICAgICAgICAgIHBhcnRpYWxDeWNsZSA9ICBQYXJ0aWFsQ3ljbGUuZnJvbUN5Y2xpY0VkZ2VBbmRQcmVkZWNlc3NvclZlcnRpY2VzKGN5Y2xpY0VkZ2UsIHByZWRlY2Vzc29yVmVydGljZXMpO1xuICAgICAgICAgIFxuICAgICAgICAgIHBhcnRpYWxDeWNsZXMucHVzaChwYXJ0aWFsQ3ljbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgY3ljbGljRWRnZXNMZW5ndGggPSBjeWNsaWNFZGdlcy5sZW5ndGgsXG4gICAgICAgICAgICB0ZXJtaW5hdGUgPSAoY3ljbGljRWRnZXNMZW5ndGggPT09IDApO1xuXG4gICAgICByZXR1cm4gdGVybWluYXRlO1xuICAgIH0pO1xuXG4gICAgcGFydGlhbEN5Y2xlcy5zb21lKChwYXJ0aWFsQ3ljbGUpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldFZlcnRleE5hbWUgPSBwYXJ0aWFsQ3ljbGUuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICAgIGZvcndhcmRzRGVwdGhGaXJzdFNlYXJjaCh0YXJnZXRWZXJ0ZXgsICh2aXNpdGVkVmVydGV4LCBnZXRQcmVkZWNlc3NvclZlcnRpY2VzKSA9PiB7XG4gICAgICAgIGNvbnN0IHZpc2l0ZWRWZXJ0ZXhOYW1lID0gdmlzaXRlZFZlcnRleC5nZXROYW1lKCk7XG5cbiAgICAgICAgaWYgKHZpc2l0ZWRWZXJ0ZXhOYW1lID09PSB2ZXJ0ZXhOYW1lKSB7XG4gICAgICAgICAgY29uc3QgcHJlZGVjZXNzb3JWZXJ0aWNlcyA9IGdldFByZWRlY2Vzc29yVmVydGljZXMoKSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzb3JWZXJ0aWNlcyA9IHByZWRlY2Vzc29yVmVydGljZXMsICAvLy9cbiAgICAgICAgICAgICAgICBjeWNsZSA9IEN5Y2xlLmZyb21WZXJ0ZXhOYW1lUGFydGlhbEN5Y2xlQW5kU3VjY2Vzc29yVmVydGljZXModmVydGV4TmFtZSwgcGFydGlhbEN5Y2xlLCBzdWNjZXNzb3JWZXJ0aWNlcyk7XG5cbiAgICAgICAgICBjeWNsZXMucHVzaChjeWNsZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjeWNsZXNMZW5ndGggPSBjeWNsZXMubGVuZ3RoLFxuICAgICAgICAgICAgICB0ZXJtaW5hdGUgPSAoY3ljbGVzTGVuZ3RoID4gMCk7XG5cbiAgICAgICAgcmV0dXJuIHRlcm1pbmF0ZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY3ljbGVzTGVuZ3RoID0gY3ljbGVzLmxlbmd0aDtcbiAgICBcbiAgICBpZiAoY3ljbGVzTGVuZ3RoID4gMCkge1xuICAgICAgZmlyc3RDeWNsZSA9IGZpcnN0KGN5Y2xlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpcnN0Q3ljbGU7XG4gIH1cblxuICBnZXRGaXJzdEN5Y2xlKCkge1xuICAgIGNvbnN0IGZpcnN0Q3ljbGljRWRnZSA9IGZpcnN0KHRoaXMuY3ljbGljRWRnZXMpLFxuICAgICAgICAgIGN5Y2xpY0VkZ2UgPSBmaXJzdEN5Y2xpY0VkZ2UsIC8vL1xuICAgICAgICAgIHNvdXJjZVZlcnRleE5hbWUgPSBjeWNsaWNFZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSxcbiAgICAgICAgICB2ZXJ0ZXhOYW1lID0gc291cmNlVmVydGV4TmFtZSwgIC8vL1xuICAgICAgICAgIGZpcnN0Q3ljbGUgPSB0aGlzLmdldEZpcnN0Q3ljbGVCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICByZXR1cm4gZmlyc3RDeWNsZTtcbiAgfVxuXG4gIGdldFZlcnRleE5hbWVzKCkgeyByZXR1cm4gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRWZXJ0ZXhOYW1lcygpOyB9XG5cbiAgZ2V0T3JkZXJlZFZlcnRleE5hbWVzKCkgeyByZXR1cm4gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRPcmRlcmVkVmVydGV4TmFtZXMoKTsgfVxuXG4gIGFyZUN5Y2xlc1ByZXNlbnQoKSB7XG4gICAgY29uc3QgY3ljbGljRWRnZXNMZW5ndGggPSB0aGlzLmN5Y2xpY0VkZ2VzLmxlbmd0aCxcbiAgICAgICAgICBjeWNsZXNQcmVzZW50ID0gKGN5Y2xpY0VkZ2VzTGVuZ3RoID4gMCk7XG5cbiAgICByZXR1cm4gY3ljbGVzUHJlc2VudDtcbiAgfVxuXG4gIGFkZFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguYWRkVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpOyB9XG5cbiAgYWRkVmVydGljZXNCeVZlcnRleE5hbWVzKHZlcnRleE5hbWVzKSB7XG4gICAgdmVydGV4TmFtZXMuZm9yRWFjaCgodmVydGV4TmFtZSkgPT4gdGhpcy5hZGRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSkpO1xuICB9XG5cbiAgcmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLnJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgIHRoaXMuZmlsdGVyQ3ljbGljRWRnZXMoKTtcbiAgfVxuXG4gIHJlbW92ZVZlcnRpY2VzQnlWZXJ0ZXhOYW1lcyh2ZXJ0ZXhOYW1lcykge1xuICAgIHZlcnRleE5hbWVzLmZvckVhY2goKHZlcnRleE5hbWUpID0+IHRoaXMucmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpKTtcbiAgfVxuXG4gIGFkZEVkZ2UoZWRnZSkge1xuICAgIGNvbnN0IHN1Y2Nlc3MgPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmFkZEVkZ2UoZWRnZSk7XG4gICAgXG4gICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICBjb25zdCBjeWNsaWNFZGdlc0luY2x1ZGVzRWRnZSA9IGNoZWNrRWRnZXNJbmNsdWRlc0VkZ2UoZWRnZSwgdGhpcy5jeWNsaWNFZGdlcyk7XG5cbiAgICAgIGlmICghY3ljbGljRWRnZXNJbmNsdWRlc0VkZ2UpIHtcbiAgICAgICAgY29uc3QgY3ljbGljRWRnZSA9IGVkZ2U7ICAvLy9cblxuICAgICAgICB0aGlzLmN5Y2xpY0VkZ2VzLnB1c2goY3ljbGljRWRnZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICBhZGRFZGdlcyhlZGdlcykge1xuICAgIGVkZ2VzLmZvckVhY2goKGVkZ2UpID0+IHRoaXMuYWRkRWRnZShlZGdlKSk7XG4gIH1cblxuICByZW1vdmVFZGdlKGVkZ2UsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMgPSBmYWxzZSkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VzSW5jbHVkZXNFZGdlID0gY2hlY2tFZGdlc0luY2x1ZGVzRWRnZShlZGdlLCB0aGlzLmN5Y2xpY0VkZ2VzKSxcbiAgICAgICAgICBlZGdlUHJlc2VudCA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguaXNFZGdlUHJlc2VudChlZGdlKSxcbiAgICAgICAgICBlZGdlQ3ljbGljID0gY3ljbGljRWRnZXNJbmNsdWRlc0VkZ2U7IC8vL1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKGVkZ2VDeWNsaWMpIHtcbiAgICAgIGNvbnN0IGN5Y2xpY0VkZ2UgPSBlZGdlOyAgLy8vXG5cbiAgICAgIHJlbW92ZUVkZ2VGcm9tRWRnZXMoY3ljbGljRWRnZSwgdGhpcy5jeWNsaWNFZGdlcyk7XG4gICAgfSBlbHNlIGlmIChlZGdlUHJlc2VudCkge1xuICAgICAgdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5yZW1vdmVFZGdlKGVkZ2UpO1xuXG4gICAgICBpZiAocmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcykge1xuICAgICAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gZWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICAgIHRhcmdldFZlcnRleE5hbWUgPSBlZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKSxcbiAgICAgICAgICAgICAgc291cmNlVmVydGV4ID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSksXG4gICAgICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpLFxuICAgICAgICAgICAgICBzb3VyY2VWZXJ0ZXhTdHJhbmRlZCA9IHNvdXJjZVZlcnRleC5pc1N0cmFuZGVkKCksXG4gICAgICAgICAgICAgIHRhcmdldFZlcnRleFN0cmFuZGVkID0gdGFyZ2V0VmVydGV4LmlzU3RyYW5kZWQoKTtcblxuICAgICAgICBpZiAoc291cmNlVmVydGV4U3RyYW5kZWQpIHtcbiAgICAgICAgICB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLnJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0YXJnZXRWZXJ0ZXhTdHJhbmRlZCkge1xuICAgICAgICAgIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGgucmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5maWx0ZXJDeWNsaWNFZGdlcygpO1xuICB9XG5cbiAgcmVtb3ZlRWRnZXMoZWRnZXMsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMgPSBmYWxzZSkge1xuICAgIGVkZ2VzLmZvckVhY2goKGVkZ2UpID0+IHRoaXMucmVtb3ZlRWRnZShlZGdlLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzKSk7XG4gIH1cblxuICBhZGRFZGdlQnlWZXJ0ZXhOYW1lcyhzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgZWRnZSA9IEVkZ2UuZnJvbVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgdGhpcy5hZGRFZGdlKGVkZ2UpO1xuICB9XG5cbiAgcmVtb3ZlRWRnZUJ5VmVydGV4TmFtZXMoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSwgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgZWRnZSA9IEVkZ2UuZnJvbVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgdGhpcy5yZW1vdmVFZGdlKGVkZ2UsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMpO1xuICB9XG5cbiAgcmVtb3ZlRWRnZXNCeVRhcmdldFZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSwgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgY3ljbGljRWRnZXMgPSBlZGdlc0J5VGFyZ2V0VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lLCB0aGlzLmN5Y2xpY0VkZ2VzKSxcbiAgICAgICAgICBlZGdlcyA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0RWRnZXNCeVRhcmdldFZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICB0aGlzLnJlbW92ZUVkZ2VzKGN5Y2xpY0VkZ2VzLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzKTtcblxuICAgIHRoaXMucmVtb3ZlRWRnZXMoZWRnZXMsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMpO1xuICB9XG5cbiAgcmVtb3ZlRWRnZXNCeVNvdXJjZVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgY3ljbGljRWRnZXMgPSBlZGdlc0J5U291cmNlVmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0aGlzLmN5Y2xpY0VkZ2VzKSxcbiAgICAgICAgICBlZGdlcyA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0RWRnZXNCeVNvdXJjZVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSk7XG5cbiAgICB0aGlzLnJlbW92ZUVkZ2VzKGN5Y2xpY0VkZ2VzLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzKTtcblxuICAgIHRoaXMucmVtb3ZlRWRnZXMoZWRnZXMsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMpO1xuICB9XG5cbiAgcmVtb3ZlQWxsRWRnZXNBbmRWZXJ0aWNlcygpIHtcbiAgICB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoID0gRGlyZWN0ZWRBY3ljbGljR3JhcGguZnJvbU5vdGhpbmcoKTtcblxuICAgIHRoaXMuY3ljbGljRWRnZXMgPSBbXTtcbiAgfVxuXG4gIGZpbHRlckN5Y2xpY0VkZ2VzKCkge1xuICAgIGZpbHRlcih0aGlzLmN5Y2xpY0VkZ2VzLCAoY3ljbGljRWRnZSkgPT4ge1xuICAgICAgY29uc3Qgc291cmNlVmVydGV4TmFtZSA9IGN5Y2xpY0VkZ2UuZ2V0U291cmNlVmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IGN5Y2xpY0VkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgc291cmNlVmVydGV4UHJlc2VudCA9IHRoaXMuaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4UHJlc2VudCA9IHRoaXMuaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgICBpZiAoc291cmNlVmVydGV4UHJlc2VudCAmJiB0YXJnZXRWZXJ0ZXhQcmVzZW50KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZmlsdGVyKHRoaXMuY3ljbGljRWRnZXMsIChjeWNsaWNFZGdlKSA9PiB7XG4gICAgICBjb25zdCBlZGdlID0gY3ljbGljRWRnZSwgIC8vL1xuICAgICAgICAgICAgc3VjY2VzcyA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguYWRkRWRnZShlZGdlKTtcblxuICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VzID0gW10sXG4gICAgICAgICAgZGlyZWN0ZWRBY3ljbGljR3JhcGggPSBEaXJlY3RlZEFjeWNsaWNHcmFwaC5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGRpcmVjdGVkR3JhcGggPSBuZXcgRGlyZWN0ZWRHcmFwaChjeWNsaWNFZGdlcywgZGlyZWN0ZWRBY3ljbGljR3JhcGgpO1xuICAgIFxuICAgIHJldHVybiBkaXJlY3RlZEdyYXBoOyAgICBcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmVydGV4TGl0ZXJhbHModmVydGV4TGl0ZXJhbHMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhOYW1lcyA9IHZlcnRleE5hbWVzRnJvbVZlcnRleExpdGVyYWxzKHZlcnRleExpdGVyYWxzKSxcbiAgICAgICAgICBlZGdlcyA9IGVkZ2VzRnJvbVZlcnRleExpdGVyYWxzKHZlcnRleExpdGVyYWxzKSxcbiAgICAgICAgICBkaXJlY3RlZEdyYXBoID0gRGlyZWN0ZWRHcmFwaC5mcm9tVmVydGV4TmFtZXNBbmRFZGdlcyh2ZXJ0ZXhOYW1lcywgZWRnZXMpO1xuXG4gICAgcmV0dXJuIGRpcmVjdGVkR3JhcGg7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZlcnRleE5hbWVzQW5kRWRnZXModmVydGV4TmFtZXMsIGVkZ2VzKSB7XG4gICAgbGV0IGRpcmVjdGVkR3JhcGg7XG5cbiAgICBjb25zdCBncmFwaCA9IEdyYXBoLmZyb21WZXJ0ZXhOYW1lc0FuZEVkZ2VzKHZlcnRleE5hbWVzLCBlZGdlcyksXG4gICAgICAgICAgY3ljbGVzUHJlc2VudCA9IGdyYXBoLmFyZUN5Y2xlc1ByZXNlbnQoKTtcblxuICAgIGlmIChjeWNsZXNQcmVzZW50KSB7XG4gICAgICBjb25zdCBjeWNsaWNFZGdlcyA9IFtdLFxuICAgICAgICAgICAgZGlyZWN0ZWRBY3ljbGljR3JhcGggPSBEaXJlY3RlZEFjeWNsaWNHcmFwaC5mcm9tVmVydGV4TmFtZXModmVydGV4TmFtZXMpO1xuXG4gICAgICBkaXJlY3RlZEdyYXBoID0gbmV3IERpcmVjdGVkR3JhcGgoY3ljbGljRWRnZXMsIGRpcmVjdGVkQWN5Y2xpY0dyYXBoKTtcblxuICAgICAgZWRnZXMuZm9yRWFjaCgoZWRnZSkgPT4gZGlyZWN0ZWRHcmFwaC5hZGRFZGdlKGVkZ2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgb3JkZXJlZFZlcnRpY2VzID0gZ3JhcGguZ2V0T3JkZXJlZFZlcnRpY2VzKCksXG4gICAgICAgICAgICBjeWNsaWNFZGdlcyA9IFtdLFxuICAgICAgICAgICAgZGlyZWN0ZWRBY3ljbGljR3JhcGggPSBEaXJlY3RlZEFjeWNsaWNHcmFwaC5mcm9tT3JkZXJlZFZlcnRpY2VzKG9yZGVyZWRWZXJ0aWNlcyk7XG5cbiAgICAgIGRpcmVjdGVkR3JhcGggPSBuZXcgRGlyZWN0ZWRHcmFwaChjeWNsaWNFZGdlcywgZGlyZWN0ZWRBY3ljbGljR3JhcGgpO1xuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3RlZEdyYXBoO1xuICB9XG59XG4iXSwibmFtZXMiOlsiZmlyc3QiLCJmaWx0ZXIiLCJEaXJlY3RlZEdyYXBoIiwiY3ljbGljRWRnZXMiLCJkaXJlY3RlZEFjeWNsaWNHcmFwaCIsImdldEN5Y2xpY0VkZ2VzIiwiZ2V0RGlyZWN0ZWRBY3ljbGljR3JhcGgiLCJnZXRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lIiwidmVydGV4TmFtZSIsImluY2x1ZGVDeWNsaWNFZGdlcyIsImltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMiLCJmb3JFYWNoIiwiY3ljbGljRWRnZSIsImN5Y2xpY0VkZ2VUYXJnZXRWZXJ0ZXhOYW1lIiwiZ2V0VGFyZ2V0VmVydGV4TmFtZSIsImN5Y2xpY0VkZ2VTb3VyY2VWZXJ0ZXhOYW1lIiwiZ2V0U291cmNlVmVydGV4TmFtZSIsImltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZSIsInB1c2giLCJnZXRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSIsImltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzIiwiaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZSIsImdldFByZWRlY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUiLCJnZXRTdWNjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSIsImFyZUN5Y2xlc1ByZXNlbnRCeVZlcnRleE5hbWUiLCJjeWNsZXNQcmVzZW50IiwidmVydGV4UHJlc2VudCIsImlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZSIsImZpcnN0Q3ljbGUiLCJnZXRGaXJzdEN5Y2xlQnlWZXJ0ZXhOYW1lIiwiaXNFZGdlUHJlc2VudEJ5VmVydGV4TmFtZXMiLCJzb3VyY2VWZXJ0ZXhOYW1lIiwidGFyZ2V0VmVydGV4TmFtZSIsInZlcnRleCIsImdldFZlcnRleEJ5VmVydGV4TmFtZSIsInNsaWNlIiwicGFydGlhbEN5Y2xlcyIsImN5Y2xlcyIsInZpc2l0ZWRWZXJ0ZXgiLCJnZXRQcmVkZWNlc3NvclZlcnRpY2VzIiwidmlzaXRlZFZlcnRleE5hbWUiLCJnZXROYW1lIiwibWF0Y2hlcyIsIm1hdGNoU291cmNlVmVydGV4TmFtZSIsInByZWRlY2Vzc29yVmVydGljZXMiLCJwYXJ0aWFsQ3ljbGUiLCJmcm9tQ3ljbGljRWRnZUFuZFByZWRlY2Vzc29yVmVydGljZXMiLCJjeWNsaWNFZGdlc0xlbmd0aCIsImxlbmd0aCIsInRlcm1pbmF0ZSIsInNvbWUiLCJ0YXJnZXRWZXJ0ZXgiLCJzdWNjZXNzb3JWZXJ0aWNlcyIsImN5Y2xlIiwiZnJvbVZlcnRleE5hbWVQYXJ0aWFsQ3ljbGVBbmRTdWNjZXNzb3JWZXJ0aWNlcyIsImN5Y2xlc0xlbmd0aCIsImdldEZpcnN0Q3ljbGUiLCJmaXJzdEN5Y2xpY0VkZ2UiLCJnZXRWZXJ0ZXhOYW1lcyIsImdldE9yZGVyZWRWZXJ0ZXhOYW1lcyIsImFyZUN5Y2xlc1ByZXNlbnQiLCJhZGRWZXJ0ZXhCeVZlcnRleE5hbWUiLCJhZGRWZXJ0aWNlc0J5VmVydGV4TmFtZXMiLCJ2ZXJ0ZXhOYW1lcyIsInJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZSIsImZpbHRlckN5Y2xpY0VkZ2VzIiwicmVtb3ZlVmVydGljZXNCeVZlcnRleE5hbWVzIiwiYWRkRWRnZSIsImVkZ2UiLCJzdWNjZXNzIiwiY3ljbGljRWRnZXNJbmNsdWRlc0VkZ2UiLCJhZGRFZGdlcyIsImVkZ2VzIiwicmVtb3ZlRWRnZSIsInJlbW92ZVN0cmFuZGVkVmVydGljZXMiLCJlZGdlUHJlc2VudCIsImlzRWRnZVByZXNlbnQiLCJlZGdlQ3ljbGljIiwic291cmNlVmVydGV4Iiwic291cmNlVmVydGV4U3RyYW5kZWQiLCJpc1N0cmFuZGVkIiwidGFyZ2V0VmVydGV4U3RyYW5kZWQiLCJyZW1vdmVFZGdlcyIsImFkZEVkZ2VCeVZlcnRleE5hbWVzIiwiZnJvbVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lIiwicmVtb3ZlRWRnZUJ5VmVydGV4TmFtZXMiLCJyZW1vdmVFZGdlc0J5VGFyZ2V0VmVydGV4TmFtZSIsImdldEVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lIiwicmVtb3ZlRWRnZXNCeVNvdXJjZVZlcnRleE5hbWUiLCJnZXRFZGdlc0J5U291cmNlVmVydGV4TmFtZSIsInJlbW92ZUFsbEVkZ2VzQW5kVmVydGljZXMiLCJmcm9tTm90aGluZyIsInNvdXJjZVZlcnRleFByZXNlbnQiLCJ0YXJnZXRWZXJ0ZXhQcmVzZW50IiwiZGlyZWN0ZWRHcmFwaCIsImZyb21WZXJ0ZXhMaXRlcmFscyIsInZlcnRleExpdGVyYWxzIiwiZnJvbVZlcnRleE5hbWVzQW5kRWRnZXMiLCJncmFwaCIsImZyb21WZXJ0ZXhOYW1lcyIsIm9yZGVyZWRWZXJ0aWNlcyIsImdldE9yZGVyZWRWZXJ0aWNlcyIsImZyb21PcmRlcmVkVmVydGljZXMiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRVUsR0FBWSxDQUFaLFVBQVk7QUFDSCxHQUFXLENBQVgsVUFBVztBQUNMLEdBQW9CLENBQXBCLGlCQUFvQjtBQUV4QyxHQUFRLENBQVIsS0FBUTtBQUNQLEdBQVMsQ0FBVCxNQUFTO0FBQ0YsR0FBZ0IsQ0FBaEIsYUFBZ0I7QUFFK0IsR0FBb0IsQ0FBcEIsT0FBb0I7QUFDMkMsR0FBa0IsQ0FBbEIsTUFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekosR0FBSyxDQUFHQSxL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