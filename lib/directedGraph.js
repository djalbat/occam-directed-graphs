"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamKahn = require("occam-kahn");

var _necessary = require("necessary");

var _occamPearceKelly = require("occam-pearce-kelly");

var _edge = _interopRequireDefault(require("./edge"));

var _cycle = _interopRequireDefault(require("./cycle"));

var _partialCycle = _interopRequireDefault(require("./partialCycle"));

var _vertex = require("./utilities/vertex");

var _edge2 = require("./utilities/edge");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var first = _necessary.arrayUtilities.first,
    filter = _necessary.arrayUtilities.filter;

var DirectedGraph = /*#__PURE__*/function () {
  function DirectedGraph(cyclicEdges, directedAcyclicGraph) {
    _classCallCheck(this, DirectedGraph);

    this.cyclicEdges = cyclicEdges;
    this.directedAcyclicGraph = directedAcyclicGraph;
  }

  _createClass(DirectedGraph, [{
    key: "getCyclicEdges",
    value: function getCyclicEdges() {
      return this.cyclicEdges;
    }
  }, {
    key: "getDirectedAcyclicGraph",
    value: function getDirectedAcyclicGraph() {
      return this.directedAcyclicGraph;
    }
  }, {
    key: "getImmediatePredecessorVertexNamesByVertexName",
    value: function getImmediatePredecessorVertexNamesByVertexName(vertexName) {
      return this.directedAcyclicGraph.getImmediatePredecessorVertexNamesByVertexName(vertexName);
    }
  }, {
    key: "getImmediateSuccessorVertexNamesByVertexName",
    value: function getImmediateSuccessorVertexNamesByVertexName(vertexName) {
      return this.directedAcyclicGraph.getImmediateSuccessorVertexNamesByVertexName(vertexName);
    }
  }, {
    key: "getPredecessorVertexNamesByVertexName",
    value: function getPredecessorVertexNamesByVertexName(vertexName) {
      return this.directedAcyclicGraph.getPredecessorVertexNamesByVertexName(vertexName);
    }
  }, {
    key: "getSuccessorVertexNamesByVertexName",
    value: function getSuccessorVertexNamesByVertexName(vertexName) {
      return this.directedAcyclicGraph.getSuccessorVertexNamesByVertexName(vertexName);
    }
  }, {
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
  }, {
    key: "isVertexPresentByVertexName",
    value: function isVertexPresentByVertexName(vertexName) {
      return this.directedAcyclicGraph.isVertexPresentByVertexName(vertexName);
    }
  }, {
    key: "getFirstCycleByVertexName",
    value: function getFirstCycleByVertexName(vertexName) {
      var _this = this;

      var firstCycle = null;
      var vertex = this.directedAcyclicGraph.getVertexByVertexName(vertexName),
          cyclicEdges = this.cyclicEdges.slice(),
          ///
      partialCycles = [],
          cycles = [];
      (0, _vertex.forwardsDepthFirstSearch)(vertex, function (visitedVertex, getPredecessorVertices) {
        var visitedVertexName = visitedVertex.getName(),
            sourceVertexName = visitedVertexName; ///

        filter(cyclicEdges, function (cyclicEdge) {
          var matches = cyclicEdge.matchSourceVertexName(sourceVertexName);

          if (matches) {
            var predecessorVertices = getPredecessorVertices(),
                partialCycle = _partialCycle["default"].fromCyclicEdgeAndPredecessorVertices(cyclicEdge, predecessorVertices);

            partialCycles.push(partialCycle);
          } else {
            return true;
          }
        });
        var cyclicEdgesLength = cyclicEdges.length,
            terminate = cyclicEdgesLength === 0;
        return terminate;
      });
      partialCycles.some(function (partialCycle) {
        var targetVertexName = partialCycle.getTargetVertexName(),
            targetVertex = _this.directedAcyclicGraph.getVertexByVertexName(targetVertexName);

        (0, _vertex.forwardsDepthFirstSearch)(targetVertex, function (visitedVertex, getPredecessorVertices) {
          var visitedVertexName = visitedVertex.getName();

          if (visitedVertexName === vertexName) {
            var predecessorVertices = getPredecessorVertices(),
                successorVertices = predecessorVertices,
                ///
            cycle = _cycle["default"].fromVertexNamePartialCycleAndSuccessorVertices(vertexName, partialCycle, successorVertices);

            cycles.push(cycle);
          }

          var cyclesLength = cycles.length,
              terminate = cyclesLength > 0;
          return terminate;
        });
      });
      var cyclesLength = cycles.length;

      if (cyclesLength > 0) {
        firstCycle = first(cycles);
      }

      return firstCycle;
    }
  }, {
    key: "getFirstCycle",
    value: function getFirstCycle() {
      var firstCyclicEdge = first(this.cyclicEdges),
          cyclicEdge = firstCyclicEdge,
          ///
      sourceVertexName = cyclicEdge.getSourceVertexName(),
          vertexName = sourceVertexName,
          ///
      firstCycle = this.getFirstCycleByVertexName(vertexName);
      return firstCycle;
    }
  }, {
    key: "getTopologicallyOrderedVertexNames",
    value: function getTopologicallyOrderedVertexNames() {
      return this.directedAcyclicGraph.getTopologicallyOrderedVertexNames();
    }
  }, {
    key: "areCyclesPresent",
    value: function areCyclesPresent() {
      var cyclicEdgesLength = this.cyclicEdges.length,
          cyclesPresent = cyclicEdgesLength > 0;
      return cyclesPresent;
    }
  }, {
    key: "addVertexByVertexName",
    value: function addVertexByVertexName(vertexName) {
      this.directedAcyclicGraph.addVertexByVertexName(vertexName);
    }
  }, {
    key: "addVerticesByVertexNames",
    value: function addVerticesByVertexNames(vertexNames) {
      var _this2 = this;

      vertexNames.forEach(function (vertexName) {
        return _this2.addVertexByVertexName(vertexName);
      });
    }
  }, {
    key: "removeVertexByVertexName",
    value: function removeVertexByVertexName(vertexName) {
      this.directedAcyclicGraph.removeVertexByVertexName(vertexName);
      this.filterCyclicEdges();
    }
  }, {
    key: "removeVerticesByVertexNames",
    value: function removeVerticesByVertexNames(vertexNames) {
      var _this3 = this;

      vertexNames.forEach(function (vertexName) {
        return _this3.removeVertexByVertexName(vertexName);
      });
    }
  }, {
    key: "addEdge",
    value: function addEdge(edge) {
      var success = this.directedAcyclicGraph.addEdge(edge);

      if (!success) {
        var cyclicEdgesIncludesEdge = (0, _edge2.checkEdgesIncludesEdge)(edge, this.cyclicEdges);

        if (!cyclicEdgesIncludesEdge) {
          var cyclicEdge = edge; ///

          this.cyclicEdges.push(cyclicEdge);
        }
      }
    }
  }, {
    key: "addEdges",
    value: function addEdges(edges) {
      var _this4 = this;

      edges.forEach(function (edge) {
        return _this4.addEdge(edge);
      });
    }
  }, {
    key: "removeEdge",
    value: function removeEdge(edge) {
      var removeStrandedVertices = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var cyclicEdgesIncludesEdge = (0, _edge2.checkEdgesIncludesEdge)(edge, this.cyclicEdges),
          edgePresent = this.directedAcyclicGraph.isEdgePresent(edge),
          edgeCyclic = cyclicEdgesIncludesEdge; ///

      if (false) {///
      } else if (edgeCyclic) {
        var cyclicEdge = edge; ///

        (0, _edge2.removeEdgeFromEdges)(cyclicEdge, this.cyclicEdges);
      } else if (edgePresent) {
        this.directedAcyclicGraph.removeEdge(edge);

        if (removeStrandedVertices) {
          var sourceVertexName = edge.getSourceVertexName(),
              targetVertexName = edge.getTargetVertexName(),
              sourceVertex = this.directedAcyclicGraph.getVertexByVertexName(sourceVertexName),
              targetVertex = this.directedAcyclicGraph.getVertexByVertexName(targetVertexName),
              sourceVertexStranded = sourceVertex.isStranded(),
              targetVertexStranded = targetVertex.isStranded();

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
  }, {
    key: "removeEdges",
    value: function removeEdges(edges) {
      var _this5 = this;

      var removeStrandedVertices = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      edges.forEach(function (edge) {
        return _this5.removeEdge(edge, removeStrandedVertices);
      });
    }
  }, {
    key: "addEdgeByVertexNames",
    value: function addEdgeByVertexNames(sourceVertexName, targetVertexName) {
      var edge = _edge["default"].fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);

      this.addEdge(edge);
    }
  }, {
    key: "removeEdgeByVertexNames",
    value: function removeEdgeByVertexNames(sourceVertexName, targetVertexName) {
      var removeStrandedVertices = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var edge = _edge["default"].fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);

      this.removeEdge(edge, removeStrandedVertices);
    }
  }, {
    key: "removeEdgesByTargetVertexName",
    value: function removeEdgesByTargetVertexName(targetVertexName) {
      var removeStrandedVertices = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var cyclicEdges = (0, _edge2.edgesByTargetVertexName)(targetVertexName, this.cyclicEdges),
          edges = this.directedAcyclicGraph.getEdgesByTargetVertexName(targetVertexName);
      this.removeEdges(cyclicEdges, removeStrandedVertices);
      this.removeEdges(edges, removeStrandedVertices);
    }
  }, {
    key: "removeEdgesBySourceVertexName",
    value: function removeEdgesBySourceVertexName(sourceVertexName) {
      var removeStrandedVertices = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var cyclicEdges = (0, _edge2.edgesBySourceVertexName)(sourceVertexName, this.cyclicEdges),
          edges = this.directedAcyclicGraph.getEdgesBySourceVertexName(sourceVertexName);
      this.removeEdges(cyclicEdges, removeStrandedVertices);
      this.removeEdges(edges, removeStrandedVertices);
    }
  }, {
    key: "removeAllEdgesAndVertices",
    value: function removeAllEdgesAndVertices() {
      this.directedAcyclicGraph = _occamPearceKelly.DirectedAcyclicGraph.fromNothing();
      this.cyclicEdges = [];
    }
  }, {
    key: "filterCyclicEdges",
    value: function filterCyclicEdges() {
      var _this6 = this;

      filter(this.cyclicEdges, function (cyclicEdge) {
        var edge = cyclicEdge,
            ///
        success = _this6.directedAcyclicGraph.addEdge(edge);

        if (!success) {
          return true;
        }
      });
    }
  }], [{
    key: "fromNothing",
    value: function fromNothing() {
      var cyclicEdges = [],
          directedAcyclicGraph = _occamPearceKelly.DirectedAcyclicGraph.fromNothing(),
          directedGraph = new DirectedGraph(cyclicEdges, directedAcyclicGraph);

      return directedGraph;
    }
  }, {
    key: "fromVertexLiterals",
    value: function fromVertexLiterals(vertexLiterals) {
      var vertexNames = (0, _vertex.vertexNamesFromVertexLiterals)(vertexLiterals),
          edges = (0, _edge2.edgesFromVertexLiterals)(vertexLiterals),
          directedGraph = DirectedGraph.fromVertexNamesAndEdges(vertexNames, edges);
      return directedGraph;
    }
  }, {
    key: "fromVertexNamesAndEdges",
    value: function fromVertexNamesAndEdges(vertexNames, edges) {
      var directedGraph;

      var graph = _occamKahn.Graph.fromVertexNamesAndEdges(vertexNames, edges),
          cyclesPresent = graph.areCyclesPresent();

      if (cyclesPresent) {
        var cyclicEdges = [],
            directedAcyclicGraph = _occamPearceKelly.DirectedAcyclicGraph.fromVertexNames(vertexNames);

        directedGraph = new DirectedGraph(cyclicEdges, directedAcyclicGraph);
        edges.forEach(function (edge) {
          return directedGraph.addEdge(edge);
        });
      } else {
        var topologicallyOrderedVertices = graph.getTopologicallyOrderedVertices(),
            _cyclicEdges = [],
            _directedAcyclicGraph = _occamPearceKelly.DirectedAcyclicGraph.fromTopologicallyOrderedVertices(topologicallyOrderedVertices);

        directedGraph = new DirectedGraph(_cyclicEdges, _directedAcyclicGraph);
      }

      return directedGraph;
    }
  }]);

  return DirectedGraph;
}();

exports["default"] = DirectedGraph;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpcmVjdGVkR3JhcGguanMiXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsImZpbHRlciIsIkRpcmVjdGVkR3JhcGgiLCJjeWNsaWNFZGdlcyIsImRpcmVjdGVkQWN5Y2xpY0dyYXBoIiwidmVydGV4TmFtZSIsImdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUiLCJnZXRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSIsImdldFByZWRlY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUiLCJnZXRTdWNjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSIsImN5Y2xlc1ByZXNlbnQiLCJ2ZXJ0ZXhQcmVzZW50IiwiaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lIiwiZmlyc3RDeWNsZSIsImdldEZpcnN0Q3ljbGVCeVZlcnRleE5hbWUiLCJ2ZXJ0ZXgiLCJnZXRWZXJ0ZXhCeVZlcnRleE5hbWUiLCJzbGljZSIsInBhcnRpYWxDeWNsZXMiLCJjeWNsZXMiLCJ2aXNpdGVkVmVydGV4IiwiZ2V0UHJlZGVjZXNzb3JWZXJ0aWNlcyIsInZpc2l0ZWRWZXJ0ZXhOYW1lIiwiZ2V0TmFtZSIsInNvdXJjZVZlcnRleE5hbWUiLCJjeWNsaWNFZGdlIiwibWF0Y2hlcyIsIm1hdGNoU291cmNlVmVydGV4TmFtZSIsInByZWRlY2Vzc29yVmVydGljZXMiLCJwYXJ0aWFsQ3ljbGUiLCJQYXJ0aWFsQ3ljbGUiLCJmcm9tQ3ljbGljRWRnZUFuZFByZWRlY2Vzc29yVmVydGljZXMiLCJwdXNoIiwiY3ljbGljRWRnZXNMZW5ndGgiLCJsZW5ndGgiLCJ0ZXJtaW5hdGUiLCJzb21lIiwidGFyZ2V0VmVydGV4TmFtZSIsImdldFRhcmdldFZlcnRleE5hbWUiLCJ0YXJnZXRWZXJ0ZXgiLCJzdWNjZXNzb3JWZXJ0aWNlcyIsImN5Y2xlIiwiQ3ljbGUiLCJmcm9tVmVydGV4TmFtZVBhcnRpYWxDeWNsZUFuZFN1Y2Nlc3NvclZlcnRpY2VzIiwiY3ljbGVzTGVuZ3RoIiwiZmlyc3RDeWNsaWNFZGdlIiwiZ2V0U291cmNlVmVydGV4TmFtZSIsImdldFRvcG9sb2dpY2FsbHlPcmRlcmVkVmVydGV4TmFtZXMiLCJhZGRWZXJ0ZXhCeVZlcnRleE5hbWUiLCJ2ZXJ0ZXhOYW1lcyIsImZvckVhY2giLCJyZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUiLCJmaWx0ZXJDeWNsaWNFZGdlcyIsImVkZ2UiLCJzdWNjZXNzIiwiYWRkRWRnZSIsImN5Y2xpY0VkZ2VzSW5jbHVkZXNFZGdlIiwiZWRnZXMiLCJyZW1vdmVTdHJhbmRlZFZlcnRpY2VzIiwiZWRnZVByZXNlbnQiLCJpc0VkZ2VQcmVzZW50IiwiZWRnZUN5Y2xpYyIsInJlbW92ZUVkZ2UiLCJzb3VyY2VWZXJ0ZXgiLCJzb3VyY2VWZXJ0ZXhTdHJhbmRlZCIsImlzU3RyYW5kZWQiLCJ0YXJnZXRWZXJ0ZXhTdHJhbmRlZCIsIkVkZ2UiLCJmcm9tU291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUiLCJnZXRFZGdlc0J5VGFyZ2V0VmVydGV4TmFtZSIsInJlbW92ZUVkZ2VzIiwiZ2V0RWRnZXNCeVNvdXJjZVZlcnRleE5hbWUiLCJEaXJlY3RlZEFjeWNsaWNHcmFwaCIsImZyb21Ob3RoaW5nIiwiZGlyZWN0ZWRHcmFwaCIsInZlcnRleExpdGVyYWxzIiwiZnJvbVZlcnRleE5hbWVzQW5kRWRnZXMiLCJncmFwaCIsIkdyYXBoIiwiYXJlQ3ljbGVzUHJlc2VudCIsImZyb21WZXJ0ZXhOYW1lcyIsInRvcG9sb2dpY2FsbHlPcmRlcmVkVmVydGljZXMiLCJnZXRUb3BvbG9naWNhbGx5T3JkZXJlZFZlcnRpY2VzIiwiZnJvbVRvcG9sb2dpY2FsbHlPcmRlcmVkVmVydGljZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7SUFFUUEsSyxHQUFrQkMseUIsQ0FBbEJELEs7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Q0Q7O0FBRUQsYUFBT3NFLGFBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBHcmFwaCB9IGZyb20gXCJvY2NhbS1rYWhuXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IERpcmVjdGVkQWN5Y2xpY0dyYXBoIH0gZnJvbSBcIm9jY2FtLXBlYXJjZS1rZWxseVwiO1xuXG5pbXBvcnQgRWRnZSBmcm9tIFwiLi9lZGdlXCI7XG5pbXBvcnQgQ3ljbGUgZnJvbSBcIi4vY3ljbGVcIjtcbmltcG9ydCBQYXJ0aWFsQ3ljbGUgZnJvbSBcIi4vcGFydGlhbEN5Y2xlXCI7XG5cbmltcG9ydCB7IHZlcnRleE5hbWVzRnJvbVZlcnRleExpdGVyYWxzLCBmb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2ggfSBmcm9tIFwiLi91dGlsaXRpZXMvdmVydGV4XCI7XG5pbXBvcnQgeyBlZGdlc0Zyb21WZXJ0ZXhMaXRlcmFscywgY2hlY2tFZGdlc0luY2x1ZGVzRWRnZSwgcmVtb3ZlRWRnZUZyb21FZGdlcywgZWRnZXNCeVNvdXJjZVZlcnRleE5hbWUsIGVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2VkZ2VcIjtcblxuY29uc3QgeyBmaXJzdCwgZmlsdGVyIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0ZWRHcmFwaCB7XG4gIGNvbnN0cnVjdG9yKGN5Y2xpY0VkZ2VzLCBkaXJlY3RlZEFjeWNsaWNHcmFwaCkge1xuICAgIHRoaXMuY3ljbGljRWRnZXMgPSBjeWNsaWNFZGdlcztcblxuICAgIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGggPSBkaXJlY3RlZEFjeWNsaWNHcmFwaDtcbiAgfVxuXG4gIGdldEN5Y2xpY0VkZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLmN5Y2xpY0VkZ2VzO1xuICB9XG5cbiAgZ2V0RGlyZWN0ZWRBY3ljbGljR3JhcGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGg7XG4gIH1cblxuICBnZXRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHsgcmV0dXJuIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTsgfVxuXG4gIGdldEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHsgcmV0dXJuIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7IH1cblxuICBnZXRQcmVkZWNlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHsgcmV0dXJuIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0UHJlZGVjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTsgfVxuXG4gIGdldFN1Y2Nlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHsgcmV0dXJuIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0U3VjY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7IH1cblxuICBhcmVDeWNsZXNQcmVzZW50QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBsZXQgY3ljbGVzUHJlc2VudCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdmVydGV4UHJlc2VudCA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgaWYgKHZlcnRleFByZXNlbnQpIHtcbiAgICAgIGNvbnN0IGZpcnN0Q3ljbGUgPSB0aGlzLmdldEZpcnN0Q3ljbGVCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICAgIGN5Y2xlc1ByZXNlbnQgPSAoZmlyc3RDeWNsZSAhPT0gbnVsbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGN5Y2xlc1ByZXNlbnQ7XG4gIH1cblxuICBpc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUodmVydGV4TmFtZSkgeyByZXR1cm4gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5pc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7IH1cblxuICBnZXRGaXJzdEN5Y2xlQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBsZXQgZmlyc3RDeWNsZSA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgdmVydGV4ID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSksXG4gICAgICAgICAgY3ljbGljRWRnZXMgPSB0aGlzLmN5Y2xpY0VkZ2VzLnNsaWNlKCksIC8vL1xuICAgICAgICAgIHBhcnRpYWxDeWNsZXMgPSBbXSxcbiAgICAgICAgICBjeWNsZXMgPSBbXTtcblxuICAgIGZvcndhcmRzRGVwdGhGaXJzdFNlYXJjaCh2ZXJ0ZXgsICh2aXNpdGVkVmVydGV4LCBnZXRQcmVkZWNlc3NvclZlcnRpY2VzKSA9PiB7XG4gICAgICBjb25zdCB2aXNpdGVkVmVydGV4TmFtZSA9IHZpc2l0ZWRWZXJ0ZXguZ2V0TmFtZSgpLFxuICAgICAgICAgICAgc291cmNlVmVydGV4TmFtZSA9IHZpc2l0ZWRWZXJ0ZXhOYW1lOyAvLy9cblxuICAgICAgZmlsdGVyKGN5Y2xpY0VkZ2VzLCAoY3ljbGljRWRnZSkgPT4ge1xuICAgICAgICBjb25zdCBtYXRjaGVzID0gY3ljbGljRWRnZS5tYXRjaFNvdXJjZVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSk7XG5cbiAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICBjb25zdCBwcmVkZWNlc3NvclZlcnRpY2VzID0gZ2V0UHJlZGVjZXNzb3JWZXJ0aWNlcygpLFxuICAgICAgICAgICAgICAgIHBhcnRpYWxDeWNsZSA9ICBQYXJ0aWFsQ3ljbGUuZnJvbUN5Y2xpY0VkZ2VBbmRQcmVkZWNlc3NvclZlcnRpY2VzKGN5Y2xpY0VkZ2UsIHByZWRlY2Vzc29yVmVydGljZXMpO1xuICAgICAgICAgIFxuICAgICAgICAgIHBhcnRpYWxDeWNsZXMucHVzaChwYXJ0aWFsQ3ljbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgY3ljbGljRWRnZXNMZW5ndGggPSBjeWNsaWNFZGdlcy5sZW5ndGgsXG4gICAgICAgICAgICB0ZXJtaW5hdGUgPSAoY3ljbGljRWRnZXNMZW5ndGggPT09IDApO1xuXG4gICAgICByZXR1cm4gdGVybWluYXRlO1xuICAgIH0pO1xuXG4gICAgcGFydGlhbEN5Y2xlcy5zb21lKChwYXJ0aWFsQ3ljbGUpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldFZlcnRleE5hbWUgPSBwYXJ0aWFsQ3ljbGUuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICAgIGZvcndhcmRzRGVwdGhGaXJzdFNlYXJjaCh0YXJnZXRWZXJ0ZXgsICh2aXNpdGVkVmVydGV4LCBnZXRQcmVkZWNlc3NvclZlcnRpY2VzKSA9PiB7XG4gICAgICAgIGNvbnN0IHZpc2l0ZWRWZXJ0ZXhOYW1lID0gdmlzaXRlZFZlcnRleC5nZXROYW1lKCk7XG5cbiAgICAgICAgaWYgKHZpc2l0ZWRWZXJ0ZXhOYW1lID09PSB2ZXJ0ZXhOYW1lKSB7XG4gICAgICAgICAgY29uc3QgcHJlZGVjZXNzb3JWZXJ0aWNlcyA9IGdldFByZWRlY2Vzc29yVmVydGljZXMoKSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzb3JWZXJ0aWNlcyA9IHByZWRlY2Vzc29yVmVydGljZXMsICAvLy9cbiAgICAgICAgICAgICAgICBjeWNsZSA9IEN5Y2xlLmZyb21WZXJ0ZXhOYW1lUGFydGlhbEN5Y2xlQW5kU3VjY2Vzc29yVmVydGljZXModmVydGV4TmFtZSwgcGFydGlhbEN5Y2xlLCBzdWNjZXNzb3JWZXJ0aWNlcyk7XG5cbiAgICAgICAgICBjeWNsZXMucHVzaChjeWNsZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjeWNsZXNMZW5ndGggPSBjeWNsZXMubGVuZ3RoLFxuICAgICAgICAgICAgICB0ZXJtaW5hdGUgPSAoY3ljbGVzTGVuZ3RoID4gMCk7XG5cbiAgICAgICAgcmV0dXJuIHRlcm1pbmF0ZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY3ljbGVzTGVuZ3RoID0gY3ljbGVzLmxlbmd0aDtcbiAgICBcbiAgICBpZiAoY3ljbGVzTGVuZ3RoID4gMCkge1xuICAgICAgZmlyc3RDeWNsZSA9IGZpcnN0KGN5Y2xlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpcnN0Q3ljbGU7XG4gIH1cblxuICBnZXRGaXJzdEN5Y2xlKCkge1xuICAgIGNvbnN0IGZpcnN0Q3ljbGljRWRnZSA9IGZpcnN0KHRoaXMuY3ljbGljRWRnZXMpLFxuICAgICAgICAgIGN5Y2xpY0VkZ2UgPSBmaXJzdEN5Y2xpY0VkZ2UsIC8vL1xuICAgICAgICAgIHNvdXJjZVZlcnRleE5hbWUgPSBjeWNsaWNFZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSxcbiAgICAgICAgICB2ZXJ0ZXhOYW1lID0gc291cmNlVmVydGV4TmFtZSwgIC8vL1xuICAgICAgICAgIGZpcnN0Q3ljbGUgPSB0aGlzLmdldEZpcnN0Q3ljbGVCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICByZXR1cm4gZmlyc3RDeWNsZTtcbiAgfVxuXG4gIGdldFRvcG9sb2dpY2FsbHlPcmRlcmVkVmVydGV4TmFtZXMoKSB7IHJldHVybiB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldFRvcG9sb2dpY2FsbHlPcmRlcmVkVmVydGV4TmFtZXMoKTsgfVxuXG4gIGFyZUN5Y2xlc1ByZXNlbnQoKSB7XG4gICAgY29uc3QgY3ljbGljRWRnZXNMZW5ndGggPSB0aGlzLmN5Y2xpY0VkZ2VzLmxlbmd0aCxcbiAgICAgICAgICBjeWNsZXNQcmVzZW50ID0gKGN5Y2xpY0VkZ2VzTGVuZ3RoID4gMCk7XG5cbiAgICByZXR1cm4gY3ljbGVzUHJlc2VudDtcbiAgfVxuXG4gIGFkZFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguYWRkVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpOyB9XG5cbiAgYWRkVmVydGljZXNCeVZlcnRleE5hbWVzKHZlcnRleE5hbWVzKSB7XG4gICAgdmVydGV4TmFtZXMuZm9yRWFjaCgodmVydGV4TmFtZSkgPT4gdGhpcy5hZGRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSkpO1xuICB9XG5cbiAgcmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLnJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgIHRoaXMuZmlsdGVyQ3ljbGljRWRnZXMoKTtcbiAgfVxuXG4gIHJlbW92ZVZlcnRpY2VzQnlWZXJ0ZXhOYW1lcyh2ZXJ0ZXhOYW1lcykge1xuICAgIHZlcnRleE5hbWVzLmZvckVhY2goKHZlcnRleE5hbWUpID0+IHRoaXMucmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpKTtcbiAgfVxuXG4gIGFkZEVkZ2UoZWRnZSkge1xuICAgIGNvbnN0IHN1Y2Nlc3MgPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmFkZEVkZ2UoZWRnZSk7XG4gICAgXG4gICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICBjb25zdCBjeWNsaWNFZGdlc0luY2x1ZGVzRWRnZSA9IGNoZWNrRWRnZXNJbmNsdWRlc0VkZ2UoZWRnZSwgdGhpcy5jeWNsaWNFZGdlcyk7XG5cbiAgICAgIGlmICghY3ljbGljRWRnZXNJbmNsdWRlc0VkZ2UpIHtcbiAgICAgICAgY29uc3QgY3ljbGljRWRnZSA9IGVkZ2U7ICAvLy9cblxuICAgICAgICB0aGlzLmN5Y2xpY0VkZ2VzLnB1c2goY3ljbGljRWRnZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICBhZGRFZGdlcyhlZGdlcykge1xuICAgIGVkZ2VzLmZvckVhY2goKGVkZ2UpID0+IHRoaXMuYWRkRWRnZShlZGdlKSk7XG4gIH1cblxuICByZW1vdmVFZGdlKGVkZ2UsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMgPSBmYWxzZSkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VzSW5jbHVkZXNFZGdlID0gY2hlY2tFZGdlc0luY2x1ZGVzRWRnZShlZGdlLCB0aGlzLmN5Y2xpY0VkZ2VzKSxcbiAgICAgICAgICBlZGdlUHJlc2VudCA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguaXNFZGdlUHJlc2VudChlZGdlKSxcbiAgICAgICAgICBlZGdlQ3ljbGljID0gY3ljbGljRWRnZXNJbmNsdWRlc0VkZ2U7IC8vL1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKGVkZ2VDeWNsaWMpIHtcbiAgICAgIGNvbnN0IGN5Y2xpY0VkZ2UgPSBlZGdlOyAgLy8vXG5cbiAgICAgIHJlbW92ZUVkZ2VGcm9tRWRnZXMoY3ljbGljRWRnZSwgdGhpcy5jeWNsaWNFZGdlcyk7XG4gICAgfSBlbHNlIGlmIChlZGdlUHJlc2VudCkge1xuICAgICAgdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5yZW1vdmVFZGdlKGVkZ2UpO1xuXG4gICAgICBpZiAocmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcykge1xuICAgICAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gZWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICAgIHRhcmdldFZlcnRleE5hbWUgPSBlZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKSxcbiAgICAgICAgICAgICAgc291cmNlVmVydGV4ID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSksXG4gICAgICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpLFxuICAgICAgICAgICAgICBzb3VyY2VWZXJ0ZXhTdHJhbmRlZCA9IHNvdXJjZVZlcnRleC5pc1N0cmFuZGVkKCksXG4gICAgICAgICAgICAgIHRhcmdldFZlcnRleFN0cmFuZGVkID0gdGFyZ2V0VmVydGV4LmlzU3RyYW5kZWQoKTtcblxuICAgICAgICBpZiAoc291cmNlVmVydGV4U3RyYW5kZWQpIHtcbiAgICAgICAgICB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLnJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0YXJnZXRWZXJ0ZXhTdHJhbmRlZCkge1xuICAgICAgICAgIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGgucmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5maWx0ZXJDeWNsaWNFZGdlcygpO1xuICB9XG5cbiAgcmVtb3ZlRWRnZXMoZWRnZXMsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMgPSBmYWxzZSkge1xuICAgIGVkZ2VzLmZvckVhY2goKGVkZ2UpID0+IHRoaXMucmVtb3ZlRWRnZShlZGdlLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzKSk7XG4gIH1cblxuICBhZGRFZGdlQnlWZXJ0ZXhOYW1lcyhzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgZWRnZSA9IEVkZ2UuZnJvbVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgdGhpcy5hZGRFZGdlKGVkZ2UpO1xuICB9XG5cbiAgcmVtb3ZlRWRnZUJ5VmVydGV4TmFtZXMoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSwgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgZWRnZSA9IEVkZ2UuZnJvbVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgdGhpcy5yZW1vdmVFZGdlKGVkZ2UsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMpO1xuICB9XG5cbiAgcmVtb3ZlRWRnZXNCeVRhcmdldFZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSwgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgY3ljbGljRWRnZXMgPSBlZGdlc0J5VGFyZ2V0VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lLCB0aGlzLmN5Y2xpY0VkZ2VzKSxcbiAgICAgICAgICBlZGdlcyA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0RWRnZXNCeVRhcmdldFZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICB0aGlzLnJlbW92ZUVkZ2VzKGN5Y2xpY0VkZ2VzLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzKTtcblxuICAgIHRoaXMucmVtb3ZlRWRnZXMoZWRnZXMsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMpO1xuICB9XG5cbiAgcmVtb3ZlRWRnZXNCeVNvdXJjZVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgY3ljbGljRWRnZXMgPSBlZGdlc0J5U291cmNlVmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0aGlzLmN5Y2xpY0VkZ2VzKSxcbiAgICAgICAgICBlZGdlcyA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0RWRnZXNCeVNvdXJjZVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSk7XG5cbiAgICB0aGlzLnJlbW92ZUVkZ2VzKGN5Y2xpY0VkZ2VzLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzKTtcblxuICAgIHRoaXMucmVtb3ZlRWRnZXMoZWRnZXMsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMpO1xuICB9XG5cbiAgcmVtb3ZlQWxsRWRnZXNBbmRWZXJ0aWNlcygpIHtcbiAgICB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoID0gRGlyZWN0ZWRBY3ljbGljR3JhcGguZnJvbU5vdGhpbmcoKTtcblxuICAgIHRoaXMuY3ljbGljRWRnZXMgPSBbXTtcbiAgfVxuXG4gIGZpbHRlckN5Y2xpY0VkZ2VzKCkge1xuICAgIGZpbHRlcih0aGlzLmN5Y2xpY0VkZ2VzLCAoY3ljbGljRWRnZSkgPT4ge1xuICAgICAgY29uc3QgZWRnZSA9IGN5Y2xpY0VkZ2UsICAvLy9cbiAgICAgICAgICAgIHN1Y2Nlc3MgPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmFkZEVkZ2UoZWRnZSk7XG5cbiAgICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBjeWNsaWNFZGdlcyA9IFtdLFxuICAgICAgICAgIGRpcmVjdGVkQWN5Y2xpY0dyYXBoID0gRGlyZWN0ZWRBY3ljbGljR3JhcGguZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBkaXJlY3RlZEdyYXBoID0gbmV3IERpcmVjdGVkR3JhcGgoY3ljbGljRWRnZXMsIGRpcmVjdGVkQWN5Y2xpY0dyYXBoKTtcbiAgICBcbiAgICByZXR1cm4gZGlyZWN0ZWRHcmFwaDsgICAgXG4gIH1cblxuICBzdGF0aWMgZnJvbVZlcnRleExpdGVyYWxzKHZlcnRleExpdGVyYWxzKSB7XG4gICAgY29uc3QgdmVydGV4TmFtZXMgPSB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhMaXRlcmFscyh2ZXJ0ZXhMaXRlcmFscyksXG4gICAgICAgICAgZWRnZXMgPSBlZGdlc0Zyb21WZXJ0ZXhMaXRlcmFscyh2ZXJ0ZXhMaXRlcmFscyksXG4gICAgICAgICAgZGlyZWN0ZWRHcmFwaCA9IERpcmVjdGVkR3JhcGguZnJvbVZlcnRleE5hbWVzQW5kRWRnZXModmVydGV4TmFtZXMsIGVkZ2VzKTtcblxuICAgIHJldHVybiBkaXJlY3RlZEdyYXBoO1xuICB9XG5cbiAgc3RhdGljIGZyb21WZXJ0ZXhOYW1lc0FuZEVkZ2VzKHZlcnRleE5hbWVzLCBlZGdlcykge1xuICAgIGxldCBkaXJlY3RlZEdyYXBoO1xuXG4gICAgY29uc3QgZ3JhcGggPSBHcmFwaC5mcm9tVmVydGV4TmFtZXNBbmRFZGdlcyh2ZXJ0ZXhOYW1lcywgZWRnZXMpLFxuICAgICAgICAgIGN5Y2xlc1ByZXNlbnQgPSBncmFwaC5hcmVDeWNsZXNQcmVzZW50KCk7XG5cbiAgICBpZiAoY3ljbGVzUHJlc2VudCkge1xuICAgICAgY29uc3QgY3ljbGljRWRnZXMgPSBbXSxcbiAgICAgICAgICAgIGRpcmVjdGVkQWN5Y2xpY0dyYXBoID0gRGlyZWN0ZWRBY3ljbGljR3JhcGguZnJvbVZlcnRleE5hbWVzKHZlcnRleE5hbWVzKTtcblxuICAgICAgZGlyZWN0ZWRHcmFwaCA9IG5ldyBEaXJlY3RlZEdyYXBoKGN5Y2xpY0VkZ2VzLCBkaXJlY3RlZEFjeWNsaWNHcmFwaCk7XG5cbiAgICAgIGVkZ2VzLmZvckVhY2goKGVkZ2UpID0+IGRpcmVjdGVkR3JhcGguYWRkRWRnZShlZGdlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRvcG9sb2dpY2FsbHlPcmRlcmVkVmVydGljZXMgPSBncmFwaC5nZXRUb3BvbG9naWNhbGx5T3JkZXJlZFZlcnRpY2VzKCksXG4gICAgICAgICAgICBjeWNsaWNFZGdlcyA9IFtdLFxuICAgICAgICAgICAgZGlyZWN0ZWRBY3ljbGljR3JhcGggPSBEaXJlY3RlZEFjeWNsaWNHcmFwaC5mcm9tVG9wb2xvZ2ljYWxseU9yZGVyZWRWZXJ0aWNlcyh0b3BvbG9naWNhbGx5T3JkZXJlZFZlcnRpY2VzKTtcblxuICAgICAgZGlyZWN0ZWRHcmFwaCA9IG5ldyBEaXJlY3RlZEdyYXBoKGN5Y2xpY0VkZ2VzLCBkaXJlY3RlZEFjeWNsaWNHcmFwaCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdGVkR3JhcGg7XG4gIH1cbn1cbiJdfQ==