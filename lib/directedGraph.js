'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var kahn = require('occam-kahn'),
    necessary = require('necessary'),
    pearcekelly = require('occam-pearce-kelly');

var Edge = require('./edge'),
    Cycle = require('./cycle'),
    PartialCycle = require('./partialCycle'),
    vertexUtilities = require('./utilities/vertex');

var Graph = kahn.Graph,
    arrayUtilities = necessary.arrayUtilities,
    DirectedAcyclicGraph = pearcekelly.DirectedAcyclicGraph,
    forwardsDepthFirstSearch = vertexUtilities.forwardsDepthFirstSearch,
    first = arrayUtilities.first,
    second = arrayUtilities.second,
    filter = arrayUtilities.filter,
    prune = arrayUtilities.prune;


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

function vertexNamesFromVertexLiterals(vertexLiterals) {
  var vertexNameMap = {};

  vertexLiterals.forEach(function (vertexLiteral) {
    var firstVertexLiteralElement = first(vertexLiteral),
        vertexName = firstVertexLiteralElement,
        ///
    vertexExists = vertexNameMap.hasOwnProperty(vertexName);

    if (!vertexExists) {
      vertexNameMap[vertexName] = vertexName;
    }

    var secondVertexLiteralElement = second(vertexLiteral),
        ancestorVertexNames = secondVertexLiteralElement; ///

    ancestorVertexNames.forEach(function (ancestorVertexName) {
      var ancestorVertexExists = vertexNameMap.hasOwnProperty(ancestorVertexName);

      if (!ancestorVertexExists) {
        vertexNameMap[ancestorVertexName] = ancestorVertexName;
      }
    });
  });

  var vertexNameMapKeys = Object.keys(vertexNameMap),
      vertexNames = vertexNameMapKeys; ///

  return vertexNames;
}

function edgesFromVertexLiterals(vertexLiterals) {
  var edges = [];

  vertexLiterals.forEach(function (vertexLiteral) {
    var firstVertexLiteralElement = first(vertexLiteral),
        secondVertexLiteralElement = second(vertexLiteral),
        ancestorVertexNames = secondVertexLiteralElement,
        ///
    vertexName = firstVertexLiteralElement; ///

    ancestorVertexNames.forEach(function (ancestorVertexName) {
      var sourceVertexName = ancestorVertexName,
          ///
      targetVertexName = vertexName,
          ///
      edge = new Edge(sourceVertexName, targetVertexName);

      edges.push(edge);
    });
  });

  return edges;
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9kaXJlY3RlZEdyYXBoLmpzIl0sIm5hbWVzIjpbImthaG4iLCJyZXF1aXJlIiwibmVjZXNzYXJ5IiwicGVhcmNla2VsbHkiLCJFZGdlIiwiQ3ljbGUiLCJQYXJ0aWFsQ3ljbGUiLCJ2ZXJ0ZXhVdGlsaXRpZXMiLCJHcmFwaCIsImFycmF5VXRpbGl0aWVzIiwiRGlyZWN0ZWRBY3ljbGljR3JhcGgiLCJmb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2giLCJmaXJzdCIsInNlY29uZCIsImZpbHRlciIsInBydW5lIiwicmVtb3ZlIiwiRGlyZWN0ZWRHcmFwaCIsImN5Y2xpY0VkZ2VzIiwiZGlyZWN0ZWRBY3ljbGljR3JhcGgiLCJ2ZXJ0ZXhOYW1lIiwiY3ljbGVzUHJlc2VudCIsInZlcnRleFByZXNlbnQiLCJpc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUiLCJmaXJzdEN5Y2xlIiwiZ2V0Rmlyc3RDeWNsZUJ5VmVydGV4TmFtZSIsInZlcnRleCIsImdldFZlcnRleEJ5VmVydGV4TmFtZSIsInNsaWNlIiwicGFydGlhbEN5Y2xlcyIsImN5Y2xlcyIsInZpc2l0ZWRWZXJ0ZXgiLCJnZXRQcmVkZWNlc3NvclZlcnRpY2VzIiwidmlzaXRlZFZlcnRleE5hbWUiLCJnZXROYW1lIiwic291cmNlVmVydGV4TmFtZSIsImN5Y2xpY0VkZ2UiLCJtYXRjaGVzIiwibWF0Y2hTb3VyY2VWZXJ0ZXhOYW1lIiwicHJlZGVjZXNzb3JWZXJ0aWNlcyIsInBhcnRpYWxDeWNsZSIsImZyb21DeWNsaWNFZGdlQW5kUHJlZGVjZXNzb3JWZXJ0aWNlcyIsInB1c2giLCJjeWNsaWNFZGdlc0xlbmd0aCIsImxlbmd0aCIsInRlcm1pbmF0ZSIsInNvbWUiLCJ0YXJnZXRWZXJ0ZXhOYW1lIiwiZ2V0VGFyZ2V0VmVydGV4TmFtZSIsInRhcmdldFZlcnRleCIsInN1Y2Nlc3NvclZlcnRpY2VzIiwiY3ljbGUiLCJmcm9tVmVydGV4TmFtZVBhcnRpYWxDeWNsZUFuZFN1Y2Nlc3NvclZlcnRpY2VzIiwiY3ljbGVzTGVuZ3RoIiwiYWRkVmVydGV4QnlWZXJ0ZXhOYW1lIiwicmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lIiwiZmlsdGVyQ3ljbGljRWRnZXMiLCJlZGdlIiwic3VjY2VzcyIsImFkZEVkZ2UiLCJjeWNsaWNFZGdlc0luY2x1ZGVzRWRnZSIsImNoZWNrRWRnZXNJbmNsdWRlc0VkZ2UiLCJlZGdlcyIsImZvckVhY2giLCJyZW1vdmVTdHJhbmRlZFZlcnRpY2VzIiwiZWRnZUN5Y2xpYyIsImVkZ2VQcmVzZW50IiwiaXNFZGdlUHJlc2VudCIsInJlbW92ZUVkZ2VGcm9tRWRnZXMiLCJyZW1vdmVFZGdlIiwiZ2V0U291cmNlVmVydGV4TmFtZSIsInNvdXJjZVZlcnRleCIsInNvdXJjZVZlcnRleFN0cmFuZGVkIiwiaXNTdHJhbmRlZCIsInRhcmdldFZlcnRleFN0cmFuZGVkIiwiZnJvbVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lIiwiZnJvbU5vdGhpbmciLCJkaXJlY3RlZEdyYXBoIiwidmVydGV4TGl0ZXJhbHMiLCJ2ZXJ0ZXhOYW1lcyIsInZlcnRleE5hbWVzRnJvbVZlcnRleExpdGVyYWxzIiwiZWRnZXNGcm9tVmVydGV4TGl0ZXJhbHMiLCJmcm9tVmVydGV4TmFtZXNBbmRFZGdlcyIsImdyYXBoIiwiYXJlQ3ljbGVzUHJlc2VudCIsImZyb21WZXJ0ZXhOYW1lcyIsInRvcG9sb2dpY2FsbHlPcmRlcmVkVmVydGljZXMiLCJnZXRUb3BvbG9naWNhbGx5T3JkZXJlZFZlcnRpY2VzIiwiZnJvbVRvcG9sb2dpY2FsbHlPcmRlcmVkVmVydGljZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwidmVydGV4TmFtZU1hcCIsInZlcnRleExpdGVyYWwiLCJmaXJzdFZlcnRleExpdGVyYWxFbGVtZW50IiwidmVydGV4RXhpc3RzIiwiaGFzT3duUHJvcGVydHkiLCJzZWNvbmRWZXJ0ZXhMaXRlcmFsRWxlbWVudCIsImFuY2VzdG9yVmVydGV4TmFtZXMiLCJhbmNlc3RvclZlcnRleE5hbWUiLCJhbmNlc3RvclZlcnRleEV4aXN0cyIsInZlcnRleE5hbWVNYXBLZXlzIiwiT2JqZWN0Iiwia2V5cyIsImVkZ2UxIiwiZWRnZXNJbmNsdWRlc0VkZ2UiLCJlZGdlMiIsIm1hdGNoIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxZQUFSLENBQWI7QUFBQSxJQUNNQyxZQUFZRCxRQUFRLFdBQVIsQ0FEbEI7QUFBQSxJQUVNRSxjQUFjRixRQUFRLG9CQUFSLENBRnBCOztBQUlBLElBQU1HLE9BQU9ILFFBQVEsUUFBUixDQUFiO0FBQUEsSUFDTUksUUFBUUosUUFBUSxTQUFSLENBRGQ7QUFBQSxJQUVNSyxlQUFlTCxRQUFRLGdCQUFSLENBRnJCO0FBQUEsSUFHTU0sa0JBQWtCTixRQUFRLG9CQUFSLENBSHhCOztBQUtNLElBQUVPLEtBQUYsR0FBWVIsSUFBWixDQUFFUSxLQUFGO0FBQUEsSUFDRUMsY0FERixHQUNxQlAsU0FEckIsQ0FDRU8sY0FERjtBQUFBLElBRUVDLG9CQUZGLEdBRTJCUCxXQUYzQixDQUVFTyxvQkFGRjtBQUFBLElBR0VDLHdCQUhGLEdBRytCSixlQUgvQixDQUdFSSx3QkFIRjtBQUFBLElBSUVDLEtBSkYsR0FJbUNILGNBSm5DLENBSUVHLEtBSkY7QUFBQSxJQUlTQyxNQUpULEdBSW1DSixjQUpuQyxDQUlTSSxNQUpUO0FBQUEsSUFJaUJDLE1BSmpCLEdBSW1DTCxjQUpuQyxDQUlpQkssTUFKakI7QUFBQSxJQUl5QkMsS0FKekIsR0FJbUNOLGNBSm5DLENBSXlCTSxLQUp6Qjs7O0FBTU4sSUFBTUMsU0FBU0QsS0FBZixDLENBQXVCOztJQUVqQkUsYTtBQUNKLHlCQUFZQyxXQUFaLEVBQXlCQyxvQkFBekIsRUFBK0M7QUFBQTs7QUFDN0MsU0FBS0QsV0FBTCxHQUFtQkEsV0FBbkI7QUFDQSxTQUFLQyxvQkFBTCxHQUE0QkEsb0JBQTVCO0FBQ0Q7Ozs7aURBRTRCQyxVLEVBQVk7QUFDdkMsVUFBSUMsZ0JBQWdCLEtBQXBCOztBQUVBLFVBQU1DLGdC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QUFuQyxFQUEwQztBQUN4QyxNQUFNeUMsUUFBUTlDLElBQWQsQ0FEd0MsQ0FDcEI7O0FBRXBCekMsU0FBTzhDLEtBQVAsRUFBYyxVQUFTTCxJQUFULEVBQWU7QUFDM0IsUUFBTWdELFFBQVFoRCxJQUFkO0FBQUEsUUFBb0I7QUFDZHBCLGNBQVVrRSxNQUFNRyxLQUFOLENBQVlELEtBQVosQ0FEaEI7O0FBR0EsUUFBSSxDQUFDcEUsT0FBTCxFQUFjO0FBQUU7QUFDZCxhQUFPLElBQVA7QUFDRDtBQUNGLEdBUEQ7QUFRRCIsImZpbGUiOiJkaXJlY3RlZEdyYXBoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBrYWhuID0gcmVxdWlyZSgnb2NjYW0ta2FobicpLFxuICAgICAgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5JyksXG4gICAgICBwZWFyY2VrZWxseSA9IHJlcXVpcmUoJ29jY2FtLXBlYXJjZS1rZWxseScpO1xuXG5jb25zdCBFZGdlID0gcmVxdWlyZSgnLi9lZGdlJyksXG4gICAgICBDeWNsZSA9IHJlcXVpcmUoJy4vY3ljbGUnKSxcbiAgICAgIFBhcnRpYWxDeWNsZSA9IHJlcXVpcmUoJy4vcGFydGlhbEN5Y2xlJyksXG4gICAgICB2ZXJ0ZXhVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy92ZXJ0ZXgnKTtcblxuY29uc3QgeyBHcmFwaCB9ID0ga2FobixcbiAgICAgIHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgRGlyZWN0ZWRBY3ljbGljR3JhcGggfSA9IHBlYXJjZWtlbGx5LFxuICAgICAgeyBmb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2ggfSA9IHZlcnRleFV0aWxpdGllcyxcbiAgICAgIHsgZmlyc3QsIHNlY29uZCwgZmlsdGVyLCBwcnVuZSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNvbnN0IHJlbW92ZSA9IHBydW5lOyAgLy8vXG5cbmNsYXNzIERpcmVjdGVkR3JhcGgge1xuICBjb25zdHJ1Y3RvcihjeWNsaWNFZGdlcywgZGlyZWN0ZWRBY3ljbGljR3JhcGgpIHtcbiAgICB0aGlzLmN5Y2xpY0VkZ2VzID0gY3ljbGljRWRnZXM7XG4gICAgdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaCA9IGRpcmVjdGVkQWN5Y2xpY0dyYXBoO1xuICB9XG4gIFxuICBhcmVDeWNsZXNQcmVzZW50QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBsZXQgY3ljbGVzUHJlc2VudCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdmVydGV4UHJlc2VudCA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgaWYgKHZlcnRleFByZXNlbnQpIHtcbiAgICAgIGNvbnN0IGZpcnN0Q3ljbGUgPSB0aGlzLmdldEZpcnN0Q3ljbGVCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICAgIGN5Y2xlc1ByZXNlbnQgPSAoZmlyc3RDeWNsZSAhPT0gbnVsbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGN5Y2xlc1ByZXNlbnQ7XG4gIH1cblxuICBnZXRGaXJzdEN5Y2xlQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBsZXQgZmlyc3RDeWNsZSA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgdmVydGV4ID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSksXG4gICAgICAgICAgY3ljbGljRWRnZXMgPSB0aGlzLmN5Y2xpY0VkZ2VzLnNsaWNlKCksIC8vL1xuICAgICAgICAgIHBhcnRpYWxDeWNsZXMgPSBbXSxcbiAgICAgICAgICBjeWNsZXMgPSBbXTtcblxuICAgIGZvcndhcmRzRGVwdGhGaXJzdFNlYXJjaCh2ZXJ0ZXgsIGZ1bmN0aW9uKHZpc2l0ZWRWZXJ0ZXgsIGdldFByZWRlY2Vzc29yVmVydGljZXMpIHtcbiAgICAgIGNvbnN0IHZpc2l0ZWRWZXJ0ZXhOYW1lID0gdmlzaXRlZFZlcnRleC5nZXROYW1lKCksXG4gICAgICAgICAgICBzb3VyY2VWZXJ0ZXhOYW1lID0gdmlzaXRlZFZlcnRleE5hbWU7IC8vL1xuXG4gICAgICBmaWx0ZXIoY3ljbGljRWRnZXMsIGZ1bmN0aW9uKGN5Y2xpY0VkZ2UpIHtcbiAgICAgICAgY29uc3QgbWF0Y2hlcyA9IGN5Y2xpY0VkZ2UubWF0Y2hTb3VyY2VWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpO1xuXG4gICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgY29uc3QgcHJlZGVjZXNzb3JWZXJ0aWNlcyA9IGdldFByZWRlY2Vzc29yVmVydGljZXMoKSxcbiAgICAgICAgICAgICAgICBwYXJ0aWFsQ3ljbGUgPSAgUGFydGlhbEN5Y2xlLmZyb21DeWNsaWNFZGdlQW5kUHJlZGVjZXNzb3JWZXJ0aWNlcyhjeWNsaWNFZGdlLCBwcmVkZWNlc3NvclZlcnRpY2VzKTtcbiAgICAgICAgICBcbiAgICAgICAgICBwYXJ0aWFsQ3ljbGVzLnB1c2gocGFydGlhbEN5Y2xlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGN5Y2xpY0VkZ2VzTGVuZ3RoID0gY3ljbGljRWRnZXMubGVuZ3RoLFxuICAgICAgICAgICAgdGVybWluYXRlID0gKGN5Y2xpY0VkZ2VzTGVuZ3RoID09PSAwKTtcblxuICAgICAgcmV0dXJuIHRlcm1pbmF0ZTtcbiAgICB9KTtcblxuICAgIHBhcnRpYWxDeWNsZXMuc29tZSgocGFydGlhbEN5Y2xlKSA9PiB7XG4gICAgICBjb25zdCB0YXJnZXRWZXJ0ZXhOYW1lID0gcGFydGlhbEN5Y2xlLmdldFRhcmdldFZlcnRleE5hbWUoKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgICBmb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2godGFyZ2V0VmVydGV4LCBmdW5jdGlvbih2aXNpdGVkVmVydGV4LCBnZXRQcmVkZWNlc3NvclZlcnRpY2VzKSB7XG4gICAgICAgIGNvbnN0IHZpc2l0ZWRWZXJ0ZXhOYW1lID0gdmlzaXRlZFZlcnRleC5nZXROYW1lKCk7XG5cbiAgICAgICAgaWYgKHZpc2l0ZWRWZXJ0ZXhOYW1lID09PSB2ZXJ0ZXhOYW1lKSB7XG4gICAgICAgICAgY29uc3QgcHJlZGVjZXNzb3JWZXJ0aWNlcyA9IGdldFByZWRlY2Vzc29yVmVydGljZXMoKSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzb3JWZXJ0aWNlcyA9IHByZWRlY2Vzc29yVmVydGljZXMsICAvLy9cbiAgICAgICAgICAgICAgICBjeWNsZSA9IEN5Y2xlLmZyb21WZXJ0ZXhOYW1lUGFydGlhbEN5Y2xlQW5kU3VjY2Vzc29yVmVydGljZXModmVydGV4TmFtZSwgcGFydGlhbEN5Y2xlLCBzdWNjZXNzb3JWZXJ0aWNlcyk7XG5cbiAgICAgICAgICBjeWNsZXMucHVzaChjeWNsZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjeWNsZXNMZW5ndGggPSBjeWNsZXMubGVuZ3RoLFxuICAgICAgICAgICAgICB0ZXJtaW5hdGUgPSAoY3ljbGVzTGVuZ3RoID4gMCk7XG5cbiAgICAgICAgcmV0dXJuIHRlcm1pbmF0ZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY3ljbGVzTGVuZ3RoID0gY3ljbGVzLmxlbmd0aDtcbiAgICBcbiAgICBpZiAoY3ljbGVzTGVuZ3RoID4gMCkge1xuICAgICAgZmlyc3RDeWNsZSA9IGZpcnN0KGN5Y2xlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpcnN0Q3ljbGU7XG4gIH1cblxuICBhZGRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSkgeyB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmFkZFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTsgfVxuXG4gIHJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5yZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICB0aGlzLmZpbHRlckN5Y2xpY0VkZ2VzKCk7XG4gIH1cblxuICBhZGRFZGdlKGVkZ2UpIHtcbiAgICBjb25zdCBzdWNjZXNzID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5hZGRFZGdlKGVkZ2UpO1xuICAgIFxuICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgY29uc3QgY3ljbGljRWRnZXNJbmNsdWRlc0VkZ2UgPSBjaGVja0VkZ2VzSW5jbHVkZXNFZGdlKGVkZ2UsIHRoaXMuY3ljbGljRWRnZXMpO1xuXG4gICAgICBpZiAoIWN5Y2xpY0VkZ2VzSW5jbHVkZXNFZGdlKSB7XG4gICAgICAgIGNvbnN0IGN5Y2xpY0VkZ2UgPSBlZGdlOyAgLy8vXG5cbiAgICAgICAgdGhpcy5jeWNsaWNFZGdlcy5wdXNoKGN5Y2xpY0VkZ2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgYWRkRWRnZXMoZWRnZXMpIHtcbiAgICBlZGdlcy5mb3JFYWNoKChlZGdlKSA9PiB7XG4gICAgICB0aGlzLmFkZEVkZ2UoZWRnZSk7XG4gICAgfSk7XG4gIH1cblxuICByZW1vdmVFZGdlKGVkZ2UsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMgPSBmYWxzZSkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VzSW5jbHVkZXNFZGdlID0gY2hlY2tFZGdlc0luY2x1ZGVzRWRnZShlZGdlLCB0aGlzLmN5Y2xpY0VkZ2VzKSxcbiAgICAgICAgICBlZGdlQ3ljbGljID0gY3ljbGljRWRnZXNJbmNsdWRlc0VkZ2UsIC8vL1xuICAgICAgICAgIGVkZ2VQcmVzZW50ID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5pc0VkZ2VQcmVzZW50KGVkZ2UpO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKGVkZ2VDeWNsaWMpIHtcbiAgICAgIGNvbnN0IGN5Y2xpY0VkZ2UgPSBlZGdlOyAgLy8vXG5cbiAgICAgIHJlbW92ZUVkZ2VGcm9tRWRnZXMoY3ljbGljRWRnZSwgdGhpcy5jeWNsaWNFZGdlcyk7XG4gICAgfSBlbHNlIGlmIChlZGdlUHJlc2VudCkge1xuICAgICAgdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5yZW1vdmVFZGdlKGVkZ2UpO1xuXG4gICAgICBpZiAocmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcykge1xuICAgICAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gZWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICAgIHRhcmdldFZlcnRleE5hbWUgPSBlZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKSxcbiAgICAgICAgICAgICAgc291cmNlVmVydGV4ID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSksXG4gICAgICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpLFxuICAgICAgICAgICAgICBzb3VyY2VWZXJ0ZXhTdHJhbmRlZCA9IHNvdXJjZVZlcnRleC5pc1N0cmFuZGVkKCksXG4gICAgICAgICAgICAgIHRhcmdldFZlcnRleFN0cmFuZGVkID0gdGFyZ2V0VmVydGV4LmlzU3RyYW5kZWQoKTtcblxuICAgICAgICBpZiAoc291cmNlVmVydGV4U3RyYW5kZWQpIHtcbiAgICAgICAgICB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLnJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0YXJnZXRWZXJ0ZXhTdHJhbmRlZCkge1xuICAgICAgICAgIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGgucmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5maWx0ZXJDeWNsaWNFZGdlcygpO1xuICB9XG5cbiAgcmVtb3ZlRWRnZXMoZWRnZXMsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMgPSBmYWxzZSkge1xuICAgIGVkZ2VzLmZvckVhY2goKGVkZ2UpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlRWRnZShlZGdlLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZEVkZ2VCeVZlcnRleE5hbWVzKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpIHtcbiAgICBjb25zdCBlZGdlID0gRWRnZS5mcm9tU291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICB0aGlzLmFkZEVkZ2UoZWRnZSk7XG4gIH1cblxuICByZW1vdmVFZGdlQnlWZXJ0ZXhOYW1lcyhzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzID0gZmFsc2UpIHtcbiAgICBjb25zdCBlZGdlID0gRWRnZS5mcm9tU291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICB0aGlzLnJlbW92ZUVkZ2UoZWRnZSwgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyk7XG4gIH1cblxuICByZW1vdmVBbGxFZGdlc0FuZFZlcnRpY2VzKCkge1xuICAgIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGggPSBEaXJlY3RlZEFjeWNsaWNHcmFwaC5mcm9tTm90aGluZygpO1xuXG4gICAgdGhpcy5jeWNsaWNFZGdlcyA9IFtdO1xuICB9XG5cbiAgZmlsdGVyQ3ljbGljRWRnZXMoKSB7XG4gICAgZmlsdGVyKHRoaXMuY3ljbGljRWRnZXMsIChjeWNsaWNFZGdlKSA9PiB7XG4gICAgICBjb25zdCBlZGdlID0gY3ljbGljRWRnZSwgIC8vL1xuICAgICAgICAgICAgc3VjY2VzcyA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguYWRkRWRnZShlZGdlKTtcblxuICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VzID0gW10sXG4gICAgICAgICAgZGlyZWN0ZWRBY3ljbGljR3JhcGggPSBEaXJlY3RlZEFjeWNsaWNHcmFwaC5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGRpcmVjdGVkR3JhcGggPSBuZXcgRGlyZWN0ZWRHcmFwaChjeWNsaWNFZGdlcywgZGlyZWN0ZWRBY3ljbGljR3JhcGgpO1xuICAgIFxuICAgIHJldHVybiBkaXJlY3RlZEdyYXBoOyAgICBcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmVydGV4TGl0ZXJhbHModmVydGV4TGl0ZXJhbHMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhOYW1lcyA9IHZlcnRleE5hbWVzRnJvbVZlcnRleExpdGVyYWxzKHZlcnRleExpdGVyYWxzKSxcbiAgICAgICAgICBlZGdlcyA9IGVkZ2VzRnJvbVZlcnRleExpdGVyYWxzKHZlcnRleExpdGVyYWxzKSxcbiAgICAgICAgICBkaXJlY3RlZEdyYXBoID0gRGlyZWN0ZWRHcmFwaC5mcm9tVmVydGV4TmFtZXNBbmRFZGdlcyh2ZXJ0ZXhOYW1lcywgZWRnZXMpO1xuXG4gICAgcmV0dXJuIGRpcmVjdGVkR3JhcGg7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZlcnRleE5hbWVzQW5kRWRnZXModmVydGV4TmFtZXMsIGVkZ2VzKSB7XG4gICAgbGV0IGRpcmVjdGVkR3JhcGg7XG5cbiAgICBjb25zdCBncmFwaCA9IEdyYXBoLmZyb21WZXJ0ZXhOYW1lc0FuZEVkZ2VzKHZlcnRleE5hbWVzLCBlZGdlcyksXG4gICAgICAgICAgY3ljbGVzUHJlc2VudCA9IGdyYXBoLmFyZUN5Y2xlc1ByZXNlbnQoKTtcblxuICAgIGlmIChjeWNsZXNQcmVzZW50KSB7XG4gICAgICBjb25zdCBjeWNsaWNFZGdlcyA9IFtdLFxuICAgICAgICAgICAgZGlyZWN0ZWRBY3ljbGljR3JhcGggPSBEaXJlY3RlZEFjeWNsaWNHcmFwaC5mcm9tVmVydGV4TmFtZXModmVydGV4TmFtZXMpO1xuXG4gICAgICBkaXJlY3RlZEdyYXBoID0gbmV3IERpcmVjdGVkR3JhcGgoY3ljbGljRWRnZXMsIGRpcmVjdGVkQWN5Y2xpY0dyYXBoKTtcblxuICAgICAgZWRnZXMuZm9yRWFjaChmdW5jdGlvbihlZGdlKSB7XG4gICAgICAgIGRpcmVjdGVkR3JhcGguYWRkRWRnZShlZGdlKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0b3BvbG9naWNhbGx5T3JkZXJlZFZlcnRpY2VzID0gZ3JhcGguZ2V0VG9wb2xvZ2ljYWxseU9yZGVyZWRWZXJ0aWNlcygpLFxuICAgICAgICAgICAgY3ljbGljRWRnZXMgPSBbXSxcbiAgICAgICAgICAgIGRpcmVjdGVkQWN5Y2xpY0dyYXBoID0gRGlyZWN0ZWRBY3ljbGljR3JhcGguZnJvbVRvcG9sb2dpY2FsbHlPcmRlcmVkVmVydGljZXModG9wb2xvZ2ljYWxseU9yZGVyZWRWZXJ0aWNlcyk7XG5cbiAgICAgIGRpcmVjdGVkR3JhcGggPSBuZXcgRGlyZWN0ZWRHcmFwaChjeWNsaWNFZGdlcywgZGlyZWN0ZWRBY3ljbGljR3JhcGgpO1xuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3RlZEdyYXBoO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGlyZWN0ZWRHcmFwaDtcblxuZnVuY3Rpb24gdmVydGV4TmFtZXNGcm9tVmVydGV4TGl0ZXJhbHModmVydGV4TGl0ZXJhbHMpIHtcbiAgY29uc3QgdmVydGV4TmFtZU1hcCA9IHt9O1xuXG4gIHZlcnRleExpdGVyYWxzLmZvckVhY2goZnVuY3Rpb24odmVydGV4TGl0ZXJhbCkge1xuICAgIGNvbnN0IGZpcnN0VmVydGV4TGl0ZXJhbEVsZW1lbnQgPSBmaXJzdCh2ZXJ0ZXhMaXRlcmFsKSxcbiAgICAgICAgICB2ZXJ0ZXhOYW1lID0gZmlyc3RWZXJ0ZXhMaXRlcmFsRWxlbWVudCwgLy8vXG4gICAgICAgICAgdmVydGV4RXhpc3RzID0gdmVydGV4TmFtZU1hcC5oYXNPd25Qcm9wZXJ0eSh2ZXJ0ZXhOYW1lKTtcblxuICAgIGlmICghdmVydGV4RXhpc3RzKSB7XG4gICAgICB2ZXJ0ZXhOYW1lTWFwW3ZlcnRleE5hbWVdID0gdmVydGV4TmFtZTtcbiAgICB9XG5cbiAgICBjb25zdCBzZWNvbmRWZXJ0ZXhMaXRlcmFsRWxlbWVudCA9IHNlY29uZCh2ZXJ0ZXhMaXRlcmFsKSxcbiAgICAgICAgICBhbmNlc3RvclZlcnRleE5hbWVzID0gc2Vjb25kVmVydGV4TGl0ZXJhbEVsZW1lbnQ7IC8vL1xuXG4gICAgYW5jZXN0b3JWZXJ0ZXhOYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKGFuY2VzdG9yVmVydGV4TmFtZSkge1xuICAgICAgY29uc3QgYW5jZXN0b3JWZXJ0ZXhFeGlzdHMgPSB2ZXJ0ZXhOYW1lTWFwLmhhc093blByb3BlcnR5KGFuY2VzdG9yVmVydGV4TmFtZSk7XG5cbiAgICAgIGlmICghYW5jZXN0b3JWZXJ0ZXhFeGlzdHMpIHtcbiAgICAgICAgdmVydGV4TmFtZU1hcFthbmNlc3RvclZlcnRleE5hbWVdID0gYW5jZXN0b3JWZXJ0ZXhOYW1lO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICBjb25zdCB2ZXJ0ZXhOYW1lTWFwS2V5cyA9IE9iamVjdC5rZXlzKHZlcnRleE5hbWVNYXApLFxuICAgICAgICB2ZXJ0ZXhOYW1lcyA9IHZlcnRleE5hbWVNYXBLZXlzOyAgLy8vXG5cbiAgcmV0dXJuIHZlcnRleE5hbWVzO1xufVxuXG5mdW5jdGlvbiBlZGdlc0Zyb21WZXJ0ZXhMaXRlcmFscyh2ZXJ0ZXhMaXRlcmFscykge1xuICBjb25zdCBlZGdlcyA9IFtdO1xuXG4gIHZlcnRleExpdGVyYWxzLmZvckVhY2goZnVuY3Rpb24odmVydGV4TGl0ZXJhbCkge1xuICAgIGNvbnN0IGZpcnN0VmVydGV4TGl0ZXJhbEVsZW1lbnQgPSBmaXJzdCh2ZXJ0ZXhMaXRlcmFsKSxcbiAgICAgICAgICBzZWNvbmRWZXJ0ZXhMaXRlcmFsRWxlbWVudCA9IHNlY29uZCh2ZXJ0ZXhMaXRlcmFsKSxcbiAgICAgICAgICBhbmNlc3RvclZlcnRleE5hbWVzID0gc2Vjb25kVmVydGV4TGl0ZXJhbEVsZW1lbnQsIC8vL1xuICAgICAgICAgIHZlcnRleE5hbWUgPSBmaXJzdFZlcnRleExpdGVyYWxFbGVtZW50OyAvLy9cblxuICAgIGFuY2VzdG9yVmVydGV4TmFtZXMuZm9yRWFjaChmdW5jdGlvbihhbmNlc3RvclZlcnRleE5hbWUpIHtcbiAgICAgIGNvbnN0IHNvdXJjZVZlcnRleE5hbWUgPSBhbmNlc3RvclZlcnRleE5hbWUsIC8vL1xuICAgICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IHZlcnRleE5hbWUsICAvLy9cbiAgICAgICAgICAgIGVkZ2UgPSBuZXcgRWRnZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgZWRnZXMucHVzaChlZGdlKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGVkZ2VzO1xufVxuXG5mdW5jdGlvbiBjaGVja0VkZ2VzSW5jbHVkZXNFZGdlKGVkZ2UsIGVkZ2VzKSB7XG4gIGNvbnN0IGVkZ2UxID0gZWRnZSwgLy8vXG4gICAgICAgIGVkZ2VzSW5jbHVkZXNFZGdlID0gZWRnZXMuc29tZShmdW5jdGlvbihlZGdlKSB7XG4gICAgICAgICAgY29uc3QgZWRnZTIgPSBlZGdlLCAvLy9cbiAgICAgICAgICAgICAgICBtYXRjaGVzID0gZWRnZTEubWF0Y2goZWRnZTIpO1xuXG4gICAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGVkZ2VzSW5jbHVkZXNFZGdlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVFZGdlRnJvbUVkZ2VzKGVkZ2UsIGVkZ2VzKSB7XG4gIGNvbnN0IGVkZ2UxID0gZWRnZTsgLy8vXG5cbiAgcmVtb3ZlKGVkZ2VzLCBmdW5jdGlvbihlZGdlKSB7XG4gICAgY29uc3QgZWRnZTIgPSBlZGdlLCAvLy9cbiAgICAgICAgICBtYXRjaGVzID0gZWRnZTEubWF0Y2goZWRnZTIpO1xuXG4gICAgaWYgKCFtYXRjaGVzKSB7IC8vL1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbn1cbiJdfQ==