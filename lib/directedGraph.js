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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9kaXJlY3RlZEdyYXBoLmpzIl0sIm5hbWVzIjpbImthaG4iLCJyZXF1aXJlIiwibmVjZXNzYXJ5IiwicGVhcmNla2VsbHkiLCJFZGdlIiwiQ3ljbGUiLCJQYXJ0aWFsQ3ljbGUiLCJlZGdlVXRpbGl0aWVzIiwidmVydGV4VXRpbGl0aWVzIiwiR3JhcGgiLCJhcnJheVV0aWxpdGllcyIsImZpcnN0IiwiZmlsdGVyIiwiRGlyZWN0ZWRBY3ljbGljR3JhcGgiLCJ2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhMaXRlcmFscyIsImZvcndhcmRzRGVwdGhGaXJzdFNlYXJjaCIsImVkZ2VzRnJvbVZlcnRleExpdGVyYWxzIiwiY2hlY2tFZGdlc0luY2x1ZGVzRWRnZSIsInJlbW92ZUVkZ2VGcm9tRWRnZXMiLCJlZGdlc0J5U291cmNlVmVydGV4TmFtZSIsImVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lIiwiRGlyZWN0ZWRHcmFwaCIsImN5Y2xpY0VkZ2VzIiwiZGlyZWN0ZWRBY3ljbGljR3JhcGgiLCJ2ZXJ0ZXhOYW1lIiwiY3ljbGVzUHJlc2VudCIsInZlcnRleFByZXNlbnQiLCJpc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUiLCJmaXJzdEN5Y2xlIiwiZ2V0Rmlyc3RDeWNsZUJ5VmVydGV4TmFtZSIsInZlcnRleCIsImdldFZlcnRleEJ5VmVydGV4TmFtZSIsInNsaWNlIiwicGFydGlhbEN5Y2xlcyIsImN5Y2xlcyIsInZpc2l0ZWRWZXJ0ZXgiLCJnZXRQcmVkZWNlc3NvclZlcnRpY2VzIiwidmlzaXRlZFZlcnRleE5hbWUiLCJnZXROYW1lIiwic291cmNlVmVydGV4TmFtZSIsImN5Y2xpY0VkZ2UiLCJtYXRjaGVzIiwibWF0Y2hTb3VyY2VWZXJ0ZXhOYW1lIiwicHJlZGVjZXNzb3JWZXJ0aWNlcyIsInBhcnRpYWxDeWNsZSIsImZyb21DeWNsaWNFZGdlQW5kUHJlZGVjZXNzb3JWZXJ0aWNlcyIsInB1c2giLCJjeWNsaWNFZGdlc0xlbmd0aCIsImxlbmd0aCIsInRlcm1pbmF0ZSIsInNvbWUiLCJ0YXJnZXRWZXJ0ZXhOYW1lIiwiZ2V0VGFyZ2V0VmVydGV4TmFtZSIsInRhcmdldFZlcnRleCIsInN1Y2Nlc3NvclZlcnRpY2VzIiwiY3ljbGUiLCJmcm9tVmVydGV4TmFtZVBhcnRpYWxDeWNsZUFuZFN1Y2Nlc3NvclZlcnRpY2VzIiwiY3ljbGVzTGVuZ3RoIiwiYWRkVmVydGV4QnlWZXJ0ZXhOYW1lIiwicmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lIiwiZmlsdGVyQ3ljbGljRWRnZXMiLCJlZGdlIiwic3VjY2VzcyIsImFkZEVkZ2UiLCJjeWNsaWNFZGdlc0luY2x1ZGVzRWRnZSIsImVkZ2VzIiwiZm9yRWFjaCIsInJlbW92ZVN0cmFuZGVkVmVydGljZXMiLCJlZGdlUHJlc2VudCIsImlzRWRnZVByZXNlbnQiLCJlZGdlQ3ljbGljIiwicmVtb3ZlRWRnZSIsImdldFNvdXJjZVZlcnRleE5hbWUiLCJzb3VyY2VWZXJ0ZXgiLCJzb3VyY2VWZXJ0ZXhTdHJhbmRlZCIsImlzU3RyYW5kZWQiLCJ0YXJnZXRWZXJ0ZXhTdHJhbmRlZCIsImZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZSIsImdldEVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lIiwicmVtb3ZlRWRnZXMiLCJnZXRFZGdlc0J5U291cmNlVmVydGV4TmFtZSIsImZyb21Ob3RoaW5nIiwiZGlyZWN0ZWRHcmFwaCIsInZlcnRleExpdGVyYWxzIiwidmVydGV4TmFtZXMiLCJmcm9tVmVydGV4TmFtZXNBbmRFZGdlcyIsImdyYXBoIiwiYXJlQ3ljbGVzUHJlc2VudCIsImZyb21WZXJ0ZXhOYW1lcyIsInRvcG9sb2dpY2FsbHlPcmRlcmVkVmVydGljZXMiLCJnZXRUb3BvbG9naWNhbGx5T3JkZXJlZFZlcnRpY2VzIiwiZnJvbVRvcG9sb2dpY2FsbHlPcmRlcmVkVmVydGljZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxZQUFS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ZWRHcmFwaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3Qga2FobiA9IHJlcXVpcmUoJ29jY2FtLWthaG4nKSxcbiAgICAgIG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpLFxuICAgICAgcGVhcmNla2VsbHkgPSByZXF1aXJlKCdvY2NhbS1wZWFyY2Uta2VsbHknKTtcblxuY29uc3QgRWRnZSA9IHJlcXVpcmUoJy4vZWRnZScpLFxuICAgICAgQ3ljbGUgPSByZXF1aXJlKCcuL2N5Y2xlJyksXG4gICAgICBQYXJ0aWFsQ3ljbGUgPSByZXF1aXJlKCcuL3BhcnRpYWxDeWNsZScpLFxuICAgICAgZWRnZVV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL2VkZ2UnKSxcbiAgICAgIHZlcnRleFV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL3ZlcnRleCcpO1xuXG5jb25zdCB7IEdyYXBoIH0gPSBrYWhuLFxuICAgICAgeyBhcnJheVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBmaXJzdCwgZmlsdGVyIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgRGlyZWN0ZWRBY3ljbGljR3JhcGggfSA9IHBlYXJjZWtlbGx5LFxuICAgICAgeyB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhMaXRlcmFscywgZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoIH0gPSB2ZXJ0ZXhVdGlsaXRpZXMsXG4gICAgICB7IGVkZ2VzRnJvbVZlcnRleExpdGVyYWxzLCBjaGVja0VkZ2VzSW5jbHVkZXNFZGdlLCByZW1vdmVFZGdlRnJvbUVkZ2VzLCBlZGdlc0J5U291cmNlVmVydGV4TmFtZSwgZWRnZXNCeVRhcmdldFZlcnRleE5hbWUgfSA9IGVkZ2VVdGlsaXRpZXM7XG5cbmNsYXNzIERpcmVjdGVkR3JhcGgge1xuICBjb25zdHJ1Y3RvcihjeWNsaWNFZGdlcywgZGlyZWN0ZWRBY3ljbGljR3JhcGgpIHtcbiAgICB0aGlzLmN5Y2xpY0VkZ2VzID0gY3ljbGljRWRnZXM7XG4gICAgdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaCA9IGRpcmVjdGVkQWN5Y2xpY0dyYXBoO1xuICB9XG4gIFxuICBhcmVDeWNsZXNQcmVzZW50QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBsZXQgY3ljbGVzUHJlc2VudCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdmVydGV4UHJlc2VudCA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgaWYgKHZlcnRleFByZXNlbnQpIHtcbiAgICAgIGNvbnN0IGZpcnN0Q3ljbGUgPSB0aGlzLmdldEZpcnN0Q3ljbGVCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICAgIGN5Y2xlc1ByZXNlbnQgPSAoZmlyc3RDeWNsZSAhPT0gbnVsbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGN5Y2xlc1ByZXNlbnQ7XG4gIH1cblxuICBnZXRGaXJzdEN5Y2xlQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBsZXQgZmlyc3RDeWNsZSA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgdmVydGV4ID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSksXG4gICAgICAgICAgY3ljbGljRWRnZXMgPSB0aGlzLmN5Y2xpY0VkZ2VzLnNsaWNlKCksIC8vL1xuICAgICAgICAgIHBhcnRpYWxDeWNsZXMgPSBbXSxcbiAgICAgICAgICBjeWNsZXMgPSBbXTtcblxuICAgIGZvcndhcmRzRGVwdGhGaXJzdFNlYXJjaCh2ZXJ0ZXgsIGZ1bmN0aW9uKHZpc2l0ZWRWZXJ0ZXgsIGdldFByZWRlY2Vzc29yVmVydGljZXMpIHtcbiAgICAgIGNvbnN0IHZpc2l0ZWRWZXJ0ZXhOYW1lID0gdmlzaXRlZFZlcnRleC5nZXROYW1lKCksXG4gICAgICAgICAgICBzb3VyY2VWZXJ0ZXhOYW1lID0gdmlzaXRlZFZlcnRleE5hbWU7IC8vL1xuXG4gICAgICBmaWx0ZXIoY3ljbGljRWRnZXMsIGZ1bmN0aW9uKGN5Y2xpY0VkZ2UpIHtcbiAgICAgICAgY29uc3QgbWF0Y2hlcyA9IGN5Y2xpY0VkZ2UubWF0Y2hTb3VyY2VWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpO1xuXG4gICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgY29uc3QgcHJlZGVjZXNzb3JWZXJ0aWNlcyA9IGdldFByZWRlY2Vzc29yVmVydGljZXMoKSxcbiAgICAgICAgICAgICAgICBwYXJ0aWFsQ3ljbGUgPSAgUGFydGlhbEN5Y2xlLmZyb21DeWNsaWNFZGdlQW5kUHJlZGVjZXNzb3JWZXJ0aWNlcyhjeWNsaWNFZGdlLCBwcmVkZWNlc3NvclZlcnRpY2VzKTtcbiAgICAgICAgICBcbiAgICAgICAgICBwYXJ0aWFsQ3ljbGVzLnB1c2gocGFydGlhbEN5Y2xlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGN5Y2xpY0VkZ2VzTGVuZ3RoID0gY3ljbGljRWRnZXMubGVuZ3RoLFxuICAgICAgICAgICAgdGVybWluYXRlID0gKGN5Y2xpY0VkZ2VzTGVuZ3RoID09PSAwKTtcblxuICAgICAgcmV0dXJuIHRlcm1pbmF0ZTtcbiAgICB9KTtcblxuICAgIHBhcnRpYWxDeWNsZXMuc29tZSgocGFydGlhbEN5Y2xlKSA9PiB7XG4gICAgICBjb25zdCB0YXJnZXRWZXJ0ZXhOYW1lID0gcGFydGlhbEN5Y2xlLmdldFRhcmdldFZlcnRleE5hbWUoKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgICBmb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2godGFyZ2V0VmVydGV4LCBmdW5jdGlvbih2aXNpdGVkVmVydGV4LCBnZXRQcmVkZWNlc3NvclZlcnRpY2VzKSB7XG4gICAgICAgIGNvbnN0IHZpc2l0ZWRWZXJ0ZXhOYW1lID0gdmlzaXRlZFZlcnRleC5nZXROYW1lKCk7XG5cbiAgICAgICAgaWYgKHZpc2l0ZWRWZXJ0ZXhOYW1lID09PSB2ZXJ0ZXhOYW1lKSB7XG4gICAgICAgICAgY29uc3QgcHJlZGVjZXNzb3JWZXJ0aWNlcyA9IGdldFByZWRlY2Vzc29yVmVydGljZXMoKSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzb3JWZXJ0aWNlcyA9IHByZWRlY2Vzc29yVmVydGljZXMsICAvLy9cbiAgICAgICAgICAgICAgICBjeWNsZSA9IEN5Y2xlLmZyb21WZXJ0ZXhOYW1lUGFydGlhbEN5Y2xlQW5kU3VjY2Vzc29yVmVydGljZXModmVydGV4TmFtZSwgcGFydGlhbEN5Y2xlLCBzdWNjZXNzb3JWZXJ0aWNlcyk7XG5cbiAgICAgICAgICBjeWNsZXMucHVzaChjeWNsZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjeWNsZXNMZW5ndGggPSBjeWNsZXMubGVuZ3RoLFxuICAgICAgICAgICAgICB0ZXJtaW5hdGUgPSAoY3ljbGVzTGVuZ3RoID4gMCk7XG5cbiAgICAgICAgcmV0dXJuIHRlcm1pbmF0ZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY3ljbGVzTGVuZ3RoID0gY3ljbGVzLmxlbmd0aDtcbiAgICBcbiAgICBpZiAoY3ljbGVzTGVuZ3RoID4gMCkge1xuICAgICAgZmlyc3RDeWNsZSA9IGZpcnN0KGN5Y2xlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpcnN0Q3ljbGU7XG4gIH1cblxuICBhZGRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSkgeyB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmFkZFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTsgfVxuXG4gIHJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5yZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICB0aGlzLmZpbHRlckN5Y2xpY0VkZ2VzKCk7XG4gIH1cblxuICBhZGRFZGdlKGVkZ2UpIHtcbiAgICBjb25zdCBzdWNjZXNzID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5hZGRFZGdlKGVkZ2UpO1xuICAgIFxuICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgY29uc3QgY3ljbGljRWRnZXNJbmNsdWRlc0VkZ2UgPSBjaGVja0VkZ2VzSW5jbHVkZXNFZGdlKGVkZ2UsIHRoaXMuY3ljbGljRWRnZXMpO1xuXG4gICAgICBpZiAoIWN5Y2xpY0VkZ2VzSW5jbHVkZXNFZGdlKSB7XG4gICAgICAgIGNvbnN0IGN5Y2xpY0VkZ2UgPSBlZGdlOyAgLy8vXG5cbiAgICAgICAgdGhpcy5jeWNsaWNFZGdlcy5wdXNoKGN5Y2xpY0VkZ2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgYWRkRWRnZXMoZWRnZXMpIHtcbiAgICBlZGdlcy5mb3JFYWNoKChlZGdlKSA9PiB7XG4gICAgICB0aGlzLmFkZEVkZ2UoZWRnZSk7XG4gICAgfSk7XG4gIH1cblxuICByZW1vdmVFZGdlKGVkZ2UsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMgPSBmYWxzZSkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VzSW5jbHVkZXNFZGdlID0gY2hlY2tFZGdlc0luY2x1ZGVzRWRnZShlZGdlLCB0aGlzLmN5Y2xpY0VkZ2VzKSxcbiAgICAgICAgICBlZGdlUHJlc2VudCA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguaXNFZGdlUHJlc2VudChlZGdlKSxcbiAgICAgICAgICBlZGdlQ3ljbGljID0gY3ljbGljRWRnZXNJbmNsdWRlc0VkZ2U7IC8vL1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKGVkZ2VDeWNsaWMpIHtcbiAgICAgIGNvbnN0IGN5Y2xpY0VkZ2UgPSBlZGdlOyAgLy8vXG5cbiAgICAgIHJlbW92ZUVkZ2VGcm9tRWRnZXMoY3ljbGljRWRnZSwgdGhpcy5jeWNsaWNFZGdlcyk7XG4gICAgfSBlbHNlIGlmIChlZGdlUHJlc2VudCkge1xuICAgICAgdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5yZW1vdmVFZGdlKGVkZ2UpO1xuXG4gICAgICBpZiAocmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcykge1xuICAgICAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gZWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICAgIHRhcmdldFZlcnRleE5hbWUgPSBlZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKSxcbiAgICAgICAgICAgICAgc291cmNlVmVydGV4ID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSksXG4gICAgICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpLFxuICAgICAgICAgICAgICBzb3VyY2VWZXJ0ZXhTdHJhbmRlZCA9IHNvdXJjZVZlcnRleC5pc1N0cmFuZGVkKCksXG4gICAgICAgICAgICAgIHRhcmdldFZlcnRleFN0cmFuZGVkID0gdGFyZ2V0VmVydGV4LmlzU3RyYW5kZWQoKTtcblxuICAgICAgICBpZiAoc291cmNlVmVydGV4U3RyYW5kZWQpIHtcbiAgICAgICAgICB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLnJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0YXJnZXRWZXJ0ZXhTdHJhbmRlZCkge1xuICAgICAgICAgIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGgucmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5maWx0ZXJDeWNsaWNFZGdlcygpO1xuICB9XG5cbiAgcmVtb3ZlRWRnZXMoZWRnZXMsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMgPSBmYWxzZSkge1xuICAgIGVkZ2VzLmZvckVhY2goKGVkZ2UpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlRWRnZShlZGdlLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZEVkZ2VCeVZlcnRleE5hbWVzKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpIHtcbiAgICBjb25zdCBlZGdlID0gRWRnZS5mcm9tU291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICB0aGlzLmFkZEVkZ2UoZWRnZSk7XG4gIH1cblxuICByZW1vdmVFZGdlQnlWZXJ0ZXhOYW1lcyhzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzID0gZmFsc2UpIHtcbiAgICBjb25zdCBlZGdlID0gRWRnZS5mcm9tU291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICB0aGlzLnJlbW92ZUVkZ2UoZWRnZSwgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyk7XG4gIH1cblxuICByZW1vdmVFZGdlc0J5VGFyZ2V0VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzID0gZmFsc2UpIHtcbiAgICBjb25zdCBjeWNsaWNFZGdlcyA9IGVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUsIHRoaXMuY3ljbGljRWRnZXMpLFxuICAgICAgICAgIGVkZ2VzID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRFZGdlc0J5VGFyZ2V0VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgIHRoaXMucmVtb3ZlRWRnZXMoY3ljbGljRWRnZXMsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMpO1xuXG4gICAgdGhpcy5yZW1vdmVFZGdlcyhlZGdlcywgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyk7XG4gIH1cblxuICByZW1vdmVFZGdlc0J5U291cmNlVmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzID0gZmFsc2UpIHtcbiAgICBjb25zdCBjeWNsaWNFZGdlcyA9IGVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUsIHRoaXMuY3ljbGljRWRnZXMpLFxuICAgICAgICAgIGVkZ2VzID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRFZGdlc0J5U291cmNlVmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKTtcblxuICAgIHRoaXMucmVtb3ZlRWRnZXMoY3ljbGljRWRnZXMsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMpO1xuXG4gICAgdGhpcy5yZW1vdmVFZGdlcyhlZGdlcywgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyk7XG4gIH1cblxuICByZW1vdmVBbGxFZGdlc0FuZFZlcnRpY2VzKCkge1xuICAgIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGggPSBEaXJlY3RlZEFjeWNsaWNHcmFwaC5mcm9tTm90aGluZygpO1xuXG4gICAgdGhpcy5jeWNsaWNFZGdlcyA9IFtdO1xuICB9XG5cbiAgZmlsdGVyQ3ljbGljRWRnZXMoKSB7XG4gICAgZmlsdGVyKHRoaXMuY3ljbGljRWRnZXMsIChjeWNsaWNFZGdlKSA9PiB7XG4gICAgICBjb25zdCBlZGdlID0gY3ljbGljRWRnZSwgIC8vL1xuICAgICAgICAgICAgc3VjY2VzcyA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguYWRkRWRnZShlZGdlKTtcblxuICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VzID0gW10sXG4gICAgICAgICAgZGlyZWN0ZWRBY3ljbGljR3JhcGggPSBEaXJlY3RlZEFjeWNsaWNHcmFwaC5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGRpcmVjdGVkR3JhcGggPSBuZXcgRGlyZWN0ZWRHcmFwaChjeWNsaWNFZGdlcywgZGlyZWN0ZWRBY3ljbGljR3JhcGgpO1xuICAgIFxuICAgIHJldHVybiBkaXJlY3RlZEdyYXBoOyAgICBcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmVydGV4TGl0ZXJhbHModmVydGV4TGl0ZXJhbHMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhOYW1lcyA9IHZlcnRleE5hbWVzRnJvbVZlcnRleExpdGVyYWxzKHZlcnRleExpdGVyYWxzKSxcbiAgICAgICAgICBlZGdlcyA9IGVkZ2VzRnJvbVZlcnRleExpdGVyYWxzKHZlcnRleExpdGVyYWxzKSxcbiAgICAgICAgICBkaXJlY3RlZEdyYXBoID0gRGlyZWN0ZWRHcmFwaC5mcm9tVmVydGV4TmFtZXNBbmRFZGdlcyh2ZXJ0ZXhOYW1lcywgZWRnZXMpO1xuXG4gICAgcmV0dXJuIGRpcmVjdGVkR3JhcGg7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZlcnRleE5hbWVzQW5kRWRnZXModmVydGV4TmFtZXMsIGVkZ2VzKSB7XG4gICAgbGV0IGRpcmVjdGVkR3JhcGg7XG5cbiAgICBjb25zdCBncmFwaCA9IEdyYXBoLmZyb21WZXJ0ZXhOYW1lc0FuZEVkZ2VzKHZlcnRleE5hbWVzLCBlZGdlcyksXG4gICAgICAgICAgY3ljbGVzUHJlc2VudCA9IGdyYXBoLmFyZUN5Y2xlc1ByZXNlbnQoKTtcblxuICAgIGlmIChjeWNsZXNQcmVzZW50KSB7XG4gICAgICBjb25zdCBjeWNsaWNFZGdlcyA9IFtdLFxuICAgICAgICAgICAgZGlyZWN0ZWRBY3ljbGljR3JhcGggPSBEaXJlY3RlZEFjeWNsaWNHcmFwaC5mcm9tVmVydGV4TmFtZXModmVydGV4TmFtZXMpO1xuXG4gICAgICBkaXJlY3RlZEdyYXBoID0gbmV3IERpcmVjdGVkR3JhcGgoY3ljbGljRWRnZXMsIGRpcmVjdGVkQWN5Y2xpY0dyYXBoKTtcblxuICAgICAgZWRnZXMuZm9yRWFjaChmdW5jdGlvbihlZGdlKSB7XG4gICAgICAgIGRpcmVjdGVkR3JhcGguYWRkRWRnZShlZGdlKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0b3BvbG9naWNhbGx5T3JkZXJlZFZlcnRpY2VzID0gZ3JhcGguZ2V0VG9wb2xvZ2ljYWxseU9yZGVyZWRWZXJ0aWNlcygpLFxuICAgICAgICAgICAgY3ljbGljRWRnZXMgPSBbXSxcbiAgICAgICAgICAgIGRpcmVjdGVkQWN5Y2xpY0dyYXBoID0gRGlyZWN0ZWRBY3ljbGljR3JhcGguZnJvbVRvcG9sb2dpY2FsbHlPcmRlcmVkVmVydGljZXModG9wb2xvZ2ljYWxseU9yZGVyZWRWZXJ0aWNlcyk7XG5cbiAgICAgIGRpcmVjdGVkR3JhcGggPSBuZXcgRGlyZWN0ZWRHcmFwaChjeWNsaWNFZGdlcywgZGlyZWN0ZWRBY3ljbGljR3JhcGgpO1xuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3RlZEdyYXBoO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGlyZWN0ZWRHcmFwaDtcblxuIl19