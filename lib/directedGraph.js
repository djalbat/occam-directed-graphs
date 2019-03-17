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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9kaXJlY3RlZEdyYXBoLmpzIl0sIm5hbWVzIjpbImthaG4iLCJyZXF1aXJlIiwibmVjZXNzYXJ5IiwicGVhcmNla2VsbHkiLCJFZGdlIiwiQ3ljbGUiLCJQYXJ0aWFsQ3ljbGUiLCJ2ZXJ0ZXhVdGlsaXRpZXMiLCJHcmFwaCIsImFycmF5VXRpbGl0aWVzIiwiRGlyZWN0ZWRBY3ljbGljR3JhcGgiLCJmb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2giLCJmaXJzdCIsInNlY29uZCIsImZpbHRlciIsInBydW5lIiwicmVtb3ZlIiwiRGlyZWN0ZWRHcmFwaCIsImN5Y2xpY0VkZ2VzIiwiZGlyZWN0ZWRBY3ljbGljR3JhcGgiLCJ2ZXJ0ZXhOYW1lIiwiY3ljbGVzUHJlc2VudCIsInZlcnRleFByZXNlbnQiLCJpc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUiLCJmaXJzdEN5Y2xlIiwiZ2V0Rmlyc3RDeWNsZUJ5VmVydGV4TmFtZSIsInZlcnRleCIsImdldFZlcnRleEJ5VmVydGV4TmFtZSIsInNsaWNlIiwicGFydGlhbEN5Y2xlcyIsImN5Y2xlcyIsInZpc2l0ZWRWZXJ0ZXgiLCJnZXRQcmVkZWNlc3NvclZlcnRpY2VzIiwidmlzaXRlZFZlcnRleE5hbWUiLCJnZXROYW1lIiwic291cmNlVmVydGV4TmFtZSIsImN5Y2xpY0VkZ2UiLCJtYXRjaGVzIiwibWF0Y2hTb3VyY2VWZXJ0ZXhOYW1lIiwicHJlZGVjZXNzb3JWZXJ0aWNlcyIsInBhcnRpYWxDeWNsZSIsImZyb21DeWNsaWNFZGdlQW5kUHJlZGVjZXNzb3JWZXJ0aWNlcyIsInB1c2giLCJjeWNsaWNFZGdlc0xlbmd0aCIsImxlbmd0aCIsInRlcm1pbmF0ZSIsInNvbWUiLCJ0YXJnZXRWZXJ0ZXhOYW1lIiwiZ2V0VGFyZ2V0VmVydGV4TmFtZSIsInRhcmdldFZlcnRleCIsInN1Y2Nlc3NvclZlcnRpY2VzIiwiY3ljbGUiLCJmcm9tVmVydGV4TmFtZVBhcnRpYWxDeWNsZUFuZFN1Y2Nlc3NvclZlcnRpY2VzIiwiY3ljbGVzTGVuZ3RoIiwiYWRkVmVydGV4QnlWZXJ0ZXhOYW1lIiwicmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lIiwiZmlsdGVyQ3ljbGljRWRnZXMiLCJlZGdlIiwic3VjY2VzcyIsImFkZEVkZ2UiLCJjeWNsaWNFZGdlc0luY2x1ZGVzRWRnZSIsImNoZWNrRWRnZXNJbmNsdWRlc0VkZ2UiLCJlZGdlcyIsImZvckVhY2giLCJyZW1vdmVTdHJhbmRlZFZlcnRpY2VzIiwiZWRnZUN5Y2xpYyIsImVkZ2VQcmVzZW50IiwiaXNFZGdlUHJlc2VudCIsInJlbW92ZUVkZ2VGcm9tRWRnZXMiLCJyZW1vdmVFZGdlIiwiZ2V0U291cmNlVmVydGV4TmFtZSIsInNvdXJjZVZlcnRleCIsInNvdXJjZVZlcnRleFN0cmFuZGVkIiwiaXNTdHJhbmRlZCIsInRhcmdldFZlcnRleFN0cmFuZGVkIiwiZnJvbVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lIiwiZnJvbU5vdGhpbmciLCJkaXJlY3RlZEdyYXBoIiwidmVydGV4TGl0ZXJhbHMiLCJ2ZXJ0ZXhOYW1lcyIsInZlcnRleE5hbWVzRnJvbVZlcnRleExpdGVyYWxzIiwiZWRnZXNGcm9tVmVydGV4TGl0ZXJhbHMiLCJmcm9tVmVydGV4TmFtZXNBbmRFZGdlcyIsImdyYXBoIiwiYXJlQ3ljbGVzUHJlc2VudCIsImZyb21WZXJ0ZXhOYW1lcyIsInRvcG9sb2dpY2FsbHlPcmRlcmVkVmVydGljZXMiLCJnZXRUb3BvbG9naWNhbGx5T3JkZXJlZFZlcnRpY2VzIiwiZnJvbVRvcG9sb2dpY2FsbHlPcmRlcmVkVmVydGljZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwidmVydGV4TmFtZU1hcCIsInZlcnRleExpdGVyYWwiLCJmaXJzdFZlcnRleExpdGVyYWxFbGVtZW50IiwidmVydGV4RXhpc3RzIiwiaGFzT3duUHJvcGVydHkiLCJzZWNvbmRWZXJ0ZXhMaXRlcmFsRWxlbWVudCIsImFuY2VzdG9yVmVydGV4TmFtZXMiLCJhbmNlc3RvclZlcnRleE5hbWUiLCJhbmNlc3RvclZlcnRleEV4aXN0cyIsInZlcnRleE5hbWVNYXBLZXlzIiwiT2JqZWN0Iiwia2V5cyIsImVkZ2UxIiwiZWRnZXNJbmNsdWRlc0VkZ2UiLCJlZGdlMiIsIm1hdGNoIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxZQUFSLENBQWI7QUFBQSxJQUNNQyxZQUFZRCxRQUFRLFdBQVIsQ0FEbEI7QUFBQSxJQUVNRSxjQUFjRixRQUFRLG9CQUFSLENBRnBCOztBQUlBLElBQU1HLE9BQU9ILFFBQVEsUUFBUixDQUFiO0FBQUEsSUFDTUksUUFBUUosUUFBUSxTQUFSLENBRGQ7QUFBQSxJQUVNSyxlQUFlTCxRQUFRLGdCQUFSLENBRnJCO0FBQUEsSUFHTU0sa0JBQWtCTixRQUFRLG9CQUFSLENBSHhCOztBQUtNLElBQUVPLEtBQUYsR0FBWVIsSUFBWixDQUFFUSxLQUFGO0FBQUEsSUFDRUMsY0FERixHQUNxQlAsU0FEckIsQ0FDRU8sY0FERjtBQUFBLElBRUVDLG9CQUZGLEdBRTJCUCxXQUYzQixDQUVFTyxvQkFGRjtBQUFBLElBR0VDLHdCQUhGLEdBRytCSixlQUgvQixDQUdFSSx3QkFIRjtBQUFBLElBSUVDLEtBSkYsR0FJbUNILGNBSm5DLENBSUVHLEtBSkY7QUFBQSxJQUlTQyxNQUpULEdBSW1DSixjQUpuQyxDQUlTSSxNQUpUO0FBQUEsSUFJaUJDLE1BSmpCLEdBSW1DTCxjQUpuQyxDQUlpQkssTUFKakI7QUFBQSxJQUl5QkMsS0FKekIsR0FJbUNOLGNBSm5DLENBSXlCTSxLQUp6Qjs7O0FBTU4sSUFBTUMsU0FBU0QsS0FBZixDLENBQXVCOztJQUVqQkUsYTtBQUNKLHlCQUFZQyxXQUFaLEVBQXlCQyxvQkFBekIsRUFBK0M7QUFBQTs7QUFDN0MsU0FBS0QsV0FBTCxHQUFtQkEsV0FBbkI7QUFDQSxTQUFLQyxvQkFBTCxHQUE0QkEsb0JBQTVCO0FBQ0Q7Ozs7aURBRTRCQyxVLEVBQVk7QUFDdkMsVUFBSUMsZ0JBQWdCLEtBQXBCOztBQUVBLFVBQU1DLGdC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bkMsRUFBMEM7QUFDeEMsTUFBTXlDLFFBQVE5QyxJQUFkLENBRHdDLENBQ3BCOztBQUVwQnpDLFNBQU84QyxLQUFQLEVBQWMsVUFBU0wsSUFBVCxFQUFlO0FBQzNCLFFBQU1nRCxRQUFRaEQsSUFBZDtBQUFBLFFBQW9CO0FBQ2RwQixjQUFVa0UsTUFBTUcsS0FBTixDQUFZRCxLQUFaLENBRGhCOztBQUdBLFFBQUksQ0FBQ3BFLE9BQUwsRUFBYztBQUFFO0FBQ2QsYUFBTyxJQUFQO0FBQ0Q7QUFDRixHQVBEO0FBUUQiLCJmaWxlIjoiZGlyZWN0ZWRHcmFwaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3Qga2FobiA9IHJlcXVpcmUoJ29jY2FtLWthaG4nKSxcbiAgICAgIG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpLFxuICAgICAgcGVhcmNla2VsbHkgPSByZXF1aXJlKCdvY2NhbS1wZWFyY2Uta2VsbHknKTtcblxuY29uc3QgRWRnZSA9IHJlcXVpcmUoJy4vZWRnZScpLFxuICAgICAgQ3ljbGUgPSByZXF1aXJlKCcuL2N5Y2xlJyksXG4gICAgICBQYXJ0aWFsQ3ljbGUgPSByZXF1aXJlKCcuL3BhcnRpYWxDeWNsZScpLFxuICAgICAgdmVydGV4VXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvdmVydGV4Jyk7XG5cbmNvbnN0IHsgR3JhcGggfSA9IGthaG4sXG4gICAgICB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IERpcmVjdGVkQWN5Y2xpY0dyYXBoIH0gPSBwZWFyY2VrZWxseSxcbiAgICAgIHsgZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoIH0gPSB2ZXJ0ZXhVdGlsaXRpZXMsXG4gICAgICB7IGZpcnN0LCBzZWNvbmQsIGZpbHRlciwgcHJ1bmUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jb25zdCByZW1vdmUgPSBwcnVuZTsgIC8vL1xuXG5jbGFzcyBEaXJlY3RlZEdyYXBoIHtcbiAgY29uc3RydWN0b3IoY3ljbGljRWRnZXMsIGRpcmVjdGVkQWN5Y2xpY0dyYXBoKSB7XG4gICAgdGhpcy5jeWNsaWNFZGdlcyA9IGN5Y2xpY0VkZ2VzO1xuICAgIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGggPSBkaXJlY3RlZEFjeWNsaWNHcmFwaDtcbiAgfVxuICBcbiAgYXJlQ3ljbGVzUHJlc2VudEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgbGV0IGN5Y2xlc1ByZXNlbnQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZlcnRleFByZXNlbnQgPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgIGlmICh2ZXJ0ZXhQcmVzZW50KSB7XG4gICAgICBjb25zdCBmaXJzdEN5Y2xlID0gdGhpcy5nZXRGaXJzdEN5Y2xlQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgICBjeWNsZXNQcmVzZW50ID0gKGZpcnN0Q3ljbGUgIT09IG51bGwpO1xuICAgIH1cblxuICAgIHJldHVybiBjeWNsZXNQcmVzZW50O1xuICB9XG5cbiAgZ2V0Rmlyc3RDeWNsZUJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgbGV0IGZpcnN0Q3ljbGUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IHZlcnRleCA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpLFxuICAgICAgICAgIGN5Y2xpY0VkZ2VzID0gdGhpcy5jeWNsaWNFZGdlcy5zbGljZSgpLCAvLy9cbiAgICAgICAgICBwYXJ0aWFsQ3ljbGVzID0gW10sXG4gICAgICAgICAgY3ljbGVzID0gW107XG5cbiAgICBmb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2godmVydGV4LCBmdW5jdGlvbih2aXNpdGVkVmVydGV4LCBnZXRQcmVkZWNlc3NvclZlcnRpY2VzKSB7XG4gICAgICBjb25zdCB2aXNpdGVkVmVydGV4TmFtZSA9IHZpc2l0ZWRWZXJ0ZXguZ2V0TmFtZSgpLFxuICAgICAgICAgICAgc291cmNlVmVydGV4TmFtZSA9IHZpc2l0ZWRWZXJ0ZXhOYW1lOyAvLy9cblxuICAgICAgZmlsdGVyKGN5Y2xpY0VkZ2VzLCBmdW5jdGlvbihjeWNsaWNFZGdlKSB7XG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSBjeWNsaWNFZGdlLm1hdGNoU291cmNlVmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKTtcblxuICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgIGNvbnN0IHByZWRlY2Vzc29yVmVydGljZXMgPSBnZXRQcmVkZWNlc3NvclZlcnRpY2VzKCksXG4gICAgICAgICAgICAgICAgcGFydGlhbEN5Y2xlID0gIFBhcnRpYWxDeWNsZS5mcm9tQ3ljbGljRWRnZUFuZFByZWRlY2Vzc29yVmVydGljZXMoY3ljbGljRWRnZSwgcHJlZGVjZXNzb3JWZXJ0aWNlcyk7XG4gICAgICAgICAgXG4gICAgICAgICAgcGFydGlhbEN5Y2xlcy5wdXNoKHBhcnRpYWxDeWNsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBjeWNsaWNFZGdlc0xlbmd0aCA9IGN5Y2xpY0VkZ2VzLmxlbmd0aCxcbiAgICAgICAgICAgIHRlcm1pbmF0ZSA9IChjeWNsaWNFZGdlc0xlbmd0aCA9PT0gMCk7XG5cbiAgICAgIHJldHVybiB0ZXJtaW5hdGU7XG4gICAgfSk7XG5cbiAgICBwYXJ0aWFsQ3ljbGVzLnNvbWUoKHBhcnRpYWxDeWNsZSkgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0VmVydGV4TmFtZSA9IHBhcnRpYWxDeWNsZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXggPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldFZlcnRleEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoKHRhcmdldFZlcnRleCwgZnVuY3Rpb24odmlzaXRlZFZlcnRleCwgZ2V0UHJlZGVjZXNzb3JWZXJ0aWNlcykge1xuICAgICAgICBjb25zdCB2aXNpdGVkVmVydGV4TmFtZSA9IHZpc2l0ZWRWZXJ0ZXguZ2V0TmFtZSgpO1xuXG4gICAgICAgIGlmICh2aXNpdGVkVmVydGV4TmFtZSA9PT0gdmVydGV4TmFtZSkge1xuICAgICAgICAgIGNvbnN0IHByZWRlY2Vzc29yVmVydGljZXMgPSBnZXRQcmVkZWNlc3NvclZlcnRpY2VzKCksXG4gICAgICAgICAgICAgICAgc3VjY2Vzc29yVmVydGljZXMgPSBwcmVkZWNlc3NvclZlcnRpY2VzLCAgLy8vXG4gICAgICAgICAgICAgICAgY3ljbGUgPSBDeWNsZS5mcm9tVmVydGV4TmFtZVBhcnRpYWxDeWNsZUFuZFN1Y2Nlc3NvclZlcnRpY2VzKHZlcnRleE5hbWUsIHBhcnRpYWxDeWNsZSwgc3VjY2Vzc29yVmVydGljZXMpO1xuXG4gICAgICAgICAgY3ljbGVzLnB1c2goY3ljbGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY3ljbGVzTGVuZ3RoID0gY3ljbGVzLmxlbmd0aCxcbiAgICAgICAgICAgICAgdGVybWluYXRlID0gKGN5Y2xlc0xlbmd0aCA+IDApO1xuXG4gICAgICAgIHJldHVybiB0ZXJtaW5hdGU7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGN5Y2xlc0xlbmd0aCA9IGN5Y2xlcy5sZW5ndGg7XG4gICAgXG4gICAgaWYgKGN5Y2xlc0xlbmd0aCA+IDApIHtcbiAgICAgIGZpcnN0Q3ljbGUgPSBmaXJzdChjeWNsZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBmaXJzdEN5Y2xlO1xuICB9XG5cbiAgYWRkVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHsgdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5hZGRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7IH1cblxuICByZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGgucmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgdGhpcy5maWx0ZXJDeWNsaWNFZGdlcygpO1xuICB9XG5cbiAgYWRkRWRnZShlZGdlKSB7XG4gICAgY29uc3Qgc3VjY2VzcyA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguYWRkRWRnZShlZGdlKTtcbiAgICBcbiAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgIGNvbnN0IGN5Y2xpY0VkZ2VzSW5jbHVkZXNFZGdlID0gY2hlY2tFZGdlc0luY2x1ZGVzRWRnZShlZGdlLCB0aGlzLmN5Y2xpY0VkZ2VzKTtcblxuICAgICAgaWYgKCFjeWNsaWNFZGdlc0luY2x1ZGVzRWRnZSkge1xuICAgICAgICBjb25zdCBjeWNsaWNFZGdlID0gZWRnZTsgIC8vL1xuXG4gICAgICAgIHRoaXMuY3ljbGljRWRnZXMucHVzaChjeWNsaWNFZGdlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIGFkZEVkZ2VzKGVkZ2VzKSB7XG4gICAgZWRnZXMuZm9yRWFjaCgoZWRnZSkgPT4ge1xuICAgICAgdGhpcy5hZGRFZGdlKGVkZ2UpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlRWRnZShlZGdlLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzID0gZmFsc2UpIHtcbiAgICBjb25zdCBjeWNsaWNFZGdlc0luY2x1ZGVzRWRnZSA9IGNoZWNrRWRnZXNJbmNsdWRlc0VkZ2UoZWRnZSwgdGhpcy5jeWNsaWNFZGdlcyksXG4gICAgICAgICAgZWRnZUN5Y2xpYyA9IGN5Y2xpY0VkZ2VzSW5jbHVkZXNFZGdlLCAvLy9cbiAgICAgICAgICBlZGdlUHJlc2VudCA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguaXNFZGdlUHJlc2VudChlZGdlKTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmIChlZGdlQ3ljbGljKSB7XG4gICAgICBjb25zdCBjeWNsaWNFZGdlID0gZWRnZTsgIC8vL1xuXG4gICAgICByZW1vdmVFZGdlRnJvbUVkZ2VzKGN5Y2xpY0VkZ2UsIHRoaXMuY3ljbGljRWRnZXMpO1xuICAgIH0gZWxzZSBpZiAoZWRnZVByZXNlbnQpIHtcbiAgICAgIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGgucmVtb3ZlRWRnZShlZGdlKTtcbiAgICB9XG5cbiAgICBpZiAocmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcykge1xuICAgICAgY29uc3Qgc291cmNlVmVydGV4TmFtZSA9IGVkZ2UuZ2V0U291cmNlVmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IGVkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgc291cmNlVmVydGV4ID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSksXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXggPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldFZlcnRleEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICAgIHNvdXJjZVZlcnRleFN0cmFuZGVkID0gc291cmNlVmVydGV4LmlzU3RyYW5kZWQoKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleFN0cmFuZGVkID0gdGFyZ2V0VmVydGV4LmlzU3RyYW5kZWQoKTtcblxuICAgICAgaWYgKHNvdXJjZVZlcnRleFN0cmFuZGVkKSB7XG4gICAgICAgIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGgucmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGFyZ2V0VmVydGV4U3RyYW5kZWQpIHtcbiAgICAgICAgdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5yZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5maWx0ZXJDeWNsaWNFZGdlcygpO1xuICB9XG5cbiAgcmVtb3ZlRWRnZXMoZWRnZXMsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMgPSBmYWxzZSkge1xuICAgIGVkZ2VzLmZvckVhY2goKGVkZ2UpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlRWRnZShlZGdlLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZEVkZ2VCeVZlcnRleE5hbWVzKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpIHtcbiAgICBjb25zdCBlZGdlID0gRWRnZS5mcm9tU291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICB0aGlzLmFkZEVkZ2UoZWRnZSk7XG4gIH1cblxuICByZW1vdmVFZGdlQnlWZXJ0ZXhOYW1lcyhzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzID0gZmFsc2UpIHtcbiAgICBjb25zdCBlZGdlID0gRWRnZS5mcm9tU291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICB0aGlzLnJlbW92ZUVkZ2UoZWRnZSwgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyk7XG4gIH1cblxuICByZW1vdmVBbGxFZGdlc0FuZFZlcnRpY2VzKCkge1xuICAgIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGggPSBEaXJlY3RlZEFjeWNsaWNHcmFwaC5mcm9tTm90aGluZygpO1xuXG4gICAgdGhpcy5jeWNsaWNFZGdlcyA9IFtdO1xuICB9XG5cbiAgZmlsdGVyQ3ljbGljRWRnZXMoKSB7XG4gICAgZmlsdGVyKHRoaXMuY3ljbGljRWRnZXMsIChjeWNsaWNFZGdlKSA9PiB7XG4gICAgICBjb25zdCBlZGdlID0gY3ljbGljRWRnZSwgIC8vL1xuICAgICAgICAgICAgc3VjY2VzcyA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguYWRkRWRnZShlZGdlKTtcblxuICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VzID0gW10sXG4gICAgICAgICAgZGlyZWN0ZWRBY3ljbGljR3JhcGggPSBEaXJlY3RlZEFjeWNsaWNHcmFwaC5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGRpcmVjdGVkR3JhcGggPSBuZXcgRGlyZWN0ZWRHcmFwaChjeWNsaWNFZGdlcywgZGlyZWN0ZWRBY3ljbGljR3JhcGgpO1xuICAgIFxuICAgIHJldHVybiBkaXJlY3RlZEdyYXBoOyAgICBcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmVydGV4TGl0ZXJhbHModmVydGV4TGl0ZXJhbHMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhOYW1lcyA9IHZlcnRleE5hbWVzRnJvbVZlcnRleExpdGVyYWxzKHZlcnRleExpdGVyYWxzKSxcbiAgICAgICAgICBlZGdlcyA9IGVkZ2VzRnJvbVZlcnRleExpdGVyYWxzKHZlcnRleExpdGVyYWxzKSxcbiAgICAgICAgICBkaXJlY3RlZEdyYXBoID0gRGlyZWN0ZWRHcmFwaC5mcm9tVmVydGV4TmFtZXNBbmRFZGdlcyh2ZXJ0ZXhOYW1lcywgZWRnZXMpO1xuXG4gICAgcmV0dXJuIGRpcmVjdGVkR3JhcGg7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZlcnRleE5hbWVzQW5kRWRnZXModmVydGV4TmFtZXMsIGVkZ2VzKSB7XG4gICAgbGV0IGRpcmVjdGVkR3JhcGg7XG5cbiAgICBjb25zdCBncmFwaCA9IEdyYXBoLmZyb21WZXJ0ZXhOYW1lc0FuZEVkZ2VzKHZlcnRleE5hbWVzLCBlZGdlcyksXG4gICAgICAgICAgY3ljbGVzUHJlc2VudCA9IGdyYXBoLmFyZUN5Y2xlc1ByZXNlbnQoKTtcblxuICAgIGlmIChjeWNsZXNQcmVzZW50KSB7XG4gICAgICBjb25zdCBjeWNsaWNFZGdlcyA9IFtdLFxuICAgICAgICAgICAgZGlyZWN0ZWRBY3ljbGljR3JhcGggPSBEaXJlY3RlZEFjeWNsaWNHcmFwaC5mcm9tVmVydGV4TmFtZXModmVydGV4TmFtZXMpO1xuXG4gICAgICBkaXJlY3RlZEdyYXBoID0gbmV3IERpcmVjdGVkR3JhcGgoY3ljbGljRWRnZXMsIGRpcmVjdGVkQWN5Y2xpY0dyYXBoKTtcblxuICAgICAgZWRnZXMuZm9yRWFjaChmdW5jdGlvbihlZGdlKSB7XG4gICAgICAgIGRpcmVjdGVkR3JhcGguYWRkRWRnZShlZGdlKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0b3BvbG9naWNhbGx5T3JkZXJlZFZlcnRpY2VzID0gZ3JhcGguZ2V0VG9wb2xvZ2ljYWxseU9yZGVyZWRWZXJ0aWNlcygpLFxuICAgICAgICAgICAgY3ljbGljRWRnZXMgPSBbXSxcbiAgICAgICAgICAgIGRpcmVjdGVkQWN5Y2xpY0dyYXBoID0gRGlyZWN0ZWRBY3ljbGljR3JhcGguZnJvbVRvcG9sb2dpY2FsbHlPcmRlcmVkVmVydGljZXModG9wb2xvZ2ljYWxseU9yZGVyZWRWZXJ0aWNlcyk7XG5cbiAgICAgIGRpcmVjdGVkR3JhcGggPSBuZXcgRGlyZWN0ZWRHcmFwaChjeWNsaWNFZGdlcywgZGlyZWN0ZWRBY3ljbGljR3JhcGgpO1xuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3RlZEdyYXBoO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGlyZWN0ZWRHcmFwaDtcblxuZnVuY3Rpb24gdmVydGV4TmFtZXNGcm9tVmVydGV4TGl0ZXJhbHModmVydGV4TGl0ZXJhbHMpIHtcbiAgY29uc3QgdmVydGV4TmFtZU1hcCA9IHt9O1xuXG4gIHZlcnRleExpdGVyYWxzLmZvckVhY2goZnVuY3Rpb24odmVydGV4TGl0ZXJhbCkge1xuICAgIGNvbnN0IGZpcnN0VmVydGV4TGl0ZXJhbEVsZW1lbnQgPSBmaXJzdCh2ZXJ0ZXhMaXRlcmFsKSxcbiAgICAgICAgICB2ZXJ0ZXhOYW1lID0gZmlyc3RWZXJ0ZXhMaXRlcmFsRWxlbWVudCwgLy8vXG4gICAgICAgICAgdmVydGV4RXhpc3RzID0gdmVydGV4TmFtZU1hcC5oYXNPd25Qcm9wZXJ0eSh2ZXJ0ZXhOYW1lKTtcblxuICAgIGlmICghdmVydGV4RXhpc3RzKSB7XG4gICAgICB2ZXJ0ZXhOYW1lTWFwW3ZlcnRleE5hbWVdID0gdmVydGV4TmFtZTtcbiAgICB9XG5cbiAgICBjb25zdCBzZWNvbmRWZXJ0ZXhMaXRlcmFsRWxlbWVudCA9IHNlY29uZCh2ZXJ0ZXhMaXRlcmFsKSxcbiAgICAgICAgICBhbmNlc3RvclZlcnRleE5hbWVzID0gc2Vjb25kVmVydGV4TGl0ZXJhbEVsZW1lbnQ7IC8vL1xuXG4gICAgYW5jZXN0b3JWZXJ0ZXhOYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKGFuY2VzdG9yVmVydGV4TmFtZSkge1xuICAgICAgY29uc3QgYW5jZXN0b3JWZXJ0ZXhFeGlzdHMgPSB2ZXJ0ZXhOYW1lTWFwLmhhc093blByb3BlcnR5KGFuY2VzdG9yVmVydGV4TmFtZSk7XG5cbiAgICAgIGlmICghYW5jZXN0b3JWZXJ0ZXhFeGlzdHMpIHtcbiAgICAgICAgdmVydGV4TmFtZU1hcFthbmNlc3RvclZlcnRleE5hbWVdID0gYW5jZXN0b3JWZXJ0ZXhOYW1lO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICBjb25zdCB2ZXJ0ZXhOYW1lTWFwS2V5cyA9IE9iamVjdC5rZXlzKHZlcnRleE5hbWVNYXApLFxuICAgICAgICB2ZXJ0ZXhOYW1lcyA9IHZlcnRleE5hbWVNYXBLZXlzOyAgLy8vXG5cbiAgcmV0dXJuIHZlcnRleE5hbWVzO1xufVxuXG5mdW5jdGlvbiBlZGdlc0Zyb21WZXJ0ZXhMaXRlcmFscyh2ZXJ0ZXhMaXRlcmFscykge1xuICBjb25zdCBlZGdlcyA9IFtdO1xuXG4gIHZlcnRleExpdGVyYWxzLmZvckVhY2goZnVuY3Rpb24odmVydGV4TGl0ZXJhbCkge1xuICAgIGNvbnN0IGZpcnN0VmVydGV4TGl0ZXJhbEVsZW1lbnQgPSBmaXJzdCh2ZXJ0ZXhMaXRlcmFsKSxcbiAgICAgICAgICBzZWNvbmRWZXJ0ZXhMaXRlcmFsRWxlbWVudCA9IHNlY29uZCh2ZXJ0ZXhMaXRlcmFsKSxcbiAgICAgICAgICBhbmNlc3RvclZlcnRleE5hbWVzID0gc2Vjb25kVmVydGV4TGl0ZXJhbEVsZW1lbnQsIC8vL1xuICAgICAgICAgIHZlcnRleE5hbWUgPSBmaXJzdFZlcnRleExpdGVyYWxFbGVtZW50OyAvLy9cblxuICAgIGFuY2VzdG9yVmVydGV4TmFtZXMuZm9yRWFjaChmdW5jdGlvbihhbmNlc3RvclZlcnRleE5hbWUpIHtcbiAgICAgIGNvbnN0IHNvdXJjZVZlcnRleE5hbWUgPSBhbmNlc3RvclZlcnRleE5hbWUsIC8vL1xuICAgICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IHZlcnRleE5hbWUsICAvLy9cbiAgICAgICAgICAgIGVkZ2UgPSBuZXcgRWRnZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgZWRnZXMucHVzaChlZGdlKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGVkZ2VzO1xufVxuXG5mdW5jdGlvbiBjaGVja0VkZ2VzSW5jbHVkZXNFZGdlKGVkZ2UsIGVkZ2VzKSB7XG4gIGNvbnN0IGVkZ2UxID0gZWRnZSwgLy8vXG4gICAgICAgIGVkZ2VzSW5jbHVkZXNFZGdlID0gZWRnZXMuc29tZShmdW5jdGlvbihlZGdlKSB7XG4gICAgICAgICAgY29uc3QgZWRnZTIgPSBlZGdlLCAvLy9cbiAgICAgICAgICAgICAgICBtYXRjaGVzID0gZWRnZTEubWF0Y2goZWRnZTIpO1xuXG4gICAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGVkZ2VzSW5jbHVkZXNFZGdlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVFZGdlRnJvbUVkZ2VzKGVkZ2UsIGVkZ2VzKSB7XG4gIGNvbnN0IGVkZ2UxID0gZWRnZTsgLy8vXG5cbiAgcmVtb3ZlKGVkZ2VzLCBmdW5jdGlvbihlZGdlKSB7XG4gICAgY29uc3QgZWRnZTIgPSBlZGdlLCAvLy9cbiAgICAgICAgICBtYXRjaGVzID0gZWRnZTEubWF0Y2goZWRnZTIpO1xuXG4gICAgaWYgKCFtYXRjaGVzKSB7IC8vL1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbn1cbiJdfQ==