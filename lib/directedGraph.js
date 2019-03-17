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

      var edges = this.directedAcyclicGraph.getEdgesBySourceVertexName(sourceVertexName);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9kaXJlY3RlZEdyYXBoLmpzIl0sIm5hbWVzIjpbImthaG4iLCJyZXF1aXJlIiwibmVjZXNzYXJ5IiwicGVhcmNla2VsbHkiLCJFZGdlIiwiQ3ljbGUiLCJQYXJ0aWFsQ3ljbGUiLCJ2ZXJ0ZXhVdGlsaXRpZXMiLCJHcmFwaCIsImFycmF5VXRpbGl0aWVzIiwiRGlyZWN0ZWRBY3ljbGljR3JhcGgiLCJmb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2giLCJmaXJzdCIsInNlY29uZCIsImZpbHRlciIsInBydW5lIiwicmVtb3ZlIiwiRGlyZWN0ZWRHcmFwaCIsImN5Y2xpY0VkZ2VzIiwiZGlyZWN0ZWRBY3ljbGljR3JhcGgiLCJ2ZXJ0ZXhOYW1lIiwiY3ljbGVzUHJlc2VudCIsInZlcnRleFByZXNlbnQiLCJpc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUiLCJmaXJzdEN5Y2xlIiwiZ2V0Rmlyc3RDeWNsZUJ5VmVydGV4TmFtZSIsInZlcnRleCIsImdldFZlcnRleEJ5VmVydGV4TmFtZSIsInNsaWNlIiwicGFydGlhbEN5Y2xlcyIsImN5Y2xlcyIsInZpc2l0ZWRWZXJ0ZXgiLCJnZXRQcmVkZWNlc3NvclZlcnRpY2VzIiwidmlzaXRlZFZlcnRleE5hbWUiLCJnZXROYW1lIiwic291cmNlVmVydGV4TmFtZSIsImN5Y2xpY0VkZ2UiLCJtYXRjaGVzIiwibWF0Y2hTb3VyY2VWZXJ0ZXhOYW1lIiwicHJlZGVjZXNzb3JWZXJ0aWNlcyIsInBhcnRpYWxDeWNsZSIsImZyb21DeWNsaWNFZGdlQW5kUHJlZGVjZXNzb3JWZXJ0aWNlcyIsInB1c2giLCJjeWNsaWNFZGdlc0xlbmd0aCIsImxlbmd0aCIsInRlcm1pbmF0ZSIsInNvbWUiLCJ0YXJnZXRWZXJ0ZXhOYW1lIiwiZ2V0VGFyZ2V0VmVydGV4TmFtZSIsInRhcmdldFZlcnRleCIsInN1Y2Nlc3NvclZlcnRpY2VzIiwiY3ljbGUiLCJmcm9tVmVydGV4TmFtZVBhcnRpYWxDeWNsZUFuZFN1Y2Nlc3NvclZlcnRpY2VzIiwiY3ljbGVzTGVuZ3RoIiwiYWRkVmVydGV4QnlWZXJ0ZXhOYW1lIiwicmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lIiwiZmlsdGVyQ3ljbGljRWRnZXMiLCJlZGdlIiwic3VjY2VzcyIsImFkZEVkZ2UiLCJjeWNsaWNFZGdlc0luY2x1ZGVzRWRnZSIsImNoZWNrRWRnZXNJbmNsdWRlc0VkZ2UiLCJlZGdlcyIsImZvckVhY2giLCJyZW1vdmVTdHJhbmRlZFZlcnRpY2VzIiwiZWRnZUN5Y2xpYyIsImVkZ2VQcmVzZW50IiwiaXNFZGdlUHJlc2VudCIsInJlbW92ZUVkZ2VGcm9tRWRnZXMiLCJyZW1vdmVFZGdlIiwiZ2V0U291cmNlVmVydGV4TmFtZSIsInNvdXJjZVZlcnRleCIsInNvdXJjZVZlcnRleFN0cmFuZGVkIiwiaXNTdHJhbmRlZCIsInRhcmdldFZlcnRleFN0cmFuZGVkIiwiZnJvbVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lIiwiZ2V0RWRnZXNCeVRhcmdldFZlcnRleE5hbWUiLCJyZW1vdmVFZGdlcyIsImdldEVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lIiwiZnJvbU5vdGhpbmciLCJkaXJlY3RlZEdyYXBoIiwidmVydGV4TGl0ZXJhbHMiLCJ2ZXJ0ZXhOYW1lcyIsInZlcnRleE5hbWVzRnJvbVZlcnRleExpdGVyYWxzIiwiZWRnZXNGcm9tVmVydGV4TGl0ZXJhbHMiLCJmcm9tVmVydGV4TmFtZXNBbmRFZGdlcyIsImdyYXBoIiwiYXJlQ3ljbGVzUHJlc2VudCIsImZyb21WZXJ0ZXhOYW1lcyIsInRvcG9sb2dpY2FsbHlPcmRlcmVkVmVydGljZXMiLCJnZXRUb3BvbG9naWNhbGx5T3JkZXJlZFZlcnRpY2VzIiwiZnJvbVRvcG9sb2dpY2FsbHlPcmRlcmVkVmVydGljZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwidmVydGV4TmFtZU1hcCIsInZlcnRleExpdGVyYWwiLCJmaXJzdFZlcnRleExpdGVyYWxFbGVtZW50IiwidmVydGV4RXhpc3RzIiwiaGFzT3duUHJvcGVydHkiLCJzZWNvbmRWZXJ0ZXhMaXRlcmFsRWxlbWVudCIsImFuY2VzdG9yVmVydGV4TmFtZXMiLCJhbmNlc3RvclZlcnRleE5hbWUiLCJhbmNlc3RvclZlcnRleEV4aXN0cyIsInZlcnRleE5hbWVNYXBLZXlzIiwiT2JqZWN0Iiwia2V5cyIsImVkZ2UxIiwiZWRnZXNJbmNsdWRlc0VkZ2UiLCJlZGdlMiIsIm1hdGNoIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxZQUFSLENBQWI7QUFBQSxJQUNNQyxZQUFZRCxRQUFRLFdBQVIsQ0FEbEI7QUFBQSxJQUVNRSxjQUFjRixRQUFRLG9CQUFSLENBRnBCOztBQUlBLElBQU1HLE9BQU9ILFFBQVEsUUFBUixDQUFiO0FBQUEsSUFDTUksUUFBUUosUUFBUSxTQUFSLENBRGQ7QUFBQSxJQUVNSyxlQUFlTCxRQUFRLGdCQUFSLENBRnJCO0FBQUEsSUFHTU0sa0JBQWtCTixRQUFRLG9CQUFSLENBSHhCOztBQUtNLElBQUVPLEtBQUYsR0FBWVIsSUFBWixDQUFFUSxLQUFGO0FBQUEsSUFDRUMsY0FERixHQUNxQlAsU0FEckIsQ0FDRU8sY0FERjtBQUFBLElBRUVDLG9CQUZGLEdBRTJCUCxXQUYzQixDQUVFTyxvQkFGRjtBQUFBLElBR0VDLHdCQUhGLEdBRytCSixlQUgvQixDQUdFSSx3QkFIRjtBQUFBLElBSUVDLEtBSkYsR0FJbUNILGNBSm5DLENBSUVHLEtBSkY7QUFBQSxJQUlTQyxNQUpULEdBSW1DSixjQUpuQyxDQUlTSSxNQUpUO0FBQUEsSUFJaUJDLE1BSmpCLEdBSW1DTCxjQUpuQyxDQUlpQkssTUFKakI7QUFBQSxJQUl5QkMsS0FKekIsR0FJbUNOLGNBSm5DLENBSXlCTSxLQUp6Qjs7O0FBTU4sSUFBTUMsU0FBU0QsS0FBZixDLENBQXVCOztJQUVqQkUsYTtBQUNKLHlCQUFZQyxXQUFaLEVBQXlCQyxvQkFBekIsRUFBK0M7QUFBQTs7QUFDN0MsU0FBS0QsV0FBTCxHQUFtQkEsV0FBbkI7QUFDQSxTQUFLQyxvQkFBTCxHQUE0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OztBQUlBZSxZQUFNcEIsSUFBTixDQUFXZSxJQUFYO0FBQ0QsS0FORDtBQU9ELEdBYkQ7O0FBZUEsU0FBT0ssS0FBUDtBQUNEOztBQUVELFNBQVNELHNCQUFULENBQWdDSixJQUFoQyxFQUFzQ0ssS0FBdEMsRUFBNkM7QUFDM0MsTUFBTTRDLFFBQVFqRCxJQUFkO0FBQUEsTUFBb0I7QUFDZGtELHNCQUFvQjdDLE1BQU1oQixJQUFOLENBQVcsVUFBU1csSUFBVCxFQUFlO0FBQzVDLFFBQU1tRCxRQUFRbkQsSUFBZDtBQUFBLFFBQW9CO0FBQ2RwQixjQUFVcUUsTUFBTUcsS0FBTixDQUFZRCxLQUFaLENBRGhCOztBQUdBLFFBQUl2RSxPQUFKLEVBQWE7QUFDWCxhQUFPLElBQVA7QUFDRDtBQUNGLEdBUG1CLENBRDFCOztBQVVBLFNBQU9zRSxpQkFBUDtBQUNEOztBQUVELFNBQVN2QyxtQkFBVCxDQUE2QlgsSUFBN0IsRUFBbUNLLEtBQW5DLEVBQTBDO0FBQ3hDLE1BQU00QyxRQUFRakQsSUFBZCxDQUR3QyxDQUNwQjs7QUFFcEJ6QyxTQUFPOEMsS0FBUCxFQUFjLFVBQVNMLElBQVQsRUFBZTtBQUMzQixRQUFNbUQsUUFBUW5ELElBQWQ7QUFBQSxRQUFvQjtBQUNkcEIsY0FBVXFFLE1BQU1HLEtBQU4sQ0FBWUQsS0FBWixDQURoQjs7QUFHQSxRQUFJLENBQUN2RSxPQUFMLEVBQWM7QUFBRTtBQUNkLGFBQU8sSUFBUDtBQUNEO0FBQ0YsR0FQRDtBQVFEIiwiZmlsZSI6ImRpcmVjdGVkR3JhcGguanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGthaG4gPSByZXF1aXJlKCdvY2NhbS1rYWhuJyksXG4gICAgICBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKSxcbiAgICAgIHBlYXJjZWtlbGx5ID0gcmVxdWlyZSgnb2NjYW0tcGVhcmNlLWtlbGx5Jyk7XG5cbmNvbnN0IEVkZ2UgPSByZXF1aXJlKCcuL2VkZ2UnKSxcbiAgICAgIEN5Y2xlID0gcmVxdWlyZSgnLi9jeWNsZScpLFxuICAgICAgUGFydGlhbEN5Y2xlID0gcmVxdWlyZSgnLi9wYXJ0aWFsQ3ljbGUnKSxcbiAgICAgIHZlcnRleFV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL3ZlcnRleCcpO1xuXG5jb25zdCB7IEdyYXBoIH0gPSBrYWhuLFxuICAgICAgeyBhcnJheVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBEaXJlY3RlZEFjeWNsaWNHcmFwaCB9ID0gcGVhcmNla2VsbHksXG4gICAgICB7IGZvcndhcmRzRGVwdGhGaXJzdFNlYXJjaCB9ID0gdmVydGV4VXRpbGl0aWVzLFxuICAgICAgeyBmaXJzdCwgc2Vjb25kLCBmaWx0ZXIsIHBydW5lIH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3QgcmVtb3ZlID0gcHJ1bmU7ICAvLy9cblxuY2xhc3MgRGlyZWN0ZWRHcmFwaCB7XG4gIGNvbnN0cnVjdG9yKGN5Y2xpY0VkZ2VzLCBkaXJlY3RlZEFjeWNsaWNHcmFwaCkge1xuICAgIHRoaXMuY3ljbGljRWRnZXMgPSBjeWNsaWNFZGdlcztcbiAgICB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoID0gZGlyZWN0ZWRBY3ljbGljR3JhcGg7XG4gIH1cbiAgXG4gIGFyZUN5Y2xlc1ByZXNlbnRCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGxldCBjeWNsZXNQcmVzZW50ID0gZmFsc2U7XG5cbiAgICBjb25zdCB2ZXJ0ZXhQcmVzZW50ID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5pc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICBpZiAodmVydGV4UHJlc2VudCkge1xuICAgICAgY29uc3QgZmlyc3RDeWNsZSA9IHRoaXMuZ2V0Rmlyc3RDeWNsZUJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgICAgY3ljbGVzUHJlc2VudCA9IChmaXJzdEN5Y2xlICE9PSBudWxsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3ljbGVzUHJlc2VudDtcbiAgfVxuXG4gIGdldEZpcnN0Q3ljbGVCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGxldCBmaXJzdEN5Y2xlID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCB2ZXJ0ZXggPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSxcbiAgICAgICAgICBjeWNsaWNFZGdlcyA9IHRoaXMuY3ljbGljRWRnZXMuc2xpY2UoKSwgLy8vXG4gICAgICAgICAgcGFydGlhbEN5Y2xlcyA9IFtdLFxuICAgICAgICAgIGN5Y2xlcyA9IFtdO1xuXG4gICAgZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoKHZlcnRleCwgZnVuY3Rpb24odmlzaXRlZFZlcnRleCwgZ2V0UHJlZGVjZXNzb3JWZXJ0aWNlcykge1xuICAgICAgY29uc3QgdmlzaXRlZFZlcnRleE5hbWUgPSB2aXNpdGVkVmVydGV4LmdldE5hbWUoKSxcbiAgICAgICAgICAgIHNvdXJjZVZlcnRleE5hbWUgPSB2aXNpdGVkVmVydGV4TmFtZTsgLy8vXG5cbiAgICAgIGZpbHRlcihjeWNsaWNFZGdlcywgZnVuY3Rpb24oY3ljbGljRWRnZSkge1xuICAgICAgICBjb25zdCBtYXRjaGVzID0gY3ljbGljRWRnZS5tYXRjaFNvdXJjZVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSk7XG5cbiAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICBjb25zdCBwcmVkZWNlc3NvclZlcnRpY2VzID0gZ2V0UHJlZGVjZXNzb3JWZXJ0aWNlcygpLFxuICAgICAgICAgICAgICAgIHBhcnRpYWxDeWNsZSA9ICBQYXJ0aWFsQ3ljbGUuZnJvbUN5Y2xpY0VkZ2VBbmRQcmVkZWNlc3NvclZlcnRpY2VzKGN5Y2xpY0VkZ2UsIHByZWRlY2Vzc29yVmVydGljZXMpO1xuICAgICAgICAgIFxuICAgICAgICAgIHBhcnRpYWxDeWNsZXMucHVzaChwYXJ0aWFsQ3ljbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgY3ljbGljRWRnZXNMZW5ndGggPSBjeWNsaWNFZGdlcy5sZW5ndGgsXG4gICAgICAgICAgICB0ZXJtaW5hdGUgPSAoY3ljbGljRWRnZXNMZW5ndGggPT09IDApO1xuXG4gICAgICByZXR1cm4gdGVybWluYXRlO1xuICAgIH0pO1xuXG4gICAgcGFydGlhbEN5Y2xlcy5zb21lKChwYXJ0aWFsQ3ljbGUpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldFZlcnRleE5hbWUgPSBwYXJ0aWFsQ3ljbGUuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICAgIGZvcndhcmRzRGVwdGhGaXJzdFNlYXJjaCh0YXJnZXRWZXJ0ZXgsIGZ1bmN0aW9uKHZpc2l0ZWRWZXJ0ZXgsIGdldFByZWRlY2Vzc29yVmVydGljZXMpIHtcbiAgICAgICAgY29uc3QgdmlzaXRlZFZlcnRleE5hbWUgPSB2aXNpdGVkVmVydGV4LmdldE5hbWUoKTtcblxuICAgICAgICBpZiAodmlzaXRlZFZlcnRleE5hbWUgPT09IHZlcnRleE5hbWUpIHtcbiAgICAgICAgICBjb25zdCBwcmVkZWNlc3NvclZlcnRpY2VzID0gZ2V0UHJlZGVjZXNzb3JWZXJ0aWNlcygpLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3NvclZlcnRpY2VzID0gcHJlZGVjZXNzb3JWZXJ0aWNlcywgIC8vL1xuICAgICAgICAgICAgICAgIGN5Y2xlID0gQ3ljbGUuZnJvbVZlcnRleE5hbWVQYXJ0aWFsQ3ljbGVBbmRTdWNjZXNzb3JWZXJ0aWNlcyh2ZXJ0ZXhOYW1lLCBwYXJ0aWFsQ3ljbGUsIHN1Y2Nlc3NvclZlcnRpY2VzKTtcblxuICAgICAgICAgIGN5Y2xlcy5wdXNoKGN5Y2xlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGN5Y2xlc0xlbmd0aCA9IGN5Y2xlcy5sZW5ndGgsXG4gICAgICAgICAgICAgIHRlcm1pbmF0ZSA9IChjeWNsZXNMZW5ndGggPiAwKTtcblxuICAgICAgICByZXR1cm4gdGVybWluYXRlO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjeWNsZXNMZW5ndGggPSBjeWNsZXMubGVuZ3RoO1xuICAgIFxuICAgIGlmIChjeWNsZXNMZW5ndGggPiAwKSB7XG4gICAgICBmaXJzdEN5Y2xlID0gZmlyc3QoY3ljbGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmlyc3RDeWNsZTtcbiAgfVxuXG4gIGFkZFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguYWRkVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpOyB9XG5cbiAgcmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLnJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgIHRoaXMuZmlsdGVyQ3ljbGljRWRnZXMoKTtcbiAgfVxuXG4gIGFkZEVkZ2UoZWRnZSkge1xuICAgIGNvbnN0IHN1Y2Nlc3MgPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmFkZEVkZ2UoZWRnZSk7XG4gICAgXG4gICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICBjb25zdCBjeWNsaWNFZGdlc0luY2x1ZGVzRWRnZSA9IGNoZWNrRWRnZXNJbmNsdWRlc0VkZ2UoZWRnZSwgdGhpcy5jeWNsaWNFZGdlcyk7XG5cbiAgICAgIGlmICghY3ljbGljRWRnZXNJbmNsdWRlc0VkZ2UpIHtcbiAgICAgICAgY29uc3QgY3ljbGljRWRnZSA9IGVkZ2U7ICAvLy9cblxuICAgICAgICB0aGlzLmN5Y2xpY0VkZ2VzLnB1c2goY3ljbGljRWRnZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICBhZGRFZGdlcyhlZGdlcykge1xuICAgIGVkZ2VzLmZvckVhY2goKGVkZ2UpID0+IHtcbiAgICAgIHRoaXMuYWRkRWRnZShlZGdlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZUVkZ2UoZWRnZSwgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgY3ljbGljRWRnZXNJbmNsdWRlc0VkZ2UgPSBjaGVja0VkZ2VzSW5jbHVkZXNFZGdlKGVkZ2UsIHRoaXMuY3ljbGljRWRnZXMpLFxuICAgICAgICAgIGVkZ2VDeWNsaWMgPSBjeWNsaWNFZGdlc0luY2x1ZGVzRWRnZSwgLy8vXG4gICAgICAgICAgZWRnZVByZXNlbnQgPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmlzRWRnZVByZXNlbnQoZWRnZSk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAoZWRnZUN5Y2xpYykge1xuICAgICAgY29uc3QgY3ljbGljRWRnZSA9IGVkZ2U7ICAvLy9cblxuICAgICAgcmVtb3ZlRWRnZUZyb21FZGdlcyhjeWNsaWNFZGdlLCB0aGlzLmN5Y2xpY0VkZ2VzKTtcbiAgICB9IGVsc2UgaWYgKGVkZ2VQcmVzZW50KSB7XG4gICAgICB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLnJlbW92ZUVkZ2UoZWRnZSk7XG5cbiAgICAgIGlmIChyZW1vdmVTdHJhbmRlZFZlcnRpY2VzKSB7XG4gICAgICAgIGNvbnN0IHNvdXJjZVZlcnRleE5hbWUgPSBlZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSxcbiAgICAgICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IGVkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgICBzb3VyY2VWZXJ0ZXggPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldFZlcnRleEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSksXG4gICAgICAgICAgICAgIHNvdXJjZVZlcnRleFN0cmFuZGVkID0gc291cmNlVmVydGV4LmlzU3RyYW5kZWQoKSxcbiAgICAgICAgICAgICAgdGFyZ2V0VmVydGV4U3RyYW5kZWQgPSB0YXJnZXRWZXJ0ZXguaXNTdHJhbmRlZCgpO1xuXG4gICAgICAgIGlmIChzb3VyY2VWZXJ0ZXhTdHJhbmRlZCkge1xuICAgICAgICAgIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGgucmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRhcmdldFZlcnRleFN0cmFuZGVkKSB7XG4gICAgICAgICAgdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5yZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmZpbHRlckN5Y2xpY0VkZ2VzKCk7XG4gIH1cblxuICByZW1vdmVFZGdlcyhlZGdlcywgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyA9IGZhbHNlKSB7XG4gICAgZWRnZXMuZm9yRWFjaCgoZWRnZSkgPT4ge1xuICAgICAgdGhpcy5yZW1vdmVFZGdlKGVkZ2UsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMpO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkRWRnZUJ5VmVydGV4TmFtZXMoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSkge1xuICAgIGNvbnN0IGVkZ2UgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgIHRoaXMuYWRkRWRnZShlZGdlKTtcbiAgfVxuXG4gIHJlbW92ZUVkZ2VCeVZlcnRleE5hbWVzKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMgPSBmYWxzZSkge1xuICAgIGNvbnN0IGVkZ2UgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgIHRoaXMucmVtb3ZlRWRnZShlZGdlLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzKTtcbiAgfVxuXG4gIHJlbW92ZUVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMgPSBmYWxzZSkge1xuICAgIGNvbnN0IGVkZ2VzID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRFZGdlc0J5VGFyZ2V0VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgIHRoaXMucmVtb3ZlRWRnZXMoZWRnZXMsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMpO1xuICB9XG5cbiAgcmVtb3ZlRWRnZXNCeVNvdXJjZVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgZWRnZXMgPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldEVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpO1xuXG4gICAgdGhpcy5yZW1vdmVFZGdlcyhlZGdlcywgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyk7XG4gIH1cblxuICByZW1vdmVBbGxFZGdlc0FuZFZlcnRpY2VzKCkge1xuICAgIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGggPSBEaXJlY3RlZEFjeWNsaWNHcmFwaC5mcm9tTm90aGluZygpO1xuXG4gICAgdGhpcy5jeWNsaWNFZGdlcyA9IFtdO1xuICB9XG5cbiAgZmlsdGVyQ3ljbGljRWRnZXMoKSB7XG4gICAgZmlsdGVyKHRoaXMuY3ljbGljRWRnZXMsIChjeWNsaWNFZGdlKSA9PiB7XG4gICAgICBjb25zdCBlZGdlID0gY3ljbGljRWRnZSwgIC8vL1xuICAgICAgICAgICAgc3VjY2VzcyA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguYWRkRWRnZShlZGdlKTtcblxuICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VzID0gW10sXG4gICAgICAgICAgZGlyZWN0ZWRBY3ljbGljR3JhcGggPSBEaXJlY3RlZEFjeWNsaWNHcmFwaC5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGRpcmVjdGVkR3JhcGggPSBuZXcgRGlyZWN0ZWRHcmFwaChjeWNsaWNFZGdlcywgZGlyZWN0ZWRBY3ljbGljR3JhcGgpO1xuICAgIFxuICAgIHJldHVybiBkaXJlY3RlZEdyYXBoOyAgICBcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmVydGV4TGl0ZXJhbHModmVydGV4TGl0ZXJhbHMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhOYW1lcyA9IHZlcnRleE5hbWVzRnJvbVZlcnRleExpdGVyYWxzKHZlcnRleExpdGVyYWxzKSxcbiAgICAgICAgICBlZGdlcyA9IGVkZ2VzRnJvbVZlcnRleExpdGVyYWxzKHZlcnRleExpdGVyYWxzKSxcbiAgICAgICAgICBkaXJlY3RlZEdyYXBoID0gRGlyZWN0ZWRHcmFwaC5mcm9tVmVydGV4TmFtZXNBbmRFZGdlcyh2ZXJ0ZXhOYW1lcywgZWRnZXMpO1xuXG4gICAgcmV0dXJuIGRpcmVjdGVkR3JhcGg7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZlcnRleE5hbWVzQW5kRWRnZXModmVydGV4TmFtZXMsIGVkZ2VzKSB7XG4gICAgbGV0IGRpcmVjdGVkR3JhcGg7XG5cbiAgICBjb25zdCBncmFwaCA9IEdyYXBoLmZyb21WZXJ0ZXhOYW1lc0FuZEVkZ2VzKHZlcnRleE5hbWVzLCBlZGdlcyksXG4gICAgICAgICAgY3ljbGVzUHJlc2VudCA9IGdyYXBoLmFyZUN5Y2xlc1ByZXNlbnQoKTtcblxuICAgIGlmIChjeWNsZXNQcmVzZW50KSB7XG4gICAgICBjb25zdCBjeWNsaWNFZGdlcyA9IFtdLFxuICAgICAgICAgICAgZGlyZWN0ZWRBY3ljbGljR3JhcGggPSBEaXJlY3RlZEFjeWNsaWNHcmFwaC5mcm9tVmVydGV4TmFtZXModmVydGV4TmFtZXMpO1xuXG4gICAgICBkaXJlY3RlZEdyYXBoID0gbmV3IERpcmVjdGVkR3JhcGgoY3ljbGljRWRnZXMsIGRpcmVjdGVkQWN5Y2xpY0dyYXBoKTtcblxuICAgICAgZWRnZXMuZm9yRWFjaChmdW5jdGlvbihlZGdlKSB7XG4gICAgICAgIGRpcmVjdGVkR3JhcGguYWRkRWRnZShlZGdlKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0b3BvbG9naWNhbGx5T3JkZXJlZFZlcnRpY2VzID0gZ3JhcGguZ2V0VG9wb2xvZ2ljYWxseU9yZGVyZWRWZXJ0aWNlcygpLFxuICAgICAgICAgICAgY3ljbGljRWRnZXMgPSBbXSxcbiAgICAgICAgICAgIGRpcmVjdGVkQWN5Y2xpY0dyYXBoID0gRGlyZWN0ZWRBY3ljbGljR3JhcGguZnJvbVRvcG9sb2dpY2FsbHlPcmRlcmVkVmVydGljZXModG9wb2xvZ2ljYWxseU9yZGVyZWRWZXJ0aWNlcyk7XG5cbiAgICAgIGRpcmVjdGVkR3JhcGggPSBuZXcgRGlyZWN0ZWRHcmFwaChjeWNsaWNFZGdlcywgZGlyZWN0ZWRBY3ljbGljR3JhcGgpO1xuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3RlZEdyYXBoO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGlyZWN0ZWRHcmFwaDtcblxuZnVuY3Rpb24gdmVydGV4TmFtZXNGcm9tVmVydGV4TGl0ZXJhbHModmVydGV4TGl0ZXJhbHMpIHtcbiAgY29uc3QgdmVydGV4TmFtZU1hcCA9IHt9O1xuXG4gIHZlcnRleExpdGVyYWxzLmZvckVhY2goZnVuY3Rpb24odmVydGV4TGl0ZXJhbCkge1xuICAgIGNvbnN0IGZpcnN0VmVydGV4TGl0ZXJhbEVsZW1lbnQgPSBmaXJzdCh2ZXJ0ZXhMaXRlcmFsKSxcbiAgICAgICAgICB2ZXJ0ZXhOYW1lID0gZmlyc3RWZXJ0ZXhMaXRlcmFsRWxlbWVudCwgLy8vXG4gICAgICAgICAgdmVydGV4RXhpc3RzID0gdmVydGV4TmFtZU1hcC5oYXNPd25Qcm9wZXJ0eSh2ZXJ0ZXhOYW1lKTtcblxuICAgIGlmICghdmVydGV4RXhpc3RzKSB7XG4gICAgICB2ZXJ0ZXhOYW1lTWFwW3ZlcnRleE5hbWVdID0gdmVydGV4TmFtZTtcbiAgICB9XG5cbiAgICBjb25zdCBzZWNvbmRWZXJ0ZXhMaXRlcmFsRWxlbWVudCA9IHNlY29uZCh2ZXJ0ZXhMaXRlcmFsKSxcbiAgICAgICAgICBhbmNlc3RvclZlcnRleE5hbWVzID0gc2Vjb25kVmVydGV4TGl0ZXJhbEVsZW1lbnQ7IC8vL1xuXG4gICAgYW5jZXN0b3JWZXJ0ZXhOYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKGFuY2VzdG9yVmVydGV4TmFtZSkge1xuICAgICAgY29uc3QgYW5jZXN0b3JWZXJ0ZXhFeGlzdHMgPSB2ZXJ0ZXhOYW1lTWFwLmhhc093blByb3BlcnR5KGFuY2VzdG9yVmVydGV4TmFtZSk7XG5cbiAgICAgIGlmICghYW5jZXN0b3JWZXJ0ZXhFeGlzdHMpIHtcbiAgICAgICAgdmVydGV4TmFtZU1hcFthbmNlc3RvclZlcnRleE5hbWVdID0gYW5jZXN0b3JWZXJ0ZXhOYW1lO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICBjb25zdCB2ZXJ0ZXhOYW1lTWFwS2V5cyA9IE9iamVjdC5rZXlzKHZlcnRleE5hbWVNYXApLFxuICAgICAgICB2ZXJ0ZXhOYW1lcyA9IHZlcnRleE5hbWVNYXBLZXlzOyAgLy8vXG5cbiAgcmV0dXJuIHZlcnRleE5hbWVzO1xufVxuXG5mdW5jdGlvbiBlZGdlc0Zyb21WZXJ0ZXhMaXRlcmFscyh2ZXJ0ZXhMaXRlcmFscykge1xuICBjb25zdCBlZGdlcyA9IFtdO1xuXG4gIHZlcnRleExpdGVyYWxzLmZvckVhY2goZnVuY3Rpb24odmVydGV4TGl0ZXJhbCkge1xuICAgIGNvbnN0IGZpcnN0VmVydGV4TGl0ZXJhbEVsZW1lbnQgPSBmaXJzdCh2ZXJ0ZXhMaXRlcmFsKSxcbiAgICAgICAgICBzZWNvbmRWZXJ0ZXhMaXRlcmFsRWxlbWVudCA9IHNlY29uZCh2ZXJ0ZXhMaXRlcmFsKSxcbiAgICAgICAgICBhbmNlc3RvclZlcnRleE5hbWVzID0gc2Vjb25kVmVydGV4TGl0ZXJhbEVsZW1lbnQsIC8vL1xuICAgICAgICAgIHZlcnRleE5hbWUgPSBmaXJzdFZlcnRleExpdGVyYWxFbGVtZW50OyAvLy9cblxuICAgIGFuY2VzdG9yVmVydGV4TmFtZXMuZm9yRWFjaChmdW5jdGlvbihhbmNlc3RvclZlcnRleE5hbWUpIHtcbiAgICAgIGNvbnN0IHNvdXJjZVZlcnRleE5hbWUgPSBhbmNlc3RvclZlcnRleE5hbWUsIC8vL1xuICAgICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IHZlcnRleE5hbWUsICAvLy9cbiAgICAgICAgICAgIGVkZ2UgPSBuZXcgRWRnZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgZWRnZXMucHVzaChlZGdlKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGVkZ2VzO1xufVxuXG5mdW5jdGlvbiBjaGVja0VkZ2VzSW5jbHVkZXNFZGdlKGVkZ2UsIGVkZ2VzKSB7XG4gIGNvbnN0IGVkZ2UxID0gZWRnZSwgLy8vXG4gICAgICAgIGVkZ2VzSW5jbHVkZXNFZGdlID0gZWRnZXMuc29tZShmdW5jdGlvbihlZGdlKSB7XG4gICAgICAgICAgY29uc3QgZWRnZTIgPSBlZGdlLCAvLy9cbiAgICAgICAgICAgICAgICBtYXRjaGVzID0gZWRnZTEubWF0Y2goZWRnZTIpO1xuXG4gICAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGVkZ2VzSW5jbHVkZXNFZGdlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVFZGdlRnJvbUVkZ2VzKGVkZ2UsIGVkZ2VzKSB7XG4gIGNvbnN0IGVkZ2UxID0gZWRnZTsgLy8vXG5cbiAgcmVtb3ZlKGVkZ2VzLCBmdW5jdGlvbihlZGdlKSB7XG4gICAgY29uc3QgZWRnZTIgPSBlZGdlLCAvLy9cbiAgICAgICAgICBtYXRjaGVzID0gZWRnZTEubWF0Y2goZWRnZTIpO1xuXG4gICAgaWYgKCFtYXRjaGVzKSB7IC8vL1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbn1cbiJdfQ==