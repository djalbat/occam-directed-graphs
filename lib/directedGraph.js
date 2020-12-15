"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamKahn = require("occam-kahn");

var _necessary = require("necessary");

var _occamPearceKelly = require("occam-pearce-kelly");

var _edge = _interopRequireDefault(require("./edge"));

var _cycle = _interopRequireDefault(require("./cycle"));

var _partialCycle = _interopRequireDefault(require("./partialCycle"));

var _vertex = require("./utilities/vertex");

var _edge2 = require("./utilities/edge");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var first = _necessary.arrayUtilities.first,
    filter = _necessary.arrayUtilities.filter;

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
    key: "getImmediatePredecessorVertexNamesByVertexName",
    value: function getImmediatePredecessorVertexNamesByVertexName(vertexName) {
      var includeCycles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var immediatePredecessorVertexNames = this.directedAcyclicGraph.getImmediatePredecessorVertexNamesByVertexName(vertexName);

      if (includeCycles) {
        this.cyclicEdges.forEach(function (cyclicEdge) {
          var cyclicEdgeTargetVertexName = cyclicEdge.getTargetVertexName();

          if (cyclicEdgeTargetVertexName === vertexName) {
            var cyclicEdgeSourceVertexName = cyclicEdge.getSourceVertexName(),
                immediatePredecessorVertexName = cyclicEdgeSourceVertexName; ///

            immediatePredecessorVertexNames.push(immediatePredecessorVertexName);
          }
        });
      }

      return immediatePredecessorVertexNames;
    }
  }, {
    key: "getImmediateSuccessorVertexNamesByVertexName",
    value: function getImmediateSuccessorVertexNamesByVertexName(vertexName) {
      var includeCycles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var immediateSuccessorVertexNames = this.directedAcyclicGraph.getImmediateSuccessorVertexNamesByVertexName(vertexName);

      if (includeCycles) {
        this.cyclicEdges.forEach(function (cyclicEdge) {
          var cyclicEdgeSourceVertexName = cyclicEdge.getSourceVertexName();

          if (cyclicEdgeSourceVertexName === vertexName) {
            var cyclicEdgeTargetVertexName = cyclicEdge.getTargetVertexName(),
                immediateSuccessorVertexName = cyclicEdgeTargetVertexName; ///

            immediateSuccessorVertexNames.push(immediateSuccessorVertexName);
          }
        });
      }

      return immediateSuccessorVertexNames;
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
      (0, _vertex.forwardsDepthFirstSearch)(vertex, function (visitedVertex, getPredecessorVertices) {
        var visitedVertexName = visitedVertex.getName(),
            sourceVertexName = visitedVertexName; ///

        filter(cyclicEdges, function (cyclicEdge) {
          var matches = cyclicEdge.matchSourceVertexName(sourceVertexName);

          if (matches) {
            var predecessorVertices = getPredecessorVertices(),
                partialCycle = _partialCycle["default"].fromCyclicEdgeAndPredecessorVertices(cyclicEdge, predecessorVertices);

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

        (0, _vertex.forwardsDepthFirstSearch)(targetVertex, function (visitedVertex, getPredecessorVertices) {
          var visitedVertexName = visitedVertex.getName();

          if (visitedVertexName === vertexName) {
            var predecessorVertices = getPredecessorVertices(),
                successorVertices = predecessorVertices,
                ///
            cycle = _cycle["default"].fromVertexNamePartialCycleAndSuccessorVertices(vertexName, partialCycle, successorVertices);

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
        var cyclicEdgesIncludesEdge = (0, _edge2.checkEdgesIncludesEdge)(edge, this.cyclicEdges);

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
      var cyclicEdgesIncludesEdge = (0, _edge2.checkEdgesIncludesEdge)(edge, this.cyclicEdges),
          edgePresent = this.directedAcyclicGraph.isEdgePresent(edge),
          edgeCyclic = cyclicEdgesIncludesEdge; ///

      if (false) {///
      } else if (edgeCyclic) {
        var cyclicEdge = edge; ///

        (0, _edge2.removeEdgeFromEdges)(cyclicEdge, this.cyclicEdges);
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
      var edge = _edge["default"].fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);

      this.addEdge(edge);
    }
  }, {
    key: "removeEdgeByVertexNames",
    value: function removeEdgeByVertexNames(sourceVertexName, targetVertexName) {
      var removeStrandedVertices = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var edge = _edge["default"].fromSourceVertexNameAndTargetVertexName(sourceVertexName, targetVertexName);

      this.removeEdge(edge, removeStrandedVertices);
    }
  }, {
    key: "removeEdgesByTargetVertexName",
    value: function removeEdgesByTargetVertexName(targetVertexName) {
      var removeStrandedVertices = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var cyclicEdges = (0, _edge2.edgesByTargetVertexName)(targetVertexName, this.cyclicEdges),
          edges = this.directedAcyclicGraph.getEdgesByTargetVertexName(targetVertexName);
      this.removeEdges(cyclicEdges, removeStrandedVertices);
      this.removeEdges(edges, removeStrandedVertices);
    }
  }, {
    key: "removeEdgesBySourceVertexName",
    value: function removeEdgesBySourceVertexName(sourceVertexName) {
      var removeStrandedVertices = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var cyclicEdges = (0, _edge2.edgesBySourceVertexName)(sourceVertexName, this.cyclicEdges),
          edges = this.directedAcyclicGraph.getEdgesBySourceVertexName(sourceVertexName);
      this.removeEdges(cyclicEdges, removeStrandedVertices);
      this.removeEdges(edges, removeStrandedVertices);
    }
  }, {
    key: "removeAllEdgesAndVertices",
    value: function removeAllEdgesAndVertices() {
      this.directedAcyclicGraph = _occamPearceKelly.DirectedAcyclicGraph.fromNothing();
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
          directedAcyclicGraph = _occamPearceKelly.DirectedAcyclicGraph.fromNothing(),
          directedGraph = new DirectedGraph(cyclicEdges, directedAcyclicGraph);

      return directedGraph;
    }
  }, {
    key: "fromVertexLiterals",
    value: function fromVertexLiterals(vertexLiterals) {
      var vertexNames = (0, _vertex.vertexNamesFromVertexLiterals)(vertexLiterals),
          edges = (0, _edge2.edgesFromVertexLiterals)(vertexLiterals),
          directedGraph = DirectedGraph.fromVertexNamesAndEdges(vertexNames, edges);
      return directedGraph;
    }
  }, {
    key: "fromVertexNamesAndEdges",
    value: function fromVertexNamesAndEdges(vertexNames, edges) {
      var directedGraph;

      var graph = _occamKahn.Graph.fromVertexNamesAndEdges(vertexNames, edges),
          cyclesPresent = graph.areCyclesPresent();

      if (cyclesPresent) {
        var cyclicEdges = [],
            directedAcyclicGraph = _occamPearceKelly.DirectedAcyclicGraph.fromVertexNames(vertexNames);

        directedGraph = new DirectedGraph(cyclicEdges, directedAcyclicGraph);
        edges.forEach(function (edge) {
          return directedGraph.addEdge(edge);
        });
      } else {
        var topologicallyOrderedVertices = graph.getTopologicallyOrderedVertices(),
            _cyclicEdges = [],
            _directedAcyclicGraph = _occamPearceKelly.DirectedAcyclicGraph.fromTopologicallyOrderedVertices(topologicallyOrderedVertices);

        directedGraph = new DirectedGraph(_cyclicEdges, _directedAcyclicGraph);
      }

      return directedGraph;
    }
  }]);

  return DirectedGraph;
}();

exports["default"] = DirectedGraph;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpcmVjdGVkR3JhcGguanMiXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsImZpbHRlciIsIkRpcmVjdGVkR3JhcGgiLCJjeWNsaWNFZGdlcyIsImRpcmVjdGVkQWN5Y2xpY0dyYXBoIiwidmVydGV4TmFtZSIsImluY2x1ZGVDeWNsZXMiLCJpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzIiwiZ2V0SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSIsImZvckVhY2giLCJjeWNsaWNFZGdlIiwiY3ljbGljRWRnZVRhcmdldFZlcnRleE5hbWUiLCJnZXRUYXJnZXRWZXJ0ZXhOYW1lIiwiY3ljbGljRWRnZVNvdXJjZVZlcnRleE5hbWUiLCJnZXRTb3VyY2VWZXJ0ZXhOYW1lIiwiaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lIiwicHVzaCIsImltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzIiwiZ2V0SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUiLCJpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lIiwiZ2V0UHJlZGVjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSIsImdldFN1Y2Nlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lIiwiY3ljbGVzUHJlc2VudCIsInZlcnRleFByZXNlbnQiLCJpc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUiLCJmaXJzdEN5Y2xlIiwiZ2V0Rmlyc3RDeWNsZUJ5VmVydGV4TmFtZSIsInZlcnRleCIsImdldFZlcnRleEJ5VmVydGV4TmFtZSIsInNsaWNlIiwicGFydGlhbEN5Y2xlcyIsImN5Y2xlcyIsInZpc2l0ZWRWZXJ0ZXgiLCJnZXRQcmVkZWNlc3NvclZlcnRpY2VzIiwidmlzaXRlZFZlcnRleE5hbWUiLCJnZXROYW1lIiwic291cmNlVmVydGV4TmFtZSIsIm1hdGNoZXMiLCJtYXRjaFNvdXJjZVZlcnRleE5hbWUiLCJwcmVkZWNlc3NvclZlcnRpY2VzIiwicGFydGlhbEN5Y2xlIiwiUGFydGlhbEN5Y2xlIiwiZnJvbUN5Y2xpY0VkZ2VBbmRQcmVkZWNlc3NvclZlcnRpY2VzIiwiY3ljbGljRWRnZXNMZW5ndGgiLCJsZW5ndGgiLCJ0ZXJtaW5hdGUiLCJzb21lIiwidGFyZ2V0VmVydGV4TmFtZSIsInRhcmdldFZlcnRleCIsInN1Y2Nlc3NvclZlcnRpY2VzIiwiY3ljbGUiLCJDeWNsZSIsImZyb21WZXJ0ZXhOYW1lUGFydGlhbEN5Y2xlQW5kU3VjY2Vzc29yVmVydGljZXMiLCJjeWNsZXNMZW5ndGgiLCJmaXJzdEN5Y2xpY0VkZ2UiLCJnZXRUb3BvbG9naWNhbGx5T3JkZXJlZFZlcnRleE5hbWVzIiwiYWRkVmVydGV4QnlWZXJ0ZXhOYW1lIiwidmVydGV4TmFtZXMiLCJyZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUiLCJmaWx0ZXJDeWNsaWNFZGdlcyIsImVkZ2UiLCJzdWNjZXNzIiwiYWRkRWRnZSIsImN5Y2xpY0VkZ2VzSW5jbHVkZXNFZGdlIiwiZWRnZXMiLCJyZW1vdmVTdHJhbmRlZFZlcnRpY2VzIiwiZWRnZVByZXNlbnQiLCJpc0VkZ2VQcmVzZW50IiwiZWRnZUN5Y2xpYyIsInJlbW92ZUVkZ2UiLCJzb3VyY2VWZXJ0ZXgiLCJzb3VyY2VWZXJ0ZXhTdHJhbmRlZCIsImlzU3RyYW5kZWQiLCJ0YXJnZXRWZXJ0ZXhTdHJhbmRlZCIsIkVkZ2UiLCJmcm9tU291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUiLCJnZXRFZGdlc0J5VGFyZ2V0VmVydGV4TmFtZSIsInJlbW92ZUVkZ2VzIiwiZ2V0RWRnZXNCeVNvdXJjZVZlcnRleE5hbWUiLCJEaXJlY3RlZEFjeWNsaWNHcmFwaCIsImZyb21Ob3RoaW5nIiwiZGlyZWN0ZWRHcmFwaCIsInZlcnRleExpdGVyYWxzIiwiZnJvbVZlcnRleE5hbWVzQW5kRWRnZXMiLCJncmFwaCIsIkdyYXBoIiwiYXJlQ3ljbGVzUHJlc2VudCIsImZyb21WZXJ0ZXhOYW1lcyIsInRvcG9sb2dpY2FsbHlPcmRlcmVkVmVydGljZXMiLCJnZXRUb3BvbG9naWNhbGx5T3JkZXJlZFZlcnRpY2VzIiwiZnJvbVRvcG9sb2dpY2FsbHlPcmRlcmVkVmVydGljZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7SUFFUUEsSyxHQUFrQkMseUIsQ0FBbEJELEs7SUFBT0UsTSxHQUFXRCx5QixDQUFYQyxNOztJQUVNQyxhO0FBQ25CLHlCQUFZQyxXQUFaLEVBQXlCQyxvQkFBekIsRUFBK0M7QUFBQTs7QUFDN0MsU0FBS0QsV0FBTCxHQUFtQkEsV0FBbkI7QUFFQSxTQUFLQyxvQkFBTCxHQUE0QkEsb0JBQTVCO0FBQ0Q7Ozs7cUNBRWdCO0FBQ2YsYUFBTyxLQUFLRCxXQUFaO0FBQ0Q7Ozs4Q0FFeUI7QUFDeEIsYUFBTyxLQUFLQyxvQkFBWjtBQUNEOzs7bUVBRThDQyxVLEVBQW1DO0FBQUEsVUFBdkJDLGFBQXVCLHVFQUFQLEtBQU87QUFDaEYsVUFBTUMsK0JBQStCLEdBQUcsS0FBS0gsb0JBQUwsQ0FBMEJJLDhDQUExQixDQUF5RUgsVUFBekUsQ0FBeEM7O0FBRUEsVUFBSUMsYUFBSixFQUFtQjtBQUNqQixhQUFLSCxXQUFMLENBQWlCTSxPQUFqQixDQUF5QixVQUFDQyxVQUFELEVBQWdCO0FBQ3ZDLGNBQU1DLDBCQUEwQixHQUFHRCxVQUFVLENBQUNFLG1CQUFYLEVBQW5DOztBQUVBLGNBQUlELDBCQUEwQixLQUFLTixVQUFuQyxFQUErQztBQUM3QyxnQkFBTVEsMEJBQTBCLEdBQUdILFVBQVUsQ0FBQ0ksbUJBQVgsRUFBbkM7QUFBQSxnQkFDTUMsOEJBQThCLEdBQUdGLDBCQUR2QyxDQUQ2QyxDQUV1Qjs7QUFFcEVOLFlBQUFBLCtCQUErQixDQUFDUyxJQUFoQyxDQUFxQ0QsOEJBQXJDO0FBQ0Q7QUFDRixTQVREO0FBVUQ7O0FBRUQsYUFBT1IsK0JBQVA7QUFDRDs7O2lFQUU0Q0YsVSxFQUFtQztB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dUNBQXFCVyxnQ0FBckIsQ0FBc0RGLDRCQUF0RCxDQUY3Qjs7QUFJQVAsUUFBQUEsYUFBYSxHQUFHLElBQUkvRSxhQUFKLENBQWtCQyxZQUFsQixFQUErQkMscUJBQS9CLENBQWhCO0FBQ0Q7O0FBRUQsYUFBTzZFLGFBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBHcmFwaCB9IGZyb20gXCJvY2NhbS1rYWhuXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IERpcmVjdGVkQWN5Y2xpY0dyYXBoIH0gZnJvbSBcIm9jY2FtLXBlYXJjZS1rZWxseVwiO1xuXG5pbXBvcnQgRWRnZSBmcm9tIFwiLi9lZGdlXCI7XG5pbXBvcnQgQ3ljbGUgZnJvbSBcIi4vY3ljbGVcIjtcbmltcG9ydCBQYXJ0aWFsQ3ljbGUgZnJvbSBcIi4vcGFydGlhbEN5Y2xlXCI7XG5cbmltcG9ydCB7IHZlcnRleE5hbWVzRnJvbVZlcnRleExpdGVyYWxzLCBmb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2ggfSBmcm9tIFwiLi91dGlsaXRpZXMvdmVydGV4XCI7XG5pbXBvcnQgeyBlZGdlc0Zyb21WZXJ0ZXhMaXRlcmFscywgY2hlY2tFZGdlc0luY2x1ZGVzRWRnZSwgcmVtb3ZlRWRnZUZyb21FZGdlcywgZWRnZXNCeVNvdXJjZVZlcnRleE5hbWUsIGVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2VkZ2VcIjtcblxuY29uc3QgeyBmaXJzdCwgZmlsdGVyIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0ZWRHcmFwaCB7XG4gIGNvbnN0cnVjdG9yKGN5Y2xpY0VkZ2VzLCBkaXJlY3RlZEFjeWNsaWNHcmFwaCkge1xuICAgIHRoaXMuY3ljbGljRWRnZXMgPSBjeWNsaWNFZGdlcztcblxuICAgIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGggPSBkaXJlY3RlZEFjeWNsaWNHcmFwaDtcbiAgfVxuXG4gIGdldEN5Y2xpY0VkZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLmN5Y2xpY0VkZ2VzO1xuICB9XG5cbiAgZ2V0RGlyZWN0ZWRBY3ljbGljR3JhcGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGg7XG4gIH1cblxuICBnZXRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUsIGluY2x1ZGVDeWNsZXMgPSBmYWxzZSkge1xuICAgIGNvbnN0IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMgPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICBpZiAoaW5jbHVkZUN5Y2xlcykge1xuICAgICAgdGhpcy5jeWNsaWNFZGdlcy5mb3JFYWNoKChjeWNsaWNFZGdlKSA9PiB7XG4gICAgICAgIGNvbnN0IGN5Y2xpY0VkZ2VUYXJnZXRWZXJ0ZXhOYW1lID0gY3ljbGljRWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCk7XG5cbiAgICAgICAgaWYgKGN5Y2xpY0VkZ2VUYXJnZXRWZXJ0ZXhOYW1lID09PSB2ZXJ0ZXhOYW1lKSB7XG4gICAgICAgICAgY29uc3QgY3ljbGljRWRnZVNvdXJjZVZlcnRleE5hbWUgPSBjeWNsaWNFZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSxcbiAgICAgICAgICAgICAgICBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWUgPSBjeWNsaWNFZGdlU291cmNlVmVydGV4TmFtZTsgIC8vL1xuXG4gICAgICAgICAgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcy5wdXNoKGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzO1xuICB9XG5cbiAgZ2V0SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUodmVydGV4TmFtZSwgaW5jbHVkZUN5Y2xlcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXMgPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgaWYgKGluY2x1ZGVDeWNsZXMpIHtcbiAgICAgIHRoaXMuY3ljbGljRWRnZXMuZm9yRWFjaCgoY3ljbGljRWRnZSkgPT4ge1xuICAgICAgICBjb25zdCBjeWNsaWNFZGdlU291cmNlVmVydGV4TmFtZSA9IGN5Y2xpY0VkZ2UuZ2V0U291cmNlVmVydGV4TmFtZSgpO1xuXG4gICAgICAgIGlmIChjeWNsaWNFZGdlU291cmNlVmVydGV4TmFtZSA9PT0gdmVydGV4TmFtZSkge1xuICAgICAgICAgIGNvbnN0IGN5Y2xpY0VkZ2VUYXJnZXRWZXJ0ZXhOYW1lID0gY3ljbGljRWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICAgICAgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZSA9IGN5Y2xpY0VkZ2VUYXJnZXRWZXJ0ZXhOYW1lOyAgLy8vXG5cbiAgICAgICAgICBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcy5wdXNoKGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXM7XG4gIH1cblxuICBnZXRQcmVkZWNlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHsgcmV0dXJuIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0UHJlZGVjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTsgfVxuXG4gIGdldFN1Y2Nlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHsgcmV0dXJuIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0U3VjY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7IH1cblxuICBhcmVDeWNsZXNQcmVzZW50QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBsZXQgY3ljbGVzUHJlc2VudCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdmVydGV4UHJlc2VudCA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgaWYgKHZlcnRleFByZXNlbnQpIHtcbiAgICAgIGNvbnN0IGZpcnN0Q3ljbGUgPSB0aGlzLmdldEZpcnN0Q3ljbGVCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICAgIGN5Y2xlc1ByZXNlbnQgPSAoZmlyc3RDeWNsZSAhPT0gbnVsbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGN5Y2xlc1ByZXNlbnQ7XG4gIH1cblxuICBpc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUodmVydGV4TmFtZSkgeyByZXR1cm4gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5pc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7IH1cblxuICBnZXRGaXJzdEN5Y2xlQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBsZXQgZmlyc3RDeWNsZSA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgdmVydGV4ID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSksXG4gICAgICAgICAgY3ljbGljRWRnZXMgPSB0aGlzLmN5Y2xpY0VkZ2VzLnNsaWNlKCksIC8vL1xuICAgICAgICAgIHBhcnRpYWxDeWNsZXMgPSBbXSxcbiAgICAgICAgICBjeWNsZXMgPSBbXTtcblxuICAgIGZvcndhcmRzRGVwdGhGaXJzdFNlYXJjaCh2ZXJ0ZXgsICh2aXNpdGVkVmVydGV4LCBnZXRQcmVkZWNlc3NvclZlcnRpY2VzKSA9PiB7XG4gICAgICBjb25zdCB2aXNpdGVkVmVydGV4TmFtZSA9IHZpc2l0ZWRWZXJ0ZXguZ2V0TmFtZSgpLFxuICAgICAgICAgICAgc291cmNlVmVydGV4TmFtZSA9IHZpc2l0ZWRWZXJ0ZXhOYW1lOyAvLy9cblxuICAgICAgZmlsdGVyKGN5Y2xpY0VkZ2VzLCAoY3ljbGljRWRnZSkgPT4ge1xuICAgICAgICBjb25zdCBtYXRjaGVzID0gY3ljbGljRWRnZS5tYXRjaFNvdXJjZVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSk7XG5cbiAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICBjb25zdCBwcmVkZWNlc3NvclZlcnRpY2VzID0gZ2V0UHJlZGVjZXNzb3JWZXJ0aWNlcygpLFxuICAgICAgICAgICAgICAgIHBhcnRpYWxDeWNsZSA9ICBQYXJ0aWFsQ3ljbGUuZnJvbUN5Y2xpY0VkZ2VBbmRQcmVkZWNlc3NvclZlcnRpY2VzKGN5Y2xpY0VkZ2UsIHByZWRlY2Vzc29yVmVydGljZXMpO1xuICAgICAgICAgIFxuICAgICAgICAgIHBhcnRpYWxDeWNsZXMucHVzaChwYXJ0aWFsQ3ljbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgY3ljbGljRWRnZXNMZW5ndGggPSBjeWNsaWNFZGdlcy5sZW5ndGgsXG4gICAgICAgICAgICB0ZXJtaW5hdGUgPSAoY3ljbGljRWRnZXNMZW5ndGggPT09IDApO1xuXG4gICAgICByZXR1cm4gdGVybWluYXRlO1xuICAgIH0pO1xuXG4gICAgcGFydGlhbEN5Y2xlcy5zb21lKChwYXJ0aWFsQ3ljbGUpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldFZlcnRleE5hbWUgPSBwYXJ0aWFsQ3ljbGUuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICAgIGZvcndhcmRzRGVwdGhGaXJzdFNlYXJjaCh0YXJnZXRWZXJ0ZXgsICh2aXNpdGVkVmVydGV4LCBnZXRQcmVkZWNlc3NvclZlcnRpY2VzKSA9PiB7XG4gICAgICAgIGNvbnN0IHZpc2l0ZWRWZXJ0ZXhOYW1lID0gdmlzaXRlZFZlcnRleC5nZXROYW1lKCk7XG5cbiAgICAgICAgaWYgKHZpc2l0ZWRWZXJ0ZXhOYW1lID09PSB2ZXJ0ZXhOYW1lKSB7XG4gICAgICAgICAgY29uc3QgcHJlZGVjZXNzb3JWZXJ0aWNlcyA9IGdldFByZWRlY2Vzc29yVmVydGljZXMoKSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzb3JWZXJ0aWNlcyA9IHByZWRlY2Vzc29yVmVydGljZXMsICAvLy9cbiAgICAgICAgICAgICAgICBjeWNsZSA9IEN5Y2xlLmZyb21WZXJ0ZXhOYW1lUGFydGlhbEN5Y2xlQW5kU3VjY2Vzc29yVmVydGljZXModmVydGV4TmFtZSwgcGFydGlhbEN5Y2xlLCBzdWNjZXNzb3JWZXJ0aWNlcyk7XG5cbiAgICAgICAgICBjeWNsZXMucHVzaChjeWNsZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjeWNsZXNMZW5ndGggPSBjeWNsZXMubGVuZ3RoLFxuICAgICAgICAgICAgICB0ZXJtaW5hdGUgPSAoY3ljbGVzTGVuZ3RoID4gMCk7XG5cbiAgICAgICAgcmV0dXJuIHRlcm1pbmF0ZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY3ljbGVzTGVuZ3RoID0gY3ljbGVzLmxlbmd0aDtcbiAgICBcbiAgICBpZiAoY3ljbGVzTGVuZ3RoID4gMCkge1xuICAgICAgZmlyc3RDeWNsZSA9IGZpcnN0KGN5Y2xlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpcnN0Q3ljbGU7XG4gIH1cblxuICBnZXRGaXJzdEN5Y2xlKCkge1xuICAgIGNvbnN0IGZpcnN0Q3ljbGljRWRnZSA9IGZpcnN0KHRoaXMuY3ljbGljRWRnZXMpLFxuICAgICAgICAgIGN5Y2xpY0VkZ2UgPSBmaXJzdEN5Y2xpY0VkZ2UsIC8vL1xuICAgICAgICAgIHNvdXJjZVZlcnRleE5hbWUgPSBjeWNsaWNFZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSxcbiAgICAgICAgICB2ZXJ0ZXhOYW1lID0gc291cmNlVmVydGV4TmFtZSwgIC8vL1xuICAgICAgICAgIGZpcnN0Q3ljbGUgPSB0aGlzLmdldEZpcnN0Q3ljbGVCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICByZXR1cm4gZmlyc3RDeWNsZTtcbiAgfVxuXG4gIGdldFRvcG9sb2dpY2FsbHlPcmRlcmVkVmVydGV4TmFtZXMoKSB7IHJldHVybiB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldFRvcG9sb2dpY2FsbHlPcmRlcmVkVmVydGV4TmFtZXMoKTsgfVxuXG4gIGFyZUN5Y2xlc1ByZXNlbnQoKSB7XG4gICAgY29uc3QgY3ljbGljRWRnZXNMZW5ndGggPSB0aGlzLmN5Y2xpY0VkZ2VzLmxlbmd0aCxcbiAgICAgICAgICBjeWNsZXNQcmVzZW50ID0gKGN5Y2xpY0VkZ2VzTGVuZ3RoID4gMCk7XG5cbiAgICByZXR1cm4gY3ljbGVzUHJlc2VudDtcbiAgfVxuXG4gIGFkZFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguYWRkVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpOyB9XG5cbiAgYWRkVmVydGljZXNCeVZlcnRleE5hbWVzKHZlcnRleE5hbWVzKSB7XG4gICAgdmVydGV4TmFtZXMuZm9yRWFjaCgodmVydGV4TmFtZSkgPT4gdGhpcy5hZGRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSkpO1xuICB9XG5cbiAgcmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLnJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgIHRoaXMuZmlsdGVyQ3ljbGljRWRnZXMoKTtcbiAgfVxuXG4gIHJlbW92ZVZlcnRpY2VzQnlWZXJ0ZXhOYW1lcyh2ZXJ0ZXhOYW1lcykge1xuICAgIHZlcnRleE5hbWVzLmZvckVhY2goKHZlcnRleE5hbWUpID0+IHRoaXMucmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpKTtcbiAgfVxuXG4gIGFkZEVkZ2UoZWRnZSkge1xuICAgIGNvbnN0IHN1Y2Nlc3MgPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmFkZEVkZ2UoZWRnZSk7XG4gICAgXG4gICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICBjb25zdCBjeWNsaWNFZGdlc0luY2x1ZGVzRWRnZSA9IGNoZWNrRWRnZXNJbmNsdWRlc0VkZ2UoZWRnZSwgdGhpcy5jeWNsaWNFZGdlcyk7XG5cbiAgICAgIGlmICghY3ljbGljRWRnZXNJbmNsdWRlc0VkZ2UpIHtcbiAgICAgICAgY29uc3QgY3ljbGljRWRnZSA9IGVkZ2U7ICAvLy9cblxuICAgICAgICB0aGlzLmN5Y2xpY0VkZ2VzLnB1c2goY3ljbGljRWRnZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICBhZGRFZGdlcyhlZGdlcykge1xuICAgIGVkZ2VzLmZvckVhY2goKGVkZ2UpID0+IHRoaXMuYWRkRWRnZShlZGdlKSk7XG4gIH1cblxuICByZW1vdmVFZGdlKGVkZ2UsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMgPSBmYWxzZSkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VzSW5jbHVkZXNFZGdlID0gY2hlY2tFZGdlc0luY2x1ZGVzRWRnZShlZGdlLCB0aGlzLmN5Y2xpY0VkZ2VzKSxcbiAgICAgICAgICBlZGdlUHJlc2VudCA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguaXNFZGdlUHJlc2VudChlZGdlKSxcbiAgICAgICAgICBlZGdlQ3ljbGljID0gY3ljbGljRWRnZXNJbmNsdWRlc0VkZ2U7IC8vL1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKGVkZ2VDeWNsaWMpIHtcbiAgICAgIGNvbnN0IGN5Y2xpY0VkZ2UgPSBlZGdlOyAgLy8vXG5cbiAgICAgIHJlbW92ZUVkZ2VGcm9tRWRnZXMoY3ljbGljRWRnZSwgdGhpcy5jeWNsaWNFZGdlcyk7XG4gICAgfSBlbHNlIGlmIChlZGdlUHJlc2VudCkge1xuICAgICAgdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5yZW1vdmVFZGdlKGVkZ2UpO1xuXG4gICAgICBpZiAocmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcykge1xuICAgICAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gZWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICAgIHRhcmdldFZlcnRleE5hbWUgPSBlZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKSxcbiAgICAgICAgICAgICAgc291cmNlVmVydGV4ID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSksXG4gICAgICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpLFxuICAgICAgICAgICAgICBzb3VyY2VWZXJ0ZXhTdHJhbmRlZCA9IHNvdXJjZVZlcnRleC5pc1N0cmFuZGVkKCksXG4gICAgICAgICAgICAgIHRhcmdldFZlcnRleFN0cmFuZGVkID0gdGFyZ2V0VmVydGV4LmlzU3RyYW5kZWQoKTtcblxuICAgICAgICBpZiAoc291cmNlVmVydGV4U3RyYW5kZWQpIHtcbiAgICAgICAgICB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLnJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0YXJnZXRWZXJ0ZXhTdHJhbmRlZCkge1xuICAgICAgICAgIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGgucmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5maWx0ZXJDeWNsaWNFZGdlcygpO1xuICB9XG5cbiAgcmVtb3ZlRWRnZXMoZWRnZXMsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMgPSBmYWxzZSkge1xuICAgIGVkZ2VzLmZvckVhY2goKGVkZ2UpID0+IHRoaXMucmVtb3ZlRWRnZShlZGdlLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzKSk7XG4gIH1cblxuICBhZGRFZGdlQnlWZXJ0ZXhOYW1lcyhzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKSB7XG4gICAgY29uc3QgZWRnZSA9IEVkZ2UuZnJvbVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgdGhpcy5hZGRFZGdlKGVkZ2UpO1xuICB9XG5cbiAgcmVtb3ZlRWRnZUJ5VmVydGV4TmFtZXMoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSwgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgZWRnZSA9IEVkZ2UuZnJvbVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgdGhpcy5yZW1vdmVFZGdlKGVkZ2UsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMpO1xuICB9XG5cbiAgcmVtb3ZlRWRnZXNCeVRhcmdldFZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSwgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgY3ljbGljRWRnZXMgPSBlZGdlc0J5VGFyZ2V0VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lLCB0aGlzLmN5Y2xpY0VkZ2VzKSxcbiAgICAgICAgICBlZGdlcyA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0RWRnZXNCeVRhcmdldFZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICB0aGlzLnJlbW92ZUVkZ2VzKGN5Y2xpY0VkZ2VzLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzKTtcblxuICAgIHRoaXMucmVtb3ZlRWRnZXMoZWRnZXMsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMpO1xuICB9XG5cbiAgcmVtb3ZlRWRnZXNCeVNvdXJjZVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgY3ljbGljRWRnZXMgPSBlZGdlc0J5U291cmNlVmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0aGlzLmN5Y2xpY0VkZ2VzKSxcbiAgICAgICAgICBlZGdlcyA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0RWRnZXNCeVNvdXJjZVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSk7XG5cbiAgICB0aGlzLnJlbW92ZUVkZ2VzKGN5Y2xpY0VkZ2VzLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzKTtcblxuICAgIHRoaXMucmVtb3ZlRWRnZXMoZWRnZXMsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMpO1xuICB9XG5cbiAgcmVtb3ZlQWxsRWRnZXNBbmRWZXJ0aWNlcygpIHtcbiAgICB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoID0gRGlyZWN0ZWRBY3ljbGljR3JhcGguZnJvbU5vdGhpbmcoKTtcblxuICAgIHRoaXMuY3ljbGljRWRnZXMgPSBbXTtcbiAgfVxuXG4gIGZpbHRlckN5Y2xpY0VkZ2VzKCkge1xuICAgIGZpbHRlcih0aGlzLmN5Y2xpY0VkZ2VzLCAoY3ljbGljRWRnZSkgPT4ge1xuICAgICAgY29uc3QgZWRnZSA9IGN5Y2xpY0VkZ2UsICAvLy9cbiAgICAgICAgICAgIHN1Y2Nlc3MgPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmFkZEVkZ2UoZWRnZSk7XG5cbiAgICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBjeWNsaWNFZGdlcyA9IFtdLFxuICAgICAgICAgIGRpcmVjdGVkQWN5Y2xpY0dyYXBoID0gRGlyZWN0ZWRBY3ljbGljR3JhcGguZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBkaXJlY3RlZEdyYXBoID0gbmV3IERpcmVjdGVkR3JhcGgoY3ljbGljRWRnZXMsIGRpcmVjdGVkQWN5Y2xpY0dyYXBoKTtcbiAgICBcbiAgICByZXR1cm4gZGlyZWN0ZWRHcmFwaDsgICAgXG4gIH1cblxuICBzdGF0aWMgZnJvbVZlcnRleExpdGVyYWxzKHZlcnRleExpdGVyYWxzKSB7XG4gICAgY29uc3QgdmVydGV4TmFtZXMgPSB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhMaXRlcmFscyh2ZXJ0ZXhMaXRlcmFscyksXG4gICAgICAgICAgZWRnZXMgPSBlZGdlc0Zyb21WZXJ0ZXhMaXRlcmFscyh2ZXJ0ZXhMaXRlcmFscyksXG4gICAgICAgICAgZGlyZWN0ZWRHcmFwaCA9IERpcmVjdGVkR3JhcGguZnJvbVZlcnRleE5hbWVzQW5kRWRnZXModmVydGV4TmFtZXMsIGVkZ2VzKTtcblxuICAgIHJldHVybiBkaXJlY3RlZEdyYXBoO1xuICB9XG5cbiAgc3RhdGljIGZyb21WZXJ0ZXhOYW1lc0FuZEVkZ2VzKHZlcnRleE5hbWVzLCBlZGdlcykge1xuICAgIGxldCBkaXJlY3RlZEdyYXBoO1xuXG4gICAgY29uc3QgZ3JhcGggPSBHcmFwaC5mcm9tVmVydGV4TmFtZXNBbmRFZGdlcyh2ZXJ0ZXhOYW1lcywgZWRnZXMpLFxuICAgICAgICAgIGN5Y2xlc1ByZXNlbnQgPSBncmFwaC5hcmVDeWNsZXNQcmVzZW50KCk7XG5cbiAgICBpZiAoY3ljbGVzUHJlc2VudCkge1xuICAgICAgY29uc3QgY3ljbGljRWRnZXMgPSBbXSxcbiAgICAgICAgICAgIGRpcmVjdGVkQWN5Y2xpY0dyYXBoID0gRGlyZWN0ZWRBY3ljbGljR3JhcGguZnJvbVZlcnRleE5hbWVzKHZlcnRleE5hbWVzKTtcblxuICAgICAgZGlyZWN0ZWRHcmFwaCA9IG5ldyBEaXJlY3RlZEdyYXBoKGN5Y2xpY0VkZ2VzLCBkaXJlY3RlZEFjeWNsaWNHcmFwaCk7XG5cbiAgICAgIGVkZ2VzLmZvckVhY2goKGVkZ2UpID0+IGRpcmVjdGVkR3JhcGguYWRkRWRnZShlZGdlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRvcG9sb2dpY2FsbHlPcmRlcmVkVmVydGljZXMgPSBncmFwaC5nZXRUb3BvbG9naWNhbGx5T3JkZXJlZFZlcnRpY2VzKCksXG4gICAgICAgICAgICBjeWNsaWNFZGdlcyA9IFtdLFxuICAgICAgICAgICAgZGlyZWN0ZWRBY3ljbGljR3JhcGggPSBEaXJlY3RlZEFjeWNsaWNHcmFwaC5mcm9tVG9wb2xvZ2ljYWxseU9yZGVyZWRWZXJ0aWNlcyh0b3BvbG9naWNhbGx5T3JkZXJlZFZlcnRpY2VzKTtcblxuICAgICAgZGlyZWN0ZWRHcmFwaCA9IG5ldyBEaXJlY3RlZEdyYXBoKGN5Y2xpY0VkZ2VzLCBkaXJlY3RlZEFjeWNsaWNHcmFwaCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdGVkR3JhcGg7XG4gIH1cbn1cbiJdfQ==