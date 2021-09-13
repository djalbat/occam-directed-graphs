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
                partialCycles.some((function(partialCycle) {
                    var targetVertexName = partialCycle.getTargetVertexName(), targetVertex = this.directedAcyclicGraph.getVertexByVertexName(targetVertexName);
                    (0, _vertex).forwardsDepthFirstSearch(targetVertex, function(visitedVertex, getPredecessorVertices) {
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
                edges.forEach((function(edge) {
                    return this.addEdge(edge);
                }).bind(this));
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kaXJlY3RlZEdyYXBoLmpzIl0sIm5hbWVzIjpbIkdyYXBoIiwiYXJyYXlVdGlsaXRpZXMiLCJEaXJlY3RlZEFjeWNsaWNHcmFwaCIsIkVkZ2UiLCJDeWNsZSIsIlBhcnRpYWxDeWNsZSIsInZlcnRleE5hbWVzRnJvbVZlcnRleExpdGVyYWxzIiwiZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoIiwiZWRnZXNGcm9tVmVydGV4TGl0ZXJhbHMiLCJjaGVja0VkZ2VzSW5jbHVkZXNFZGdlIiwicmVtb3ZlRWRnZUZyb21FZGdlcyIsImVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lIiwiZWRnZXNCeVRhcmdldFZlcnRleE5hbWUiLCJmaXJzdCIsImZpbHRlciIsIkRpcmVjdGVkR3JhcGgiLCJjb25zdHJ1Y3RvciIsImN5Y2xpY0VkZ2VzIiwiZGlyZWN0ZWRBY3ljbGljR3JhcGgiLCJnZXRDeWNsaWNFZGdlcyIsImdldERpcmVjdGVkQWN5Y2xpY0dyYXBoIiwiZ2V0SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSIsInZlcnRleE5hbWUiLCJpbmNsdWRlQ3ljbGljRWRnZXMiLCJpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzIiwiZm9yRWFjaCIsImN5Y2xpY0VkZ2UiLCJjeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZSIsImdldFRhcmdldFZlcnRleE5hbWUiLCJjeWNsaWNFZGdlU291cmNlVmVydGV4TmFtZSIsImdldFNvdXJjZVZlcnRleE5hbWUiLCJpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWUiLCJwdXNoIiwiZ2V0SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUiLCJpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcyIsImltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWUiLCJnZXRQcmVkZWNlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lIiwiZ2V0U3VjY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUiLCJhcmVDeWNsZXNQcmVzZW50QnlWZXJ0ZXhOYW1lIiwiY3ljbGVzUHJlc2VudCIsInZlcnRleFByZXNlbnQiLCJpc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUiLCJmaXJzdEN5Y2xlIiwiZ2V0Rmlyc3RDeWNsZUJ5VmVydGV4TmFtZSIsInZlcnRleCIsImdldFZlcnRleEJ5VmVydGV4TmFtZSIsInNsaWNlIiwicGFydGlhbEN5Y2xlcyIsImN5Y2xlcyIsInZpc2l0ZWRWZXJ0ZXgiLCJnZXRQcmVkZWNlc3NvclZlcnRpY2VzIiwidmlzaXRlZFZlcnRleE5hbWUiLCJnZXROYW1lIiwic291cmNlVmVydGV4TmFtZSIsIm1hdGNoZXMiLCJtYXRjaFNvdXJjZVZlcnRleE5hbWUiLCJwcmVkZWNlc3NvclZlcnRpY2VzIiwicGFydGlhbEN5Y2xlIiwiZnJvbUN5Y2xpY0VkZ2VBbmRQcmVkZWNlc3NvclZlcnRpY2VzIiwiY3ljbGljRWRnZXNMZW5ndGgiLCJsZW5ndGgiLCJ0ZXJtaW5hdGUiLCJzb21lIiwidGFyZ2V0VmVydGV4TmFtZSIsInRhcmdldFZlcnRleCIsInN1Y2Nlc3NvclZlcnRpY2VzIiwiY3ljbGUiLCJmcm9tVmVydGV4TmFtZVBhcnRpYWxDeWNsZUFuZFN1Y2Nlc3NvclZlcnRpY2VzIiwiY3ljbGVzTGVuZ3RoIiwiZ2V0Rmlyc3RDeWNsZSIsImZpcnN0Q3ljbGljRWRnZSIsImdldE9yZGVyZWRWZXJ0ZXhOYW1lcyIsImFyZUN5Y2xlc1ByZXNlbnQiLCJhZGRWZXJ0ZXhCeVZlcnRleE5hbWUiLCJhZGRWZXJ0aWNlc0J5VmVydGV4TmFtZXMiLCJ2ZXJ0ZXhOYW1lcyIsInJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZSIsImZpbHRlckN5Y2xpY0VkZ2VzIiwicmVtb3ZlVmVydGljZXNCeVZlcnRleE5hbWVzIiwiYWRkRWRnZSIsImVkZ2UiLCJzdWNjZXNzIiwiY3ljbGljRWRnZXNJbmNsdWRlc0VkZ2UiLCJhZGRFZGdlcyIsImVkZ2VzIiwicmVtb3ZlRWRnZSIsInJlbW92ZVN0cmFuZGVkVmVydGljZXMiLCJlZGdlUHJlc2VudCIsImlzRWRnZVByZXNlbnQiLCJlZGdlQ3ljbGljIiwic291cmNlVmVydGV4Iiwic291cmNlVmVydGV4U3RyYW5kZWQiLCJpc1N0cmFuZGVkIiwidGFyZ2V0VmVydGV4U3RyYW5kZWQiLCJyZW1vdmVFZGdlcyIsImFkZEVkZ2VCeVZlcnRleE5hbWVzIiwiZnJvbVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lIiwicmVtb3ZlRWRnZUJ5VmVydGV4TmFtZXMiLCJyZW1vdmVFZGdlc0J5VGFyZ2V0VmVydGV4TmFtZSIsImdldEVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lIiwicmVtb3ZlRWRnZXNCeVNvdXJjZVZlcnRleE5hbWUiLCJnZXRFZGdlc0J5U291cmNlVmVydGV4TmFtZSIsInJlbW92ZUFsbEVkZ2VzQW5kVmVydGljZXMiLCJmcm9tTm90aGluZyIsInNvdXJjZVZlcnRleFByZXNlbnQiLCJ0YXJnZXRWZXJ0ZXhQcmVzZW50IiwiZGlyZWN0ZWRHcmFwaCIsImZyb21WZXJ0ZXhMaXRlcmFscyIsInZlcnRleExpdGVyYWxzIiwiZnJvbVZlcnRleE5hbWVzQW5kRWRnZXMiLCJncmFwaCIsImZyb21WZXJ0ZXhOYW1lcyIsIm9yZGVyZWRWZXJ0aWNlcyIsImdldE9yZGVyZWRWZXJ0aWNlcyIsImZyb21PcmRlcmVkVmVydGljZXMiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRVUsR0FBWSxDQUFaLFVBQVk7QUFDSCxHQUFXLENBQVgsVUFBVztBQUNMLEdBQW9CLENBQXBCLGlCQUFvQjtBQUV4QyxHQUFRLENBQVIsS0FBUTtBQUNQLEdBQVMsQ0FBVCxNQUFTO0FBQ0YsR0FBZ0IsQ0FBaEIsYUFBZ0I7QUFFK0IsR0FBb0IsQ0FBcEIsT0FBb0I7QUFDMkMsR0FBa0IsQ0FBbEIsTUFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekosR0FBSyxDQUFHLEtBQUssR0FWa0IsVUFBVyxnQkFVbEMsS0FBSyxFQUFFLE1BQU0s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LEtBQUssQ0FBQyxrQkFBa0IsSUFDMUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUNoQixvQkFBb0IsR0F4VUssaUJBQW9CLHNCQXdVRCxtQkFBbUIsQ0FBQyxlQUFlO29CQUVyRixhQUFhLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsb0JBQW9CO2dCQUNyRSxDQUFDO2dCQUVELE1BQU0sQ0FBQyxhQUFhO1lBQ3RCLENBQUM7OztXQW5Va0IsYUFBYTs7a0JBQWIsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBHcmFwaCB9IGZyb20gXCJvY2NhbS1rYWhuXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IERpcmVjdGVkQWN5Y2xpY0dyYXBoIH0gZnJvbSBcIm9jY2FtLXBlYXJjZS1rZWxseVwiO1xuXG5pbXBvcnQgRWRnZSBmcm9tIFwiLi9lZGdlXCI7XG5pbXBvcnQgQ3ljbGUgZnJvbSBcIi4vY3ljbGVcIjtcbmltcG9ydCBQYXJ0aWFsQ3ljbGUgZnJvbSBcIi4vcGFydGlhbEN5Y2xlXCI7XG5cbmltcG9ydCB7IHZlcnRleE5hbWVzRnJvbVZlcnRleExpdGVyYWxzLCBmb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2ggfSBmcm9tIFwiLi91dGlsaXRpZXMvdmVydGV4XCI7XG5pbXBvcnQgeyBlZGdlc0Zyb21WZXJ0ZXhMaXRlcmFscywgY2hlY2tFZGdlc0luY2x1ZGVzRWRnZSwgcmVtb3ZlRWRnZUZyb21FZGdlcywgZWRnZXNCeVNvdXJjZVZlcnRleE5hbWUsIGVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2VkZ2VcIjtcblxuY29uc3QgeyBmaXJzdCwgZmlsdGVyIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0ZWRHcmFwaCB7XG4gIGNvbnN0cnVjdG9yKGN5Y2xpY0VkZ2VzLCBkaXJlY3RlZEFjeWNsaWNHcmFwaCkge1xuICAgIHRoaXMuY3ljbGljRWRnZXMgPSBjeWNsaWNFZGdlcztcblxuICAgIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGggPSBkaXJlY3RlZEFjeWNsaWNHcmFwaDtcbiAgfVxuXG4gIGdldEN5Y2xpY0VkZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLmN5Y2xpY0VkZ2VzO1xuICB9XG5cbiAgZ2V0RGlyZWN0ZWRBY3ljbGljR3JhcGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGg7XG4gIH1cblxuICBnZXRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUsIGluY2x1ZGVDeWNsaWNFZGdlcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcyA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgIGlmIChpbmNsdWRlQ3ljbGljRWRnZXMpIHtcbiAgICAgIHRoaXMuY3ljbGljRWRnZXMuZm9yRWFjaCgoY3ljbGljRWRnZSkgPT4ge1xuICAgICAgICBjb25zdCBjeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZSA9IGN5Y2xpY0VkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpO1xuXG4gICAgICAgIGlmIChjeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZSA9PT0gdmVydGV4TmFtZSkge1xuICAgICAgICAgIGNvbnN0IGN5Y2xpY0VkZ2VTb3VyY2VWZXJ0ZXhOYW1lID0gY3ljbGljRWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICAgICAgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lID0gY3ljbGljRWRnZVNvdXJjZVZlcnRleE5hbWU7ICAvLy9cblxuICAgICAgICAgIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMucHVzaChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGdldEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUsIGluY2x1ZGVDeWNsaWNFZGdlcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXMgPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgaWYgKGluY2x1ZGVDeWNsaWNFZGdlcykge1xuICAgICAgdGhpcy5jeWNsaWNFZGdlcy5mb3JFYWNoKChjeWNsaWNFZGdlKSA9PiB7XG4gICAgICAgIGNvbnN0IGN5Y2xpY0VkZ2VTb3VyY2VWZXJ0ZXhOYW1lID0gY3ljbGljRWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCk7XG5cbiAgICAgICAgaWYgKGN5Y2xpY0VkZ2VTb3VyY2VWZXJ0ZXhOYW1lID09PSB2ZXJ0ZXhOYW1lKSB7XG4gICAgICAgICAgY29uc3QgY3ljbGljRWRnZVRhcmdldFZlcnRleE5hbWUgPSBjeWNsaWNFZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKSxcbiAgICAgICAgICAgICAgICBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lID0gY3ljbGljRWRnZVRhcmdldFZlcnRleE5hbWU7ICAvLy9cblxuICAgICAgICAgIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzLnB1c2goaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGdldFByZWRlY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUodmVydGV4TmFtZSkgeyByZXR1cm4gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRQcmVkZWNlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpOyB9XG5cbiAgZ2V0U3VjY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUodmVydGV4TmFtZSkgeyByZXR1cm4gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRTdWNjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTsgfVxuXG4gIGFyZUN5Y2xlc1ByZXNlbnRCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGxldCBjeWNsZXNQcmVzZW50ID0gZmFsc2U7XG5cbiAgICBjb25zdCB2ZXJ0ZXhQcmVzZW50ID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5pc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICBpZiAodmVydGV4UHJlc2VudCkge1xuICAgICAgY29uc3QgZmlyc3RDeWNsZSA9IHRoaXMuZ2V0Rmlyc3RDeWNsZUJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgICAgY3ljbGVzUHJlc2VudCA9IChmaXJzdEN5Y2xlICE9PSBudWxsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3ljbGVzUHJlc2VudDtcbiAgfVxuXG4gIGlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7IHJldHVybiB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTsgfVxuXG4gIGdldEZpcnN0Q3ljbGVCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGxldCBmaXJzdEN5Y2xlID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCB2ZXJ0ZXggPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSxcbiAgICAgICAgICBjeWNsaWNFZGdlcyA9IHRoaXMuY3ljbGljRWRnZXMuc2xpY2UoKSwgLy8vXG4gICAgICAgICAgcGFydGlhbEN5Y2xlcyA9IFtdLFxuICAgICAgICAgIGN5Y2xlcyA9IFtdO1xuXG4gICAgZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoKHZlcnRleCwgKHZpc2l0ZWRWZXJ0ZXgsIGdldFByZWRlY2Vzc29yVmVydGljZXMpID0+IHtcbiAgICAgIGNvbnN0IHZpc2l0ZWRWZXJ0ZXhOYW1lID0gdmlzaXRlZFZlcnRleC5nZXROYW1lKCksXG4gICAgICAgICAgICBzb3VyY2VWZXJ0ZXhOYW1lID0gdmlzaXRlZFZlcnRleE5hbWU7IC8vL1xuXG4gICAgICBmaWx0ZXIoY3ljbGljRWRnZXMsIChjeWNsaWNFZGdlKSA9PiB7XG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSBjeWNsaWNFZGdlLm1hdGNoU291cmNlVmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKTtcblxuICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgIGNvbnN0IHByZWRlY2Vzc29yVmVydGljZXMgPSBnZXRQcmVkZWNlc3NvclZlcnRpY2VzKCksXG4gICAgICAgICAgICAgICAgcGFydGlhbEN5Y2xlID0gIFBhcnRpYWxDeWNsZS5mcm9tQ3ljbGljRWRnZUFuZFByZWRlY2Vzc29yVmVydGljZXMoY3ljbGljRWRnZSwgcHJlZGVjZXNzb3JWZXJ0aWNlcyk7XG4gICAgICAgICAgXG4gICAgICAgICAgcGFydGlhbEN5Y2xlcy5wdXNoKHBhcnRpYWxDeWNsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBjeWNsaWNFZGdlc0xlbmd0aCA9IGN5Y2xpY0VkZ2VzLmxlbmd0aCxcbiAgICAgICAgICAgIHRlcm1pbmF0ZSA9IChjeWNsaWNFZGdlc0xlbmd0aCA9PT0gMCk7XG5cbiAgICAgIHJldHVybiB0ZXJtaW5hdGU7XG4gICAgfSk7XG5cbiAgICBwYXJ0aWFsQ3ljbGVzLnNvbWUoKHBhcnRpYWxDeWNsZSkgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0VmVydGV4TmFtZSA9IHBhcnRpYWxDeWNsZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXggPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldFZlcnRleEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoKHRhcmdldFZlcnRleCwgKHZpc2l0ZWRWZXJ0ZXgsIGdldFByZWRlY2Vzc29yVmVydGljZXMpID0+IHtcbiAgICAgICAgY29uc3QgdmlzaXRlZFZlcnRleE5hbWUgPSB2aXNpdGVkVmVydGV4LmdldE5hbWUoKTtcblxuICAgICAgICBpZiAodmlzaXRlZFZlcnRleE5hbWUgPT09IHZlcnRleE5hbWUpIHtcbiAgICAgICAgICBjb25zdCBwcmVkZWNlc3NvclZlcnRpY2VzID0gZ2V0UHJlZGVjZXNzb3JWZXJ0aWNlcygpLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3NvclZlcnRpY2VzID0gcHJlZGVjZXNzb3JWZXJ0aWNlcywgIC8vL1xuICAgICAgICAgICAgICAgIGN5Y2xlID0gQ3ljbGUuZnJvbVZlcnRleE5hbWVQYXJ0aWFsQ3ljbGVBbmRTdWNjZXNzb3JWZXJ0aWNlcyh2ZXJ0ZXhOYW1lLCBwYXJ0aWFsQ3ljbGUsIHN1Y2Nlc3NvclZlcnRpY2VzKTtcblxuICAgICAgICAgIGN5Y2xlcy5wdXNoKGN5Y2xlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGN5Y2xlc0xlbmd0aCA9IGN5Y2xlcy5sZW5ndGgsXG4gICAgICAgICAgICAgIHRlcm1pbmF0ZSA9IChjeWNsZXNMZW5ndGggPiAwKTtcblxuICAgICAgICByZXR1cm4gdGVybWluYXRlO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjeWNsZXNMZW5ndGggPSBjeWNsZXMubGVuZ3RoO1xuICAgIFxuICAgIGlmIChjeWNsZXNMZW5ndGggPiAwKSB7XG4gICAgICBmaXJzdEN5Y2xlID0gZmlyc3QoY3ljbGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmlyc3RDeWNsZTtcbiAgfVxuXG4gIGdldEZpcnN0Q3ljbGUoKSB7XG4gICAgY29uc3QgZmlyc3RDeWNsaWNFZGdlID0gZmlyc3QodGhpcy5jeWNsaWNFZGdlcyksXG4gICAgICAgICAgY3ljbGljRWRnZSA9IGZpcnN0Q3ljbGljRWRnZSwgLy8vXG4gICAgICAgICAgc291cmNlVmVydGV4TmFtZSA9IGN5Y2xpY0VkZ2UuZ2V0U291cmNlVmVydGV4TmFtZSgpLFxuICAgICAgICAgIHZlcnRleE5hbWUgPSBzb3VyY2VWZXJ0ZXhOYW1lLCAgLy8vXG4gICAgICAgICAgZmlyc3RDeWNsZSA9IHRoaXMuZ2V0Rmlyc3RDeWNsZUJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgIHJldHVybiBmaXJzdEN5Y2xlO1xuICB9XG5cbiAgZ2V0T3JkZXJlZFZlcnRleE5hbWVzKCkgeyByZXR1cm4gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRPcmRlcmVkVmVydGV4TmFtZXMoKTsgfVxuXG4gIGFyZUN5Y2xlc1ByZXNlbnQoKSB7XG4gICAgY29uc3QgY3ljbGljRWRnZXNMZW5ndGggPSB0aGlzLmN5Y2xpY0VkZ2VzLmxlbmd0aCxcbiAgICAgICAgICBjeWNsZXNQcmVzZW50ID0gKGN5Y2xpY0VkZ2VzTGVuZ3RoID4gMCk7XG5cbiAgICByZXR1cm4gY3ljbGVzUHJlc2VudDtcbiAgfVxuXG4gIGFkZFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguYWRkVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpOyB9XG5cbiAgYWRkVmVydGljZXNCeVZlcnRleE5hbWVzKHZlcnRleE5hbWVzKSB7XG4gICAgdmVydGV4TmFtZXMuZm9yRWFjaCgodmVydGV4TmFtZSkgPT4gdGhpcy5hZGRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSkpO1xuICB9XG5cbiAgcmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLnJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgIHRoaXMuZmlsdGVyQ3ljbGljRWRnZXMoKTtcbiAgfVxuXG4gIHJlbW92ZVZlcnRpY2VzQnlWZXJ0ZXhOYW1lcyh2ZXJ0ZXhOYW1lcykge1xuICAgIHZlcnRleE5hbWVzLmZvckVhY2goKHZlcnRleE5hbWUpID0+IHRoaXMucmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpKTtcbiAgfVxuXG4gIGFkZEVkZ2UoZWRnZSkge1xuICAgIGNvbnN0IHN1Y2Nlc3MgPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmFkZEVkZ2UoZWRnZSk7XG4gICAgXG4gICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICBjb25zdCBjeWNsaWNFZGdlc0luY2x1ZGVzRWRnZSA9IGNoZWNrRWRnZXNJbmNsdWRlc0VkZ2UoZWRnZSwgdGhpcy5jeWNsaWNFZGdlcyk7XG5cbiAgICAgIGlmICghY3ljbGljRWRnZXNJbmNsdWRlc0VkZ2UpIHtcbiAgICAgICAgY29uc3QgY3ljbGljRWRnZSA9IGVkZ2U7ICAvLy9cblxuICAgICAgICB0aGlzLmN5Y2xpY0VkZ2VzLnB1c2goY3ljbGljRWRnZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICBhZGRFZGdlcyhlZGdlcykge1xuICAgIGVkZ2VzLmZvckVhY2goKGVkZ2UpID0+IHRoaXMuYWRkRWRnZShlZGdlKSk7XG4gIH1cblxuICByZW1vdmVFZGdlKGVkZ2UsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMgPSBmYWxzZSkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VzSW5jbHVkZXNFZGdlID0gY2hlY2tFZGdlc0luY2x1ZGVzRWRnZShlZGdlLCB0aGlzLmN5Y2xpY0VkZ2VzKSxcbiAgICAgICAgICBlZGdlUHJlc2VudCA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguaXNFZGdlUHJlc2VudChlZGdlKSxcbiAgICAgICAgICBlZGdlQ3ljbGljID0gY3ljbGljRWRnZXNJbmNsdWRlc0VkZ2U7IC8vL1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKGVkZ2VDeWNsaWMpIHtcbiAgICAgIGNvbnN0IGN5Y2xpY0VkZ2UgPSBlZGdlOyAgLy8vXG5cbiAgICAgIHJlbW92ZUVkZ2VGcm9tRWRnZXMoY3ljbGljRWRnZSwgdGhpcy5jeWNsaWNFZGdlcyk7XG4gICAgfSBlbHNlIGlmIChlZGdlUHJlc2VudCkge1xuICAgICAgdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5yZW1vdmVFZGdlKGVkZ2UpO1xuXG4gICAgICBpZiAocmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcykge1xuICAgICAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gZWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICAgIHRhcmdldFZlcnRleE5hbWUgPSBlZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKSxcbiAgICAgICAgICAgICAgc291cmNlVmVydGV4ID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSksXG4gICAgICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpLFxuICAgICAgICAgICAgICBzb3VyY2VWZXJ0ZXhTdHJhbmRlZCA9IHNvdXJjZVZlcnRleC5pc1N0cmFuZGVkKCksXG4gICAgICAgICAgICAgIHRhcmdldFZlcnRleFN0cmFuZGVkID0gdGFyZ2V0VmVydGV4LmlzU3RyYW5kZWQoKTtcblxuICAgICAgICBpZiAoc291cmNlVmVydGV4U3RyYW5kZWQpIHtcbiAgICAgICAgICB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLnJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0YXJnZXRWZXJ0ZXhTdHJhbmRlZCkge1xuICAgICAgICAgIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGgucmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5maWx0ZXJDeWNsaWNFZGdlcygpO1xuICB9XG5cbiAgcmVtb3ZlRWRnZXMoZWRnZXMsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMgPSBmYWxzZSkge1xuICAgIGVkZ2VzLmZvckVhY2goKGVkZ2UpID0+IHRoaXMucmVtb3ZlRWRnZShlZGdlLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzKSk7XG4gIH1cblxuICBhZGRFZGdlQnlWZXJ0ZXhOYW1lcyhzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgZWRnZSA9IEVkZ2UuZnJvbVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgdGhpcy5hZGRFZGdlKGVkZ2UpO1xuICB9XG5cbiAgcmVtb3ZlRWRnZUJ5VmVydGV4TmFtZXMoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSwgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgZWRnZSA9IEVkZ2UuZnJvbVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgdGhpcy5yZW1vdmVFZGdlKGVkZ2UsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMpO1xuICB9XG5cbiAgcmVtb3ZlRWRnZXNCeVRhcmdldFZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSwgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgY3ljbGljRWRnZXMgPSBlZGdlc0J5VGFyZ2V0VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lLCB0aGlzLmN5Y2xpY0VkZ2VzKSxcbiAgICAgICAgICBlZGdlcyA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0RWRnZXNCeVRhcmdldFZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICB0aGlzLnJlbW92ZUVkZ2VzKGN5Y2xpY0VkZ2VzLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzKTtcblxuICAgIHRoaXMucmVtb3ZlRWRnZXMoZWRnZXMsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMpO1xuICB9XG5cbiAgcmVtb3ZlRWRnZXNCeVNvdXJjZVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgY3ljbGljRWRnZXMgPSBlZGdlc0J5U291cmNlVmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0aGlzLmN5Y2xpY0VkZ2VzKSxcbiAgICAgICAgICBlZGdlcyA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0RWRnZXNCeVNvdXJjZVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSk7XG5cbiAgICB0aGlzLnJlbW92ZUVkZ2VzKGN5Y2xpY0VkZ2VzLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzKTtcblxuICAgIHRoaXMucmVtb3ZlRWRnZXMoZWRnZXMsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMpO1xuICB9XG5cbiAgcmVtb3ZlQWxsRWRnZXNBbmRWZXJ0aWNlcygpIHtcbiAgICB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoID0gRGlyZWN0ZWRBY3ljbGljR3JhcGguZnJvbU5vdGhpbmcoKTtcblxuICAgIHRoaXMuY3ljbGljRWRnZXMgPSBbXTtcbiAgfVxuXG4gIGZpbHRlckN5Y2xpY0VkZ2VzKCkge1xuICAgIGZpbHRlcih0aGlzLmN5Y2xpY0VkZ2VzLCAoY3ljbGljRWRnZSkgPT4ge1xuICAgICAgY29uc3Qgc291cmNlVmVydGV4TmFtZSA9IGN5Y2xpY0VkZ2UuZ2V0U291cmNlVmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IGN5Y2xpY0VkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgc291cmNlVmVydGV4UHJlc2VudCA9IHRoaXMuaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4UHJlc2VudCA9IHRoaXMuaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgICBpZiAoc291cmNlVmVydGV4UHJlc2VudCAmJiB0YXJnZXRWZXJ0ZXhQcmVzZW50KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZmlsdGVyKHRoaXMuY3ljbGljRWRnZXMsIChjeWNsaWNFZGdlKSA9PiB7XG4gICAgICBjb25zdCBlZGdlID0gY3ljbGljRWRnZSwgIC8vL1xuICAgICAgICAgICAgc3VjY2VzcyA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguYWRkRWRnZShlZGdlKTtcblxuICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VzID0gW10sXG4gICAgICAgICAgZGlyZWN0ZWRBY3ljbGljR3JhcGggPSBEaXJlY3RlZEFjeWNsaWNHcmFwaC5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGRpcmVjdGVkR3JhcGggPSBuZXcgRGlyZWN0ZWRHcmFwaChjeWNsaWNFZGdlcywgZGlyZWN0ZWRBY3ljbGljR3JhcGgpO1xuICAgIFxuICAgIHJldHVybiBkaXJlY3RlZEdyYXBoOyAgICBcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmVydGV4TGl0ZXJhbHModmVydGV4TGl0ZXJhbHMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhOYW1lcyA9IHZlcnRleE5hbWVzRnJvbVZlcnRleExpdGVyYWxzKHZlcnRleExpdGVyYWxzKSxcbiAgICAgICAgICBlZGdlcyA9IGVkZ2VzRnJvbVZlcnRleExpdGVyYWxzKHZlcnRleExpdGVyYWxzKSxcbiAgICAgICAgICBkaXJlY3RlZEdyYXBoID0gRGlyZWN0ZWRHcmFwaC5mcm9tVmVydGV4TmFtZXNBbmRFZGdlcyh2ZXJ0ZXhOYW1lcywgZWRnZXMpO1xuXG4gICAgcmV0dXJuIGRpcmVjdGVkR3JhcGg7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZlcnRleE5hbWVzQW5kRWRnZXModmVydGV4TmFtZXMsIGVkZ2VzKSB7XG4gICAgbGV0IGRpcmVjdGVkR3JhcGg7XG5cbiAgICBjb25zdCBncmFwaCA9IEdyYXBoLmZyb21WZXJ0ZXhOYW1lc0FuZEVkZ2VzKHZlcnRleE5hbWVzLCBlZGdlcyksXG4gICAgICAgICAgY3ljbGVzUHJlc2VudCA9IGdyYXBoLmFyZUN5Y2xlc1ByZXNlbnQoKTtcblxuICAgIGlmIChjeWNsZXNQcmVzZW50KSB7XG4gICAgICBjb25zdCBjeWNsaWNFZGdlcyA9IFtdLFxuICAgICAgICAgICAgZGlyZWN0ZWRBY3ljbGljR3JhcGggPSBEaXJlY3RlZEFjeWNsaWNHcmFwaC5mcm9tVmVydGV4TmFtZXModmVydGV4TmFtZXMpO1xuXG4gICAgICBkaXJlY3RlZEdyYXBoID0gbmV3IERpcmVjdGVkR3JhcGgoY3ljbGljRWRnZXMsIGRpcmVjdGVkQWN5Y2xpY0dyYXBoKTtcblxuICAgICAgZWRnZXMuZm9yRWFjaCgoZWRnZSkgPT4gZGlyZWN0ZWRHcmFwaC5hZGRFZGdlKGVkZ2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgb3JkZXJlZFZlcnRpY2VzID0gZ3JhcGguZ2V0T3JkZXJlZFZlcnRpY2VzKCksXG4gICAgICAgICAgICBjeWNsaWNFZGdlcyA9IFtdLFxuICAgICAgICAgICAgZGlyZWN0ZWRBY3ljbGljR3JhcGggPSBEaXJlY3RlZEFjeWNsaWNHcmFwaC5mcm9tT3JkZXJlZFZlcnRpY2VzKG9yZGVyZWRWZXJ0aWNlcyk7XG5cbiAgICAgIGRpcmVjdGVkR3JhcGggPSBuZXcgRGlyZWN0ZWRHcmFwaChjeWNsaWNFZGdlcywgZGlyZWN0ZWRBY3ljbGljR3JhcGgpO1xuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3RlZEdyYXBoO1xuICB9XG59XG4iXX0=