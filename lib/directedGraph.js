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
    key: "getOrderedVertexNames",
    value: function getOrderedVertexNames() {
      return this.directedAcyclicGraph.getOrderedVertexNames();
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
        var orderedVertices = graph.getOrderedVertices(),
            _cyclicEdges = [],
            _directedAcyclicGraph = _occamPearceKelly.DirectedAcyclicGraph.fromOrderedVertices(orderedVertices);

        directedGraph = new DirectedGraph(_cyclicEdges, _directedAcyclicGraph);
      }

      return directedGraph;
    }
  }]);

  return DirectedGraph;
}();

exports["default"] = DirectedGraph;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpcmVjdGVkR3JhcGguanMiXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsImZpbHRlciIsIkRpcmVjdGVkR3JhcGgiLCJjeWNsaWNFZGdlcyIsImRpcmVjdGVkQWN5Y2xpY0dyYXBoIiwidmVydGV4TmFtZSIsImluY2x1ZGVDeWNsaWNFZGdlcyIsImltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMiLCJnZXRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lIiwiZm9yRWFjaCIsImN5Y2xpY0VkZ2UiLCJjeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZSIsImdldFRhcmdldFZlcnRleE5hbWUiLCJjeWNsaWNFZGdlU291cmNlVmVydGV4TmFtZSIsImdldFNvdXJjZVZlcnRleE5hbWUiLCJpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWUiLCJwdXNoIiwiaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXMiLCJnZXRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSIsImltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWUiLCJnZXRQcmVkZWNlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lIiwiZ2V0U3VjY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUiLCJjeWNsZXNQcmVzZW50IiwidmVydGV4UHJlc2VudCIsImlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZSIsImZpcnN0Q3ljbGUiLCJnZXRGaXJzdEN5Y2xlQnlWZXJ0ZXhOYW1lIiwidmVydGV4IiwiZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lIiwic2xpY2UiLCJwYXJ0aWFsQ3ljbGVzIiwiY3ljbGVzIiwidmlzaXRlZFZlcnRleCIsImdldFByZWRlY2Vzc29yVmVydGljZXMiLCJ2aXNpdGVkVmVydGV4TmFtZSIsImdldE5hbWUiLCJzb3VyY2VWZXJ0ZXhOYW1lIiwibWF0Y2hlcyIsIm1hdGNoU291cmNlVmVydGV4TmFtZSIsInByZWRlY2Vzc29yVmVydGljZXMiLCJwYXJ0aWFsQ3ljbGUiLCJQYXJ0aWFsQ3ljbGUiLCJmcm9tQ3ljbGljRWRnZUFuZFByZWRlY2Vzc29yVmVydGljZXMiLCJjeWNsaWNFZGdlc0xlbmd0aCIsImxlbmd0aCIsInRlcm1pbmF0ZSIsInNvbWUiLCJ0YXJnZXRWZXJ0ZXhOYW1lIiwidGFyZ2V0VmVydGV4Iiwic3VjY2Vzc29yVmVydGljZXMiLCJjeWNsZSIsIkN5Y2xlIiwiZnJvbVZlcnRleE5hbWVQYXJ0aWFsQ3ljbGVBbmRTdWNjZXNzb3JWZXJ0aWNlcyIsImN5Y2xlc0xlbmd0aCIsImZpcnN0Q3ljbGljRWRnZSIsImdldE9yZGVyZWRWZXJ0ZXhOYW1lcyIsImFkZFZlcnRleEJ5VmVydGV4TmFtZSIsInZlcnRleE5hbWVzIiwicmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lIiwiZmlsdGVyQ3ljbGljRWRnZXMiLCJlZGdlIiwic3VjY2VzcyIsImFkZEVkZ2UiLCJjeWNsaWNFZGdlc0luY2x1ZGVzRWRnZSIsImVkZ2VzIiwicmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyIsImVkZ2VQcmVzZW50IiwiaXNFZGdlUHJlc2VudCIsImVkZ2VDeWNsaWMiLCJyZW1vdmVFZGdlIiwic291cmNlVmVydGV4Iiwic291cmNlVmVydGV4U3RyYW5kZWQiLCJpc1N0cmFuZGVkIiwidGFyZ2V0VmVydGV4U3RyYW5kZWQiLCJFZGdlIiwiZnJvbVNvdXJjZVZlcnRleE5hbWVBbmRUYXJnZXRWZXJ0ZXhOYW1lIiwiZ2V0RWRnZXNCeVRhcmdldFZlcnRleE5hbWUiLCJyZW1vdmVFZGdlcyIsImdldEVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lIiwiRGlyZWN0ZWRBY3ljbGljR3JhcGgiLCJmcm9tTm90aGluZyIsInNvdXJjZVZlcnRleFByZXNlbnQiLCJ0YXJnZXRWZXJ0ZXhQcmVzZW50IiwiZGlyZWN0ZWRHcmFwaCIsInZlcnRleExpdGVyYWxzIiwiZnJvbVZlcnRleE5hbWVzQW5kRWRnZXMiLCJncmFwaCIsIkdyYXBoIiwiYXJlQ3ljbGVzUHJlc2VudCIsImZyb21WZXJ0ZXhOYW1lcyIsIm9yZGVyZWRWZXJ0aWNlcyIsImdldE9yZGVyZWRWZXJ0aWNlcyIsImZyb21PcmRlcmVkVmVydGljZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7SUFFUUEsSyxHQUFrQkMseUIsQ0FBbEJELEs7SUFBT0UsTSxHQUFXRCx5QixDQUFYQyxNOztJQUVNQyxhO0FBQ25CLHlCQUFZQyxXQUFaLEVBQXlCQyxvQkFBekIsRUFBK0M7QUFBQTs7QUFDN0MsU0FBS0QsV0FBTCxHQUFtQkEsV0FBbkI7QUFFQSxTQUFLQyxvQkFBTCxHQUE0QkEsb0JBQTVCO0FBQ0Q7Ozs7cUNBRWdCO0FBQ2YsYUFBTyxLQUFLRCxXQUFaO0FBQ0Q7Ozs4Q0FFeUI7QUFDeEIsYUFBTyxLQUFLQyxvQkFBWjtBQUNEOzs7bUVBRThDQyxVLEVBQXdDO0FBQUEsVUFBNUJDLGtCQUE0Qix1RUFBUCxLQUFPO0FBQ3JGLFVBQU1DLCtCQUErQixHQUFHLEtBQUtILG9CQUFMLENBQTBCSSw4Q0FBMUIsQ0FBeUVILFVBQXpFLENBQXhDOztBQUVBLFVBQUlDLGtCQUFKLEVBQXdCO0FBQ3RCLGFBQUtILFdBQUwsQ0FBaUJNLE9BQWpCLENBQXlCLFVBQUNDLFVBQUQsRUFBZ0I7QUFDdkMsY0FBTUMsMEJBQTBCLEdBQUdELFVBQVUsQ0FBQ0UsbUJBQVgsRUFBbkM7O0FBRUEsY0FBSUQsMEJBQTBCLEtBQUtOLFVBQW5DLEVBQStDO0FBQzdDLGdCQUFNUSwwQkFBMEIsR0FBR0gsVUFBVSxDQUFDSSxtQkFBWCxFQUFuQztBQUFBLGdCQUNNQyw4QkFBOEIsR0FBR0YsMEJBRHZDLENBRDZDLENBRXVCOztBQUVwRU4sWUFBQUEsK0JBQStCLENBQUNTLElBQWhDLENBQXFDRCw4QkFBckM7QUFDRDtBQUNGLFNBVEQ7QUFVRDs7QUFFRCxhQUFPUiwrQkFBUDtBQUNEOzs7aUVBRTRDRixVLEVBQXdDO0FBQUEsVUFBNUJDLGtCQUE0Qix1RUFBUCxLQUFPO0FBQ25GLFVBQU1XLDZCQUE2QixHQUFHLEtBQUtiLG9CQUFMLENBQTBCYyw0Q0FBMUIsQ0FBdUViLFVBQXZFLENBQXRDOztBQUVBLFVBQUlDLGtCQUFKLEVBQXdCO0FBQ3RCLGFBQUtILFdBQUwsQ0FBaUJNLE9BQWpCLENBQXlCLFVBQUNDLFVBQUQsRUFBZ0I7QUFDdkMsY0FBTUcsMEJBQTBCLEdBQUdILFVBQVUsQ0FBQ0ksbUJBQVgsRUFBbkM7O0FBRUEsY0FBSUQsMEJBQTBCLEtBQUtSLFVBQW5DLEVBQStDO0FBQzdDLGdCQUFNTSwwQkFBMEIsR0FBR0QsVUFBVSxDQUFDRSxtQkFBWCxFQUFuQztBQUFBLGdCQUNNTyw0QkFBNEIsR0FBR1IsMEJBRHJDLENBRDZDLENBRXFCOztBQUVsRU0sWUFBQUEsNkJBQTZCLENBQUNELElBQTlCLENBQW1DRyw0QkFBbkM7QUFDRDtBQUNGLFNBVEQ7QUFVRDs7QUFFRCxhQUFPRiw2QkFBUDtBQUNEOzs7MERBRXFDWixVLEVBQVk7QUFBRSxhQUFPLEtBQUtELG9CQUFMLENBQTBCZ0IscUNBQTFCLENBQWdFZixVQUFoRSxDQUFQO0FBQXFGOzs7d0RBRXJHQSxVLEVBQVk7QUFBRSxhQUFPLEtBQUtELG9CQUFMLENBQTBCaUIsbUNBQTFCLENBQThEaEIsVUFBOUQsQ0FBUDtBQUFtRjs7O2lEQUV4R0EsVSxFQUFZO0FBQ3ZDLFVBQUlpQixhQUFhLEdBQUcsS0FBcEI7QUFFQSxVQUFNQyxhQUFhLEdBQUcsS0FBS25CLG9CQUFMLENBQTBCb0IsMkJBQTFCLENBQXNEbkIsVUFBdEQsQ0FBdEI7O0FBRUEsVUFBSWtCLGFBQUosRUFBbUI7QUFDakIsWUFBTUUsVUFBVSxHQUFHLEtBQUtDLHlCQUFMLENBQStCckIsVUFBL0IsQ0FBbkI7QUFFQWlCLFFBQUFBLGFBQWEsR0FBSUcsVUFBVSxLQUFLLElBQWhDO0FBQ0Q7O0FBRUQsYUFBT0gsYUFBUDtBQUNEOzs7Z0RBRTJCakIsVSxFQUFZO0FBQUUsYUFBTyxLQUFLRCxvQkFBTCxDQUEwQm9CLDJCQUExQixDQUFzRG5CLFVBQXRELENBQVA7QUFBMkU7Ozs4Q0FFM0ZBLFUsRUFBWTtBQUFBOztBQUNwQyxVQUFJb0IsVUFBVSxHQUFHLElBQWpCO0FBRUEsVUFBTUUsTUFBTSxHQUFHLEtBQUt2QixvQkFBTCxDQUEwQndCLHFCQUExQixDQUFnRHZCLFVBQWhELENBQWY7QUFBQSxVQUNNRixXQUFXLEdBQUcsS0FBS0EsV0FBTCxDQUFpQjBCLEtBQWpCLEVBRHBCO0FBQUEsVUFDOEM7QUFDeENDLE1BQUFBLGFBQWEsR0FBRyxFQUZ0QjtBQUFBLFVBR01DLE1BQU0sR0FBRyxFQUhmO0FBS0EsNENBQXlCSixNQUF6QixFQUFpQyxVQUFDSyxhQUFELEVBQWdCQyxzQkFBaEIsRUFBMkM7QUFDMUUsWUFBTUMsaUJBQWlCLEdBQUdGLGFBQWEsQ0FBQ0csT0FBZCxFQUExQjtBQUFBLFlBQ01DLGdCQUFnQixHQUFHRixpQkFEekIsQ0FEMEUsQ0FFOUI7O0FBRTVDakMsUUFBQUEsTUFBTSxDQUFDRSxXQUFELEVBQWMsVUFBQ08sVUFBRCxFQUFnQjtBQUNsQyxjQUFNMkIsT0FBTyxHQUFHM0IsVUFBVSxDQUFDNEIscUJBQVgsQ0FBaUNGLGdCQUFqQyxDQUFoQjs7QUFFQSxjQUFJQyxPQUFKLEVBQWE7QUFDWCxnQkFBTUUsbUJBQW1CLEdBQUdOLHNCQUFzQixFQUFsRDtBQUFBLGdCQUNNTyxZQUFZLEdBQUlDLHlCQUFhQyxvQ0FBYixDQUFrRGhDLFVBQWxELEVBQThENkIsbUJBQTlELENBRHRCOztBQUdBVCxZQUFBQSxhQUFhLENBQUNkLElBQWQsQ0FBbUJ3QixZQUFuQjtBQUNELFdBTEQsTUFLTztBQUNMLG1CQUFPLElBQVA7QUFDRDtBQUNGLFNBWEssQ0FBTjtBQWFBLFlBQU1HLGlCQUFpQixHQUFHeEMsV0FBVyxDQUFDeUMsTUFBdEM7QUFBQSxZQUNNQyxTQUFTLEdBQUlGLGlCQUFpQixLQUFLLENBRHpDO0FBR0EsZUFBT0UsU0FBUDtBQUNELE9BckJEO0FBdUJBZixNQUFBQSxhQUFhLENBQUNnQixJQUFkLENBQW1CLFVBQUNOLFlBQUQsRUFBa0I7QUFDbkMsWUFBTU8sZ0JBQWdCLEdBQUdQLFlBQVksQ0FBQzVCLG1CQUFiLEVBQXpCO0FBQUEsWUFDTW9DLFlBQVksR0FBRyxLQUFJLENBQUM1QyxvQkFBTCxDQUEwQndCLHFCQUExQixDQUFnRG1CLGdCQUFoRCxDQURyQjs7QUFHQSw4Q0FBeUJDLFlBQXpCLEVBQXVDLFVBQUNoQixhQUFELEVBQWdCQyxzQkFBaEIsRUFBMkM7QUFDaEYsY0FBTUMsaUJBQWlCLEdBQUdGLGFBQWEsQ0FBQ0csT0FBZCxFQUExQjs7QUFFQSxjQUFJRCxpQkFBaUIsS0FBSzdCLFVBQTFCLEVBQXNDO0FBQ3BDLGdCQUFNa0MsbUJBQW1CLEdBQUdOLHNCQUFzQixFQUFsRDtBQUFBLGdCQUNNZ0IsaUJBQWlCLEdBQUdWLG1CQUQxQjtBQUFBLGdCQUNnRDtBQUMxQ1csWUFBQUEsS0FBSyxHQUFHQyxrQkFBTUMsOENBQU4sQ0FBcUQvQyxVQUFyRCxFQUFpRW1DLFlBQWpFLEVBQStFUyxpQkFBL0UsQ0FGZDs7QUFJQWxCLFlBQUFBLE1BQU0sQ0FBQ2YsSUFBUCxDQUFZa0MsS0FBWjtBQUNEOztBQUVELGNBQU1HLFlBQVksR0FBR3RCLE1BQU0sQ0FBQ2EsTUFBNUI7QUFBQSxjQUNNQyxTQUFTLEdBQUlRLFlBQVksR0FBRyxDQURsQztBQUdBLGlCQUFPUixTQUFQO0FBQ0QsU0FmRDtBQWdCRCxPQXBCRDtBQXNCQSxVQUFNUSxZQUFZLEdBQUd0QixNQUFNLENBQUNhLE1BQTVCOztBQUVBLFVBQUlTLFlBQVksR0FBRyxDQUFuQixFQUFzQjtBQUNwQjVCLFFBQUFBLFVBQVUsR0FBRzFCLEtBQUssQ0FBQ2dDLE1BQUQsQ0FBbEI7QUFDRDs7QUFFRCxhQUFPTixVQUFQO0FBQ0Q7OztvQ0FFZTtBQUNkLFVBQU02QixlQUFlLEdBQUd2RCxLQUFLLENBQUMsS0FBS0ksV0FBTixDQUE3QjtBQUFBLFVBQ01PLFVBQVUsR0FBRzRDLGVBRG5CO0FBQUEsVUFDb0M7QUFDOUJsQixNQUFBQSxnQkFBZ0IsR0FBRzFCLFVBQVUsQ0FBQ0ksbUJBQVgsRUFGekI7QUFBQSxVQUdNVCxVQUFVLEdBQUcrQixnQkFIbkI7QUFBQSxVQUdzQztBQUNoQ1gsTUFBQUEsVUFBVSxHQUFHLEtBQUtDLHlCQUFMLENBQStCckIsVUFBL0IsQ0FKbkI7QUFNQSxhQUFPb0IsVUFBUDtBQUNEOzs7NENBRXVCO0FBQUUsYUFBTyxLQUFLckIsb0JBQUwsQ0FBMEJtRCxxQkFBMUIsRUFBUDtBQUEyRDs7O3VDQUVsRTtBQUNqQixVQUFNWixpQkFBaUIsR0FBRyxLQUFLeEMsV0FBTCxDQUFpQnlDLE1BQTNDO0FBQUEsVUFDTXRCLGFBQWEsR0FBSXFCLGlCQUFpQixHQUFHLENBRDNDO0FBR0EsYUFBT3JCLGFBQVA7QUFDRDs7OzBDQUVxQmpCLFUsRUFBWTtBQUFFLFdBQUtELG9CQUFMLENBQTBCb0QscUJBQTFCLENBQWdEbkQsVUFBaEQ7QUFBOEQ7Ozs2Q0FFekVvRCxXLEVBQWE7QUFBQTs7QUFDcENBLE1BQUFBLFdBQVcsQ0FBQ2hELE9BQVosQ0FBb0IsVUFBQ0osVUFBRDtBQUFBLGVBQWdCLE1BQUksQ0FBQ21ELHFCQUFMLENBQTJCbkQsVUFBM0IsQ0FBaEI7QUFBQSxPQUFwQjtBQUNEOzs7NkNBRXdCQSxVLEVBQVk7QUFDbkMsV0FBS0Qsb0JBQUwsQ0FBMEJzRCx3QkFBMUIsQ0FBbURyRCxVQUFuRDtBQUVBLFdBQUtzRCxpQkFBTDtBQUNEOzs7Z0RBRTJCRixXLEVBQWE7QUFBQTs7QUFDdkNBLE1BQUFBLFdBQVcsQ0FBQ2hELE9BQVosQ0FBb0IsVUFBQ0osVUFBRDtBQUFBLGVBQWdCLE1BQUksQ0FBQ3FELHdCQUFMLENBQThCckQsVUFBOUIsQ0FBaEI7QUFBQSxPQUFwQjtBQUNEOzs7NEJBRU91RCxJLEVBQU07QUFDWixVQUFNQyxPQUFPLEdBQUcsS0FBS3pELG9CQUFMLENBQTBCMEQsT0FBMUIsQ0FBa0NGLElBQWxDLENBQWhCOztBQUVBLFVBQUksQ0FBQ0MsT0FBTCxFQUFjO0FBQ1osWUFBTUUsdUJBQXVCLEdBQUcsbUNBQXVCSCxJQUF2QixFQUE2QixLQUFLekQsV0FBbEMsQ0FBaEM7O0FBRUEsWUFBSSxDQUFDNEQsdUJBQUwsRUFBOEI7QUFDNUIsY0FBTXJELFVBQVUsR0FBR2tELElBQW5CLENBRDRCLENBQ0Y7O0FBRTFCLGVBQUt6RCxXQUFMLENBQWlCYSxJQUFqQixDQUFzQk4sVUFBdEI7QUFDRDtBQUNGO0FBQ0Y7Ozs2QkFFUXNELEssRUFBTztBQUFBOztBQUNkQSxNQUFBQSxLQUFLLENBQUN2RCxPQUFOLENBQWMsVUFBQ21ELElBQUQ7QUFBQSxlQUFVLE1BQUksQ0FBQ0UsT0FBTCxDQUFhRixJQUFiLENBQVY7QUFBQSxPQUFkO0FBQ0Q7OzsrQkFFVUEsSSxFQUFzQztBQUFBLFVBQWhDSyxzQkFBZ0MsdUVBQVAsS0FBTztBQUMvQyxVQUFNRix1QkFBdUIsR0FBRyxtQ0FBdUJILElBQXZCLEVBQTZCLEtBQUt6RCxXQUFsQyxDQUFoQztBQUFBLFVBQ00rRCxXQUFXLEdBQUcsS0FBSzlELG9CQUFMLENBQTBCK0QsYUFBMUIsQ0FBd0NQLElBQXhDLENBRHBCO0FBQUEsVUFFTVEsVUFBVSxHQUFHTCx1QkFGbkIsQ0FEK0MsQ0FHSDs7QUFFNUMsVUFBSSxLQUFKLEVBQVcsQ0FDVDtBQUNELE9BRkQsTUFFTyxJQUFJSyxVQUFKLEVBQWdCO0FBQ3JCLFlBQU0xRCxVQUFVLEdBQUdrRCxJQUFuQixDQURxQixDQUNLOztBQUUxQix3Q0FBb0JsRCxVQUFwQixFQUFnQyxLQUFLUCxXQUFyQztBQUNELE9BSk0sTUFJQSxJQUFJK0QsV0FBSixFQUFpQjtBQUN0QixhQUFLOUQsb0JBQUwsQ0FBMEJpRSxVQUExQixDQUFxQ1QsSUFBckM7O0FBRUEsWUFBSUssc0JBQUosRUFBNEI7QUFDMUIsY0FBTTdCLGdCQUFnQixHQUFHd0IsSUFBSSxDQUFDOUMsbUJBQUwsRUFBekI7QUFBQSxjQUNNaUMsZ0JBQWdCLEdBQUdhLElBQUksQ0FBQ2hELG1CQUFMLEVBRHpCO0FBQUEsY0FFTTBELFlBQVksR0FBRyxLQUFLbEUsb0JBQUwsQ0FBMEJ3QixxQkFBMUIsQ0FBZ0RRLGdCQUFoRCxDQUZyQjtBQUFBLGNBR01ZLFlBQVksR0FBRyxLQUFLNUMsb0JBQUwsQ0FBMEJ3QixxQkFBMUIsQ0FBZ0RtQixnQkFBaEQsQ0FIckI7QUFBQSxjQUlNd0Isb0JBQW9CLEdBQUdELFlBQVksQ0FBQ0UsVUFBYixFQUo3QjtBQUFBLGNBS01DLG9CQUFvQixHQUFHekIsWUFBWSxDQUFDd0IsVUFBYixFQUw3Qjs7QUFPQSxjQUFJRCxvQkFBSixFQUEwQjtBQUN4QixpQkFBS25FLG9CQUFMLENBQTBCc0Qsd0JBQTFCLENBQW1EdEIsZ0JBQW5EO0FBQ0Q7O0FBRUQsY0FBSXFDLG9CQUFKLEVBQTBCO0FBQ3hCLGlCQUFLckUsb0JBQUwsQ0FBMEJzRCx3QkFBMUIsQ0FBbURYLGdCQUFuRDtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxXQUFLWSxpQkFBTDtBQUNEOzs7Z0NBRVdLLEssRUFBdUM7QUFBQTs7QUFBQSxVQUFoQ0Msc0JBQWdDLHVFQUFQLEtBQU87QUFDakRELE1BQUFBLEtBQUssQ0FBQ3ZELE9BQU4sQ0FBYyxVQUFDbUQsSUFBRDtBQUFBLGVBQVUsTUFBSSxDQUFDUyxVQUFMLENBQWdCVCxJQUFoQixFQUFzQkssc0JBQXRCLENBQVY7QUFBQSxPQUFkO0FBQ0Q7Ozt5Q0FFb0I3QixnQixFQUFrQlcsZ0IsRUFBa0I7QUFDdkQsVUFBTWEsSUFBSSxHQUFHYyxpQkFBS0MsdUNBQUwsQ0FBNkN2QyxnQkFBN0MsRUFBK0RXLGdCQUEvRCxDQUFiOztBQUVBLFdBQUtlLE9BQUwsQ0FBYUYsSUFBYjtBQUNEOzs7NENBRXVCeEIsZ0IsRUFBa0JXLGdCLEVBQWtEO0FBQUEsVUFBaENrQixzQkFBZ0MsdUVBQVAsS0FBTzs7QUFDMUYsVUFBTUwsSUFBSSxHQUFHYyxpQkFBS0MsdUNBQUwsQ0FBNkN2QyxnQkFBN0MsRUFBK0RXLGdCQUEvRCxDQUFiOztBQUVBLFdBQUtzQixVQUFMLENBQWdCVCxJQUFoQixFQUFzQkssc0JBQXRCO0FBQ0Q7OztrREFFNkJsQixnQixFQUFrRDtBQUFBLFVBQWhDa0Isc0JBQWdDLHVFQUFQLEtBQU87QUFDOUUsVUFBTTlELFdBQVcsR0FBRyxvQ0FBd0I0QyxnQkFBeEIsRUFBMEMsS0FBSzVDLFdBQS9DLENBQXBCO0FBQUEsVUFDTTZELEtBQUssR0FBRyxLQUFLNUQsb0JBQUwsQ0FBMEJ3RSwwQkFBMUIsQ0FBcUQ3QixnQkFBckQsQ0FEZDtBQUdBLFdBQUs4QixXQUFMLENBQWlCMUUsV0FBakIsRUFBOEI4RCxzQkFBOUI7QUFFQSxXQUFLWSxXQUFMLENBQWlCYixLQUFqQixFQUF3QkMsc0JBQXhCO0FBQ0Q7OztrREFFNkI3QixnQixFQUFrRDtBQUFBLFVBQWhDNkIsc0JBQWdDLHVFQUFQLEtBQU87QUFDOUUsVUFBTTlELFdBQVcsR0FBRyxvQ0FBd0JpQyxnQkFBeEIsRUFBMEMsS0FBS2pDLFdBQS9DLENBQXBCO0FBQUEsVUFDTTZELEtBQUssR0FBRyxLQUFLNUQsb0JBQUwsQ0FBMEIwRSwwQkFBMUIsQ0FBcUQxQyxnQkFBckQsQ0FEZDtBQUdBLFdBQUt5QyxXQUFMLENBQWlCMUUsV0FBakIsRUFBOEI4RCxzQkFBOUI7QUFFQSxXQUFLWSxXQUFMLENBQWlCYixLQUFqQixFQUF3QkMsc0JBQXhCO0FBQ0Q7OztnREFFMkI7QUFDMUIsV0FBSzdELG9CQUFMLEdBQTRCMkUsdUNBQXFCQyxXQUFyQixFQUE1QjtBQUVBLFdBQUs3RSxXQUFMLEdBQW1CLEVBQW5CO0FBQ0Q7Ozt3Q0FFbUI7QUFBQTs7QUFDbEJGLE1BQUFBLE1BQU0sQ0FBQyxLQUFLRSxXQUFOLEVBQW1CLFVBQUNPLFVBQUQsRUFBZ0I7QUFDdkMsWUFBTTBCLGdCQUFnQixHQUFHMUIsVUFBVSxDQUFDSSxtQkFBWCxFQUF6QjtBQUFBLFlBQ01pQyxnQkFBZ0IsR0FBR3JDLFVBQVUsQ0FBQ0UsbUJBQVgsRUFEekI7QUFBQSxZQUVNcUUsbUJBQW1CLEdBQUcsTUFBSSxDQUFDekQsMkJBQUwsQ0FBaUNZLGdCQUFqQyxDQUY1QjtBQUFBLFlBR004QyxtQkFBbUIsR0FBRyxNQUFJLENBQUMxRCwyQkFBTCxDQUFpQ3VCLGdCQUFqQyxDQUg1Qjs7QUFLQSxZQUFJa0MsbUJBQW1CLElBQUlDLG1CQUEzQixFQUFnRDtBQUM5QyxpQkFBTyxJQUFQO0FBQ0Q7QUFDRixPQVRLLENBQU47QUFXQWpGLE1BQUFBLE1BQU0sQ0FBQyxLQUFLRSxXQUFOLEVBQW1CLFVBQUNPLFVBQUQsRUFBZ0I7QUFDdkMsWUFBTWtELElBQUksR0FBR2xELFVBQWI7QUFBQSxZQUEwQjtBQUNwQm1ELFFBQUFBLE9BQU8sR0FBRyxNQUFJLENBQUN6RCxvQkFBTCxDQUEwQjBELE9BQTFCLENBQWtDRixJQUFsQyxDQURoQjs7QUFHQSxZQUFJLENBQUNDLE9BQUwsRUFBYztBQUNaLGlCQUFPLElBQVA7QUFDRDtBQUNGLE9BUEssQ0FBTjtBQVFEOzs7a0NBRW9CO0FBQ25CLFVBQU0xRCxXQUFXLEdBQUcsRUFBcEI7QUFBQSxVQUNNQyxvQkFBb0IsR0FBRzJFLHVDQUFxQkMsV0FBckIsRUFEN0I7QUFBQSxVQUVNRyxhQUFhLEdBQUcsSUFBSWpGLGFBQUosQ0FBa0JDLFdBQWxCLEVBQStCQyxvQkFBL0IsQ0FGdEI7O0FBSUEsYUFBTytFLGFBQVA7QUFDRDs7O3VDQUV5QkMsYyxFQUFnQjtBQUN4QyxVQUFNM0IsV0FBVyxHQUFHLDJDQUE4QjJCLGNBQTlCLENBQXBCO0FBQUEsVUFDTXBCLEtBQUssR0FBRyxvQ0FBd0JvQixjQUF4QixDQURkO0FBQUEsVUFFTUQsYUFBYSxHQUFHakYsYUFBYSxDQUFDbUYsdUJBQWQsQ0FBc0M1QixXQUF0QyxFQUFtRE8sS0FBbkQsQ0FGdEI7QUFJQSxhQUFPbUIsYUFBUDtBQUNEOzs7NENBRThCMUIsVyxFQUFhTyxLLEVBQU87QUFDakQsVUFBSW1CLGFBQUo7O0FBRUEsVUFBTUcsS0FBSyxHQUFHQyxpQkFBTUYsdUJBQU4sQ0FBOEI1QixXQUE5QixFQUEyQ08sS0FBM0MsQ0FBZDtBQUFBLFVBQ00xQyxhQUFhLEdBQUdnRSxLQUFLLENBQUNFLGdCQUFOLEVBRHRCOztBQUdBLFVBQUlsRSxhQUFKLEVBQW1CO0FBQ2pCLFlBQU1uQixXQUFXLEdBQUcsRUFBcEI7QUFBQSxZQUNNQyxvQkFBb0IsR0FBRzJFLHVDQUFxQlUsZUFBckIsQ0FBcUNoQyxXQUFyQyxDQUQ3Qjs7QUFHQTBCLFFBQUFBLGFBQWEsR0FBRyxJQUFJakYsYUFBSixDQUFrQkMsV0FBbEIsRUFBK0JDLG9CQUEvQixDQUFoQjtBQUVBNEQsUUFBQUEsS0FBSyxDQUFDdkQsT0FBTixDQUFjLFVBQUNtRCxJQUFEO0FBQUEsaUJBQVV1QixhQUFhLENBQUNyQixPQUFkLENBQXNCRixJQUF0QixDQUFWO0FBQUEsU0FBZDtBQUNELE9BUEQsTUFPTztBQUNMLFlBQU04QixlQUFlLEdBQUdKLEtBQUssQ0FBQ0ssa0JBQU4sRUFBeEI7QUFBQSxZQUNNeEYsWUFBVyxHQUFHLEVBRHBCO0FBQUEsWUFFTUMscUJBQW9CLEdBQUcyRSx1Q0FBcUJhLG1CQUFyQixDQUF5Q0YsZUFBekMsQ0FGN0I7O0FBSUFQLFFBQUFBLGFBQWEsR0FBRyxJQUFJakYsYUFBSixDQUFrQkMsWUFBbEIsRUFBK0JDLHFCQUEvQixDQUFoQjtBQUNEOztBQUVELGFBQU8rRSxhQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgR3JhcGggfSBmcm9tIFwib2NjYW0ta2FoblwiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5pbXBvcnQgeyBEaXJlY3RlZEFjeWNsaWNHcmFwaCB9IGZyb20gXCJvY2NhbS1wZWFyY2Uta2VsbHlcIjtcblxuaW1wb3J0IEVkZ2UgZnJvbSBcIi4vZWRnZVwiO1xuaW1wb3J0IEN5Y2xlIGZyb20gXCIuL2N5Y2xlXCI7XG5pbXBvcnQgUGFydGlhbEN5Y2xlIGZyb20gXCIuL3BhcnRpYWxDeWNsZVwiO1xuXG5pbXBvcnQgeyB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhMaXRlcmFscywgZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3ZlcnRleFwiO1xuaW1wb3J0IHsgZWRnZXNGcm9tVmVydGV4TGl0ZXJhbHMsIGNoZWNrRWRnZXNJbmNsdWRlc0VkZ2UsIHJlbW92ZUVkZ2VGcm9tRWRnZXMsIGVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lLCBlZGdlc0J5VGFyZ2V0VmVydGV4TmFtZSB9IGZyb20gXCIuL3V0aWxpdGllcy9lZGdlXCI7XG5cbmNvbnN0IHsgZmlyc3QsIGZpbHRlciB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdGVkR3JhcGgge1xuICBjb25zdHJ1Y3RvcihjeWNsaWNFZGdlcywgZGlyZWN0ZWRBY3ljbGljR3JhcGgpIHtcbiAgICB0aGlzLmN5Y2xpY0VkZ2VzID0gY3ljbGljRWRnZXM7XG5cbiAgICB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoID0gZGlyZWN0ZWRBY3ljbGljR3JhcGg7XG4gIH1cblxuICBnZXRDeWNsaWNFZGdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5jeWNsaWNFZGdlcztcbiAgfVxuXG4gIGdldERpcmVjdGVkQWN5Y2xpY0dyYXBoKCkge1xuICAgIHJldHVybiB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoO1xuICB9XG5cbiAgZ2V0SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lLCBpbmNsdWRlQ3ljbGljRWRnZXMgPSBmYWxzZSkge1xuICAgIGNvbnN0IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMgPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICBpZiAoaW5jbHVkZUN5Y2xpY0VkZ2VzKSB7XG4gICAgICB0aGlzLmN5Y2xpY0VkZ2VzLmZvckVhY2goKGN5Y2xpY0VkZ2UpID0+IHtcbiAgICAgICAgY29uc3QgY3ljbGljRWRnZVRhcmdldFZlcnRleE5hbWUgPSBjeWNsaWNFZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKTtcblxuICAgICAgICBpZiAoY3ljbGljRWRnZVRhcmdldFZlcnRleE5hbWUgPT09IHZlcnRleE5hbWUpIHtcbiAgICAgICAgICBjb25zdCBjeWNsaWNFZGdlU291cmNlVmVydGV4TmFtZSA9IGN5Y2xpY0VkZ2UuZ2V0U291cmNlVmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgICAgIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZSA9IGN5Y2xpY0VkZ2VTb3VyY2VWZXJ0ZXhOYW1lOyAgLy8vXG5cbiAgICAgICAgICBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzLnB1c2goaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXM7XG4gIH1cblxuICBnZXRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lLCBpbmNsdWRlQ3ljbGljRWRnZXMgPSBmYWxzZSkge1xuICAgIGNvbnN0IGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWVzID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgIGlmIChpbmNsdWRlQ3ljbGljRWRnZXMpIHtcbiAgICAgIHRoaXMuY3ljbGljRWRnZXMuZm9yRWFjaCgoY3ljbGljRWRnZSkgPT4ge1xuICAgICAgICBjb25zdCBjeWNsaWNFZGdlU291cmNlVmVydGV4TmFtZSA9IGN5Y2xpY0VkZ2UuZ2V0U291cmNlVmVydGV4TmFtZSgpO1xuXG4gICAgICAgIGlmIChjeWNsaWNFZGdlU291cmNlVmVydGV4TmFtZSA9PT0gdmVydGV4TmFtZSkge1xuICAgICAgICAgIGNvbnN0IGN5Y2xpY0VkZ2VUYXJnZXRWZXJ0ZXhOYW1lID0gY3ljbGljRWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICAgICAgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZSA9IGN5Y2xpY0VkZ2VUYXJnZXRWZXJ0ZXhOYW1lOyAgLy8vXG5cbiAgICAgICAgICBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcy5wdXNoKGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZXM7XG4gIH1cblxuICBnZXRQcmVkZWNlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHsgcmV0dXJuIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0UHJlZGVjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTsgfVxuXG4gIGdldFN1Y2Nlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHsgcmV0dXJuIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0U3VjY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7IH1cblxuICBhcmVDeWNsZXNQcmVzZW50QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBsZXQgY3ljbGVzUHJlc2VudCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdmVydGV4UHJlc2VudCA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgaWYgKHZlcnRleFByZXNlbnQpIHtcbiAgICAgIGNvbnN0IGZpcnN0Q3ljbGUgPSB0aGlzLmdldEZpcnN0Q3ljbGVCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICAgIGN5Y2xlc1ByZXNlbnQgPSAoZmlyc3RDeWNsZSAhPT0gbnVsbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGN5Y2xlc1ByZXNlbnQ7XG4gIH1cblxuICBpc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUodmVydGV4TmFtZSkgeyByZXR1cm4gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5pc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7IH1cblxuICBnZXRGaXJzdEN5Y2xlQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBsZXQgZmlyc3RDeWNsZSA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgdmVydGV4ID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSksXG4gICAgICAgICAgY3ljbGljRWRnZXMgPSB0aGlzLmN5Y2xpY0VkZ2VzLnNsaWNlKCksIC8vL1xuICAgICAgICAgIHBhcnRpYWxDeWNsZXMgPSBbXSxcbiAgICAgICAgICBjeWNsZXMgPSBbXTtcblxuICAgIGZvcndhcmRzRGVwdGhGaXJzdFNlYXJjaCh2ZXJ0ZXgsICh2aXNpdGVkVmVydGV4LCBnZXRQcmVkZWNlc3NvclZlcnRpY2VzKSA9PiB7XG4gICAgICBjb25zdCB2aXNpdGVkVmVydGV4TmFtZSA9IHZpc2l0ZWRWZXJ0ZXguZ2V0TmFtZSgpLFxuICAgICAgICAgICAgc291cmNlVmVydGV4TmFtZSA9IHZpc2l0ZWRWZXJ0ZXhOYW1lOyAvLy9cblxuICAgICAgZmlsdGVyKGN5Y2xpY0VkZ2VzLCAoY3ljbGljRWRnZSkgPT4ge1xuICAgICAgICBjb25zdCBtYXRjaGVzID0gY3ljbGljRWRnZS5tYXRjaFNvdXJjZVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSk7XG5cbiAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICBjb25zdCBwcmVkZWNlc3NvclZlcnRpY2VzID0gZ2V0UHJlZGVjZXNzb3JWZXJ0aWNlcygpLFxuICAgICAgICAgICAgICAgIHBhcnRpYWxDeWNsZSA9ICBQYXJ0aWFsQ3ljbGUuZnJvbUN5Y2xpY0VkZ2VBbmRQcmVkZWNlc3NvclZlcnRpY2VzKGN5Y2xpY0VkZ2UsIHByZWRlY2Vzc29yVmVydGljZXMpO1xuICAgICAgICAgIFxuICAgICAgICAgIHBhcnRpYWxDeWNsZXMucHVzaChwYXJ0aWFsQ3ljbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgY3ljbGljRWRnZXNMZW5ndGggPSBjeWNsaWNFZGdlcy5sZW5ndGgsXG4gICAgICAgICAgICB0ZXJtaW5hdGUgPSAoY3ljbGljRWRnZXNMZW5ndGggPT09IDApO1xuXG4gICAgICByZXR1cm4gdGVybWluYXRlO1xuICAgIH0pO1xuXG4gICAgcGFydGlhbEN5Y2xlcy5zb21lKChwYXJ0aWFsQ3ljbGUpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldFZlcnRleE5hbWUgPSBwYXJ0aWFsQ3ljbGUuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICAgIGZvcndhcmRzRGVwdGhGaXJzdFNlYXJjaCh0YXJnZXRWZXJ0ZXgsICh2aXNpdGVkVmVydGV4LCBnZXRQcmVkZWNlc3NvclZlcnRpY2VzKSA9PiB7XG4gICAgICAgIGNvbnN0IHZpc2l0ZWRWZXJ0ZXhOYW1lID0gdmlzaXRlZFZlcnRleC5nZXROYW1lKCk7XG5cbiAgICAgICAgaWYgKHZpc2l0ZWRWZXJ0ZXhOYW1lID09PSB2ZXJ0ZXhOYW1lKSB7XG4gICAgICAgICAgY29uc3QgcHJlZGVjZXNzb3JWZXJ0aWNlcyA9IGdldFByZWRlY2Vzc29yVmVydGljZXMoKSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzb3JWZXJ0aWNlcyA9IHByZWRlY2Vzc29yVmVydGljZXMsICAvLy9cbiAgICAgICAgICAgICAgICBjeWNsZSA9IEN5Y2xlLmZyb21WZXJ0ZXhOYW1lUGFydGlhbEN5Y2xlQW5kU3VjY2Vzc29yVmVydGljZXModmVydGV4TmFtZSwgcGFydGlhbEN5Y2xlLCBzdWNjZXNzb3JWZXJ0aWNlcyk7XG5cbiAgICAgICAgICBjeWNsZXMucHVzaChjeWNsZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjeWNsZXNMZW5ndGggPSBjeWNsZXMubGVuZ3RoLFxuICAgICAgICAgICAgICB0ZXJtaW5hdGUgPSAoY3ljbGVzTGVuZ3RoID4gMCk7XG5cbiAgICAgICAgcmV0dXJuIHRlcm1pbmF0ZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY3ljbGVzTGVuZ3RoID0gY3ljbGVzLmxlbmd0aDtcbiAgICBcbiAgICBpZiAoY3ljbGVzTGVuZ3RoID4gMCkge1xuICAgICAgZmlyc3RDeWNsZSA9IGZpcnN0KGN5Y2xlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpcnN0Q3ljbGU7XG4gIH1cblxuICBnZXRGaXJzdEN5Y2xlKCkge1xuICAgIGNvbnN0IGZpcnN0Q3ljbGljRWRnZSA9IGZpcnN0KHRoaXMuY3ljbGljRWRnZXMpLFxuICAgICAgICAgIGN5Y2xpY0VkZ2UgPSBmaXJzdEN5Y2xpY0VkZ2UsIC8vL1xuICAgICAgICAgIHNvdXJjZVZlcnRleE5hbWUgPSBjeWNsaWNFZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSxcbiAgICAgICAgICB2ZXJ0ZXhOYW1lID0gc291cmNlVmVydGV4TmFtZSwgIC8vL1xuICAgICAgICAgIGZpcnN0Q3ljbGUgPSB0aGlzLmdldEZpcnN0Q3ljbGVCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICByZXR1cm4gZmlyc3RDeWNsZTtcbiAgfVxuXG4gIGdldE9yZGVyZWRWZXJ0ZXhOYW1lcygpIHsgcmV0dXJuIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0T3JkZXJlZFZlcnRleE5hbWVzKCk7IH1cblxuICBhcmVDeWNsZXNQcmVzZW50KCkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VzTGVuZ3RoID0gdGhpcy5jeWNsaWNFZGdlcy5sZW5ndGgsXG4gICAgICAgICAgY3ljbGVzUHJlc2VudCA9IChjeWNsaWNFZGdlc0xlbmd0aCA+IDApO1xuXG4gICAgcmV0dXJuIGN5Y2xlc1ByZXNlbnQ7XG4gIH1cblxuICBhZGRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSkgeyB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmFkZFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTsgfVxuXG4gIGFkZFZlcnRpY2VzQnlWZXJ0ZXhOYW1lcyh2ZXJ0ZXhOYW1lcykge1xuICAgIHZlcnRleE5hbWVzLmZvckVhY2goKHZlcnRleE5hbWUpID0+IHRoaXMuYWRkVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpKTtcbiAgfVxuXG4gIHJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7XG4gICAgdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5yZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICB0aGlzLmZpbHRlckN5Y2xpY0VkZ2VzKCk7XG4gIH1cblxuICByZW1vdmVWZXJ0aWNlc0J5VmVydGV4TmFtZXModmVydGV4TmFtZXMpIHtcbiAgICB2ZXJ0ZXhOYW1lcy5mb3JFYWNoKCh2ZXJ0ZXhOYW1lKSA9PiB0aGlzLnJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSk7XG4gIH1cblxuICBhZGRFZGdlKGVkZ2UpIHtcbiAgICBjb25zdCBzdWNjZXNzID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5hZGRFZGdlKGVkZ2UpO1xuICAgIFxuICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgY29uc3QgY3ljbGljRWRnZXNJbmNsdWRlc0VkZ2UgPSBjaGVja0VkZ2VzSW5jbHVkZXNFZGdlKGVkZ2UsIHRoaXMuY3ljbGljRWRnZXMpO1xuXG4gICAgICBpZiAoIWN5Y2xpY0VkZ2VzSW5jbHVkZXNFZGdlKSB7XG4gICAgICAgIGNvbnN0IGN5Y2xpY0VkZ2UgPSBlZGdlOyAgLy8vXG5cbiAgICAgICAgdGhpcy5jeWNsaWNFZGdlcy5wdXNoKGN5Y2xpY0VkZ2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgYWRkRWRnZXMoZWRnZXMpIHtcbiAgICBlZGdlcy5mb3JFYWNoKChlZGdlKSA9PiB0aGlzLmFkZEVkZ2UoZWRnZSkpO1xuICB9XG5cbiAgcmVtb3ZlRWRnZShlZGdlLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzID0gZmFsc2UpIHtcbiAgICBjb25zdCBjeWNsaWNFZGdlc0luY2x1ZGVzRWRnZSA9IGNoZWNrRWRnZXNJbmNsdWRlc0VkZ2UoZWRnZSwgdGhpcy5jeWNsaWNFZGdlcyksXG4gICAgICAgICAgZWRnZVByZXNlbnQgPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmlzRWRnZVByZXNlbnQoZWRnZSksXG4gICAgICAgICAgZWRnZUN5Y2xpYyA9IGN5Y2xpY0VkZ2VzSW5jbHVkZXNFZGdlOyAvLy9cblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmIChlZGdlQ3ljbGljKSB7XG4gICAgICBjb25zdCBjeWNsaWNFZGdlID0gZWRnZTsgIC8vL1xuXG4gICAgICByZW1vdmVFZGdlRnJvbUVkZ2VzKGN5Y2xpY0VkZ2UsIHRoaXMuY3ljbGljRWRnZXMpO1xuICAgIH0gZWxzZSBpZiAoZWRnZVByZXNlbnQpIHtcbiAgICAgIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGgucmVtb3ZlRWRnZShlZGdlKTtcblxuICAgICAgaWYgKHJlbW92ZVN0cmFuZGVkVmVydGljZXMpIHtcbiAgICAgICAgY29uc3Qgc291cmNlVmVydGV4TmFtZSA9IGVkZ2UuZ2V0U291cmNlVmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gZWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICAgIHNvdXJjZVZlcnRleCA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0VmVydGV4QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpLFxuICAgICAgICAgICAgICB0YXJnZXRWZXJ0ZXggPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldFZlcnRleEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICAgICAgc291cmNlVmVydGV4U3RyYW5kZWQgPSBzb3VyY2VWZXJ0ZXguaXNTdHJhbmRlZCgpLFxuICAgICAgICAgICAgICB0YXJnZXRWZXJ0ZXhTdHJhbmRlZCA9IHRhcmdldFZlcnRleC5pc1N0cmFuZGVkKCk7XG5cbiAgICAgICAgaWYgKHNvdXJjZVZlcnRleFN0cmFuZGVkKSB7XG4gICAgICAgICAgdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5yZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGFyZ2V0VmVydGV4U3RyYW5kZWQpIHtcbiAgICAgICAgICB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLnJlbW92ZVZlcnRleEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZmlsdGVyQ3ljbGljRWRnZXMoKTtcbiAgfVxuXG4gIHJlbW92ZUVkZ2VzKGVkZ2VzLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzID0gZmFsc2UpIHtcbiAgICBlZGdlcy5mb3JFYWNoKChlZGdlKSA9PiB0aGlzLnJlbW92ZUVkZ2UoZWRnZSwgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcykpO1xuICB9XG5cbiAgYWRkRWRnZUJ5VmVydGV4TmFtZXMoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSkge1xuICAgIGNvbnN0IGVkZ2UgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgIHRoaXMuYWRkRWRnZShlZGdlKTtcbiAgfVxuXG4gIHJlbW92ZUVkZ2VCeVZlcnRleE5hbWVzKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMgPSBmYWxzZSkge1xuICAgIGNvbnN0IGVkZ2UgPSBFZGdlLmZyb21Tb3VyY2VWZXJ0ZXhOYW1lQW5kVGFyZ2V0VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgIHRoaXMucmVtb3ZlRWRnZShlZGdlLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzKTtcbiAgfVxuXG4gIHJlbW92ZUVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMgPSBmYWxzZSkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VzID0gZWRnZXNCeVRhcmdldFZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSwgdGhpcy5jeWNsaWNFZGdlcyksXG4gICAgICAgICAgZWRnZXMgPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldEVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUpO1xuXG4gICAgdGhpcy5yZW1vdmVFZGdlcyhjeWNsaWNFZGdlcywgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyk7XG5cbiAgICB0aGlzLnJlbW92ZUVkZ2VzKGVkZ2VzLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzKTtcbiAgfVxuXG4gIHJlbW92ZUVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMgPSBmYWxzZSkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VzID0gZWRnZXNCeVNvdXJjZVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGhpcy5jeWNsaWNFZGdlcyksXG4gICAgICAgICAgZWRnZXMgPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldEVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpO1xuXG4gICAgdGhpcy5yZW1vdmVFZGdlcyhjeWNsaWNFZGdlcywgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyk7XG5cbiAgICB0aGlzLnJlbW92ZUVkZ2VzKGVkZ2VzLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzKTtcbiAgfVxuXG4gIHJlbW92ZUFsbEVkZ2VzQW5kVmVydGljZXMoKSB7XG4gICAgdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaCA9IERpcmVjdGVkQWN5Y2xpY0dyYXBoLmZyb21Ob3RoaW5nKCk7XG5cbiAgICB0aGlzLmN5Y2xpY0VkZ2VzID0gW107XG4gIH1cblxuICBmaWx0ZXJDeWNsaWNFZGdlcygpIHtcbiAgICBmaWx0ZXIodGhpcy5jeWNsaWNFZGdlcywgKGN5Y2xpY0VkZ2UpID0+IHtcbiAgICAgIGNvbnN0IHNvdXJjZVZlcnRleE5hbWUgPSBjeWNsaWNFZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleE5hbWUgPSBjeWNsaWNFZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKSxcbiAgICAgICAgICAgIHNvdXJjZVZlcnRleFByZXNlbnQgPSB0aGlzLmlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleFByZXNlbnQgPSB0aGlzLmlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgaWYgKHNvdXJjZVZlcnRleFByZXNlbnQgJiYgdGFyZ2V0VmVydGV4UHJlc2VudCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGZpbHRlcih0aGlzLmN5Y2xpY0VkZ2VzLCAoY3ljbGljRWRnZSkgPT4ge1xuICAgICAgY29uc3QgZWRnZSA9IGN5Y2xpY0VkZ2UsICAvLy9cbiAgICAgICAgICAgIHN1Y2Nlc3MgPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmFkZEVkZ2UoZWRnZSk7XG5cbiAgICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBjeWNsaWNFZGdlcyA9IFtdLFxuICAgICAgICAgIGRpcmVjdGVkQWN5Y2xpY0dyYXBoID0gRGlyZWN0ZWRBY3ljbGljR3JhcGguZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBkaXJlY3RlZEdyYXBoID0gbmV3IERpcmVjdGVkR3JhcGgoY3ljbGljRWRnZXMsIGRpcmVjdGVkQWN5Y2xpY0dyYXBoKTtcbiAgICBcbiAgICByZXR1cm4gZGlyZWN0ZWRHcmFwaDsgICAgXG4gIH1cblxuICBzdGF0aWMgZnJvbVZlcnRleExpdGVyYWxzKHZlcnRleExpdGVyYWxzKSB7XG4gICAgY29uc3QgdmVydGV4TmFtZXMgPSB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhMaXRlcmFscyh2ZXJ0ZXhMaXRlcmFscyksXG4gICAgICAgICAgZWRnZXMgPSBlZGdlc0Zyb21WZXJ0ZXhMaXRlcmFscyh2ZXJ0ZXhMaXRlcmFscyksXG4gICAgICAgICAgZGlyZWN0ZWRHcmFwaCA9IERpcmVjdGVkR3JhcGguZnJvbVZlcnRleE5hbWVzQW5kRWRnZXModmVydGV4TmFtZXMsIGVkZ2VzKTtcblxuICAgIHJldHVybiBkaXJlY3RlZEdyYXBoO1xuICB9XG5cbiAgc3RhdGljIGZyb21WZXJ0ZXhOYW1lc0FuZEVkZ2VzKHZlcnRleE5hbWVzLCBlZGdlcykge1xuICAgIGxldCBkaXJlY3RlZEdyYXBoO1xuXG4gICAgY29uc3QgZ3JhcGggPSBHcmFwaC5mcm9tVmVydGV4TmFtZXNBbmRFZGdlcyh2ZXJ0ZXhOYW1lcywgZWRnZXMpLFxuICAgICAgICAgIGN5Y2xlc1ByZXNlbnQgPSBncmFwaC5hcmVDeWNsZXNQcmVzZW50KCk7XG5cbiAgICBpZiAoY3ljbGVzUHJlc2VudCkge1xuICAgICAgY29uc3QgY3ljbGljRWRnZXMgPSBbXSxcbiAgICAgICAgICAgIGRpcmVjdGVkQWN5Y2xpY0dyYXBoID0gRGlyZWN0ZWRBY3ljbGljR3JhcGguZnJvbVZlcnRleE5hbWVzKHZlcnRleE5hbWVzKTtcblxuICAgICAgZGlyZWN0ZWRHcmFwaCA9IG5ldyBEaXJlY3RlZEdyYXBoKGN5Y2xpY0VkZ2VzLCBkaXJlY3RlZEFjeWNsaWNHcmFwaCk7XG5cbiAgICAgIGVkZ2VzLmZvckVhY2goKGVkZ2UpID0+IGRpcmVjdGVkR3JhcGguYWRkRWRnZShlZGdlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG9yZGVyZWRWZXJ0aWNlcyA9IGdyYXBoLmdldE9yZGVyZWRWZXJ0aWNlcygpLFxuICAgICAgICAgICAgY3ljbGljRWRnZXMgPSBbXSxcbiAgICAgICAgICAgIGRpcmVjdGVkQWN5Y2xpY0dyYXBoID0gRGlyZWN0ZWRBY3ljbGljR3JhcGguZnJvbU9yZGVyZWRWZXJ0aWNlcyhvcmRlcmVkVmVydGljZXMpO1xuXG4gICAgICBkaXJlY3RlZEdyYXBoID0gbmV3IERpcmVjdGVkR3JhcGgoY3ljbGljRWRnZXMsIGRpcmVjdGVkQWN5Y2xpY0dyYXBoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGlyZWN0ZWRHcmFwaDtcbiAgfVxufVxuIl19