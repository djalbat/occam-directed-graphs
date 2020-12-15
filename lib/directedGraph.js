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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpcmVjdGVkR3JhcGguanMiXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsImZpbHRlciIsIkRpcmVjdGVkR3JhcGgiLCJjeWNsaWNFZGdlcyIsImRpcmVjdGVkQWN5Y2xpY0dyYXBoIiwidmVydGV4TmFtZSIsImluY2x1ZGVDeWNsaWNFZGdlcyIsImltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMiLCJnZXRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lIiwiZm9yRWFjaCIsImN5Y2xpY0VkZ2UiLCJjeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZSIsImdldFRhcmdldFZlcnRleE5hbWUiLCJjeWNsaWNFZGdlU291cmNlVmVydGV4TmFtZSIsImdldFNvdXJjZVZlcnRleE5hbWUiLCJpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWUiLCJwdXNoIiwiaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXMiLCJnZXRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSIsImltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWUiLCJnZXRQcmVkZWNlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lIiwiZ2V0U3VjY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUiLCJjeWNsZXNQcmVzZW50IiwidmVydGV4UHJlc2VudCIsImlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZSIsImZpcnN0Q3ljbGUiLCJnZXRGaXJzdEN5Y2xlQnlWZXJ0ZXhOYW1lIiwidmVydGV4IiwiZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lIiwic2xpY2UiLCJwYXJ0aWFsQ3ljbGVzIiwiY3ljbGVzIiwidmlzaXRlZFZlcnRleCIsImdldFByZWRlY2Vzc29yVmVydGljZXMiLCJ2aXNpdGVkVmVydGV4TmFtZSIsImdldE5hbWUiLCJzb3VyY2VWZXJ0ZXhOYW1lIiwibWF0Y2hlcyIsIm1hdGNoU291cmNlVmVydGV4TmFtZSIsInByZWRlY2Vzc29yVmVydGljZXMiLCJwYXJ0aWFsQ3ljbGUiLCJQYXJ0aWFsQ3ljbGUiLCJmcm9tQ3ljbGljRWRnZUFuZFByZWRlY2Vzc29yVmVydGljZXMiLCJjeWNsaWNFZGdlc0xlbmd0aCIsImxlbmd0aCIsInRlcm1pbmF0ZSIsInNvbWUiLCJ0YXJnZXRWZXJ0ZXhOYW1lIiwidGFyZ2V0VmVydGV4Iiwic3VjY2Vzc29yVmVydGljZXMiLCJjeWNsZSIsIkN5Y2xlIiwiZnJvbVZlcnRleE5hbWVQYXJ0aWFsQ3ljbGVBbmRTdWNjZXNzb3JWZXJ0aWNlcyIsImN5Y2xlc0xlbmd0aCIsImZpcnN0Q3ljbGljRWRnZSIsImdldFRvcG9sb2dpY2FsbHlPcmRlcmVkVmVydGV4TmFtZXMiLCJhZGRWZXJ0ZXhCeVZlcnRleE5hbWUiLCJ2ZXJ0ZXhOYW1lcyIsInJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZSIsImZpbHRlckN5Y2xpY0VkZ2VzIiwiZWRnZSIsInN1Y2Nlc3MiLCJhZGRFZGdlIiwiY3ljbGljRWRnZXNJbmNsdWRlc0VkZ2UiLCJlZGdlcyIsInJlbW92ZVN0cmFuZGVkVmVydGljZXMiLCJlZGdlUHJlc2VudCIsImlzRWRnZVByZXNlbnQiLCJlZGdlQ3ljbGljIiwicmVtb3ZlRWRnZSIsInNvdXJjZVZlcnRleCIsInNvdXJjZVZlcnRleFN0cmFuZGVkIiwiaXNTdHJhbmRlZCIsInRhcmdldFZlcnRleFN0cmFuZGVkIiwiRWRnZSIsImZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZSIsImdldEVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lIiwicmVtb3ZlRWRnZXMiLCJnZXRFZGdlc0J5U291cmNlVmVydGV4TmFtZSIsIkRpcmVjdGVkQWN5Y2xpY0dyYXBoIiwiZnJvbU5vdGhpbmciLCJkaXJlY3RlZEdyYXBoIiwidmVydGV4TGl0ZXJhbHMiLCJmcm9tVmVydGV4TmFtZXNBbmRFZGdlcyIsImdyYXBoIiwiR3JhcGgiLCJhcmVDeWNsZXNQcmVzZW50IiwiZnJvbVZlcnRleE5hbWVzIiwidG9wb2xvZ2ljYWxseU9yZGVyZWRWZXJ0aWNlcyIsImdldFRvcG9sb2dpY2FsbHlPcmRlcmVkVmVydGljZXMiLCJmcm9tVG9wb2xvZ2ljYWxseU9yZGVyZWRWZXJ0aWNlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7OztJQUVRQSxLLEdBQWtCQyx5QixDQUFsQkQsSztJQUFPRSxNLEdBQVdELHlCLENBQVhDLE07O0lBRU1DLGE7QUFDbkIseUJBQVlDLFdBQVosRUFBeUJDLG9CQUF6QixFQUErQztBQUFBOztBQUM3QyxTQUFLRCxXQUFMLEdBQW1CQSxXQUFuQjtBQUVBLFNBQUtDLG9CQUFMLEdBQTRCQSxvQkFBNUI7QUFDRDs7OztxQ0FFZ0I7QUFDZixhQUFPLEtBQUtELFdBQVo7QUFDRDs7OzhDQUV5QjtBQUN4QixhQUFPLEtBQUtDLG9CQUFaO0FBQ0Q7OzttRUFFOENDLFUsRUFBd0M7QUFBQSxVQUE1QkMsa0JBQTRCLHVFQUFQLEtBQU87QUFDckYsVUFBTUMsK0JBQStCLEdBQUcsS0FBS0gsb0JBQUwsQ0FBMEJJLDhDQUExQixDQUF5RUgsVUFBekUsQ0FBeEM7O0FBRUEsVUFBSUMsa0JBQUosRUFBd0I7QUFDdEIsYUFBS0gsV0FBTCxDQUFpQk0sT0FBakIsQ0FBeUIsVUFBQ0MsVUFBRCxFQUFnQjtBQUN2QyxjQUFNQywwQkFBMEIsR0FBR0QsVUFBVSxDQUFDRSxtQkFBWCxFQUFuQzs7QUFFQSxjQUFJRCwwQkFBMEIsS0FBS04sVUFBbkMsRUFBK0M7QUFDN0MsZ0JBQU1RLDBCQUEwQixHQUFHSCxVQUFVLENBQUNJLG1CQUFYLEVBQW5DO0FBQUEsZ0JBQ01DLDhCQUE4QixHQUFHRiwwQkFEdkMsQ0FENkMsQ0FFdUI7O0FBRXBFTixZQUFBQSwrQkFBK0IsQ0FBQ1MsSUFBaEMsQ0FBcUNELDhCQUFyQztBQUNEO0FBQ0YsU0FURDtBQVVEOztBQUVELGFBQU9SLCtCQUFQO0FBQ0Q7OztpRUFFNENGLFUs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QixHQUFHMkUsdUNBQXFCVyxnQ0FBckIsQ0FBc0RGLDRCQUF0RCxDQUY3Qjs7QUFJQVAsUUFBQUEsYUFBYSxHQUFHLElBQUkvRSxhQUFKLENBQWtCQyxZQUFsQixFQUErQkMscUJBQS9CLENBQWhCO0FBQ0Q7O0FBRUQsYUFBTzZFLGFBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBHcmFwaCB9IGZyb20gXCJvY2NhbS1rYWhuXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IERpcmVjdGVkQWN5Y2xpY0dyYXBoIH0gZnJvbSBcIm9jY2FtLXBlYXJjZS1rZWxseVwiO1xuXG5pbXBvcnQgRWRnZSBmcm9tIFwiLi9lZGdlXCI7XG5pbXBvcnQgQ3ljbGUgZnJvbSBcIi4vY3ljbGVcIjtcbmltcG9ydCBQYXJ0aWFsQ3ljbGUgZnJvbSBcIi4vcGFydGlhbEN5Y2xlXCI7XG5cbmltcG9ydCB7IHZlcnRleE5hbWVzRnJvbVZlcnRleExpdGVyYWxzLCBmb3J3YXJkc0RlcHRoRmlyc3RTZWFyY2ggfSBmcm9tIFwiLi91dGlsaXRpZXMvdmVydGV4XCI7XG5pbXBvcnQgeyBlZGdlc0Zyb21WZXJ0ZXhMaXRlcmFscywgY2hlY2tFZGdlc0luY2x1ZGVzRWRnZSwgcmVtb3ZlRWRnZUZyb21FZGdlcywgZWRnZXNCeVNvdXJjZVZlcnRleE5hbWUsIGVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2VkZ2VcIjtcblxuY29uc3QgeyBmaXJzdCwgZmlsdGVyIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0ZWRHcmFwaCB7XG4gIGNvbnN0cnVjdG9yKGN5Y2xpY0VkZ2VzLCBkaXJlY3RlZEFjeWNsaWNHcmFwaCkge1xuICAgIHRoaXMuY3ljbGljRWRnZXMgPSBjeWNsaWNFZGdlcztcblxuICAgIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGggPSBkaXJlY3RlZEFjeWNsaWNHcmFwaDtcbiAgfVxuXG4gIGdldEN5Y2xpY0VkZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLmN5Y2xpY0VkZ2VzO1xuICB9XG5cbiAgZ2V0RGlyZWN0ZWRBY3ljbGljR3JhcGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGg7XG4gIH1cblxuICBnZXRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUsIGluY2x1ZGVDeWNsaWNFZGdlcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcyA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgIGlmIChpbmNsdWRlQ3ljbGljRWRnZXMpIHtcbiAgICAgIHRoaXMuY3ljbGljRWRnZXMuZm9yRWFjaCgoY3ljbGljRWRnZSkgPT4ge1xuICAgICAgICBjb25zdCBjeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZSA9IGN5Y2xpY0VkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpO1xuXG4gICAgICAgIGlmIChjeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZSA9PT0gdmVydGV4TmFtZSkge1xuICAgICAgICAgIGNvbnN0IGN5Y2xpY0VkZ2VTb3VyY2VWZXJ0ZXhOYW1lID0gY3ljbGljRWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICAgICAgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lID0gY3ljbGljRWRnZVNvdXJjZVZlcnRleE5hbWU7ICAvLy9cblxuICAgICAgICAgIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMucHVzaChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGdldEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUsIGluY2x1ZGVDeWNsaWNFZGdlcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXMgPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgaWYgKGluY2x1ZGVDeWNsaWNFZGdlcykge1xuICAgICAgdGhpcy5jeWNsaWNFZGdlcy5mb3JFYWNoKChjeWNsaWNFZGdlKSA9PiB7XG4gICAgICAgIGNvbnN0IGN5Y2xpY0VkZ2VTb3VyY2VWZXJ0ZXhOYW1lID0gY3ljbGljRWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCk7XG5cbiAgICAgICAgaWYgKGN5Y2xpY0VkZ2VTb3VyY2VWZXJ0ZXhOYW1lID09PSB2ZXJ0ZXhOYW1lKSB7XG4gICAgICAgICAgY29uc3QgY3ljbGljRWRnZVRhcmdldFZlcnRleE5hbWUgPSBjeWNsaWNFZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKSxcbiAgICAgICAgICAgICAgICBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lID0gY3ljbGljRWRnZVRhcmdldFZlcnRleE5hbWU7ICAvLy9cblxuICAgICAgICAgIGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzLnB1c2goaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGdldFByZWRlY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUodmVydGV4TmFtZSkgeyByZXR1cm4gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRQcmVkZWNlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpOyB9XG5cbiAgZ2V0U3VjY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUodmVydGV4TmFtZSkgeyByZXR1cm4gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRTdWNjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTsgfVxuXG4gIGFyZUN5Y2xlc1ByZXNlbnRCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGxldCBjeWNsZXNQcmVzZW50ID0gZmFsc2U7XG5cbiAgICBjb25zdCB2ZXJ0ZXhQcmVzZW50ID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5pc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICBpZiAodmVydGV4UHJlc2VudCkge1xuICAgICAgY29uc3QgZmlyc3RDeWNsZSA9IHRoaXMuZ2V0Rmlyc3RDeWNsZUJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgICAgY3ljbGVzUHJlc2VudCA9IChmaXJzdEN5Y2xlICE9PSBudWxsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3ljbGVzUHJlc2VudDtcbiAgfVxuXG4gIGlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7IHJldHVybiB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTsgfVxuXG4gIGdldEZpcnN0Q3ljbGVCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGxldCBmaXJzdEN5Y2xlID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCB2ZXJ0ZXggPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSxcbiAgICAgICAgICBjeWNsaWNFZGdlcyA9IHRoaXMuY3ljbGljRWRnZXMuc2xpY2UoKSwgLy8vXG4gICAgICAgICAgcGFydGlhbEN5Y2xlcyA9IFtdLFxuICAgICAgICAgIGN5Y2xlcyA9IFtdO1xuXG4gICAgZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoKHZlcnRleCwgKHZpc2l0ZWRWZXJ0ZXgsIGdldFByZWRlY2Vzc29yVmVydGljZXMpID0+IHtcbiAgICAgIGNvbnN0IHZpc2l0ZWRWZXJ0ZXhOYW1lID0gdmlzaXRlZFZlcnRleC5nZXROYW1lKCksXG4gICAgICAgICAgICBzb3VyY2VWZXJ0ZXhOYW1lID0gdmlzaXRlZFZlcnRleE5hbWU7IC8vL1xuXG4gICAgICBmaWx0ZXIoY3ljbGljRWRnZXMsIChjeWNsaWNFZGdlKSA9PiB7XG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSBjeWNsaWNFZGdlLm1hdGNoU291cmNlVmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKTtcblxuICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgIGNvbnN0IHByZWRlY2Vzc29yVmVydGljZXMgPSBnZXRQcmVkZWNlc3NvclZlcnRpY2VzKCksXG4gICAgICAgICAgICAgICAgcGFydGlhbEN5Y2xlID0gIFBhcnRpYWxDeWNsZS5mcm9tQ3ljbGljRWRnZUFuZFByZWRlY2Vzc29yVmVydGljZXMoY3ljbGljRWRnZSwgcHJlZGVjZXNzb3JWZXJ0aWNlcyk7XG4gICAgICAgICAgXG4gICAgICAgICAgcGFydGlhbEN5Y2xlcy5wdXNoKHBhcnRpYWxDeWNsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBjeWNsaWNFZGdlc0xlbmd0aCA9IGN5Y2xpY0VkZ2VzLmxlbmd0aCxcbiAgICAgICAgICAgIHRlcm1pbmF0ZSA9IChjeWNsaWNFZGdlc0xlbmd0aCA9PT0gMCk7XG5cbiAgICAgIHJldHVybiB0ZXJtaW5hdGU7XG4gICAgfSk7XG5cbiAgICBwYXJ0aWFsQ3ljbGVzLnNvbWUoKHBhcnRpYWxDeWNsZSkgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0VmVydGV4TmFtZSA9IHBhcnRpYWxDeWNsZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXggPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldFZlcnRleEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoKHRhcmdldFZlcnRleCwgKHZpc2l0ZWRWZXJ0ZXgsIGdldFByZWRlY2Vzc29yVmVydGljZXMpID0+IHtcbiAgICAgICAgY29uc3QgdmlzaXRlZFZlcnRleE5hbWUgPSB2aXNpdGVkVmVydGV4LmdldE5hbWUoKTtcblxuICAgICAgICBpZiAodmlzaXRlZFZlcnRleE5hbWUgPT09IHZlcnRleE5hbWUpIHtcbiAgICAgICAgICBjb25zdCBwcmVkZWNlc3NvclZlcnRpY2VzID0gZ2V0UHJlZGVjZXNzb3JWZXJ0aWNlcygpLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3NvclZlcnRpY2VzID0gcHJlZGVjZXNzb3JWZXJ0aWNlcywgIC8vL1xuICAgICAgICAgICAgICAgIGN5Y2xlID0gQ3ljbGUuZnJvbVZlcnRleE5hbWVQYXJ0aWFsQ3ljbGVBbmRTdWNjZXNzb3JWZXJ0aWNlcyh2ZXJ0ZXhOYW1lLCBwYXJ0aWFsQ3ljbGUsIHN1Y2Nlc3NvclZlcnRpY2VzKTtcblxuICAgICAgICAgIGN5Y2xlcy5wdXNoKGN5Y2xlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGN5Y2xlc0xlbmd0aCA9IGN5Y2xlcy5sZW5ndGgsXG4gICAgICAgICAgICAgIHRlcm1pbmF0ZSA9IChjeWNsZXNMZW5ndGggPiAwKTtcblxuICAgICAgICByZXR1cm4gdGVybWluYXRlO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjeWNsZXNMZW5ndGggPSBjeWNsZXMubGVuZ3RoO1xuICAgIFxuICAgIGlmIChjeWNsZXNMZW5ndGggPiAwKSB7XG4gICAgICBmaXJzdEN5Y2xlID0gZmlyc3QoY3ljbGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmlyc3RDeWNsZTtcbiAgfVxuXG4gIGdldEZpcnN0Q3ljbGUoKSB7XG4gICAgY29uc3QgZmlyc3RDeWNsaWNFZGdlID0gZmlyc3QodGhpcy5jeWNsaWNFZGdlcyksXG4gICAgICAgICAgY3ljbGljRWRnZSA9IGZpcnN0Q3ljbGljRWRnZSwgLy8vXG4gICAgICAgICAgc291cmNlVmVydGV4TmFtZSA9IGN5Y2xpY0VkZ2UuZ2V0U291cmNlVmVydGV4TmFtZSgpLFxuICAgICAgICAgIHZlcnRleE5hbWUgPSBzb3VyY2VWZXJ0ZXhOYW1lLCAgLy8vXG4gICAgICAgICAgZmlyc3RDeWNsZSA9IHRoaXMuZ2V0Rmlyc3RDeWNsZUJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgIHJldHVybiBmaXJzdEN5Y2xlO1xuICB9XG5cbiAgZ2V0VG9wb2xvZ2ljYWxseU9yZGVyZWRWZXJ0ZXhOYW1lcygpIHsgcmV0dXJuIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0VG9wb2xvZ2ljYWxseU9yZGVyZWRWZXJ0ZXhOYW1lcygpOyB9XG5cbiAgYXJlQ3ljbGVzUHJlc2VudCgpIHtcbiAgICBjb25zdCBjeWNsaWNFZGdlc0xlbmd0aCA9IHRoaXMuY3ljbGljRWRnZXMubGVuZ3RoLFxuICAgICAgICAgIGN5Y2xlc1ByZXNlbnQgPSAoY3ljbGljRWRnZXNMZW5ndGggPiAwKTtcblxuICAgIHJldHVybiBjeWNsZXNQcmVzZW50O1xuICB9XG5cbiAgYWRkVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHsgdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5hZGRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7IH1cblxuICBhZGRWZXJ0aWNlc0J5VmVydGV4TmFtZXModmVydGV4TmFtZXMpIHtcbiAgICB2ZXJ0ZXhOYW1lcy5mb3JFYWNoKCh2ZXJ0ZXhOYW1lKSA9PiB0aGlzLmFkZFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSk7XG4gIH1cblxuICByZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGgucmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgdGhpcy5maWx0ZXJDeWNsaWNFZGdlcygpO1xuICB9XG5cbiAgcmVtb3ZlVmVydGljZXNCeVZlcnRleE5hbWVzKHZlcnRleE5hbWVzKSB7XG4gICAgdmVydGV4TmFtZXMuZm9yRWFjaCgodmVydGV4TmFtZSkgPT4gdGhpcy5yZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSkpO1xuICB9XG5cbiAgYWRkRWRnZShlZGdlKSB7XG4gICAgY29uc3Qgc3VjY2VzcyA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguYWRkRWRnZShlZGdlKTtcbiAgICBcbiAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgIGNvbnN0IGN5Y2xpY0VkZ2VzSW5jbHVkZXNFZGdlID0gY2hlY2tFZGdlc0luY2x1ZGVzRWRnZShlZGdlLCB0aGlzLmN5Y2xpY0VkZ2VzKTtcblxuICAgICAgaWYgKCFjeWNsaWNFZGdlc0luY2x1ZGVzRWRnZSkge1xuICAgICAgICBjb25zdCBjeWNsaWNFZGdlID0gZWRnZTsgIC8vL1xuXG4gICAgICAgIHRoaXMuY3ljbGljRWRnZXMucHVzaChjeWNsaWNFZGdlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIGFkZEVkZ2VzKGVkZ2VzKSB7XG4gICAgZWRnZXMuZm9yRWFjaCgoZWRnZSkgPT4gdGhpcy5hZGRFZGdlKGVkZ2UpKTtcbiAgfVxuXG4gIHJlbW92ZUVkZ2UoZWRnZSwgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgY3ljbGljRWRnZXNJbmNsdWRlc0VkZ2UgPSBjaGVja0VkZ2VzSW5jbHVkZXNFZGdlKGVkZ2UsIHRoaXMuY3ljbGljRWRnZXMpLFxuICAgICAgICAgIGVkZ2VQcmVzZW50ID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5pc0VkZ2VQcmVzZW50KGVkZ2UpLFxuICAgICAgICAgIGVkZ2VDeWNsaWMgPSBjeWNsaWNFZGdlc0luY2x1ZGVzRWRnZTsgLy8vXG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAoZWRnZUN5Y2xpYykge1xuICAgICAgY29uc3QgY3ljbGljRWRnZSA9IGVkZ2U7ICAvLy9cblxuICAgICAgcmVtb3ZlRWRnZUZyb21FZGdlcyhjeWNsaWNFZGdlLCB0aGlzLmN5Y2xpY0VkZ2VzKTtcbiAgICB9IGVsc2UgaWYgKGVkZ2VQcmVzZW50KSB7XG4gICAgICB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLnJlbW92ZUVkZ2UoZWRnZSk7XG5cbiAgICAgIGlmIChyZW1vdmVTdHJhbmRlZFZlcnRpY2VzKSB7XG4gICAgICAgIGNvbnN0IHNvdXJjZVZlcnRleE5hbWUgPSBlZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSxcbiAgICAgICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IGVkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgICBzb3VyY2VWZXJ0ZXggPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldFZlcnRleEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSksXG4gICAgICAgICAgICAgIHNvdXJjZVZlcnRleFN0cmFuZGVkID0gc291cmNlVmVydGV4LmlzU3RyYW5kZWQoKSxcbiAgICAgICAgICAgICAgdGFyZ2V0VmVydGV4U3RyYW5kZWQgPSB0YXJnZXRWZXJ0ZXguaXNTdHJhbmRlZCgpO1xuXG4gICAgICAgIGlmIChzb3VyY2VWZXJ0ZXhTdHJhbmRlZCkge1xuICAgICAgICAgIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGgucmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRhcmdldFZlcnRleFN0cmFuZGVkKSB7XG4gICAgICAgICAgdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5yZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmZpbHRlckN5Y2xpY0VkZ2VzKCk7XG4gIH1cblxuICByZW1vdmVFZGdlcyhlZGdlcywgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyA9IGZhbHNlKSB7XG4gICAgZWRnZXMuZm9yRWFjaCgoZWRnZSkgPT4gdGhpcy5yZW1vdmVFZGdlKGVkZ2UsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMpKTtcbiAgfVxuXG4gIGFkZEVkZ2VCeVZlcnRleE5hbWVzKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpIHtcbiAgICBjb25zdCBlZGdlID0gRWRnZS5mcm9tU291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICB0aGlzLmFkZEVkZ2UoZWRnZSk7XG4gIH1cblxuICByZW1vdmVFZGdlQnlWZXJ0ZXhOYW1lcyhzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzID0gZmFsc2UpIHtcbiAgICBjb25zdCBlZGdlID0gRWRnZS5mcm9tU291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICB0aGlzLnJlbW92ZUVkZ2UoZWRnZSwgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyk7XG4gIH1cblxuICByZW1vdmVFZGdlc0J5VGFyZ2V0VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzID0gZmFsc2UpIHtcbiAgICBjb25zdCBjeWNsaWNFZGdlcyA9IGVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUsIHRoaXMuY3ljbGljRWRnZXMpLFxuICAgICAgICAgIGVkZ2VzID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRFZGdlc0J5VGFyZ2V0VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgIHRoaXMucmVtb3ZlRWRnZXMoY3ljbGljRWRnZXMsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMpO1xuXG4gICAgdGhpcy5yZW1vdmVFZGdlcyhlZGdlcywgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyk7XG4gIH1cblxuICByZW1vdmVFZGdlc0J5U291cmNlVmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzID0gZmFsc2UpIHtcbiAgICBjb25zdCBjeWNsaWNFZGdlcyA9IGVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUsIHRoaXMuY3ljbGljRWRnZXMpLFxuICAgICAgICAgIGVkZ2VzID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRFZGdlc0J5U291cmNlVmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKTtcblxuICAgIHRoaXMucmVtb3ZlRWRnZXMoY3ljbGljRWRnZXMsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMpO1xuXG4gICAgdGhpcy5yZW1vdmVFZGdlcyhlZGdlcywgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyk7XG4gIH1cblxuICByZW1vdmVBbGxFZGdlc0FuZFZlcnRpY2VzKCkge1xuICAgIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGggPSBEaXJlY3RlZEFjeWNsaWNHcmFwaC5mcm9tTm90aGluZygpO1xuXG4gICAgdGhpcy5jeWNsaWNFZGdlcyA9IFtdO1xuICB9XG5cbiAgZmlsdGVyQ3ljbGljRWRnZXMoKSB7XG4gICAgZmlsdGVyKHRoaXMuY3ljbGljRWRnZXMsIChjeWNsaWNFZGdlKSA9PiB7XG4gICAgICBjb25zdCBlZGdlID0gY3ljbGljRWRnZSwgIC8vL1xuICAgICAgICAgICAgc3VjY2VzcyA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguYWRkRWRnZShlZGdlKTtcblxuICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VzID0gW10sXG4gICAgICAgICAgZGlyZWN0ZWRBY3ljbGljR3JhcGggPSBEaXJlY3RlZEFjeWNsaWNHcmFwaC5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGRpcmVjdGVkR3JhcGggPSBuZXcgRGlyZWN0ZWRHcmFwaChjeWNsaWNFZGdlcywgZGlyZWN0ZWRBY3ljbGljR3JhcGgpO1xuICAgIFxuICAgIHJldHVybiBkaXJlY3RlZEdyYXBoOyAgICBcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmVydGV4TGl0ZXJhbHModmVydGV4TGl0ZXJhbHMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhOYW1lcyA9IHZlcnRleE5hbWVzRnJvbVZlcnRleExpdGVyYWxzKHZlcnRleExpdGVyYWxzKSxcbiAgICAgICAgICBlZGdlcyA9IGVkZ2VzRnJvbVZlcnRleExpdGVyYWxzKHZlcnRleExpdGVyYWxzKSxcbiAgICAgICAgICBkaXJlY3RlZEdyYXBoID0gRGlyZWN0ZWRHcmFwaC5mcm9tVmVydGV4TmFtZXNBbmRFZGdlcyh2ZXJ0ZXhOYW1lcywgZWRnZXMpO1xuXG4gICAgcmV0dXJuIGRpcmVjdGVkR3JhcGg7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZlcnRleE5hbWVzQW5kRWRnZXModmVydGV4TmFtZXMsIGVkZ2VzKSB7XG4gICAgbGV0IGRpcmVjdGVkR3JhcGg7XG5cbiAgICBjb25zdCBncmFwaCA9IEdyYXBoLmZyb21WZXJ0ZXhOYW1lc0FuZEVkZ2VzKHZlcnRleE5hbWVzLCBlZGdlcyksXG4gICAgICAgICAgY3ljbGVzUHJlc2VudCA9IGdyYXBoLmFyZUN5Y2xlc1ByZXNlbnQoKTtcblxuICAgIGlmIChjeWNsZXNQcmVzZW50KSB7XG4gICAgICBjb25zdCBjeWNsaWNFZGdlcyA9IFtdLFxuICAgICAgICAgICAgZGlyZWN0ZWRBY3ljbGljR3JhcGggPSBEaXJlY3RlZEFjeWNsaWNHcmFwaC5mcm9tVmVydGV4TmFtZXModmVydGV4TmFtZXMpO1xuXG4gICAgICBkaXJlY3RlZEdyYXBoID0gbmV3IERpcmVjdGVkR3JhcGgoY3ljbGljRWRnZXMsIGRpcmVjdGVkQWN5Y2xpY0dyYXBoKTtcblxuICAgICAgZWRnZXMuZm9yRWFjaCgoZWRnZSkgPT4gZGlyZWN0ZWRHcmFwaC5hZGRFZGdlKGVkZ2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdG9wb2xvZ2ljYWxseU9yZGVyZWRWZXJ0aWNlcyA9IGdyYXBoLmdldFRvcG9sb2dpY2FsbHlPcmRlcmVkVmVydGljZXMoKSxcbiAgICAgICAgICAgIGN5Y2xpY0VkZ2VzID0gW10sXG4gICAgICAgICAgICBkaXJlY3RlZEFjeWNsaWNHcmFwaCA9IERpcmVjdGVkQWN5Y2xpY0dyYXBoLmZyb21Ub3BvbG9naWNhbGx5T3JkZXJlZFZlcnRpY2VzKHRvcG9sb2dpY2FsbHlPcmRlcmVkVmVydGljZXMpO1xuXG4gICAgICBkaXJlY3RlZEdyYXBoID0gbmV3IERpcmVjdGVkR3JhcGgoY3ljbGljRWRnZXMsIGRpcmVjdGVkQWN5Y2xpY0dyYXBoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGlyZWN0ZWRHcmFwaDtcbiAgfVxufVxuIl19