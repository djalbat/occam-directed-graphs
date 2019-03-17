'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var kahn = require('occam-kahn'),
    necessary = require('necessary'),
    pearcekelly = require('occam-pearce-kelly');

var Cycle = require('./cycle'),
    PartialCycle = require('./partialCycle'),
    vertexUtilities = require('./utilities/vertex');

var Graph = kahn.Graph,
    arrayUtilities = necessary.arrayUtilities,
    DirectedAcyclicGraph = pearcekelly.DirectedAcyclicGraph,
    first = arrayUtilities.first,
    filter = arrayUtilities.filter,
    prune = arrayUtilities.prune,
    forwardsDepthFirstSearch = vertexUtilities.forwardsDepthFirstSearch;


var remove = prune; ///

var DirectedGraph = function () {
  function DirectedGraph(cyclicEdges, directedAcyclicGraph) {
    _classCallCheck(this, DirectedGraph);

    this.cyclicEdges = cyclicEdges;
    this.directedAcyclicGraph = directedAcyclicGraph;
  }

  _createClass(DirectedGraph, [{
    key: 'areCyclesPresentByVertexName',
    value: function areCyclesPresentByVertexName(vertexName) {
      var firstCycle = this.getFirstCycleByVertexName(vertexName),
          cyclesPresent = firstCycle !== null;

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
          var cyclicEdge = edge;

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
      }

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

function checkEdgesIncludesEdge(edge, edges) {
  var edge1 = edge,
      ///
  edgesIncludesEdge = edges.some(function (edge) {
    var edge2 = edge,
        ///
    matches = edge1.match(edge2);

    if (matches) {
      return true;
    }
  });

  return edgesIncludesEdge;
}

function removeEdgeFromEdges(edge, edges) {
  var edge1 = edge; ///

  remove(edges, function (edge) {
    var edge2 = edge,
        ///
    matches = edge1.match(edge2);

    if (!matches) {
      ///
      return true;
    }
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9kaXJlY3RlZEdyYXBoLmpzIl0sIm5hbWVzIjpbImthaG4iLCJyZXF1aXJlIiwibmVjZXNzYXJ5IiwicGVhcmNla2VsbHkiLCJDeWNsZSIsIlBhcnRpYWxDeWNsZSIsInZlcnRleFV0aWxpdGllcyIsIkdyYXBoIiwiYXJyYXlVdGlsaXRpZXMiLCJEaXJlY3RlZEFjeWNsaWNHcmFwaCIsImZpcnN0IiwiZmlsdGVyIiwicHJ1bmUiLCJmb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2giLCJyZW1vdmUiLCJEaXJlY3RlZEdyYXBoIiwiY3ljbGljRWRnZXMiLCJkaXJlY3RlZEFjeWNsaWNHcmFwaCIsInZlcnRleE5hbWUiLCJmaXJzdEN5Y2xlIiwiZ2V0Rmlyc3RDeWNsZUJ5VmVydGV4TmFtZSIsImN5Y2xlc1ByZXNlbnQiLCJ2ZXJ0ZXgiLCJnZXRWZXJ0ZXhCeVZlcnRleE5hbWUiLCJzbGljZSIsInBhcnRpYWxDeWNsZXMiLCJjeWNsZXMiLCJ2aXNpdGVkVmVydGV4IiwiZ2V0UHJlZGVjZXNzb3JWZXJ0aWNlcyIsInZpc2l0ZWRWZXJ0ZXhOYW1lIiwiZ2V0TmFtZSIsInNvdXJjZVZlcnRleE5hbWUiLCJjeWNsaWNFZGdlIiwibWF0Y2hlcyIsIm1hdGNoU291cmNlVmVydGV4TmFtZSIsInByZWRlY2Vzc29yVmVydGljZXMiLCJwYXJ0aWFsQ3ljbGUiLCJmcm9tQ3ljbGljRWRnZUFuZFByZWRlY2Vzc29yVmVydGljZXMiLCJwdXNoIiwiY3ljbGljRWRnZXNMZW5ndGgiLCJsZW5ndGgiLCJ0ZXJtaW5hdGUiLCJzb21lIiwidGFyZ2V0VmVydGV4TmFtZSIsImdldFRhcmdldFZlcnRleE5hbWUiLCJ0YXJnZXRWZXJ0ZXgiLCJzdWNjZXNzb3JWZXJ0aWNlcyIsImN5Y2xlIiwiZnJvbVZlcnRleE5hbWVQYXJ0aWFsQ3ljbGVBbmRTdWNjZXNzb3JWZXJ0aWNlcyIsImN5Y2xlc0xlbmd0aCIsImFkZFZlcnRleEJ5VmVydGV4TmFtZSIsInJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZSIsImZpbHRlckN5Y2xpY0VkZ2VzIiwiZWRnZSIsInN1Y2Nlc3MiLCJhZGRFZGdlIiwiY3ljbGljRWRnZXNJbmNsdWRlc0VkZ2UiLCJjaGVja0VkZ2VzSW5jbHVkZXNFZGdlIiwiZWRnZXMiLCJmb3JFYWNoIiwicmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyIsImVkZ2VDeWNsaWMiLCJlZGdlUHJlc2VudCIsImlzRWRnZVByZXNlbnQiLCJyZW1vdmVFZGdlRnJvbUVkZ2VzIiwicmVtb3ZlRWRnZSIsImdldFNvdXJjZVZlcnRleE5hbWUiLCJzb3VyY2VWZXJ0ZXgiLCJzb3VyY2VWZXJ0ZXhTdHJhbmRlZCIsImlzU3RyYW5kZWQiLCJ0YXJnZXRWZXJ0ZXhTdHJhbmRlZCIsImZyb21Ob3RoaW5nIiwiZGlyZWN0ZWRHcmFwaCIsInZlcnRleE5hbWVzIiwiZ3JhcGgiLCJmcm9tVmVydGV4TmFtZXNBbmRFZGdlcyIsImFyZUN5Y2xlc1ByZXNlbnQiLCJmcm9tVmVydGV4TmFtZXMiLCJ0b3BvbG9naWNhbGx5T3JkZXJlZFZlcnRpY2VzIiwiZ2V0VG9wb2xvZ2ljYWxseU9yZGVyZWRWZXJ0aWNlcyIsImZyb21Ub3BvbG9naWNhbGx5T3JkZXJlZFZlcnRpY2VzIiwibW9kdWxlIiwiZXhwb3J0cyIsImVkZ2UxIiwiZWRnZXNJbmNsdWRlc0VkZ2UiLCJlZGdlMiIsIm1hdGNoIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxZQUFSLENBQWI7QUFBQSxJQUNNQyxZQUFZRCxRQUFRLFdBQVIsQ0FEbEI7QUFBQSxJQUVNRSxjQUFjRixRQUFRLG9CQUFSLENBRnBCOztBQUlBLElBQU1HLFFBQVFILFFBQVEsU0FBUixDQUFkO0FBQUEsSUFDTUksZUFBZUosUUFBUSxnQkFBUixDQURyQjtBQUFBLElBRU1LLGtCQUFrQkwsUUFBUSxvQkFBUixDQUZ4Qjs7QUFJTSxJQUFFTSxLQUFGLEdBQVlQLElBQVosQ0FBRU8sS0FBRjtBQUFBLElBQ0VDLGNBREYsR0FDcUJOLFNBRHJCLENBQ0VN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QkMsWUFBbEIsRUFBK0JDLHFCQUEvQixDQUFoQjtBQUNEOztBQUVELGFBQU91RCxhQUFQO0FBQ0Q7Ozs7OztBQUdIUyxPQUFPQyxPQUFQLEdBQWlCbkUsYUFBakI7O0FBRUEsU0FBUzBDLHNCQUFULENBQWdDSixJQUFoQyxFQUFzQ0ssS0FBdEMsRUFBNkM7QUFDM0MsTUFBTXlCLFFBQVE5QixJQUFkO0FBQUEsTUFBb0I7QUFDZCtCLHNCQUFvQjFCLE1BQU1oQixJQUFOLENBQVcsVUFBU1csSUFBVCxFQUFlO0FBQzVDLFFBQU1nQyxRQUFRaEMsSUFBZDtBQUFBLFFBQW9CO0FBQ2RwQixjQUFVa0QsTUFBTUcsS0FBTixDQUFZRCxLQUFaLENBRGhCOztBQUdBLFFBQUlwRCxPQUFKLEVBQWE7QUFDWCxhQUFPLElBQVA7QUFDRDtBQUNGLEdBUG1CLENBRDFCOztBQVVBLFNBQU9tRCxpQkFBUDtBQUNEOztBQUVELFNBQVNwQixtQkFBVCxDQUE2QlgsSUFBN0IsRUFBbUNLLEtBQW5DLEVBQTBDO0FBQ3hDLE1BQU15QixRQUFROUIsSUFBZCxDQUR3QyxDQUNwQjs7QUFFcEJ2QyxTQUFPNEMsS0FBUCxFQUFjLFVBQVNMLElBQVQsRUFBZTtBQUMzQixRQUFNZ0MsUUFBUWhDLElBQWQ7QUFBQSxRQUFvQjtBQUNkcEIsY0FBVWtELE1BQU1HLEtBQU4sQ0FBWUQsS0FBWixDQURoQjs7QUFHQSxRQUFJLENBQUNwRCxPQUFMLEVBQWM7QUFBRTtBQUNkLGFBQU8sSUFBUDtBQUNEO0FBQ0YsR0FQRDtBQVFEIiwiZmlsZSI6ImRpcmVjdGVkR3JhcGguanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGthaG4gPSByZXF1aXJlKCdvY2NhbS1rYWhuJyksXG4gICAgICBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKSxcbiAgICAgIHBlYXJjZWtlbGx5ID0gcmVxdWlyZSgnb2NjYW0tcGVhcmNlLWtlbGx5Jyk7XG5cbmNvbnN0IEN5Y2xlID0gcmVxdWlyZSgnLi9jeWNsZScpLFxuICAgICAgUGFydGlhbEN5Y2xlID0gcmVxdWlyZSgnLi9wYXJ0aWFsQ3ljbGUnKSxcbiAgICAgIHZlcnRleFV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL3ZlcnRleCcpO1xuXG5jb25zdCB7IEdyYXBoIH0gPSBrYWhuLFxuICAgICAgeyBhcnJheVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBEaXJlY3RlZEFjeWNsaWNHcmFwaCB9ID0gcGVhcmNla2VsbHksXG4gICAgICB7IGZpcnN0LCBmaWx0ZXIsIHBydW5lIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoIH0gPSB2ZXJ0ZXhVdGlsaXRpZXM7XG5cbmNvbnN0IHJlbW92ZSA9IHBydW5lOyAgLy8vXG5cbmNsYXNzIERpcmVjdGVkR3JhcGgge1xuICBjb25zdHJ1Y3RvcihjeWNsaWNFZGdlcywgZGlyZWN0ZWRBY3ljbGljR3JhcGgpIHtcbiAgICB0aGlzLmN5Y2xpY0VkZ2VzID0gY3ljbGljRWRnZXM7XG4gICAgdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaCA9IGRpcmVjdGVkQWN5Y2xpY0dyYXBoO1xuICB9XG4gIFxuICBhcmVDeWNsZXNQcmVzZW50QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBjb25zdCBmaXJzdEN5Y2xlID0gdGhpcy5nZXRGaXJzdEN5Y2xlQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpLFxuICAgICAgICAgIGN5Y2xlc1ByZXNlbnQgPSAoZmlyc3RDeWNsZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gY3ljbGVzUHJlc2VudDtcbiAgfVxuXG4gIGdldEZpcnN0Q3ljbGVCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGxldCBmaXJzdEN5Y2xlID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCB2ZXJ0ZXggPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSxcbiAgICAgICAgICBjeWNsaWNFZGdlcyA9IHRoaXMuY3ljbGljRWRnZXMuc2xpY2UoKSwgLy8vXG4gICAgICAgICAgcGFydGlhbEN5Y2xlcyA9IFtdLFxuICAgICAgICAgIGN5Y2xlcyA9IFtdO1xuXG4gICAgZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoKHZlcnRleCwgZnVuY3Rpb24odmlzaXRlZFZlcnRleCwgZ2V0UHJlZGVjZXNzb3JWZXJ0aWNlcykge1xuICAgICAgY29uc3QgdmlzaXRlZFZlcnRleE5hbWUgPSB2aXNpdGVkVmVydGV4LmdldE5hbWUoKSxcbiAgICAgICAgICAgIHNvdXJjZVZlcnRleE5hbWUgPSB2aXNpdGVkVmVydGV4TmFtZTsgLy8vXG5cbiAgICAgIGZpbHRlcihjeWNsaWNFZGdlcywgZnVuY3Rpb24oY3ljbGljRWRnZSkge1xuICAgICAgICBjb25zdCBtYXRjaGVzID0gY3ljbGljRWRnZS5tYXRjaFNvdXJjZVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSk7XG5cbiAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICBjb25zdCBwcmVkZWNlc3NvclZlcnRpY2VzID0gZ2V0UHJlZGVjZXNzb3JWZXJ0aWNlcygpLFxuICAgICAgICAgICAgICAgIHBhcnRpYWxDeWNsZSA9ICBQYXJ0aWFsQ3ljbGUuZnJvbUN5Y2xpY0VkZ2VBbmRQcmVkZWNlc3NvclZlcnRpY2VzKGN5Y2xpY0VkZ2UsIHByZWRlY2Vzc29yVmVydGljZXMpO1xuICAgICAgICAgIFxuICAgICAgICAgIHBhcnRpYWxDeWNsZXMucHVzaChwYXJ0aWFsQ3ljbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgY3ljbGljRWRnZXNMZW5ndGggPSBjeWNsaWNFZGdlcy5sZW5ndGgsXG4gICAgICAgICAgICB0ZXJtaW5hdGUgPSAoY3ljbGljRWRnZXNMZW5ndGggPT09IDApO1xuXG4gICAgICByZXR1cm4gdGVybWluYXRlO1xuICAgIH0pO1xuXG4gICAgcGFydGlhbEN5Y2xlcy5zb21lKChwYXJ0aWFsQ3ljbGUpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldFZlcnRleE5hbWUgPSBwYXJ0aWFsQ3ljbGUuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICAgIGZvcndhcmRzRGVwdGhGaXJzdFNlYXJjaCh0YXJnZXRWZXJ0ZXgsIGZ1bmN0aW9uKHZpc2l0ZWRWZXJ0ZXgsIGdldFByZWRlY2Vzc29yVmVydGljZXMpIHtcbiAgICAgICAgY29uc3QgdmlzaXRlZFZlcnRleE5hbWUgPSB2aXNpdGVkVmVydGV4LmdldE5hbWUoKTtcblxuICAgICAgICBpZiAodmlzaXRlZFZlcnRleE5hbWUgPT09IHZlcnRleE5hbWUpIHtcbiAgICAgICAgICBjb25zdCBwcmVkZWNlc3NvclZlcnRpY2VzID0gZ2V0UHJlZGVjZXNzb3JWZXJ0aWNlcygpLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3NvclZlcnRpY2VzID0gcHJlZGVjZXNzb3JWZXJ0aWNlcywgIC8vL1xuICAgICAgICAgICAgICAgIGN5Y2xlID0gQ3ljbGUuZnJvbVZlcnRleE5hbWVQYXJ0aWFsQ3ljbGVBbmRTdWNjZXNzb3JWZXJ0aWNlcyh2ZXJ0ZXhOYW1lLCBwYXJ0aWFsQ3ljbGUsIHN1Y2Nlc3NvclZlcnRpY2VzKTtcblxuICAgICAgICAgIGN5Y2xlcy5wdXNoKGN5Y2xlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGN5Y2xlc0xlbmd0aCA9IGN5Y2xlcy5sZW5ndGgsXG4gICAgICAgICAgICAgIHRlcm1pbmF0ZSA9IChjeWNsZXNMZW5ndGggPiAwKTtcblxuICAgICAgICByZXR1cm4gdGVybWluYXRlO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjeWNsZXNMZW5ndGggPSBjeWNsZXMubGVuZ3RoO1xuICAgIFxuICAgIGlmIChjeWNsZXNMZW5ndGggPiAwKSB7XG4gICAgICBmaXJzdEN5Y2xlID0gZmlyc3QoY3ljbGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmlyc3RDeWNsZTtcbiAgfVxuXG4gIGFkZFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguYWRkVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpOyB9XG5cbiAgcmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLnJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgIHRoaXMuZmlsdGVyQ3ljbGljRWRnZXMoKTtcbiAgfVxuXG4gIGFkZEVkZ2UoZWRnZSkge1xuICAgIGNvbnN0IHN1Y2Nlc3MgPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmFkZEVkZ2UoZWRnZSk7XG4gICAgXG4gICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICBjb25zdCBjeWNsaWNFZGdlc0luY2x1ZGVzRWRnZSA9IGNoZWNrRWRnZXNJbmNsdWRlc0VkZ2UoZWRnZSwgdGhpcy5jeWNsaWNFZGdlcyk7XG5cbiAgICAgIGlmICghY3ljbGljRWRnZXNJbmNsdWRlc0VkZ2UpIHtcbiAgICAgICAgY29uc3QgY3ljbGljRWRnZSA9IGVkZ2U7XG5cbiAgICAgICAgdGhpcy5jeWNsaWNFZGdlcy5wdXNoKGN5Y2xpY0VkZ2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgYWRkRWRnZXMoZWRnZXMpIHtcbiAgICBlZGdlcy5mb3JFYWNoKChlZGdlKSA9PiB7XG4gICAgICB0aGlzLmFkZEVkZ2UoZWRnZSk7XG4gICAgfSk7XG4gIH1cbiAgXG4gIHJlbW92ZUVkZ2UoZWRnZSwgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgY3ljbGljRWRnZXNJbmNsdWRlc0VkZ2UgPSBjaGVja0VkZ2VzSW5jbHVkZXNFZGdlKGVkZ2UsIHRoaXMuY3ljbGljRWRnZXMpLFxuICAgICAgICAgIGVkZ2VDeWNsaWMgPSBjeWNsaWNFZGdlc0luY2x1ZGVzRWRnZSwgLy8vXG4gICAgICAgICAgZWRnZVByZXNlbnQgPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmlzRWRnZVByZXNlbnQoZWRnZSk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAoZWRnZUN5Y2xpYykge1xuICAgICAgY29uc3QgY3ljbGljRWRnZSA9IGVkZ2U7ICAvLy9cblxuICAgICAgcmVtb3ZlRWRnZUZyb21FZGdlcyhjeWNsaWNFZGdlLCB0aGlzLmN5Y2xpY0VkZ2VzKTtcbiAgICB9IGVsc2UgaWYgKGVkZ2VQcmVzZW50KSB7XG4gICAgICB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLnJlbW92ZUVkZ2UoZWRnZSk7XG4gICAgfVxuXG4gICAgaWYgKHJlbW92ZVN0cmFuZGVkVmVydGljZXMpIHtcbiAgICAgIGNvbnN0IHNvdXJjZVZlcnRleE5hbWUgPSBlZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleE5hbWUgPSBlZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKSxcbiAgICAgICAgICAgIHNvdXJjZVZlcnRleCA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSksXG4gICAgICAgICAgICBzb3VyY2VWZXJ0ZXhTdHJhbmRlZCA9IHNvdXJjZVZlcnRleC5pc1N0cmFuZGVkKCksXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXhTdHJhbmRlZCA9IHRhcmdldFZlcnRleC5pc1N0cmFuZGVkKCk7XG5cbiAgICAgIGlmIChzb3VyY2VWZXJ0ZXhTdHJhbmRlZCkge1xuICAgICAgICB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLnJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRhcmdldFZlcnRleFN0cmFuZGVkKSB7XG4gICAgICAgIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGgucmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZmlsdGVyQ3ljbGljRWRnZXMoKTtcbiAgfVxuXG4gIHJlbW92ZUVkZ2VzKGVkZ2VzLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzID0gZmFsc2UpIHtcbiAgICBlZGdlcy5mb3JFYWNoKChlZGdlKSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZUVkZ2UoZWRnZSwgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyk7XG4gICAgfSk7XG4gIH1cblxuICByZW1vdmVBbGxFZGdlc0FuZFZlcnRpY2VzKCkge1xuICAgIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGggPSBEaXJlY3RlZEFjeWNsaWNHcmFwaC5mcm9tTm90aGluZygpO1xuXG4gICAgdGhpcy5jeWNsaWNFZGdlcyA9IFtdO1xuICB9XG5cbiAgZmlsdGVyQ3ljbGljRWRnZXMoKSB7XG4gICAgZmlsdGVyKHRoaXMuY3ljbGljRWRnZXMsIChjeWNsaWNFZGdlKSA9PiB7XG4gICAgICBjb25zdCBlZGdlID0gY3ljbGljRWRnZSwgIC8vL1xuICAgICAgICAgICAgc3VjY2VzcyA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguYWRkRWRnZShlZGdlKTtcblxuICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VzID0gW10sXG4gICAgICAgICAgZGlyZWN0ZWRBY3ljbGljR3JhcGggPSBEaXJlY3RlZEFjeWNsaWNHcmFwaC5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGRpcmVjdGVkR3JhcGggPSBuZXcgRGlyZWN0ZWRHcmFwaChjeWNsaWNFZGdlcywgZGlyZWN0ZWRBY3ljbGljR3JhcGgpO1xuICAgIFxuICAgIHJldHVybiBkaXJlY3RlZEdyYXBoOyAgICBcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmVydGV4TmFtZXNBbmRFZGdlcyh2ZXJ0ZXhOYW1lcywgZWRnZXMpIHtcbiAgICBsZXQgZGlyZWN0ZWRHcmFwaDtcblxuICAgIGNvbnN0IGdyYXBoID0gR3JhcGguZnJvbVZlcnRleE5hbWVzQW5kRWRnZXModmVydGV4TmFtZXMsIGVkZ2VzKSxcbiAgICAgICAgICBjeWNsZXNQcmVzZW50ID0gZ3JhcGguYXJlQ3ljbGVzUHJlc2VudCgpO1xuXG4gICAgaWYgKGN5Y2xlc1ByZXNlbnQpIHtcbiAgICAgIGNvbnN0IGN5Y2xpY0VkZ2VzID0gW10sXG4gICAgICAgICAgICBkaXJlY3RlZEFjeWNsaWNHcmFwaCA9IERpcmVjdGVkQWN5Y2xpY0dyYXBoLmZyb21WZXJ0ZXhOYW1lcyh2ZXJ0ZXhOYW1lcyk7XG5cbiAgICAgIGRpcmVjdGVkR3JhcGggPSBuZXcgRGlyZWN0ZWRHcmFwaChjeWNsaWNFZGdlcywgZGlyZWN0ZWRBY3ljbGljR3JhcGgpO1xuXG4gICAgICBlZGdlcy5mb3JFYWNoKGZ1bmN0aW9uKGVkZ2UpIHtcbiAgICAgICAgZGlyZWN0ZWRHcmFwaC5hZGRFZGdlKGVkZ2UpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRvcG9sb2dpY2FsbHlPcmRlcmVkVmVydGljZXMgPSBncmFwaC5nZXRUb3BvbG9naWNhbGx5T3JkZXJlZFZlcnRpY2VzKCksXG4gICAgICAgICAgICBjeWNsaWNFZGdlcyA9IFtdLFxuICAgICAgICAgICAgZGlyZWN0ZWRBY3ljbGljR3JhcGggPSBEaXJlY3RlZEFjeWNsaWNHcmFwaC5mcm9tVG9wb2xvZ2ljYWxseU9yZGVyZWRWZXJ0aWNlcyh0b3BvbG9naWNhbGx5T3JkZXJlZFZlcnRpY2VzKTtcblxuICAgICAgZGlyZWN0ZWRHcmFwaCA9IG5ldyBEaXJlY3RlZEdyYXBoKGN5Y2xpY0VkZ2VzLCBkaXJlY3RlZEFjeWNsaWNHcmFwaCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdGVkR3JhcGg7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEaXJlY3RlZEdyYXBoO1xuXG5mdW5jdGlvbiBjaGVja0VkZ2VzSW5jbHVkZXNFZGdlKGVkZ2UsIGVkZ2VzKSB7XG4gIGNvbnN0IGVkZ2UxID0gZWRnZSwgLy8vXG4gICAgICAgIGVkZ2VzSW5jbHVkZXNFZGdlID0gZWRnZXMuc29tZShmdW5jdGlvbihlZGdlKSB7XG4gICAgICAgICAgY29uc3QgZWRnZTIgPSBlZGdlLCAvLy9cbiAgICAgICAgICAgICAgICBtYXRjaGVzID0gZWRnZTEubWF0Y2goZWRnZTIpO1xuXG4gICAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGVkZ2VzSW5jbHVkZXNFZGdlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVFZGdlRnJvbUVkZ2VzKGVkZ2UsIGVkZ2VzKSB7XG4gIGNvbnN0IGVkZ2UxID0gZWRnZTsgLy8vXG5cbiAgcmVtb3ZlKGVkZ2VzLCBmdW5jdGlvbihlZGdlKSB7XG4gICAgY29uc3QgZWRnZTIgPSBlZGdlLCAvLy9cbiAgICAgICAgICBtYXRjaGVzID0gZWRnZTEubWF0Y2goZWRnZTIpO1xuXG4gICAgaWYgKCFtYXRjaGVzKSB7IC8vL1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbn1cbiJdfQ==