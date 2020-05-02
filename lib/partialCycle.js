"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _necessary = require("necessary");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var first = _necessary.arrayUtilities.first;

var PartialCycle = /*#__PURE__*/function () {
  function PartialCycle(predecessorVertices, cyclicEdge) {
    _classCallCheck(this, PartialCycle);

    this.predecessorVertices = predecessorVertices;
    this.cyclicEdge = cyclicEdge;
  }

  _createClass(PartialCycle, [{
    key: "getPredecessorVertices",
    value: function getPredecessorVertices() {
      return this.predecessorVertices;
    }
  }, {
    key: "getCyclicEdge",
    value: function getCyclicEdge() {
      return this.cyclicEdge;
    }
  }, {
    key: "getTargetVertexName",
    value: function getTargetVertexName() {
      var cyclicEdgeTargetVertexName = this.cyclicEdge.getTargetVertexName(),
          targetVertexName = cyclicEdgeTargetVertexName; ///

      return targetVertexName;
    }
  }, {
    key: "getPredecessorVertexNames",
    value: function getPredecessorVertexNames() {
      var predecessorVertexNames = this.predecessorVertices.map(function (predecessorVertex) {
        var predecessorVertexName = predecessorVertex.getName();
        return predecessorVertexName;
      });
      return predecessorVertexNames;
    }
  }, {
    key: "getCyclicEdgeSourceVertexName",
    value: function getCyclicEdgeSourceVertexName() {
      var cyclicEdgeSourceVertexName = this.cyclicEdge.getSourceVertexName();
      return cyclicEdgeSourceVertexName;
    }
  }, {
    key: "getCyclicEdgeTargetVertexName",
    value: function getCyclicEdgeTargetVertexName() {
      var cyclicEdgeTargetVertexName = this.cyclicEdge.getTargetVertexName();
      return cyclicEdgeTargetVertexName;
    }
  }], [{
    key: "fromCyclicEdgeAndPredecessorVertices",
    value: function fromCyclicEdgeAndPredecessorVertices(cyclicEdge, predecessorVertices) {
      predecessorVertices = predecessorVertices.slice(); ///

      var predecessorVerticesLength = predecessorVertices.length;

      if (predecessorVerticesLength > 0) {
        var firstPredecessorVertex = first(predecessorVertices),
            firstPredecessorVertexName = firstPredecessorVertex.getName(),
            cyclicEdgeTargetVertexName = cyclicEdge.getTargetVertexName();

        if (firstPredecessorVertexName === cyclicEdgeTargetVertexName) {
          predecessorVertices.shift();
        }
      }

      var partialCycle = new PartialCycle(predecessorVertices, cyclicEdge);
      return partialCycle;
    }
  }]);

  return PartialCycle;
}();

exports["default"] = PartialCycle;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnRpYWxDeWNsZS5qcyJdLCJuYW1lcyI6WyJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiUGFydGlhbEN5Y2xlIiwicHJlZGVjZXNzb3JWZXJ0aWNlcyIsImN5Y2xpY0VkZ2UiLCJjeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZSIsImdldFRhcmdldFZlcnRleE5hbWUiLCJ0YXJnZXRWZXJ0ZXhOYW1lIiwicHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcyIsIm1hcCIsInByZWRlY2Vzc29yVmVydGV4IiwicHJlZGVjZXNzb3JWZXJ0ZXhOYW1lIiwiZ2V0TmFtZSIsImN5Y2xpY0VkZ2VTb3VyY2VWZXJ0ZXhOYW1lIiwiZ2V0U291cmNlVmVydGV4TmFtZSIsInNsaWNlIiwicHJlZGVjZXNzb3JWZXJ0aWNlc0xlbmd0aCIsImxlbmd0aCIsImZpcnN0UHJlZGVjZXNzb3JWZXJ0ZXgiLCJmaXJzdFByZWRlY2Vzc29yVmVydGV4TmFtZSIsInNoaWZ0IiwicGFydGlhbEN5Y2xlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOzs7Ozs7OztJQUVRQSxLLEdBQVVDLHlCLENBQVZELEs7O0lBRWFFLFk7QUFDbkIsd0JBQVlDLG1CQUFaLEVBQWlDQyxVQUFqQyxFQUE2QztBQUFBOztBQUMzQyxTQUFLRCxtQkFBTCxHQUEyQkEsbUJBQTNCO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQkEsVUFBbEI7QUFDRDs7Ozs2Q0FFd0I7QUFDdkIsYUFBTyxLQUFLRCxtQkFBWjtBQUNEOzs7b0NBRWU7QUFDZCxhQUFPLEtBQUtDLFVBQVo7QUFDRDs7OzBDQUVxQjtBQUNwQixVQUFNQywwQkFBMEIsR0FBRyxLQUFLRCxVQUFMLENBQWdCRSxtQkFBaEIsRUFBbkM7QUFBQSxVQUNNQyxnQkFBZ0IsR0FBR0YsMEJBRHpCLENBRG9CLENBRWtDOztBQUV0RCxhQUFPRSxnQkFBUDtBQUNEOzs7Z0RBRTJCO0FBQzFCLFVBQU1DLHNCQUFzQixHQUFHLEtBQUtMLG1CQUFMLENBQXlCTSxHQUF6QixDQUE2QixVQUFDQyxpQkFBRCxFQUF1QjtBQUNqRixZQUFNQyxxQkFBcUIsR0FBR0QsaUJBQWlCLENBQUNFLE9BQWxCLEVBQTlCO0FBRUEsZUFBT0QscUJBQVA7QUFDRCxPQUo4QixDQUEvQjtBQU1BLGFBQU9ILHNCQUFQO0FBQ0Q7OztvREFFK0I7QUFDOUIsVUFBTUssMEJBQTBCLEdBQUcsS0FBS1QsVUFBTCxDQUFnQlUsbUJBQWhCLEVBQW5DO0FBRUEsYUFBT0QsMEJBQVA7QUFDRDs7O29EQUUrQjtBQUM5QixVQUFNUiwwQkFBMEIsR0FBRyxLQUFLRCxVQUFMLENBQWdCRSxtQkFBaEIsRUFBbkM7QUFFQSxhQUFPRCwwQkFBUDtBQUNEOzs7eURBRTJDRCxVLEVBQVlELG1CLEVBQXFCO0FBQzNFQSxNQUFBQSxtQkFBbUIsR0FBR0EsbUJBQW1CLENBQUNZLEtBQXBCLEVBQXRCLENBRDJFLENBQ3ZCOztBQUVwRCxVQUFNQyx5QkFBeUIsR0FBR2IsbUJBQW1CLENBQUNjLE1BQXREOztBQUVBLFVBQUlELHlCQUF5QixHQUFHLENBQWhDLEVBQW1DO0FBQ2pDLFlBQU1FLHNCQUFzQixHQUFHbEIsS0FBSyxDQUFDRyxtQkFBRCxDQUFwQztBQUFBLFlBQ01nQiwwQkFBMEIsR0FBR0Qsc0JBQXNCLENBQUNOLE9BQXZCLEVBRG5DO0FBQUEsWUFFTVAsMEJBQTBCLEdBQUdELFVBQVUsQ0FBQ0UsbUJBQVgsRUFGbkM7O0FBSUEsWUFBSWEsMEJBQTBCLEtBQUtkLDBCQUFuQyxFQUErRDtBQUM3REYsVUFBQUEsbUJBQW1CLENBQUNpQixLQUFwQjtBQUNEO0FBQ0Y7O0FBRUQsVUFBTUMsWUFBWSxHQUFHLElBQUluQixZQUFKLENBQWlCQyxtQkFBakIsRUFBc0NDLFVBQXRDLENBQXJCO0FBRUEsYUFBT2lCLFlBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnRpYWxDeWNsZSB7XG4gIGNvbnN0cnVjdG9yKHByZWRlY2Vzc29yVmVydGljZXMsIGN5Y2xpY0VkZ2UpIHtcbiAgICB0aGlzLnByZWRlY2Vzc29yVmVydGljZXMgPSBwcmVkZWNlc3NvclZlcnRpY2VzO1xuICAgIHRoaXMuY3ljbGljRWRnZSA9IGN5Y2xpY0VkZ2U7XG4gIH1cbiAgXG4gIGdldFByZWRlY2Vzc29yVmVydGljZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlZGVjZXNzb3JWZXJ0aWNlcztcbiAgfVxuXG4gIGdldEN5Y2xpY0VkZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3ljbGljRWRnZTtcbiAgfVxuXG4gIGdldFRhcmdldFZlcnRleE5hbWUoKSB7XG4gICAgY29uc3QgY3ljbGljRWRnZVRhcmdldFZlcnRleE5hbWUgPSB0aGlzLmN5Y2xpY0VkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgIHRhcmdldFZlcnRleE5hbWUgPSBjeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZTsgIC8vL1xuICAgIFxuICAgIHJldHVybiB0YXJnZXRWZXJ0ZXhOYW1lO1xuICB9XG4gIFxuICBnZXRQcmVkZWNlc3NvclZlcnRleE5hbWVzKCkge1xuICAgIGNvbnN0IHByZWRlY2Vzc29yVmVydGV4TmFtZXMgPSB0aGlzLnByZWRlY2Vzc29yVmVydGljZXMubWFwKChwcmVkZWNlc3NvclZlcnRleCkgPT4ge1xuICAgICAgY29uc3QgcHJlZGVjZXNzb3JWZXJ0ZXhOYW1lID0gcHJlZGVjZXNzb3JWZXJ0ZXguZ2V0TmFtZSgpO1xuXG4gICAgICByZXR1cm4gcHJlZGVjZXNzb3JWZXJ0ZXhOYW1lO1xuICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBwcmVkZWNlc3NvclZlcnRleE5hbWVzO1xuICB9XG4gIFxuICBnZXRDeWNsaWNFZGdlU291cmNlVmVydGV4TmFtZSgpIHtcbiAgICBjb25zdCBjeWNsaWNFZGdlU291cmNlVmVydGV4TmFtZSA9IHRoaXMuY3ljbGljRWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCk7XG4gICAgXG4gICAgcmV0dXJuIGN5Y2xpY0VkZ2VTb3VyY2VWZXJ0ZXhOYW1lO1xuICB9XG4gIFxuICBnZXRDeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZSgpIHtcbiAgICBjb25zdCBjeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZSA9IHRoaXMuY3ljbGljRWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCk7XG4gICAgXG4gICAgcmV0dXJuIGN5Y2xpY0VkZ2VUYXJnZXRWZXJ0ZXhOYW1lO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbUN5Y2xpY0VkZ2VBbmRQcmVkZWNlc3NvclZlcnRpY2VzKGN5Y2xpY0VkZ2UsIHByZWRlY2Vzc29yVmVydGljZXMpIHtcbiAgICBwcmVkZWNlc3NvclZlcnRpY2VzID0gcHJlZGVjZXNzb3JWZXJ0aWNlcy5zbGljZSgpOyAgLy8vXG4gICAgXG4gICAgY29uc3QgcHJlZGVjZXNzb3JWZXJ0aWNlc0xlbmd0aCA9IHByZWRlY2Vzc29yVmVydGljZXMubGVuZ3RoO1xuXG4gICAgaWYgKHByZWRlY2Vzc29yVmVydGljZXNMZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBmaXJzdFByZWRlY2Vzc29yVmVydGV4ID0gZmlyc3QocHJlZGVjZXNzb3JWZXJ0aWNlcyksXG4gICAgICAgICAgICBmaXJzdFByZWRlY2Vzc29yVmVydGV4TmFtZSA9IGZpcnN0UHJlZGVjZXNzb3JWZXJ0ZXguZ2V0TmFtZSgpLFxuICAgICAgICAgICAgY3ljbGljRWRnZVRhcmdldFZlcnRleE5hbWUgPSBjeWNsaWNFZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKTtcblxuICAgICAgaWYgKGZpcnN0UHJlZGVjZXNzb3JWZXJ0ZXhOYW1lID09PSBjeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZSkge1xuICAgICAgICBwcmVkZWNlc3NvclZlcnRpY2VzLnNoaWZ0KCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcGFydGlhbEN5Y2xlID0gbmV3IFBhcnRpYWxDeWNsZShwcmVkZWNlc3NvclZlcnRpY2VzLCBjeWNsaWNFZGdlKTtcbiAgICBcbiAgICByZXR1cm4gcGFydGlhbEN5Y2xlO1xuICB9XG59XG4iXX0=