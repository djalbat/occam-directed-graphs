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
var DirectedGraph = function() {
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
                var firstCycle = null;
                var vertex = this.directedAcyclicGraph.getVertexByVertexName(vertexName), cyclicEdges = this.cyclicEdges.slice(), partialCycles = [], cycles = [];
                _vertex.forwardsDepthFirstSearch(vertex, function(visitedVertex, getPredecessorVertices) {
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
                partialCycles.some((function(partialCycle) {
                    var targetVertexName = partialCycle.getTargetVertexName(), targetVertex = this.directedAcyclicGraph.getVertexByVertexName(targetVertexName);
                    _vertex.forwardsDepthFirstSearch(targetVertex, function(visitedVertex, getPredecessorVertices) {
                        var visitedVertexName = visitedVertex.getName();
                        if (visitedVertexName === vertexName) {
                            var predecessorVertices = getPredecessorVertices(), successorVertices = predecessorVertices, cycle = _cycle.default.fromVertexNamePartialCycleAndSuccessorVertices(vertexName, partialCycle, successorVertices);
                            cycles.push(cycle);
                        }
                        var cyclesLength = cycles.length, terminate = cyclesLength > 0;
                        return terminate;
                    });
                }).bind(this));
                var cyclesLength = cycles.length;
                if (cyclesLength > 0) {
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
                vertexNames.forEach((function(vertexName) {
                    return this.addVertexByVertexName(vertexName);
                }).bind(this));
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
                vertexNames.forEach((function(vertexName) {
                    return this.removeVertexByVertexName(vertexName);
                }).bind(this));
            }
        },
        {
            key: "addEdge",
            value: function addEdge(edge) {
                var success = this.directedAcyclicGraph.addEdge(edge);
                if (!success) {
                    var cyclicEdgesIncludesEdge = _edge1.checkEdgesIncludesEdge(edge, this.cyclicEdges);
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
                edges.forEach((function(edge) {
                    return this.addEdge(edge);
                }).bind(this));
            }
        },
        {
            key: "removeEdge",
            value: function removeEdge(edge, param) {
                var removeStrandedVertices = param === void 0 ? false : param;
                var cyclicEdgesIncludesEdge = _edge1.checkEdgesIncludesEdge(edge, this.cyclicEdges), edgePresent = this.directedAcyclicGraph.isEdgePresent(edge), edgeCyclic = cyclicEdgesIncludesEdge; ///
                if (false) {
                } else if (edgeCyclic) {
                    var cyclicEdge = edge; ///
                    _edge1.removeEdgeFromEdges(cyclicEdge, this.cyclicEdges);
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
                edges.forEach((function(edge) {
                    return this.removeEdge(edge, removeStrandedVertices);
                }).bind(this));
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
                var cyclicEdges = _edge1.edgesByTargetVertexName(targetVertexName, this.cyclicEdges), edges = this.directedAcyclicGraph.getEdgesByTargetVertexName(targetVertexName);
                this.removeEdges(cyclicEdges, removeStrandedVertices);
                this.removeEdges(edges, removeStrandedVertices);
            }
        },
        {
            key: "removeEdgesBySourceVertexName",
            value: function removeEdgesBySourceVertexName(sourceVertexName, param) {
                var removeStrandedVertices = param === void 0 ? false : param;
                var cyclicEdges = _edge1.edgesBySourceVertexName(sourceVertexName, this.cyclicEdges), edges = this.directedAcyclicGraph.getEdgesBySourceVertexName(sourceVertexName);
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
                filter(this.cyclicEdges, (function(cyclicEdge) {
                    var sourceVertexName = cyclicEdge.getSourceVertexName(), targetVertexName = cyclicEdge.getTargetVertexName(), sourceVertexPresent = this.isVertexPresentByVertexName(sourceVertexName), targetVertexPresent = this.isVertexPresentByVertexName(targetVertexName);
                    if (sourceVertexPresent && targetVertexPresent) {
                        return true;
                    }
                }).bind(this));
                filter(this.cyclicEdges, (function(cyclicEdge) {
                    var edge = cyclicEdge, success = this.directedAcyclicGraph.addEdge(edge);
                    if (!success) {
                        return true;
                    }
                }).bind(this));
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
                var vertexNames = _vertex.vertexNamesFromVertexLiterals(vertexLiterals), edges = _edge1.edgesFromVertexLiterals(vertexLiterals), directedGraph = DirectedGraph.fromVertexNamesAndEdges(vertexNames, edges);
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
                    var orderedVertices = graph.getOrderedVertices(), cyclicEdges = [], directedAcyclicGraph = _occamPearceKelly.DirectedAcyclicGraph.fromOrderedVertices(orderedVertices);
                    directedGraph = new DirectedGraph(cyclicEdges, directedAcyclicGraph);
                }
                return directedGraph;
            }
        }
    ]);
    return DirectedGraph;
}();
exports.default = DirectedGraph;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kaXJlY3RlZEdyYXBoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBHcmFwaCB9IGZyb20gXCJvY2NhbS1rYWhuXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IERpcmVjdGVkQWN5Y2xpY0dyYXBoIH0gZnJvbSBcIm9jY2FtLXBlYXJjZS1rZWxseVwiO1xuXG5pbXBvcnQgRWRnZSBmcm9tIFwiLi9lZGdlXCI7XG5pbXBvcnQgQ3ljbGUgZnJvbSBcIi4vY3ljbGVcIjtcbmltcG9ydCBQYXJ0aWFsQ3ljbGUgZnJvbSBcIi4vcGFydGlhbEN5Y2xlXCI7XG5cbmltcG9ydCB7IHZlcnRleE5hbWVzRnJvbVZlcnRleExpdGVyYWxzLCBmb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2ggfSBmcm9tIFwiLi91dGlsaXRpZXMvdmVydGV4XCI7XG5pbXBvcnQgeyBlZGdlc0Zyb21WZXJ0ZXhMaXRlcmFscywgY2hlY2tFZGdlc0luY2x1ZGVzRWRnZSwgcmVtb3ZlRWRnZUZyb21FZGdlcywgZWRnZXNCeVNvdXJjZVZlcnRleE5hbWUsIGVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2VkZ2VcIjtcblxuY29uc3QgeyBmaXJzdCwgZmlsdGVyIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0ZWRHcmFwaCB7XG4gIGNvbnN0cnVjdG9yKGN5Y2xpY0VkZ2VzLCBkaXJlY3RlZEFjeWNsaWNHcmFwaCkge1xuICAgIHRoaXMuY3ljbGljRWRnZXMgPSBjeWNsaWNFZGdlcztcblxuICAgIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGggPSBkaXJlY3RlZEFjeWNsaWNHcmFwaDtcbiAgfVxuXG4gIGdldEN5Y2xpY0VkZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLmN5Y2xpY0VkZ2VzO1xuICB9XG5cbiAgZ2V0RGlyZWN0ZWRBY3ljbGljR3JhcGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGg7XG4gIH1cblxuICBnZXRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUsIGluY2x1ZGVDeWNsaWNFZGdlcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcyA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgIGlmIChpbmNsdWRlQ3ljbGljRWRnZXMpIHtcbiAgICAgIHRoaXMuY3ljbGljRWRnZXMuZm9yRWFjaCgoY3ljbGljRWRnZSkgPT4ge1xuICAgICAgICBjb25zdCBjeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZSA9IGN5Y2xpY0VkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpO1xuXG4gICAgICAgIGlmIChjeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZSA9PT0gdmVydGV4TmFtZSkge1xuICAgICAgICAgIGNvbnN0IGN5Y2xpY0VkZ2VTb3VyY2VWZXJ0ZXhOYW1lID0gY3ljbGljRWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICAgICAgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lID0gY3ljbGljRWRnZVNvdXJjZVZlcnRleE5hbWU7ICAvLy9cblxuICAgICAgICAgIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMucHVzaChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGdldEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUsIGluY2x1ZGVDeWNsaWNFZGdlcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXMgPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgaWYgKGluY2x1ZGVDeWNsaWNFZGdlcykge1xuICAgICAgdGhpcy5jeWNsaWNFZGdlcy5mb3JFYWNoKChjeWNsaWNFZGdlKSA9PiB7XG4gICAgICAgIGNvbnN0IGN5Y2xpY0VkZ2VTb3VyY2VWZXJ0ZXhOYW1lID0gY3ljbGljRWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCk7XG5cbiAgICAgICAgaWYgKGN5Y2xpY0VkZ2VTb3VyY2VWZXJ0ZXhOYW1lID09PSB2ZXJ0ZXhOYW1lKSB7XG4gICAgICAgICAgY29uc3QgY3ljbGljRWRnZVRhcmdldFZlcnRleE5hbWUgPSBjeWNsaWNFZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKSxcbiAgICAgICAgICAgICAgICBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lID0gY3ljbGljRWRnZVRhcmdldFZlcnRleE5hbWU7ICAvLy9cblxuICAgICAgICAgIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzLnB1c2goaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGdldFByZWRlY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUodmVydGV4TmFtZSkgeyByZXR1cm4gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRQcmVkZWNlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpOyB9XG5cbiAgZ2V0U3VjY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUodmVydGV4TmFtZSkgeyByZXR1cm4gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRTdWNjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTsgfVxuXG4gIGFyZUN5Y2xlc1ByZXNlbnRCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGxldCBjeWNsZXNQcmVzZW50ID0gZmFsc2U7XG5cbiAgICBjb25zdCB2ZXJ0ZXhQcmVzZW50ID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5pc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICBpZiAodmVydGV4UHJlc2VudCkge1xuICAgICAgY29uc3QgZmlyc3RDeWNsZSA9IHRoaXMuZ2V0Rmlyc3RDeWNsZUJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgICAgY3ljbGVzUHJlc2VudCA9IChmaXJzdEN5Y2xlICE9PSBudWxsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3ljbGVzUHJlc2VudDtcbiAgfVxuXG4gIGlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7IHJldHVybiB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTsgfVxuXG4gIGdldEZpcnN0Q3ljbGVCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGxldCBmaXJzdEN5Y2xlID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCB2ZXJ0ZXggPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSxcbiAgICAgICAgICBjeWNsaWNFZGdlcyA9IHRoaXMuY3ljbGljRWRnZXMuc2xpY2UoKSwgLy8vXG4gICAgICAgICAgcGFydGlhbEN5Y2xlcyA9IFtdLFxuICAgICAgICAgIGN5Y2xlcyA9IFtdO1xuXG4gICAgZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoKHZlcnRleCwgKHZpc2l0ZWRWZXJ0ZXgsIGdldFByZWRlY2Vzc29yVmVydGljZXMpID0+IHtcbiAgICAgIGNvbnN0IHZpc2l0ZWRWZXJ0ZXhOYW1lID0gdmlzaXRlZFZlcnRleC5nZXROYW1lKCksXG4gICAgICAgICAgICBzb3VyY2VWZXJ0ZXhOYW1lID0gdmlzaXRlZFZlcnRleE5hbWU7IC8vL1xuXG4gICAgICBmaWx0ZXIoY3ljbGljRWRnZXMsIChjeWNsaWNFZGdlKSA9PiB7XG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSBjeWNsaWNFZGdlLm1hdGNoU291cmNlVmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKTtcblxuICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgIGNvbnN0IHByZWRlY2Vzc29yVmVydGljZXMgPSBnZXRQcmVkZWNlc3NvclZlcnRpY2VzKCksXG4gICAgICAgICAgICAgICAgcGFydGlhbEN5Y2xlID0gIFBhcnRpYWxDeWNsZS5mcm9tQ3ljbGljRWRnZUFuZFByZWRlY2Vzc29yVmVydGljZXMoY3ljbGljRWRnZSwgcHJlZGVjZXNzb3JWZXJ0aWNlcyk7XG4gICAgICAgICAgXG4gICAgICAgICAgcGFydGlhbEN5Y2xlcy5wdXNoKHBhcnRpYWxDeWNsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBjeWNsaWNFZGdlc0xlbmd0aCA9IGN5Y2xpY0VkZ2VzLmxlbmd0aCxcbiAgICAgICAgICAgIHRlcm1pbmF0ZSA9IChjeWNsaWNFZGdlc0xlbmd0aCA9PT0gMCk7XG5cbiAgICAgIHJldHVybiB0ZXJtaW5hdGU7XG4gICAgfSk7XG5cbiAgICBwYXJ0aWFsQ3ljbGVzLnNvbWUoKHBhcnRpYWxDeWNsZSkgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0VmVydGV4TmFtZSA9IHBhcnRpYWxDeWNsZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXggPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldFZlcnRleEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoKHRhcmdldFZlcnRleCwgKHZpc2l0ZWRWZXJ0ZXgsIGdldFByZWRlY2Vzc29yVmVydGljZXMpID0+IHtcbiAgICAgICAgY29uc3QgdmlzaXRlZFZlcnRleE5hbWUgPSB2aXNpdGVkVmVydGV4LmdldE5hbWUoKTtcblxuICAgICAgICBpZiAodmlzaXRlZFZlcnRleE5hbWUgPT09IHZlcnRleE5hbWUpIHtcbiAgICAgICAgICBjb25zdCBwcmVkZWNlc3NvclZlcnRpY2VzID0gZ2V0UHJlZGVjZXNzb3JWZXJ0aWNlcygpLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3NvclZlcnRpY2VzID0gcHJlZGVjZXNzb3JWZXJ0aWNlcywgIC8vL1xuICAgICAgICAgICAgICAgIGN5Y2xlID0gQ3ljbGUuZnJvbVZlcnRleE5hbWVQYXJ0aWFsQ3ljbGVBbmRTdWNjZXNzb3JWZXJ0aWNlcyh2ZXJ0ZXhOYW1lLCBwYXJ0aWFsQ3ljbGUsIHN1Y2Nlc3NvclZlcnRpY2VzKTtcblxuICAgICAgICAgIGN5Y2xlcy5wdXNoKGN5Y2xlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGN5Y2xlc0xlbmd0aCA9IGN5Y2xlcy5sZW5ndGgsXG4gICAgICAgICAgICAgIHRlcm1pbmF0ZSA9IChjeWNsZXNMZW5ndGggPiAwKTtcblxuICAgICAgICByZXR1cm4gdGVybWluYXRlO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjeWNsZXNMZW5ndGggPSBjeWNsZXMubGVuZ3RoO1xuICAgIFxuICAgIGlmIChjeWNsZXNMZW5ndGggPiAwKSB7XG4gICAgICBmaXJzdEN5Y2xlID0gZmlyc3QoY3ljbGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmlyc3RDeWNsZTtcbiAgfVxuXG4gIGdldEZpcnN0Q3ljbGUoKSB7XG4gICAgY29uc3QgZmlyc3RDeWNsaWNFZGdlID0gZmlyc3QodGhpcy5jeWNsaWNFZGdlcyksXG4gICAgICAgICAgY3ljbGljRWRnZSA9IGZpcnN0Q3ljbGljRWRnZSwgLy8vXG4gICAgICAgICAgc291cmNlVmVydGV4TmFtZSA9IGN5Y2xpY0VkZ2UuZ2V0U291cmNlVmVydGV4TmFtZSgpLFxuICAgICAgICAgIHZlcnRleE5hbWUgPSBzb3VyY2VWZXJ0ZXhOYW1lLCAgLy8vXG4gICAgICAgICAgZmlyc3RDeWNsZSA9IHRoaXMuZ2V0Rmlyc3RDeWNsZUJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgIHJldHVybiBmaXJzdEN5Y2xlO1xuICB9XG5cbiAgZ2V0T3JkZXJlZFZlcnRleE5hbWVzKCkgeyByZXR1cm4gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRPcmRlcmVkVmVydGV4TmFtZXMoKTsgfVxuXG4gIGFyZUN5Y2xlc1ByZXNlbnQoKSB7XG4gICAgY29uc3QgY3ljbGljRWRnZXNMZW5ndGggPSB0aGlzLmN5Y2xpY0VkZ2VzLmxlbmd0aCxcbiAgICAgICAgICBjeWNsZXNQcmVzZW50ID0gKGN5Y2xpY0VkZ2VzTGVuZ3RoID4gMCk7XG5cbiAgICByZXR1cm4gY3ljbGVzUHJlc2VudDtcbiAgfVxuXG4gIGFkZFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguYWRkVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpOyB9XG5cbiAgYWRkVmVydGljZXNCeVZlcnRleE5hbWVzKHZlcnRleE5hbWVzKSB7XG4gICAgdmVydGV4TmFtZXMuZm9yRWFjaCgodmVydGV4TmFtZSkgPT4gdGhpcy5hZGRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSkpO1xuICB9XG5cbiAgcmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLnJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgIHRoaXMuZmlsdGVyQ3ljbGljRWRnZXMoKTtcbiAgfVxuXG4gIHJlbW92ZVZlcnRpY2VzQnlWZXJ0ZXhOYW1lcyh2ZXJ0ZXhOYW1lcykge1xuICAgIHZlcnRleE5hbWVzLmZvckVhY2goKHZlcnRleE5hbWUpID0+IHRoaXMucmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpKTtcbiAgfVxuXG4gIGFkZEVkZ2UoZWRnZSkge1xuICAgIGNvbnN0IHN1Y2Nlc3MgPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmFkZEVkZ2UoZWRnZSk7XG4gICAgXG4gICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICBjb25zdCBjeWNsaWNFZGdlc0luY2x1ZGVzRWRnZSA9IGNoZWNrRWRnZXNJbmNsdWRlc0VkZ2UoZWRnZSwgdGhpcy5jeWNsaWNFZGdlcyk7XG5cbiAgICAgIGlmICghY3ljbGljRWRnZXNJbmNsdWRlc0VkZ2UpIHtcbiAgICAgICAgY29uc3QgY3ljbGljRWRnZSA9IGVkZ2U7ICAvLy9cblxuICAgICAgICB0aGlzLmN5Y2xpY0VkZ2VzLnB1c2goY3ljbGljRWRnZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICBhZGRFZGdlcyhlZGdlcykge1xuICAgIGVkZ2VzLmZvckVhY2goKGVkZ2UpID0+IHRoaXMuYWRkRWRnZShlZGdlKSk7XG4gIH1cblxuICByZW1vdmVFZGdlKGVkZ2UsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMgPSBmYWxzZSkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VzSW5jbHVkZXNFZGdlID0gY2hlY2tFZGdlc0luY2x1ZGVzRWRnZShlZGdlLCB0aGlzLmN5Y2xpY0VkZ2VzKSxcbiAgICAgICAgICBlZGdlUHJlc2VudCA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguaXNFZGdlUHJlc2VudChlZGdlKSxcbiAgICAgICAgICBlZGdlQ3ljbGljID0gY3ljbGljRWRnZXNJbmNsdWRlc0VkZ2U7IC8vL1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKGVkZ2VDeWNsaWMpIHtcbiAgICAgIGNvbnN0IGN5Y2xpY0VkZ2UgPSBlZGdlOyAgLy8vXG5cbiAgICAgIHJlbW92ZUVkZ2VGcm9tRWRnZXMoY3ljbGljRWRnZSwgdGhpcy5jeWNsaWNFZGdlcyk7XG4gICAgfSBlbHNlIGlmIChlZGdlUHJlc2VudCkge1xuICAgICAgdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5yZW1vdmVFZGdlKGVkZ2UpO1xuXG4gICAgICBpZiAocmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcykge1xuICAgICAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gZWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICAgIHRhcmdldFZlcnRleE5hbWUgPSBlZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKSxcbiAgICAgICAgICAgICAgc291cmNlVmVydGV4ID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSksXG4gICAgICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpLFxuICAgICAgICAgICAgICBzb3VyY2VWZXJ0ZXhTdHJhbmRlZCA9IHNvdXJjZVZlcnRleC5pc1N0cmFuZGVkKCksXG4gICAgICAgICAgICAgIHRhcmdldFZlcnRleFN0cmFuZGVkID0gdGFyZ2V0VmVydGV4LmlzU3RyYW5kZWQoKTtcblxuICAgICAgICBpZiAoc291cmNlVmVydGV4U3RyYW5kZWQpIHtcbiAgICAgICAgICB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLnJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0YXJnZXRWZXJ0ZXhTdHJhbmRlZCkge1xuICAgICAgICAgIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGgucmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5maWx0ZXJDeWNsaWNFZGdlcygpO1xuICB9XG5cbiAgcmVtb3ZlRWRnZXMoZWRnZXMsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMgPSBmYWxzZSkge1xuICAgIGVkZ2VzLmZvckVhY2goKGVkZ2UpID0+IHRoaXMucmVtb3ZlRWRnZShlZGdlLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzKSk7XG4gIH1cblxuICBhZGRFZGdlQnlWZXJ0ZXhOYW1lcyhzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgZWRnZSA9IEVkZ2UuZnJvbVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgdGhpcy5hZGRFZGdlKGVkZ2UpO1xuICB9XG5cbiAgcmVtb3ZlRWRnZUJ5VmVydGV4TmFtZXMoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSwgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgZWRnZSA9IEVkZ2UuZnJvbVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgdGhpcy5yZW1vdmVFZGdlKGVkZ2UsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMpO1xuICB9XG5cbiAgcmVtb3ZlRWRnZXNCeVRhcmdldFZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSwgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgY3ljbGljRWRnZXMgPSBlZGdlc0J5VGFyZ2V0VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lLCB0aGlzLmN5Y2xpY0VkZ2VzKSxcbiAgICAgICAgICBlZGdlcyA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0RWRnZXNCeVRhcmdldFZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICB0aGlzLnJlbW92ZUVkZ2VzKGN5Y2xpY0VkZ2VzLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzKTtcblxuICAgIHRoaXMucmVtb3ZlRWRnZXMoZWRnZXMsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMpO1xuICB9XG5cbiAgcmVtb3ZlRWRnZXNCeVNvdXJjZVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgY3ljbGljRWRnZXMgPSBlZGdlc0J5U291cmNlVmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0aGlzLmN5Y2xpY0VkZ2VzKSxcbiAgICAgICAgICBlZGdlcyA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0RWRnZXNCeVNvdXJjZVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSk7XG5cbiAgICB0aGlzLnJlbW92ZUVkZ2VzKGN5Y2xpY0VkZ2VzLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzKTtcblxuICAgIHRoaXMucmVtb3ZlRWRnZXMoZWRnZXMsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMpO1xuICB9XG5cbiAgcmVtb3ZlQWxsRWRnZXNBbmRWZXJ0aWNlcygpIHtcbiAgICB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoID0gRGlyZWN0ZWRBY3ljbGljR3JhcGguZnJvbU5vdGhpbmcoKTtcblxuICAgIHRoaXMuY3ljbGljRWRnZXMgPSBbXTtcbiAgfVxuXG4gIGZpbHRlckN5Y2xpY0VkZ2VzKCkge1xuICAgIGZpbHRlcih0aGlzLmN5Y2xpY0VkZ2VzLCAoY3ljbGljRWRnZSkgPT4ge1xuICAgICAgY29uc3Qgc291cmNlVmVydGV4TmFtZSA9IGN5Y2xpY0VkZ2UuZ2V0U291cmNlVmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IGN5Y2xpY0VkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgc291cmNlVmVydGV4UHJlc2VudCA9IHRoaXMuaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4UHJlc2VudCA9IHRoaXMuaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgICBpZiAoc291cmNlVmVydGV4UHJlc2VudCAmJiB0YXJnZXRWZXJ0ZXhQcmVzZW50KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZmlsdGVyKHRoaXMuY3ljbGljRWRnZXMsIChjeWNsaWNFZGdlKSA9PiB7XG4gICAgICBjb25zdCBlZGdlID0gY3ljbGljRWRnZSwgIC8vL1xuICAgICAgICAgICAgc3VjY2VzcyA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguYWRkRWRnZShlZGdlKTtcblxuICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VzID0gW10sXG4gICAgICAgICAgZGlyZWN0ZWRBY3ljbGljR3JhcGggPSBEaXJlY3RlZEFjeWNsaWNHcmFwaC5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGRpcmVjdGVkR3JhcGggPSBuZXcgRGlyZWN0ZWRHcmFwaChjeWNsaWNFZGdlcywgZGlyZWN0ZWRBY3ljbGljR3JhcGgpO1xuICAgIFxuICAgIHJldHVybiBkaXJlY3RlZEdyYXBoOyAgICBcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmVydGV4TGl0ZXJhbHModmVydGV4TGl0ZXJhbHMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhOYW1lcyA9IHZlcnRleE5hbWVzRnJvbVZlcnRleExpdGVyYWxzKHZlcnRleExpdGVyYWxzKSxcbiAgICAgICAgICBlZGdlcyA9IGVkZ2VzRnJvbVZlcnRleExpdGVyYWxzKHZlcnRleExpdGVyYWxzKSxcbiAgICAgICAgICBkaXJlY3RlZEdyYXBoID0gRGlyZWN0ZWRHcmFwaC5mcm9tVmVydGV4TmFtZXNBbmRFZGdlcyh2ZXJ0ZXhOYW1lcywgZWRnZXMpO1xuXG4gICAgcmV0dXJuIGRpcmVjdGVkR3JhcGg7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZlcnRleE5hbWVzQW5kRWRnZXModmVydGV4TmFtZXMsIGVkZ2VzKSB7XG4gICAgbGV0IGRpcmVjdGVkR3JhcGg7XG5cbiAgICBjb25zdCBncmFwaCA9IEdyYXBoLmZyb21WZXJ0ZXhOYW1lc0FuZEVkZ2VzKHZlcnRleE5hbWVzLCBlZGdlcyksXG4gICAgICAgICAgY3ljbGVzUHJlc2VudCA9IGdyYXBoLmFyZUN5Y2xlc1ByZXNlbnQoKTtcblxuICAgIGlmIChjeWNsZXNQcmVzZW50KSB7XG4gICAgICBjb25zdCBjeWNsaWNFZGdlcyA9IFtdLFxuICAgICAgICAgICAgZGlyZWN0ZWRBY3ljbGljR3JhcGggPSBEaXJlY3RlZEFjeWNsaWNHcmFwaC5mcm9tVmVydGV4TmFtZXModmVydGV4TmFtZXMpO1xuXG4gICAgICBkaXJlY3RlZEdyYXBoID0gbmV3IERpcmVjdGVkR3JhcGgoY3ljbGljRWRnZXMsIGRpcmVjdGVkQWN5Y2xpY0dyYXBoKTtcblxuICAgICAgZWRnZXMuZm9yRWFjaCgoZWRnZSkgPT4gZGlyZWN0ZWRHcmFwaC5hZGRFZGdlKGVkZ2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgb3JkZXJlZFZlcnRpY2VzID0gZ3JhcGguZ2V0T3JkZXJlZFZlcnRpY2VzKCksXG4gICAgICAgICAgICBjeWNsaWNFZGdlcyA9IFtdLFxuICAgICAgICAgICAgZGlyZWN0ZWRBY3ljbGljR3JhcGggPSBEaXJlY3RlZEFjeWNsaWNHcmFwaC5mcm9tT3JkZXJlZFZlcnRpY2VzKG9yZGVyZWRWZXJ0aWNlcyk7XG5cbiAgICAgIGRpcmVjdGVkR3JhcGggPSBuZXcgRGlyZWN0ZWRHcmFwaChjeWNsaWNFZGdlcywgZGlyZWN0ZWRBY3ljbGljR3JhcGgpO1xuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3RlZEdyYXBoO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBQTs7Ozs7SUFFQSxVQUFBO0lBQ0EsVUFBQTtJQUNBLGlCQUFBO0lBRUEsS0FBQTtJQUNBLE1BQUE7SUFDQSxhQUFBO0lBRUEsT0FBQTtJQUNBLE1BQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFQSxLQUFBLEdBVkEsVUFBQSxnQkFVQSxLQUFBLEVBQUEsTUFBQSxHQVZBLFVBQUEsZ0JBVUEsTUFBQTtJQUVBLGFBQUE7YUFBQSxhQUFBLENBQ0EsV0FBQSxFQUFBLG9CQUFBOzhCQURBLGFBQUE7YUFFQSxXQUFBLEdBQUEsV0FBQTthQUVBLG9CQUFBLEdBQUEsb0JBQUE7O2lCQUpBLGFBQUE7O0FBT0EsZUFBQSxHQUFBLGNBQUE7NEJBQUEsY0FBQTs0QkFDQSxXQUFBOzs7O0FBR0EsZUFBQSxHQUFBLHVCQUFBOzRCQUFBLHVCQUFBOzRCQUNBLG9CQUFBOzs7O0FBR0EsZUFBQSxHQUFBLDhDQUFBOzRCQUFBLDhDQUFBLENBQUEsVUFBQSxFQUFBLEtBQUE7b0JBQUEsa0JBQUEsR0FBQSxLQUFBLGNBQUEsS0FBQSxHQUFBLEtBQUE7b0JBQ0EsK0JBQUEsUUFBQSxvQkFBQSxDQUFBLDhDQUFBLENBQUEsVUFBQTtvQkFFQSxrQkFBQTt5QkFDQSxXQUFBLENBQUEsT0FBQSxVQUFBLFVBQUE7NEJBQ0EsMEJBQUEsR0FBQSxVQUFBLENBQUEsbUJBQUE7NEJBRUEsMEJBQUEsS0FBQSxVQUFBO2dDQUNBLDBCQUFBLEdBQUEsVUFBQSxDQUFBLG1CQUFBLElBQ0EsOEJBQUEsR0FBQSwwQkFBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBRUEsMkRBQUEsQ0FBQSxJQUFBLENBQUEsOEJBQUE7Ozs7dUJBS0EsK0JBQUE7Ozs7QUFHQSxlQUFBLEdBQUEsNENBQUE7NEJBQUEsNENBQUEsQ0FBQSxVQUFBLEVBQUEsS0FBQTtvQkFBQSxrQkFB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