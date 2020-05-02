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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpcmVjdGVkR3JhcGguanMiXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsImZpbHRlciIsIkRpcmVjdGVkR3JhcGgiLCJjeWNsaWNFZGdlcyIsImRpcmVjdGVkQWN5Y2xpY0dyYXBoIiwidmVydGV4TmFtZSIsImdldFByZWRlY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUiLCJnZXRTdWNjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSIsImN5Y2xlc1ByZXNlbnQiLCJ2ZXJ0ZXhQcmVzZW50IiwiaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lIiwiZmlyc3RDeWNsZSIsImdldEZpcnN0Q3ljbGVCeVZlcnRleE5hbWUiLCJ2ZXJ0ZXgiLCJnZXRWZXJ0ZXhCeVZlcnRleE5hbWUiLCJzbGljZSIsInBhcnRpYWxDeWNsZXMiLCJjeWNsZXMiLCJ2aXNpdGVkVmVydGV4IiwiZ2V0UHJlZGVjZXNzb3JWZXJ0aWNlcyIsInZpc2l0ZWRWZXJ0ZXhOYW1lIiwiZ2V0TmFtZSIsInNvdXJjZVZlcnRleE5hbWUiLCJjeWNsaWNFZGdlIiwibWF0Y2hlcyIsIm1hdGNoU291cmNlVmVydGV4TmFtZSIsInByZWRlY2Vzc29yVmVydGljZXMiLCJwYXJ0aWFsQ3ljbGUiLCJQYXJ0aWFsQ3ljbGUiLCJmcm9tQ3ljbGljRWRnZUFuZFByZWRlY2Vzc29yVmVydGljZXMiLCJwdXNoIiwiY3ljbGljRWRnZXNMZW5ndGgiLCJsZW5ndGgiLCJ0ZXJtaW5hdGUiLCJzb21lIiwidGFyZ2V0VmVydGV4TmFtZSIsImdldFRhcmdldFZlcnRleE5hbWUiLCJ0YXJnZXRWZXJ0ZXgiLCJzdWNjZXNzb3JWZXJ0aWNlcyIsImN5Y2xlIiwiQ3ljbGUiLCJmcm9tVmVydGV4TmFtZVBhcnRpYWxDeWNsZUFuZFN1Y2Nlc3NvclZlcnRpY2VzIiwiY3ljbGVzTGVuZ3RoIiwiZmlyc3RDeWNsaWNFZGdlIiwiZ2V0U291cmNlVmVydGV4TmFtZSIsImdldFRvcG9sb2dpY2FsbHlPcmRlcmVkVmVydGV4TmFtZXMiLCJhZGRWZXJ0ZXhCeVZlcnRleE5hbWUiLCJ2ZXJ0ZXhOYW1lcyIsImZvckVhY2giLCJyZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUiLCJmaWx0ZXJDeWNsaWNFZGdlcyIsImVkZ2UiLCJzdWNjZXNzIiwiYWRkRWRnZSIsImN5Y2xpY0VkZ2VzSW5jbHVkZXNFZGdlIiwiZWRnZXMiLCJyZW1vdmVTdHJhbmRlZFZlcnRpY2VzIiwiZWRnZVByZXNlbnQiLCJpc0VkZ2VQcmVzZW50IiwiZWRnZUN5Y2xpYyIsInJlbW92ZUVkZ2UiLCJzb3VyY2VWZXJ0ZXgiLCJzb3VyY2VWZXJ0ZXhTdHJhbmRlZCIsImlzU3RyYW5kZWQiLCJ0YXJnZXRWZXJ0ZXhTdHJhbmRlZCIsIkVkZ2UiLCJmcm9tU291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUiLCJnZXRFZGdlc0J5VGFyZ2V0VmVydGV4TmFtZSIsInJlbW92ZUVkZ2VzIiwiZ2V0RWRnZXNCeVNvdXJjZVZlcnRleE5hbWUiLCJEaXJlY3RlZEFjeWNsaWNHcmFwaCIsImZyb21Ob3RoaW5nIiwiZGlyZWN0ZWRHcmFwaCIsInZlcnRleExpdGVyYWxzIiwiZnJvbVZlcnRleE5hbWVzQW5kRWRnZXMiLCJncmFwaCIsIkdyYXBoIiwiYXJlQ3ljbGVzUHJlc2VudCIsImZyb21WZXJ0ZXhOYW1lcyIsInRvcG9sb2dpY2FsbHlPcmRlcmVkVmVydGljZXMiLCJnZXRUb3BvbG9naWNhbGx5T3JkZXJlZFZlcnRpY2VzIiwiZnJvbVRvcG9sb2dpY2FsbHlPcmRlcmVkVmVydGljZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7SUFFUUEsSyxHQUFrQkMseUIsQ0FBbEJELEs7SUFBT0UsTSxHQUFXRCx5QixDQUFYQyxNOztJQUVNQyxhO0FBQ25CLHlCQUFZQyxXQUFaLEVBQXlCQyxvQkFBekIsRUFBK0M7QUFBQTs7QUFDN0MsU0FBS0QsV0FBTCxH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QUFhUSxLLEVBQU87QUFDakQsVUFBSWlCLGFBQUo7O0FBRUEsVUFBTUcsS0FBSyxHQUFHQyxpQkFBTUYsdUJBQU4sQ0FBOEIzQixXQUE5QixFQUEyQ1EsS0FBM0MsQ0FBZDtBQUFBLFVBQ00vQyxhQUFhLEdBQUdtRSxLQUFLLENBQUNFLGdCQUFOLEVBRHRCOztBQUdBLFVBQUlyRSxhQUFKLEVBQW1CO0FBQ2pCLFlBQU1MLFdBQVcsR0FBRyxFQUFwQjtBQUFBLFlBQ01DLG9CQUFvQixHQUFHa0UsdUNBQXFCUSxlQUFyQixDQUFxQy9CLFdBQXJDLENBRDdCOztBQUdBeUIsUUFBQUEsYUFBYSxHQUFHLElBQUl0RSxhQUFKLENBQWtCQyxXQUFsQixFQUErQkMsb0JBQS9CLENBQWhCO0FBRUFtRCxRQUFBQSxLQUFLLENBQUNQLE9BQU4sQ0FBYyxVQUFDRyxJQUFEO0FBQUEsaUJBQVVxQixhQUFhLENBQUNuQixPQUFkLENBQXNCRixJQUF0QixDQUFWO0FBQUEsU0FBZDtBQUNELE9BUEQsTUFPTztBQUNMLFlBQU00Qiw0QkFBNEIsR0FBR0osS0FBSyxDQUFDSywrQkFBTixFQUFyQztBQUFBLFlBQ003RSxZQUFXLEdBQUcsRUFEcEI7QUFBQSxZQUVNQyxxQkFBb0IsR0FBR2tFLHVDQUFxQlcsZ0NBQXJCLENBQXNERiw0QkFBdEQsQ0FGN0I7O0FBSUFQLFFBQUFBLGFBQWEsR0FBRyxJQUFJdEUsYUFBSixDQUFrQkMsWUFBbEIsRUFBK0JDLHFCQUEvQixDQUFoQjtBQUNEOztBQUVELGFBQU9vRSxhQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgR3JhcGggfSBmcm9tIFwib2NjYW0ta2FoblwiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5pbXBvcnQgeyBEaXJlY3RlZEFjeWNsaWNHcmFwaCB9IGZyb20gXCJvY2NhbS1wZWFyY2Uta2VsbHlcIjtcblxuaW1wb3J0IEVkZ2UgZnJvbSBcIi4vZWRnZVwiO1xuaW1wb3J0IEN5Y2xlIGZyb20gXCIuL2N5Y2xlXCI7XG5pbXBvcnQgUGFydGlhbEN5Y2xlIGZyb20gXCIuL3BhcnRpYWxDeWNsZVwiO1xuXG5pbXBvcnQgeyB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhMaXRlcmFscywgZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3ZlcnRleFwiO1xuaW1wb3J0IHsgZWRnZXNGcm9tVmVydGV4TGl0ZXJhbHMsIGNoZWNrRWRnZXNJbmNsdWRlc0VkZ2UsIHJlbW92ZUVkZ2VGcm9tRWRnZXMsIGVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lLCBlZGdlc0J5VGFyZ2V0VmVydGV4TmFtZSB9IGZyb20gXCIuL3V0aWxpdGllcy9lZGdlXCI7XG5cbmNvbnN0IHsgZmlyc3QsIGZpbHRlciB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdGVkR3JhcGgge1xuICBjb25zdHJ1Y3RvcihjeWNsaWNFZGdlcywgZGlyZWN0ZWRBY3ljbGljR3JhcGgpIHtcbiAgICB0aGlzLmN5Y2xpY0VkZ2VzID0gY3ljbGljRWRnZXM7XG5cbiAgICB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoID0gZGlyZWN0ZWRBY3ljbGljR3JhcGg7XG4gIH1cblxuICBnZXRDeWNsaWNFZGdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5jeWNsaWNFZGdlcztcbiAgfVxuXG4gIGdldERpcmVjdGVkQWN5Y2xpY0dyYXBoKCkge1xuICAgIHJldHVybiB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoO1xuICB9XG5cbiAgZ2V0UHJlZGVjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7IHJldHVybiB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldFByZWRlY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7IH1cblxuICBnZXRTdWNjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7IHJldHVybiB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldFN1Y2Nlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpOyB9XG5cbiAgYXJlQ3ljbGVzUHJlc2VudEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgbGV0IGN5Y2xlc1ByZXNlbnQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZlcnRleFByZXNlbnQgPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgIGlmICh2ZXJ0ZXhQcmVzZW50KSB7XG4gICAgICBjb25zdCBmaXJzdEN5Y2xlID0gdGhpcy5nZXRGaXJzdEN5Y2xlQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgICBjeWNsZXNQcmVzZW50ID0gKGZpcnN0Q3ljbGUgIT09IG51bGwpO1xuICAgIH1cblxuICAgIHJldHVybiBjeWNsZXNQcmVzZW50O1xuICB9XG5cbiAgaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHsgcmV0dXJuIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpOyB9XG5cbiAgZ2V0Rmlyc3RDeWNsZUJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgbGV0IGZpcnN0Q3ljbGUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IHZlcnRleCA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpLFxuICAgICAgICAgIGN5Y2xpY0VkZ2VzID0gdGhpcy5jeWNsaWNFZGdlcy5zbGljZSgpLCAvLy9cbiAgICAgICAgICBwYXJ0aWFsQ3ljbGVzID0gW10sXG4gICAgICAgICAgY3ljbGVzID0gW107XG5cbiAgICBmb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2godmVydGV4LCAodmlzaXRlZFZlcnRleCwgZ2V0UHJlZGVjZXNzb3JWZXJ0aWNlcykgPT4ge1xuICAgICAgY29uc3QgdmlzaXRlZFZlcnRleE5hbWUgPSB2aXNpdGVkVmVydGV4LmdldE5hbWUoKSxcbiAgICAgICAgICAgIHNvdXJjZVZlcnRleE5hbWUgPSB2aXNpdGVkVmVydGV4TmFtZTsgLy8vXG5cbiAgICAgIGZpbHRlcihjeWNsaWNFZGdlcywgKGN5Y2xpY0VkZ2UpID0+IHtcbiAgICAgICAgY29uc3QgbWF0Y2hlcyA9IGN5Y2xpY0VkZ2UubWF0Y2hTb3VyY2VWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpO1xuXG4gICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgY29uc3QgcHJlZGVjZXNzb3JWZXJ0aWNlcyA9IGdldFByZWRlY2Vzc29yVmVydGljZXMoKSxcbiAgICAgICAgICAgICAgICBwYXJ0aWFsQ3ljbGUgPSAgUGFydGlhbEN5Y2xlLmZyb21DeWNsaWNFZGdlQW5kUHJlZGVjZXNzb3JWZXJ0aWNlcyhjeWNsaWNFZGdlLCBwcmVkZWNlc3NvclZlcnRpY2VzKTtcbiAgICAgICAgICBcbiAgICAgICAgICBwYXJ0aWFsQ3ljbGVzLnB1c2gocGFydGlhbEN5Y2xlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGN5Y2xpY0VkZ2VzTGVuZ3RoID0gY3ljbGljRWRnZXMubGVuZ3RoLFxuICAgICAgICAgICAgdGVybWluYXRlID0gKGN5Y2xpY0VkZ2VzTGVuZ3RoID09PSAwKTtcblxuICAgICAgcmV0dXJuIHRlcm1pbmF0ZTtcbiAgICB9KTtcblxuICAgIHBhcnRpYWxDeWNsZXMuc29tZSgocGFydGlhbEN5Y2xlKSA9PiB7XG4gICAgICBjb25zdCB0YXJnZXRWZXJ0ZXhOYW1lID0gcGFydGlhbEN5Y2xlLmdldFRhcmdldFZlcnRleE5hbWUoKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgICBmb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2godGFyZ2V0VmVydGV4LCAodmlzaXRlZFZlcnRleCwgZ2V0UHJlZGVjZXNzb3JWZXJ0aWNlcykgPT4ge1xuICAgICAgICBjb25zdCB2aXNpdGVkVmVydGV4TmFtZSA9IHZpc2l0ZWRWZXJ0ZXguZ2V0TmFtZSgpO1xuXG4gICAgICAgIGlmICh2aXNpdGVkVmVydGV4TmFtZSA9PT0gdmVydGV4TmFtZSkge1xuICAgICAgICAgIGNvbnN0IHByZWRlY2Vzc29yVmVydGljZXMgPSBnZXRQcmVkZWNlc3NvclZlcnRpY2VzKCksXG4gICAgICAgICAgICAgICAgc3VjY2Vzc29yVmVydGljZXMgPSBwcmVkZWNlc3NvclZlcnRpY2VzLCAgLy8vXG4gICAgICAgICAgICAgICAgY3ljbGUgPSBDeWNsZS5mcm9tVmVydGV4TmFtZVBhcnRpYWxDeWNsZUFuZFN1Y2Nlc3NvclZlcnRpY2VzKHZlcnRleE5hbWUsIHBhcnRpYWxDeWNsZSwgc3VjY2Vzc29yVmVydGljZXMpO1xuXG4gICAgICAgICAgY3ljbGVzLnB1c2goY3ljbGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY3ljbGVzTGVuZ3RoID0gY3ljbGVzLmxlbmd0aCxcbiAgICAgICAgICAgICAgdGVybWluYXRlID0gKGN5Y2xlc0xlbmd0aCA+IDApO1xuXG4gICAgICAgIHJldHVybiB0ZXJtaW5hdGU7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGN5Y2xlc0xlbmd0aCA9IGN5Y2xlcy5sZW5ndGg7XG4gICAgXG4gICAgaWYgKGN5Y2xlc0xlbmd0aCA+IDApIHtcbiAgICAgIGZpcnN0Q3ljbGUgPSBmaXJzdChjeWNsZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBmaXJzdEN5Y2xlO1xuICB9XG5cbiAgZ2V0Rmlyc3RDeWNsZSgpIHtcbiAgICBjb25zdCBmaXJzdEN5Y2xpY0VkZ2UgPSBmaXJzdCh0aGlzLmN5Y2xpY0VkZ2VzKSxcbiAgICAgICAgICBjeWNsaWNFZGdlID0gZmlyc3RDeWNsaWNFZGdlLCAvLy9cbiAgICAgICAgICBzb3VyY2VWZXJ0ZXhOYW1lID0gY3ljbGljRWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgdmVydGV4TmFtZSA9IHNvdXJjZVZlcnRleE5hbWUsICAvLy9cbiAgICAgICAgICBmaXJzdEN5Y2xlID0gdGhpcy5nZXRGaXJzdEN5Y2xlQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgcmV0dXJuIGZpcnN0Q3ljbGU7XG4gIH1cblxuICBnZXRUb3BvbG9naWNhbGx5T3JkZXJlZFZlcnRleE5hbWVzKCkgeyByZXR1cm4gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRUb3BvbG9naWNhbGx5T3JkZXJlZFZlcnRleE5hbWVzKCk7IH1cblxuICBhcmVDeWNsZXNQcmVzZW50KCkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VzTGVuZ3RoID0gdGhpcy5jeWNsaWNFZGdlcy5sZW5ndGgsXG4gICAgICAgICAgY3ljbGVzUHJlc2VudCA9IChjeWNsaWNFZGdlc0xlbmd0aCA+IDApO1xuXG4gICAgcmV0dXJuIGN5Y2xlc1ByZXNlbnQ7XG4gIH1cblxuICBhZGRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSkgeyB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmFkZFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTsgfVxuXG4gIGFkZFZlcnRpY2VzQnlWZXJ0ZXhOYW1lcyh2ZXJ0ZXhOYW1lcykge1xuICAgIHZlcnRleE5hbWVzLmZvckVhY2goKHZlcnRleE5hbWUpID0+IHRoaXMuYWRkVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpKTtcbiAgfVxuXG4gIHJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5yZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICB0aGlzLmZpbHRlckN5Y2xpY0VkZ2VzKCk7XG4gIH1cblxuICByZW1vdmVWZXJ0aWNlc0J5VmVydGV4TmFtZXModmVydGV4TmFtZXMpIHtcbiAgICB2ZXJ0ZXhOYW1lcy5mb3JFYWNoKCh2ZXJ0ZXhOYW1lKSA9PiB0aGlzLnJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSk7XG4gIH1cblxuICBhZGRFZGdlKGVkZ2UpIHtcbiAgICBjb25zdCBzdWNjZXNzID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5hZGRFZGdlKGVkZ2UpO1xuICAgIFxuICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgY29uc3QgY3ljbGljRWRnZXNJbmNsdWRlc0VkZ2UgPSBjaGVja0VkZ2VzSW5jbHVkZXNFZGdlKGVkZ2UsIHRoaXMuY3ljbGljRWRnZXMpO1xuXG4gICAgICBpZiAoIWN5Y2xpY0VkZ2VzSW5jbHVkZXNFZGdlKSB7XG4gICAgICAgIGNvbnN0IGN5Y2xpY0VkZ2UgPSBlZGdlOyAgLy8vXG5cbiAgICAgICAgdGhpcy5jeWNsaWNFZGdlcy5wdXNoKGN5Y2xpY0VkZ2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgYWRkRWRnZXMoZWRnZXMpIHtcbiAgICBlZGdlcy5mb3JFYWNoKChlZGdlKSA9PiB0aGlzLmFkZEVkZ2UoZWRnZSkpO1xuICB9XG5cbiAgcmVtb3ZlRWRnZShlZGdlLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzID0gZmFsc2UpIHtcbiAgICBjb25zdCBjeWNsaWNFZGdlc0luY2x1ZGVzRWRnZSA9IGNoZWNrRWRnZXNJbmNsdWRlc0VkZ2UoZWRnZSwgdGhpcy5jeWNsaWNFZGdlcyksXG4gICAgICAgICAgZWRnZVByZXNlbnQgPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmlzRWRnZVByZXNlbnQoZWRnZSksXG4gICAgICAgICAgZWRnZUN5Y2xpYyA9IGN5Y2xpY0VkZ2VzSW5jbHVkZXNFZGdlOyAvLy9cblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmIChlZGdlQ3ljbGljKSB7XG4gICAgICBjb25zdCBjeWNsaWNFZGdlID0gZWRnZTsgIC8vL1xuXG4gICAgICByZW1vdmVFZGdlRnJvbUVkZ2VzKGN5Y2xpY0VkZ2UsIHRoaXMuY3ljbGljRWRnZXMpO1xuICAgIH0gZWxzZSBpZiAoZWRnZVByZXNlbnQpIHtcbiAgICAgIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGgucmVtb3ZlRWRnZShlZGdlKTtcblxuICAgICAgaWYgKHJlbW92ZVN0cmFuZGVkVmVydGljZXMpIHtcbiAgICAgICAgY29uc3Qgc291cmNlVmVydGV4TmFtZSA9IGVkZ2UuZ2V0U291cmNlVmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gZWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICAgIHNvdXJjZVZlcnRleCA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpLFxuICAgICAgICAgICAgICB0YXJnZXRWZXJ0ZXggPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldFZlcnRleEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICAgICAgc291cmNlVmVydGV4U3RyYW5kZWQgPSBzb3VyY2VWZXJ0ZXguaXNTdHJhbmRlZCgpLFxuICAgICAgICAgICAgICB0YXJnZXRWZXJ0ZXhTdHJhbmRlZCA9IHRhcmdldFZlcnRleC5pc1N0cmFuZGVkKCk7XG5cbiAgICAgICAgaWYgKHNvdXJjZVZlcnRleFN0cmFuZGVkKSB7XG4gICAgICAgICAgdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5yZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGFyZ2V0VmVydGV4U3RyYW5kZWQpIHtcbiAgICAgICAgICB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLnJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZmlsdGVyQ3ljbGljRWRnZXMoKTtcbiAgfVxuXG4gIHJlbW92ZUVkZ2VzKGVkZ2VzLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzID0gZmFsc2UpIHtcbiAgICBlZGdlcy5mb3JFYWNoKChlZGdlKSA9PiB0aGlzLnJlbW92ZUVkZ2UoZWRnZSwgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcykpO1xuICB9XG5cbiAgYWRkRWRnZUJ5VmVydGV4TmFtZXMoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSkge1xuICAgIGNvbnN0IGVkZ2UgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgIHRoaXMuYWRkRWRnZShlZGdlKTtcbiAgfVxuXG4gIHJlbW92ZUVkZ2VCeVZlcnRleE5hbWVzKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMgPSBmYWxzZSkge1xuICAgIGNvbnN0IGVkZ2UgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgIHRoaXMucmVtb3ZlRWRnZShlZGdlLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzKTtcbiAgfVxuXG4gIHJlbW92ZUVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMgPSBmYWxzZSkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VzID0gZWRnZXNCeVRhcmdldFZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSwgdGhpcy5jeWNsaWNFZGdlcyksXG4gICAgICAgICAgZWRnZXMgPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldEVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgdGhpcy5yZW1vdmVFZGdlcyhjeWNsaWNFZGdlcywgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyk7XG5cbiAgICB0aGlzLnJlbW92ZUVkZ2VzKGVkZ2VzLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzKTtcbiAgfVxuXG4gIHJlbW92ZUVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMgPSBmYWxzZSkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VzID0gZWRnZXNCeVNvdXJjZVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGhpcy5jeWNsaWNFZGdlcyksXG4gICAgICAgICAgZWRnZXMgPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldEVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpO1xuXG4gICAgdGhpcy5yZW1vdmVFZGdlcyhjeWNsaWNFZGdlcywgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyk7XG5cbiAgICB0aGlzLnJlbW92ZUVkZ2VzKGVkZ2VzLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzKTtcbiAgfVxuXG4gIHJlbW92ZUFsbEVkZ2VzQW5kVmVydGljZXMoKSB7XG4gICAgdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaCA9IERpcmVjdGVkQWN5Y2xpY0dyYXBoLmZyb21Ob3RoaW5nKCk7XG5cbiAgICB0aGlzLmN5Y2xpY0VkZ2VzID0gW107XG4gIH1cblxuICBmaWx0ZXJDeWNsaWNFZGdlcygpIHtcbiAgICBmaWx0ZXIodGhpcy5jeWNsaWNFZGdlcywgKGN5Y2xpY0VkZ2UpID0+IHtcbiAgICAgIGNvbnN0IGVkZ2UgPSBjeWNsaWNFZGdlLCAgLy8vXG4gICAgICAgICAgICBzdWNjZXNzID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5hZGRFZGdlKGVkZ2UpO1xuXG4gICAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgY3ljbGljRWRnZXMgPSBbXSxcbiAgICAgICAgICBkaXJlY3RlZEFjeWNsaWNHcmFwaCA9IERpcmVjdGVkQWN5Y2xpY0dyYXBoLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgZGlyZWN0ZWRHcmFwaCA9IG5ldyBEaXJlY3RlZEdyYXBoKGN5Y2xpY0VkZ2VzLCBkaXJlY3RlZEFjeWNsaWNHcmFwaCk7XG4gICAgXG4gICAgcmV0dXJuIGRpcmVjdGVkR3JhcGg7ICAgIFxuICB9XG5cbiAgc3RhdGljIGZyb21WZXJ0ZXhMaXRlcmFscyh2ZXJ0ZXhMaXRlcmFscykge1xuICAgIGNvbnN0IHZlcnRleE5hbWVzID0gdmVydGV4TmFtZXNGcm9tVmVydGV4TGl0ZXJhbHModmVydGV4TGl0ZXJhbHMpLFxuICAgICAgICAgIGVkZ2VzID0gZWRnZXNGcm9tVmVydGV4TGl0ZXJhbHModmVydGV4TGl0ZXJhbHMpLFxuICAgICAgICAgIGRpcmVjdGVkR3JhcGggPSBEaXJlY3RlZEdyYXBoLmZyb21WZXJ0ZXhOYW1lc0FuZEVkZ2VzKHZlcnRleE5hbWVzLCBlZGdlcyk7XG5cbiAgICByZXR1cm4gZGlyZWN0ZWRHcmFwaDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmVydGV4TmFtZXNBbmRFZGdlcyh2ZXJ0ZXhOYW1lcywgZWRnZXMpIHtcbiAgICBsZXQgZGlyZWN0ZWRHcmFwaDtcblxuICAgIGNvbnN0IGdyYXBoID0gR3JhcGguZnJvbVZlcnRleE5hbWVzQW5kRWRnZXModmVydGV4TmFtZXMsIGVkZ2VzKSxcbiAgICAgICAgICBjeWNsZXNQcmVzZW50ID0gZ3JhcGguYXJlQ3ljbGVzUHJlc2VudCgpO1xuXG4gICAgaWYgKGN5Y2xlc1ByZXNlbnQpIHtcbiAgICAgIGNvbnN0IGN5Y2xpY0VkZ2VzID0gW10sXG4gICAgICAgICAgICBkaXJlY3RlZEFjeWNsaWNHcmFwaCA9IERpcmVjdGVkQWN5Y2xpY0dyYXBoLmZyb21WZXJ0ZXhOYW1lcyh2ZXJ0ZXhOYW1lcyk7XG5cbiAgICAgIGRpcmVjdGVkR3JhcGggPSBuZXcgRGlyZWN0ZWRHcmFwaChjeWNsaWNFZGdlcywgZGlyZWN0ZWRBY3ljbGljR3JhcGgpO1xuXG4gICAgICBlZGdlcy5mb3JFYWNoKChlZGdlKSA9PiBkaXJlY3RlZEdyYXBoLmFkZEVkZ2UoZWRnZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0b3BvbG9naWNhbGx5T3JkZXJlZFZlcnRpY2VzID0gZ3JhcGguZ2V0VG9wb2xvZ2ljYWxseU9yZGVyZWRWZXJ0aWNlcygpLFxuICAgICAgICAgICAgY3ljbGljRWRnZXMgPSBbXSxcbiAgICAgICAgICAgIGRpcmVjdGVkQWN5Y2xpY0dyYXBoID0gRGlyZWN0ZWRBY3ljbGljR3JhcGguZnJvbVRvcG9sb2dpY2FsbHlPcmRlcmVkVmVydGljZXModG9wb2xvZ2ljYWxseU9yZGVyZWRWZXJ0aWNlcyk7XG5cbiAgICAgIGRpcmVjdGVkR3JhcGggPSBuZXcgRGlyZWN0ZWRHcmFwaChjeWNsaWNFZGdlcywgZGlyZWN0ZWRBY3ljbGljR3JhcGgpO1xuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3RlZEdyYXBoO1xuICB9XG59XG4iXX0=