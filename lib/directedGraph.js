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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kaXJlY3RlZEdyYXBoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBHcmFwaCB9IGZyb20gXCJvY2NhbS1rYWhuXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IERpcmVjdGVkQWN5Y2xpY0dyYXBoIH0gZnJvbSBcIm9jY2FtLXBlYXJjZS1rZWxseVwiO1xuXG5pbXBvcnQgRWRnZSBmcm9tIFwiLi9lZGdlXCI7XG5pbXBvcnQgQ3ljbGUgZnJvbSBcIi4vY3ljbGVcIjtcbmltcG9ydCBQYXJ0aWFsQ3ljbGUgZnJvbSBcIi4vcGFydGlhbEN5Y2xlXCI7XG5cbmltcG9ydCB7IHZlcnRleE5hbWVzRnJvbVZlcnRleExpdGVyYWxzLCBmb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2ggfSBmcm9tIFwiLi91dGlsaXRpZXMvdmVydGV4XCI7XG5pbXBvcnQgeyBlZGdlc0Zyb21WZXJ0ZXhMaXRlcmFscywgY2hlY2tFZGdlc0luY2x1ZGVzRWRnZSwgcmVtb3ZlRWRnZUZyb21FZGdlcywgZWRnZXNCeVNvdXJjZVZlcnRleE5hbWUsIGVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2VkZ2VcIjtcblxuY29uc3QgeyBmaXJzdCwgZmlsdGVyIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0ZWRHcmFwaCB7XG4gIGNvbnN0cnVjdG9yKGN5Y2xpY0VkZ2VzLCBkaXJlY3RlZEFjeWNsaWNHcmFwaCkge1xuICAgIHRoaXMuY3ljbGljRWRnZXMgPSBjeWNsaWNFZGdlcztcblxuICAgIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGggPSBkaXJlY3RlZEFjeWNsaWNHcmFwaDtcbiAgfVxuXG4gIGdldEN5Y2xpY0VkZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLmN5Y2xpY0VkZ2VzO1xuICB9XG5cbiAgZ2V0RGlyZWN0ZWRBY3ljbGljR3JhcGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGg7XG4gIH1cblxuICBnZXRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUsIGluY2x1ZGVDeWNsaWNFZGdlcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcyA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgIGlmIChpbmNsdWRlQ3ljbGljRWRnZXMpIHtcbiAgICAgIHRoaXMuY3ljbGljRWRnZXMuZm9yRWFjaCgoY3ljbGljRWRnZSkgPT4ge1xuICAgICAgICBjb25zdCBjeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZSA9IGN5Y2xpY0VkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpO1xuXG4gICAgICAgIGlmIChjeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZSA9PT0gdmVydGV4TmFtZSkge1xuICAgICAgICAgIGNvbnN0IGN5Y2xpY0VkZ2VTb3VyY2VWZXJ0ZXhOYW1lID0gY3ljbGljRWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICAgICAgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lID0gY3ljbGljRWRnZVNvdXJjZVZlcnRleE5hbWU7ICAvLy9cblxuICAgICAgICAgIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMucHVzaChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGdldEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUsIGluY2x1ZGVDeWNsaWNFZGdlcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXMgPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgaWYgKGluY2x1ZGVDeWNsaWNFZGdlcykge1xuICAgICAgdGhpcy5jeWNsaWNFZGdlcy5mb3JFYWNoKChjeWNsaWNFZGdlKSA9PiB7XG4gICAgICAgIGNvbnN0IGN5Y2xpY0VkZ2VTb3VyY2VWZXJ0ZXhOYW1lID0gY3ljbGljRWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCk7XG5cbiAgICAgICAgaWYgKGN5Y2xpY0VkZ2VTb3VyY2VWZXJ0ZXhOYW1lID09PSB2ZXJ0ZXhOYW1lKSB7XG4gICAgICAgICAgY29uc3QgY3ljbGljRWRnZVRhcmdldFZlcnRleE5hbWUgPSBjeWNsaWNFZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKSxcbiAgICAgICAgICAgICAgICBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lID0gY3ljbGljRWRnZVRhcmdldFZlcnRleE5hbWU7ICAvLy9cblxuICAgICAgICAgIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzLnB1c2goaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGdldFByZWRlY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUodmVydGV4TmFtZSkgeyByZXR1cm4gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRQcmVkZWNlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpOyB9XG5cbiAgZ2V0U3VjY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUodmVydGV4TmFtZSkgeyByZXR1cm4gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRTdWNjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTsgfVxuXG4gIGFyZUN5Y2xlc1ByZXNlbnRCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGxldCBjeWNsZXNQcmVzZW50ID0gZmFsc2U7XG5cbiAgICBjb25zdCB2ZXJ0ZXhQcmVzZW50ID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5pc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICBpZiAodmVydGV4UHJlc2VudCkge1xuICAgICAgY29uc3QgZmlyc3RDeWNsZSA9IHRoaXMuZ2V0Rmlyc3RDeWNsZUJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgICAgY3ljbGVzUHJlc2VudCA9IChmaXJzdEN5Y2xlICE9PSBudWxsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3ljbGVzUHJlc2VudDtcbiAgfVxuXG4gIGlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7IHJldHVybiB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTsgfVxuXG4gIGdldEZpcnN0Q3ljbGVCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGxldCBmaXJzdEN5Y2xlID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCB2ZXJ0ZXggPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSxcbiAgICAgICAgICBjeWNsaWNFZGdlcyA9IHRoaXMuY3ljbGljRWRnZXMuc2xpY2UoKSwgLy8vXG4gICAgICAgICAgcGFydGlhbEN5Y2xlcyA9IFtdLFxuICAgICAgICAgIGN5Y2xlcyA9IFtdO1xuXG4gICAgZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoKHZlcnRleCwgKHZpc2l0ZWRWZXJ0ZXgsIGdldFByZWRlY2Vzc29yVmVydGljZXMpID0+IHtcbiAgICAgIGNvbnN0IHZpc2l0ZWRWZXJ0ZXhOYW1lID0gdmlzaXRlZFZlcnRleC5nZXROYW1lKCksXG4gICAgICAgICAgICBzb3VyY2VWZXJ0ZXhOYW1lID0gdmlzaXRlZFZlcnRleE5hbWU7IC8vL1xuXG4gICAgICBmaWx0ZXIoY3ljbGljRWRnZXMsIChjeWNsaWNFZGdlKSA9PiB7XG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSBjeWNsaWNFZGdlLm1hdGNoU291cmNlVmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKTtcblxuICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgIGNvbnN0IHByZWRlY2Vzc29yVmVydGljZXMgPSBnZXRQcmVkZWNlc3NvclZlcnRpY2VzKCksXG4gICAgICAgICAgICAgICAgcGFydGlhbEN5Y2xlID0gIFBhcnRpYWxDeWNsZS5mcm9tQ3ljbGljRWRnZUFuZFByZWRlY2Vzc29yVmVydGljZXMoY3ljbGljRWRnZSwgcHJlZGVjZXNzb3JWZXJ0aWNlcyk7XG4gICAgICAgICAgXG4gICAgICAgICAgcGFydGlhbEN5Y2xlcy5wdXNoKHBhcnRpYWxDeWNsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBjeWNsaWNFZGdlc0xlbmd0aCA9IGN5Y2xpY0VkZ2VzLmxlbmd0aCxcbiAgICAgICAgICAgIHRlcm1pbmF0ZSA9IChjeWNsaWNFZGdlc0xlbmd0aCA9PT0gMCk7XG5cbiAgICAgIHJldHVybiB0ZXJtaW5hdGU7XG4gICAgfSk7XG5cbiAgICBwYXJ0aWFsQ3ljbGVzLnNvbWUoKHBhcnRpYWxDeWNsZSkgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0VmVydGV4TmFtZSA9IHBhcnRpYWxDeWNsZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXggPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldFZlcnRleEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoKHRhcmdldFZlcnRleCwgKHZpc2l0ZWRWZXJ0ZXgsIGdldFByZWRlY2Vzc29yVmVydGljZXMpID0+IHtcbiAgICAgICAgY29uc3QgdmlzaXRlZFZlcnRleE5hbWUgPSB2aXNpdGVkVmVydGV4LmdldE5hbWUoKTtcblxuICAgICAgICBpZiAodmlzaXRlZFZlcnRleE5hbWUgPT09IHZlcnRleE5hbWUpIHtcbiAgICAgICAgICBjb25zdCBwcmVkZWNlc3NvclZlcnRpY2VzID0gZ2V0UHJlZGVjZXNzb3JWZXJ0aWNlcygpLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3NvclZlcnRpY2VzID0gcHJlZGVjZXNzb3JWZXJ0aWNlcywgIC8vL1xuICAgICAgICAgICAgICAgIGN5Y2xlID0gQ3ljbGUuZnJvbVZlcnRleE5hbWVQYXJ0aWFsQ3ljbGVBbmRTdWNjZXNzb3JWZXJ0aWNlcyh2ZXJ0ZXhOYW1lLCBwYXJ0aWFsQ3ljbGUsIHN1Y2Nlc3NvclZlcnRpY2VzKTtcblxuICAgICAgICAgIGN5Y2xlcy5wdXNoKGN5Y2xlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGN5Y2xlc0xlbmd0aCA9IGN5Y2xlcy5sZW5ndGgsXG4gICAgICAgICAgICAgIHRlcm1pbmF0ZSA9IChjeWNsZXNMZW5ndGggPiAwKTtcblxuICAgICAgICByZXR1cm4gdGVybWluYXRlO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjeWNsZXNMZW5ndGggPSBjeWNsZXMubGVuZ3RoO1xuICAgIFxuICAgIGlmIChjeWNsZXNMZW5ndGggPiAwKSB7XG4gICAgICBmaXJzdEN5Y2xlID0gZmlyc3QoY3ljbGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmlyc3RDeWNsZTtcbiAgfVxuXG4gIGdldEZpcnN0Q3ljbGUoKSB7XG4gICAgY29uc3QgZmlyc3RDeWNsaWNFZGdlID0gZmlyc3QodGhpcy5jeWNsaWNFZGdlcyksXG4gICAgICAgICAgY3ljbGljRWRnZSA9IGZpcnN0Q3ljbGljRWRnZSwgLy8vXG4gICAgICAgICAgc291cmNlVmVydGV4TmFtZSA9IGN5Y2xpY0VkZ2UuZ2V0U291cmNlVmVydGV4TmFtZSgpLFxuICAgICAgICAgIHZlcnRleE5hbWUgPSBzb3VyY2VWZXJ0ZXhOYW1lLCAgLy8vXG4gICAgICAgICAgZmlyc3RDeWNsZSA9IHRoaXMuZ2V0Rmlyc3RDeWNsZUJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgIHJldHVybiBmaXJzdEN5Y2xlO1xuICB9XG5cbiAgZ2V0VmVydGV4TmFtZXMoKSB7IHJldHVybiB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldFZlcnRleE5hbWVzKCk7IH1cblxuICBnZXRPcmRlcmVkVmVydGV4TmFtZXMoKSB7IHJldHVybiB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldE9yZGVyZWRWZXJ0ZXhOYW1lcygpOyB9XG5cbiAgYXJlQ3ljbGVzUHJlc2VudCgpIHtcbiAgICBjb25zdCBjeWNsaWNFZGdlc0xlbmd0aCA9IHRoaXMuY3ljbGljRWRnZXMubGVuZ3RoLFxuICAgICAgICAgIGN5Y2xlc1ByZXNlbnQgPSAoY3ljbGljRWRnZXNMZW5ndGggPiAwKTtcblxuICAgIHJldHVybiBjeWNsZXNQcmVzZW50O1xuICB9XG5cbiAgYWRkVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHsgdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5hZGRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7IH1cblxuICBhZGRWZXJ0aWNlc0J5VmVydGV4TmFtZXModmVydGV4TmFtZXMpIHtcbiAgICB2ZXJ0ZXhOYW1lcy5mb3JFYWNoKCh2ZXJ0ZXhOYW1lKSA9PiB0aGlzLmFkZFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSk7XG4gIH1cblxuICByZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGgucmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgdGhpcy5maWx0ZXJDeWNsaWNFZGdlcygpO1xuICB9XG5cbiAgcmVtb3ZlVmVydGljZXNCeVZlcnRleE5hbWVzKHZlcnRleE5hbWVzKSB7XG4gICAgdmVydGV4TmFtZXMuZm9yRWFjaCgodmVydGV4TmFtZSkgPT4gdGhpcy5yZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSkpO1xuICB9XG5cbiAgYWRkRWRnZShlZGdlKSB7XG4gICAgY29uc3Qgc3VjY2VzcyA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguYWRkRWRnZShlZGdlKTtcbiAgICBcbiAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgIGNvbnN0IGN5Y2xpY0VkZ2VzSW5jbHVkZXNFZGdlID0gY2hlY2tFZGdlc0luY2x1ZGVzRWRnZShlZGdlLCB0aGlzLmN5Y2xpY0VkZ2VzKTtcblxuICAgICAgaWYgKCFjeWNsaWNFZGdlc0luY2x1ZGVzRWRnZSkge1xuICAgICAgICBjb25zdCBjeWNsaWNFZGdlID0gZWRnZTsgIC8vL1xuXG4gICAgICAgIHRoaXMuY3ljbGljRWRnZXMucHVzaChjeWNsaWNFZGdlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIGFkZEVkZ2VzKGVkZ2VzKSB7XG4gICAgZWRnZXMuZm9yRWFjaCgoZWRnZSkgPT4gdGhpcy5hZGRFZGdlKGVkZ2UpKTtcbiAgfVxuXG4gIHJlbW92ZUVkZ2UoZWRnZSwgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgY3ljbGljRWRnZXNJbmNsdWRlc0VkZ2UgPSBjaGVja0VkZ2VzSW5jbHVkZXNFZGdlKGVkZ2UsIHRoaXMuY3ljbGljRWRnZXMpLFxuICAgICAgICAgIGVkZ2VQcmVzZW50ID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5pc0VkZ2VQcmVzZW50KGVkZ2UpLFxuICAgICAgICAgIGVkZ2VDeWNsaWMgPSBjeWNsaWNFZGdlc0luY2x1ZGVzRWRnZTsgLy8vXG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAoZWRnZUN5Y2xpYykge1xuICAgICAgY29uc3QgY3ljbGljRWRnZSA9IGVkZ2U7ICAvLy9cblxuICAgICAgcmVtb3ZlRWRnZUZyb21FZGdlcyhjeWNsaWNFZGdlLCB0aGlzLmN5Y2xpY0VkZ2VzKTtcbiAgICB9IGVsc2UgaWYgKGVkZ2VQcmVzZW50KSB7XG4gICAgICB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLnJlbW92ZUVkZ2UoZWRnZSk7XG5cbiAgICAgIGlmIChyZW1vdmVTdHJhbmRlZFZlcnRpY2VzKSB7XG4gICAgICAgIGNvbnN0IHNvdXJjZVZlcnRleE5hbWUgPSBlZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSxcbiAgICAgICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IGVkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgICBzb3VyY2VWZXJ0ZXggPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldFZlcnRleEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSksXG4gICAgICAgICAgICAgIHNvdXJjZVZlcnRleFN0cmFuZGVkID0gc291cmNlVmVydGV4LmlzU3RyYW5kZWQoKSxcbiAgICAgICAgICAgICAgdGFyZ2V0VmVydGV4U3RyYW5kZWQgPSB0YXJnZXRWZXJ0ZXguaXNTdHJhbmRlZCgpO1xuXG4gICAgICAgIGlmIChzb3VyY2VWZXJ0ZXhTdHJhbmRlZCkge1xuICAgICAgICAgIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGgucmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRhcmdldFZlcnRleFN0cmFuZGVkKSB7XG4gICAgICAgICAgdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5yZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmZpbHRlckN5Y2xpY0VkZ2VzKCk7XG4gIH1cblxuICByZW1vdmVFZGdlcyhlZGdlcywgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyA9IGZhbHNlKSB7XG4gICAgZWRnZXMuZm9yRWFjaCgoZWRnZSkgPT4gdGhpcy5yZW1vdmVFZGdlKGVkZ2UsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMpKTtcbiAgfVxuXG4gIGFkZEVkZ2VCeVZlcnRleE5hbWVzKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpIHtcbiAgICBjb25zdCBlZGdlID0gRWRnZS5mcm9tU291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICB0aGlzLmFkZEVkZ2UoZWRnZSk7XG4gIH1cblxuICByZW1vdmVFZGdlQnlWZXJ0ZXhOYW1lcyhzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzID0gZmFsc2UpIHtcbiAgICBjb25zdCBlZGdlID0gRWRnZS5mcm9tU291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICB0aGlzLnJlbW92ZUVkZ2UoZWRnZSwgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyk7XG4gIH1cblxuICByZW1vdmVFZGdlc0J5VGFyZ2V0VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzID0gZmFsc2UpIHtcbiAgICBjb25zdCBjeWNsaWNFZGdlcyA9IGVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUsIHRoaXMuY3ljbGljRWRnZXMpLFxuICAgICAgICAgIGVkZ2VzID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRFZGdlc0J5VGFyZ2V0VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgIHRoaXMucmVtb3ZlRWRnZXMoY3ljbGljRWRnZXMsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMpO1xuXG4gICAgdGhpcy5yZW1vdmVFZGdlcyhlZGdlcywgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyk7XG4gIH1cblxuICByZW1vdmVFZGdlc0J5U291cmNlVmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzID0gZmFsc2UpIHtcbiAgICBjb25zdCBjeWNsaWNFZGdlcyA9IGVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUsIHRoaXMuY3ljbGljRWRnZXMpLFxuICAgICAgICAgIGVkZ2VzID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRFZGdlc0J5U291cmNlVmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKTtcblxuICAgIHRoaXMucmVtb3ZlRWRnZXMoY3ljbGljRWRnZXMsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMpO1xuXG4gICAgdGhpcy5yZW1vdmVFZGdlcyhlZGdlcywgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyk7XG4gIH1cblxuICByZW1vdmVBbGxFZGdlc0FuZFZlcnRpY2VzKCkge1xuICAgIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGggPSBEaXJlY3RlZEFjeWNsaWNHcmFwaC5mcm9tTm90aGluZygpO1xuXG4gICAgdGhpcy5jeWNsaWNFZGdlcyA9IFtdO1xuICB9XG5cbiAgZmlsdGVyQ3ljbGljRWRnZXMoKSB7XG4gICAgZmlsdGVyKHRoaXMuY3ljbGljRWRnZXMsIChjeWNsaWNFZGdlKSA9PiB7XG4gICAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gY3ljbGljRWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gY3ljbGljRWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICBzb3VyY2VWZXJ0ZXhQcmVzZW50ID0gdGhpcy5pc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSksXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXhQcmVzZW50ID0gdGhpcy5pc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICAgIGlmIChzb3VyY2VWZXJ0ZXhQcmVzZW50ICYmIHRhcmdldFZlcnRleFByZXNlbnQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBmaWx0ZXIodGhpcy5jeWNsaWNFZGdlcywgKGN5Y2xpY0VkZ2UpID0+IHtcbiAgICAgIGNvbnN0IGVkZ2UgPSBjeWNsaWNFZGdlLCAgLy8vXG4gICAgICAgICAgICBzdWNjZXNzID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5hZGRFZGdlKGVkZ2UpO1xuXG4gICAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgY3ljbGljRWRnZXMgPSBbXSxcbiAgICAgICAgICBkaXJlY3RlZEFjeWNsaWNHcmFwaCA9IERpcmVjdGVkQWN5Y2xpY0dyYXBoLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgZGlyZWN0ZWRHcmFwaCA9IG5ldyBEaXJlY3RlZEdyYXBoKGN5Y2xpY0VkZ2VzLCBkaXJlY3RlZEFjeWNsaWNHcmFwaCk7XG4gICAgXG4gICAgcmV0dXJuIGRpcmVjdGVkR3JhcGg7ICAgIFxuICB9XG5cbiAgc3RhdGljIGZyb21WZXJ0ZXhMaXRlcmFscyh2ZXJ0ZXhMaXRlcmFscykge1xuICAgIGNvbnN0IHZlcnRleE5hbWVzID0gdmVydGV4TmFtZXNGcm9tVmVydGV4TGl0ZXJhbHModmVydGV4TGl0ZXJhbHMpLFxuICAgICAgICAgIGVkZ2VzID0gZWRnZXNGcm9tVmVydGV4TGl0ZXJhbHModmVydGV4TGl0ZXJhbHMpLFxuICAgICAgICAgIGRpcmVjdGVkR3JhcGggPSBEaXJlY3RlZEdyYXBoLmZyb21WZXJ0ZXhOYW1lc0FuZEVkZ2VzKHZlcnRleE5hbWVzLCBlZGdlcyk7XG5cbiAgICByZXR1cm4gZGlyZWN0ZWRHcmFwaDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmVydGV4TmFtZXNBbmRFZGdlcyh2ZXJ0ZXhOYW1lcywgZWRnZXMpIHtcbiAgICBsZXQgZGlyZWN0ZWRHcmFwaDtcblxuICAgIGNvbnN0IGdyYXBoID0gR3JhcGguZnJvbVZlcnRleE5hbWVzQW5kRWRnZXModmVydGV4TmFtZXMsIGVkZ2VzKSxcbiAgICAgICAgICBjeWNsZXNQcmVzZW50ID0gZ3JhcGguYXJlQ3ljbGVzUHJlc2VudCgpO1xuXG4gICAgaWYgKGN5Y2xlc1ByZXNlbnQpIHtcbiAgICAgIGNvbnN0IGN5Y2xpY0VkZ2VzID0gW10sXG4gICAgICAgICAgICBkaXJlY3RlZEFjeWNsaWNHcmFwaCA9IERpcmVjdGVkQWN5Y2xpY0dyYXBoLmZyb21WZXJ0ZXhOYW1lcyh2ZXJ0ZXhOYW1lcyk7XG5cbiAgICAgIGRpcmVjdGVkR3JhcGggPSBuZXcgRGlyZWN0ZWRHcmFwaChjeWNsaWNFZGdlcywgZGlyZWN0ZWRBY3ljbGljR3JhcGgpO1xuXG4gICAgICBlZGdlcy5mb3JFYWNoKChlZGdlKSA9PiBkaXJlY3RlZEdyYXBoLmFkZEVkZ2UoZWRnZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBvcmRlcmVkVmVydGljZXMgPSBncmFwaC5nZXRPcmRlcmVkVmVydGljZXMoKSxcbiAgICAgICAgICAgIGN5Y2xpY0VkZ2VzID0gW10sXG4gICAgICAgICAgICBkaXJlY3RlZEFjeWNsaWNHcmFwaCA9IERpcmVjdGVkQWN5Y2xpY0dyYXBoLmZyb21PcmRlcmVkVmVydGljZXMob3JkZXJlZFZlcnRpY2VzKTtcblxuICAgICAgZGlyZWN0ZWRHcmFwaCA9IG5ldyBEaXJlY3RlZEdyYXBoKGN5Y2xpY0VkZ2VzLCBkaXJlY3RlZEFjeWNsaWNHcmFwaCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdGVkR3JhcGg7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJmaXJzdCIsImZpbHRlciIsIkRpcmVjdGVkR3JhcGgiLCJjeWNsaWNFZGdlcyIsImRpcmVjdGVkQWN5Y2xpY0dyYXBoIiwiZ2V0Q3ljbGljRWRnZXMiLCJnZXREaXJlY3RlZEFjeWNsaWNHcmFwaCIsImdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUiLCJ2ZXJ0ZXhOYW1lIiwiaW5jbHVkZUN5Y2xpY0VkZ2VzIiwiaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcyIsImZvckVhY2giLCJjeWNsaWNFZGdlIiwiY3ljbGljRWRnZVRhcmdldFZlcnRleE5hbWUiLCJnZXRUYXJnZXRWZXJ0ZXhOYW1lIiwiY3ljbGljRWRnZVNvdXJjZVZlcnRleE5hbWUiLCJnZXRTb3VyY2VWZXJ0ZXhOYW1lIiwiaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lIiwicHVzaCIsImdldEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lIiwiaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXMiLCJpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lIiwiZ2V0UHJlZGVjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSIsImdldFN1Y2Nlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lIiwiYXJlQ3ljbGVzUHJlc2VudEJ5VmVydGV4TmFtZSIsImN5Y2xlc1ByZXNlbnQiLCJ2ZXJ0ZXhQcmVzZW50IiwiaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lIiwiZmlyc3RDeWNsZSIsImdldEZpcnN0Q3ljbGVCeVZlcnRleE5hbWUiLCJ2ZXJ0ZXgiLCJnZXRWZXJ0ZXhCeVZlcnRleE5hbWUiLCJzbGljZSIsInBhcnRpYWxDeWNsZXMiLCJjeWNsZXMiLCJ2aXNpdGVkVmVydGV4IiwiZ2V0UHJlZGVjZXNzb3JWZXJ0aWNlcyIsInZpc2l0ZWRWZXJ0ZXhOYW1lIiwiZ2V0TmFtZSIsInNvdXJjZVZlcnRleE5hbWUiLCJtYXRjaGVzIiwibWF0Y2hTb3VyY2VWZXJ0ZXhOYW1lIiwicHJlZGVjZXNzb3JWZXJ0aWNlcyIsInBhcnRpYWxDeWNsZSIsImZyb21DeWNsaWNFZGdlQW5kUHJlZGVjZXNzb3JWZXJ0aWNlcyIsImN5Y2xpY0VkZ2VzTGVuZ3RoIiwibGVuZ3RoIiwidGVybWluYXRlIiwic29tZSIsInRhcmdldFZlcnRleE5hbWUiLCJ0YXJnZXRWZXJ0ZXgiLCJzdWNjZXNzb3JWZXJ0aWNlcyIsImN5Y2xlIiwiZnJvbVZlcnRleE5hbWVQYXJ0aWFsQ3ljbGVBbmRTdWNjZXNzb3JWZXJ0aWNlcyIsImN5Y2xlc0xlbmd0aCIsImdldEZpcnN0Q3ljbGUiLCJmaXJzdEN5Y2xpY0VkZ2UiLCJnZXRWZXJ0ZXhOYW1lcyIsImdldE9yZGVyZWRWZXJ0ZXhOYW1lcyIsImFyZUN5Y2xlc1ByZXNlbnQiLCJhZGRWZXJ0ZXhCeVZlcnRleE5hbWUiLCJhZGRWZXJ0aWNlc0J5VmVydGV4TmFtZXMiLCJ2ZXJ0ZXhOYW1lcyIsInJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZSIsImZpbHRlckN5Y2xpY0VkZ2VzIiwicmVtb3ZlVmVydGljZXNCeVZlcnRleE5hbWVzIiwiYWRkRWRnZSIsImVkZ2UiLCJzdWNjZXNzIiwiY3ljbGljRWRnZXNJbmNsdWRlc0VkZ2UiLCJhZGRFZGdlcyIsImVkZ2VzIiwicmVtb3ZlRWRnZSIsInJlbW92ZVN0cmFuZGVkVmVydGljZXMiLCJlZGdlUHJlc2VudCIsImlzRWRnZVByZXNlbnQiLCJlZGdlQ3ljbGljIiwic291cmNlVmVydGV4Iiwic291cmNlVmVydGV4U3RyYW5kZWQiLCJpc1N0cmFuZGVkIiwidGFyZ2V0VmVydGV4U3RyYW5kZWQiLCJyZW1vdmVFZGdlcyIsImFkZEVkZ2VCeVZlcnRleE5hbWVzIiwiZnJvbVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lIiwicmVtb3ZlRWRnZUJ5VmVydGV4TmFtZXMiLCJyZW1vdmVFZGdlc0J5VGFyZ2V0VmVydGV4TmFtZSIsImdldEVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lIiwicmVtb3ZlRWRnZXNCeVNvdXJjZVZlcnRleE5hbWUiLCJnZXRFZGdlc0J5U291cmNlVmVydGV4TmFtZSIsInJlbW92ZUFsbEVkZ2VzQW5kVmVydGljZXMiLCJmcm9tTm90aGluZyIsInNvdXJjZVZlcnRleFByZXNlbnQiLCJ0YXJnZXRWZXJ0ZXhQcmVzZW50IiwiZGlyZWN0ZWRHcmFwaCIsImZyb21WZXJ0ZXhMaXRlcmFscyIsInZlcnRleExpdGVyYWxzIiwiZnJvbVZlcnRleE5hbWVzQW5kRWRnZXMiLCJncmFwaCIsImZyb21WZXJ0ZXhOYW1lcyIsIm9yZGVyZWRWZXJ0aWNlcyIsImdldE9yZGVyZWRWZXJ0aWNlcyIsImZyb21PcmRlcmVkVmVydGljZXMiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRVUsR0FBWSxDQUFaLFVBQVk7QUFDSCxHQUFXLENBQVgsVUFBVztBQUNMLEdBQW9CLENBQXBCLGlCQUFvQjtBQUV4QyxHQUFRLENBQVIsS0FBUTtBQUNQLEdBQVMsQ0FBVCxNQUFTO0FBQ0YsR0FBZ0IsQ0FBaEIsYUFBZ0I7QUFFK0IsR0FBb0IsQ0FBcEIsT0FBb0I7QUFDMkMsR0FBa0IsQ0FBbEIsTUFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekosR0FBSyxDQUFHQSxLQUFLLEdBVmtCLFVBQVcsZ0JBVWxDQSxLQUFLLEVBQUVDLE1BQU0sR0FWVSxVQUFXLGdCQVUzQkEsTUFBTTtJQUVBQyxhQUFhLGlCQUFuQixRQUFRO2FBQUZBLGFBQWEsQ0FDcEJDLFdBQVcsRUFBRUMsb0JBQW9COzhCQUQxQkYsYUFBYTtRQUU5QixJQUFJLENBQUNDLFdBQVcsR0FBR0EsV0FBVztRQUU5QixJQUFJLENBQUNDLG9CQUFvQixHQUFHQSxv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