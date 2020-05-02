"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var necessary = require("necessary");

var arrayUtilities = necessary.arrayUtilities,
    first = arrayUtilities.first;

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

module.exports = PartialCycle;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnRpYWxDeWNsZS5qcyJdLCJuYW1lcyI6WyJuZWNlc3NhcnkiLCJyZXF1aXJlIiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsIlBhcnRpYWxDeWNsZSIsInByZWRlY2Vzc29yVmVydGljZXMiLCJjeWNsaWNFZGdlIiwiY3ljbGljRWRnZVRhcmdldFZlcnRleE5hbWUiLCJnZXRUYXJnZXRWZXJ0ZXhOYW1lIiwidGFyZ2V0VmVydGV4TmFtZSIsInByZWRlY2Vzc29yVmVydGV4TmFtZXMiLCJtYXAiLCJwcmVkZWNlc3NvclZlcnRleCIsInByZWRlY2Vzc29yVmVydGV4TmFtZSIsImdldE5hbWUiLCJjeWNsaWNFZGdlU291cmNlVmVydGV4TmFtZSIsImdldFNvdXJjZVZlcnRleE5hbWUiLCJzbGljZSIsInByZWRlY2Vzc29yVmVydGljZXNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdFByZWRlY2Vzc29yVmVydGV4IiwiZmlyc3RQcmVkZWNlc3NvclZlcnRleE5hbWUiLCJzaGlmdCIsInBhcnRpYWxDeWNsZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLFNBQVMsR0FBR0MsT0FBTyxDQUFDLFdBQUQsQ0FBekI7O0FBRU0sSUFBRUMsY0FBRixHQUFxQkYsU0FBckIsQ0FBRUUsY0FBRjtBQUFBLElBQ0VDLEtBREYsR0FDWUQsY0FEWixDQUNFQyxLQURGOztJQUdBQyxZO0FBQ0osd0JBQVlDLG1CQUFaLEVBQWlDQyxVQUFqQyxFQUE2QztBQUFBOztBQUMzQyxTQUFLRCxtQkFBTCxHQUEyQkEsbUJBQTNCO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQkEsVUFBbEI7QUFDRDs7Ozs2Q0FFd0I7QUFDdkIsYUFBTyxLQUFLRCxtQkFBWjtBQUNEOzs7b0NBRWU7QUFDZCxhQUFPLEtBQUtDLFVBQVo7QUFDRDs7OzBDQUVxQjtBQUNwQixVQUFNQywwQkFBMEIsR0FBRyxLQUFLRCxVQUFMLENBQWdCRSxtQkFBaEIsRUFBbkM7QUFBQSxVQUNNQyxnQkFBZ0IsR0FBR0YsMEJBRHpCLENBRG9CLENBRWtDOztBQUV0RCxhQUFPRSxnQkFBUDtBQUNEOzs7Z0RBRTJCO0FBQzFCLFVBQU1DLHNCQUFzQixHQUFHLEtBQUtMLG1CQUFMLENBQXlCTSxHQUF6QixDQUE2QixVQUFTQyxpQkFBVCxFQUE0QjtBQUN0RixZQUFNQyxxQkFBcUIsR0FBR0QsaUJBQWlCLENBQUNFLE9BQWxCLEVBQTlCO0FBRUEsZUFBT0QscUJBQVA7QUFDRCxPQUo4QixDQUEvQjtBQU1BLGFBQU9ILHNCQUFQO0FBQ0Q7OztvREFFK0I7QUFDOUIsVUFBTUssMEJBQTBCLEdBQUcsS0FBS1QsVUFBTCxDQUFnQlUsbUJBQWhCLEVBQW5DO0FBRUEsYUFBT0QsMEJBQVA7QUFDRDs7O29EQUUrQjtBQUM5QixVQUFNUiwwQkFBMEIsR0FBRyxLQUFLRCxVQUFMLENBQWdCRSxtQkFBaEIsRUFBbkM7QUFFQSxhQUFPRCwwQkFBUDtBQUNEOzs7eURBRTJDRCxVLEVBQVlELG1CLEVBQXFCO0FBQzNFQSxNQUFBQSxtQkFBbUIsR0FBR0EsbUJBQW1CLENBQUNZLEtBQXBCLEVBQXRCLENBRDJFLENBQ3ZCOztBQUVwRCxVQUFNQyx5QkFBeUIsR0FBR2IsbUJBQW1CLENBQUNjLE1BQXREOztBQUVBLFVBQUlELHlCQUF5QixHQUFHLENBQWhDLEVBQW1DO0FBQ2pDLFlBQU1FLHNCQUFzQixHQUFHakIsS0FBSyxDQUFDRSxtQkFBRCxDQUFwQztBQUFBLFlBQ01nQiwwQkFBMEIsR0FBR0Qsc0JBQXNCLENBQUNOLE9BQXZCLEVBRG5DO0FBQUEsWUFFTVAsMEJBQTBCLEdBQUdELFVBQVUsQ0FBQ0UsbUJBQVgsRUFGbkM7O0FBSUEsWUFBSWEsMEJBQTBCLEtBQUtkLDBCQUFuQyxFQUErRDtBQUM3REYsVUFBQUEsbUJBQW1CLENBQUNpQixLQUFwQjtBQUNEO0FBQ0Y7O0FBRUQsVUFBTUMsWUFBWSxHQUFHLElBQUluQixZQUFKLENBQWlCQyxtQkFBakIsRUFBc0NDLFVBQXRDLENBQXJCO0FBRUEsYUFBT2lCLFlBQVA7QUFDRDs7Ozs7O0FBR0hDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnJCLFlBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoXCJuZWNlc3NhcnlcIik7XG5cbmNvbnN0IHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jbGFzcyBQYXJ0aWFsQ3ljbGUge1xuICBjb25zdHJ1Y3RvcihwcmVkZWNlc3NvclZlcnRpY2VzLCBjeWNsaWNFZGdlKSB7XG4gICAgdGhpcy5wcmVkZWNlc3NvclZlcnRpY2VzID0gcHJlZGVjZXNzb3JWZXJ0aWNlcztcbiAgICB0aGlzLmN5Y2xpY0VkZ2UgPSBjeWNsaWNFZGdlO1xuICB9XG4gIFxuICBnZXRQcmVkZWNlc3NvclZlcnRpY2VzKCkge1xuICAgIHJldHVybiB0aGlzLnByZWRlY2Vzc29yVmVydGljZXM7XG4gIH1cblxuICBnZXRDeWNsaWNFZGdlKCkge1xuICAgIHJldHVybiB0aGlzLmN5Y2xpY0VkZ2U7XG4gIH1cblxuICBnZXRUYXJnZXRWZXJ0ZXhOYW1lKCkge1xuICAgIGNvbnN0IGN5Y2xpY0VkZ2VUYXJnZXRWZXJ0ZXhOYW1lID0gdGhpcy5jeWNsaWNFZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKSxcbiAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gY3ljbGljRWRnZVRhcmdldFZlcnRleE5hbWU7ICAvLy9cbiAgICBcbiAgICByZXR1cm4gdGFyZ2V0VmVydGV4TmFtZTtcbiAgfVxuICBcbiAgZ2V0UHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcygpIHtcbiAgICBjb25zdCBwcmVkZWNlc3NvclZlcnRleE5hbWVzID0gdGhpcy5wcmVkZWNlc3NvclZlcnRpY2VzLm1hcChmdW5jdGlvbihwcmVkZWNlc3NvclZlcnRleCkge1xuICAgICAgY29uc3QgcHJlZGVjZXNzb3JWZXJ0ZXhOYW1lID0gcHJlZGVjZXNzb3JWZXJ0ZXguZ2V0TmFtZSgpO1xuXG4gICAgICByZXR1cm4gcHJlZGVjZXNzb3JWZXJ0ZXhOYW1lO1xuICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBwcmVkZWNlc3NvclZlcnRleE5hbWVzO1xuICB9XG4gIFxuICBnZXRDeWNsaWNFZGdlU291cmNlVmVydGV4TmFtZSgpIHtcbiAgICBjb25zdCBjeWNsaWNFZGdlU291cmNlVmVydGV4TmFtZSA9IHRoaXMuY3ljbGljRWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCk7XG4gICAgXG4gICAgcmV0dXJuIGN5Y2xpY0VkZ2VTb3VyY2VWZXJ0ZXhOYW1lO1xuICB9XG4gIFxuICBnZXRDeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZSgpIHtcbiAgICBjb25zdCBjeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZSA9IHRoaXMuY3ljbGljRWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCk7XG4gICAgXG4gICAgcmV0dXJuIGN5Y2xpY0VkZ2VUYXJnZXRWZXJ0ZXhOYW1lO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbUN5Y2xpY0VkZ2VBbmRQcmVkZWNlc3NvclZlcnRpY2VzKGN5Y2xpY0VkZ2UsIHByZWRlY2Vzc29yVmVydGljZXMpIHtcbiAgICBwcmVkZWNlc3NvclZlcnRpY2VzID0gcHJlZGVjZXNzb3JWZXJ0aWNlcy5zbGljZSgpOyAgLy8vXG4gICAgXG4gICAgY29uc3QgcHJlZGVjZXNzb3JWZXJ0aWNlc0xlbmd0aCA9IHByZWRlY2Vzc29yVmVydGljZXMubGVuZ3RoO1xuXG4gICAgaWYgKHByZWRlY2Vzc29yVmVydGljZXNMZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBmaXJzdFByZWRlY2Vzc29yVmVydGV4ID0gZmlyc3QocHJlZGVjZXNzb3JWZXJ0aWNlcyksXG4gICAgICAgICAgICBmaXJzdFByZWRlY2Vzc29yVmVydGV4TmFtZSA9IGZpcnN0UHJlZGVjZXNzb3JWZXJ0ZXguZ2V0TmFtZSgpLFxuICAgICAgICAgICAgY3ljbGljRWRnZVRhcmdldFZlcnRleE5hbWUgPSBjeWNsaWNFZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKTtcblxuICAgICAgaWYgKGZpcnN0UHJlZGVjZXNzb3JWZXJ0ZXhOYW1lID09PSBjeWNsaWNFZGdlVGFyZ2V0VmVydGV4TmFtZSkge1xuICAgICAgICBwcmVkZWNlc3NvclZlcnRpY2VzLnNoaWZ0KCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcGFydGlhbEN5Y2xlID0gbmV3IFBhcnRpYWxDeWNsZShwcmVkZWNlc3NvclZlcnRpY2VzLCBjeWNsaWNFZGdlKTtcbiAgICBcbiAgICByZXR1cm4gcGFydGlhbEN5Y2xlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGFydGlhbEN5Y2xlO1xuXG4iXX0=