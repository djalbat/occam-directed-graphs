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
    edgesBySourceVertexName = edgeUtilities.edgesBySourceVertexName,
    edgesByTargetVertexName = edgeUtilities.edgesByTargetVertexName;

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
    key: 'addVerticesByVertexNames',
    value: function addVerticesByVertexNames(vertexNames) {
      var _this2 = this;

      vertexNames.forEach(function (vertexName) {
        return _this2.addVertexByVertexName(vertexName);
      });
    }
  }, {
    key: 'removeVertexByVertexName',
    value: function removeVertexByVertexName(vertexName) {
      this.directedAcyclicGraph.removeVertexByVertexName(vertexName);

      this.filterCyclicEdges();
    }
  }, {
    key: 'removeVerticesByVertexNames',
    value: function removeVerticesByVertexNames(vertexNames) {
      var _this3 = this;

      vertexNames.forEach(function (vertexName) {
        return _this3.removeVertexByVertexName(vertexName);
      });
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
      var _this4 = this;

      edges.forEach(function (edge) {
        return _this4.addEdge(edge);
      });
    }
  }, {
    key: 'removeEdge',
    value: function removeEdge(edge) {
      var removeStrandedVertices = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var cyclicEdgesIncludesEdge = checkEdgesIncludesEdge(edge, this.cyclicEdges),
          edgePresent = this.directedAcyclicGraph.isEdgePresent(edge),
          edgeCyclic = cyclicEdgesIncludesEdge; ///

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
      var _this5 = this;

      var removeStrandedVertices = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      edges.forEach(function (edge) {
        return _this5.removeEdge(edge, removeStrandedVertices);
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

      var cyclicEdges = edgesByTargetVertexName(targetVertexName, this.cyclicEdges),
          edges = this.directedAcyclicGraph.getEdgesByTargetVertexName(targetVertexName);

      this.removeEdges(cyclicEdges, removeStrandedVertices);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9kaXJlY3RlZEdyYXBoLmpzIl0sIm5hbWVzIjpbImthaG4iLCJyZXF1aXJlIiwibmVjZXNzYXJ5IiwicGVhcmNla2VsbHkiLCJFZGdlIiwiQ3ljbGUiLCJQYXJ0aWFsQ3ljbGUiLCJlZGdlVXRpbGl0aWVzIiwidmVydGV4VXRpbGl0aWVzIiwiR3JhcGgiLCJhcnJheVV0aWxpdGllcyIsImZpcnN0IiwiZmlsdGVyIiwiRGlyZWN0ZWRBY3ljbGljR3JhcGgiLCJ2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhMaXRlcmFscyIsImZvcndhcmRzRGVwdGhGaXJzdFNlYXJjaCIsImVkZ2VzRnJvbVZlcnRleExpdGVyYWxzIiwiY2hlY2tFZGdlc0luY2x1ZGVzRWRnZSIsInJlbW92ZUVkZ2VGcm9tRWRnZXMiLCJlZGdlc0J5U291cmNlVmVydGV4TmFtZSIsImVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lIiwiRGlyZWN0ZWRHcmFwaCIsImN5Y2xpY0VkZ2VzIiwiZGlyZWN0ZWRBY3ljbGljR3JhcGgiLCJ2ZXJ0ZXhOYW1lIiwiY3ljbGVzUHJlc2VudCIsInZlcnRleFByZXNlbnQiLCJpc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUiLCJmaXJzdEN5Y2xlIiwiZ2V0Rmlyc3RDeWNsZUJ5VmVydGV4TmFtZSIsInZlcnRleCIsImdldFZlcnRleEJ5VmVydGV4TmFtZSIsInNsaWNlIiwicGFydGlhbEN5Y2xlcyIsImN5Y2xlcyIsInZpc2l0ZWRWZXJ0ZXgiLCJnZXRQcmVkZWNlc3NvclZlcnRpY2VzIiwidmlzaXRlZFZlcnRleE5hbWUiLCJnZXROYW1lIiwic291cmNlVmVydGV4TmFtZSIsImN5Y2xpY0VkZ2UiLCJtYXRjaGVzIiwibWF0Y2hTb3VyY2VWZXJ0ZXhOYW1lIiwicHJlZGVjZXNzb3JWZXJ0aWNlcyIsInBhcnRpYWxDeWNsZSIsImZyb21DeWNsaWNFZGdlQW5kUHJlZGVjZXNzb3JWZXJ0aWNlcyIsInB1c2giLCJjeWNsaWNFZGdlc0xlbmd0aCIsImxlbmd0aCIsInRlcm1pbmF0ZSIsInNvbWUiLCJ0YXJnZXRWZXJ0ZXhOYW1lIiwiZ2V0VGFyZ2V0VmVydGV4TmFtZSIsInRhcmdldFZlcnRleCIsInN1Y2Nlc3NvclZlcnRpY2VzIiwiY3ljbGUiLCJmcm9tVmVydGV4TmFtZVBhcnRpYWxDeWNsZUFuZFN1Y2Nlc3NvclZlcnRpY2VzIiwiY3ljbGVzTGVuZ3RoIiwiYWRkVmVydGV4QnlWZXJ0ZXhOYW1lIiwidmVydGV4TmFtZXMiLCJmb3JFYWNoIiwicmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lIiwiZmlsdGVyQ3ljbGljRWRnZXMiLCJlZGdlIiwic3VjY2VzcyIsImFkZEVkZ2UiLCJjeWNsaWNFZGdlc0luY2x1ZGVzRWRnZSIsImVkZ2VzIiwicmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyIsImVkZ2VQcmVzZW50IiwiaXNFZGdlUHJlc2VudCIsImVkZ2VDeWNsaWMiLCJyZW1vdmVFZGdlIiwiZ2V0U291cmNlVmVydGV4TmFtZSIsInNvdXJjZVZlcnRleCIsInNvdXJjZVZlcnRleFN0cmFuZGVkIiwiaXNTdHJhbmRlZCIsInRhcmdldFZlcnRleFN0cmFuZGVkIiwiZnJvbVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lIiwiZ2V0RWRnZXNCeVRhcmdldFZlcnRleE5hbWUiLCJyZW1vdmVFZGdlcyIsImdldEVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lIiwiZnJvbU5vdGhpbmciLCJkaXJlY3RlZEdyYXBoIiwidmVydGV4TGl0ZXJhbHMiLCJmcm9tVmVydGV4TmFtZXNBbmRFZGdlcyIsImdyYXBoIiwiYXJlQ3ljbGVzUHJlc2VudCIsImZyb21WZXJ0ZXhOYW1lcyIsInRvcG9sb2dpY2FsbHlPcmRlcmVkVmVydGljZXMiLCJnZXRUb3BvbG9naWNhbGx5T3JkZXJlZFZlcnRpY2VzIiwiZnJvbVRvcG9sb2dpY2FsbHlPcmRlcmVkVmVydGljZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxZQUFS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QUNMLFlBQU0wQiwrQkFBK0JILE1BQU1JLCtCQUFOLEVBQXJDO0FBQUEsWUFDTXBFLGVBQWMsRUFEcEI7QUFBQSxZQUVNQyx3QkFBdUJWLHFCQUFxQjhFLGdDQUFyQixDQUFzREYsNEJBQXRELENBRjdCOztBQUlBTix3QkFBZ0IsSUFBSTlELGFBQUosQ0FBa0JDLFlBQWxCLEVBQStCQyxxQkFBL0IsQ0FBaEI7QUFDRDs7QUFFRCxhQUFPNEQsYUFBUDtBQUNEOzs7Ozs7QUFHSFMsT0FBT0MsT0FBUCxHQUFpQnhFLGFBQWpCIiwiZmlsZSI6ImRpcmVjdGVkR3JhcGguanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGthaG4gPSByZXF1aXJlKCdvY2NhbS1rYWhuJyksXG4gICAgICBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKSxcbiAgICAgIHBlYXJjZWtlbGx5ID0gcmVxdWlyZSgnb2NjYW0tcGVhcmNlLWtlbGx5Jyk7XG5cbmNvbnN0IEVkZ2UgPSByZXF1aXJlKCcuL2VkZ2UnKSxcbiAgICAgIEN5Y2xlID0gcmVxdWlyZSgnLi9jeWNsZScpLFxuICAgICAgUGFydGlhbEN5Y2xlID0gcmVxdWlyZSgnLi9wYXJ0aWFsQ3ljbGUnKSxcbiAgICAgIGVkZ2VVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9lZGdlJyksXG4gICAgICB2ZXJ0ZXhVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy92ZXJ0ZXgnKTtcblxuY29uc3QgeyBHcmFwaCB9ID0ga2FobixcbiAgICAgIHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgZmlyc3QsIGZpbHRlciB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IERpcmVjdGVkQWN5Y2xpY0dyYXBoIH0gPSBwZWFyY2VrZWxseSxcbiAgICAgIHsgdmVydGV4TmFtZXNGcm9tVmVydGV4TGl0ZXJhbHMsIGZvcndhcmRzRGVwdGhGaXJzdFNlYXJjaCB9ID0gdmVydGV4VXRpbGl0aWVzLFxuICAgICAgeyBlZGdlc0Zyb21WZXJ0ZXhMaXRlcmFscywgY2hlY2tFZGdlc0luY2x1ZGVzRWRnZSwgcmVtb3ZlRWRnZUZyb21FZGdlcywgZWRnZXNCeVNvdXJjZVZlcnRleE5hbWUsIGVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lIH0gPSBlZGdlVXRpbGl0aWVzO1xuXG5jbGFzcyBEaXJlY3RlZEdyYXBoIHtcbiAgY29uc3RydWN0b3IoY3ljbGljRWRnZXMsIGRpcmVjdGVkQWN5Y2xpY0dyYXBoKSB7XG4gICAgdGhpcy5jeWNsaWNFZGdlcyA9IGN5Y2xpY0VkZ2VzO1xuICAgIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGggPSBkaXJlY3RlZEFjeWNsaWNHcmFwaDtcbiAgfVxuICBcbiAgYXJlQ3ljbGVzUHJlc2VudEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgbGV0IGN5Y2xlc1ByZXNlbnQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZlcnRleFByZXNlbnQgPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgIGlmICh2ZXJ0ZXhQcmVzZW50KSB7XG4gICAgICBjb25zdCBmaXJzdEN5Y2xlID0gdGhpcy5nZXRGaXJzdEN5Y2xlQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgICBjeWNsZXNQcmVzZW50ID0gKGZpcnN0Q3ljbGUgIT09IG51bGwpO1xuICAgIH1cblxuICAgIHJldHVybiBjeWNsZXNQcmVzZW50O1xuICB9XG5cbiAgZ2V0Rmlyc3RDeWNsZUJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgbGV0IGZpcnN0Q3ljbGUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IHZlcnRleCA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpLFxuICAgICAgICAgIGN5Y2xpY0VkZ2VzID0gdGhpcy5jeWNsaWNFZGdlcy5zbGljZSgpLCAvLy9cbiAgICAgICAgICBwYXJ0aWFsQ3ljbGVzID0gW10sXG4gICAgICAgICAgY3ljbGVzID0gW107XG5cbiAgICBmb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2godmVydGV4LCBmdW5jdGlvbih2aXNpdGVkVmVydGV4LCBnZXRQcmVkZWNlc3NvclZlcnRpY2VzKSB7XG4gICAgICBjb25zdCB2aXNpdGVkVmVydGV4TmFtZSA9IHZpc2l0ZWRWZXJ0ZXguZ2V0TmFtZSgpLFxuICAgICAgICAgICAgc291cmNlVmVydGV4TmFtZSA9IHZpc2l0ZWRWZXJ0ZXhOYW1lOyAvLy9cblxuICAgICAgZmlsdGVyKGN5Y2xpY0VkZ2VzLCBmdW5jdGlvbihjeWNsaWNFZGdlKSB7XG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSBjeWNsaWNFZGdlLm1hdGNoU291cmNlVmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKTtcblxuICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgIGNvbnN0IHByZWRlY2Vzc29yVmVydGljZXMgPSBnZXRQcmVkZWNlc3NvclZlcnRpY2VzKCksXG4gICAgICAgICAgICAgICAgcGFydGlhbEN5Y2xlID0gIFBhcnRpYWxDeWNsZS5mcm9tQ3ljbGljRWRnZUFuZFByZWRlY2Vzc29yVmVydGljZXMoY3ljbGljRWRnZSwgcHJlZGVjZXNzb3JWZXJ0aWNlcyk7XG4gICAgICAgICAgXG4gICAgICAgICAgcGFydGlhbEN5Y2xlcy5wdXNoKHBhcnRpYWxDeWNsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBjeWNsaWNFZGdlc0xlbmd0aCA9IGN5Y2xpY0VkZ2VzLmxlbmd0aCxcbiAgICAgICAgICAgIHRlcm1pbmF0ZSA9IChjeWNsaWNFZGdlc0xlbmd0aCA9PT0gMCk7XG5cbiAgICAgIHJldHVybiB0ZXJtaW5hdGU7XG4gICAgfSk7XG5cbiAgICBwYXJ0aWFsQ3ljbGVzLnNvbWUoKHBhcnRpYWxDeWNsZSkgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0VmVydGV4TmFtZSA9IHBhcnRpYWxDeWNsZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXggPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldFZlcnRleEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoKHRhcmdldFZlcnRleCwgZnVuY3Rpb24odmlzaXRlZFZlcnRleCwgZ2V0UHJlZGVjZXNzb3JWZXJ0aWNlcykge1xuICAgICAgICBjb25zdCB2aXNpdGVkVmVydGV4TmFtZSA9IHZpc2l0ZWRWZXJ0ZXguZ2V0TmFtZSgpO1xuXG4gICAgICAgIGlmICh2aXNpdGVkVmVydGV4TmFtZSA9PT0gdmVydGV4TmFtZSkge1xuICAgICAgICAgIGNvbnN0IHByZWRlY2Vzc29yVmVydGljZXMgPSBnZXRQcmVkZWNlc3NvclZlcnRpY2VzKCksXG4gICAgICAgICAgICAgICAgc3VjY2Vzc29yVmVydGljZXMgPSBwcmVkZWNlc3NvclZlcnRpY2VzLCAgLy8vXG4gICAgICAgICAgICAgICAgY3ljbGUgPSBDeWNsZS5mcm9tVmVydGV4TmFtZVBhcnRpYWxDeWNsZUFuZFN1Y2Nlc3NvclZlcnRpY2VzKHZlcnRleE5hbWUsIHBhcnRpYWxDeWNsZSwgc3VjY2Vzc29yVmVydGljZXMpO1xuXG4gICAgICAgICAgY3ljbGVzLnB1c2goY3ljbGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY3ljbGVzTGVuZ3RoID0gY3ljbGVzLmxlbmd0aCxcbiAgICAgICAgICAgICAgdGVybWluYXRlID0gKGN5Y2xlc0xlbmd0aCA+IDApO1xuXG4gICAgICAgIHJldHVybiB0ZXJtaW5hdGU7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGN5Y2xlc0xlbmd0aCA9IGN5Y2xlcy5sZW5ndGg7XG4gICAgXG4gICAgaWYgKGN5Y2xlc0xlbmd0aCA+IDApIHtcbiAgICAgIGZpcnN0Q3ljbGUgPSBmaXJzdChjeWNsZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBmaXJzdEN5Y2xlO1xuICB9XG5cbiAgYWRkVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHsgdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5hZGRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7IH1cblxuICBhZGRWZXJ0aWNlc0J5VmVydGV4TmFtZXModmVydGV4TmFtZXMpIHtcbiAgICB2ZXJ0ZXhOYW1lcy5mb3JFYWNoKCh2ZXJ0ZXhOYW1lKSA9PiB0aGlzLmFkZFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSk7XG4gIH1cblxuICByZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGgucmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgdGhpcy5maWx0ZXJDeWNsaWNFZGdlcygpO1xuICB9XG5cbiAgcmVtb3ZlVmVydGljZXNCeVZlcnRleE5hbWVzKHZlcnRleE5hbWVzKSB7XG4gICAgdmVydGV4TmFtZXMuZm9yRWFjaCgodmVydGV4TmFtZSkgPT4gdGhpcy5yZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSkpO1xuICB9XG5cbiAgYWRkRWRnZShlZGdlKSB7XG4gICAgY29uc3Qgc3VjY2VzcyA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguYWRkRWRnZShlZGdlKTtcbiAgICBcbiAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgIGNvbnN0IGN5Y2xpY0VkZ2VzSW5jbHVkZXNFZGdlID0gY2hlY2tFZGdlc0luY2x1ZGVzRWRnZShlZGdlLCB0aGlzLmN5Y2xpY0VkZ2VzKTtcblxuICAgICAgaWYgKCFjeWNsaWNFZGdlc0luY2x1ZGVzRWRnZSkge1xuICAgICAgICBjb25zdCBjeWNsaWNFZGdlID0gZWRnZTsgIC8vL1xuXG4gICAgICAgIHRoaXMuY3ljbGljRWRnZXMucHVzaChjeWNsaWNFZGdlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIGFkZEVkZ2VzKGVkZ2VzKSB7XG4gICAgZWRnZXMuZm9yRWFjaCgoZWRnZSkgPT4gdGhpcy5hZGRFZGdlKGVkZ2UpKTtcbiAgfVxuXG4gIHJlbW92ZUVkZ2UoZWRnZSwgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgY3ljbGljRWRnZXNJbmNsdWRlc0VkZ2UgPSBjaGVja0VkZ2VzSW5jbHVkZXNFZGdlKGVkZ2UsIHRoaXMuY3ljbGljRWRnZXMpLFxuICAgICAgICAgIGVkZ2VQcmVzZW50ID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5pc0VkZ2VQcmVzZW50KGVkZ2UpLFxuICAgICAgICAgIGVkZ2VDeWNsaWMgPSBjeWNsaWNFZGdlc0luY2x1ZGVzRWRnZTsgLy8vXG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAoZWRnZUN5Y2xpYykge1xuICAgICAgY29uc3QgY3ljbGljRWRnZSA9IGVkZ2U7ICAvLy9cblxuICAgICAgcmVtb3ZlRWRnZUZyb21FZGdlcyhjeWNsaWNFZGdlLCB0aGlzLmN5Y2xpY0VkZ2VzKTtcbiAgICB9IGVsc2UgaWYgKGVkZ2VQcmVzZW50KSB7XG4gICAgICB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLnJlbW92ZUVkZ2UoZWRnZSk7XG5cbiAgICAgIGlmIChyZW1vdmVTdHJhbmRlZFZlcnRpY2VzKSB7XG4gICAgICAgIGNvbnN0IHNvdXJjZVZlcnRleE5hbWUgPSBlZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSxcbiAgICAgICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IGVkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgICBzb3VyY2VWZXJ0ZXggPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldFZlcnRleEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSksXG4gICAgICAgICAgICAgIHNvdXJjZVZlcnRleFN0cmFuZGVkID0gc291cmNlVmVydGV4LmlzU3RyYW5kZWQoKSxcbiAgICAgICAgICAgICAgdGFyZ2V0VmVydGV4U3RyYW5kZWQgPSB0YXJnZXRWZXJ0ZXguaXNTdHJhbmRlZCgpO1xuXG4gICAgICAgIGlmIChzb3VyY2VWZXJ0ZXhTdHJhbmRlZCkge1xuICAgICAgICAgIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGgucmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRhcmdldFZlcnRleFN0cmFuZGVkKSB7XG4gICAgICAgICAgdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5yZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmZpbHRlckN5Y2xpY0VkZ2VzKCk7XG4gIH1cblxuICByZW1vdmVFZGdlcyhlZGdlcywgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyA9IGZhbHNlKSB7XG4gICAgZWRnZXMuZm9yRWFjaCgoZWRnZSkgPT4gdGhpcy5yZW1vdmVFZGdlKGVkZ2UsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMpKTtcbiAgfVxuXG4gIGFkZEVkZ2VCeVZlcnRleE5hbWVzKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpIHtcbiAgICBjb25zdCBlZGdlID0gRWRnZS5mcm9tU291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICB0aGlzLmFkZEVkZ2UoZWRnZSk7XG4gIH1cblxuICByZW1vdmVFZGdlQnlWZXJ0ZXhOYW1lcyhzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzID0gZmFsc2UpIHtcbiAgICBjb25zdCBlZGdlID0gRWRnZS5mcm9tU291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICB0aGlzLnJlbW92ZUVkZ2UoZWRnZSwgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyk7XG4gIH1cblxuICByZW1vdmVFZGdlc0J5VGFyZ2V0VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzID0gZmFsc2UpIHtcbiAgICBjb25zdCBjeWNsaWNFZGdlcyA9IGVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUsIHRoaXMuY3ljbGljRWRnZXMpLFxuICAgICAgICAgIGVkZ2VzID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRFZGdlc0J5VGFyZ2V0VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgIHRoaXMucmVtb3ZlRWRnZXMoY3ljbGljRWRnZXMsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMpO1xuXG4gICAgdGhpcy5yZW1vdmVFZGdlcyhlZGdlcywgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyk7XG4gIH1cblxuICByZW1vdmVFZGdlc0J5U291cmNlVmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzID0gZmFsc2UpIHtcbiAgICBjb25zdCBjeWNsaWNFZGdlcyA9IGVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUsIHRoaXMuY3ljbGljRWRnZXMpLFxuICAgICAgICAgIGVkZ2VzID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRFZGdlc0J5U291cmNlVmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKTtcblxuICAgIHRoaXMucmVtb3ZlRWRnZXMoY3ljbGljRWRnZXMsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMpO1xuXG4gICAgdGhpcy5yZW1vdmVFZGdlcyhlZGdlcywgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyk7XG4gIH1cblxuICByZW1vdmVBbGxFZGdlc0FuZFZlcnRpY2VzKCkge1xuICAgIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGggPSBEaXJlY3RlZEFjeWNsaWNHcmFwaC5mcm9tTm90aGluZygpO1xuXG4gICAgdGhpcy5jeWNsaWNFZGdlcyA9IFtdO1xuICB9XG5cbiAgZmlsdGVyQ3ljbGljRWRnZXMoKSB7XG4gICAgZmlsdGVyKHRoaXMuY3ljbGljRWRnZXMsIChjeWNsaWNFZGdlKSA9PiB7XG4gICAgICBjb25zdCBlZGdlID0gY3ljbGljRWRnZSwgIC8vL1xuICAgICAgICAgICAgc3VjY2VzcyA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguYWRkRWRnZShlZGdlKTtcblxuICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VzID0gW10sXG4gICAgICAgICAgZGlyZWN0ZWRBY3ljbGljR3JhcGggPSBEaXJlY3RlZEFjeWNsaWNHcmFwaC5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGRpcmVjdGVkR3JhcGggPSBuZXcgRGlyZWN0ZWRHcmFwaChjeWNsaWNFZGdlcywgZGlyZWN0ZWRBY3ljbGljR3JhcGgpO1xuICAgIFxuICAgIHJldHVybiBkaXJlY3RlZEdyYXBoOyAgICBcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmVydGV4TGl0ZXJhbHModmVydGV4TGl0ZXJhbHMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhOYW1lcyA9IHZlcnRleE5hbWVzRnJvbVZlcnRleExpdGVyYWxzKHZlcnRleExpdGVyYWxzKSxcbiAgICAgICAgICBlZGdlcyA9IGVkZ2VzRnJvbVZlcnRleExpdGVyYWxzKHZlcnRleExpdGVyYWxzKSxcbiAgICAgICAgICBkaXJlY3RlZEdyYXBoID0gRGlyZWN0ZWRHcmFwaC5mcm9tVmVydGV4TmFtZXNBbmRFZGdlcyh2ZXJ0ZXhOYW1lcywgZWRnZXMpO1xuXG4gICAgcmV0dXJuIGRpcmVjdGVkR3JhcGg7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZlcnRleE5hbWVzQW5kRWRnZXModmVydGV4TmFtZXMsIGVkZ2VzKSB7XG4gICAgbGV0IGRpcmVjdGVkR3JhcGg7XG5cbiAgICBjb25zdCBncmFwaCA9IEdyYXBoLmZyb21WZXJ0ZXhOYW1lc0FuZEVkZ2VzKHZlcnRleE5hbWVzLCBlZGdlcyksXG4gICAgICAgICAgY3ljbGVzUHJlc2VudCA9IGdyYXBoLmFyZUN5Y2xlc1ByZXNlbnQoKTtcblxuICAgIGlmIChjeWNsZXNQcmVzZW50KSB7XG4gICAgICBjb25zdCBjeWNsaWNFZGdlcyA9IFtdLFxuICAgICAgICAgICAgZGlyZWN0ZWRBY3ljbGljR3JhcGggPSBEaXJlY3RlZEFjeWNsaWNHcmFwaC5mcm9tVmVydGV4TmFtZXModmVydGV4TmFtZXMpO1xuXG4gICAgICBkaXJlY3RlZEdyYXBoID0gbmV3IERpcmVjdGVkR3JhcGgoY3ljbGljRWRnZXMsIGRpcmVjdGVkQWN5Y2xpY0dyYXBoKTtcblxuICAgICAgZWRnZXMuZm9yRWFjaChmdW5jdGlvbihlZGdlKSB7XG4gICAgICAgIGRpcmVjdGVkR3JhcGguYWRkRWRnZShlZGdlKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0b3BvbG9naWNhbGx5T3JkZXJlZFZlcnRpY2VzID0gZ3JhcGguZ2V0VG9wb2xvZ2ljYWxseU9yZGVyZWRWZXJ0aWNlcygpLFxuICAgICAgICAgICAgY3ljbGljRWRnZXMgPSBbXSxcbiAgICAgICAgICAgIGRpcmVjdGVkQWN5Y2xpY0dyYXBoID0gRGlyZWN0ZWRBY3ljbGljR3JhcGguZnJvbVRvcG9sb2dpY2FsbHlPcmRlcmVkVmVydGljZXModG9wb2xvZ2ljYWxseU9yZGVyZWRWZXJ0aWNlcyk7XG5cbiAgICAgIGRpcmVjdGVkR3JhcGggPSBuZXcgRGlyZWN0ZWRHcmFwaChjeWNsaWNFZGdlcywgZGlyZWN0ZWRBY3ljbGljR3JhcGgpO1xuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3RlZEdyYXBoO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGlyZWN0ZWRHcmFwaDtcblxuIl19