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
      var includeCyclicEdges = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var immediatePredecessorVertexNames = this.directedAcyclicGraph.getImmediatePredecessorVertexNamesByVertexName(vertexName);

      if (includeCyclicEdges) {
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
      var includeCyclicEdges = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var immediateSuccessorVertexNames = this.directedAcyclicGraph.getImmediateSuccessorVertexNamesByVertexName(vertexName);

      if (includeCyclicEdges) {
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
        var sourceVertexName = cyclicEdge.getSourceVertexName(),
            targetVertexName = cyclicEdge.getTargetVertexName(),
            sourceVertexPresent = _this6.isVertexPresentByVertexName(sourceVertexName),
            targetVertexPresent = _this6.isVertexPresentByVertexName(targetVertexName);

        if (sourceVertexPresent && targetVertexPresent) {
          return true;
        }
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpcmVjdGVkR3JhcGguanMiXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsImZpbHRlciIsIkRpcmVjdGVkR3JhcGgiLCJjeWNsaWNFZGdlcyIsImRpcmVjdGVkQWN5Y2xpY0dyYXBoIiwidmVydGV4TmFtZSIsImluY2x1ZGVDeWNsaWNFZGdlcyIsImltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMiLCJnZXRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lIiwiZm9yRWFjaCIsImN5Y2xpY0VkZ2UiLCJjeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZSIsImdldFRhcmdldFZlcnRleE5hbWUiLCJjeWNsaWNFZGdlU291cmNlVmVydGV4TmFtZSIsImdldFNvdXJjZVZlcnRleE5hbWUiLCJpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWUiLCJwdXNoIiwiaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXMiLCJnZXRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSIsImltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWUiLCJnZXRQcmVkZWNlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lIiwiZ2V0U3VjY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUiLCJjeWNsZXNQcmVzZW50IiwidmVydGV4UHJlc2VudCIsImlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZSIsImZpcnN0Q3ljbGUiLCJnZXRGaXJzdEN5Y2xlQnlWZXJ0ZXhOYW1lIiwidmVydGV4IiwiZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lIiwic2xpY2UiLCJwYXJ0aWFsQ3ljbGVzIiwiY3ljbGVzIiwidmlzaXRlZFZlcnRleCIsImdldFByZWRlY2Vzc29yVmVydGljZXMiLCJ2aXNpdGVkVmVydGV4TmFtZSIsImdldE5hbWUiLCJzb3VyY2VWZXJ0ZXhOYW1lIiwibWF0Y2hlcyIsIm1hdGNoU291cmNlVmVydGV4TmFtZSIsInByZWRlY2Vzc29yVmVydGljZXMiLCJwYXJ0aWFsQ3ljbGUiLCJQYXJ0aWFsQ3ljbGUiLCJmcm9tQ3ljbGljRWRnZUFuZFByZWRlY2Vzc29yVmVydGljZXMiLCJjeWNsaWNFZGdlc0xlbmd0aCIsImxlbmd0aCIsInRlcm1pbmF0ZSIsInNvbWUiLCJ0YXJnZXRWZXJ0ZXhOYW1lIiwidGFyZ2V0VmVydGV4Iiwic3VjY2Vzc29yVmVydGljZXMiLCJjeWNsZSIsIkN5Y2xlIiwiZnJvbVZlcnRleE5hbWVQYXJ0aWFsQ3ljbGVBbmRTdWNjZXNzb3JWZXJ0aWNlcyIsImN5Y2xlc0xlbmd0aCIsImZpcnN0Q3ljbGljRWRnZSIsImdldFRvcG9sb2dpY2FsbHlPcmRlcmVkVmVydGV4TmFtZXMiLCJhZGRWZXJ0ZXhCeVZlcnRleE5hbWUiLCJ2ZXJ0ZXhOYW1lcyIsInJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZSIsImZpbHRlckN5Y2xpY0VkZ2VzIiwiZWRnZSIsInN1Y2Nlc3MiLCJhZGRFZGdlIiwiY3ljbGljRWRnZXNJbmNsdWRlc0VkZ2UiLCJlZGdlcyIsInJlbW92ZVN0cmFuZGVkVmVydGljZXMiLCJlZGdlUHJlc2VudCIsImlzRWRnZVByZXNlbnQiLCJlZGdlQ3ljbGljIiwicmVtb3ZlRWRnZSIsInNvdXJjZVZlcnRleCIsInNvdXJjZVZlcnRleFN0cmFuZGVkIiwiaXNTdHJhbmRlZCIsInRhcmdldFZlcnRleFN0cmFuZGVkIiwiRWRnZSIsImZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZSIsImdldEVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lIiwicmVtb3ZlRWRnZXMiLCJnZXRFZGdlc0J5U291cmNlVmVydGV4TmFtZSIsIkRpcmVjdGVkQWN5Y2xpY0dyYXBoIiwiZnJvbU5vdGhpbmciLCJzb3VyY2VWZXJ0ZXhQcmVzZW50IiwidGFyZ2V0VmVydGV4UHJlc2VudCIsImRpcmVjdGVkR3JhcGgiLCJ2ZXJ0ZXhMaXRlcmFscyIsImZyb21WZXJ0ZXhOYW1lc0FuZEVkZ2VzIiwiZ3JhcGgiLCJHcmFwaCIsImFyZUN5Y2xlc1ByZXNlbnQiLCJmcm9tVmVydGV4TmFtZXMiLCJ0b3BvbG9naWNhbGx5T3JkZXJlZFZlcnRpY2VzIiwiZ2V0VG9wb2xvZ2ljYWxseU9yZGVyZWRWZXJ0aWNlcyIsImZyb21Ub3BvbG9naWNhbGx5T3JkZXJlZFZlcnRpY2VzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOzs7Ozs7Ozs7O0lBRVFBLEssR0FBa0JDLHlCLENBQWxCRCxLO0lBQU9FLE0sR0FBV0QseUIsQ0FBWEMsTTs7SUFFTUMsYTtBQUNuQix5QkFBWUMsV0FBWixFQUF5QkMsb0JBQXpCLEVBQStDO0FBQUE7O0FBQzdDLFNBQUtELFdBQUwsR0FBbUJBLFdBQW5CO0FBRUEsU0FBS0Msb0JBQUwsR0FBNEJBLG9CQUE1QjtBQUNEOzs7O3FDQUVnQjtBQUNmLGFBQU8sS0FBS0QsV0FBWjtBQUNEOzs7OENBRXlCO0FBQ3hCLGFBQU8sS0FBS0Msb0JBQVo7QUFDRDs7O21FQUU4Q0MsVSxFQUF3QztBQUFBLFVBQTVCQyxrQkFBNEIsdUVBQVAsS0FBTztBQUNyRixVQUFNQywrQkFBK0IsR0FBRyxLQUFLSCxvQkFBTCxDQUEwQkksOENBQTFCLENBQXlFSCxVQUF6RSxDQUF4Qzs7QUFFQSxVQUFJQyxrQkFBSixFQUF3QjtBQUN0QixhQUFLSCxXQUFMLENBQWlCTSxPQUFqQixDQUF5QixVQUFDQyxVQUFELEVBQWdCO0FBQ3ZDLGNBQU1DLDBCQUEwQixHQUFHRCxVQUFVLENBQUNFLG1CQUFYLEVBQW5DOztBQUVBLGNBQUlELDBCQUEwQixLQUFLTixVQUFuQyxFQUErQztBQUM3QyxnQkFBTVEsMEJBQTBCLEdBQUdILFVBQVUsQ0FBQ0ksbUJBQVgsRUFBbkM7QUFBQSxnQkFDTUMsOEJBQThCLEdBQUdGLDBCQUR2QyxDQUQ2QyxDQUV1Qjs7QUFFcEVOLFlBQUFBLCtCQUErQixDQUFDUyxJQUFoQyxDQUFxQ0QsOEJBQXJDO0FBQ0Q7QUFDRixT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TixFQUR0Qjs7QUFHQSxVQUFJbEUsYUFBSixFQUFtQjtBQUNqQixZQUFNbkIsV0FBVyxHQUFHLEVBQXBCO0FBQUEsWUFDTUMsb0JBQW9CLEdBQUcyRSx1Q0FBcUJVLGVBQXJCLENBQXFDaEMsV0FBckMsQ0FEN0I7O0FBR0EwQixRQUFBQSxhQUFhLEdBQUcsSUFBSWpGLGFBQUosQ0FBa0JDLFdBQWxCLEVBQStCQyxvQkFBL0IsQ0FBaEI7QUFFQTRELFFBQUFBLEtBQUssQ0FBQ3ZELE9BQU4sQ0FBYyxVQUFDbUQsSUFBRDtBQUFBLGlCQUFVdUIsYUFBYSxDQUFDckIsT0FBZCxDQUFzQkYsSUFBdEIsQ0FBVjtBQUFBLFNBQWQ7QUFDRCxPQVBELE1BT087QUFDTCxZQUFNOEIsNEJBQTRCLEdBQUdKLEtBQUssQ0FBQ0ssK0JBQU4sRUFBckM7QUFBQSxZQUNNeEYsWUFBVyxHQUFHLEVBRHBCO0FBQUEsWUFFTUMscUJBQW9CLEdBQUcyRSx1Q0FBcUJhLGdDQUFyQixDQUFzREYsNEJBQXRELENBRjdCOztBQUlBUCxRQUFBQSxhQUFhLEdBQUcsSUFBSWpGLGFBQUosQ0FBa0JDLFlBQWxCLEVBQStCQyxxQkFBL0IsQ0FBaEI7QUFDRDs7QUFFRCxhQUFPK0UsYUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEdyYXBoIH0gZnJvbSBcIm9jY2FtLWthaG5cIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgRGlyZWN0ZWRBY3ljbGljR3JhcGggfSBmcm9tIFwib2NjYW0tcGVhcmNlLWtlbGx5XCI7XG5cbmltcG9ydCBFZGdlIGZyb20gXCIuL2VkZ2VcIjtcbmltcG9ydCBDeWNsZSBmcm9tIFwiLi9jeWNsZVwiO1xuaW1wb3J0IFBhcnRpYWxDeWNsZSBmcm9tIFwiLi9wYXJ0aWFsQ3ljbGVcIjtcblxuaW1wb3J0IHsgdmVydGV4TmFtZXNGcm9tVmVydGV4TGl0ZXJhbHMsIGZvcndhcmRzRGVwdGhGaXJzdFNlYXJjaCB9IGZyb20gXCIuL3V0aWxpdGllcy92ZXJ0ZXhcIjtcbmltcG9ydCB7IGVkZ2VzRnJvbVZlcnRleExpdGVyYWxzLCBjaGVja0VkZ2VzSW5jbHVkZXNFZGdlLCByZW1vdmVFZGdlRnJvbUVkZ2VzLCBlZGdlc0J5U291cmNlVmVydGV4TmFtZSwgZWRnZXNCeVRhcmdldFZlcnRleE5hbWUgfSBmcm9tIFwiLi91dGlsaXRpZXMvZWRnZVwiO1xuXG5jb25zdCB7IGZpcnN0LCBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RlZEdyYXBoIHtcbiAgY29uc3RydWN0b3IoY3ljbGljRWRnZXMsIGRpcmVjdGVkQWN5Y2xpY0dyYXBoKSB7XG4gICAgdGhpcy5jeWNsaWNFZGdlcyA9IGN5Y2xpY0VkZ2VzO1xuXG4gICAgdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaCA9IGRpcmVjdGVkQWN5Y2xpY0dyYXBoO1xuICB9XG5cbiAgZ2V0Q3ljbGljRWRnZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3ljbGljRWRnZXM7XG4gIH1cblxuICBnZXREaXJlY3RlZEFjeWNsaWNHcmFwaCgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaDtcbiAgfVxuXG4gIGdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUodmVydGV4TmFtZSwgaW5jbHVkZUN5Y2xpY0VkZ2VzID0gZmFsc2UpIHtcbiAgICBjb25zdCBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgaWYgKGluY2x1ZGVDeWNsaWNFZGdlcykge1xuICAgICAgdGhpcy5jeWNsaWNFZGdlcy5mb3JFYWNoKChjeWNsaWNFZGdlKSA9PiB7XG4gICAgICAgIGNvbnN0IGN5Y2xpY0VkZ2VUYXJnZXRWZXJ0ZXhOYW1lID0gY3ljbGljRWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCk7XG5cbiAgICAgICAgaWYgKGN5Y2xpY0VkZ2VUYXJnZXRWZXJ0ZXhOYW1lID09PSB2ZXJ0ZXhOYW1lKSB7XG4gICAgICAgICAgY29uc3QgY3ljbGljRWRnZVNvdXJjZVZlcnRleE5hbWUgPSBjeWNsaWNFZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSxcbiAgICAgICAgICAgICAgICBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWUgPSBjeWNsaWNFZGdlU291cmNlVmVydGV4TmFtZTsgIC8vL1xuXG4gICAgICAgICAgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcy5wdXNoKGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzO1xuICB9XG5cbiAgZ2V0SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUodmVydGV4TmFtZSwgaW5jbHVkZUN5Y2xpY0VkZ2VzID0gZmFsc2UpIHtcbiAgICBjb25zdCBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcyA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICBpZiAoaW5jbHVkZUN5Y2xpY0VkZ2VzKSB7XG4gICAgICB0aGlzLmN5Y2xpY0VkZ2VzLmZvckVhY2goKGN5Y2xpY0VkZ2UpID0+IHtcbiAgICAgICAgY29uc3QgY3ljbGljRWRnZVNvdXJjZVZlcnRleE5hbWUgPSBjeWNsaWNFZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKTtcblxuICAgICAgICBpZiAoY3ljbGljRWRnZVNvdXJjZVZlcnRleE5hbWUgPT09IHZlcnRleE5hbWUpIHtcbiAgICAgICAgICBjb25zdCBjeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZSA9IGN5Y2xpY0VkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgICAgIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWUgPSBjeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZTsgIC8vL1xuXG4gICAgICAgICAgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXMucHVzaChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzO1xuICB9XG5cbiAgZ2V0UHJlZGVjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7IHJldHVybiB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldFByZWRlY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7IH1cblxuICBnZXRTdWNjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7IHJldHVybiB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldFN1Y2Nlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpOyB9XG5cbiAgYXJlQ3ljbGVzUHJlc2VudEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgbGV0IGN5Y2xlc1ByZXNlbnQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZlcnRleFByZXNlbnQgPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgIGlmICh2ZXJ0ZXhQcmVzZW50KSB7XG4gICAgICBjb25zdCBmaXJzdEN5Y2xlID0gdGhpcy5nZXRGaXJzdEN5Y2xlQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgICBjeWNsZXNQcmVzZW50ID0gKGZpcnN0Q3ljbGUgIT09IG51bGwpO1xuICAgIH1cblxuICAgIHJldHVybiBjeWNsZXNQcmVzZW50O1xuICB9XG5cbiAgaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHsgcmV0dXJuIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpOyB9XG5cbiAgZ2V0Rmlyc3RDeWNsZUJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgbGV0IGZpcnN0Q3ljbGUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IHZlcnRleCA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpLFxuICAgICAgICAgIGN5Y2xpY0VkZ2VzID0gdGhpcy5jeWNsaWNFZGdlcy5zbGljZSgpLCAvLy9cbiAgICAgICAgICBwYXJ0aWFsQ3ljbGVzID0gW10sXG4gICAgICAgICAgY3ljbGVzID0gW107XG5cbiAgICBmb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2godmVydGV4LCAodmlzaXRlZFZlcnRleCwgZ2V0UHJlZGVjZXNzb3JWZXJ0aWNlcykgPT4ge1xuICAgICAgY29uc3QgdmlzaXRlZFZlcnRleE5hbWUgPSB2aXNpdGVkVmVydGV4LmdldE5hbWUoKSxcbiAgICAgICAgICAgIHNvdXJjZVZlcnRleE5hbWUgPSB2aXNpdGVkVmVydGV4TmFtZTsgLy8vXG5cbiAgICAgIGZpbHRlcihjeWNsaWNFZGdlcywgKGN5Y2xpY0VkZ2UpID0+IHtcbiAgICAgICAgY29uc3QgbWF0Y2hlcyA9IGN5Y2xpY0VkZ2UubWF0Y2hTb3VyY2VWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpO1xuXG4gICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgY29uc3QgcHJlZGVjZXNzb3JWZXJ0aWNlcyA9IGdldFByZWRlY2Vzc29yVmVydGljZXMoKSxcbiAgICAgICAgICAgICAgICBwYXJ0aWFsQ3ljbGUgPSAgUGFydGlhbEN5Y2xlLmZyb21DeWNsaWNFZGdlQW5kUHJlZGVjZXNzb3JWZXJ0aWNlcyhjeWNsaWNFZGdlLCBwcmVkZWNlc3NvclZlcnRpY2VzKTtcbiAgICAgICAgICBcbiAgICAgICAgICBwYXJ0aWFsQ3ljbGVzLnB1c2gocGFydGlhbEN5Y2xlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGN5Y2xpY0VkZ2VzTGVuZ3RoID0gY3ljbGljRWRnZXMubGVuZ3RoLFxuICAgICAgICAgICAgdGVybWluYXRlID0gKGN5Y2xpY0VkZ2VzTGVuZ3RoID09PSAwKTtcblxuICAgICAgcmV0dXJuIHRlcm1pbmF0ZTtcbiAgICB9KTtcblxuICAgIHBhcnRpYWxDeWNsZXMuc29tZSgocGFydGlhbEN5Y2xlKSA9PiB7XG4gICAgICBjb25zdCB0YXJnZXRWZXJ0ZXhOYW1lID0gcGFydGlhbEN5Y2xlLmdldFRhcmdldFZlcnRleE5hbWUoKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleCA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgICBmb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2godGFyZ2V0VmVydGV4LCAodmlzaXRlZFZlcnRleCwgZ2V0UHJlZGVjZXNzb3JWZXJ0aWNlcykgPT4ge1xuICAgICAgICBjb25zdCB2aXNpdGVkVmVydGV4TmFtZSA9IHZpc2l0ZWRWZXJ0ZXguZ2V0TmFtZSgpO1xuXG4gICAgICAgIGlmICh2aXNpdGVkVmVydGV4TmFtZSA9PT0gdmVydGV4TmFtZSkge1xuICAgICAgICAgIGNvbnN0IHByZWRlY2Vzc29yVmVydGljZXMgPSBnZXRQcmVkZWNlc3NvclZlcnRpY2VzKCksXG4gICAgICAgICAgICAgICAgc3VjY2Vzc29yVmVydGljZXMgPSBwcmVkZWNlc3NvclZlcnRpY2VzLCAgLy8vXG4gICAgICAgICAgICAgICAgY3ljbGUgPSBDeWNsZS5mcm9tVmVydGV4TmFtZVBhcnRpYWxDeWNsZUFuZFN1Y2Nlc3NvclZlcnRpY2VzKHZlcnRleE5hbWUsIHBhcnRpYWxDeWNsZSwgc3VjY2Vzc29yVmVydGljZXMpO1xuXG4gICAgICAgICAgY3ljbGVzLnB1c2goY3ljbGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY3ljbGVzTGVuZ3RoID0gY3ljbGVzLmxlbmd0aCxcbiAgICAgICAgICAgICAgdGVybWluYXRlID0gKGN5Y2xlc0xlbmd0aCA+IDApO1xuXG4gICAgICAgIHJldHVybiB0ZXJtaW5hdGU7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGN5Y2xlc0xlbmd0aCA9IGN5Y2xlcy5sZW5ndGg7XG4gICAgXG4gICAgaWYgKGN5Y2xlc0xlbmd0aCA+IDApIHtcbiAgICAgIGZpcnN0Q3ljbGUgPSBmaXJzdChjeWNsZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBmaXJzdEN5Y2xlO1xuICB9XG5cbiAgZ2V0Rmlyc3RDeWNsZSgpIHtcbiAgICBjb25zdCBmaXJzdEN5Y2xpY0VkZ2UgPSBmaXJzdCh0aGlzLmN5Y2xpY0VkZ2VzKSxcbiAgICAgICAgICBjeWNsaWNFZGdlID0gZmlyc3RDeWNsaWNFZGdlLCAvLy9cbiAgICAgICAgICBzb3VyY2VWZXJ0ZXhOYW1lID0gY3ljbGljRWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgdmVydGV4TmFtZSA9IHNvdXJjZVZlcnRleE5hbWUsICAvLy9cbiAgICAgICAgICBmaXJzdEN5Y2xlID0gdGhpcy5nZXRGaXJzdEN5Y2xlQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgcmV0dXJuIGZpcnN0Q3ljbGU7XG4gIH1cblxuICBnZXRUb3BvbG9naWNhbGx5T3JkZXJlZFZlcnRleE5hbWVzKCkgeyByZXR1cm4gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRUb3BvbG9naWNhbGx5T3JkZXJlZFZlcnRleE5hbWVzKCk7IH1cblxuICBhcmVDeWNsZXNQcmVzZW50KCkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VzTGVuZ3RoID0gdGhpcy5jeWNsaWNFZGdlcy5sZW5ndGgsXG4gICAgICAgICAgY3ljbGVzUHJlc2VudCA9IChjeWNsaWNFZGdlc0xlbmd0aCA+IDApO1xuXG4gICAgcmV0dXJuIGN5Y2xlc1ByZXNlbnQ7XG4gIH1cblxuICBhZGRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSkgeyB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmFkZFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTsgfVxuXG4gIGFkZFZlcnRpY2VzQnlWZXJ0ZXhOYW1lcyh2ZXJ0ZXhOYW1lcykge1xuICAgIHZlcnRleE5hbWVzLmZvckVhY2goKHZlcnRleE5hbWUpID0+IHRoaXMuYWRkVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpKTtcbiAgfVxuXG4gIHJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5yZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICB0aGlzLmZpbHRlckN5Y2xpY0VkZ2VzKCk7XG4gIH1cblxuICByZW1vdmVWZXJ0aWNlc0J5VmVydGV4TmFtZXModmVydGV4TmFtZXMpIHtcbiAgICB2ZXJ0ZXhOYW1lcy5mb3JFYWNoKCh2ZXJ0ZXhOYW1lKSA9PiB0aGlzLnJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSk7XG4gIH1cblxuICBhZGRFZGdlKGVkZ2UpIHtcbiAgICBjb25zdCBzdWNjZXNzID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5hZGRFZGdlKGVkZ2UpO1xuICAgIFxuICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgY29uc3QgY3ljbGljRWRnZXNJbmNsdWRlc0VkZ2UgPSBjaGVja0VkZ2VzSW5jbHVkZXNFZGdlKGVkZ2UsIHRoaXMuY3ljbGljRWRnZXMpO1xuXG4gICAgICBpZiAoIWN5Y2xpY0VkZ2VzSW5jbHVkZXNFZGdlKSB7XG4gICAgICAgIGNvbnN0IGN5Y2xpY0VkZ2UgPSBlZGdlOyAgLy8vXG5cbiAgICAgICAgdGhpcy5jeWNsaWNFZGdlcy5wdXNoKGN5Y2xpY0VkZ2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgYWRkRWRnZXMoZWRnZXMpIHtcbiAgICBlZGdlcy5mb3JFYWNoKChlZGdlKSA9PiB0aGlzLmFkZEVkZ2UoZWRnZSkpO1xuICB9XG5cbiAgcmVtb3ZlRWRnZShlZGdlLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzID0gZmFsc2UpIHtcbiAgICBjb25zdCBjeWNsaWNFZGdlc0luY2x1ZGVzRWRnZSA9IGNoZWNrRWRnZXNJbmNsdWRlc0VkZ2UoZWRnZSwgdGhpcy5jeWNsaWNFZGdlcyksXG4gICAgICAgICAgZWRnZVByZXNlbnQgPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmlzRWRnZVByZXNlbnQoZWRnZSksXG4gICAgICAgICAgZWRnZUN5Y2xpYyA9IGN5Y2xpY0VkZ2VzSW5jbHVkZXNFZGdlOyAvLy9cblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmIChlZGdlQ3ljbGljKSB7XG4gICAgICBjb25zdCBjeWNsaWNFZGdlID0gZWRnZTsgIC8vL1xuXG4gICAgICByZW1vdmVFZGdlRnJvbUVkZ2VzKGN5Y2xpY0VkZ2UsIHRoaXMuY3ljbGljRWRnZXMpO1xuICAgIH0gZWxzZSBpZiAoZWRnZVByZXNlbnQpIHtcbiAgICAgIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGgucmVtb3ZlRWRnZShlZGdlKTtcblxuICAgICAgaWYgKHJlbW92ZVN0cmFuZGVkVmVydGljZXMpIHtcbiAgICAgICAgY29uc3Qgc291cmNlVmVydGV4TmFtZSA9IGVkZ2UuZ2V0U291cmNlVmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gZWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICAgIHNvdXJjZVZlcnRleCA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpLFxuICAgICAgICAgICAgICB0YXJnZXRWZXJ0ZXggPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldFZlcnRleEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICAgICAgc291cmNlVmVydGV4U3RyYW5kZWQgPSBzb3VyY2VWZXJ0ZXguaXNTdHJhbmRlZCgpLFxuICAgICAgICAgICAgICB0YXJnZXRWZXJ0ZXhTdHJhbmRlZCA9IHRhcmdldFZlcnRleC5pc1N0cmFuZGVkKCk7XG5cbiAgICAgICAgaWYgKHNvdXJjZVZlcnRleFN0cmFuZGVkKSB7XG4gICAgICAgICAgdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5yZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGFyZ2V0VmVydGV4U3RyYW5kZWQpIHtcbiAgICAgICAgICB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLnJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZmlsdGVyQ3ljbGljRWRnZXMoKTtcbiAgfVxuXG4gIHJlbW92ZUVkZ2VzKGVkZ2VzLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzID0gZmFsc2UpIHtcbiAgICBlZGdlcy5mb3JFYWNoKChlZGdlKSA9PiB0aGlzLnJlbW92ZUVkZ2UoZWRnZSwgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcykpO1xuICB9XG5cbiAgYWRkRWRnZUJ5VmVydGV4TmFtZXMoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSkge1xuICAgIGNvbnN0IGVkZ2UgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgIHRoaXMuYWRkRWRnZShlZGdlKTtcbiAgfVxuXG4gIHJlbW92ZUVkZ2VCeVZlcnRleE5hbWVzKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMgPSBmYWxzZSkge1xuICAgIGNvbnN0IGVkZ2UgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgIHRoaXMucmVtb3ZlRWRnZShlZGdlLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzKTtcbiAgfVxuXG4gIHJlbW92ZUVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMgPSBmYWxzZSkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VzID0gZWRnZXNCeVRhcmdldFZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSwgdGhpcy5jeWNsaWNFZGdlcyksXG4gICAgICAgICAgZWRnZXMgPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldEVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgdGhpcy5yZW1vdmVFZGdlcyhjeWNsaWNFZGdlcywgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyk7XG5cbiAgICB0aGlzLnJlbW92ZUVkZ2VzKGVkZ2VzLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzKTtcbiAgfVxuXG4gIHJlbW92ZUVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMgPSBmYWxzZSkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VzID0gZWRnZXNCeVNvdXJjZVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGhpcy5jeWNsaWNFZGdlcyksXG4gICAgICAgICAgZWRnZXMgPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldEVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpO1xuXG4gICAgdGhpcy5yZW1vdmVFZGdlcyhjeWNsaWNFZGdlcywgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyk7XG5cbiAgICB0aGlzLnJlbW92ZUVkZ2VzKGVkZ2VzLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzKTtcbiAgfVxuXG4gIHJlbW92ZUFsbEVkZ2VzQW5kVmVydGljZXMoKSB7XG4gICAgdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaCA9IERpcmVjdGVkQWN5Y2xpY0dyYXBoLmZyb21Ob3RoaW5nKCk7XG5cbiAgICB0aGlzLmN5Y2xpY0VkZ2VzID0gW107XG4gIH1cblxuICBmaWx0ZXJDeWNsaWNFZGdlcygpIHtcbiAgICBmaWx0ZXIodGhpcy5jeWNsaWNFZGdlcywgKGN5Y2xpY0VkZ2UpID0+IHtcbiAgICAgIGNvbnN0IHNvdXJjZVZlcnRleE5hbWUgPSBjeWNsaWNFZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleE5hbWUgPSBjeWNsaWNFZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKSxcbiAgICAgICAgICAgIHNvdXJjZVZlcnRleFByZXNlbnQgPSB0aGlzLmlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleFByZXNlbnQgPSB0aGlzLmlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgaWYgKHNvdXJjZVZlcnRleFByZXNlbnQgJiYgdGFyZ2V0VmVydGV4UHJlc2VudCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGZpbHRlcih0aGlzLmN5Y2xpY0VkZ2VzLCAoY3ljbGljRWRnZSkgPT4ge1xuICAgICAgY29uc3QgZWRnZSA9IGN5Y2xpY0VkZ2UsICAvLy9cbiAgICAgICAgICAgIHN1Y2Nlc3MgPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmFkZEVkZ2UoZWRnZSk7XG5cbiAgICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBjeWNsaWNFZGdlcyA9IFtdLFxuICAgICAgICAgIGRpcmVjdGVkQWN5Y2xpY0dyYXBoID0gRGlyZWN0ZWRBY3ljbGljR3JhcGguZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBkaXJlY3RlZEdyYXBoID0gbmV3IERpcmVjdGVkR3JhcGgoY3ljbGljRWRnZXMsIGRpcmVjdGVkQWN5Y2xpY0dyYXBoKTtcbiAgICBcbiAgICByZXR1cm4gZGlyZWN0ZWRHcmFwaDsgICAgXG4gIH1cblxuICBzdGF0aWMgZnJvbVZlcnRleExpdGVyYWxzKHZlcnRleExpdGVyYWxzKSB7XG4gICAgY29uc3QgdmVydGV4TmFtZXMgPSB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhMaXRlcmFscyh2ZXJ0ZXhMaXRlcmFscyksXG4gICAgICAgICAgZWRnZXMgPSBlZGdlc0Zyb21WZXJ0ZXhMaXRlcmFscyh2ZXJ0ZXhMaXRlcmFscyksXG4gICAgICAgICAgZGlyZWN0ZWRHcmFwaCA9IERpcmVjdGVkR3JhcGguZnJvbVZlcnRleE5hbWVzQW5kRWRnZXModmVydGV4TmFtZXMsIGVkZ2VzKTtcblxuICAgIHJldHVybiBkaXJlY3RlZEdyYXBoO1xuICB9XG5cbiAgc3RhdGljIGZyb21WZXJ0ZXhOYW1lc0FuZEVkZ2VzKHZlcnRleE5hbWVzLCBlZGdlcykge1xuICAgIGxldCBkaXJlY3RlZEdyYXBoO1xuXG4gICAgY29uc3QgZ3JhcGggPSBHcmFwaC5mcm9tVmVydGV4TmFtZXNBbmRFZGdlcyh2ZXJ0ZXhOYW1lcywgZWRnZXMpLFxuICAgICAgICAgIGN5Y2xlc1ByZXNlbnQgPSBncmFwaC5hcmVDeWNsZXNQcmVzZW50KCk7XG5cbiAgICBpZiAoY3ljbGVzUHJlc2VudCkge1xuICAgICAgY29uc3QgY3ljbGljRWRnZXMgPSBbXSxcbiAgICAgICAgICAgIGRpcmVjdGVkQWN5Y2xpY0dyYXBoID0gRGlyZWN0ZWRBY3ljbGljR3JhcGguZnJvbVZlcnRleE5hbWVzKHZlcnRleE5hbWVzKTtcblxuICAgICAgZGlyZWN0ZWRHcmFwaCA9IG5ldyBEaXJlY3RlZEdyYXBoKGN5Y2xpY0VkZ2VzLCBkaXJlY3RlZEFjeWNsaWNHcmFwaCk7XG5cbiAgICAgIGVkZ2VzLmZvckVhY2goKGVkZ2UpID0+IGRpcmVjdGVkR3JhcGguYWRkRWRnZShlZGdlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRvcG9sb2dpY2FsbHlPcmRlcmVkVmVydGljZXMgPSBncmFwaC5nZXRUb3BvbG9naWNhbGx5T3JkZXJlZFZlcnRpY2VzKCksXG4gICAgICAgICAgICBjeWNsaWNFZGdlcyA9IFtdLFxuICAgICAgICAgICAgZGlyZWN0ZWRBY3ljbGljR3JhcGggPSBEaXJlY3RlZEFjeWNsaWNHcmFwaC5mcm9tVG9wb2xvZ2ljYWxseU9yZGVyZWRWZXJ0aWNlcyh0b3BvbG9naWNhbGx5T3JkZXJlZFZlcnRpY2VzKTtcblxuICAgICAgZGlyZWN0ZWRHcmFwaCA9IG5ldyBEaXJlY3RlZEdyYXBoKGN5Y2xpY0VkZ2VzLCBkaXJlY3RlZEFjeWNsaWNHcmFwaCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdGVkR3JhcGg7XG4gIH1cbn1cbiJdfQ==