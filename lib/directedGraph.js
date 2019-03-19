'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var kahn = require('occam-kahn'),
    necessary = require('necessary'),
    pearcekelly = require('occam-pearce-kelly');

var Edge = require('./edge'),
    Cycle = require('./cycle'),
    PartialCycle = require('./partialCycle'),
    edgeUtilities = require('./utilities/edge'),
    vertexUtilities = require('./utilities/vertex');

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
    edgesBySourceVertexName = edgeUtilities.edgesBySourceVertexName;

var DirectedGraph = function () {
  function DirectedGraph(cyclicEdges, directedAcyclicGraph) {
    _classCallCheck(this, DirectedGraph);

    this.cyclicEdges = cyclicEdges;
    this.directedAcyclicGraph = directedAcyclicGraph;
  }

  _createClass(DirectedGraph, [{
    key: 'areCyclesPresentByVertexName',
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
    key: 'getFirstCycleByVertexName',
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
    key: 'addVertexByVertexName',
    value: function addVertexByVertexName(vertexName) {
      this.directedAcyclicGraph.addVertexByVertexName(vertexName);
    }
  }, {
    key: 'removeVertexByVertexName',
    value: function removeVertexByVertexName(vertexName) {
      this.directedAcyclicGraph.removeVertexByVertexName(vertexName);

      this.filterCyclicEdges();
    }
  }, {
    key: 'addEdge',
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
    key: 'addEdges',
    value: function addEdges(edges) {
      var _this2 = this;

      edges.forEach(function (edge) {
        _this2.addEdge(edge);
      });
    }
  }, {
    key: 'removeEdge',
    value: function removeEdge(edge) {
      var removeStrandedVertices = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var cyclicEdgesIncludesEdge = checkEdgesIncludesEdge(edge, this.cyclicEdges),
          edgeCyclic = cyclicEdgesIncludesEdge,
          ///
      edgePresent = this.directedAcyclicGraph.isEdgePresent(edge);

      if (false) {
        ///
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
    key: 'removeEdges',
    value: function removeEdges(edges) {
      var _this3 = this;

      var removeStrandedVertices = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      edges.forEach(function (edge) {
        _this3.removeEdge(edge, removeStrandedVertices);
      });
    }
  }, {
    key: 'addEdgeByVertexNames',
    value: function addEdgeByVertexNames(sourceVertexName, targetVertexName) {
      var edge = Edge.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);

      this.addEdge(edge);
    }
  }, {
    key: 'removeEdgeByVertexNames',
    value: function removeEdgeByVertexNames(sourceVertexName, targetVertexName) {
      var removeStrandedVertices = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var edge = Edge.fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);

      this.removeEdge(edge, removeStrandedVertices);
    }
  }, {
    key: 'removeEdgesByTargetVertexName',
    value: function removeEdgesByTargetVertexName(targetVertexName) {
      var removeStrandedVertices = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var edges = this.directedAcyclicGraph.getEdgesByTargetVertexName(targetVertexName);

      this.removeEdges(edges, removeStrandedVertices);
    }
  }, {
    key: 'removeEdgesBySourceVertexName',
    value: function removeEdgesBySourceVertexName(sourceVertexName) {
      var removeStrandedVertices = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var cyclicEdges = edgesBySourceVertexName(sourceVertexName, this.cyclicEdges),
          edges = this.directedAcyclicGraph.getEdgesBySourceVertexName(sourceVertexName);

      this.removeEdges(cyclicEdges, removeStrandedVertices);

      this.removeEdges(edges, removeStrandedVertices);
    }
  }, {
    key: 'removeAllEdgesAndVertices',
    value: function removeAllEdgesAndVertices() {
      this.directedAcyclicGraph = DirectedAcyclicGraph.fromNothing();

      this.cyclicEdges = [];
    }
  }, {
    key: 'filterCyclicEdges',
    value: function filterCyclicEdges() {
      var _this4 = this;

      filter(this.cyclicEdges, function (cyclicEdge) {
        var edge = cyclicEdge,
            ///
        success = _this4.directedAcyclicGraph.addEdge(edge);

        if (!success) {
          return true;
        }
      });
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing() {
      var cyclicEdges = [],
          directedAcyclicGraph = DirectedAcyclicGraph.fromNothing(),
          directedGraph = new DirectedGraph(cyclicEdges, directedAcyclicGraph);

      return directedGraph;
    }
  }, {
    key: 'fromVertexLiterals',
    value: function fromVertexLiterals(vertexLiterals) {
      var vertexNames = vertexNamesFromVertexLiterals(vertexLiterals),
          edges = edgesFromVertexLiterals(vertexLiterals),
          directedGraph = DirectedGraph.fromVertexNamesAndEdges(vertexNames, edges);

      return directedGraph;
    }
  }, {
    key: 'fromVertexNamesAndEdges',
    value: function fromVertexNamesAndEdges(vertexNames, edges) {
      var directedGraph = void 0;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9kaXJlY3RlZEdyYXBoLmpzIl0sIm5hbWVzIjpbImthaG4iLCJyZXF1aXJlIiwibmVjZXNzYXJ5IiwicGVhcmNla2VsbHkiLCJFZGdlIiwiQ3ljbGUiLCJQYXJ0aWFsQ3ljbGUiLCJlZGdlVXRpbGl0aWVzIiwidmVydGV4VXRpbGl0aWVzIiwiR3JhcGgiLCJhcnJheVV0aWxpdGllcyIsImZpcnN0IiwiZmlsdGVyIiwiRGlyZWN0ZWRBY3ljbGljR3JhcGgiLCJ2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhMaXRlcmFscyIsImZvcndhcmRzRGVwdGhGaXJzdFNlYXJjaCIsImVkZ2VzRnJvbVZlcnRleExpdGVyYWxzIiwiY2hlY2tFZGdlc0luY2x1ZGVzRWRnZSIsInJlbW92ZUVkZ2VGcm9tRWRnZXMiLCJlZGdlc0J5U291cmNlVmVydGV4TmFtZSIsIkRpcmVjdGVkR3JhcGgiLCJjeWNsaWNFZGdlcyIsImRpcmVjdGVkQWN5Y2xpY0dyYXBoIiwidmVydGV4TmFtZSIsImN5Y2xlc1ByZXNlbnQiLCJ2ZXJ0ZXhQcmVzZW50IiwiaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lIiwiZmlyc3RDeWNsZSIsImdldEZpcnN0Q3ljbGVCeVZlcnRleE5hbWUiLCJ2ZXJ0ZXgiLCJnZXRWZXJ0ZXhCeVZlcnRleE5hbWUiLCJzbGljZSIsInBhcnRpYWxDeWNsZXMiLCJjeWNsZXMiLCJ2aXNpdGVkVmVydGV4IiwiZ2V0UHJlZGVjZXNzb3JWZXJ0aWNlcyIsInZpc2l0ZWRWZXJ0ZXhOYW1lIiwiZ2V0TmFtZSIsInNvdXJjZVZlcnRleE5hbWUiLCJjeWNsaWNFZGdlIiwibWF0Y2hlcyIsIm1hdGNoU291cmNlVmVydGV4TmFtZSIsInByZWRlY2Vzc29yVmVydGljZXMiLCJwYXJ0aWFsQ3ljbGUiLCJmcm9tQ3ljbGljRWRnZUFuZFByZWRlY2Vzc29yVmVydGljZXMiLCJwdXNoIiwiY3ljbGljRWRnZXNMZW5ndGgiLCJsZW5ndGgiLCJ0ZXJtaW5hdGUiLCJzb21lIiwidGFyZ2V0VmVydGV4TmFtZSIsImdldFRhcmdldFZlcnRleE5hbWUiLCJ0YXJnZXRWZXJ0ZXgiLCJzdWNjZXNzb3JWZXJ0aWNlcyIsImN5Y2xlIiwiZnJvbVZlcnRleE5hbWVQYXJ0aWFsQ3ljbGVBbmRTdWNjZXNzb3JWZXJ0aWNlcyIsImN5Y2xlc0xlbmd0aCIsImFkZFZlcnRleEJ5VmVydGV4TmFtZSIsInJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZSIsImZpbHRlckN5Y2xpY0VkZ2VzIiwiZWRnZSIsInN1Y2Nlc3MiLCJhZGRFZGdlIiwiY3ljbGljRWRnZXNJbmNsdWRlc0VkZ2UiLCJlZGdlcyIsImZvckVhY2giLCJyZW1vdmVTdHJhbmRlZFZlcnRpY2VzIiwiZWRnZUN5Y2xpYyIsImVkZ2VQcmVzZW50IiwiaXNFZGdlUHJlc2VudCIsInJlbW92ZUVkZ2UiLCJnZXRTb3VyY2VWZXJ0ZXhOYW1lIiwic291cmNlVmVydGV4Iiwic291cmNlVmVydGV4U3RyYW5kZWQiLCJpc1N0cmFuZGVkIiwidGFyZ2V0VmVydGV4U3RyYW5kZWQiLCJmcm9tU291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUiLCJnZXRFZGdlc0J5VGFyZ2V0VmVydGV4TmFtZSIsInJlbW92ZUVkZ2VzIiwiZ2V0RWRnZXNCeVNvdXJjZVZlcnRleE5hbWUiLCJmcm9tTm90aGluZyIsImRpcmVjdGVkR3JhcGgiLCJ2ZXJ0ZXhMaXRlcmFscyIsInZlcnRleE5hbWVzIiwiZnJvbVZlcnRleE5hbWVzQW5kRWRnZXMiLCJncmFwaCIsImFyZUN5Y2xlc1ByZXNlbnQiLCJmcm9tVmVydGV4TmFtZXMiLCJ0b3BvbG9naWNhbGx5T3JkZXJlZFZlcnRpY2VzIiwiZ2V0VG9wb2xvZ2ljYWxseU9yZGVyZWRWZXJ0aWNlcyIsImZyb21Ub3BvbG9naWNhbGx5T3JkZXJlZFZlcnRpY2VzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsWUFBUixDQUFiO0FBQUEsSUFDTUMsWUFBWUQsUUFB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ZCxDQUFzQ0QsV0FBdEMsRUFBbURuQixLQUFuRCxDQUZ0Qjs7QUFJQSxhQUFPaUIsYUFBUDtBQUNEOzs7NENBRThCRSxXLEVBQWFuQixLLEVBQU87QUFDakQsVUFBSWlCLHNCQUFKOztBQUVBLFVBQU1JLFFBQVE1RSxNQUFNMkUsdUJBQU4sQ0FBOEJELFdBQTlCLEVBQTJDbkIsS0FBM0MsQ0FBZDtBQUFBLFVBQ014QyxnQkFBZ0I2RCxNQUFNQyxnQkFBTixFQUR0Qjs7QUFHQSxVQUFJOUQsYUFBSixFQUFtQjtBQUNqQixZQUFNSCxjQUFjLEVBQXBCO0FBQUEsWUFDTUMsdUJBQXVCVCxxQkFBcUIwRSxlQUFyQixDQUFxQ0osV0FBckMsQ0FEN0I7O0FBR0FGLHdCQUFnQixJQUFJN0QsYUFBSixDQUFrQkMsV0FBbEIsRUFBK0JDLG9CQUEvQixDQUFoQjs7QUFFQTBDLGNBQU1DLE9BQU4sQ0FBYyxVQUFTTCxJQUFULEVBQWU7QUFDM0JxQix3QkFBY25CLE9BQWQsQ0FBc0JGLElBQXRCO0FBQ0QsU0FGRDtBQUdELE9BVEQsTUFTTztBQUNMLFlBQU00QiwrQkFBK0JILE1BQU1JLCtCQUFOLEVBQXJDO0FBQUEsWUFDTXBFLGVBQWMsRUFEcEI7QUFBQSxZQUVNQyx3QkFBdUJULHFCQUFxQjZFLGdDQUFyQixDQUFzREYsNEJBQXRELENBRjdCOztBQUlBUCx3QkFBZ0IsSUFBSTdELGFBQUosQ0FBa0JDLFlBQWxCLEVBQStCQyxxQkFBL0IsQ0FBaEI7QUFDRDs7QUFFRCxhQUFPMkQsYUFBUDtBQUNEOzs7Ozs7QUFHSFUsT0FBT0MsT0FBUCxHQUFpQnhFLGFBQWpCIiwiZmlsZSI6ImRpcmVjdGVkR3JhcGguanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGthaG4gPSByZXF1aXJlKCdvY2NhbS1rYWhuJyksXG4gICAgICBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKSxcbiAgICAgIHBlYXJjZWtlbGx5ID0gcmVxdWlyZSgnb2NjYW0tcGVhcmNlLWtlbGx5Jyk7XG5cbmNvbnN0IEVkZ2UgPSByZXF1aXJlKCcuL2VkZ2UnKSxcbiAgICAgIEN5Y2xlID0gcmVxdWlyZSgnLi9jeWNsZScpLFxuICAgICAgUGFydGlhbEN5Y2xlID0gcmVxdWlyZSgnLi9wYXJ0aWFsQ3ljbGUnKSxcbiAgICAgIGVkZ2VVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9lZGdlJyksXG4gICAgICB2ZXJ0ZXhVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy92ZXJ0ZXgnKTtcblxuY29uc3QgeyBHcmFwaCB9ID0ga2FobixcbiAgICAgIHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgZmlyc3QsIGZpbHRlciB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IERpcmVjdGVkQWN5Y2xpY0dyYXBoIH0gPSBwZWFyY2VrZWxseSxcbiAgICAgIHsgdmVydGV4TmFtZXNGcm9tVmVydGV4TGl0ZXJhbHMsIGZvcndhcmRzRGVwdGhGaXJzdFNlYXJjaCB9ID0gdmVydGV4VXRpbGl0aWVzLFxuICAgICAgeyBlZGdlc0Zyb21WZXJ0ZXhMaXRlcmFscywgY2hlY2tFZGdlc0luY2x1ZGVzRWRnZSwgcmVtb3ZlRWRnZUZyb21FZGdlcywgZWRnZXNCeVNvdXJjZVZlcnRleE5hbWUgfSA9IGVkZ2VVdGlsaXRpZXM7XG5cbmNsYXNzIERpcmVjdGVkR3JhcGgge1xuICBjb25zdHJ1Y3RvcihjeWNsaWNFZGdlcywgZGlyZWN0ZWRBY3ljbGljR3JhcGgpIHtcbiAgICB0aGlzLmN5Y2xpY0VkZ2VzID0gY3ljbGljRWRnZXM7XG4gICAgdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaCA9IGRpcmVjdGVkQWN5Y2xpY0dyYXBoO1xuICB9XG4gIFxuICBhcmVDeWNsZXNQcmVzZW50QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBsZXQgY3ljbGVzUHJlc2VudCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdmVydGV4UHJlc2VudCA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgaWYgKHZlcnRleFByZXNlbnQpIHtcbiAgICAgIGNvbnN0IGZpcnN0Q3ljbGUgPSB0aGlzLmdldEZpcnN0Q3ljbGVCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICAgIGN5Y2xlc1ByZXNlbnQgPSAoZmlyc3RDeWNsZSAhPT0gbnVsbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGN5Y2xlc1ByZXNlbnQ7XG4gIH1cblxuICBnZXRGaXJzdEN5Y2xlQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBsZXQgZmlyc3RDeWNsZSA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgdmVydGV4ID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSksXG4gICAgICAgICAgY3ljbGljRWRnZXMgPSB0aGlzLmN5Y2xpY0VkZ2VzLnNsaWNlKCksIC8vL1xuICAgICAgICAgIHBhcnRpYWxDeWNsZXMgPSBbXSxcbiAgICAgICAgICBjeWNsZXMgPSBbXTtcblxuICAgIGZvcndhcmRzRGVwdGhGaXJzdFNlYXJjaCh2ZXJ0ZXgsIGZ1bmN0aW9uKHZpc2l0ZWRWZXJ0ZXgsIGdldFByZWRlY2Vzc29yVmVydGljZXMpIHtcbiAgICAgIGNvbnN0IHZpc2l0ZWRWZXJ0ZXhOYW1lID0gdmlzaXRlZFZlcnRleC5nZXROYW1lKCksXG4gICAgICAgICAgICBzb3VyY2VWZXJ0ZXhOYW1lID0gdmlzaXRlZFZlcnRleE5hbWU7IC8vL1xuXG4gICAgICBmaWx0ZXIoY3ljbGljRWRnZXMsIGZ1bmN0aW9uKGN5Y2xpY0VkZ2UpIHtcbiAgICAgICAgY29uc3QgbWF0Y2hlcyA9IGN5Y2xpY0VkZ2UubWF0Y2hTb3VyY2VWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpO1xuXG4gICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgY29uc3QgcHJlZGVjZXNzb3JWZXJ0aWNlcyA9IGdldFByZWRlY2Vzc29yVmVydGljZXMoKSxcbiAgICAgICAgICAgICAgICBwYXJ0aWFsQ3ljbGUgPSAgUGFydGlhbEN5Y2xlLmZyb21DeWNsaWNFZGdlQW5kUHJlZGVjZXNzb3JWZXJ0aWNlcyhjeWNsaWNFZGdlLCBwcmVkZWNlc3NvclZlcnRpY2VzKTtcbiAgICAgICAgICBcbiAgICAgICAgICBwYXJ0aWFsQ3ljbGVzLnB1c2gocGFydGlhbEN5Y2xlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGN5Y2xpY0VkZ2VzTGVuZ3RoID0gY3ljbGljRWRnZXMubGVuZ3RoLFxuICAgICAgICAgICAgdGVybWluYXRlID0gKGN5Y2xpY0VkZ2VzTGVuZ3RoID09PSAwKTtcblxuICAgICAgcmV0dXJuIHRlcm1pbmF0ZTtcbiAgICB9KTtcblxuICAgIHBhcnRpYWxDeWNsZXMuc29tZSgocGFydGlhbEN5Y2xlKSA9PiB7XG4gICAgICBjb25zdCB0YXJnZXRWZXJ0ZXhOYW1lID0gcGFydGlhbEN5Y2xlLmdldFRhcmdldFZlcnRleE5hbWUoKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgICBmb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2godGFyZ2V0VmVydGV4LCBmdW5jdGlvbih2aXNpdGVkVmVydGV4LCBnZXRQcmVkZWNlc3NvclZlcnRpY2VzKSB7XG4gICAgICAgIGNvbnN0IHZpc2l0ZWRWZXJ0ZXhOYW1lID0gdmlzaXRlZFZlcnRleC5nZXROYW1lKCk7XG5cbiAgICAgICAgaWYgKHZpc2l0ZWRWZXJ0ZXhOYW1lID09PSB2ZXJ0ZXhOYW1lKSB7XG4gICAgICAgICAgY29uc3QgcHJlZGVjZXNzb3JWZXJ0aWNlcyA9IGdldFByZWRlY2Vzc29yVmVydGljZXMoKSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzb3JWZXJ0aWNlcyA9IHByZWRlY2Vzc29yVmVydGljZXMsICAvLy9cbiAgICAgICAgICAgICAgICBjeWNsZSA9IEN5Y2xlLmZyb21WZXJ0ZXhOYW1lUGFydGlhbEN5Y2xlQW5kU3VjY2Vzc29yVmVydGljZXModmVydGV4TmFtZSwgcGFydGlhbEN5Y2xlLCBzdWNjZXNzb3JWZXJ0aWNlcyk7XG5cbiAgICAgICAgICBjeWNsZXMucHVzaChjeWNsZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjeWNsZXNMZW5ndGggPSBjeWNsZXMubGVuZ3RoLFxuICAgICAgICAgICAgICB0ZXJtaW5hdGUgPSAoY3ljbGVzTGVuZ3RoID4gMCk7XG5cbiAgICAgICAgcmV0dXJuIHRlcm1pbmF0ZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY3ljbGVzTGVuZ3RoID0gY3ljbGVzLmxlbmd0aDtcbiAgICBcbiAgICBpZiAoY3ljbGVzTGVuZ3RoID4gMCkge1xuICAgICAgZmlyc3RDeWNsZSA9IGZpcnN0KGN5Y2xlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpcnN0Q3ljbGU7XG4gIH1cblxuICBhZGRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSkgeyB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmFkZFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTsgfVxuXG4gIHJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5yZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICB0aGlzLmZpbHRlckN5Y2xpY0VkZ2VzKCk7XG4gIH1cblxuICBhZGRFZGdlKGVkZ2UpIHtcbiAgICBjb25zdCBzdWNjZXNzID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5hZGRFZGdlKGVkZ2UpO1xuICAgIFxuICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgY29uc3QgY3ljbGljRWRnZXNJbmNsdWRlc0VkZ2UgPSBjaGVja0VkZ2VzSW5jbHVkZXNFZGdlKGVkZ2UsIHRoaXMuY3ljbGljRWRnZXMpO1xuXG4gICAgICBpZiAoIWN5Y2xpY0VkZ2VzSW5jbHVkZXNFZGdlKSB7XG4gICAgICAgIGNvbnN0IGN5Y2xpY0VkZ2UgPSBlZGdlOyAgLy8vXG5cbiAgICAgICAgdGhpcy5jeWNsaWNFZGdlcy5wdXNoKGN5Y2xpY0VkZ2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgYWRkRWRnZXMoZWRnZXMpIHtcbiAgICBlZGdlcy5mb3JFYWNoKChlZGdlKSA9PiB7XG4gICAgICB0aGlzLmFkZEVkZ2UoZWRnZSk7XG4gICAgfSk7XG4gIH1cblxuICByZW1vdmVFZGdlKGVkZ2UsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMgPSBmYWxzZSkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VzSW5jbHVkZXNFZGdlID0gY2hlY2tFZGdlc0luY2x1ZGVzRWRnZShlZGdlLCB0aGlzLmN5Y2xpY0VkZ2VzKSxcbiAgICAgICAgICBlZGdlQ3ljbGljID0gY3ljbGljRWRnZXNJbmNsdWRlc0VkZ2UsIC8vL1xuICAgICAgICAgIGVkZ2VQcmVzZW50ID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5pc0VkZ2VQcmVzZW50KGVkZ2UpO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKGVkZ2VDeWNsaWMpIHtcbiAgICAgIGNvbnN0IGN5Y2xpY0VkZ2UgPSBlZGdlOyAgLy8vXG5cbiAgICAgIHJlbW92ZUVkZ2VGcm9tRWRnZXMoY3ljbGljRWRnZSwgdGhpcy5jeWNsaWNFZGdlcyk7XG4gICAgfSBlbHNlIGlmIChlZGdlUHJlc2VudCkge1xuICAgICAgdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5yZW1vdmVFZGdlKGVkZ2UpO1xuXG4gICAgICBpZiAocmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcykge1xuICAgICAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gZWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICAgIHRhcmdldFZlcnRleE5hbWUgPSBlZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKSxcbiAgICAgICAgICAgICAgc291cmNlVmVydGV4ID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSksXG4gICAgICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpLFxuICAgICAgICAgICAgICBzb3VyY2VWZXJ0ZXhTdHJhbmRlZCA9IHNvdXJjZVZlcnRleC5pc1N0cmFuZGVkKCksXG4gICAgICAgICAgICAgIHRhcmdldFZlcnRleFN0cmFuZGVkID0gdGFyZ2V0VmVydGV4LmlzU3RyYW5kZWQoKTtcblxuICAgICAgICBpZiAoc291cmNlVmVydGV4U3RyYW5kZWQpIHtcbiAgICAgICAgICB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLnJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0YXJnZXRWZXJ0ZXhTdHJhbmRlZCkge1xuICAgICAgICAgIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGgucmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5maWx0ZXJDeWNsaWNFZGdlcygpO1xuICB9XG5cbiAgcmVtb3ZlRWRnZXMoZWRnZXMsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMgPSBmYWxzZSkge1xuICAgIGVkZ2VzLmZvckVhY2goKGVkZ2UpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlRWRnZShlZGdlLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZEVkZ2VCeVZlcnRleE5hbWVzKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpIHtcbiAgICBjb25zdCBlZGdlID0gRWRnZS5mcm9tU291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICB0aGlzLmFkZEVkZ2UoZWRnZSk7XG4gIH1cblxuICByZW1vdmVFZGdlQnlWZXJ0ZXhOYW1lcyhzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzID0gZmFsc2UpIHtcbiAgICBjb25zdCBlZGdlID0gRWRnZS5mcm9tU291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICB0aGlzLnJlbW92ZUVkZ2UoZWRnZSwgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyk7XG4gIH1cblxuICByZW1vdmVFZGdlc0J5VGFyZ2V0VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzID0gZmFsc2UpIHtcbiAgICBjb25zdCBlZGdlcyA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0RWRnZXNCeVRhcmdldFZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICB0aGlzLnJlbW92ZUVkZ2VzKGVkZ2VzLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzKTtcbiAgfVxuXG4gIHJlbW92ZUVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMgPSBmYWxzZSkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VzID0gZWRnZXNCeVNvdXJjZVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGhpcy5jeWNsaWNFZGdlcyksXG4gICAgICAgICAgZWRnZXMgPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldEVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpO1xuXG4gICAgdGhpcy5yZW1vdmVFZGdlcyhjeWNsaWNFZGdlcywgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyk7XG5cbiAgICB0aGlzLnJlbW92ZUVkZ2VzKGVkZ2VzLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzKTtcbiAgfVxuXG4gIHJlbW92ZUFsbEVkZ2VzQW5kVmVydGljZXMoKSB7XG4gICAgdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaCA9IERpcmVjdGVkQWN5Y2xpY0dyYXBoLmZyb21Ob3RoaW5nKCk7XG5cbiAgICB0aGlzLmN5Y2xpY0VkZ2VzID0gW107XG4gIH1cblxuICBmaWx0ZXJDeWNsaWNFZGdlcygpIHtcbiAgICBmaWx0ZXIodGhpcy5jeWNsaWNFZGdlcywgKGN5Y2xpY0VkZ2UpID0+IHtcbiAgICAgIGNvbnN0IGVkZ2UgPSBjeWNsaWNFZGdlLCAgLy8vXG4gICAgICAgICAgICBzdWNjZXNzID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5hZGRFZGdlKGVkZ2UpO1xuXG4gICAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgY3ljbGljRWRnZXMgPSBbXSxcbiAgICAgICAgICBkaXJlY3RlZEFjeWNsaWNHcmFwaCA9IERpcmVjdGVkQWN5Y2xpY0dyYXBoLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgZGlyZWN0ZWRHcmFwaCA9IG5ldyBEaXJlY3RlZEdyYXBoKGN5Y2xpY0VkZ2VzLCBkaXJlY3RlZEFjeWNsaWNHcmFwaCk7XG4gICAgXG4gICAgcmV0dXJuIGRpcmVjdGVkR3JhcGg7ICAgIFxuICB9XG5cbiAgc3RhdGljIGZyb21WZXJ0ZXhMaXRlcmFscyh2ZXJ0ZXhMaXRlcmFscykge1xuICAgIGNvbnN0IHZlcnRleE5hbWVzID0gdmVydGV4TmFtZXNGcm9tVmVydGV4TGl0ZXJhbHModmVydGV4TGl0ZXJhbHMpLFxuICAgICAgICAgIGVkZ2VzID0gZWRnZXNGcm9tVmVydGV4TGl0ZXJhbHModmVydGV4TGl0ZXJhbHMpLFxuICAgICAgICAgIGRpcmVjdGVkR3JhcGggPSBEaXJlY3RlZEdyYXBoLmZyb21WZXJ0ZXhOYW1lc0FuZEVkZ2VzKHZlcnRleE5hbWVzLCBlZGdlcyk7XG5cbiAgICByZXR1cm4gZGlyZWN0ZWRHcmFwaDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmVydGV4TmFtZXNBbmRFZGdlcyh2ZXJ0ZXhOYW1lcywgZWRnZXMpIHtcbiAgICBsZXQgZGlyZWN0ZWRHcmFwaDtcblxuICAgIGNvbnN0IGdyYXBoID0gR3JhcGguZnJvbVZlcnRleE5hbWVzQW5kRWRnZXModmVydGV4TmFtZXMsIGVkZ2VzKSxcbiAgICAgICAgICBjeWNsZXNQcmVzZW50ID0gZ3JhcGguYXJlQ3ljbGVzUHJlc2VudCgpO1xuXG4gICAgaWYgKGN5Y2xlc1ByZXNlbnQpIHtcbiAgICAgIGNvbnN0IGN5Y2xpY0VkZ2VzID0gW10sXG4gICAgICAgICAgICBkaXJlY3RlZEFjeWNsaWNHcmFwaCA9IERpcmVjdGVkQWN5Y2xpY0dyYXBoLmZyb21WZXJ0ZXhOYW1lcyh2ZXJ0ZXhOYW1lcyk7XG5cbiAgICAgIGRpcmVjdGVkR3JhcGggPSBuZXcgRGlyZWN0ZWRHcmFwaChjeWNsaWNFZGdlcywgZGlyZWN0ZWRBY3ljbGljR3JhcGgpO1xuXG4gICAgICBlZGdlcy5mb3JFYWNoKGZ1bmN0aW9uKGVkZ2UpIHtcbiAgICAgICAgZGlyZWN0ZWRHcmFwaC5hZGRFZGdlKGVkZ2UpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRvcG9sb2dpY2FsbHlPcmRlcmVkVmVydGljZXMgPSBncmFwaC5nZXRUb3BvbG9naWNhbGx5T3JkZXJlZFZlcnRpY2VzKCksXG4gICAgICAgICAgICBjeWNsaWNFZGdlcyA9IFtdLFxuICAgICAgICAgICAgZGlyZWN0ZWRBY3ljbGljR3JhcGggPSBEaXJlY3RlZEFjeWNsaWNHcmFwaC5mcm9tVG9wb2xvZ2ljYWxseU9yZGVyZWRWZXJ0aWNlcyh0b3BvbG9naWNhbGx5T3JkZXJlZFZlcnRpY2VzKTtcblxuICAgICAgZGlyZWN0ZWRHcmFwaCA9IG5ldyBEaXJlY3RlZEdyYXBoKGN5Y2xpY0VkZ2VzLCBkaXJlY3RlZEFjeWNsaWNHcmFwaCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdGVkR3JhcGg7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEaXJlY3RlZEdyYXBoO1xuXG4iXX0=