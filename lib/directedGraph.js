"use strict";

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
          directedGraph.addEdge(edge);
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

module.exports = DirectedGraph;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpcmVjdGVkR3JhcGguanMiXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsImZpbHRlciIsIkRpcmVjdGVkR3JhcGgiLCJjeWNsaWNFZGdlcyIsImRpcmVjdGVkQWN5Y2xpY0dyYXBoIiwidmVydGV4TmFtZSIsImdldFByZWRlY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUiLCJnZXRTdWNjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSIsImN5Y2xlc1ByZXNlbnQiLCJ2ZXJ0ZXhQcmVzZW50IiwiaXNWZXJ0ZXhQcmVzZW50QnlWZXJ0ZXhOYW1lIiwiZmlyc3RDeWNsZSIsImdldEZpcnN0Q3ljbGVCeVZlcnRleE5hbWUiLCJ2ZXJ0ZXgiLCJnZXRWZXJ0ZXhCeVZlcnRleE5hbWUiLCJzbGljZSIsInBhcnRpYWxDeWNsZXMiLCJjeWNsZXMiLCJ2aXNpdGVkVmVydGV4IiwiZ2V0UHJlZGVjZXNzb3JWZXJ0aWNlcyIsInZpc2l0ZWRWZXJ0ZXhOYW1lIiwiZ2V0TmFtZSIsInNvdXJjZVZlcnRleE5hbWUiLCJjeWNsaWNFZGdlIiwibWF0Y2hlcyIsIm1hdGNoU291cmNlVmVydGV4TmFtZSIsInByZWRlY2Vzc29yVmVydGljZXMiLCJwYXJ0aWFsQ3ljbGUiLCJQYXJ0aWFsQ3ljbGUiLCJmcm9tQ3ljbGljRWRnZUFuZFByZWRlY2Vzc29yVmVydGljZXMiLCJwdXNoIiwiY3ljbGljRWRnZXNMZW5ndGgiLCJsZW5ndGgiLCJ0ZXJtaW5hdGUiLCJzb21lIiwidGFyZ2V0VmVydGV4TmFtZSIsImdldFRhcmdldFZlcnRleE5hbWUiLCJ0YXJnZXRWZXJ0ZXgiLCJzdWNjZXNzb3JWZXJ0aWNlcyIsImN5Y2xlIiwiQ3ljbGUiLCJmcm9tVmVydGV4TmFtZVBhcnRpYWxDeWNsZUFuZFN1Y2Nlc3NvclZlcnRpY2VzIiwiY3ljbGVzTGVuZ3RoIiwiZmlyc3RDeWNsaWNFZGdlIiwiZ2V0U291cmNlVmVydGV4TmFtZSIsImdldFRvcG9sb2dpY2FsbHlPcmRlcmVkVmVydGV4TmFtZXMiLCJhZGRWZXJ0ZXhCeVZlcnRleE5hbWUiLCJ2ZXJ0ZXhOYW1lcyIsImZvckVhY2giLCJyZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUiLCJmaWx0ZXJDeWNsaWNFZGdlcyIsImVkZ2UiLCJzdWNjZXNzIiwiYWRkRWRnZSIsImN5Y2xpY0VkZ2VzSW5jbHVkZXNFZGdlIiwiZWRnZXMiLCJyZW1vdmVTdHJhbmRlZFZlcnRpY2VzIiwiZWRnZVByZXNlbnQiLCJpc0VkZ2VQcmVzZW50IiwiZWRnZUN5Y2xpYyIsInJlbW92ZUVkZ2UiLCJzb3VyY2VWZXJ0ZXgiLCJzb3VyY2VWZXJ0ZXhTdHJhbmRlZCIsImlzU3RyYW5kZWQiLCJ0YXJnZXRWZXJ0ZXhTdHJhbmRlZCIsIkVkZ2UiLCJmcm9tU291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUiLCJnZXRFZGdlc0J5VGFyZ2V0VmVydGV4TmFtZSIsInJlbW92ZUVkZ2VzIiwiZ2V0RWRnZXNCeVNvdXJjZVZlcnRleE5hbWUiLCJEaXJlY3RlZEFjeWNsaWNHcmFwaCIsImZyb21Ob3RoaW5nIiwiZGlyZWN0ZWRHcmFwaCIsInZlcnRleExpdGVyYWxzIiwiZnJvbVZlcnRleE5hbWVzQW5kRWRnZXMiLCJncmFwaCIsIkdyYXBoIiwiYXJlQ3ljbGVzUHJlc2VudCIsImZyb21WZXJ0ZXhOYW1lcyIsInRvcG9sb2dpY2FsbHlPcmRlcmVkVmVydGljZXMiLCJnZXRUb3BvbG9naWNhbGx5T3JkZXJlZFZlcnRpY2VzIiwiZnJvbVRvcG9sb2dpY2FsbHlPcmRlcmVkVmVydGljZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7OztJQUVRQSxLLEdBQWtCQyx5QixDQUFsQkQsSztJQUFPRSxNLEdBQVdELHlCLENBQVhDLE07O0lBRVRDLGE7QUFDSix5QkFBWUMsV0FBWixFQUF5QkMsb0JBQXpCLEVBQStDO0FBQUE7O0FBQzdD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OzRDQUU4QnpCLFcsRUFBYVEsSyxFQUFPO0FBQ2pELFVBQUlpQixhQUFKOztBQUVBLFVBQU1HLEtBQUssR0FBR0MsaUJBQU1GLHVCQUFOLENBQThCM0IsV0FBOUIsRUFBMkNRLEtBQTNDLENBQWQ7QUFBQSxVQUNNL0MsYUFBYSxHQUFHbUUsS0FBSyxDQUFDRSxnQkFBTixFQUR0Qjs7QUFHQSxVQUFJckUsYUFBSixFQUFtQjtBQUNqQixZQUFNTCxXQUFXLEdBQUcsRUFBcEI7QUFBQSxZQUNNQyxvQkFBb0IsR0FBR2tFLHVDQUFxQlEsZUFBckIsQ0FBcUMvQixXQUFyQyxDQUQ3Qjs7QUFHQXlCLFFBQUFBLGFBQWEsR0FBRyxJQUFJdEUsYUFBSixDQUFrQkMsV0FBbEIsRUFBK0JDLG9CQUEvQixDQUFoQjtBQUVBbUQsUUFBQUEsS0FBSyxDQUFDUCxPQUFOLENBQWMsVUFBU0csSUFBVCxFQUFlO0FBQzNCcUIsVUFBQUEsYUFBYSxDQUFDbkIsT0FBZCxDQUFzQkYsSUFBdEI7QUFDRCxTQUZEO0FBR0QsT0FURCxNQVNPO0FBQ0wsWUFBTTRCLDRCQUE0QixHQUFHSixLQUFLLENBQUNLLCtCQUFOLEVBQXJDO0FBQUEsWUFDTTdFLFlBQVcsR0FBRyxFQURwQjtBQUFBLFlBRU1DLHFCQUFvQixHQUFHa0UsdUNBQXFCVyxnQ0FBckIsQ0FBc0RGLDRCQUF0RCxDQUY3Qjs7QUFJQVAsUUFBQUEsYUFBYSxHQUFHLElBQUl0RSxhQUFKLENBQWtCQyxZQUFsQixFQUErQkMscUJBQS9CLENBQWhCO0FBQ0Q7O0FBRUQsYUFBT29FLGFBQVA7QUFDRDs7Ozs7O0FBR0hVLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmpGLGFBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEdyYXBoIH0gZnJvbSBcIm9jY2FtLWthaG5cIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgRGlyZWN0ZWRBY3ljbGljR3JhcGggfSBmcm9tIFwib2NjYW0tcGVhcmNlLWtlbGx5XCI7XG5cbmltcG9ydCBFZGdlIGZyb20gXCIuL2VkZ2VcIjtcbmltcG9ydCBDeWNsZSBmcm9tIFwiLi9jeWNsZVwiO1xuaW1wb3J0IFBhcnRpYWxDeWNsZSBmcm9tIFwiLi9wYXJ0aWFsQ3ljbGVcIjtcblxuaW1wb3J0IHsgdmVydGV4TmFtZXNGcm9tVmVydGV4TGl0ZXJhbHMsIGZvcndhcmRzRGVwdGhGaXJzdFNlYXJjaCB9IGZyb20gXCIuL3V0aWxpdGllcy92ZXJ0ZXhcIjtcbmltcG9ydCB7IGVkZ2VzRnJvbVZlcnRleExpdGVyYWxzLCBjaGVja0VkZ2VzSW5jbHVkZXNFZGdlLCByZW1vdmVFZGdlRnJvbUVkZ2VzLCBlZGdlc0J5U291cmNlVmVydGV4TmFtZSwgZWRnZXNCeVRhcmdldFZlcnRleE5hbWUgfSBmcm9tIFwiLi91dGlsaXRpZXMvZWRnZVwiO1xuXG5jb25zdCB7IGZpcnN0LCBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jbGFzcyBEaXJlY3RlZEdyYXBoIHtcbiAgY29uc3RydWN0b3IoY3ljbGljRWRnZXMsIGRpcmVjdGVkQWN5Y2xpY0dyYXBoKSB7XG4gICAgdGhpcy5jeWNsaWNFZGdlcyA9IGN5Y2xpY0VkZ2VzO1xuXG4gICAgdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaCA9IGRpcmVjdGVkQWN5Y2xpY0dyYXBoO1xuICB9XG5cbiAgZ2V0Q3ljbGljRWRnZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3ljbGljRWRnZXM7XG4gIH1cblxuICBnZXREaXJlY3RlZEFjeWNsaWNHcmFwaCgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaDtcbiAgfVxuXG4gIGdldFByZWRlY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUodmVydGV4TmFtZSkgeyByZXR1cm4gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRQcmVkZWNlc3NvclZlcnRleE5hbWVzQnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpOyB9XG5cbiAgZ2V0U3VjY2Vzc29yVmVydGV4TmFtZXNCeVZlcnRleE5hbWUodmVydGV4TmFtZSkgeyByZXR1cm4gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRTdWNjZXNzb3JWZXJ0ZXhOYW1lc0J5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTsgfVxuXG4gIGFyZUN5Y2xlc1ByZXNlbnRCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGxldCBjeWNsZXNQcmVzZW50ID0gZmFsc2U7XG5cbiAgICBjb25zdCB2ZXJ0ZXhQcmVzZW50ID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5pc1ZlcnRleFByZXNlbnRCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICBpZiAodmVydGV4UHJlc2VudCkge1xuICAgICAgY29uc3QgZmlyc3RDeWNsZSA9IHRoaXMuZ2V0Rmlyc3RDeWNsZUJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgICAgY3ljbGVzUHJlc2VudCA9IChmaXJzdEN5Y2xlICE9PSBudWxsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3ljbGVzUHJlc2VudDtcbiAgfVxuXG4gIGlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSB7IHJldHVybiB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmlzVmVydGV4UHJlc2VudEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTsgfVxuXG4gIGdldEZpcnN0Q3ljbGVCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGxldCBmaXJzdEN5Y2xlID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCB2ZXJ0ZXggPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSxcbiAgICAgICAgICBjeWNsaWNFZGdlcyA9IHRoaXMuY3ljbGljRWRnZXMuc2xpY2UoKSwgLy8vXG4gICAgICAgICAgcGFydGlhbEN5Y2xlcyA9IFtdLFxuICAgICAgICAgIGN5Y2xlcyA9IFtdO1xuXG4gICAgZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoKHZlcnRleCwgZnVuY3Rpb24odmlzaXRlZFZlcnRleCwgZ2V0UHJlZGVjZXNzb3JWZXJ0aWNlcykge1xuICAgICAgY29uc3QgdmlzaXRlZFZlcnRleE5hbWUgPSB2aXNpdGVkVmVydGV4LmdldE5hbWUoKSxcbiAgICAgICAgICAgIHNvdXJjZVZlcnRleE5hbWUgPSB2aXNpdGVkVmVydGV4TmFtZTsgLy8vXG5cbiAgICAgIGZpbHRlcihjeWNsaWNFZGdlcywgZnVuY3Rpb24oY3ljbGljRWRnZSkge1xuICAgICAgICBjb25zdCBtYXRjaGVzID0gY3ljbGljRWRnZS5tYXRjaFNvdXJjZVZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSk7XG5cbiAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICBjb25zdCBwcmVkZWNlc3NvclZlcnRpY2VzID0gZ2V0UHJlZGVjZXNzb3JWZXJ0aWNlcygpLFxuICAgICAgICAgICAgICAgIHBhcnRpYWxDeWNsZSA9ICBQYXJ0aWFsQ3ljbGUuZnJvbUN5Y2xpY0VkZ2VBbmRQcmVkZWNlc3NvclZlcnRpY2VzKGN5Y2xpY0VkZ2UsIHByZWRlY2Vzc29yVmVydGljZXMpO1xuICAgICAgICAgIFxuICAgICAgICAgIHBhcnRpYWxDeWNsZXMucHVzaChwYXJ0aWFsQ3ljbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgY3ljbGljRWRnZXNMZW5ndGggPSBjeWNsaWNFZGdlcy5sZW5ndGgsXG4gICAgICAgICAgICB0ZXJtaW5hdGUgPSAoY3ljbGljRWRnZXNMZW5ndGggPT09IDApO1xuXG4gICAgICByZXR1cm4gdGVybWluYXRlO1xuICAgIH0pO1xuXG4gICAgcGFydGlhbEN5Y2xlcy5zb21lKChwYXJ0aWFsQ3ljbGUpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldFZlcnRleE5hbWUgPSBwYXJ0aWFsQ3ljbGUuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICAgIGZvcndhcmRzRGVwdGhGaXJzdFNlYXJjaCh0YXJnZXRWZXJ0ZXgsIGZ1bmN0aW9uKHZpc2l0ZWRWZXJ0ZXgsIGdldFByZWRlY2Vzc29yVmVydGljZXMpIHtcbiAgICAgICAgY29uc3QgdmlzaXRlZFZlcnRleE5hbWUgPSB2aXNpdGVkVmVydGV4LmdldE5hbWUoKTtcblxuICAgICAgICBpZiAodmlzaXRlZFZlcnRleE5hbWUgPT09IHZlcnRleE5hbWUpIHtcbiAgICAgICAgICBjb25zdCBwcmVkZWNlc3NvclZlcnRpY2VzID0gZ2V0UHJlZGVjZXNzb3JWZXJ0aWNlcygpLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3NvclZlcnRpY2VzID0gcHJlZGVjZXNzb3JWZXJ0aWNlcywgIC8vL1xuICAgICAgICAgICAgICAgIGN5Y2xlID0gQ3ljbGUuZnJvbVZlcnRleE5hbWVQYXJ0aWFsQ3ljbGVBbmRTdWNjZXNzb3JWZXJ0aWNlcyh2ZXJ0ZXhOYW1lLCBwYXJ0aWFsQ3ljbGUsIHN1Y2Nlc3NvclZlcnRpY2VzKTtcblxuICAgICAgICAgIGN5Y2xlcy5wdXNoKGN5Y2xlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGN5Y2xlc0xlbmd0aCA9IGN5Y2xlcy5sZW5ndGgsXG4gICAgICAgICAgICAgIHRlcm1pbmF0ZSA9IChjeWNsZXNMZW5ndGggPiAwKTtcblxuICAgICAgICByZXR1cm4gdGVybWluYXRlO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjeWNsZXNMZW5ndGggPSBjeWNsZXMubGVuZ3RoO1xuICAgIFxuICAgIGlmIChjeWNsZXNMZW5ndGggPiAwKSB7XG4gICAgICBmaXJzdEN5Y2xlID0gZmlyc3QoY3ljbGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmlyc3RDeWNsZTtcbiAgfVxuXG4gIGdldEZpcnN0Q3ljbGUoKSB7XG4gICAgY29uc3QgZmlyc3RDeWNsaWNFZGdlID0gZmlyc3QodGhpcy5jeWNsaWNFZGdlcyksXG4gICAgICAgICAgY3ljbGljRWRnZSA9IGZpcnN0Q3ljbGljRWRnZSwgLy8vXG4gICAgICAgICAgc291cmNlVmVydGV4TmFtZSA9IGN5Y2xpY0VkZ2UuZ2V0U291cmNlVmVydGV4TmFtZSgpLFxuICAgICAgICAgIHZlcnRleE5hbWUgPSBzb3VyY2VWZXJ0ZXhOYW1lLCAgLy8vXG4gICAgICAgICAgZmlyc3RDeWNsZSA9IHRoaXMuZ2V0Rmlyc3RDeWNsZUJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKTtcblxuICAgIHJldHVybiBmaXJzdEN5Y2xlO1xuICB9XG5cbiAgZ2V0VG9wb2xvZ2ljYWxseU9yZGVyZWRWZXJ0ZXhOYW1lcygpIHsgcmV0dXJuIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguZ2V0VG9wb2xvZ2ljYWxseU9yZGVyZWRWZXJ0ZXhOYW1lcygpOyB9XG5cbiAgYXJlQ3ljbGVzUHJlc2VudCgpIHtcbiAgICBjb25zdCBjeWNsaWNFZGdlc0xlbmd0aCA9IHRoaXMuY3ljbGljRWRnZXMubGVuZ3RoLFxuICAgICAgICAgIGN5Y2xlc1ByZXNlbnQgPSAoY3ljbGljRWRnZXNMZW5ndGggPiAwKTtcblxuICAgIHJldHVybiBjeWNsZXNQcmVzZW50O1xuICB9XG5cbiAgYWRkVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHsgdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5hZGRWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSk7IH1cblxuICBhZGRWZXJ0aWNlc0J5VmVydGV4TmFtZXModmVydGV4TmFtZXMpIHtcbiAgICB2ZXJ0ZXhOYW1lcy5mb3JFYWNoKCh2ZXJ0ZXhOYW1lKSA9PiB0aGlzLmFkZFZlcnRleEJ5VmVydGV4TmFtZSh2ZXJ0ZXhOYW1lKSk7XG4gIH1cblxuICByZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGgucmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKHZlcnRleE5hbWUpO1xuXG4gICAgdGhpcy5maWx0ZXJDeWNsaWNFZGdlcygpO1xuICB9XG5cbiAgcmVtb3ZlVmVydGljZXNCeVZlcnRleE5hbWVzKHZlcnRleE5hbWVzKSB7XG4gICAgdmVydGV4TmFtZXMuZm9yRWFjaCgodmVydGV4TmFtZSkgPT4gdGhpcy5yZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUodmVydGV4TmFtZSkpO1xuICB9XG5cbiAgYWRkRWRnZShlZGdlKSB7XG4gICAgY29uc3Qgc3VjY2VzcyA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguYWRkRWRnZShlZGdlKTtcbiAgICBcbiAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgIGNvbnN0IGN5Y2xpY0VkZ2VzSW5jbHVkZXNFZGdlID0gY2hlY2tFZGdlc0luY2x1ZGVzRWRnZShlZGdlLCB0aGlzLmN5Y2xpY0VkZ2VzKTtcblxuICAgICAgaWYgKCFjeWNsaWNFZGdlc0luY2x1ZGVzRWRnZSkge1xuICAgICAgICBjb25zdCBjeWNsaWNFZGdlID0gZWRnZTsgIC8vL1xuXG4gICAgICAgIHRoaXMuY3ljbGljRWRnZXMucHVzaChjeWNsaWNFZGdlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIGFkZEVkZ2VzKGVkZ2VzKSB7XG4gICAgZWRnZXMuZm9yRWFjaCgoZWRnZSkgPT4gdGhpcy5hZGRFZGdlKGVkZ2UpKTtcbiAgfVxuXG4gIHJlbW92ZUVkZ2UoZWRnZSwgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyA9IGZhbHNlKSB7XG4gICAgY29uc3QgY3ljbGljRWRnZXNJbmNsdWRlc0VkZ2UgPSBjaGVja0VkZ2VzSW5jbHVkZXNFZGdlKGVkZ2UsIHRoaXMuY3ljbGljRWRnZXMpLFxuICAgICAgICAgIGVkZ2VQcmVzZW50ID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5pc0VkZ2VQcmVzZW50KGVkZ2UpLFxuICAgICAgICAgIGVkZ2VDeWNsaWMgPSBjeWNsaWNFZGdlc0luY2x1ZGVzRWRnZTsgLy8vXG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAoZWRnZUN5Y2xpYykge1xuICAgICAgY29uc3QgY3ljbGljRWRnZSA9IGVkZ2U7ICAvLy9cblxuICAgICAgcmVtb3ZlRWRnZUZyb21FZGdlcyhjeWNsaWNFZGdlLCB0aGlzLmN5Y2xpY0VkZ2VzKTtcbiAgICB9IGVsc2UgaWYgKGVkZ2VQcmVzZW50KSB7XG4gICAgICB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLnJlbW92ZUVkZ2UoZWRnZSk7XG5cbiAgICAgIGlmIChyZW1vdmVTdHJhbmRlZFZlcnRpY2VzKSB7XG4gICAgICAgIGNvbnN0IHNvdXJjZVZlcnRleE5hbWUgPSBlZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSxcbiAgICAgICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IGVkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgICAgICBzb3VyY2VWZXJ0ZXggPSB0aGlzLmRpcmVjdGVkQWN5Y2xpY0dyYXBoLmdldFZlcnRleEJ5VmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSksXG4gICAgICAgICAgICAgIHNvdXJjZVZlcnRleFN0cmFuZGVkID0gc291cmNlVmVydGV4LmlzU3RyYW5kZWQoKSxcbiAgICAgICAgICAgICAgdGFyZ2V0VmVydGV4U3RyYW5kZWQgPSB0YXJnZXRWZXJ0ZXguaXNTdHJhbmRlZCgpO1xuXG4gICAgICAgIGlmIChzb3VyY2VWZXJ0ZXhTdHJhbmRlZCkge1xuICAgICAgICAgIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGgucmVtb3ZlVmVydGV4QnlWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRhcmdldFZlcnRleFN0cmFuZGVkKSB7XG4gICAgICAgICAgdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5yZW1vdmVWZXJ0ZXhCeVZlcnRleE5hbWUodGFyZ2V0VmVydGV4TmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmZpbHRlckN5Y2xpY0VkZ2VzKCk7XG4gIH1cblxuICByZW1vdmVFZGdlcyhlZGdlcywgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyA9IGZhbHNlKSB7XG4gICAgZWRnZXMuZm9yRWFjaCgoZWRnZSkgPT4gdGhpcy5yZW1vdmVFZGdlKGVkZ2UsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMpKTtcbiAgfVxuXG4gIGFkZEVkZ2VCeVZlcnRleE5hbWVzKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpIHtcbiAgICBjb25zdCBlZGdlID0gRWRnZS5mcm9tU291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICB0aGlzLmFkZEVkZ2UoZWRnZSk7XG4gIH1cblxuICByZW1vdmVFZGdlQnlWZXJ0ZXhOYW1lcyhzb3VyY2VWZXJ0ZXhOYW1lLCB0YXJnZXRWZXJ0ZXhOYW1lLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzID0gZmFsc2UpIHtcbiAgICBjb25zdCBlZGdlID0gRWRnZS5mcm9tU291cmNlVmVydGV4TmFtZUFuZFRhcmdldFZlcnRleE5hbWUoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICB0aGlzLnJlbW92ZUVkZ2UoZWRnZSwgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyk7XG4gIH1cblxuICByZW1vdmVFZGdlc0J5VGFyZ2V0VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzID0gZmFsc2UpIHtcbiAgICBjb25zdCBjeWNsaWNFZGdlcyA9IGVkZ2VzQnlUYXJnZXRWZXJ0ZXhOYW1lKHRhcmdldFZlcnRleE5hbWUsIHRoaXMuY3ljbGljRWRnZXMpLFxuICAgICAgICAgIGVkZ2VzID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRFZGdlc0J5VGFyZ2V0VmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgIHRoaXMucmVtb3ZlRWRnZXMoY3ljbGljRWRnZXMsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMpO1xuXG4gICAgdGhpcy5yZW1vdmVFZGdlcyhlZGdlcywgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyk7XG4gIH1cblxuICByZW1vdmVFZGdlc0J5U291cmNlVmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lLCByZW1vdmVTdHJhbmRlZFZlcnRpY2VzID0gZmFsc2UpIHtcbiAgICBjb25zdCBjeWNsaWNFZGdlcyA9IGVkZ2VzQnlTb3VyY2VWZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUsIHRoaXMuY3ljbGljRWRnZXMpLFxuICAgICAgICAgIGVkZ2VzID0gdGhpcy5kaXJlY3RlZEFjeWNsaWNHcmFwaC5nZXRFZGdlc0J5U291cmNlVmVydGV4TmFtZShzb3VyY2VWZXJ0ZXhOYW1lKTtcblxuICAgIHRoaXMucmVtb3ZlRWRnZXMoY3ljbGljRWRnZXMsIHJlbW92ZVN0cmFuZGVkVmVydGljZXMpO1xuXG4gICAgdGhpcy5yZW1vdmVFZGdlcyhlZGdlcywgcmVtb3ZlU3RyYW5kZWRWZXJ0aWNlcyk7XG4gIH1cblxuICByZW1vdmVBbGxFZGdlc0FuZFZlcnRpY2VzKCkge1xuICAgIHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGggPSBEaXJlY3RlZEFjeWNsaWNHcmFwaC5mcm9tTm90aGluZygpO1xuXG4gICAgdGhpcy5jeWNsaWNFZGdlcyA9IFtdO1xuICB9XG5cbiAgZmlsdGVyQ3ljbGljRWRnZXMoKSB7XG4gICAgZmlsdGVyKHRoaXMuY3ljbGljRWRnZXMsIChjeWNsaWNFZGdlKSA9PiB7XG4gICAgICBjb25zdCBlZGdlID0gY3ljbGljRWRnZSwgIC8vL1xuICAgICAgICAgICAgc3VjY2VzcyA9IHRoaXMuZGlyZWN0ZWRBY3ljbGljR3JhcGguYWRkRWRnZShlZGdlKTtcblxuICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VzID0gW10sXG4gICAgICAgICAgZGlyZWN0ZWRBY3ljbGljR3JhcGggPSBEaXJlY3RlZEFjeWNsaWNHcmFwaC5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGRpcmVjdGVkR3JhcGggPSBuZXcgRGlyZWN0ZWRHcmFwaChjeWNsaWNFZGdlcywgZGlyZWN0ZWRBY3ljbGljR3JhcGgpO1xuICAgIFxuICAgIHJldHVybiBkaXJlY3RlZEdyYXBoOyAgICBcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmVydGV4TGl0ZXJhbHModmVydGV4TGl0ZXJhbHMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhOYW1lcyA9IHZlcnRleE5hbWVzRnJvbVZlcnRleExpdGVyYWxzKHZlcnRleExpdGVyYWxzKSxcbiAgICAgICAgICBlZGdlcyA9IGVkZ2VzRnJvbVZlcnRleExpdGVyYWxzKHZlcnRleExpdGVyYWxzKSxcbiAgICAgICAgICBkaXJlY3RlZEdyYXBoID0gRGlyZWN0ZWRHcmFwaC5mcm9tVmVydGV4TmFtZXNBbmRFZGdlcyh2ZXJ0ZXhOYW1lcywgZWRnZXMpO1xuXG4gICAgcmV0dXJuIGRpcmVjdGVkR3JhcGg7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZlcnRleE5hbWVzQW5kRWRnZXModmVydGV4TmFtZXMsIGVkZ2VzKSB7XG4gICAgbGV0IGRpcmVjdGVkR3JhcGg7XG5cbiAgICBjb25zdCBncmFwaCA9IEdyYXBoLmZyb21WZXJ0ZXhOYW1lc0FuZEVkZ2VzKHZlcnRleE5hbWVzLCBlZGdlcyksXG4gICAgICAgICAgY3ljbGVzUHJlc2VudCA9IGdyYXBoLmFyZUN5Y2xlc1ByZXNlbnQoKTtcblxuICAgIGlmIChjeWNsZXNQcmVzZW50KSB7XG4gICAgICBjb25zdCBjeWNsaWNFZGdlcyA9IFtdLFxuICAgICAgICAgICAgZGlyZWN0ZWRBY3ljbGljR3JhcGggPSBEaXJlY3RlZEFjeWNsaWNHcmFwaC5mcm9tVmVydGV4TmFtZXModmVydGV4TmFtZXMpO1xuXG4gICAgICBkaXJlY3RlZEdyYXBoID0gbmV3IERpcmVjdGVkR3JhcGgoY3ljbGljRWRnZXMsIGRpcmVjdGVkQWN5Y2xpY0dyYXBoKTtcblxuICAgICAgZWRnZXMuZm9yRWFjaChmdW5jdGlvbihlZGdlKSB7XG4gICAgICAgIGRpcmVjdGVkR3JhcGguYWRkRWRnZShlZGdlKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0b3BvbG9naWNhbGx5T3JkZXJlZFZlcnRpY2VzID0gZ3JhcGguZ2V0VG9wb2xvZ2ljYWxseU9yZGVyZWRWZXJ0aWNlcygpLFxuICAgICAgICAgICAgY3ljbGljRWRnZXMgPSBbXSxcbiAgICAgICAgICAgIGRpcmVjdGVkQWN5Y2xpY0dyYXBoID0gRGlyZWN0ZWRBY3ljbGljR3JhcGguZnJvbVRvcG9sb2dpY2FsbHlPcmRlcmVkVmVydGljZXModG9wb2xvZ2ljYWxseU9yZGVyZWRWZXJ0aWNlcyk7XG5cbiAgICAgIGRpcmVjdGVkR3JhcGggPSBuZXcgRGlyZWN0ZWRHcmFwaChjeWNsaWNFZGdlcywgZGlyZWN0ZWRBY3ljbGljR3JhcGgpO1xuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3RlZEdyYXBoO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGlyZWN0ZWRHcmFwaDtcblxuIl19