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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9kaXJlY3RlZEdyYXBoLmpzIl0sIm5hbWVzIjpbImthaG4iLCJyZXF1aXJlIiwibmVjZXNzYXJ5IiwicGVhcmNla2VsbHkiLCJFZGdlIiwiQ3ljbGUiLCJQYXJ0aWFsQ3ljbGUiLCJ2ZXJ0ZXhVdGlsaXRpZXMiLCJHcmFwaCIsImFycmF5VXRpbGl0aWVzIiwiRGlyZWN0ZWRBY3ljbGljR3JhcGgiLCJmb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2giLCJmaXJzdCIsInNlY29uZCIsImZpbHRlciIsInBydW5lIiwicmVtb3ZlIiwiRGlyZWN0ZWRHcmFwaCIsImN5Y2xpY0VkZ2VzIiwiZGlyZWN0ZWRBY3ljbGljR3JhcGgiLCJ2ZXJ0ZXhOYW1lIiwiZmlyc3RDeWNsZSIsImdldEZpcnN0Q3ljbGVCeVZlcnRleE5hbWUiLCJjeWNsZXNQcmVzZW50IiwidmVydGV4IiwiZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lIiwic2xpY2UiLCJwYXJ0aWFsQ3ljbGVzIiwiY3ljbGVzIiwidmlzaXRlZFZlcnRleCIsImdldFByZWRlY2Vzc29yVmVydGljZXMiLCJ2aXNpdGVkVmVydGV4TmFtZSIsImdldE5hbWUiLCJzb3VyY2VWZXJ0ZXhOYW1lIiwiY3ljbGljRWRnZSIsIm1hdGNoZXMiLCJtYXRjaFNvdXJjZVZlcnRleE5hbWUiLCJwcmVkZWNlc3NvclZlcnRpY2VzIiwicGFydGlhbEN5Y2xlIiwiZnJvbUN5Y2xpY0VkZ2VBbmRQcmVkZWNlc3NvclZlcnRpY2VzIiwicHVzaCIsImN5Y2xpY0VkZ2VzTGVuZ3RoIiwibGVuZ3RoIiwidGVybWluYXRlIiwic29tZSIsInRhcmdldFZlcnRleE5hbWUiLCJnZXRUYXJnZXRWZXJ0ZXhOYW1lIiwidGFyZ2V0VmVydGV4Iiwic3VjY2Vzc29yVmVydGljZXMiLCJjeWNsZSIsImZyb21WZXJ0ZXhOYW1lUGFydGlhbEN5Y2xlQW5kU3VjY2Vzc29yVmVydGljZXMiLCJjeWNsZXNMZW5ndGgiLCJhZGRWZXJ0ZXhCeVZlcnRleE5hbWUiLCJyZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUiLCJmaWx0ZXJDeWNsaWNFZGdlcyIsImVkZ2UiLCJzdWNjZXNzIiwiYWRkRWRnZSIsImN5Y2xpY0VkZ2VzSW5jbHVkZXNFZGdlIiwiY2hlY2tFZGdlc0luY2x1ZGVzRWRnZSIsImVkZ2VzIiwiZm9yRWFjaCIsInJlbW92ZVN0cmFuZGVkVmVydGljZXMiLCJlZGdlQ3ljbGljIiwiZWRnZVByZXNlbnQiLCJpc0VkZ2VQcmVzZW50IiwicmVtb3ZlRWRnZUZyb21FZGdlcyIsInJlbW92ZUVkZ2UiLCJnZXRTb3VyY2VWZXJ0ZXhOYW1lIiwic291cmNlVmVydGV4Iiwic291cmNlVmVydGV4U3RyYW5kZWQiLCJpc1N0cmFuZGVkIiwidGFyZ2V0VmVydGV4U3RyYW5kZWQiLCJmcm9tU291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUiLCJmcm9tTm90aGluZyIsImRpcmVjdGVkR3JhcGgiLCJ2ZXJ0ZXhMaXRlcmFscyIsInZlcnRleE5hbWVzIiwidmVydGV4TmFtZXNGcm9tVmVydGV4TGl0ZXJhbHMiLCJlZGdlc0Zyb21WZXJ0ZXhMaXRlcmFscyIsImZyb21WZXJ0ZXhOYW1lc0FuZEVkZ2VzIiwiZ3JhcGgiLCJhcmVDeWNsZXNQcmVzZW50IiwiZnJvbVZlcnRleE5hbWVzIiwidG9wb2xvZ2ljYWxseU9yZGVyZWRWZXJ0aWNlcyIsImdldFRvcG9sb2dpY2FsbHlPcmRlcmVkVmVydGljZXMiLCJmcm9tVG9wb2xvZ2ljYWxseU9yZGVyZWRWZXJ0aWNlcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJ2ZXJ0ZXhOYW1lTWFwIiwidmVydGV4TGl0ZXJhbCIsImZpcnN0VmVydGV4TGl0ZXJhbEVsZW1lbnQiLCJ2ZXJ0ZXhFeGlzdHMiLCJoYXNPd25Qcm9wZXJ0eSIsInNlY29uZFZlcnRleExpdGVyYWxFbGVtZW50IiwiYW5jZXN0b3JWZXJ0ZXhOYW1lcyIsImFuY2VzdG9yVmVydGV4TmFtZSIsImFuY2VzdG9yVmVydGV4RXhpc3RzIiwidmVydGV4TmFtZU1hcEtleXMiLCJP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LENBRGhCOztBQUdBLFFBQUksQ0FBQ3BFLE9BQUwsRUFBYztBQUFFO0FBQ2QsYUFBTyxJQUFQO0FBQ0Q7QUFDRixHQVBEO0FBUUQiLCJmaWxlIjoiZGlyZWN0ZWRHcmFwaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3Qga2FobiA9IHJlcXVpcmUoJ29jY2FtLWthaG4nKSxcbiAgICAgIG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpLFxuICAgICAgcGVhcmNla2VsbHkgPSByZXF1aXJlKCdvY2NhbS1wZWFyY2Uta2VsbHknKTtcblxuY29uc3QgRWRnZSA9IHJlcXVpcmUoJy4vZWRnZScpLFxuICAgICAgQ3ljbGUgPSByZXF1aXJlKCcuL2N5Y2xlJyksXG4gICAgICBQYXJ0aWFsQ3ljbGUgPSByZXF1aXJlKCcuL3BhcnRpYWxDeWNsZScpLFxuICAgICAgdmVydGV4VXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvdmVydGV4Jyk7XG5cbmNvbnN0IHsgR3JhcGggfSA9IGthaG4sXG4gICAgICB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IERpcmVjdGVkQWN5Y2xpY0dyYXBoIH0gPSBwZWFyY2VrZWxseSxcbiAgICAgIHsgZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoIH0gPSB2ZXJ0ZXhVdGlsaXRpZXMsXG4gICAgICB7IGZpcnN0LCBzZWNvbmQsIGZpbHRlciwgcHJ1bmUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jb25zdCByZW1vdmUgPSBwcnVuZTsgIC8vL1xuXG5jbGFzcyBEaXJlY3RlZEdyYXBoIHtcbiAgY29uc3RydWN0b3IoY3ljbGljRWRnZXMsIGRpcmVjdGVkQWN5Y2xpY0dyYXBoKSB7XG4gICAgdGhpcy5jeWNsaWNFZGdlcyA9IGN5Y2xpY0VkZ2VzO1xuICAgIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGggPSBkaXJlY3RlZEFjeWNsaWNHcmFwaDtcbiAgfVxuICBcbiAgYXJlQ3ljbGVzUHJlc2VudEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgZmlyc3RDeWNsZSA9IHRoaXMuZ2V0Rmlyc3RDeWNsZUJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSxcbiAgICAgICAgICBjeWNsZXNQcmVzZW50ID0gKGZpcnN0Q3ljbGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGN5Y2xlc1ByZXNlbnQ7XG4gIH1cblxuICBnZXRGaXJzdEN5Y2xlQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBsZXQgZmlyc3RDeWNsZSA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgdmVydGV4ID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSksXG4gICAgICAgICAgY3ljbGljRWRnZXMgPSB0aGlzLmN5Y2xpY0VkZ2VzLnNsaWNlKCksIC8vL1xuICAgICAgICAgIHBhcnRpYWxDeWNsZXMgPSBbXSxcbiAgICAgICAgICBjeWNsZXMgPSBbXTtcblxuICAgIGZvcndhcmRzRGVwdGhGaXJzdFNlYXJjaCh2ZXJ0ZXgsIGZ1bmN0aW9uKHZpc2l0ZWRWZXJ0ZXgsIGdldFByZWRlY2Vzc29yVmVydGljZXMpIHtcbiAgICAgIGNvbnN0IHZpc2l0ZWRWZXJ0ZXhOYW1lID0gdmlzaXRlZFZlcnRleC5nZXROYW1lKCksXG4gICAgICAgICAgICBzb3VyY2VWZXJ0ZXhOYW1lID0gdmlzaXRlZFZlcnRleE5hbWU7IC8vL1xuXG4gICAgICBmaWx0ZXIoY3ljbGljRWRnZXMsIGZ1bmN0aW9uKGN5Y2xpY0VkZ2UpIHtcbiAgICAgICAgY29uc3QgbWF0Y2hlcyA9IGN5Y2xpY0VkZ2UubWF0Y2hTb3VyY2VWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpO1xuXG4gICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgY29uc3QgcHJlZGVjZXNzb3JWZXJ0aWNlcyA9IGdldFByZWRlY2Vzc29yVmVydGljZXMoKSxcbiAgICAgICAgICAgICAgICBwYXJ0aWFsQ3ljbGUgPSAgUGFydGlhbEN5Y2xlLmZyb21DeWNsaWNFZGdlQW5kUHJlZGVjZXNzb3JWZXJ0aWNlcyhjeWNsaWNFZGdlLCBwcmVkZWNlc3NvclZlcnRpY2VzKTtcbiAgICAgICAgICBcbiAgICAgICAgICBwYXJ0aWFsQ3ljbGVzLnB1c2gocGFydGlhbEN5Y2xlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGN5Y2xpY0VkZ2VzTGVuZ3RoID0gY3ljbGljRWRnZXMubGVuZ3RoLFxuICAgICAgICAgICAgdGVybWluYXRlID0gKGN5Y2xpY0VkZ2VzTGVuZ3RoID09PSAwKTtcblxuICAgICAgcmV0dXJuIHRlcm1pbmF0ZTtcbiAgICB9KTtcblxuICAgIHBhcnRpYWxDeWNsZXMuc29tZSgocGFydGlhbEN5Y2xlKSA9PiB7XG4gICAgICBjb25zdCB0YXJnZXRWZXJ0ZXhOYW1lID0gcGFydGlhbEN5Y2xlLmdldFRhcmdldFZlcnRleE5hbWUoKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgICBmb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2godGFyZ2V0VmVydGV4LCBmdW5jdGlvbih2aXNpdGVkVmVydGV4LCBnZXRQcmVkZWNlc3NvclZlcnRpY2VzKSB7XG4gICAgICAgIGNvbnN0IHZpc2l0ZWRWZXJ0ZXhOYW1lID0gdmlzaXRlZFZlcnRleC5nZXROYW1lKCk7XG5cbiAgICAgICAgaWYgKHZpc2l0ZWRWZXJ0ZXhOYW1lID09PSB2ZXJ0ZXhOYW1lKSB7XG4gICAgICAgICAgY29uc3QgcHJlZGVjZXNzb3JWZXJ0aWNlcyA9IGdldFByZWRlY2Vzc29yVmVydGljZXMoKSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzb3JWZXJ0aWNlcyA9IHByZWRlY2Vzc29yVmVydGljZXMsICAvLy9cbiAgICAgICAgICAgICAgICBjeWNsZSA9IEN5Y2xlLmZyb21WZXJ0ZXhOYW1lUGFydGlhbEN5Y2xlQW5kU3VjY2Vzc29yVmVydGljZXModmVydGV4TmFtZSwgcGFydGlhbEN5Y2xlLCBzdWNjZXNzb3JWZXJ0aWNlcyk7XG5cbiAgICAgICAgICBjeWNsZXMucHVzaChjeWNsZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjeWNsZXNMZW5ndGggPSBjeWNsZXMubGVuZ3RoLFxuICAgICAgICAgICAgICB0ZXJtaW5hdGUgPSAoY3ljbGVzTGVuZ3RoID4gMCk7XG5cbiAgICAgICAgcmV0dXJuIHRlcm1pbmF0ZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY3ljbGVzTGVuZ3RoID0gY3ljbGVzLmxlbmd0aDtcbiAgICBcbiAgICBpZiAoY3ljbGVzTGVuZ3RoID4gMCkge1xuICAgICAgZmlyc3RDeWNsZSA9IGZpcnN0KGN5Y2xlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpcnN0Q3ljbGU7XG4gIH1cblxuICBhZGRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSkgeyB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmFkZFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTsgfVxuXG4gIHJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5yZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICB0aGlzLmZpbHRlckN5Y2xpY0VkZ2VzKCk7XG4gIH1cblxuICBhZGRFZGdlKGVkZ2UpIHtcbiAgICBjb25zdCBzdWNjZXNzID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5hZGRFZGdlKGVkZ2UpO1xuICAgIFxuICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgY29uc3QgY3ljbGljRWRnZXNJbmNsdWRlc0VkZ2UgPSBjaGVja0VkZ2VzSW5jbHVkZXNFZGdlKGVkZ2UsIHRoaXMuY3ljbGljRWRnZXMpO1xuXG4gICAgICBpZiAoIWN5Y2xpY0VkZ2VzSW5jbHVkZXNFZGdlKSB7XG4gICAgICAgIGNvbnN0IGN5Y2xpY0VkZ2UgPSBlZGdlOyAgLy8vXG5cbiAgICAgICAgdGhpcy5jeWNsaWNFZGdlcy5wdXNoKGN5Y2xpY0VkZ2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgYWRkRWRnZXMoZWRnZXMpIHtcbiAgICBlZGdlcy5mb3JFYWNoKChlZGdlKSA9PiB7XG4gICAgICB0aGlzLmFkZEVkZ2UoZWRnZSk7XG4gICAgfSk7XG4gIH1cblxuICByZW1vdmVFZGdlKGVkZ2UsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMgPSBmYWxzZSkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VzSW5jbHVkZXNFZGdlID0gY2hlY2tFZGdlc0luY2x1ZGVzRWRnZShlZGdlLCB0aGlzLmN5Y2xpY0VkZ2VzKSxcbiAgICAgICAgICBlZGdlQ3ljbGljID0gY3ljbGljRWRnZXNJbmNsdWRlc0VkZ2UsIC8vL1xuICAgICAgICAgIGVkZ2VQcmVzZW50ID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5pc0VkZ2VQcmVzZW50KGVkZ2UpO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKGVkZ2VDeWNsaWMpIHtcbiAgICAgIGNvbnN0IGN5Y2xpY0VkZ2UgPSBlZGdlOyAgLy8vXG5cbiAgICAgIHJlbW92ZUVkZ2VGcm9tRWRnZXMoY3ljbGljRWRnZSwgdGhpcy5jeWNsaWNFZGdlcyk7XG4gICAgfSBlbHNlIGlmIChlZGdlUHJlc2VudCkge1xuICAgICAgdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5yZW1vdmVFZGdlKGVkZ2UpO1xuICAgIH1cblxuICAgIGlmIChyZW1vdmVTdHJhbmRlZFZlcnRpY2VzKSB7XG4gICAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gZWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gZWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICBzb3VyY2VWZXJ0ZXggPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldFZlcnRleEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpLFxuICAgICAgICAgICAgc291cmNlVmVydGV4U3RyYW5kZWQgPSBzb3VyY2VWZXJ0ZXguaXNTdHJhbmRlZCgpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4U3RyYW5kZWQgPSB0YXJnZXRWZXJ0ZXguaXNTdHJhbmRlZCgpO1xuXG4gICAgICBpZiAoc291cmNlVmVydGV4U3RyYW5kZWQpIHtcbiAgICAgICAgdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5yZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0YXJnZXRWZXJ0ZXhTdHJhbmRlZCkge1xuICAgICAgICB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLnJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmZpbHRlckN5Y2xpY0VkZ2VzKCk7XG4gIH1cblxuICByZW1vdmVFZGdlcyhlZGdlcywgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyA9IGZhbHNlKSB7XG4gICAgZWRnZXMuZm9yRWFjaCgoZWRnZSkgPT4ge1xuICAgICAgdGhpcy5yZW1vdmVFZGdlKGVkZ2UsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMpO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkRWRnZUJ5VmVydGV4TmFtZXMoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSkge1xuICAgIGNvbnN0IGVkZ2UgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgIHRoaXMuYWRkRWRnZShlZGdlKTtcbiAgfVxuXG4gIHJlbW92ZUVkZ2VCeVZlcnRleE5hbWVzKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMgPSBmYWxzZSkge1xuICAgIGNvbnN0IGVkZ2UgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgIHRoaXMucmVtb3ZlRWRnZShlZGdlLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzKTtcbiAgfVxuXG4gIHJlbW92ZUFsbEVkZ2VzQW5kVmVydGljZXMoKSB7XG4gICAgdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaCA9IERpcmVjdGVkQWN5Y2xpY0dyYXBoLmZyb21Ob3RoaW5nKCk7XG5cbiAgICB0aGlzLmN5Y2xpY0VkZ2VzID0gW107XG4gIH1cblxuICBmaWx0ZXJDeWNsaWNFZGdlcygpIHtcbiAgICBmaWx0ZXIodGhpcy5jeWNsaWNFZGdlcywgKGN5Y2xpY0VkZ2UpID0+IHtcbiAgICAgIGNvbnN0IGVkZ2UgPSBjeWNsaWNFZGdlLCAgLy8vXG4gICAgICAgICAgICBzdWNjZXNzID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5hZGRFZGdlKGVkZ2UpO1xuXG4gICAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgY3ljbGljRWRnZXMgPSBbXSxcbiAgICAgICAgICBkaXJlY3RlZEFjeWNsaWNHcmFwaCA9IERpcmVjdGVkQWN5Y2xpY0dyYXBoLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgZGlyZWN0ZWRHcmFwaCA9IG5ldyBEaXJlY3RlZEdyYXBoKGN5Y2xpY0VkZ2VzLCBkaXJlY3RlZEFjeWNsaWNHcmFwaCk7XG4gICAgXG4gICAgcmV0dXJuIGRpcmVjdGVkR3JhcGg7ICAgIFxuICB9XG5cbiAgc3RhdGljIGZyb21WZXJ0ZXhMaXRlcmFscyh2ZXJ0ZXhMaXRlcmFscykge1xuICAgIGNvbnN0IHZlcnRleE5hbWVzID0gdmVydGV4TmFtZXNGcm9tVmVydGV4TGl0ZXJhbHModmVydGV4TGl0ZXJhbHMpLFxuICAgICAgICAgIGVkZ2VzID0gZWRnZXNGcm9tVmVydGV4TGl0ZXJhbHModmVydGV4TGl0ZXJhbHMpLFxuICAgICAgICAgIGRpcmVjdGVkR3JhcGggPSBEaXJlY3RlZEdyYXBoLmZyb21WZXJ0ZXhOYW1lc0FuZEVkZ2VzKHZlcnRleE5hbWVzLCBlZGdlcyk7XG5cbiAgICByZXR1cm4gZGlyZWN0ZWRHcmFwaDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmVydGV4TmFtZXNBbmRFZGdlcyh2ZXJ0ZXhOYW1lcywgZWRnZXMpIHtcbiAgICBsZXQgZGlyZWN0ZWRHcmFwaDtcblxuICAgIGNvbnN0IGdyYXBoID0gR3JhcGguZnJvbVZlcnRleE5hbWVzQW5kRWRnZXModmVydGV4TmFtZXMsIGVkZ2VzKSxcbiAgICAgICAgICBjeWNsZXNQcmVzZW50ID0gZ3JhcGguYXJlQ3ljbGVzUHJlc2VudCgpO1xuXG4gICAgaWYgKGN5Y2xlc1ByZXNlbnQpIHtcbiAgICAgIGNvbnN0IGN5Y2xpY0VkZ2VzID0gW10sXG4gICAgICAgICAgICBkaXJlY3RlZEFjeWNsaWNHcmFwaCA9IERpcmVjdGVkQWN5Y2xpY0dyYXBoLmZyb21WZXJ0ZXhOYW1lcyh2ZXJ0ZXhOYW1lcyk7XG5cbiAgICAgIGRpcmVjdGVkR3JhcGggPSBuZXcgRGlyZWN0ZWRHcmFwaChjeWNsaWNFZGdlcywgZGlyZWN0ZWRBY3ljbGljR3JhcGgpO1xuXG4gICAgICBlZGdlcy5mb3JFYWNoKGZ1bmN0aW9uKGVkZ2UpIHtcbiAgICAgICAgZGlyZWN0ZWRHcmFwaC5hZGRFZGdlKGVkZ2UpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRvcG9sb2dpY2FsbHlPcmRlcmVkVmVydGljZXMgPSBncmFwaC5nZXRUb3BvbG9naWNhbGx5T3JkZXJlZFZlcnRpY2VzKCksXG4gICAgICAgICAgICBjeWNsaWNFZGdlcyA9IFtdLFxuICAgICAgICAgICAgZGlyZWN0ZWRBY3ljbGljR3JhcGggPSBEaXJlY3RlZEFjeWNsaWNHcmFwaC5mcm9tVG9wb2xvZ2ljYWxseU9yZGVyZWRWZXJ0aWNlcyh0b3BvbG9naWNhbGx5T3JkZXJlZFZlcnRpY2VzKTtcblxuICAgICAgZGlyZWN0ZWRHcmFwaCA9IG5ldyBEaXJlY3RlZEdyYXBoKGN5Y2xpY0VkZ2VzLCBkaXJlY3RlZEFjeWNsaWNHcmFwaCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdGVkR3JhcGg7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEaXJlY3RlZEdyYXBoO1xuXG5mdW5jdGlvbiB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhMaXRlcmFscyh2ZXJ0ZXhMaXRlcmFscykge1xuICBjb25zdCB2ZXJ0ZXhOYW1lTWFwID0ge307XG5cbiAgdmVydGV4TGl0ZXJhbHMuZm9yRWFjaChmdW5jdGlvbih2ZXJ0ZXhMaXRlcmFsKSB7XG4gICAgY29uc3QgZmlyc3RWZXJ0ZXhMaXRlcmFsRWxlbWVudCA9IGZpcnN0KHZlcnRleExpdGVyYWwpLFxuICAgICAgICAgIHZlcnRleE5hbWUgPSBmaXJzdFZlcnRleExpdGVyYWxFbGVtZW50LCAvLy9cbiAgICAgICAgICB2ZXJ0ZXhFeGlzdHMgPSB2ZXJ0ZXhOYW1lTWFwLmhhc093blByb3BlcnR5KHZlcnRleE5hbWUpO1xuXG4gICAgaWYgKCF2ZXJ0ZXhFeGlzdHMpIHtcbiAgICAgIHZlcnRleE5hbWVNYXBbdmVydGV4TmFtZV0gPSB2ZXJ0ZXhOYW1lO1xuICAgIH1cblxuICAgIGNvbnN0IHNlY29uZFZlcnRleExpdGVyYWxFbGVtZW50ID0gc2Vjb25kKHZlcnRleExpdGVyYWwpLFxuICAgICAgICAgIGFuY2VzdG9yVmVydGV4TmFtZXMgPSBzZWNvbmRWZXJ0ZXhMaXRlcmFsRWxlbWVudDsgLy8vXG5cbiAgICBhbmNlc3RvclZlcnRleE5hbWVzLmZvckVhY2goZnVuY3Rpb24oYW5jZXN0b3JWZXJ0ZXhOYW1lKSB7XG4gICAgICBjb25zdCBhbmNlc3RvclZlcnRleEV4aXN0cyA9IHZlcnRleE5hbWVNYXAuaGFzT3duUHJvcGVydHkoYW5jZXN0b3JWZXJ0ZXhOYW1lKTtcblxuICAgICAgaWYgKCFhbmNlc3RvclZlcnRleEV4aXN0cykge1xuICAgICAgICB2ZXJ0ZXhOYW1lTWFwW2FuY2VzdG9yVmVydGV4TmFtZV0gPSBhbmNlc3RvclZlcnRleE5hbWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIGNvbnN0IHZlcnRleE5hbWVNYXBLZXlzID0gT2JqZWN0LmtleXModmVydGV4TmFtZU1hcCksXG4gICAgICAgIHZlcnRleE5hbWVzID0gdmVydGV4TmFtZU1hcEtleXM7ICAvLy9cblxuICByZXR1cm4gdmVydGV4TmFtZXM7XG59XG5cbmZ1bmN0aW9uIGVkZ2VzRnJvbVZlcnRleExpdGVyYWxzKHZlcnRleExpdGVyYWxzKSB7XG4gIGNvbnN0IGVkZ2VzID0gW107XG5cbiAgdmVydGV4TGl0ZXJhbHMuZm9yRWFjaChmdW5jdGlvbih2ZXJ0ZXhMaXRlcmFsKSB7XG4gICAgY29uc3QgZmlyc3RWZXJ0ZXhMaXRlcmFsRWxlbWVudCA9IGZpcnN0KHZlcnRleExpdGVyYWwpLFxuICAgICAgICAgIHNlY29uZFZlcnRleExpdGVyYWxFbGVtZW50ID0gc2Vjb25kKHZlcnRleExpdGVyYWwpLFxuICAgICAgICAgIGFuY2VzdG9yVmVydGV4TmFtZXMgPSBzZWNvbmRWZXJ0ZXhMaXRlcmFsRWxlbWVudCwgLy8vXG4gICAgICAgICAgdmVydGV4TmFtZSA9IGZpcnN0VmVydGV4TGl0ZXJhbEVsZW1lbnQ7IC8vL1xuXG4gICAgYW5jZXN0b3JWZXJ0ZXhOYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKGFuY2VzdG9yVmVydGV4TmFtZSkge1xuICAgICAgY29uc3Qgc291cmNlVmVydGV4TmFtZSA9IGFuY2VzdG9yVmVydGV4TmFtZSwgLy8vXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gdmVydGV4TmFtZSwgIC8vL1xuICAgICAgICAgICAgZWRnZSA9IG5ldyBFZGdlKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgICBlZGdlcy5wdXNoKGVkZ2UpO1xuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gZWRnZXM7XG59XG5cbmZ1bmN0aW9uIGNoZWNrRWRnZXNJbmNsdWRlc0VkZ2UoZWRnZSwgZWRnZXMpIHtcbiAgY29uc3QgZWRnZTEgPSBlZGdlLCAvLy9cbiAgICAgICAgZWRnZXNJbmNsdWRlc0VkZ2UgPSBlZGdlcy5zb21lKGZ1bmN0aW9uKGVkZ2UpIHtcbiAgICAgICAgICBjb25zdCBlZGdlMiA9IGVkZ2UsIC8vL1xuICAgICAgICAgICAgICAgIG1hdGNoZXMgPSBlZGdlMS5tYXRjaChlZGdlMik7XG5cbiAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICByZXR1cm4gZWRnZXNJbmNsdWRlc0VkZ2U7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUVkZ2VGcm9tRWRnZXMoZWRnZSwgZWRnZXMpIHtcbiAgY29uc3QgZWRnZTEgPSBlZGdlOyAvLy9cblxuICByZW1vdmUoZWRnZXMsIGZ1bmN0aW9uKGVkZ2UpIHtcbiAgICBjb25zdCBlZGdlMiA9IGVkZ2UsIC8vL1xuICAgICAgICAgIG1hdGNoZXMgPSBlZGdlMS5tYXRjaChlZGdlMik7XG5cbiAgICBpZiAoIW1hdGNoZXMpIHsgLy8vXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xufVxuIl19