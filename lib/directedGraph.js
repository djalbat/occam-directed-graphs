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
            value: function getImmediatePredecessorVertexNamesByVertexName(vertexName, param) {
                var includeCyclicEdges = param === void 0 ? false : param;
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
            value: function getImmediateSuccessorVertexNamesByVertexName(vertexName, param) {
                var includeCyclicEdges = param === void 0 ? false : param;
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
            value: function removeEdge(edge, param) {
                var removeStrandedVertices = param === void 0 ? false : param;
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
            value: function removeEdges(edges, param) {
                var removeStrandedVertices = param === void 0 ? false : param;
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
            value: function removeEdgeByVertexNames(sourceVertexName, targetVertexName, param) {
                var removeStrandedVertices = param === void 0 ? false : param;
                var edge = _edge.default.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);
                this.removeEdge(edge, removeStrandedVertices);
            }
        },
        {
            key: "removeEdgesByTargetVertexName",
            value: function removeEdgesByTargetVertexName(targetVertexName, param) {
                var removeStrandedVertices = param === void 0 ? false : param;
                var cyclicEdges = (0, _edge1).edgesByTargetVertexName(targetVertexName, this.cyclicEdges), edges = this.directedAcyclicGraph.getEdgesByTargetVertexName(targetVertexName);
                this.removeEdges(cyclicEdges, removeStrandedVertices);
                this.removeEdges(edges, removeStrandedVertices);
            }
        },
        {
            key: "removeEdgesBySourceVertexName",
            value: function removeEdgesBySourceVertexName(sourceVertexName, param) {
                var removeStrandedVertices = param === void 0 ? false : param;
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
                var _this = this, _this1 = this;
                filter(this.cyclicEdges, function(cyclicEdge) {
                    var sourceVertexName = cyclicEdge.getSourceVertexName(), targetVertexName = cyclicEdge.getTargetVertexName(), sourceVertexPresent = _this.isVertexPresentByVertexName(sourceVertexName), targetVertexPresent = _this.isVertexPresentByVertexName(targetVertexName);
                    if (sourceVertexPresent && targetVertexPresent) {
                        return true;
                    }
                });
                filter(this.cyclicEdges, function(cyclicEdge) {
                    var edge = cyclicEdge, success = _this1.directedAcyclicGraph.addEdge(edge);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kaXJlY3RlZEdyYXBoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBHcmFwaCB9IGZyb20gXCJvY2NhbS1rYWhuXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IERpcmVjdGVkQWN5Y2xpY0dyYXBoIH0gZnJvbSBcIm9jY2FtLXBlYXJjZS1rZWxseVwiO1xuXG5pbXBvcnQgRWRnZSBmcm9tIFwiLi9lZGdlXCI7XG5pbXBvcnQgQ3ljbGUgZnJvbSBcIi4vY3ljbGVcIjtcbmltcG9ydCBQYXJ0aWFsQ3ljbGUgZnJvbSBcIi4vcGFydGlhbEN5Y2xlXCI7XG5cbmltcG9ydCB7IHZlcnRleE5hbWVzRnJvbVZlcnRleExpdGVyYWxzLCBmb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2ggfSBmcm9tIFwiLi91dGlsaXRpZXMvdmVydGV4XCI7XG5pbXBvcnQgeyBlZGdlc0Zyb21WZXJ0ZXhMaXRlcmFscywgY2hlY2tFZGdlc0luY2x1ZGVzRWRnZSwgcmVtb3ZlRWRnZUZyb21FZGdlcywgZWRnZXNCeVNvdXJjZVZlcnRleE5hbWUsIGVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2VkZ2VcIjtcblxuY29uc3QgeyBmaXJzdCwgZmlsdGVyIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0ZWRHcmFwaCB7XG4gIGNvbnN0cnVjdG9yKGN5Y2xpY0VkZ2VzLCBkaXJlY3RlZEFjeWNsaWNHcmFwaCkge1xuICAgIHRoaXMuY3ljbGljRWRnZXMgPSBjeWNsaWNFZGdlcztcblxuICAgIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGggPSBkaXJlY3RlZEFjeWNsaWNHcmFwaDtcbiAgfVxuXG4gIGdldEN5Y2xpY0VkZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLmN5Y2xpY0VkZ2VzO1xuICB9XG5cbiAgZ2V0RGlyZWN0ZWRBY3ljbGljR3JhcGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGg7XG4gIH1cblxuICBnZXRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUsIGluY2x1ZGVDeWNsaWNFZGdlcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcyA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgIGlmIChpbmNsdWRlQ3ljbGljRWRnZXMpIHtcbiAgICAgIHRoaXMuY3ljbGljRWRnZXMuZm9yRWFjaCgoY3ljbGljRWRnZSkgPT4ge1xuICAgICAgICBjb25zdCBjeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZSA9IGN5Y2xpY0VkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpO1xuXG4gICAgICAgIGlmIChjeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZSA9PT0gdmVydGV4TmFtZSkge1xuICAgICAgICAgIGNvbnN0IGN5Y2xpY0VkZ2VTb3VyY2VWZXJ0ZXhOYW1lID0gY3ljbGljRWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICAgICAgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lID0gY3ljbGljRWRnZVNvdXJjZVZlcnRleE5hbWU7ICAvLy9cblxuICAgICAgICAgIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMucHVzaChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGdldEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUsIGluY2x1ZGVDeWNsaWNFZGdlcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXMgPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgaWYgKGluY2x1ZGVDeWNsaWNFZGdlcykge1xuICAgICAgdGhpcy5jeWNsaWNFZGdlcy5mb3JFYWNoKChjeWNsaWNFZGdlKSA9PiB7XG4gICAgICAgIGNvbnN0IGN5Y2xpY0VkZ2VTb3VyY2VWZXJ0ZXhOYW1lID0gY3ljbGljRWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCk7XG5cbiAgICAgICAgaWYgKGN5Y2xpY0VkZ2VTb3VyY2VWZXJ0ZXhOYW1lID09PSB2ZXJ0ZXhOYW1lKSB7XG4gICAgICAgICAgY29uc3QgY3ljbGljRWRnZVRhcmdldFZlcnRleE5hbWUgPSBjeWNsaWNFZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKSxcbiAgICAgICAgICAgICAgICBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lID0gY3ljbGljRWRnZVRhcmdldFZlcnRleE5hbWU7ICAvLy9cblxuICAgICAgICAgIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzLnB1c2goaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGdldFByZWRlY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUodmVydGV4TmFtZSkgeyByZXR1cm4gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRQcmVkZWNlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpOyB9XG5cbiAgZ2V0U3VjY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUodmVydGV4TmFtZSkgeyByZXR1cm4gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRTdWNjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTsgfVxuXG4gIGFyZUN5Y2xlc1ByZXNlbnRCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGxldCBjeWNsZXNQcmVzZW50ID0gZmFsc2U7XG5cbiAgICBjb25zdCB2ZXJ0ZXhQcmVzZW50ID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5pc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICBpZiAodmVydGV4UHJlc2VudCkge1xuICAgICAgY29uc3QgZmlyc3RDeWNsZSA9IHRoaXMuZ2V0Rmlyc3RDeWNsZUJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgICAgY3ljbGVzUHJlc2VudCA9IChmaXJzdEN5Y2xlICE9PSBudWxsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3ljbGVzUHJlc2VudDtcbiAgfVxuXG4gIGlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7IHJldHVybiB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTsgfVxuXG4gIGdldEZpcnN0Q3ljbGVCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGxldCBmaXJzdEN5Y2xlID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCB2ZXJ0ZXggPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSxcbiAgICAgICAgICBjeWNsaWNFZGdlcyA9IHRoaXMuY3ljbGljRWRnZXMuc2xpY2UoKSwgLy8vXG4gICAgICAgICAgcGFydGlhbEN5Y2xlcyA9IFtdLFxuICAgICAgICAgIGN5Y2xlcyA9IFtdO1xuXG4gICAgZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoKHZlcnRleCwgKHZpc2l0ZWRWZXJ0ZXgsIGdldFByZWRlY2Vzc29yVmVydGljZXMpID0+IHtcbiAgICAgIGNvbnN0IHZpc2l0ZWRWZXJ0ZXhOYW1lID0gdmlzaXRlZFZlcnRleC5nZXROYW1lKCksXG4gICAgICAgICAgICBzb3VyY2VWZXJ0ZXhOYW1lID0gdmlzaXRlZFZlcnRleE5hbWU7IC8vL1xuXG4gICAgICBmaWx0ZXIoY3ljbGljRWRnZXMsIChjeWNsaWNFZGdlKSA9PiB7XG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSBjeWNsaWNFZGdlLm1hdGNoU291cmNlVmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKTtcblxuICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgIGNvbnN0IHByZWRlY2Vzc29yVmVydGljZXMgPSBnZXRQcmVkZWNlc3NvclZlcnRpY2VzKCksXG4gICAgICAgICAgICAgICAgcGFydGlhbEN5Y2xlID0gIFBhcnRpYWxDeWNsZS5mcm9tQ3ljbGljRWRnZUFuZFByZWRlY2Vzc29yVmVydGljZXMoY3ljbGljRWRnZSwgcHJlZGVjZXNzb3JWZXJ0aWNlcyk7XG4gICAgICAgICAgXG4gICAgICAgICAgcGFydGlhbEN5Y2xlcy5wdXNoKHBhcnRpYWxDeWNsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBjeWNsaWNFZGdlc0xlbmd0aCA9IGN5Y2xpY0VkZ2VzLmxlbmd0aCxcbiAgICAgICAgICAgIHRlcm1pbmF0ZSA9IChjeWNsaWNFZGdlc0xlbmd0aCA9PT0gMCk7XG5cbiAgICAgIHJldHVybiB0ZXJtaW5hdGU7XG4gICAgfSk7XG5cbiAgICBwYXJ0aWFsQ3ljbGVzLnNvbWUoKHBhcnRpYWxDeWNsZSkgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0VmVydGV4TmFtZSA9IHBhcnRpYWxDeWNsZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXggPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldFZlcnRleEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoKHRhcmdldFZlcnRleCwgKHZpc2l0ZWRWZXJ0ZXgsIGdldFByZWRlY2Vzc29yVmVydGljZXMpID0+IHtcbiAgICAgICAgY29uc3QgdmlzaXRlZFZlcnRleE5hbWUgPSB2aXNpdGVkVmVydGV4LmdldE5hbWUoKTtcblxuICAgICAgICBpZiAodmlzaXRlZFZlcnRleE5hbWUgPT09IHZlcnRleE5hbWUpIHtcbiAgICAgICAgICBjb25zdCBwcmVkZWNlc3NvclZlcnRpY2VzID0gZ2V0UHJlZGVjZXNzb3JWZXJ0aWNlcygpLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3NvclZlcnRpY2VzID0gcHJlZGVjZXNzb3JWZXJ0aWNlcywgIC8vL1xuICAgICAgICAgICAgICAgIGN5Y2xlID0gQ3ljbGUuZnJvbVZlcnRleE5hbWVQYXJ0aWFsQ3ljbGVBbmRTdWNjZXNzb3JWZXJ0aWNlcyh2ZXJ0ZXhOYW1lLCBwYXJ0aWFsQ3ljbGUsIHN1Y2Nlc3NvclZlcnRpY2VzKTtcblxuICAgICAgICAgIGN5Y2xlcy5wdXNoKGN5Y2xlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGN5Y2xlc0xlbmd0aCA9IGN5Y2xlcy5sZW5ndGgsXG4gICAgICAgICAgICAgIHRlcm1pbmF0ZSA9IChjeWNsZXNMZW5ndGggPiAwKTtcblxuICAgICAgICByZXR1cm4gdGVybWluYXRlO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjeWNsZXNMZW5ndGggPSBjeWNsZXMubGVuZ3RoO1xuICAgIFxuICAgIGlmIChjeWNsZXNMZW5ndGggPiAwKSB7XG4gICAgICBmaXJzdEN5Y2xlID0gZmlyc3QoY3ljbGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmlyc3RDeWNsZTtcbiAgfVxuXG4gIGdldEZpcnN0Q3ljbGUoKSB7XG4gICAgY29uc3QgZmlyc3RDeWNsaWNFZGdlID0gZmlyc3QodGhpcy5jeWNsaWNFZGdlcyksXG4gICAgICAgICAgY3ljbGljRWRnZSA9IGZpcnN0Q3ljbGljRWRnZSwgLy8vXG4gICAgICAgICAgc291cmNlVmVydGV4TmFtZSA9IGN5Y2xpY0VkZ2UuZ2V0U291cmNlVmVydGV4TmFtZSgpLFxuICAgICAgICAgIHZlcnRleE5hbWUgPSBzb3VyY2VWZXJ0ZXhOYW1lLCAgLy8vXG4gICAgICAgICAgZmlyc3RDeWNsZSA9IHRoaXMuZ2V0Rmlyc3RDeWNsZUJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgIHJldHVybiBmaXJzdEN5Y2xlO1xuICB9XG5cbiAgZ2V0T3JkZXJlZFZlcnRleE5hbWVzKCkgeyByZXR1cm4gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRPcmRlcmVkVmVydGV4TmFtZXMoKTsgfVxuXG4gIGFyZUN5Y2xlc1ByZXNlbnQoKSB7XG4gICAgY29uc3QgY3ljbGljRWRnZXNMZW5ndGggPSB0aGlzLmN5Y2xpY0VkZ2VzLmxlbmd0aCxcbiAgICAgICAgICBjeWNsZXNQcmVzZW50ID0gKGN5Y2xpY0VkZ2VzTGVuZ3RoID4gMCk7XG5cbiAgICByZXR1cm4gY3ljbGVzUHJlc2VudDtcbiAgfVxuXG4gIGFkZFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguYWRkVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpOyB9XG5cbiAgYWRkVmVydGljZXNCeVZlcnRleE5hbWVzKHZlcnRleE5hbWVzKSB7XG4gICAgdmVydGV4TmFtZXMuZm9yRWFjaCgodmVydGV4TmFtZSkgPT4gdGhpcy5hZGRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSkpO1xuICB9XG5cbiAgcmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLnJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgIHRoaXMuZmlsdGVyQ3ljbGljRWRnZXMoKTtcbiAgfVxuXG4gIHJlbW92ZVZlcnRpY2VzQnlWZXJ0ZXhOYW1lcyh2ZXJ0ZXhOYW1lcykge1xuICAgIHZlcnRleE5hbWVzLmZvckVhY2goKHZlcnRleE5hbWUpID0+IHRoaXMucmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpKTtcbiAgfVxuXG4gIGFkZEVkZ2UoZWRnZSkge1xuICAgIGNvbnN0IHN1Y2Nlc3MgPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmFkZEVkZ2UoZWRnZSk7XG4gICAgXG4gICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICBjb25zdCBjeWNsaWNFZGdlc0luY2x1ZGVzRWRnZSA9IGNoZWNrRWRnZXNJbmNsdWRlc0VkZ2UoZWRnZSwgdGhpcy5jeWNsaWNFZGdlcyk7XG5cbiAgICAgIGlmICghY3ljbGljRWRnZXNJbmNsdWRlc0VkZ2UpIHtcbiAgICAgICAgY29uc3QgY3ljbGljRWRnZSA9IGVkZ2U7ICAvLy9cblxuICAgICAgICB0aGlzLmN5Y2xpY0VkZ2VzLnB1c2goY3ljbGljRWRnZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICBhZGRFZGdlcyhlZGdlcykge1xuICAgIGVkZ2VzLmZvckVhY2goKGVkZ2UpID0+IHRoaXMuYWRkRWRnZShlZGdlKSk7XG4gIH1cblxuICByZW1vdmVFZGdlKGVkZ2UsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMgPSBmYWxzZSkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VzSW5jbHVkZXNFZGdlID0gY2hlY2tFZGdlc0luY2x1ZGVzRWRnZShlZGdlLCB0aGlzLmN5Y2xpY0VkZ2VzKSxcbiAgICAgICAgICBlZGdlUHJlc2VudCA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguaXNFZGdlUHJlc2VudChlZGdlKSxcbiAgICAgICAgICBlZGdlQ3ljbGljID0gY3ljbGljRWRnZXNJbmNsdWRlc0VkZ2U7IC8vL1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKGVkZ2VDeWNsaWMpIHtcbiAgICAgIGNvbnN0IGN5Y2xpY0VkZ2UgPSBlZGdlOyAgLy8vXG5cbiAgICAgIHJlbW92ZUVkZ2VGcm9tRWRnZXMoY3ljbGljRWRnZSwgdGhpcy5jeWNsaWNFZGdlcyk7XG4gICAgfSBlbHNlIGlmIChlZGdlUHJlc2VudCkge1xuICAgICAgdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5yZW1vdmVFZGdlKGVkZ2UpO1xuXG4gICAgICBpZiAocmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcykge1xuICAgICAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gZWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICAgIHRhcmdldFZlcnRleE5hbWUgPSBlZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKSxcbiAgICAgICAgICAgICAgc291cmNlVmVydGV4ID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSksXG4gICAgICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpLFxuICAgICAgICAgICAgICBzb3VyY2VWZXJ0ZXhTdHJhbmRlZCA9IHNvdXJjZVZlcnRleC5pc1N0cmFuZGVkKCksXG4gICAgICAgICAgICAgIHRhcmdldFZlcnRleFN0cmFuZGVkID0gdGFyZ2V0VmVydGV4LmlzU3RyYW5kZWQoKTtcblxuICAgICAgICBpZiAoc291cmNlVmVydGV4U3RyYW5kZWQpIHtcbiAgICAgICAgICB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLnJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0YXJnZXRWZXJ0ZXhTdHJhbmRlZCkge1xuICAgICAgICAgIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGgucmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5maWx0ZXJDeWNsaWNFZGdlcygpO1xuICB9XG5cbiAgcmVtb3ZlRWRnZXMoZWRnZXMsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMgPSBmYWxzZSkge1xuICAgIGVkZ2VzLmZvckVhY2goKGVkZ2UpID0+IHRoaXMucmVtb3ZlRWRnZShlZGdlLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzKSk7XG4gIH1cblxuICBhZGRFZGdlQnlWZXJ0ZXhOYW1lcyhzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgZWRnZSA9IEVkZ2UuZnJvbVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgdGhpcy5hZGRFZGdlKGVkZ2UpO1xuICB9XG5cbiAgcmVtb3ZlRWRnZUJ5VmVydGV4TmFtZXMoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSwgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgZWRnZSA9IEVkZ2UuZnJvbVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgdGhpcy5yZW1vdmVFZGdlKGVkZ2UsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMpO1xuICB9XG5cbiAgcmVtb3ZlRWRnZXNCeVRhcmdldFZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSwgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgY3ljbGljRWRnZXMgPSBlZGdlc0J5VGFyZ2V0VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lLCB0aGlzLmN5Y2xpY0VkZ2VzKSxcbiAgICAgICAgICBlZGdlcyA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0RWRnZXNCeVRhcmdldFZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICB0aGlzLnJlbW92ZUVkZ2VzKGN5Y2xpY0VkZ2VzLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzKTtcblxuICAgIHRoaXMucmVtb3ZlRWRnZXMoZWRnZXMsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMpO1xuICB9XG5cbiAgcmVtb3ZlRWRnZXNCeVNvdXJjZVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgY3ljbGljRWRnZXMgPSBlZGdlc0J5U291cmNlVmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0aGlzLmN5Y2xpY0VkZ2VzKSxcbiAgICAgICAgICBlZGdlcyA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0RWRnZXNCeVNvdXJjZVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSk7XG5cbiAgICB0aGlzLnJlbW92ZUVkZ2VzKGN5Y2xpY0VkZ2VzLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzKTtcblxuICAgIHRoaXMucmVtb3ZlRWRnZXMoZWRnZXMsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMpO1xuICB9XG5cbiAgcmVtb3ZlQWxsRWRnZXNBbmRWZXJ0aWNlcygpIHtcbiAgICB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoID0gRGlyZWN0ZWRBY3ljbGljR3JhcGguZnJvbU5vdGhpbmcoKTtcblxuICAgIHRoaXMuY3ljbGljRWRnZXMgPSBbXTtcbiAgfVxuXG4gIGZpbHRlckN5Y2xpY0VkZ2VzKCkge1xuICAgIGZpbHRlcih0aGlzLmN5Y2xpY0VkZ2VzLCAoY3ljbGljRWRnZSkgPT4ge1xuICAgICAgY29uc3Qgc291cmNlVmVydGV4TmFtZSA9IGN5Y2xpY0VkZ2UuZ2V0U291cmNlVmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IGN5Y2xpY0VkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgc291cmNlVmVydGV4UHJlc2VudCA9IHRoaXMuaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4UHJlc2VudCA9IHRoaXMuaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgICBpZiAoc291cmNlVmVydGV4UHJlc2VudCAmJiB0YXJnZXRWZXJ0ZXhQcmVzZW50KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZmlsdGVyKHRoaXMuY3ljbGljRWRnZXMsIChjeWNsaWNFZGdlKSA9PiB7XG4gICAgICBjb25zdCBlZGdlID0gY3ljbGljRWRnZSwgIC8vL1xuICAgICAgICAgICAgc3VjY2VzcyA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguYWRkRWRnZShlZGdlKTtcblxuICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VzID0gW10sXG4gICAgICAgICAgZGlyZWN0ZWRBY3ljbGljR3JhcGggPSBEaXJlY3RlZEFjeWNsaWNHcmFwaC5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGRpcmVjdGVkR3JhcGggPSBuZXcgRGlyZWN0ZWRHcmFwaChjeWNsaWNFZGdlcywgZGlyZWN0ZWRBY3ljbGljR3JhcGgpO1xuICAgIFxuICAgIHJldHVybiBkaXJlY3RlZEdyYXBoOyAgICBcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmVydGV4TGl0ZXJhbHModmVydGV4TGl0ZXJhbHMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhOYW1lcyA9IHZlcnRleE5hbWVzRnJvbVZlcnRleExpdGVyYWxzKHZlcnRleExpdGVyYWxzKSxcbiAgICAgICAgICBlZGdlcyA9IGVkZ2VzRnJvbVZlcnRleExpdGVyYWxzKHZlcnRleExpdGVyYWxzKSxcbiAgICAgICAgICBkaXJlY3RlZEdyYXBoID0gRGlyZWN0ZWRHcmFwaC5mcm9tVmVydGV4TmFtZXNBbmRFZGdlcyh2ZXJ0ZXhOYW1lcywgZWRnZXMpO1xuXG4gICAgcmV0dXJuIGRpcmVjdGVkR3JhcGg7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZlcnRleE5hbWVzQW5kRWRnZXModmVydGV4TmFtZXMsIGVkZ2VzKSB7XG4gICAgbGV0IGRpcmVjdGVkR3JhcGg7XG5cbiAgICBjb25zdCBncmFwaCA9IEdyYXBoLmZyb21WZXJ0ZXhOYW1lc0FuZEVkZ2VzKHZlcnRleE5hbWVzLCBlZGdlcyksXG4gICAgICAgICAgY3ljbGVzUHJlc2VudCA9IGdyYXBoLmFyZUN5Y2xlc1ByZXNlbnQoKTtcblxuICAgIGlmIChjeWNsZXNQcmVzZW50KSB7XG4gICAgICBjb25zdCBjeWNsaWNFZGdlcyA9IFtdLFxuICAgICAgICAgICAgZGlyZWN0ZWRBY3ljbGljR3JhcGggPSBEaXJlY3RlZEFjeWNsaWNHcmFwaC5mcm9tVmVydGV4TmFtZXModmVydGV4TmFtZXMpO1xuXG4gICAgICBkaXJlY3RlZEdyYXBoID0gbmV3IERpcmVjdGVkR3JhcGgoY3ljbGljRWRnZXMsIGRpcmVjdGVkQWN5Y2xpY0dyYXBoKTtcblxuICAgICAgZWRnZXMuZm9yRWFjaCgoZWRnZSkgPT4gZGlyZWN0ZWRHcmFwaC5hZGRFZGdlKGVkZ2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgb3JkZXJlZFZlcnRpY2VzID0gZ3JhcGguZ2V0T3JkZXJlZFZlcnRpY2VzKCksXG4gICAgICAgICAgICBjeWNsaWNFZGdlcyA9IFtdLFxuICAgICAgICAgICAgZGlyZWN0ZWRBY3ljbGljR3JhcGggPSBEaXJlY3RlZEFjeWNsaWNHcmFwaC5mcm9tT3JkZXJlZFZlcnRpY2VzKG9yZGVyZWRWZXJ0aWNlcyk7XG5cbiAgICAgIGRpcmVjdGVkR3JhcGggPSBuZXcgRGlyZWN0ZWRHcmFwaChjeWNsaWNFZGdlcywgZGlyZWN0ZWRBY3ljbGljR3JhcGgpO1xuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3RlZEdyYXBoO1xuICB9XG59XG4iXSwibmFtZXMiOlsiZmlyc3QiLCJmaWx0ZXIiLCJEaXJlY3RlZEdyYXBoIiwiY3ljbGljRWRnZXMiLCJkaXJlY3RlZEFjeWNsaWNHcmFwaCIsImdldEN5Y2xpY0VkZ2VzIiwiZ2V0RGlyZWN0ZWRBY3ljbGljR3JhcGgiLCJnZXRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lIiwidmVydGV4TmFtZSIsImluY2x1ZGVDeWNsaWNFZGdlcyIsImltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMiLCJmb3JFYWNoIiwiY3ljbGljRWRnZSIsImN5Y2xpY0VkZ2VUYXJnZXRWZXJ0ZXhOYW1lIiwiZ2V0VGFyZ2V0VmVydGV4TmFtZSIsImN5Y2xpY0VkZ2VTb3VyY2VWZXJ0ZXhOYW1lIiwiZ2V0U291cmNlVmVydGV4TmFtZSIsImltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZSIsInB1c2giLCJnZXRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSIsImltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzIiwiaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZSIsImdldFByZWRlY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUiLCJnZXRTdWNjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSIsImFyZUN5Y2xlc1ByZXNlbnRCeVZlcnRleE5hbWUiLCJjeWNsZXNQcmVzZW50IiwidmVydGV4UHJlc2VudCIsImlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZSIsImZpcnN0Q3ljbGUiLCJnZXRGaXJzdEN5Y2xlQnlWZXJ0ZXhOYW1lIiwidmVydGV4IiwiZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lIiwic2xpY2UiLCJwYXJ0aWFsQ3ljbGVzIiwiY3ljbGVzIiwidmlzaXRlZFZlcnRleCIsImdldFByZWRlY2Vzc29yVmVydGljZXMiLCJ2aXNpdGVkVmVydGV4TmFtZSIsImdldE5hbWUiLCJzb3VyY2VWZXJ0ZXhOYW1lIiwibWF0Y2hlcyIsIm1hdGNoU291cmNlVmVydGV4TmFtZSIsInByZWRlY2Vzc29yVmVydGljZXMiLCJwYXJ0aWFsQ3ljbGUiLCJmcm9tQ3ljbGljRWRnZUFuZFByZWRlY2Vzc29yVmVydGljZXMiLCJjeWNsaWNFZGdlc0xlbmd0aCIsImxlbmd0aCIsInRlcm1pbmF0ZSIsInNvbWUiLCJ0YXJnZXRWZXJ0ZXhOYW1lIiwidGFyZ2V0VmVydGV4Iiwic3VjY2Vzc29yVmVydGljZXMiLCJjeWNsZSIsImZyb21WZXJ0ZXhOYW1lUGFydGlhbEN5Y2xlQW5kU3VjY2Vzc29yVmVydGljZXMiLCJjeWNsZXNMZW5ndGgiLCJnZXRGaXJzdEN5Y2xlIiwiZmlyc3RDeWNsaWNFZGdlIiwiZ2V0T3JkZXJlZFZlcnRleE5hbWVzIiwiYXJlQ3ljbGVzUHJlc2VudCIsImFkZFZlcnRleEJ5VmVydGV4TmFtZSIsImFkZFZlcnRpY2VzQnlWZXJ0ZXhOYW1lcyIsInZlcnRleE5hbWVzIiwicmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lIiwiZmlsdGVyQ3ljbGljRWRnZXMiLCJyZW1vdmVWZXJ0aWNlc0J5VmVydGV4TmFtZXMiLCJhZGRFZGdlIiwiZWRnZSIsInN1Y2Nlc3MiLCJjeWNsaWNFZGdlc0luY2x1ZGVzRWRnZSIsImFkZEVkZ2VzIiwiZWRnZXMiLCJyZW1vdmVFZGdlIiwicmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyIsImVkZ2VQcmVzZW50IiwiaXNFZGdlUHJlc2VudCIsImVkZ2VDeWNsaWMiLCJzb3VyY2VWZXJ0ZXgiLCJzb3VyY2VWZXJ0ZXhTdHJhbmRlZCIsImlzU3RyYW5kZWQiLCJ0YXJnZXRWZXJ0ZXhTdHJhbmRlZCIsInJlbW92ZUVkZ2VzIiwiYWRkRWRnZUJ5VmVydGV4TmFtZXMiLCJmcm9tU291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUiLCJyZW1vdmVFZGdlQnlWZXJ0ZXhOYW1lcyIsInJlbW92ZUVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lIiwiZ2V0RWRnZXNCeVRhcmdldFZlcnRleE5hbWUiLCJyZW1vdmVFZGdlc0J5U291cmNlVmVydGV4TmFtZSIsImdldEVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lIiwicmVtb3ZlQWxsRWRnZXNBbmRWZXJ0aWNlcyIsImZyb21Ob3RoaW5nIiwic291cmNlVmVydGV4UHJlc2VudCIsInRhcmdldFZlcnRleFByZXNlbnQiLCJkaXJlY3RlZEdyYXBoIiwiZnJvbVZlcnRleExpdGVyYWxzIiwidmVydGV4TGl0ZXJhbHMiLCJmcm9tVmVydGV4TmFtZXNBbmRFZGdlcyIsImdyYXBoIiwiZnJvbVZlcnRleE5hbWVzIiwib3JkZXJlZFZlcnRpY2VzIiwiZ2V0T3JkZXJlZFZlcnRpY2VzIiwiZnJvbU9yZGVyZWRWZXJ0aWNlcyJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFVSxHQUFZLENBQVosVUFBWTtBQUNILEdBQVcsQ0FBWCxVQUFXO0FBQ0wsR0FBb0IsQ0FBcEIsaUJBQW9CO0FBRXhDLEdBQVEsQ0FBUixLQUFRO0FBQ1AsR0FBUyxDQUFULE1BQVM7QUFDRixHQUFnQixDQUFoQixhQUFnQjtBQUUrQixHQUFvQixDQUFwQixPQUFvQjtBQUMyQyxHQUFrQixDQUFsQixNQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6SixHQUFLLENBQUdBLEtBQUssR0FWa0IsVUFBVyxnQkFVbENBLEtBQUssRUFBRUMsTUFBTSxHQVZVLFVBQVcsZ0JBVTNCQSxNQUFNO0lBRUFDLGFBQWEsaUJBQW5CLFFBQVE7YUFBRkEsYUFBYSxDQUNwQkMsV0FBVyxFQUFFQyxvQkFBb0I7OEJBRDFCRixhQUFhO1FBRTlCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQSxXQUFXO1FBRTlCLElBQUksQ0FBQ0Msb0JBQW9CLEdBQUdBLG9CQUFvQjs7aUJBSi9CRixhQUFhOztZQU9oQ0csR0FBYyxFQUFkQSxDQUFjO21CQUFkQSxRQUFRLENBQVJBLGNBQWMsR0FBRyxDQUFDO2dCQUNoQixNQUFNLENBQUMs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