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
    key: 'getPredecessorVertexNamesByVertexName',
    value: function getPredecessorVertexNamesByVertexName(vertexName) {
      return this.directedAcyclicGraph.getPredecessorVertexNamesByVertexName(vertexName);
    }
  }, {
    key: 'getSuccessorVertexNamesByVertexName',
    value: function getSuccessorVertexNamesByVertexName(vertexName) {
      return this.directedAcyclicGraph.getSuccessorVertexNamesByVertexName(vertexName);
    }
  }, {
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
    key: 'isVertexPresentByVertexName',
    value: function isVertexPresentByVertexName(vertexName) {
      return this.directedAcyclicGraph.isVertexPresentByVertexName(vertexName);
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
    key: 'getTopologicallyOrderedVertexNames',
    value: function getTopologicallyOrderedVertexNames() {
      return this.directedAcyclicGraph.getTopologicallyOrderedVertexNames();
    }
  }, {
    key: 'areCyclesPresent',
    value: function areCyclesPresent() {
      var cyclicEdgesLength = this.cyclicEdges.length,
          cyclesPresent = cyclicEdgesLength > 0;

      return cyclesPresent;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9kaXJlY3RlZEdyYXBoLmpzIl0sIm5hbWVzIjpbImthaG4iLCJyZXF1aXJlIiwibmVjZXNzYXJ5IiwicGVhcmNla2VsbHkiLCJFZGdlIiwiQ3ljbGUiLCJQYXJ0aWFsQ3ljbGUiLCJlZGdlVXRpbGl0aWVzIiwidmVydGV4VXRpbGl0aWVzIiwiR3JhcGgiLCJhcnJheVV0aWxpdGllcyIsImZpcnN0IiwiZmlsdGVyIiwiRGlyZWN0ZWRBY3ljbGljR3JhcGgiLCJ2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhMaXRlcmFscyIsImZvcndhcmRzRGVwdGhGaXJzdFNlYXJjaCIsImVkZ2VzRnJvbVZlcnRleExpdGVyYWxzIiwiY2hlY2tFZGdlc0luY2x1ZGVzRWRnZSIsInJlbW92ZUVkZ2VGcm9tRWRnZXMiLCJlZGdlc0J5U291cmNlVmVydGV4TmFtZSIsImVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lIiwiRGlyZWN0ZWRHcmFwaCIsImN5Y2xpY0VkZ2VzIiwiZGlyZWN0ZWRBY3ljbGljR3JhcGgiLCJ2ZXJ0ZXhOYW1lIiwiZ2V0UHJlZGVjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSIsImdldFN1Y2Nlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lIiwiY3ljbGVzUHJlc2VudCIsInZlcnRleFByZXNlbnQiLCJpc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUiLCJmaXJzdEN5Y2xlIiwiZ2V0Rmlyc3RDeWNsZUJ5VmVydGV4TmFtZSIsInZlcnRleCIsImdldFZlcnRleEJ5VmVydGV4TmFtZSIsInNsaWNlIiwicGFydGlhbEN5Y2xlcyIsImN5Y2xlcyIsInZpc2l0ZWRWZXJ0ZXgiLCJnZXRQcmVkZWNlc3NvclZlcnRpY2VzIiwidmlzaXRlZFZlcnRleE5hbWUiLCJnZXROYW1lIiwic291cmNlVmVydGV4TmFtZSIsImN5Y2xpY0VkZ2UiLCJtYXRjaGVzIiwibWF0Y2hTb3VyY2VWZXJ0ZXhOYW1lIiwicHJlZGVjZXNzb3JWZXJ0aWNlcyIsInBhcnRpYWxDeWNsZSIsImZyb21DeWNsaWNFZGdlQW5kUHJlZGVjZXNzb3JWZXJ0aWNlcyIsInB1c2giLCJjeWNsaWNFZGdlc0xlbmd0aCIsImxlbmd0aCIsInRlcm1pbmF0ZSIsInNvbWUiLCJ0YXJnZXRWZXJ0ZXhOYW1lIiwiZ2V0VGFyZ2V0VmVydGV4TmFtZSIsInRhcmdldFZlcnRleCIsInN1Y2Nlc3NvclZlcnRpY2VzIiwiY3ljbGUiLCJmcm9tVmVydGV4TmFtZVBhcnRpYWxDeWNsZUFuZFN1Y2Nlc3NvclZlcnRpY2VzIiwiY3ljbGVzTGVuZ3RoIiwiZ2V0VG9wb2xvZ2ljYWxseU9yZGVyZWRWZXJ0ZXhOYW1lcyIsImFkZFZlcnRleEJ5VmVydGV4TmFtZSIsInZlcnRleE5hbWVzIiwiZm9yRWFjaCIsInJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZSIsImZpbHRlckN5Y2xpY0VkZ2VzIiwiZWRnZSIsInN1Y2Nlc3MiLCJhZGRFZGdlIiwiY3ljbGljRWRnZXNJbmNsdWRlc0VkZ2UiLCJlZGdlcyIsInJlbW92ZVN0cmFuZGVkVmVydGljZXMiLCJlZGdlUHJlc2VudCIsImlzRWRnZVByZXNlbnQiLCJlZGdlQ3ljbGljIiwicmVtb3ZlRWRnZSIsImdldFNvdXJjZVZlcnRleE5hbWUiLCJzb3VyY2VWZXJ0ZXgiLCJzb3VyY2VWZXJ0ZXhTdHJhbmRlZCIsImlzU3RyYW5kZWQiLCJ0YXJnZXRWZXJ0ZXhTdHJhbmRlZCIsImZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZSIsImdldEVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lIiwicmVtb3ZlRWRnZXMiLCJnZXRFZGdlc0J5U291cmNlVmVydGV4TmFtZSIsImZyb21Ob3RoaW5nIiwiZGlyZWN0ZWRHcmFwaCIsInZlcnRleExpdGVyYWxzIiwiZnJvbVZlcnRleE5hbWVzQW5kRWRnZXMiLCJncmFwaCIsImFyZUN5Y2xlc1ByZXNlbnQiLCJmcm9tVmVydGV4TmFtZXMiLCJ0b3BvbG9naWNhbGx5T3JkZXJlZFZlcnRpY2VzIiwiZ2V0VG9wb2xvZ2ljYWxseU9yZGVyZWRWZXJ0aWNlcyIsImZyb21Ub3BvbG9naWNhbGx5T3JkZXJlZFZlcnRpY2VzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsWUFBUixDQUFiO0FBQUEsSUFDTUMsWUFBWUQsUUFBUSxXQUFSLENBRGxCO0FBQUEsSUFFTUUsY0FBY0YsUUFBUSxvQkFBUixDQUZwQjs7QUFJQSxJQUFNRyxPQUFPSCxRQUFRLFFBQVIsQ0FBYjtBQUFBLElBQ01JLFFBQVFKLFFBQVEsU0FBUixDQURkO0FBQUEsSUFFTUssZUFBZUwsUUFBUSxnQkFBUixDQUZyQjtBQUFBLElBR01NLGdCQUFnQk4sUUFBUSxrQkFBUixDQUh0QjtBQUFBLElBSU1PLGtCQUFrQlAsUUFBUSxvQkFBUixDQUp4Qjs7QUFNTSxJQUFFUSxLQUFGLEdBQVlULElBQVosQ0FBRVMsS0FBRjtBQUFBLElBQ0VDLGNBREYsR0FDcUJSLFNBRHJCLENBQ0VRLGNBREY7QUFBQSxJQUVFQyxLQUZGLEdBRW9CRCxjQUZwQixDQUVFQyxLQUZGO0FBQUEsSUFFU0MsTUFGVCxHQUVvQkYsY0FGcEIsQ0FFU0UsTUFGVDtBQUFBLElBR0VDLG9CQUhGLEdBRzJCVixXQUgzQixDQUdFVSxvQkFIRjtBQUFBLElBSUVDLDZCQUpGLEdBSThETixlQUo5RCxDQUlFTSw2QkFKRjtBQUFBLElBSWlDQyx3QkFKakMsR0FJOERQLGVBSjlELENBSWlDTyx3QkFKakM7QUFBQSxJQUtFQyx1QkFMRixHQUs2SFQsYUFMN0gsQ0FLRVMsdUJBTEY7QUFBQSxJQUsyQkMsc0JBTDNCLEdBSzZIVixhQUw3SCxDQUsyQlUsc0JBTDNCO0FBQUEsSUFLbURDLG1CQUxuRCxHQUs2SFgsYUFMN0gsQ0FLbURXLG1CQUxuRDtBQUFBLElBS3dFQyx1QkFMeEUsR0FLNkhaLGFBTDdILENBS3dFWSx1QkFMeEU7QUFBQSxJQUtpR0MsdUJBTGpHLEdBSzZIYixhQUw3SCxDQUtpR2EsdUJBTGpHOztJQU9BQyxhO0FBQ0oseUJBQVlDLFdBQVos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QXdCdUUsY0FBeEIsQ0FEZDtBQUFBLFVBRU1ELGdCQUFnQmpFLGNBQWNtRSx1QkFBZCxDQUFzQzFCLFdBQXRDLEVBQW1EUSxLQUFuRCxDQUZ0Qjs7QUFJQSxhQUFPZ0IsYUFBUDtBQUNEOzs7NENBRThCeEIsVyxFQUFhUSxLLEVBQU87QUFDakQsVUFBSWdCLHNCQUFKOztBQUVBLFVBQU1HLFFBQVFoRixNQUFNK0UsdUJBQU4sQ0FBOEIxQixXQUE5QixFQUEyQ1EsS0FBM0MsQ0FBZDtBQUFBLFVBQ00zQyxnQkFBZ0I4RCxNQUFNQyxnQkFBTixFQUR0Qjs7QUFHQSxVQUFJL0QsYUFBSixFQUFtQjtBQUNqQixZQUFNTCxjQUFjLEVBQXBCO0FBQUEsWUFDTUMsdUJBQXVCVixxQkFBcUI4RSxlQUFyQixDQUFxQzdCLFdBQXJDLENBRDdCOztBQUdBd0Isd0JBQWdCLElBQUlqRSxhQUFKLENBQWtCQyxXQUFsQixFQUErQkMsb0JBQS9CLENBQWhCOztBQUVBK0MsY0FBTVAsT0FBTixDQUFjLFVBQVNHLElBQVQsRUFBZTtBQUMzQm9CLHdCQUFjbEIsT0FBZCxDQUFzQkYsSUFBdEI7QUFDRCxTQUZEO0FBR0QsT0FURCxNQVNPO0FBQ0wsWUFBTTBCLCtCQUErQkgsTUFBTUksK0JBQU4sRUFBckM7QUFBQSxZQUNNdkUsZUFBYyxFQURwQjtBQUFBLFlBRU1DLHdCQUF1QlYscUJBQXFCaUYsZ0NBQXJCLENBQXNERiw0QkFBdEQsQ0FGN0I7O0FBSUFOLHdCQUFnQixJQUFJakUsYUFBSixDQUFrQkMsWUFBbEIsRUFBK0JDLHFCQUEvQixDQUFoQjtBQUNEOztBQUVELGFBQU8rRCxhQUFQO0FBQ0Q7Ozs7OztBQUdIUyxPQUFPQyxPQUFQLEdBQWlCM0UsYUFBakIiLCJmaWxlIjoiZGlyZWN0ZWRHcmFwaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3Qga2FobiA9IHJlcXVpcmUoJ29jY2FtLWthaG4nKSxcbiAgICAgIG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpLFxuICAgICAgcGVhcmNla2VsbHkgPSByZXF1aXJlKCdvY2NhbS1wZWFyY2Uta2VsbHknKTtcblxuY29uc3QgRWRnZSA9IHJlcXVpcmUoJy4vZWRnZScpLFxuICAgICAgQ3ljbGUgPSByZXF1aXJlKCcuL2N5Y2xlJyksXG4gICAgICBQYXJ0aWFsQ3ljbGUgPSByZXF1aXJlKCcuL3BhcnRpYWxDeWNsZScpLFxuICAgICAgZWRnZVV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL2VkZ2UnKSxcbiAgICAgIHZlcnRleFV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL3ZlcnRleCcpO1xuXG5jb25zdCB7IEdyYXBoIH0gPSBrYWhuLFxuICAgICAgeyBhcnJheVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBmaXJzdCwgZmlsdGVyIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgRGlyZWN0ZWRBY3ljbGljR3JhcGggfSA9IHBlYXJjZWtlbGx5LFxuICAgICAgeyB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhMaXRlcmFscywgZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoIH0gPSB2ZXJ0ZXhVdGlsaXRpZXMsXG4gICAgICB7IGVkZ2VzRnJvbVZlcnRleExpdGVyYWxzLCBjaGVja0VkZ2VzSW5jbHVkZXNFZGdlLCByZW1vdmVFZGdlRnJvbUVkZ2VzLCBlZGdlc0J5U291cmNlVmVydGV4TmFtZSwgZWRnZXNCeVRhcmdldFZlcnRleE5hbWUgfSA9IGVkZ2VVdGlsaXRpZXM7XG5cbmNsYXNzIERpcmVjdGVkR3JhcGgge1xuICBjb25zdHJ1Y3RvcihjeWNsaWNFZGdlcywgZGlyZWN0ZWRBY3ljbGljR3JhcGgpIHtcbiAgICB0aGlzLmN5Y2xpY0VkZ2VzID0gY3ljbGljRWRnZXM7XG4gICAgdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaCA9IGRpcmVjdGVkQWN5Y2xpY0dyYXBoO1xuICB9XG5cbiAgZ2V0UHJlZGVjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7IHJldHVybiB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldFByZWRlY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7IH1cblxuICBnZXRTdWNjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7IHJldHVybiB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldFN1Y2Nlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpOyB9XG5cbiAgYXJlQ3ljbGVzUHJlc2VudEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgbGV0IGN5Y2xlc1ByZXNlbnQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZlcnRleFByZXNlbnQgPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgIGlmICh2ZXJ0ZXhQcmVzZW50KSB7XG4gICAgICBjb25zdCBmaXJzdEN5Y2xlID0gdGhpcy5nZXRGaXJzdEN5Y2xlQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgICBjeWNsZXNQcmVzZW50ID0gKGZpcnN0Q3ljbGUgIT09IG51bGwpO1xuICAgIH1cblxuICAgIHJldHVybiBjeWNsZXNQcmVzZW50O1xuICB9XG5cbiAgaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHsgcmV0dXJuIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpOyB9XG5cbiAgZ2V0Rmlyc3RDeWNsZUJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgbGV0IGZpcnN0Q3ljbGUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IHZlcnRleCA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpLFxuICAgICAgICAgIGN5Y2xpY0VkZ2VzID0gdGhpcy5jeWNsaWNFZGdlcy5zbGljZSgpLCAvLy9cbiAgICAgICAgICBwYXJ0aWFsQ3ljbGVzID0gW10sXG4gICAgICAgICAgY3ljbGVzID0gW107XG5cbiAgICBmb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2godmVydGV4LCBmdW5jdGlvbih2aXNpdGVkVmVydGV4LCBnZXRQcmVkZWNlc3NvclZlcnRpY2VzKSB7XG4gICAgICBjb25zdCB2aXNpdGVkVmVydGV4TmFtZSA9IHZpc2l0ZWRWZXJ0ZXguZ2V0TmFtZSgpLFxuICAgICAgICAgICAgc291cmNlVmVydGV4TmFtZSA9IHZpc2l0ZWRWZXJ0ZXhOYW1lOyAvLy9cblxuICAgICAgZmlsdGVyKGN5Y2xpY0VkZ2VzLCBmdW5jdGlvbihjeWNsaWNFZGdlKSB7XG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSBjeWNsaWNFZGdlLm1hdGNoU291cmNlVmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKTtcblxuICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgIGNvbnN0IHByZWRlY2Vzc29yVmVydGljZXMgPSBnZXRQcmVkZWNlc3NvclZlcnRpY2VzKCksXG4gICAgICAgICAgICAgICAgcGFydGlhbEN5Y2xlID0gIFBhcnRpYWxDeWNsZS5mcm9tQ3ljbGljRWRnZUFuZFByZWRlY2Vzc29yVmVydGljZXMoY3ljbGljRWRnZSwgcHJlZGVjZXNzb3JWZXJ0aWNlcyk7XG4gICAgICAgICAgXG4gICAgICAgICAgcGFydGlhbEN5Y2xlcy5wdXNoKHBhcnRpYWxDeWNsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBjeWNsaWNFZGdlc0xlbmd0aCA9IGN5Y2xpY0VkZ2VzLmxlbmd0aCxcbiAgICAgICAgICAgIHRlcm1pbmF0ZSA9IChjeWNsaWNFZGdlc0xlbmd0aCA9PT0gMCk7XG5cbiAgICAgIHJldHVybiB0ZXJtaW5hdGU7XG4gICAgfSk7XG5cbiAgICBwYXJ0aWFsQ3ljbGVzLnNvbWUoKHBhcnRpYWxDeWNsZSkgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0VmVydGV4TmFtZSA9IHBhcnRpYWxDeWNsZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXggPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldFZlcnRleEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoKHRhcmdldFZlcnRleCwgZnVuY3Rpb24odmlzaXRlZFZlcnRleCwgZ2V0UHJlZGVjZXNzb3JWZXJ0aWNlcykge1xuICAgICAgICBjb25zdCB2aXNpdGVkVmVydGV4TmFtZSA9IHZpc2l0ZWRWZXJ0ZXguZ2V0TmFtZSgpO1xuXG4gICAgICAgIGlmICh2aXNpdGVkVmVydGV4TmFtZSA9PT0gdmVydGV4TmFtZSkge1xuICAgICAgICAgIGNvbnN0IHByZWRlY2Vzc29yVmVydGljZXMgPSBnZXRQcmVkZWNlc3NvclZlcnRpY2VzKCksXG4gICAgICAgICAgICAgICAgc3VjY2Vzc29yVmVydGljZXMgPSBwcmVkZWNlc3NvclZlcnRpY2VzLCAgLy8vXG4gICAgICAgICAgICAgICAgY3ljbGUgPSBDeWNsZS5mcm9tVmVydGV4TmFtZVBhcnRpYWxDeWNsZUFuZFN1Y2Nlc3NvclZlcnRpY2VzKHZlcnRleE5hbWUsIHBhcnRpYWxDeWNsZSwgc3VjY2Vzc29yVmVydGljZXMpO1xuXG4gICAgICAgICAgY3ljbGVzLnB1c2goY3ljbGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY3ljbGVzTGVuZ3RoID0gY3ljbGVzLmxlbmd0aCxcbiAgICAgICAgICAgICAgdGVybWluYXRlID0gKGN5Y2xlc0xlbmd0aCA+IDApO1xuXG4gICAgICAgIHJldHVybiB0ZXJtaW5hdGU7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGN5Y2xlc0xlbmd0aCA9IGN5Y2xlcy5sZW5ndGg7XG4gICAgXG4gICAgaWYgKGN5Y2xlc0xlbmd0aCA+IDApIHtcbiAgICAgIGZpcnN0Q3ljbGUgPSBmaXJzdChjeWNsZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBmaXJzdEN5Y2xlO1xuICB9XG5cbiAgZ2V0VG9wb2xvZ2ljYWxseU9yZGVyZWRWZXJ0ZXhOYW1lcygpIHsgcmV0dXJuIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0VG9wb2xvZ2ljYWxseU9yZGVyZWRWZXJ0ZXhOYW1lcygpOyB9XG5cbiAgYXJlQ3ljbGVzUHJlc2VudCgpIHtcbiAgICBjb25zdCBjeWNsaWNFZGdlc0xlbmd0aCA9IHRoaXMuY3ljbGljRWRnZXMubGVuZ3RoLFxuICAgICAgICAgIGN5Y2xlc1ByZXNlbnQgPSAoY3ljbGljRWRnZXNMZW5ndGggPiAwKTtcblxuICAgIHJldHVybiBjeWNsZXNQcmVzZW50O1xuICB9XG5cbiAgYWRkVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHsgdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5hZGRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7IH1cblxuICBhZGRWZXJ0aWNlc0J5VmVydGV4TmFtZXModmVydGV4TmFtZXMpIHtcbiAgICB2ZXJ0ZXhOYW1lcy5mb3JFYWNoKCh2ZXJ0ZXhOYW1lKSA9PiB0aGlzLmFkZFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSk7XG4gIH1cblxuICByZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGgucmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgdGhpcy5maWx0ZXJDeWNsaWNFZGdlcygpO1xuICB9XG5cbiAgcmVtb3ZlVmVydGljZXNCeVZlcnRleE5hbWVzKHZlcnRleE5hbWVzKSB7XG4gICAgdmVydGV4TmFtZXMuZm9yRWFjaCgodmVydGV4TmFtZSkgPT4gdGhpcy5yZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSkpO1xuICB9XG5cbiAgYWRkRWRnZShlZGdlKSB7XG4gICAgY29uc3Qgc3VjY2VzcyA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguYWRkRWRnZShlZGdlKTtcbiAgICBcbiAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgIGNvbnN0IGN5Y2xpY0VkZ2VzSW5jbHVkZXNFZGdlID0gY2hlY2tFZGdlc0luY2x1ZGVzRWRnZShlZGdlLCB0aGlzLmN5Y2xpY0VkZ2VzKTtcblxuICAgICAgaWYgKCFjeWNsaWNFZGdlc0luY2x1ZGVzRWRnZSkge1xuICAgICAgICBjb25zdCBjeWNsaWNFZGdlID0gZWRnZTsgIC8vL1xuXG4gICAgICAgIHRoaXMuY3ljbGljRWRnZXMucHVzaChjeWNsaWNFZGdlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIGFkZEVkZ2VzKGVkZ2VzKSB7XG4gICAgZWRnZXMuZm9yRWFjaCgoZWRnZSkgPT4gdGhpcy5hZGRFZGdlKGVkZ2UpKTtcbiAgfVxuXG4gIHJlbW92ZUVkZ2UoZWRnZSwgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgY3ljbGljRWRnZXNJbmNsdWRlc0VkZ2UgPSBjaGVja0VkZ2VzSW5jbHVkZXNFZGdlKGVkZ2UsIHRoaXMuY3ljbGljRWRnZXMpLFxuICAgICAgICAgIGVkZ2VQcmVzZW50ID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5pc0VkZ2VQcmVzZW50KGVkZ2UpLFxuICAgICAgICAgIGVkZ2VDeWNsaWMgPSBjeWNsaWNFZGdlc0luY2x1ZGVzRWRnZTsgLy8vXG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAoZWRnZUN5Y2xpYykge1xuICAgICAgY29uc3QgY3ljbGljRWRnZSA9IGVkZ2U7ICAvLy9cblxuICAgICAgcmVtb3ZlRWRnZUZyb21FZGdlcyhjeWNsaWNFZGdlLCB0aGlzLmN5Y2xpY0VkZ2VzKTtcbiAgICB9IGVsc2UgaWYgKGVkZ2VQcmVzZW50KSB7XG4gICAgICB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLnJlbW92ZUVkZ2UoZWRnZSk7XG5cbiAgICAgIGlmIChyZW1vdmVTdHJhbmRlZFZlcnRpY2VzKSB7XG4gICAgICAgIGNvbnN0IHNvdXJjZVZlcnRleE5hbWUgPSBlZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSxcbiAgICAgICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IGVkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgICBzb3VyY2VWZXJ0ZXggPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldFZlcnRleEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSksXG4gICAgICAgICAgICAgIHNvdXJjZVZlcnRleFN0cmFuZGVkID0gc291cmNlVmVydGV4LmlzU3RyYW5kZWQoKSxcbiAgICAgICAgICAgICAgdGFyZ2V0VmVydGV4U3RyYW5kZWQgPSB0YXJnZXRWZXJ0ZXguaXNTdHJhbmRlZCgpO1xuXG4gICAgICAgIGlmIChzb3VyY2VWZXJ0ZXhTdHJhbmRlZCkge1xuICAgICAgICAgIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGgucmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRhcmdldFZlcnRleFN0cmFuZGVkKSB7XG4gICAgICAgICAgdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5yZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmZpbHRlckN5Y2xpY0VkZ2VzKCk7XG4gIH1cblxuICByZW1vdmVFZGdlcyhlZGdlcywgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyA9IGZhbHNlKSB7XG4gICAgZWRnZXMuZm9yRWFjaCgoZWRnZSkgPT4gdGhpcy5yZW1vdmVFZGdlKGVkZ2UsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMpKTtcbiAgfVxuXG4gIGFkZEVkZ2VCeVZlcnRleE5hbWVzKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpIHtcbiAgICBjb25zdCBlZGdlID0gRWRnZS5mcm9tU291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICB0aGlzLmFkZEVkZ2UoZWRnZSk7XG4gIH1cblxuICByZW1vdmVFZGdlQnlWZXJ0ZXhOYW1lcyhzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzID0gZmFsc2UpIHtcbiAgICBjb25zdCBlZGdlID0gRWRnZS5mcm9tU291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICB0aGlzLnJlbW92ZUVkZ2UoZWRnZSwgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyk7XG4gIH1cblxuICByZW1vdmVFZGdlc0J5VGFyZ2V0VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzID0gZmFsc2UpIHtcbiAgICBjb25zdCBjeWNsaWNFZGdlcyA9IGVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUsIHRoaXMuY3ljbGljRWRnZXMpLFxuICAgICAgICAgIGVkZ2VzID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRFZGdlc0J5VGFyZ2V0VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgIHRoaXMucmVtb3ZlRWRnZXMoY3ljbGljRWRnZXMsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMpO1xuXG4gICAgdGhpcy5yZW1vdmVFZGdlcyhlZGdlcywgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyk7XG4gIH1cblxuICByZW1vdmVFZGdlc0J5U291cmNlVmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzID0gZmFsc2UpIHtcbiAgICBjb25zdCBjeWNsaWNFZGdlcyA9IGVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUsIHRoaXMuY3ljbGljRWRnZXMpLFxuICAgICAgICAgIGVkZ2VzID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRFZGdlc0J5U291cmNlVmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKTtcblxuICAgIHRoaXMucmVtb3ZlRWRnZXMoY3ljbGljRWRnZXMsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMpO1xuXG4gICAgdGhpcy5yZW1vdmVFZGdlcyhlZGdlcywgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyk7XG4gIH1cblxuICByZW1vdmVBbGxFZGdlc0FuZFZlcnRpY2VzKCkge1xuICAgIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGggPSBEaXJlY3RlZEFjeWNsaWNHcmFwaC5mcm9tTm90aGluZygpO1xuXG4gICAgdGhpcy5jeWNsaWNFZGdlcyA9IFtdO1xuICB9XG5cbiAgZmlsdGVyQ3ljbGljRWRnZXMoKSB7XG4gICAgZmlsdGVyKHRoaXMuY3ljbGljRWRnZXMsIChjeWNsaWNFZGdlKSA9PiB7XG4gICAgICBjb25zdCBlZGdlID0gY3ljbGljRWRnZSwgIC8vL1xuICAgICAgICAgICAgc3VjY2VzcyA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguYWRkRWRnZShlZGdlKTtcblxuICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VzID0gW10sXG4gICAgICAgICAgZGlyZWN0ZWRBY3ljbGljR3JhcGggPSBEaXJlY3RlZEFjeWNsaWNHcmFwaC5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGRpcmVjdGVkR3JhcGggPSBuZXcgRGlyZWN0ZWRHcmFwaChjeWNsaWNFZGdlcywgZGlyZWN0ZWRBY3ljbGljR3JhcGgpO1xuICAgIFxuICAgIHJldHVybiBkaXJlY3RlZEdyYXBoOyAgICBcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmVydGV4TGl0ZXJhbHModmVydGV4TGl0ZXJhbHMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhOYW1lcyA9IHZlcnRleE5hbWVzRnJvbVZlcnRleExpdGVyYWxzKHZlcnRleExpdGVyYWxzKSxcbiAgICAgICAgICBlZGdlcyA9IGVkZ2VzRnJvbVZlcnRleExpdGVyYWxzKHZlcnRleExpdGVyYWxzKSxcbiAgICAgICAgICBkaXJlY3RlZEdyYXBoID0gRGlyZWN0ZWRHcmFwaC5mcm9tVmVydGV4TmFtZXNBbmRFZGdlcyh2ZXJ0ZXhOYW1lcywgZWRnZXMpO1xuXG4gICAgcmV0dXJuIGRpcmVjdGVkR3JhcGg7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZlcnRleE5hbWVzQW5kRWRnZXModmVydGV4TmFtZXMsIGVkZ2VzKSB7XG4gICAgbGV0IGRpcmVjdGVkR3JhcGg7XG5cbiAgICBjb25zdCBncmFwaCA9IEdyYXBoLmZyb21WZXJ0ZXhOYW1lc0FuZEVkZ2VzKHZlcnRleE5hbWVzLCBlZGdlcyksXG4gICAgICAgICAgY3ljbGVzUHJlc2VudCA9IGdyYXBoLmFyZUN5Y2xlc1ByZXNlbnQoKTtcblxuICAgIGlmIChjeWNsZXNQcmVzZW50KSB7XG4gICAgICBjb25zdCBjeWNsaWNFZGdlcyA9IFtdLFxuICAgICAgICAgICAgZGlyZWN0ZWRBY3ljbGljR3JhcGggPSBEaXJlY3RlZEFjeWNsaWNHcmFwaC5mcm9tVmVydGV4TmFtZXModmVydGV4TmFtZXMpO1xuXG4gICAgICBkaXJlY3RlZEdyYXBoID0gbmV3IERpcmVjdGVkR3JhcGgoY3ljbGljRWRnZXMsIGRpcmVjdGVkQWN5Y2xpY0dyYXBoKTtcblxuICAgICAgZWRnZXMuZm9yRWFjaChmdW5jdGlvbihlZGdlKSB7XG4gICAgICAgIGRpcmVjdGVkR3JhcGguYWRkRWRnZShlZGdlKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0b3BvbG9naWNhbGx5T3JkZXJlZFZlcnRpY2VzID0gZ3JhcGguZ2V0VG9wb2xvZ2ljYWxseU9yZGVyZWRWZXJ0aWNlcygpLFxuICAgICAgICAgICAgY3ljbGljRWRnZXMgPSBbXSxcbiAgICAgICAgICAgIGRpcmVjdGVkQWN5Y2xpY0dyYXBoID0gRGlyZWN0ZWRBY3ljbGljR3JhcGguZnJvbVRvcG9sb2dpY2FsbHlPcmRlcmVkVmVydGljZXModG9wb2xvZ2ljYWxseU9yZGVyZWRWZXJ0aWNlcyk7XG5cbiAgICAgIGRpcmVjdGVkR3JhcGggPSBuZXcgRGlyZWN0ZWRHcmFwaChjeWNsaWNFZGdlcywgZGlyZWN0ZWRBY3ljbGljR3JhcGgpO1xuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3RlZEdyYXBoO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGlyZWN0ZWRHcmFwaDtcblxuIl19