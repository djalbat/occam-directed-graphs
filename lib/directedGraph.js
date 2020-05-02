"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var kahn = require("occam-kahn"),
    necessary = require("necessary"),
    pearcekelly = require("occam-pearce-kelly");

var Edge = require("./edge"),
    Cycle = require("./cycle"),
    PartialCycle = require("./partialCycle"),
    edgeUtilities = require("./utilities/edge"),
    vertexUtilities = require("./utilities/vertex");

var Graph = kahn.Graph,
    arrayUtilities = necessary.arrayUtilities,
    first = arrayUtilities.first,
    filter = arrayUtilities.filter,
    DirectedAcyclicGraph = pearcekelly.DirectedAcyclicGraph,
    vertexNamesFromVertexLiterals = vertexUtilities.vertexNamesFromVertexLiterals,
    forwardsDepthFirstSearch = vertexUtilities.forwardsDepthFirstSearch,
    edgesFromVertexLiterals = edgeUtilities.edgesFromVertexLiterals,
    checkEdgesIncludesEdge = edgeUtilities.checkEdgesIncludesEdge,
    removeEdgeFromEdges = edgeUtilities.removeEdgeFromEdges,
    edgesBySourceVertexName = edgeUtilities.edgesBySourceVertexName,
    edgesByTargetVertexName = edgeUtilities.edgesByTargetVertexName;

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
      forwardsDepthFirstSearch(vertex, function (visitedVertex, getPredecessorVertices) {
        var visitedVertexName = visitedVertex.getName(),
            sourceVertexName = visitedVertexName; ///

        filter(cyclicEdges, function (cyclicEdge) {
          var matches = cyclicEdge.matchSourceVertexName(sourceVertexName);

          if (matches) {
            var predecessorVertices = getPredecessorVertices(),
                partialCycle = PartialCycle.fromCyclicEdgeAndPredecessorVertices(cyclicEdge, predecessorVertices);
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

        forwardsDepthFirstSearch(targetVertex, function (visitedVertex, getPredecessorVertices) {
          var visitedVertexName = visitedVertex.getName();

          if (visitedVertexName === vertexName) {
            var predecessorVertices = getPredecessorVertices(),
                successorVertices = predecessorVertices,
                ///
            cycle = Cycle.fromVertexNamePartialCycleAndSuccessorVertices(vertexName, partialCycle, successorVertices);
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
        var cyclicEdgesIncludesEdge = checkEdgesIncludesEdge(edge, this.cyclicEdges);

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
      var cyclicEdgesIncludesEdge = checkEdgesIncludesEdge(edge, this.cyclicEdges),
          edgePresent = this.directedAcyclicGraph.isEdgePresent(edge),
          edgeCyclic = cyclicEdgesIncludesEdge; ///

      if (false) {///
      } else if (edgeCyclic) {
        var cyclicEdge = edge; ///

        removeEdgeFromEdges(cyclicEdge, this.cyclicEdges);
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
      var edge = Edge.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);
      this.addEdge(edge);
    }
  }, {
    key: "removeEdgeByVertexNames",
    value: function removeEdgeByVertexNames(sourceVertexName, targetVertexName) {
      var removeStrandedVertices = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var edge = Edge.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);
      this.removeEdge(edge, removeStrandedVertices);
    }
  }, {
    key: "removeEdgesByTargetVertexName",
    value: function removeEdgesByTargetVertexName(targetVertexName) {
      var removeStrandedVertices = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var cyclicEdges = edgesByTargetVertexName(targetVertexName, this.cyclicEdges),
          edges = this.directedAcyclicGraph.getEdgesByTargetVertexName(targetVertexName);
      this.removeEdges(cyclicEdges, removeStrandedVertices);
      this.removeEdges(edges, removeStrandedVertices);
    }
  }, {
    key: "removeEdgesBySourceVertexName",
    value: function removeEdgesBySourceVertexName(sourceVertexName) {
      var removeStrandedVertices = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var cyclicEdges = edgesBySourceVertexName(sourceVertexName, this.cyclicEdges),
          edges = this.directedAcyclicGraph.getEdgesBySourceVertexName(sourceVertexName);
      this.removeEdges(cyclicEdges, removeStrandedVertices);
      this.removeEdges(edges, removeStrandedVertices);
    }
  }, {
    key: "removeAllEdgesAndVertices",
    value: function removeAllEdgesAndVertices() {
      this.directedAcyclicGraph = DirectedAcyclicGraph.fromNothing();
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
          directedAcyclicGraph = DirectedAcyclicGraph.fromNothing(),
          directedGraph = new DirectedGraph(cyclicEdges, directedAcyclicGraph);
      return directedGraph;
    }
  }, {
    key: "fromVertexLiterals",
    value: function fromVertexLiterals(vertexLiterals) {
      var vertexNames = vertexNamesFromVertexLiterals(vertexLiterals),
          edges = edgesFromVertexLiterals(vertexLiterals),
          directedGraph = DirectedGraph.fromVertexNamesAndEdges(vertexNames, edges);
      return directedGraph;
    }
  }, {
    key: "fromVertexNamesAndEdges",
    value: function fromVertexNamesAndEdges(vertexNames, edges) {
      var directedGraph;
      var graph = Graph.fromVertexNamesAndEdges(vertexNames, edges),
          cyclesPresent = graph.areCyclesPresent();

      if (cyclesPresent) {
        var cyclicEdges = [],
            directedAcyclicGraph = DirectedAcyclicGraph.fromVertexNames(vertexNames);
        directedGraph = new DirectedGraph(cyclicEdges, directedAcyclicGraph);
        edges.forEach(function (edge) {
          directedGraph.addEdge(edge);
        });
      } else {
        var topologicallyOrderedVertices = graph.getTopologicallyOrderedVertices(),
            _cyclicEdges = [],
            _directedAcyclicGraph = DirectedAcyclicGraph.fromTopologicallyOrderedVertices(topologicallyOrderedVertices);

        directedGraph = new DirectedGraph(_cyclicEdges, _directedAcyclicGraph);
      }

      return directedGraph;
    }
  }]);

  return DirectedGraph;
}();

module.exports = DirectedGraph;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpcmVjdGVkR3JhcGguanMiXSwibmFtZXMiOlsia2FobiIsInJlcXVpcmUiLCJuZWNlc3NhcnkiLCJwZWFyY2VrZWxseSIsIkVkZ2UiLCJDeWNsZSIsIlBhcnRpYWxDeWNsZSIsImVkZ2VVdGlsaXRpZXMiLCJ2ZXJ0ZXhVdGlsaXRpZXMiLCJHcmFwaCIsImFycmF5VXRpbGl0aWVzIiwiZmlyc3QiLCJmaWx0ZXIiLCJEaXJlY3RlZEFjeWNsaWNHcmFwaCIsInZlcnRleE5hbWVzRnJvbVZlcnRleExpdGVyYWxzIiwiZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoIiwiZWRnZXNGcm9tVmVydGV4TGl0ZXJhbHMiLCJjaGVja0VkZ2VzSW5jbHVkZXNFZGdlIiwicmVtb3ZlRWRnZUZyb21FZGdlcyIsImVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lIiwiZWRnZXNCeVRhcmdldFZlcnRleE5hbWUiLCJEaXJlY3RlZEdyYXBoIiwiY3ljbGljRWRnZXMiLCJkaXJlY3RlZEFjeWNsaWNHcmFwaCIsInZlcnRleE5hbWUiLCJnZXRQcmVkZWNlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lIiwiZ2V0U3VjY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUiLCJjeWNsZXNQcmVzZW50IiwidmVydGV4UHJlc2VudCIsImlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZSIsImZpcnN0Q3ljbGUiLCJnZXRGaXJzdEN5Y2xlQnlWZXJ0ZXhOYW1lIiwidmVydGV4IiwiZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lIiwic2xpY2UiLCJwYXJ0aWFsQ3ljbGVzIiwiY3ljbGVzIiwidmlzaXRlZFZlcnRleCIsImdldFByZWRlY2Vzc29yVmVydGljZXMiLCJ2aXNpdGVkVmVydGV4TmFtZSIsImdldE5hbWUiLCJzb3VyY2VWZXJ0ZXhOYW1lIiwiY3ljbGljRWRnZSIsIm1hdGNoZXMiLCJtYXRjaFNvdXJjZVZlcnRleE5hbWUiLCJwcmVkZWNlc3NvclZlcnRpY2VzIiwicGFydGlhbEN5Y2xlIiwiZnJvbUN5Y2xpY0VkZ2VBbmRQcmVkZWNlc3NvclZlcnRpY2VzIiwicHVzaCIsImN5Y2xpY0VkZ2VzTGVuZ3RoIiwibGVuZ3RoIiwidGVybWluYXRlIiwic29tZSIsInRhcmdldFZlcnRleE5hbWUiLCJnZXRUYXJnZXRWZXJ0ZXhOYW1lIiwidGFyZ2V0VmVydGV4Iiwic3VjY2Vzc29yVmVydGljZXMiLCJjeWNsZSIsImZyb21WZXJ0ZXhOYW1lUGFydGlhbEN5Y2xlQW5kU3VjY2Vzc29yVmVydGljZXMiLCJjeWNsZXNMZW5ndGgiLCJmaXJzdEN5Y2xpY0VkZ2UiLCJnZXRTb3VyY2VWZXJ0ZXhOYW1lIiwiZ2V0VG9wb2xvZ2ljYWxseU9yZGVyZWRWZXJ0ZXhOYW1lcyIsImFkZFZlcnRleEJ5VmVydGV4TmFtZSIsInZlcnRleE5hbWVzIiwiZm9yRWFjaCIsInJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZSIsImZpbHRlckN5Y2xpY0VkZ2VzIiwiZWRnZSIsInN1Y2Nlc3MiLCJhZGRFZGdlIiwiY3ljbGljRWRnZXNJbmNsdWRlc0VkZ2UiLCJlZGdlcyIsInJlbW92ZVN0cmFuZGVkVmVydGljZXMiLCJlZGdlUHJlc2VudCIsImlzRWRnZVByZXNlbnQiLCJlZGdlQ3ljbGljIiwicmVtb3ZlRWRnZSIsInNvdXJjZVZlcnRleCIsInNvdXJjZVZlcnRleFN0cmFuZGVkIiwiaXNTdHJhbmRlZCIsInRhcmdldFZlcnRleFN0cmFuZGVkIiwiZnJvbVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lIiwiZ2V0RWRnZXNCeVRhcmdldFZlcnRleE5hbWUiLCJyZW1vdmVFZGdlcyIsImdldEVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lIiwiZnJvbU5vdGhpbmciLCJkaXJlY3RlZEdyYXBoIiwidmVydGV4TGl0ZXJhbHMiLCJmcm9tVmVydGV4TmFtZXNBbmRFZGdlcyIsImdyYXBoIiwiYXJlQ3ljbGVzUHJlc2VudCIsImZyb21WZXJ0ZXhOYW1lcyIsInRvcG9sb2dpY2FsbHlPcmRlcmVkVmVydGljZXMiLCJnZXRUb3BvbG9naWNhbGx5T3JkZXJlZFZlcnRpY2VzIiwiZnJvbVRvcG9sb2dpY2FsbHlPcmRlcmVkVmVydGljZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLE9BQU8sQ0FBQyxZQUFELENBQXBCO0FBQUEsSUFDTUMsU0FBUyxHQUFHRCxPQUFPLENBQUMsV0FBRCxDQUR6QjtBQUFBLElBRU1FLFdBQVcsR0FBR0YsT0FBTyxDQUFDLG9CQUFELENBRjNCOztBQUlBLElBQU1HLElBQUksR0FBR0gsT0FBTyxDQUFDLFFBQUQsQ0FBcEI7QUFBQSxJQUNNSSxLQUFLLEdBQUdKLE9BQU8sQ0FBQyxTQUFELENBRHJCO0FBQUEsSUFFTUssWUFBWSxHQUFHTCxPQUFPLENBQUMsZ0JBQUQsQ0FGNUI7QUFBQSxJQUdNTSxhQUFhLEdBQUdOLE9BQU8sQ0FBQyxrQkFBRCxDQUg3QjtBQUFBLElBSU1PLGVBQWUsR0FBR1AsT0FBTyxDQUFDLG9CQUFELENBSi9COztBQU1NLElBQUVRLEtBQUYsR0FBWVQsSUFBWixDQUFFUyxLQUFGO0FBQUEsSUFDRUMsY0FERixHQUNxQlIsU0FEckIsQ0FDRVEsY0FERjtBQUFBLElBRUVDLEtBRkYsR0FFb0JELGNBRnBCLENBRUVDLEtBRkY7QUFBQSxJQUVTQyxNQUZULEdBRW9CRixjQUZwQixDQUVTRSxNQUZUO0FBQUEsSUFHRUMsb0JBSEYsR0FHMkJWLFdBSDNCLENBR0VVLG9CQUhGO0FBQUEsSUFJRUMsNkJBSkYsR0FJOEROLGVBSjlELENBSUVNLDZCQUpGO0FBQUEsSUFJaUNDLHdCQUpqQyxHQUk4RFAsZUFKOUQsQ0FJaUNPLHdCQUpqQztBQUFBLElBS0VDLHVCQUxGLEdBSzZIVCxhQUw3SCxDQUtFUyx1QkFMRjtBQUFBLElBSzJCQyxzQkFMM0IsR0FLNkhWLGFBTDdILENBSzJCVSxzQkFMM0I7QUFBQSxJQUttREMsbUJBTG5ELEdBSzZIWCxhQUw3SCxDQUttRFcsbUJBTG5EO0FBQUEsSUFLd0VDLHVCQUx4RSxHQUs2SFosYUFMN0gsQ0FLd0VZLHVCQUx4RTtBQUFBLElBS2lHQyx1QkFMakcsR0FLNkhiLGFBTDdILENBS2lHYSx1QkFMakc7O0lBT0FDLGE7QUFDSix5QkFBWUMsV0FBWixFQUF5QkMsb0JBQXpCLEVBQStDO0FBQUE7O0FBQzdDLFNBQUtELFdBQUwsR0FBbUJBLFdBQW5CO0FBRUEsU0FBS0Msb0JBQUwsR0FBNEJBLG9CQUE1QjtBQUNEOzs7O3FDQUVnQjtBQUNmLGFBQU8sS0FBS0QsV0FBWjtBQUNEOzs7OENBRXlCO0FBQ3hCLGFBQU8sS0FBS0Msb0JBQVo7QUFDRDs7OzBEQUVxQ0MsVSxFQUFZO0FBQUUsYUFBTyxLQUFLRCxvQkFBTCxDQUEwQkUscUNBQTFCLENBQWdFRCxVQUFoRSxDQUFQO0FBQXFGOzs7d0RBRXJHQSxVLEVBQVk7QUFBRSxhQUFPLEtBQUtELG9CQUFMLENBQTBCRyxtQ0FBMUIsQ0FBOERGLFVBQTlELENBQVA7QUFBbUY7OztpREFFeEdBLFUsRUFBWTtBQUN2QyxVQUFJRyxhQUFhLEdBQUcsS0FBcEI7QUFFQSxVQUFNQyxhQUFhLEdBQUcsS0FBS0wsb0JBQUwsQ0FBMEJNLDJCQUExQixDQUFzREwsVUFBdEQsQ0FBdEI7O0FBRUEsVUFBSUksYUFBSixFQUFtQjtBQUNqQixZQUFNRSxVQUFVLEdBQUcsS0FBS0MseUJBQUwsQ0FBK0JQLFVBQS9CLENBQW5CO0FBRUFHLFFBQUFBLGFBQWEsR0FBSUcsVUFBVSxLQUFLLElBQWhDO0FBQ0Q7O0FBRUQsYUFBT0gsYUFBUDtBQUNEOzs7Z0RBRTJCSCxVLEVBQVk7QUFBRSxhQUFPLEtBQUtELG9CQUFMLENBQTBCTSwyQkFBMUIsQ0FBc0RMLFVBQXRELENBQVA7QUFBMkU7Ozs4Q0FFM0ZBLFUsRUFBWTtBQUFBOztBQUNwQyxVQUFJTSxVQUFVLEdBQUcsSUFBakI7QUFFQSxVQUFNRSxNQUFNLEdBQUcsS0FBS1Qsb0JBQUwsQ0FBMEJVLHFCQUExQixDQUFnRFQsVUFBaEQsQ0FBZjtBQUFBLFVBQ01GLFdBQVcsR0FBRyxLQUFLQSxXQUFMLENBQWlCWSxLQUFqQixFQURwQjtBQUFBLFVBQzhDO0FBQ3hDQyxNQUFBQSxhQUFhLEdBQUcsRUFGdEI7QUFBQSxVQUdNQyxNQUFNLEdBQUcsRUFIZjtBQUtBckIsTUFBQUEsd0JBQXdCLENBQUNpQixNQUFELEVBQVMsVUFBU0ssYUFBVCxFQUF3QkMsc0JBQXhCLEVBQWdEO0FBQy9FLFlBQU1DLGlCQUFpQixHQUFHRixhQUFhLENBQUNHLE9BQWQsRUFBMUI7QUFBQSxZQUNNQyxnQkFBZ0IsR0FBR0YsaUJBRHpCLENBRCtFLENBRW5DOztBQUU1QzNCLFFBQUFBLE1BQU0sQ0FBQ1UsV0FBRCxFQUFjLFVBQVNvQixVQUFULEVBQXFCO0FBQ3ZDLGNBQU1DLE9BQU8sR0FBR0QsVUFBVSxDQUFDRSxxQkFBWCxDQUFpQ0gsZ0JBQWpDLENBQWhCOztBQUVBLGNBQUlFLE9BQUosRUFBYTtBQUNYLGdCQUFNRSxtQkFBbUIsR0FBR1Asc0JBQXNCLEVBQWxEO0FBQUEsZ0JBQ01RLFlBQVksR0FBSXhDLFlBQVksQ0FBQ3lDLG9DQUFiLENBQWtETCxVQUFsRCxFQUE4REcsbUJBQTlELENBRHRCO0FBR0FWLFlBQUFBLGFBQWEsQ0FBQ2EsSUFBZCxDQUFtQkYsWUFBbkI7QUFDRCxXQUxELE1BS087QUFDTCxtQkFBTyxJQUFQO0FBQ0Q7QUFDRixTQVhLLENBQU47QUFhQSxZQUFNRyxpQkFBaUIsR0FBRzNCLFdBQVcsQ0FBQzRCLE1BQXRDO0FBQUEsWUFDTUMsU0FBUyxHQUFJRixpQkFBaUIsS0FBSyxDQUR6QztBQUdBLGVBQU9FLFNBQVA7QUFDRCxPQXJCdUIsQ0FBeEI7QUF1QkFoQixNQUFBQSxhQUFhLENBQUNpQixJQUFkLENBQW1CLFVBQUNOLFlBQUQsRUFBa0I7QUFDbkMsWUFBTU8sZ0JBQWdCLEdBQUdQLFlBQVksQ0FBQ1EsbUJBQWIsRUFBekI7QUFBQSxZQUNNQyxZQUFZLEdBQUcsS0FBSSxDQUFDaEMsb0JBQUwsQ0FBMEJVLHFCQUExQixDQUFnRG9CLGdCQUFoRCxDQURyQjs7QUFHQXRDLFFBQUFBLHdCQUF3QixDQUFDd0MsWUFBRCxFQUFlLFVBQVNsQixhQUFULEVBQXdCQyxzQkFBeEIsRUFBZ0Q7QUFDckYsY0FBTUMsaUJBQWlCLEdBQUdGLGFBQWEsQ0FBQ0csT0FBZCxFQUExQjs7QUFFQSxjQUFJRCxpQkFBaUIsS0FBS2YsVUFBMUIsRUFBc0M7QUFDcEMsZ0JBQU1xQixtQkFBbUIsR0FBR1Asc0JBQXNCLEVBQWxEO0FBQUEsZ0JBQ01rQixpQkFBaUIsR0FBR1gsbUJBRDFCO0FBQUEsZ0JBQ2dEO0FBQzFDWSxZQUFBQSxLQUFLLEdBQUdwRCxLQUFLLENBQUNxRCw4Q0FBTixDQUFxRGxDLFVBQXJELEVBQWlFc0IsWUFBakUsRUFBK0VVLGlCQUEvRSxDQUZkO0FBSUFwQixZQUFBQSxNQUFNLENBQUNZLElBQVAsQ0FBWVMsS0FBWjtBQUNEOztBQUVELGNBQU1FLFlBQVksR0FBR3ZCLE1BQU0sQ0FBQ2MsTUFBNUI7QUFBQSxjQUNNQyxTQUFTLEdBQUlRLFlBQVksR0FBRyxDQURsQztBQUdBLGlCQUFPUixTQUFQO0FBQ0QsU0FmdUIsQ0FBeEI7QUFnQkQsT0FwQkQ7QUFzQkEsVUFBTVEsWUFBWSxHQUFHdkIsTUFBTSxDQUFDYyxNQUE1Qjs7QUFFQSxVQUFJUyxZQUFZLEdBQUcsQ0FBbkIsRUFBc0I7QUFDcEI3QixRQUFBQSxVQUFVLEdBQUduQixLQUFLLENBQUN5QixNQUFELENBQWxCO0FBQ0Q7O0FBRUQsYUFBT04sVUFBUDtBQUNEOzs7b0NBRWU7QUFDZCxVQUFNOEIsZUFBZSxHQUFHakQsS0FBSyxDQUFDLEtBQUtXLFdBQU4sQ0FBN0I7QUFBQSxVQUNNb0IsVUFBVSxHQUFHa0IsZUFEbkI7QUFBQSxVQUNvQztBQUM5Qm5CLE1BQUFBLGdCQUFnQixHQUFHQyxVQUFVLENBQUNtQixtQkFBWCxFQUZ6QjtBQUFBLFVBR01yQyxVQUFVLEdBQUdpQixnQkFIbkI7QUFBQSxVQUdzQztBQUNoQ1gsTUFBQUEsVUFBVSxHQUFHLEtBQUtDLHlCQUFMLENBQStCUCxVQUEvQixDQUpuQjtBQU1BLGFBQU9NLFVBQVA7QUFDRDs7O3lEQUVvQztBQUFFLGFBQU8sS0FBS1Asb0JBQUwsQ0FBMEJ1QyxrQ0FBMUIsRUFBUDtBQUF3RTs7O3VDQUU1RjtBQUNqQixVQUFNYixpQkFBaUIsR0FBRyxLQUFLM0IsV0FBTCxDQUFpQjRCLE1BQTNDO0FBQUEsVUFDTXZCLGFBQWEsR0FBSXNCLGlCQUFpQixHQUFHLENBRDNDO0FBR0EsYUFBT3RCLGFBQVA7QUFDRDs7OzBDQUVxQkgsVSxFQUFZO0FBQUUsV0FBS0Qsb0JBQUwsQ0FBMEJ3QyxxQkFBMUIsQ0FBZ0R2QyxVQUFoRDtBQUE4RDs7OzZDQUV6RXdDLFcsRUFBYTtBQUFBOztBQUNwQ0EsTUFBQUEsV0FBVyxDQUFDQyxPQUFaLENBQW9CLFVBQUN6QyxVQUFEO0FBQUEsZUFBZ0IsTUFBSSxDQUFDdUMscUJBQUwsQ0FBMkJ2QyxVQUEzQixDQUFoQjtBQUFBLE9BQXBCO0FBQ0Q7Ozs2Q0FFd0JBLFUsRUFBWTtBQUNuQyxXQUFLRCxvQkFBTCxDQUEwQjJDLHdCQUExQixDQUFtRDFDLFVBQW5EO0FBRUEsV0FBSzJDLGlCQUFMO0FBQ0Q7OztnREFFMkJILFcsRUFBYTtBQUFBOztBQUN2Q0EsTUFBQUEsV0FBVyxDQUFDQyxPQUFaLENBQW9CLFVBQUN6QyxVQUFEO0FBQUEsZUFBZ0IsTUFBSSxDQUFDMEMsd0JBQUwsQ0FBOEIxQyxVQUE5QixDQUFoQjtBQUFBLE9BQXBCO0FBQ0Q7Ozs0QkFFTzRDLEksRUFBTTtBQUNaLFVBQU1DLE9BQU8sR0FBRyxLQUFLOUMsb0JBQUwsQ0FBMEIrQyxPQUExQixDQUFrQ0YsSUFBbEMsQ0FBaEI7O0FBRUEsVUFBSSxDQUFDQyxPQUFMLEVBQWM7QUFDWixZQUFNRSx1QkFBdUIsR0FBR3RELHNCQUFzQixDQUFDbUQsSUFBRCxFQUFPLEtBQUs5QyxXQUFaLENBQXREOztBQUVBLFlBQUksQ0FBQ2lELHVCQUFMLEVBQThCO0FBQzVCLGNBQU03QixVQUFVLEdBQUcwQixJQUFuQixDQUQ0QixDQUNGOztBQUUxQixlQUFLOUMsV0FBTCxDQUFpQjBCLElBQWpCLENBQXNCTixVQUF0QjtBQUNEO0FBQ0Y7QUFDRjs7OzZCQUVROEIsSyxFQUFPO0FBQUE7O0FBQ2RBLE1BQUFBLEtBQUssQ0FBQ1AsT0FBTixDQUFjLFVBQUNHLElBQUQ7QUFBQSxlQUFVLE1BQUksQ0FBQ0UsT0FBTCxDQUFhRixJQUFiLENBQVY7QUFBQSxPQUFkO0FBQ0Q7OzsrQkFFVUEsSSxFQUFzQztBQUFBLFVBQWhDSyxzQkFBZ0MsdUVBQVAsS0FBTztBQUMvQyxVQUFNRix1QkFBdUIsR0FBR3RELHNCQUFzQixDQUFDbUQsSUFBRCxFQUFPLEtBQUs5QyxXQUFaLENBQXREO0FBQUEsVUFDTW9ELFdBQVcsR0FBRyxLQUFLbkQsb0JBQUwsQ0FBMEJvRCxhQUExQixDQUF3Q1AsSUFBeEMsQ0FEcEI7QUFBQSxVQUVNUSxVQUFVLEdBQUdMLHVCQUZuQixDQUQrQyxDQUdIOztBQUU1QyxVQUFJLEtBQUosRUFBVyxDQUNUO0FBQ0QsT0FGRCxNQUVPLElBQUlLLFVBQUosRUFBZ0I7QUFDckIsWUFBTWxDLFVBQVUsR0FBRzBCLElBQW5CLENBRHFCLENBQ0s7O0FBRTFCbEQsUUFBQUEsbUJBQW1CLENBQUN3QixVQUFELEVBQWEsS0FBS3BCLFdBQWxCLENBQW5CO0FBQ0QsT0FKTSxNQUlBLElBQUlvRCxXQUFKLEVBQWlCO0FBQ3RCLGFBQUtuRCxvQkFBTCxDQUEwQnNELFVBQTFCLENBQXFDVCxJQUFyQzs7QUFFQSxZQUFJSyxzQkFBSixFQUE0QjtBQUMxQixjQUFNaEMsZ0JBQWdCLEdBQUcyQixJQUFJLENBQUNQLG1CQUFMLEVBQXpCO0FBQUEsY0FDTVIsZ0JBQWdCLEdBQUdlLElBQUksQ0FBQ2QsbUJBQUwsRUFEekI7QUFBQSxjQUVNd0IsWUFBWSxHQUFHLEtBQUt2RCxvQkFBTCxDQUEwQlUscUJBQTFCLENBQWdEUSxnQkFBaEQsQ0FGckI7QUFBQSxjQUdNYyxZQUFZLEdBQUcsS0FBS2hDLG9CQUFMLENBQTBCVSxxQkFBMUIsQ0FBZ0RvQixnQkFBaEQsQ0FIckI7QUFBQSxjQUlNMEIsb0JBQW9CLEdBQUdELFlBQVksQ0FBQ0UsVUFBYixFQUo3QjtBQUFBLGNBS01DLG9CQUFvQixHQUFHMUIsWUFBWSxDQUFDeUIsVUFBYixFQUw3Qjs7QUFPQSxjQUFJRCxvQkFBSixFQUEwQjtBQUN4QixpQkFBS3hELG9CQUFMLENBQTBCMkMsd0JBQTFCLENBQW1EekIsZ0JBQW5EO0FBQ0Q7O0FBRUQsY0FBSXdDLG9CQUFKLEVBQTBCO0FBQ3hCLGlCQUFLMUQsb0JBQUwsQ0FBMEIyQyx3QkFBMUIsQ0FBbURiLGdCQUFuRDtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxXQUFLYyxpQkFBTDtBQUNEOzs7Z0NBRVdLLEssRUFBdUM7QUFBQTs7QUFBQSxVQUFoQ0Msc0JBQWdDLHVFQUFQLEtBQU87QUFDakRELE1BQUFBLEtBQUssQ0FBQ1AsT0FBTixDQUFjLFVBQUNHLElBQUQ7QUFBQSxlQUFVLE1BQUksQ0FBQ1MsVUFBTCxDQUFnQlQsSUFBaEIsRUFBc0JLLHNCQUF0QixDQUFWO0FBQUEsT0FBZDtBQUNEOzs7eUNBRW9CaEMsZ0IsRUFBa0JZLGdCLEVBQWtCO0FBQ3ZELFVBQU1lLElBQUksR0FBR2hFLElBQUksQ0FBQzhFLHVDQUFMLENBQTZDekMsZ0JBQTdDLEVBQStEWSxnQkFBL0QsQ0FBYjtBQUVBLFdBQUtpQixPQUFMLENBQWFGLElBQWI7QUFDRDs7OzRDQUV1QjNCLGdCLEVBQWtCWSxnQixFQUFrRDtBQUFBLFVBQWhDb0Isc0JBQWdDLHVFQUFQLEtBQU87QUFDMUYsVUFBTUwsSUFBSSxHQUFHaEUsSUFBSSxDQUFDOEUsdUNBQUwsQ0FBNkN6QyxnQkFBN0MsRUFBK0RZLGdCQUEvRCxDQUFiO0FBRUEsV0FBS3dCLFVBQUwsQ0FBZ0JULElBQWhCLEVBQXNCSyxzQkFBdEI7QUFDRDs7O2tEQUU2QnBCLGdCLEVBQWtEO0FBQUEsVUFBaENvQixzQkFBZ0MsdUVBQVAsS0FBTztBQUM5RSxVQUFNbkQsV0FBVyxHQUFHRix1QkFBdUIsQ0FBQ2lDLGdCQUFELEVBQW1CLEtBQUsvQixXQUF4QixDQUEzQztBQUFBLFVBQ01rRCxLQUFLLEdBQUcsS0FBS2pELG9CQUFMLENBQTBCNEQsMEJBQTFCLENBQXFEOUIsZ0JBQXJELENBRGQ7QUFHQSxXQUFLK0IsV0FBTCxDQUFpQjlELFdBQWpCLEVBQThCbUQsc0JBQTlCO0FBRUEsV0FBS1csV0FBTCxDQUFpQlosS0FBakIsRUFBd0JDLHNCQUF4QjtBQUNEOzs7a0RBRTZCaEMsZ0IsRUFBa0Q7QUFBQSxVQUFoQ2dDLHNCQUFnQyx1RUFBUCxLQUFPO0FBQzlFLFVBQU1uRCxXQUFXLEdBQUdILHVCQUF1QixDQUFDc0IsZ0JBQUQsRUFBbUIsS0FBS25CLFdBQXhCLENBQTNDO0FBQUEsVUFDTWtELEtBQUssR0FBRyxLQUFLakQsb0JBQUwsQ0FBMEI4RCwwQkFBMUIsQ0FBcUQ1QyxnQkFBckQsQ0FEZDtBQUdBLFdBQUsyQyxXQUFMLENBQWlCOUQsV0FBakIsRUFBOEJtRCxzQkFBOUI7QUFFQSxXQUFLVyxXQUFMLENBQWlCWixLQUFqQixFQUF3QkMsc0JBQXhCO0FBQ0Q7OztnREFFMkI7QUFDMUIsV0FBS2xELG9CQUFMLEdBQTRCVixvQkFBb0IsQ0FBQ3lFLFdBQXJCLEVBQTVCO0FBRUEsV0FBS2hFLFdBQUwsR0FBbUIsRUFBbkI7QUFDRDs7O3dDQUVtQjtBQUFBOztBQUNsQlYsTUFBQUEsTUFBTSxDQUFDLEtBQUtVLFdBQU4sRUFBbUIsVUFBQ29CLFVBQUQsRUFBZ0I7QUFDdkMsWUFBTTBCLElBQUksR0FBRzFCLFVBQWI7QUFBQSxZQUEwQjtBQUNwQjJCLFFBQUFBLE9BQU8sR0FBRyxNQUFJLENBQUM5QyxvQkFBTCxDQUEwQitDLE9BQTFCLENBQWtDRixJQUFsQyxDQURoQjs7QUFHQSxZQUFJLENBQUNDLE9BQUwsRUFBYztBQUNaLGlCQUFPLElBQVA7QUFDRDtBQUNGLE9BUEssQ0FBTjtBQVFEOzs7a0NBRW9CO0FBQ25CLFVBQU0vQyxXQUFXLEdBQUcsRUFBcEI7QUFBQSxVQUNNQyxvQkFBb0IsR0FBR1Ysb0JBQW9CLENBQUN5RSxXQUFyQixFQUQ3QjtBQUFBLFVBRU1DLGFBQWEsR0FBRyxJQUFJbEUsYUFBSixDQUFrQkMsV0FBbEIsRUFBK0JDLG9CQUEvQixDQUZ0QjtBQUlBLGFBQU9nRSxhQUFQO0FBQ0Q7Ozt1Q0FFeUJDLGMsRUFBZ0I7QUFDeEMsVUFBTXhCLFdBQVcsR0FBR2xELDZCQUE2QixDQUFDMEUsY0FBRCxDQUFqRDtBQUFBLFVBQ01oQixLQUFLLEdBQUd4RCx1QkFBdUIsQ0FBQ3dFLGNBQUQsQ0FEckM7QUFBQSxVQUVNRCxhQUFhLEdBQUdsRSxhQUFhLENBQUNvRSx1QkFBZCxDQUFzQ3pCLFdBQXRDLEVBQW1EUSxLQUFuRCxDQUZ0QjtBQUlBLGFBQU9lLGFBQVA7QUFDRDs7OzRDQUU4QnZCLFcsRUFBYVEsSyxFQUFPO0FBQ2pELFVBQUllLGFBQUo7QUFFQSxVQUFNRyxLQUFLLEdBQUdqRixLQUFLLENBQUNnRix1QkFBTixDQUE4QnpCLFdBQTlCLEVBQTJDUSxLQUEzQyxDQUFkO0FBQUEsVUFDTTdDLGFBQWEsR0FBRytELEtBQUssQ0FBQ0MsZ0JBQU4sRUFEdEI7O0FBR0EsVUFBSWhFLGFBQUosRUFBbUI7QUFDakIsWUFBTUwsV0FBVyxHQUFHLEVBQXBCO0FBQUEsWUFDTUMsb0JBQW9CLEdBQUdWLG9CQUFvQixDQUFDK0UsZUFBckIsQ0FBcUM1QixXQUFyQyxDQUQ3QjtBQUdBdUIsUUFBQUEsYUFBYSxHQUFHLElBQUlsRSxhQUFKLENBQWtCQyxXQUFsQixFQUErQkMsb0JBQS9CLENBQWhCO0FBRUFpRCxRQUFBQSxLQUFLLENBQUNQLE9BQU4sQ0FBYyxVQUFTRyxJQUFULEVBQWU7QUFDM0JtQixVQUFBQSxhQUFhLENBQUNqQixPQUFkLENBQXNCRixJQUF0QjtBQUNELFNBRkQ7QUFHRCxPQVRELE1BU087QUFDTCxZQUFNeUIsNEJBQTRCLEdBQUdILEtBQUssQ0FBQ0ksK0JBQU4sRUFBckM7QUFBQSxZQUNNeEUsWUFBVyxHQUFHLEVBRHBCO0FBQUEsWUFFTUMscUJBQW9CLEdBQUdWLG9CQUFvQixDQUFDa0YsZ0NBQXJCLENBQXNERiw0QkFBdEQsQ0FGN0I7O0FBSUFOLFFBQUFBLGFBQWEsR0FBRyxJQUFJbEUsYUFBSixDQUFrQkMsWUFBbEIsRUFBK0JDLHFCQUEvQixDQUFoQjtBQUNEOztBQUVELGFBQU9nRSxhQUFQO0FBQ0Q7Ozs7OztBQUdIUyxNQUFNLENBQUNDLE9BQVAsR0FBaUI1RSxhQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBrYWhuID0gcmVxdWlyZShcIm9jY2FtLWthaG5cIiksXG4gICAgICBuZWNlc3NhcnkgPSByZXF1aXJlKFwibmVjZXNzYXJ5XCIpLFxuICAgICAgcGVhcmNla2VsbHkgPSByZXF1aXJlKFwib2NjYW0tcGVhcmNlLWtlbGx5XCIpO1xuXG5jb25zdCBFZGdlID0gcmVxdWlyZShcIi4vZWRnZVwiKSxcbiAgICAgIEN5Y2xlID0gcmVxdWlyZShcIi4vY3ljbGVcIiksXG4gICAgICBQYXJ0aWFsQ3ljbGUgPSByZXF1aXJlKFwiLi9wYXJ0aWFsQ3ljbGVcIiksXG4gICAgICBlZGdlVXRpbGl0aWVzID0gcmVxdWlyZShcIi4vdXRpbGl0aWVzL2VkZ2VcIiksXG4gICAgICB2ZXJ0ZXhVdGlsaXRpZXMgPSByZXF1aXJlKFwiLi91dGlsaXRpZXMvdmVydGV4XCIpO1xuXG5jb25zdCB7IEdyYXBoIH0gPSBrYWhuLFxuICAgICAgeyBhcnJheVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBmaXJzdCwgZmlsdGVyIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgRGlyZWN0ZWRBY3ljbGljR3JhcGggfSA9IHBlYXJjZWtlbGx5LFxuICAgICAgeyB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhMaXRlcmFscywgZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoIH0gPSB2ZXJ0ZXhVdGlsaXRpZXMsXG4gICAgICB7IGVkZ2VzRnJvbVZlcnRleExpdGVyYWxzLCBjaGVja0VkZ2VzSW5jbHVkZXNFZGdlLCByZW1vdmVFZGdlRnJvbUVkZ2VzLCBlZGdlc0J5U291cmNlVmVydGV4TmFtZSwgZWRnZXNCeVRhcmdldFZlcnRleE5hbWUgfSA9IGVkZ2VVdGlsaXRpZXM7XG5cbmNsYXNzIERpcmVjdGVkR3JhcGgge1xuICBjb25zdHJ1Y3RvcihjeWNsaWNFZGdlcywgZGlyZWN0ZWRBY3ljbGljR3JhcGgpIHtcbiAgICB0aGlzLmN5Y2xpY0VkZ2VzID0gY3ljbGljRWRnZXM7XG5cbiAgICB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoID0gZGlyZWN0ZWRBY3ljbGljR3JhcGg7XG4gIH1cblxuICBnZXRDeWNsaWNFZGdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5jeWNsaWNFZGdlcztcbiAgfVxuXG4gIGdldERpcmVjdGVkQWN5Y2xpY0dyYXBoKCkge1xuICAgIHJldHVybiB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoO1xuICB9XG5cbiAgZ2V0UHJlZGVjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7IHJldHVybiB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldFByZWRlY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7IH1cblxuICBnZXRTdWNjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7IHJldHVybiB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldFN1Y2Nlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpOyB9XG5cbiAgYXJlQ3ljbGVzUHJlc2VudEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgbGV0IGN5Y2xlc1ByZXNlbnQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZlcnRleFByZXNlbnQgPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgIGlmICh2ZXJ0ZXhQcmVzZW50KSB7XG4gICAgICBjb25zdCBmaXJzdEN5Y2xlID0gdGhpcy5nZXRGaXJzdEN5Y2xlQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgICBjeWNsZXNQcmVzZW50ID0gKGZpcnN0Q3ljbGUgIT09IG51bGwpO1xuICAgIH1cblxuICAgIHJldHVybiBjeWNsZXNQcmVzZW50O1xuICB9XG5cbiAgaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHsgcmV0dXJuIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpOyB9XG5cbiAgZ2V0Rmlyc3RDeWNsZUJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgbGV0IGZpcnN0Q3ljbGUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IHZlcnRleCA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpLFxuICAgICAgICAgIGN5Y2xpY0VkZ2VzID0gdGhpcy5jeWNsaWNFZGdlcy5zbGljZSgpLCAvLy9cbiAgICAgICAgICBwYXJ0aWFsQ3ljbGVzID0gW10sXG4gICAgICAgICAgY3ljbGVzID0gW107XG5cbiAgICBmb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2godmVydGV4LCBmdW5jdGlvbih2aXNpdGVkVmVydGV4LCBnZXRQcmVkZWNlc3NvclZlcnRpY2VzKSB7XG4gICAgICBjb25zdCB2aXNpdGVkVmVydGV4TmFtZSA9IHZpc2l0ZWRWZXJ0ZXguZ2V0TmFtZSgpLFxuICAgICAgICAgICAgc291cmNlVmVydGV4TmFtZSA9IHZpc2l0ZWRWZXJ0ZXhOYW1lOyAvLy9cblxuICAgICAgZmlsdGVyKGN5Y2xpY0VkZ2VzLCBmdW5jdGlvbihjeWNsaWNFZGdlKSB7XG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSBjeWNsaWNFZGdlLm1hdGNoU291cmNlVmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKTtcblxuICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgIGNvbnN0IHByZWRlY2Vzc29yVmVydGljZXMgPSBnZXRQcmVkZWNlc3NvclZlcnRpY2VzKCksXG4gICAgICAgICAgICAgICAgcGFydGlhbEN5Y2xlID0gIFBhcnRpYWxDeWNsZS5mcm9tQ3ljbGljRWRnZUFuZFByZWRlY2Vzc29yVmVydGljZXMoY3ljbGljRWRnZSwgcHJlZGVjZXNzb3JWZXJ0aWNlcyk7XG4gICAgICAgICAgXG4gICAgICAgICAgcGFydGlhbEN5Y2xlcy5wdXNoKHBhcnRpYWxDeWNsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBjeWNsaWNFZGdlc0xlbmd0aCA9IGN5Y2xpY0VkZ2VzLmxlbmd0aCxcbiAgICAgICAgICAgIHRlcm1pbmF0ZSA9IChjeWNsaWNFZGdlc0xlbmd0aCA9PT0gMCk7XG5cbiAgICAgIHJldHVybiB0ZXJtaW5hdGU7XG4gICAgfSk7XG5cbiAgICBwYXJ0aWFsQ3ljbGVzLnNvbWUoKHBhcnRpYWxDeWNsZSkgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0VmVydGV4TmFtZSA9IHBhcnRpYWxDeWNsZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXggPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldFZlcnRleEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoKHRhcmdldFZlcnRleCwgZnVuY3Rpb24odmlzaXRlZFZlcnRleCwgZ2V0UHJlZGVjZXNzb3JWZXJ0aWNlcykge1xuICAgICAgICBjb25zdCB2aXNpdGVkVmVydGV4TmFtZSA9IHZpc2l0ZWRWZXJ0ZXguZ2V0TmFtZSgpO1xuXG4gICAgICAgIGlmICh2aXNpdGVkVmVydGV4TmFtZSA9PT0gdmVydGV4TmFtZSkge1xuICAgICAgICAgIGNvbnN0IHByZWRlY2Vzc29yVmVydGljZXMgPSBnZXRQcmVkZWNlc3NvclZlcnRpY2VzKCksXG4gICAgICAgICAgICAgICAgc3VjY2Vzc29yVmVydGljZXMgPSBwcmVkZWNlc3NvclZlcnRpY2VzLCAgLy8vXG4gICAgICAgICAgICAgICAgY3ljbGUgPSBDeWNsZS5mcm9tVmVydGV4TmFtZVBhcnRpYWxDeWNsZUFuZFN1Y2Nlc3NvclZlcnRpY2VzKHZlcnRleE5hbWUsIHBhcnRpYWxDeWNsZSwgc3VjY2Vzc29yVmVydGljZXMpO1xuXG4gICAgICAgICAgY3ljbGVzLnB1c2goY3ljbGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY3ljbGVzTGVuZ3RoID0gY3ljbGVzLmxlbmd0aCxcbiAgICAgICAgICAgICAgdGVybWluYXRlID0gKGN5Y2xlc0xlbmd0aCA+IDApO1xuXG4gICAgICAgIHJldHVybiB0ZXJtaW5hdGU7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGN5Y2xlc0xlbmd0aCA9IGN5Y2xlcy5sZW5ndGg7XG4gICAgXG4gICAgaWYgKGN5Y2xlc0xlbmd0aCA+IDApIHtcbiAgICAgIGZpcnN0Q3ljbGUgPSBmaXJzdChjeWNsZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBmaXJzdEN5Y2xlO1xuICB9XG5cbiAgZ2V0Rmlyc3RDeWNsZSgpIHtcbiAgICBjb25zdCBmaXJzdEN5Y2xpY0VkZ2UgPSBmaXJzdCh0aGlzLmN5Y2xpY0VkZ2VzKSxcbiAgICAgICAgICBjeWNsaWNFZGdlID0gZmlyc3RDeWNsaWNFZGdlLCAvLy9cbiAgICAgICAgICBzb3VyY2VWZXJ0ZXhOYW1lID0gY3ljbGljRWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgdmVydGV4TmFtZSA9IHNvdXJjZVZlcnRleE5hbWUsICAvLy9cbiAgICAgICAgICBmaXJzdEN5Y2xlID0gdGhpcy5nZXRGaXJzdEN5Y2xlQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgcmV0dXJuIGZpcnN0Q3ljbGU7XG4gIH1cblxuICBnZXRUb3BvbG9naWNhbGx5T3JkZXJlZFZlcnRleE5hbWVzKCkgeyByZXR1cm4gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRUb3BvbG9naWNhbGx5T3JkZXJlZFZlcnRleE5hbWVzKCk7IH1cblxuICBhcmVDeWNsZXNQcmVzZW50KCkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VzTGVuZ3RoID0gdGhpcy5jeWNsaWNFZGdlcy5sZW5ndGgsXG4gICAgICAgICAgY3ljbGVzUHJlc2VudCA9IChjeWNsaWNFZGdlc0xlbmd0aCA+IDApO1xuXG4gICAgcmV0dXJuIGN5Y2xlc1ByZXNlbnQ7XG4gIH1cblxuICBhZGRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSkgeyB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmFkZFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTsgfVxuXG4gIGFkZFZlcnRpY2VzQnlWZXJ0ZXhOYW1lcyh2ZXJ0ZXhOYW1lcykge1xuICAgIHZlcnRleE5hbWVzLmZvckVhY2goKHZlcnRleE5hbWUpID0+IHRoaXMuYWRkVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpKTtcbiAgfVxuXG4gIHJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5yZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICB0aGlzLmZpbHRlckN5Y2xpY0VkZ2VzKCk7XG4gIH1cblxuICByZW1vdmVWZXJ0aWNlc0J5VmVydGV4TmFtZXModmVydGV4TmFtZXMpIHtcbiAgICB2ZXJ0ZXhOYW1lcy5mb3JFYWNoKCh2ZXJ0ZXhOYW1lKSA9PiB0aGlzLnJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSk7XG4gIH1cblxuICBhZGRFZGdlKGVkZ2UpIHtcbiAgICBjb25zdCBzdWNjZXNzID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5hZGRFZGdlKGVkZ2UpO1xuICAgIFxuICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgY29uc3QgY3ljbGljRWRnZXNJbmNsdWRlc0VkZ2UgPSBjaGVja0VkZ2VzSW5jbHVkZXNFZGdlKGVkZ2UsIHRoaXMuY3ljbGljRWRnZXMpO1xuXG4gICAgICBpZiAoIWN5Y2xpY0VkZ2VzSW5jbHVkZXNFZGdlKSB7XG4gICAgICAgIGNvbnN0IGN5Y2xpY0VkZ2UgPSBlZGdlOyAgLy8vXG5cbiAgICAgICAgdGhpcy5jeWNsaWNFZGdlcy5wdXNoKGN5Y2xpY0VkZ2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgYWRkRWRnZXMoZWRnZXMpIHtcbiAgICBlZGdlcy5mb3JFYWNoKChlZGdlKSA9PiB0aGlzLmFkZEVkZ2UoZWRnZSkpO1xuICB9XG5cbiAgcmVtb3ZlRWRnZShlZGdlLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzID0gZmFsc2UpIHtcbiAgICBjb25zdCBjeWNsaWNFZGdlc0luY2x1ZGVzRWRnZSA9IGNoZWNrRWRnZXNJbmNsdWRlc0VkZ2UoZWRnZSwgdGhpcy5jeWNsaWNFZGdlcyksXG4gICAgICAgICAgZWRnZVByZXNlbnQgPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmlzRWRnZVByZXNlbnQoZWRnZSksXG4gICAgICAgICAgZWRnZUN5Y2xpYyA9IGN5Y2xpY0VkZ2VzSW5jbHVkZXNFZGdlOyAvLy9cblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmIChlZGdlQ3ljbGljKSB7XG4gICAgICBjb25zdCBjeWNsaWNFZGdlID0gZWRnZTsgIC8vL1xuXG4gICAgICByZW1vdmVFZGdlRnJvbUVkZ2VzKGN5Y2xpY0VkZ2UsIHRoaXMuY3ljbGljRWRnZXMpO1xuICAgIH0gZWxzZSBpZiAoZWRnZVByZXNlbnQpIHtcbiAgICAgIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGgucmVtb3ZlRWRnZShlZGdlKTtcblxuICAgICAgaWYgKHJlbW92ZVN0cmFuZGVkVmVydGljZXMpIHtcbiAgICAgICAgY29uc3Qgc291cmNlVmVydGV4TmFtZSA9IGVkZ2UuZ2V0U291cmNlVmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gZWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICAgIHNvdXJjZVZlcnRleCA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpLFxuICAgICAgICAgICAgICB0YXJnZXRWZXJ0ZXggPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldFZlcnRleEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICAgICAgc291cmNlVmVydGV4U3RyYW5kZWQgPSBzb3VyY2VWZXJ0ZXguaXNTdHJhbmRlZCgpLFxuICAgICAgICAgICAgICB0YXJnZXRWZXJ0ZXhTdHJhbmRlZCA9IHRhcmdldFZlcnRleC5pc1N0cmFuZGVkKCk7XG5cbiAgICAgICAgaWYgKHNvdXJjZVZlcnRleFN0cmFuZGVkKSB7XG4gICAgICAgICAgdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5yZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGFyZ2V0VmVydGV4U3RyYW5kZWQpIHtcbiAgICAgICAgICB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLnJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZmlsdGVyQ3ljbGljRWRnZXMoKTtcbiAgfVxuXG4gIHJlbW92ZUVkZ2VzKGVkZ2VzLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzID0gZmFsc2UpIHtcbiAgICBlZGdlcy5mb3JFYWNoKChlZGdlKSA9PiB0aGlzLnJlbW92ZUVkZ2UoZWRnZSwgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcykpO1xuICB9XG5cbiAgYWRkRWRnZUJ5VmVydGV4TmFtZXMoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSkge1xuICAgIGNvbnN0IGVkZ2UgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgIHRoaXMuYWRkRWRnZShlZGdlKTtcbiAgfVxuXG4gIHJlbW92ZUVkZ2VCeVZlcnRleE5hbWVzKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMgPSBmYWxzZSkge1xuICAgIGNvbnN0IGVkZ2UgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgIHRoaXMucmVtb3ZlRWRnZShlZGdlLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzKTtcbiAgfVxuXG4gIHJlbW92ZUVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMgPSBmYWxzZSkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VzID0gZWRnZXNCeVRhcmdldFZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSwgdGhpcy5jeWNsaWNFZGdlcyksXG4gICAgICAgICAgZWRnZXMgPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldEVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgdGhpcy5yZW1vdmVFZGdlcyhjeWNsaWNFZGdlcywgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyk7XG5cbiAgICB0aGlzLnJlbW92ZUVkZ2VzKGVkZ2VzLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzKTtcbiAgfVxuXG4gIHJlbW92ZUVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMgPSBmYWxzZSkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VzID0gZWRnZXNCeVNvdXJjZVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGhpcy5jeWNsaWNFZGdlcyksXG4gICAgICAgICAgZWRnZXMgPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldEVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpO1xuXG4gICAgdGhpcy5yZW1vdmVFZGdlcyhjeWNsaWNFZGdlcywgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyk7XG5cbiAgICB0aGlzLnJlbW92ZUVkZ2VzKGVkZ2VzLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzKTtcbiAgfVxuXG4gIHJlbW92ZUFsbEVkZ2VzQW5kVmVydGljZXMoKSB7XG4gICAgdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaCA9IERpcmVjdGVkQWN5Y2xpY0dyYXBoLmZyb21Ob3RoaW5nKCk7XG5cbiAgICB0aGlzLmN5Y2xpY0VkZ2VzID0gW107XG4gIH1cblxuICBmaWx0ZXJDeWNsaWNFZGdlcygpIHtcbiAgICBmaWx0ZXIodGhpcy5jeWNsaWNFZGdlcywgKGN5Y2xpY0VkZ2UpID0+IHtcbiAgICAgIGNvbnN0IGVkZ2UgPSBjeWNsaWNFZGdlLCAgLy8vXG4gICAgICAgICAgICBzdWNjZXNzID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5hZGRFZGdlKGVkZ2UpO1xuXG4gICAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgY3ljbGljRWRnZXMgPSBbXSxcbiAgICAgICAgICBkaXJlY3RlZEFjeWNsaWNHcmFwaCA9IERpcmVjdGVkQWN5Y2xpY0dyYXBoLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgZGlyZWN0ZWRHcmFwaCA9IG5ldyBEaXJlY3RlZEdyYXBoKGN5Y2xpY0VkZ2VzLCBkaXJlY3RlZEFjeWNsaWNHcmFwaCk7XG4gICAgXG4gICAgcmV0dXJuIGRpcmVjdGVkR3JhcGg7ICAgIFxuICB9XG5cbiAgc3RhdGljIGZyb21WZXJ0ZXhMaXRlcmFscyh2ZXJ0ZXhMaXRlcmFscykge1xuICAgIGNvbnN0IHZlcnRleE5hbWVzID0gdmVydGV4TmFtZXNGcm9tVmVydGV4TGl0ZXJhbHModmVydGV4TGl0ZXJhbHMpLFxuICAgICAgICAgIGVkZ2VzID0gZWRnZXNGcm9tVmVydGV4TGl0ZXJhbHModmVydGV4TGl0ZXJhbHMpLFxuICAgICAgICAgIGRpcmVjdGVkR3JhcGggPSBEaXJlY3RlZEdyYXBoLmZyb21WZXJ0ZXhOYW1lc0FuZEVkZ2VzKHZlcnRleE5hbWVzLCBlZGdlcyk7XG5cbiAgICByZXR1cm4gZGlyZWN0ZWRHcmFwaDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmVydGV4TmFtZXNBbmRFZGdlcyh2ZXJ0ZXhOYW1lcywgZWRnZXMpIHtcbiAgICBsZXQgZGlyZWN0ZWRHcmFwaDtcblxuICAgIGNvbnN0IGdyYXBoID0gR3JhcGguZnJvbVZlcnRleE5hbWVzQW5kRWRnZXModmVydGV4TmFtZXMsIGVkZ2VzKSxcbiAgICAgICAgICBjeWNsZXNQcmVzZW50ID0gZ3JhcGguYXJlQ3ljbGVzUHJlc2VudCgpO1xuXG4gICAgaWYgKGN5Y2xlc1ByZXNlbnQpIHtcbiAgICAgIGNvbnN0IGN5Y2xpY0VkZ2VzID0gW10sXG4gICAgICAgICAgICBkaXJlY3RlZEFjeWNsaWNHcmFwaCA9IERpcmVjdGVkQWN5Y2xpY0dyYXBoLmZyb21WZXJ0ZXhOYW1lcyh2ZXJ0ZXhOYW1lcyk7XG5cbiAgICAgIGRpcmVjdGVkR3JhcGggPSBuZXcgRGlyZWN0ZWRHcmFwaChjeWNsaWNFZGdlcywgZGlyZWN0ZWRBY3ljbGljR3JhcGgpO1xuXG4gICAgICBlZGdlcy5mb3JFYWNoKGZ1bmN0aW9uKGVkZ2UpIHtcbiAgICAgICAgZGlyZWN0ZWRHcmFwaC5hZGRFZGdlKGVkZ2UpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRvcG9sb2dpY2FsbHlPcmRlcmVkVmVydGljZXMgPSBncmFwaC5nZXRUb3BvbG9naWNhbGx5T3JkZXJlZFZlcnRpY2VzKCksXG4gICAgICAgICAgICBjeWNsaWNFZGdlcyA9IFtdLFxuICAgICAgICAgICAgZGlyZWN0ZWRBY3ljbGljR3JhcGggPSBEaXJlY3RlZEFjeWNsaWNHcmFwaC5mcm9tVG9wb2xvZ2ljYWxseU9yZGVyZWRWZXJ0aWNlcyh0b3BvbG9naWNhbGx5T3JkZXJlZFZlcnRpY2VzKTtcblxuICAgICAgZGlyZWN0ZWRHcmFwaCA9IG5ldyBEaXJlY3RlZEdyYXBoKGN5Y2xpY0VkZ2VzLCBkaXJlY3RlZEFjeWNsaWNHcmFwaCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdGVkR3JhcGg7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEaXJlY3RlZEdyYXBoO1xuXG4iXX0=